//import video.js stylesheet and library
import 'video.js/dist/video-js.min.css';
import videojs from 'video.js';

//import RTC
import RecordRTC from 'recordrtc';

//extra stylesheet for plugin that includes custom font
import 'videojs-record/dist/css/videojs.record.css';

//videojs-record plugin will automatically register itself after importing
import Record from 'videojs-record/dist/videojs.record.js';

//When recording either audio/video, video-only, screen-only, audio/screen, animated GIF or a single image, include a video element
<video id="myVideo" playsinline class="video-js vjs-default-skin"></video>

//for recording audio-only
import WaveSurfer from 'wavesurfer.js';
import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.js';
WaveSurfer.microphone = MicrophonePlugin;

// register videojs-wavesurfer plugin
import 'videojs-wavesurfer/dist/css/videojs.wavesurfer.css';
import Wavesurfer from 'videojs-wavesurfer/dist/videojs.wavesurfer.js';

// import cloudinary-react to upload files tp url
import { Cloudinary } from "cloudinary-react";


//define an audio element
<audio id="myAudio" class="video-js vjs-default-skin"></audio>


// //define the player configuration and enable the videojs-record plugin by adding a 'record' entry
// let options = {
//     controls: true,
//     bigPlayButton: false,
//     width: 600,
//     height: 300,
//     fluid: false,
//     plugins: {
//         wavesurfer: {
//             backend: 'WebAudio',
//             waveColor: '#36393b',
//             progressColor: 'black',
//             displayMilliseconds: true,
//             debug: true,
//             cursorWidth: 1,
//             hideScrollbar: true,
//             plugins: [
//                 // enable microphone plugin
//                 WaveSurfer.microphone.create({
//                     bufferSize: 4096,
//                     numberOfInputChannels: 1,
//                     numberOfOutputChannels: 1,
//                     constraints: {
//                         video: false,
//                         audio: true
//                     }
//                 })
//             ]
//         },
//         record: {
//             audio: true,
//             video: false,
//             maxLength: 20,
//             displayMilliseconds: true,
//             debug: true
//         }
//     }
// };

// // apply audio workarounds for certain browsers
// applyAudioWorkaround();

// // create player
// let player = videojs('myAudio', options, function () {
//     // print version information at startup
//     var msg = 'Using video.js ' + videojs.VERSION +
//         ' with videojs-record ' + videojs.getPluginVersion('record') +
//         ', videojs-wavesurfer ' + videojs.getPluginVersion('wavesurfer') +
//         ', wavesurfer.js ' + WaveSurfer.VERSION + ' and recordrtc ' +
//         RecordRTC.version;
//     videojs.log(msg);
// });

// // error handling
// player.on('deviceError', function () {
//     console.log('device error:', player.deviceErrorCode);
// });

// player.on('error', function (element, error) {
//     console.error(error);
// });

// // user clicked the record button and started recording
// player.on('startRecord', function () {
//     console.log('started recording!');
// });

// // user completed recording and stream is available
// // player.on('finishRecord', function () {
// //     // the blob object contains the recorded data that
// //     // can be downloaded by the user, stored on server etc.
// //     console.log('finished recording: ', player.recordedData);
// //     player.record().saveAs({ 'audio': 'my-audio-file-name.mp3' });
// // });

// //Need to convert the audio to mp3 and video to mp4 then store

// import { Cloudinary } from 'cloudinary-react';

// cloudinary.v2.api.create_upload_preset(
//     {
//         name: "dwvyezjj",
//         unsigned: true
//     },
//     function (error, result) { console.log(result); });

// //CODE FOR UPLOAD WHEN WE ARE READY TO STORE IN DATABASE
// player.on('finishRecord', function () {
//     // the blob object contains the recorded data that
//     // can be downloaded by the user, stored on server etc.
//     console.log('finished recording:', player.recordedData);

//     var data = player.recordedData;
//     var serverUrl = 'https://api.cloudinary.com/v1_1/exquisite-corpse-sound-bath/auto/upload';
//     var formData = new FormData();
//     formData.append('file', data, data.name);

//     console.log('uploading recording:', data.name);

//     fetch(serverUrl, {
//         method: 'POST',
//         body: formData
//     }).then((response) => {
//         return response.text();
//     }).then((data) => {
//         document.getElementById("data").innerHTML += data;
//     }).then(
//         success => console.log('recording upload complete.')
//     ).catch(
//         error => console.error('an upload error occurred!')
//     );
// });
