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

//define an audio element
<audio id="myAudio" class="video-js vjs-default-skin"></audio>


//define the player configuration and enable the videojs-record plugin by adding a 'record' entry
let options = {
    // video.js options
    controls: true,
    bigPlayButton: false,
    loop: false,
    fluid: false,
    width: 320,
    height: 240,
    plugins: {
        // videojs-record plugin options
        record: {
            image: false,
            audio: false,
            video: true,
            maxLength: 5,
            displayMilliseconds: true,
            debug: true
        }
    }
};


//Finally create the player
let player = videojs('myVideo', options, function() {
    // print version information at startup
    const msg = 'Using video.js ' + videojs.VERSION +
        ' with videojs-record ' + videojs.getPluginVersion('record');
    videojs.log(msg);

    console.log("videojs-record is ready!");
});