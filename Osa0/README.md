Assignments 0-1...3 Carefully read

title Assingment 0-4
Client->Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note note over Server: Sending new comment to server Server-->Client: HTTP status 302 Client->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes Server-->Client: HTML koodi

Client->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css Server-->Client: main.css Client->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js Server-->Client: main.js note over Client: Executing js code and requesting json file from server Client->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json

Server-->Client:{content: 'Kommentti', date: '2022-06-29T17:17:40.232Z'}...etc note over Client:Returns all comments including the one which was just added


title Assingment 0-5
Client->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa Server-->Client: HTML koodi

Client->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css Server-->Client: main.css Client->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js Server-->Client: main.js note over Client: Executing js code and requesting json file from server Client->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json

Server-->Client:{content: 'Kommentti', date: '2022-06-29T17:17:40.232Z'}...etc note over Client:Returns all comments


title Assingment 0-6
Client->Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa Server-->Client: New comment to list

note over Client: Doesnt reload the whole page. Just adds the comment
