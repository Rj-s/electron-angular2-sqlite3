# electron-angular2-sqlite3
- This is desktop application works with Electron, Angular2 and Sqlite3.

##### Sqlite3 integration:
1. Added  sqlite3, electron-prebuilt, electron-rebuild
2. run below command line at project level:-  
        npm install
        .\node_modules\.bin\electron-rebuild.cmd
   support link:-
  http://stackoverflow.com/questions/32504307/how-to-use-sqlite3-module-with-electron
  https://github.com/mapbox/node-sqlite3

##### Typings installation:
1. Added typings for node, core-js and sqlite3.
2. run below commands :-
        typings install dt~core-js --save --global
        typings install dt~node --save --global
        typings install dt~sqlite3 --save --global
https://neoheurist.wordpress.com/2016/06/20/definitely-typed/

##### Run application :-
    npm install
    npm start
