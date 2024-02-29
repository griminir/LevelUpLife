//100% experimentelt fra dette punktet
const db = require('./database.js');

//create
const createItem = (email, password, callback) => {
  const sql = `INSERT INTO users ( email, password) VALUES ( ?, ?)`;
  db.run(sql, [email, password], function (err) {
    callback(err, { id: this.lastID });
  });
};

const readItems = (callback) => {
  const sql = `SELECT * FROM users`;
  db.all(sql, [], callback);
};

const updateItem = (id, email, password, callback) => {
  const sql = `UPDATE users SET email = ?, password = ?,  WHERE id = ?`;
  db.run(sql[(email, password, id)], callback);
};

const deleteItem = (id, callback) => {
  const sql = `DELETE FROM users WHERE id = ?`;
  db.run(sql, id, callback);
};

module.exports = { createItem, readItems, updateItem, deleteItem };
