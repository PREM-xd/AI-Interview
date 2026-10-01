import { useNavigate } from "react-router-dom"
import LoginModel from "../components/LoginModel"

function LoginPage({ setUser }) {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-[#fbfcff]">
            <LoginModel
                setUser={setUser}
                onClose={() => navigate("/")}
            />
        </div>
    )
}

export default LoginPage
