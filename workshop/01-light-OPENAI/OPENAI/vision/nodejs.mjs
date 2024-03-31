// ffmpeg -i input.mp4 -vf "select=not(mod(n\,50))" -vsync vfr output_%03d.png

// import ffmpegStatic from "ffmpeg-static";
// import ffmpeg from "fluent-ffmpeg";

// // Tell fluent-ffmpeg where it can find FFmpeg
// ffmpeg.setFfmpegPath(ffmpegStatic);

// ffmpeg("input.mp4");

import ytdl from 'ytdl-core';
import fs from 'fs';
import { HttpsProxyAgent } from "https-proxy-agent";
const agent = new HttpsProxyAgent('http://172.31.0.1:1090');

ytdl('https://www.youtube.com/watch?v=kQ_7GtE529M', {
    requestOptions: {
        agent
    }
}).pipe(fs.createWriteStream('video.mp4'))