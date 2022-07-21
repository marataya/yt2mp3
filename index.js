const fs = require('fs');
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');

const url = 'https://www.youtube.com/watch?v=TEff-zNJntE'
const mp4 = './video.mp4'
const mp3 = './audio.mp3'
// ytdl(url).pipe(fs.createWriteStream(mp4)).pipe()
const stream = ytdl(url);

// Once the download is complete, I convert the mp4 into mp3 using the fluent - ffmpeg module, like so:

const proc = new ffmpeg({ source: stream })
proc.setFfmpegPath('/usr/bin/ffmpeg')
proc.saveToFile(mp3, function (err, file) {
    if (err) throw err
    console.log('file: ' + file)
})
