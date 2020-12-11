"use strict";

function instantiatesWithANoteListModel() {
    var noteListView = new NoteListView();
    assert.isTrue(noteListView.listView instanceof NoteList);
  };
  
  instantiatesWithANoteListModel();
  console.log("Test: instantiatesWithANoteListModel")


  function returnsHTMLOfNoteListModel() {
    var noteListView = new NoteListView();  
    noteListView.listView.add("hello i am melissa, trying to be 20")
    noteListView.listView.add("hello i am annabel, trying to be 20")
    assert.isTrue(noteListView.viewList() === "<ul><li><div>hello i am melissa, </div></li><li><div>hello i am annabel, </div></li></ul>")
  };
  returnsHTMLOfNoteListModel();
  console.log("Test: returnsHTMLOfNoteListModel")


// This is another way to write the first test with IT
//   it ('instantiatesWithANoteListModel', function() {
//     var noteListView = new NoteListView();
//     assert.isTrue(noteListView.listView instanceof NoteList);
//   })