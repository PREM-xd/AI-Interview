import llm from "../config/llm.js";
import summaryPrompt from "../prompts/summaryPrompt.js";

export const summaryAgent = async (data) => {
    let response;

    try {
        const prompt = summaryPrompt(data)

        response = await llm.invoke(prompt)

        const cleaned = response.content
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

        return JSON.parse(cleaned)
    } catch (error) {
    console.log("Summary Agent Error", error);
    console.log(response?.content);

    throw new Error("Failed to generate Summary");
        
    }
}