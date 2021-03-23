<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Audio-only Example - Record Plugin for Video.js</title>

    <link href="../../../node_modules/video.js/dist/video-js.min.css" rel="stylesheet">
    <link href="../../../node_modules/videojs-wavesurfer/dist/css/videojs.wavesurfer.min.css" rel="stylesheet">
    <link href="videojs.record.css" rel="stylesheet">
    <!-- <link href="examples.css" rel="stylesheet"> -->

    <script src="../../../node_modules/video.js/dist/video.min.js"></script>
    <script src="../../../node_modules/recordrtc/RecordRTC.js"></script>
    <script src="../../../node_modules/webrtc-adapter/out/adapter.js"></script>
    <script src="../../../node_modules/wavesurfer.js/dist/wavesurfer.min.js"></script>
    <script src="../../../node_modules/wavesurfer.js/dist/plugin/wavesurfer.microphone.min.js"></script>
    <script src="../../../node_modules/videojs-wavesurfer/dist/videojs.wavesurfer.min.js"></script>

    <script src="videojs.record.js"></script>

    <script src="browser-workarounds.js"></script>

    <!-- <script src="recorder.js"></script> -->
    <script src="../../../node_modules/cloudinary-react/dist/cloudinary-react.js"></script>


    <style>
        /* change player background color */
        #myAudio {
            background-color: #9FD6BA;
        }
    </style>

</head>

<body>

    <audio id="myAudio" class="video-js vjs-default-skin"></audio>
    <div id="data"></div>
    
    <script>
        /* eslint-disable */
        var options = {
            controls: true,
            bigPlayButton: false,
            width: 600,
            height: 300,
            fluid: false,
            plugins: {
                wavesurfer: {
                    backend: 'WebAudio',
                    waveColor: '#36393b',
                    progressColor: 'black',
                    displayMilliseconds: true,
                    debug: true,
                    cursorWidth: 1,
                    hideScrollbar: true,
                    plugins: [
                        // enable microphone plugin
                        WaveSurfer.microphone.create({
                            bufferSize: 4096,
                            numberOfInputChannels: 1,
                            numberOfOutputChannels: 1,
                            constraints: {
                                video: false,
                                audio: true
                            }
                        })
                    ]
                },
                record: {
                    audio: true,
                    video: false,
                    maxLength: 20,
                    displayMilliseconds: true,
                    debug: true
                }
            }
        };

        // apply audio workarounds for certain browsers
        applyAudioWorkaround();

        // create player
        var player = videojs('myAudio', options, function () {
            // print version information at startup
            var msg = 'Using video.js ' + videojs.VERSION +
                ' with videojs-record ' + videojs.getPluginVersion('record') +
                ', videojs-wavesurfer ' + videojs.getPluginVersion('wavesurfer') +
                ', wavesurfer.js ' + WaveSurfer.VERSION + ' and recordrtc ' +
                RecordRTC.version;
            videojs.log(msg);
        });

        // error handling
        player.on('deviceError', function () {
            console.log('device error:', player.deviceErrorCode);
        });

        player.on('error', function (element, error) {
            console.error(error);
        });

        // user clicked the record button and started recording
        player.on('startRecord', function () {
            console.log('started recording!');
        });

        // user completed recording and stream is available
        // player.on('finishRecord', function () {
        //     // the blob object contains the recorded data that
        //     // can be downloaded by the user, stored on server etc.
        //     console.log('finished recording: ', player.recordedData);
        //     player.record().saveAs({ 'audio': 'my-audio-file-name.mp3' });
        // });

        //Need to convert the audio to mp3 and video to mp4 then store

        // import { Cloudinary } from 'cloudinary-react';
        var cloudinary = require "cloudinary-react";

        cloudinary.v2.api.create_upload_preset(
            {
                name: "dwvyezjj",
                unsigned: true
            },
            function (error, result) { console.log(result); });

        //CODE FOR UPLOAD WHEN WE ARE READY TO STORE IN DATABASE
        player.on('finishRecord', function () {
            // the blob object contains the recorded data that
            // can be downloaded by the user, stored on server etc.
            console.log('finished recording:', player.recordedData);

            var data = player.recordedData;
            var serverUrl = 'https://api.cloudinary.com/v1_1/exquisite-corpse-sound-bath/auto/upload';
            var formData = new FormData();
            formData.append('file', data, data.name);

            console.log('uploading recording:', data.name);

            fetch(serverUrl, {
                method: 'POST',
                body: formData
            }).then((response) => {
                return response.text();
            }).then((data) => {
                document.getElementById("data").innerHTML += data;
            }).then(
                success => console.log('recording upload complete.')
            ).catch(
                error => console.error('an upload error occurred!')
            );
        });



    </script>

</body>

</html>