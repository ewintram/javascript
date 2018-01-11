(function(exports) {
function NoteController(noteList = new NoteList()) {
  this.noteList = noteList;
  this.noteList.createNote("Favourite drink: seltzer");
  this.view = new NoteListView(this.noteList);
};

NoteController.prototype.makeHTMLList = function(controllerListView = this.view) {
  document.getElementById('app').innerHTML = controllerListView.createHtmlString();
};

exports.NoteController = NoteController;
})(this);

function changeDivForGivenNote() {
  window.addEventListener("hashchange", viewSingleNote)
};

// this code executes after the click event, which changes the url
function viewSingleNote(notelist) {
  var id = window.location.hash.split("#")[1];
  var note = controller.noteList.getNoteById(parseInt(id));
  changeHTML(note)
};

function changeHTML(note) {
  singleNoteView = new SingleNoteView(note);
  document.getElementById('app').innerHTML = singleNoteView.createHtmlString();
};

controller = new NoteController();
controller.makeHTMLList()
changeDivForGivenNote();
