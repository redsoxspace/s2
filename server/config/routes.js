console.log('Routes');
var User = require('./../controllers/users')();
var Polls = require('./../controllers/polls')();

module.exports = function(app){
  app.post('/login', User.show_by_name);
  app.get('/polls', Polls.index);
  app.get('/polls/:id', Polls.show);
  app.post('/polls', Polls.create);
  app.put('/polls/:id', Polls.update);
  app.delete('/polls/:id', Polls.delete);
}
