var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var ipc = electron.ipcMain;
var sqlite3 = require('sqlite3').verbose();


app.on('ready', ()=>{
    var mainWindow = new BrowserWindow({
        width: 1280,
        height: 720
    })

    var dialog = electron.dialog;

    mainWindow.loadURL('file://' + __dirname + '/index.html');

    var secondWindow = new BrowserWindow({
        width: 800,
        height: 600,
        show: false
    })
    secondWindow.loadURL('file://' + __dirname + '/app/pages/second.html');

    ipc.on('open-custom' ,() => {
        secondWindow.show();
    })

    var menu = electron.Menu.buildFromTemplate([{
        label: 'Menu',
        submenu: [
            {
                label: 'open',
                click: function(){
                  dialog.showOpenDialog((cb) => {

                  })
                }
            },
            {
                label: 'Open Custom',
                click: function(){
                  ipcRenderer.send('open-custom');
                      let notification = new Notification('Customdialog', {
                          body: 'This is a custom window created by us'
                      })

                }
            },
             {
                label: 'dev tool',
                accelerator: (function () {
                     if (process.platform === 'darwin') {
                           return 'Alt+Command+I'
                      } else {
                          return 'Ctrl+Shift+I'
                        }
                   })(),
                click: function(item, focusedWindow){
                 if (focusedWindow) {
                      focusedWindow.toggleDevTools()
                  }
                }
            }
        ]
    }])
    electron.Menu.setApplicationMenu(menu);

    var db = new sqlite3.Database('mydb.db');
    var check;
    db.serialize(function() {

      db.run("CREATE TABLE if not exists user_info (info TEXT)");
      var stmt = db.prepare("INSERT INTO user_info VALUES (?)");
      for (var i = 0; i < 10; i++) {
          stmt.run("Ipsum " + i);
       }
       stmt.finalize();

       db.each("SELECT rowid AS id, info FROM user_info", function(err, row) {
           console.log(row.id + ": " + row.info);
       });
     });

     db.close();
});
