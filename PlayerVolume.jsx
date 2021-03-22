import React, { useRef } from 'react';
import * as Tone from 'tone';
import db from '../../../../routes/sound.routes';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});

const Player = () => {
    console.log("database size: " + db.get);

    const startButton = useRef(null);
    const stopButton = useRef(null);
    const loadSounds = useRef(null);
    const sliders = useRef(null);

    // const classes = useStyles();
    const [value1, setValue1] = React.useState(30);
    const [value2, setValue2] = React.useState(30);
    const [value3, setValue3] = React.useState(30);

    //universal variables
    let layer1, layer2, layer3, vol1, vol2, vol3;


    const handleChange1 = (event, newValue1) => {
        event.preventDefault();
        setValue1(newValue1);
        console.log("In handle value1 " + Math.floor(newValue1 / 10));
        vol1 = new Tone.Volume(Math.floor(newValue1 / 10)).toDestination();
        layer1.connect(vol1);
    };
    const handleChange2 = (event, newValue2) => {
        event.preventDefault();
        setValue2(newValue2);
        console.log("In handle value2 " + Math.floor(newValue2 / 10));
        vol2 = new Tone.Volume(Math.floor(newValue2 / 10)).toDestination();
        layer2.connect(vol2);
    };
    const handleChange3 = (event, newValue3) => {
        event.preventDefault();
        setValue3(newValue3);
        console.log("In handle value3 " + Math.floor(newValue3 / 10));
        vol3 = new Tone.Volume(Math.floor(newValue3 / 10)).toDestination();
        layer3.connect(vol3);
    };


    // connect the UI with the components
    function startPlay(e) {
        e.preventDefault();
        layer1.start();
        layer2.start();
        layer3.start();
        console.log("*** In startPlay");
        loadSounds.current.classList.add('hidden');
        startButton.current.classList.add('hidden');
        stopButton.current.classList.remove('hidden');
    }

    function stopPlay(e) {
        e.preventDefault();
        layer1.stop();
        layer2.stop();
        layer3.stop();
        console.log("*** In stopPlay");
        loadSounds.current.classList.remove('hidden');
        stopButton.current.classList.add('hidden');
        startButton.current.classList.remove('hidden');
    }

    function createPlayer(e) {
        e.preventDefault();
        stopButton.current.classList.add('hidden');
        startButton.current.classList.add('hidden');
        sliders.current.classList.add("hidden");


        //Randomly grab 3 URLs from the database and use them in the players
        //temporary array to represent database for now
        //==================ARRAY STAND-IN FOR DB======================//
        let dbArray = [
            "https://res.cloudinary.com/exquisite-corpse-sound-bath/video/upload/v1615663107/InkyBoisSound_r0gdgd.mp3",
            "https://res.cloudinary.com/exquisite-corpse-sound-bath/video/upload/v1616265722/autrfo5tdnhh35q0lh4l.wav",
            "https://res.cloudinary.com/exquisite-corpse-sound-bath/video/upload/v1615661248/my-audio-file-name_3_wtyhca.webm",
            "https://res.cloudinary.com/exquisite-corpse-sound-bath/video/upload/v1616280792/u8tmkzab5wqtexu55w1b.mp3",
            "https://res.cloudinary.com/exquisite-corpse-sound-bath/video/upload/v1616280781/bhi2hfzboiuqg0parhhn.mp3",
            "https://res.cloudinary.com/exquisite-corpse-sound-bath/video/upload/v1616280781/p7maieoemjvqj2byjuyx.mp3",
            "https://res.cloudinary.com/exquisite-corpse-sound-bath/video/upload/v1616280782/hqkxjma7mmjay9cfqeep.mp3",
            "https://res.cloudinary.com/exquisite-corpse-sound-bath/video/upload/v1616280784/p1ftjiiqnxcppjfmvsbb.mp3",
            "https://res.cloudinary.com/exquisite-corpse-sound-bath/video/upload/v1616281248/itgbbwye7eckeqki7pln.mp3",
            "https://res.cloudinary.com/exquisite-corpse-sound-bath/video/upload/v1616281249/s7wtlmgd3by2mbzmptyj.mp3"
        ]


        //function variables to hold sound URLS
        let sound1, sound2, sound3;

        //need to know size of database
        let dbSize = dbArray.length;

        //randonly pull three indexes from database
        function generateIndexes() {
            let ind1 = Math.floor(Math.random() * dbSize);
            let ind2 = Math.floor(Math.random() * dbSize);
            let ind3 = Math.floor(Math.random() * dbSize);
            console.log("Sound indexes are: " + ind1 + ", " + ind2 + ", " + ind3)
            //check to make sure that you have 3 different indexes

            if (ind1 != ind2 && ind1 != ind3 && ind2 != ind3) {
                //use the resulting URLs to populate sound1, sound2, and sound3
                sound1 = dbArray[ind1];
                sound2 = dbArray[ind2];
                sound3 = dbArray[ind3];
            } else {
                generateIndexes();
            }
        }

        //initial call to the function to load the sounds into the players
        generateIndexes()

        console.log("Sound1 is: " + sound1);
        console.log("Sound2 is: " + sound2);
        console.log("Sound3 is: " + sound3);

        const bufferPlayers = new Tone.ToneAudioBuffers({
            A1: sound1,
            A2: sound2,
            A3: sound3,
        }, () => {

            layer1 = new Tone.Player({ loop: true });
            //.toDestination()
            layer2 = new Tone.Player({ loop: true });
            //.toDestination()
            layer3 = new Tone.Player({ loop: true });
            //.toDestination()

            // play all of the samples when they all load
            layer1.buffer = bufferPlayers.get("A1");
            layer2.buffer = bufferPlayers.get("A2");
            layer3.buffer = bufferPlayers.get("A3");



            console.log("Start button ");
            // console.log("Start button " + startButton);
            startButton.current.classList.remove("hidden");
            startButton.current.textContent = "Start";
            sliders.current.classList.remove("hidden");
        });


        //Nice to haves:
        //  -volume control on each player to decide which sound is prominent
        //  -tempo contorl on each player
        //

        // // keep the playhead on track
        // setInterval(() => {
        //     // scale it between 0-1
        //     const progress = (Tone.Transport.progress + 1) / 2;
        //     document.querySelector("#progress").style = `left: ${progress * 100}%`;
        // }, 16);
        // }
    }//universal variables

    return (
        <div>
            <div id='tone-example' label="ECSB">
                <div id='tone-loader'></div>
                <button ref={loadSounds} onClick={createPlayer}>Load Sounds</button>
                <div slot="explanation">
                    <p>The player pulls three random sounds from the sample Database and syncs them to the start button.</p>
                </div>
                {/* {createPlayer()} */}
                <div id="content">
                    {/* To add - possible wait for the buffer to finish before loading the buttons */}
                    <div id="buttons">
                        {/* // TODO: put your buttons here
                        // Give them a CSS class that hides them initially
                        // Upon completion of buffer load, remove CSS class */}

                        <button ref={startButton} className="hidden" onClick={startPlay}>Start</button>
                        <button ref={stopButton} className="hidden" onClick={stopPlay}>Stop</button>
                    </div>

                    <div ref={sliders} className="hidden">

                        <Typography id="continuous-slider" gutterBottom>
                            Layer 1
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item>
                                <VolumeDown />
                            </Grid>
                            <Grid item xs>
                                <Slider value={value1} onChange={handleChange1} aria-labelledby="continuous-slider" />
                            </Grid>
                            <Grid item>
                                <VolumeUp />
                            </Grid>
                        </Grid>

                        <Typography id="continuous-slider" gutterBottom>
                            Layer 2
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item>
                                <VolumeDown />
                            </Grid>
                            <Grid item xs>
                                <Slider value={value2} onChange={handleChange2} aria-labelledby="continuous-slider" />
                            </Grid>
                            <Grid item>
                                <VolumeUp />
                            </Grid>
                        </Grid>

                        <Typography id="continuous-slider" gutterBottom>
                            Layer 3
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item>
                                <VolumeDown />
                            </Grid>
                            <Grid item xs>
                                <Slider value={value3} onChange={handleChange3} aria-labelledby="continuous-slider" />
                            </Grid>
                            <Grid item>
                                <VolumeUp />
                            </Grid>
                        </Grid>

                    </div>

                    {/* <div id="tracks">
                        <div id="progress"></div>
                        <img src="https://tonejs.github.io/audio/loop/drum_loop.png" />
                    </div> */}
                </div>
            </div>
        </div>
    );
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