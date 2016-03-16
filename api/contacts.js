//Služba pro kontakty
var _ = require('lodash');

var Datestore = require('nedb');
var contacts = new Datestore({filename: 'data/contacts.db', autoload: true});

contacts.count({}, function (err, cnt) {
  if (cnt == 0) {
    contacts.insert([
      {
        name: 'Donald Black',
        company: 'Topicware',
        phone: '6-(880)062-6935',
        email: 'dblack0@mashable.com',
        note: 'Lorem ipsum'
      },
      {
        name: 'Frank Little',
        company: 'Browseblab',
        phone: '9-(804)406-9373',
        email: 'flittle2@tumblr.com',
        note: 'Lorem ipsum'
      }
    ]);
  }
});


/*old:

var contacts = [
 {id: 1, name: 'Donald Black', company: 'Topicware', phone: '6-(880)062-6935', email: 'dblack0@mashable.com', note: 'Lorem ipsum'},
 {id: 2, name: 'Frank Little', company: 'Browseblab', phone: '9-(804)406-9373', email: 'flittle2@tumblr.com', note: 'Lorem ipsum'}
 ];
 */

module.exports = {
  findAll: function (cb) {
    contacts.find({}, cb)

    //return _.cloneDeep(_.find(contacts, {id: +id}));
  },
  // jen hledani
  find: function (id,cb) {
    contacts.findOne({_id: id}, cb);
  },
  // najde zaznam a provede update
  update: function (id, contact, cb) {
    contacts.update({_id: id}, contact, {}, cb)
  },
  // delete contact with specific id
  delete: function(id, cb) {
    contacts.remove({_id: id},{}, cb);
    console.log("Contact deleted " +id);
  }
};
