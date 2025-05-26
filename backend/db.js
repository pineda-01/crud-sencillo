const Database = require('better-sqlite3');

const db = new Database('personas.db');

// Crear tabla si no existe
db.prepare(`
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    identidad TEXT NOT NULL,
    celular TEXT NOT NULL  
  )
`).run();

console.log('✅ Base de datos conectada y tabla verificada.');

module.exports = db;


