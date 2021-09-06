const db = require('../../data/db-config'); // where connecttion to db from code is happening.

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
};

function get() {
  //select * from posts
  return db('posts'); // db == knex in docs.
}

function getById(id) {
  // return db('posts').where({id: id, foo: 'bar'}).first(); // without .first() We always get and [array] which could be empty []
  return db('posts').where('id', id).first(); //simpler returns a collection// .first will chain the first one
}

async function create({ title, contents }) {
  const [id] = await db('posts').insert({ title, contents }); //[#] array of the id of new record
  //console.log(id);//if you dont know what it is console.log(stuff) it first
  const newPost = await getById(id);
  // console.log(newPost);
  return newPost;
}

async function update(id, { title, contents }) {
  await db('posts').where('id', id).update({ title, contents });
  return getById(id);
}

async function remove(id) { //README will tell what to be returned.
  // what does it return? returns # of things deleted
  //what to do to give back the deleted thing??
  const deletedPost = await getById(id);
  await db('posts').where('id', id).del();
  return deletedPost;
}
