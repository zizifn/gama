import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const modelGPT4O = new ChatOpenAI({
    model: "gpt-4o",
    apiKey: process.env.OPENAI_KEY,
    verbose: true,
    configuration: {
        baseURL: "https://aigptx.top/v1",
    },
});
const questionAnsweringPrompt = ChatPromptTemplate.fromMessages([
    [
        "system",
        "Answer the user's questions based on the below context:\n\n{context}",
    ],
    ["human", "{input}"],
]);

export { modelGPT4O, questionAnsweringPrompt };
