import React from 'react'
import { Routes , Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser } from './apis/user.api'
import Scorer from './pages/Scorer'
import { getResume } from './apis/resume.api'
import { useDispatch } from 'react-redux'
import { setResume } from './redux/resumeSlice'
import InterviewStart from './pages/InterviewStart'
import InterviewPage from './pages/InterviewPage'
import InterviewReport from './pages/InterviewReport'
import Billing from './pages/Billing'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './utils/firebase'
import api from './utils/axios'

function App() {
  const [user,setUser]= useState(null)
  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(()=>{

    const getUser = async () => {
      try {
        const firebaseUser = await new Promise((resolve) => {
          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            unsubscribe()
            resolve(currentUser)
          })
        })

        if (firebaseUser) {
          const token = await firebaseUser.getIdToken()
          const response = await api.post("/api/auth/login", { token })
          setUser(response?.data?.user)

          if (sessionStorage.getItem("freshai-login-pending") === "true") {
            sessionStorage.removeItem("freshai-login-pending")
            navigate("/dashboard", { replace: true })
          }
        } else {
          const data = await getCurrentUser()
          setUser(data?.user)
        }
      } catch (error) {
        console.error("Authentication failed", error)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    getUser()

  },[])

  useEffect(()=>{

    const getResumeData = async()=>{
      if (!user) return

      const result = await getResume()
      dispatch(setResume(result?.data))
    }

    getResumeData()

  },[user, dispatch])


  if(loading){
    return(
      <div className="fixed top-0 left-0 w-full z-[9999]">
        <div className="h-1 bg-black animate-pulse w-full" />
      </div>
    )
  }

  return (
   <>

   <Routes>
    <Route path='/' element={<Home setUser={setUser}/>} />

    <Route path='/dashboard' element={
      user ? <Dashboard user={user} setUser={setUser}/> 
      : <Navigate to="/" replace/> }/>

      <Route path='/scorer' element={
      user ? <Scorer user={user} setUser={setUser}/> 
      : <Navigate to="/" replace/> }/>

      <Route path='/interview' element={
      user ? <InterviewStart user={user} setUser={setUser}/> 
      : <Navigate to="/" replace/> }/>

      <Route path='/interview/:id' element={
      user ? <InterviewPage user={user} setUser={setUser}/> 
      : <Navigate to="/" replace/> }/>

      <Route path='/interview/:id/report' element={
      user ? <InterviewReport user={user} setUser={setUser}/> 
      : <Navigate to="/" replace/> }/>

      <Route path='/billing' element={
      user ? <Billing user={user} setUser={setUser}/> 
      : <Navigate to="/" replace/> }/>


   </Routes>
   </>
  )
}

export default App
