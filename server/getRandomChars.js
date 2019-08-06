const getRandomChars = (context, ee, done) => {
  let queries = ['tab','ch','cha','to','da','ta','cab','ba','to','c','ca','ch','v','b','li','l','a','d']
  context.vars.chars = queries[Math.floor(Math.random() * queries.length)];
  return done();
}

module.exports = {getRandomChars};