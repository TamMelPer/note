"use strict";

function instantiatesWithAnEmptyArray() {
    var noteList = new NoteList();
    assert.isEqual(noteList.list.constructor.name,  "Array");
  };
  
  instantiatesWithAnEmptyArray();
  console.log("Test: instantiatesWithAnEmptyArray")
  
function storesTheArrayOfNoteModels() {
    var noteList = new NoteList();
    noteList.add("text")
    console.log(noteList.list[0])
    assert.isTrue(noteList.list[0]["text"] === "text")
  };

  storesTheArrayOfNoteModels();
  console.log("Test: storesTheArrayOfNoteModels")

function returnsAllModelsInTheArray() {
  var noteList = new NoteList();
  noteList.add("mel")
  noteList.add("lucy")
  assert.isTrue(noteList.getList() === "mel,lucy")
};
returnsAllModelsInTheArray();
console.log("Test: returnsAllModelsInTheArray")