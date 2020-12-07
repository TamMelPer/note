"use strict";

// Code is in a file called note-model.js.
// Uses the a javascript class to define a note model object that can be instantiated.
// Takes the text of a note upon instantiation e.g. My favourite language is JavaScript.
// Stores the text in a text property on the note.
// Has a method that will return the note text.

class Note {
    constructor(text) {
      this.text = text;
    }
  }