"use strict";

function instantiatesWithANoteListModel() {
    var noteListView = new NoteListView();
    assert.isTrue(noteListView.listView instanceof NoteList);
  };
  
  instantiatesWithANoteListModel();
  console.log("Test: instantiatesWithANoteListModel")


// This is another way to write the above test with IT
//   it ('instantiatesWithANoteListModel', function() {
//     var noteListView = new NoteListView();
//     assert.isTrue(noteListView.listView instanceof NoteList);
//   })