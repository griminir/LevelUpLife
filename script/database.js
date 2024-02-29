//100% experimentelt fra dette punktet
const sqlite3 = require('sqlite3').verbose();
const dbName = 'database/myDatabase.db';

const db = new sqlite3.Database(dbName, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('connected to the Database');
    db.serialize(() => {
      db.run(
        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT)',
        (err) => {
          if (err) {
            console.log(err.message);
          } else {
            console.log('table created or exsisted');
          }
        }
      );
    });
  }
});

module.exports = db;
