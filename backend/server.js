// backend/server.js
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Obtener todos los items
app.get('/personas', (req, res) => {
  const items = db.prepare('SELECT * FROM items').all();
  res.json(items);
});

// Crear un nuevo item
app.post('/personas', (req, res) => {

if (!req.body.name || !req.body.identidad || !req.body.celular) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const { name, identidad, celular } = req.body;
  const result = db.prepare('INSERT INTO items (name, identidad, celular) VALUES (?, ?, ?)').run(name, identidad, celular);
  res.json({ id: result.lastInsertRowid, name, identidad, celular });
});

// Actualizar un item
app.put('/personas/:id', (req, res) => {
  const { name, identidad, celular } = req.body;

  if (!name || !identidad || !celular) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  db.prepare('UPDATE items SET name = ?, identidad = ?, celular = ? WHERE id = ?').run(name, identidad, celular, req.params.id);
  res.sendStatus(200);
  
});

// Eliminar un item
app.delete('/personas/:id', (req, res) => {
  db.prepare('DELETE FROM items WHERE id = ?').run(req.params.id);
  res.sendStatus(204);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor corriendo en http://0.0.0.0:${PORT}`);
});
