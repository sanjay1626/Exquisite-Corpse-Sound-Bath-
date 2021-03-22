import axios from "axios";

export default {
  // Gets all books
  getSound: function() {
    return axios.get("/api/sound");
  },
  // Gets the book with the given id
  getSound: function(id) {
    return axios.get("/api/sound/" + id);
  },
//   // Deletes the book with the given id
//   deleteSounds: function(id) {
//     return axios.delete("/api/sounds/" + id);
//   },
  // Saves a book to the database
  saveSound: function(funkySound) {
    return axios.post("/api/sound", funkySound);
  }
};