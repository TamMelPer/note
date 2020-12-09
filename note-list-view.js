"use strict";

// Tests are wrapped in the module pattern.
// Uses a Javascript class to define a note list view object that can be instantiated.
// Takes a note list model upon instantiation.
// Has a method that, when called, returns a string of HTML that represents the note list model. For example: <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>.
// Handles a note list model that has no notes, one note or several notes.

class NoteListView {
    constructor(listView = new NoteList) {
        this.listView = listView 
        this.array = []
    }


    viewList() {
        for (var i = 0; i < this.listView.list.length; i++) {
            this.array.push("<li><div>" + this.listView.list[i].text + "</div></li>")
        }
        this.array.unshift("<ul>")
        this.array.push("</ul>")
        return this.array.join("")
    }
}
