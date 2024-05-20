import * as lancedb from "vectordb";
import { LanceDB } from "@langchain/community/vectorstores/lancedb";
import { OpenAIEmbeddings } from "@langchain/openai";
import dotenv from "dotenv";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

dotenv.config();
const uri = "data/sample-lancedb";
const db = await lancedb.connect(uri);

const table = await db.createTable("vectors1", [
    {
        vector: Array(1536), text: "sample",
        source: "example.txt",
        loc: {
            lines: {
                from: 1,
                to: 1,
            },
        },
    },

],
    {
        writeMode: lancedb.WriteMode.Overwrite,
    });


const loader = new TextLoader("example.txt");
const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 1,
});

const vectorStore = new LanceDB(new OpenAIEmbeddings(
    {
        apiKey: process.env.OPENAI_KEY,
        verbose: true,
        configuration: {
            baseURL: 'https://aigptx.top/v1',
        }
    }

), { table });

const docs = await loader.load();

const splitDocs = await splitter.splitDocuments(docs);


// const docs = await loader.load()

// const result = await vectorStore.addDocuments(docs)
const row = await table.countRows();


console.log(row);

const resultOne = await vectorStore.similaritySearch("微博", 2);
console.log(resultOne);
