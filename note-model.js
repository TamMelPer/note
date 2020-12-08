"use strict";

// Code is in a file called note-model.js.
// Uses the a javascript class to define a note model object that can be instantiated.
// Takes the text of a note upon instantiation.     DONE!!
// Stores the text in a text property on the note.  DONE!!
// Has a method that will return the note text.     DONE!!

class Note {
    constructor(text) {
      this.text = text;
    }

    getText() {
        return this.text;
    }
  }