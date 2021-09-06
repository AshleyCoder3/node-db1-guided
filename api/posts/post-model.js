const db = require('../../data/db-config'); // where connecttion to db from code is happening.

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
};

async function get() {
  //select * from posts
  return db('posts'); // db == knex in docs.
}

async function getById(id) {
  // return db('posts').where({id: id, foo: 'bar'}).first(); // without .first() We always get and [array] which could be empty []
  return db('posts').where('id', id).first(); //simpler returns a collection// .first will chain the first one
}

async function create() {
  return 'create wired';
}

async function update() {
  return 'update wired';
}

async function remove() {
  return 'delete wired';
}
