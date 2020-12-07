"use strict";

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};


function storesTheText() {
  var note = new Note("text");
  assert.isTrue(note.text === "text");
};

storesTheText();
console.log("storesTheText")

function returnsTheText() {
  var note = new Note("text");
  assert.isTrue(note.getText() === "text");
};

returnsTheText();
console.log("returnsTheText")