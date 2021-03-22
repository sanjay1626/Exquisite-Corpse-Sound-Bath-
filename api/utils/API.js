import axios from "axios";

export default {

    //Gets all sound
    getSounds: function() {
        console.log ("API.getSounds has been called");
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