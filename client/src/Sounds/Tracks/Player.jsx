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


    //Randomly grab 3 URLs from the database and use them in the players
    //temporary array to represent database for now
    let dbArray = [
        "https://res.cloudinary.com/exquisite-corpse-sound-bath/video/upload/v1615663107/InkyBoisSound_r0gdgd.mp3",
        "https://res.cloudinary.com/exquisite-corpse-sound-bath/video/upload/v1616265722/autrfo5tdnhh35q0lh4l.wav",
        "https://tonejs.github.io/audio/loop/hh.mp3"
    ]

    //variables to hold sound URLS
    let sound1, sound2, sound3;

    //need to know size of database
    let dbSize = 3;
    //randonly pull three indexes from database
    //gnerate random number
    function generateIndexes() {
        let ind1 = Math.floor(Math.random() * dbSize);
        let ind2 = Math.floor(Math.random() * dbSize);
        let ind3 = Math.floor(Math.random() * dbSize);
        console.log("Sound indexes are: " + ind1 + ", " + ind2 + ", " + ind3)
        //check to make sure that you have 3 different indexes

        if (ind1 != ind2&& ind1 != ind3 && ind2 != ind3) {
            //use the resulting URLs to populate sound1, sound2, and sound3
            sound1 = dbArray[ind1];
            sound2 = dbArray[ind2];
            sound3 = dbArray[ind3];
        } else {
            generateIndexes();
        }
    }

    generateIndexes()

    console.log("Sound1 is: " + sound1);
    console.log("Sound2 is: " + sound2);
    console.log("Sound3 is: " + sound3);

    layer1 = new Tone.Player({
        url: sound1,
        loop: true
    }).toDestination();
    // .sync().start(0)
    layer2 = new Tone.Player({
        url: sound2,
        loop: true
    }).toDestination();
    // .sync().start("2n")
    layer3 = new Tone.Player({
        url: sound3,
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