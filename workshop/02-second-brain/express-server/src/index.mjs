import express from 'express';
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";

import './load-env.mjs'
// src/index.js

import { vectorStore, indexWebPage } from './lancedb.mjs';

import { modelGPT4O, questionAnsweringPrompt } from './utils.mjs';


console.log('---------------------', process.env.OPENAI_KEY);
const app = express();
const port = process.env.PORT;

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});
app.post('/api/chat', async (req, res) => {
    const { input } = req.body;
    if (!input) {
        res.status(400).json({ message: 'Web link is required' });
        return;
    }
    const retriever = vectorStore.asRetriever();
    const combineDocsChain = await createStuffDocumentsChain({
        llm: modelGPT4O,
        prompt: questionAnsweringPrompt,
    });
    const retrievalChain = await createRetrievalChain({
        combineDocsChain,
        retriever,
    });

    const chainRes = await retrievalChain.invoke({ input });
    res.json(chainRes);
});

app.post('/api/docs/create', async (req, res) => {
    const { webLink } = req.body;
    if (webLink) {
        const result = await indexWebPage(webLink);
        res.json(result);
    } else {
        // http 400
        res.status(400).json({ message: 'Web link is required' });
    }
    // res.json({ message: 'Hello from the server!' });
});

app.post('/api/docs/search', async (req, res) => {
    const { search } = req.body;
    if (search) {
        const results = await vectorStore.similaritySearch(search, 2)
        console.log(results);
        res.json({ results });
    } else {
        // http 400
        res.status(400).json({ message: 'Search query is required' });
    }
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
