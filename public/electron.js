import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;
let splash;

function createWindow() {
    // Création de fenêtre principale
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        show: false,
        icon: path.join(__dirname, 'favicon.ico'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
        },
        // autoHideMenuBar: true,
    });

    mainWindow.loadURL('http://localhost:3000');
    // mainWindow.loadFile(path.join(__dirname, '../build/index.html'));

    mainWindow.once('ready-to-show', () => {
        setTimeout(() => {
            if (splash) splash.close();
            mainWindow.show();
        }, 5000);
    });
}

function createSplashScreen() {
    // Création de fenêtre de splash screen
    splash = new BrowserWindow({
        width: 500,
        height: 500,
        frame: false,
        alwaysOnTop: true,
        transparent: true,
    });

    splash.loadFile(path.join(__dirname, 'splash.html'));
}

app.whenReady().then(() => {
    createSplashScreen();
    createWindow();e

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
