import axios from "axios";

export default {
    //Gets all sound
    getSound: function() {
        return axios.get("/api/sound");
    },
    // Gets the sound with given id
    getSound: function(id) {
        return axios.get("/api/sound" + id);
    },

    saveSound: function(funkySound) {
        return axios.post("/api.sound", funkySound);
    }





};