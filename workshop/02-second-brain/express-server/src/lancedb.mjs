import * as lancedb from "vectordb";
import { LanceDB } from "@langchain/community/vectorstores/lancedb";
import { OpenAIEmbeddings } from "@langchain/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
import { MozillaReadabilityTransformer } from "@langchain/community/document_transformers/mozilla_readability";
async function initDB() {
    const uri = "data/sample-lancedb";
    const db = await lancedb.connect(uri);

    const tableNames = await db.tableNames();
    let table = null;
    if (tableNames.includes("webpage")) {
        table = await db.openTable("webpage");
    } else {
        table = await db.createTable(
            "webpage",
            [
                {
                    vector: Array(1536),
                    text: "sample",
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
            }
        );
    }

    const vectorStore = new LanceDB(
        new OpenAIEmbeddings({
            apiKey: process.env.OPENAI_KEY,
            verbose: true,
            configuration: {
                baseURL: "https://aigptx.top/v1",
            },
        }),
        { table }
    );

    return vectorStore;
}

async function indexWebPage(link) {
    const loader = new CheerioWebBaseLoader(
        `https://r.jina.ai/${link}`
    );

    const docs = await loader.load();
    const splitter = RecursiveCharacterTextSplitter.fromLanguage("html");
    const transformer = new MozillaReadabilityTransformer();
    const sequence = splitter.pipe(transformer);

    const newDocuments = await sequence.invoke(docs);

    vectorStore.addDocuments(newDocuments);
    return newDocuments;
}

const vectorStore = await initDB();

export { vectorStore, indexWebPage };
