"use strict";



function storesTheText() {
  var note = new Note("text");
  assert.isTrue(note.text === "text");
};

storesTheText();
console.log("Test1: storesTheText")


function returnsTheText() {
  var note = new Note("text");
  assert.isTrue(note.getText() === "text");
};

returnsTheText();
console.log("Test2: returnsTheText")