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
      this.noteListModel.add("is it you?")
      this.noteListModel.add("yes it is")
      this.noteListView = new NoteListView(noteListModel)
      this.display = this.noteListView.viewList()
      console.log(this.display)
    }

    insertsHTML(elem) {
      elem.innerHTML = this.display;
    }

}

abc = new NoteController()
abc.insertsHTML(document.getElementById("app"))





