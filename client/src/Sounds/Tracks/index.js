export * from "./multiPlayers.jsx"


// import "../build/Tone.js"
// import "./js/tone-ui.js"
// import "./js/components.js"


// const recorder = new Tone.Recorder();
// // const synth = new Tone.Synth().connect(recorder);
// // start recording
// recorder.start();
// // generate a few notes

// // set the transport
// Tone.Transport.bpm.value = 108;
// Tone.Transport.loop = true;
// Tone.Transport.loopStart = "4m";
// Tone.Transport.loopEnd = "8m";

// const kick = new Tone.Player({
//     url: "https://res.cloudinary.com/exquisite-corpse-sound-bath/video/upload/v1615663107/InkyBoisSound_r0gdgd.mp3",
//     loop: true
// }).toDestination().sync().start(0).connect(recorder);

// const snare = new Tone.Player({
//     url: "https://res.cloudinary.com/exquisite-corpse-sound-bath/video/upload/v1615661248/my-audio-file-name_3_wtyhca.mp4?_s=vp-1.5.1",
//     loop: true
// }).toDestination().sync().start("2n").connect(recorder);

// const hh = new Tone.Player({
//     url: "https://tonejs.github.io/audio/loop/hh.mp3",
//     loop: true
// }).toDestination().sync().start("3:3", "4n").connect(recorder); // start with an offset

// // connect the UI with the components
// document.querySelector("tone-play-toggle").addEventListener("start", () => Tone.Transport.start());
// document.querySelector("tone-play-toggle").addEventListener("stop", () => Tone.Transport.stop());

// // keep the playhead on track
// setInterval(() => {
//     // scale it between 0-1
//     const progress = (Tone.Transport.progress + 1) / 2;
//     document.querySelector("#progress").style = `left: ${progress * 100}%`;
// }, 16);


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