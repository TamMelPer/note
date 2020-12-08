"use strict";



function storesTheText() {
  var note = new Note("text");
  assert.isTrue(note.text === "text");
};

storesTheText();
console.log("Test: storesTheText")



function returnsTheText() {
  var note = new Note("text");
  assert.isEqual(note.getText(), "text");
};

returnsTheText();
console.log("Test: returnsTheText")