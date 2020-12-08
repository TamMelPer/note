"use strict";

function instantiatesWithAnEmptyArray() {
    var noteList = new NoteList();
    assert.isEqual(noteList.list.constructor.name,  "Array");
  };
  
  instantiatesWithAnEmptyArray();
  console.log("Test: instantiatesWithAnEmptyArray")
  
function storesTheArrayOfNoteModels() {
    var noteList = new NoteList();
    var note = new Note("text");
    noteList.add(note)
    assert.isTrue(noteList.list[0]["text"] === "text")
  };

  storesTheArrayOfNoteModels();
  console.log("Test: storesTheArrayOfNoteModels")

function returnsAllModelsInTheArray() {
  var noteList = new NoteList();
  var note1 = new Note("mel");
  var note2 = new Note("lucy")
  noteList.add(note1)
  noteList.add(note2)
  assert.isTrue(noteList.getList() === "mel,lucy")
};
returnsAllModelsInTheArray();
console.log("Test: returnsAllModelsInTheArray")