import axios from "axios";

export default {
    //Gets all sound
    getSound: function() {
        console.log("Inside getSound");
        return axios.get("/api/sound");
    },
    // Gets the sound with given id
    getSoundById: function(id) {
        return axios.get("/api/sound" + id);
    },

    saveSound: function(funkySound) {
        return axios.post("/api/sound", funkySound);
    }





};