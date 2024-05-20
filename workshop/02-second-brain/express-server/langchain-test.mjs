import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const loader = new TextLoader("example.txt");
const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 10,
    chunkOverlap: 1,
});

const docs = await loader.loadAndSplit(splitter);

// Document {
//     pageContent: '索非常稳。',
//     metadata: { source: 'example.txt', loc: [Object] }
//   },


console.log(docs);