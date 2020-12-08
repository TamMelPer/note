"use strict";

// Code is in a file called note-list-model.js.
// Tests are wrapped in the module pattern.
// Uses a Javascript class to define a note list model object that can be instantiated.
// Stores an array of note models.  DONE!!!!
// Has a method that will return all the note models stored in the array.
// Has a method that creates and stores a new single note model. 
// This function takes as an argument a string that will be the value of the text property of the note e.g. "Favourite drink: seltzer".

class NoteList {
    constructor() {
        this.list = []
        this.array = []
    }

    add(note = new Note()) {
        this.list.push(note);
    }

    getList() {
        for (var i = 0; i < this.list.length; i++) {
            console.log(this.list[i].text)
            this.array.push(this.list[i].text)
        }
        return this.array.join()
}
}