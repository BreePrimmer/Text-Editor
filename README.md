# Text-Editor

## Description

This project is a text editor! It is a PWA so it runs offline, and it is also installable! You can use it to write code, as certain keywords will change color for you.

## Installation

In the terminal, run 'npm install' to get all of the dependencies. Then, run 'npm run build' to build the dist folder from the webpack. Now you can run 'npm run start' and the app will launch!

## Usage

[Heroku App]()

[!screenshot]()

Use the text editor to help you write code, or any text. When you reload the page, your text will be saved in the indexedDB database (currently there is an issue getting saved text to display). If the server stops, you will still be able to use the app offline and it will still save your data. You can also install this app by clicking on the 'install' button and following the prompts. Then, a icon will appear on your taskbar so you can use the app from your desktop!

## Credits

I used the solved mini project to help me with this project.

I couldn't figure out some of the errors I was getting, but I did try to read on them.

[IDBObjectStore: add() method](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/add) from MDN

[TypeError: s.split is not a function ?](https://www.reddit.com/r/learnjavascript/comments/o6mrmx/typeerror_ssplit_is_not_a_function/) from reddit
