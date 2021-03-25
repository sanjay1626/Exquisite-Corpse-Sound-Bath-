import React from 'react';


// let mic, recorder, soundFile;

function Recorder() {
    let mic, recorder, soundFile;
    let state = 0; // mousePress will increment from Record, to Stop, to Play

    function setup() {
        // let cnv = createCanvas(200, 200);
        mousePressed(canvasPressed);
        background(220);
        
        textAlign(CENTER, CENTER);

        // create an audio in
        mic = new p5.AudioIn();

        // users must manually enable their browser microphone for recording to work properly!
        mic.start();

        // create a sound recorder
        recorder = new p5.SoundRecorder();

        // connect the mic to the recorder
        recorder.setInput(mic);

        // create an empty sound file that we will use to playback the recording
        soundFile = new p5.SoundFile();

    }
    function canvasPressed() {
    //  ensure audio is enabled
        userStartAudio();
     // use the '.enabled' boolean to make sure user enabled the mic (otherwise we'd record silence)
        if (state === 0 && mic.enabled) {
     // Tell recorder to record to a p5.SoundFile which we will use for playback
        recorder.record(soundFile);

        background(255, 0, 0);
        text('Recording now!', 20, 20);
        state++;
    } else if (state === 1) {
        recorder.stop(); // stop recorder, and send the result to soundFile

        background(0, 255, 0);
        text('Recording stopped. Click to play & save', 20, 20);
        state++;
    } else if (state === 2) {
        soundFile.play(); // play the result!
        saveSound(soundFile, 'mySound.wav'); // save file
        state++;
    }
    }
    function handleClick(e) {
        e.preventDefault();
        
        console.log('The button was clicked');
    }

    return (
        <div className='ui vertical labeled icon buttons'>
            <button  onClick={setup} className='ui button'>
                <i className='play icon'></i>
                Record
            </button>
            <button  onClick={handleClick} className='ui button' >
                <i className='stop icon'></i>
                Stop
            </button>
            <button className='ui button' >
                <i className='file audio icon' ></i>
                Upload
            </button>

        </div>

    );


}
export default Recorder;













