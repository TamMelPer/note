"use strict";

function instantiatesWithANoteListModel() {
    var noteListView = new NoteListView();
    assert.isTrue(noteListView.listView instanceof NoteList);
  };
  
  instantiatesWithANoteListModel();
  console.log("Test: instantiatesWithANoteListModel")


  function returnsHTMLOfNoteListModel() {
    var noteListView = new NoteListView();  
    noteListView.listView.add("mel")
    noteListView.listView.add("lucy")
    assert.isTrue(noteListView.viewList() === "<ul><li><div>mel</div></li><li><div>lucy</div></li></ul>")
  };
  returnsHTMLOfNoteListModel();
  console.log("Test: returnsHTMLOfNoteListModel")


// This is another way to write the first test with IT
//   it ('instantiatesWithANoteListModel', function() {
//     var noteListView = new NoteListView();
//     assert.isTrue(noteListView.listView instanceof NoteList);
//   })