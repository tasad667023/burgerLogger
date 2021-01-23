var orm = require ("../config/orm");

const burgerMethod = {
    selectAll(cb) {
      orm.selectAll('burgers', (res) => cb(res));
    },
    // The variables cols and vals are arrays.
    insertOne(vals, cb) {
      orm.insertOne('burgers', 'burger_name', vals, (res) => cb(res));
    },
    updateOne(objColVals, condition, cb) {
      orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
    },
  };
  
  module.exports = burgerMethod;
  