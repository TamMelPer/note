// Code uses Javascript classes to define a note controller that can be instantiated.
// The note controller constructor does the following:
// Takes a note list model as a parameter.
// Adds a note that says Favourite drink: seltzer.
// Creates a note list view, passing in the note list model.
// The note controller has a method that gets HTML from the note list view and inserts it into the app element.

// var noteListModel = new NoteList
// noteListModel.add("this is fun")
// noteListModel.add("maybe its not")
// noteListView = new NoteListView(noteListModel)
// console.log(noteListView)
// let display = noteListView.viewList()
// console.log(display)



// function changeText() {
//     var elem = document.getElementById("app");
//         elem.innerHTML = display;
//   }

//   changeText()

class NoteController {
    constructor(noteListModel = new NoteList) {
      this.noteListModel = noteListModel
      this.noteListModel.add("hello i am melissa, trying to be 20")
      this.noteListModel.add("hello i am annabel, trying to be 20")
      this.noteListView = new NoteListView(this.noteListModel)
      this.display = this.noteListView.viewList()
    }

    insertsHTML() {
      document.getElementById("app").innerHTML = this.display;
      
    }

}

abc = new NoteController()
abc.insertsHTML();





