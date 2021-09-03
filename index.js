/*
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

- check npm for unique id package

Routes:
:: html
get * returns index.html
get /notes returns notes.html 

:: api
get /api/notes returns all notes in db.json
post /api/notes returns newly saved db.json object
delete /api/notes/:id returns all notes in db.json without :id

Technical Acceptance:
* Satisfies all of the preceding acceptance criteria plus the following:
   * Application front end must connect to an Express.js back end.
   * Application back end must store notes with unique IDs in a JSON file.
   * Application must be deployed to Heroku.
*/