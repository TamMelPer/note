"use strict";

class SingleNoteView {
    constructor(noteModel = new Note()) {
        this.noteModel = noteModel;
    }

    noteHTML(){
        return `<div>${this.noteModel.getText()}</div>`
    }

}

