var connection = require ("./connection");

const orm = {
    selectAll(tableInput, cb) {
      const queryString = `SELECT * FROM ${tableInput};`;
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

    insertOne(table, cols, vals, cb) {
      let queryString = `INSERT INTO ${table} (${cols}) VALUES ("${vals}")`;

      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne(table, objColVals, condition, cb) {
      let queryString = `UPDATE ${table}`;
  
      queryString += ' SET ';
      queryString += objToSql(objColVals);
      queryString += ' WHERE ';
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    delete(table, condition, cb) {
      let queryString = `DELETE FROM ${table}`;
      queryString += ' WHERE ';
      queryString += condition;
  
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
  };
  
  module.exports = orm;
  