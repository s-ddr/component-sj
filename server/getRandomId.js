const getRandomId = (context, ee, done) => {
  let id = Math.floor(Math.random() * 10000000) + 1;
  context.vars.id = id;
  return done();
}

module.exports = {getRandomId};
