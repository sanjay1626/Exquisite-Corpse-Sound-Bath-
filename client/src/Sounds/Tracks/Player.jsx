import React from 'react';
import "bootstrap"
import * as Tone from 'tone';


const Player = () => {
    return (
        <div>
            <div id='tone-example' label="ECSB">
                <div id='tone-loader'></div>
                <button onClick={createPlayer}>Load Sounds</button>
                <div slot="explanation">
                    <p>The player pulls three random sounds from the sample Database and syncs them to the start button.</p>
                </div>
                {/* {createPlayer()} */}
                <div id="content">
                    {/* To add - possible wait for the buffer to finish before loading the buttons */}
                    <button onClick={startPlay}>Start</button>
                    <button onClick={stopPlay}>Stop</button>

                    {/* <div id="tracks">
                        <div id="progress"></div>
                        <img src="https://tonejs.github.io/audio/loop/drum_loop.png" />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

let layer1, layer2, layer3, toggle;


function createPlayer(e) {
    e.preventDefault();
    // toggle = Tone.Transport;
    // // set the transport
    // toggle.bpm.value = 108;
    // toggle.loop = true;
    // toggle.loopStart = "4m";
    // toggle.loopEnd = "8m";

    layer1 = new Tone.Player({
        url: "https://res.cloudinary.com/exquisite-corpse-sound-bath/video/upload/v1615663107/InkyBoisSound_r0gdgd.mp3",
        loop: true
    }).toDestination();
    // .sync().start(0)
    layer2 = new Tone.Player({
        url: "https://res.cloudinary.com/exquisite-corpse-sound-bath/video/upload/v1616265722/autrfo5tdnhh35q0lh4l.wav",
        loop: true
    }).toDestination();
    // .sync().start("2n")
    layer3 = new Tone.Player({
        url: "https://tonejs.github.io/audio/loop/hh.mp3",
        loop: true
    }).toDestination();
    // .sync().start("3:3", "4n")
   
    // // keep the playhead on track
    // setInterval(() => {
    //     // scale it between 0-1
    //     const progress = (Tone.Transport.progress + 1) / 2;
    //     document.querySelector("#progress").style = `left: ${progress * 100}%`;
    // }, 16);
    // }
}

// connect the UI with the components
function startPlay(e) {
    e.preventDefault();
    // toggle.start();
    layer1.start();
    layer2.start();
    layer3.start();
}

function stopPlay(e) {
    e.preventDefault();
    layer1.stop();
    layer2.stop();
    layer3.stop();
}

//-----------------------------------------------RECORDER CODE -----------------------------------------------------------//
// const recorder = new Tone.Recorder();
// const synth = new Tone.Synth().connect(recorder);

//     recorder.start();



// function startPLay(e) {
//     e.preventDefault();
//     Tone.Transport.start();
// };
// // wait for the notes to end and stop the recording
// setTimeout(async () => {
//     // the recorded audio is returned as a blob
//     const recording = await recorder.stop();
//     // download the recording by creating an anchor element and blob url
//     const url = URL.createObjectURL(recording);
//     const anchor = document.createElement("a");
//     anchor.download = "recording.webm";
//     anchor.href = url;
//     anchor.click();
// }, 4000);
// }
//-----------------------------------------------RECORDER CODE -----------------------------------------------------------//

export default Player;