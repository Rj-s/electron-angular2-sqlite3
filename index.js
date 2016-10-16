var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var ipc = electron.ipcMain;
//var sqlite3 = require('sqlite3').verbose();


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
    // #####Below db initialization is working fine. #########
    // var db = new sqlite3.Database('mydbs.db3');
    // db.serialize(function() {
    //
    //   db.run("CREATE TABLE if not exists customer (name TEXT, mobile TEXT)");
    //
    //   for (var i = 0; i < 10; i++) {
    //
    //       db.run("INSERT INTO customer(name, mobile) VALUES('Rajesh','12344554')");
    //    }
    //
    //
    //    db.each("SELECT rowid AS id, name, mobile FROM customer", function(err, row) {
    //        console.log(row.id + " : " + row.name + " : " + row.mobile);
    //    });
    //  });
    //
    //  db.close();
});
