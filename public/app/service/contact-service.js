var app = angular.module('sample-app');

app.factory('contactsService', function($http) {


  return {
    create: function(contact) {
      console.warn('contactService.create not implemented!');
      return contact;
    },
    //TODO: EDITING
    update: function(contact) {
      console.warn('contactService.update not implemented!');
      return contact;
    },

    find: function(id) {
      return $http.get('/api/contacts/' + id)
        .then(function(res) {
          return res.data;
        });
      //console.warn('contactService.find not implemented!');
      //return_.clone(_.find(contacts, {id: +id}));
    },

    findAll: function() {
      return $http.get('/api/contacts')
        .then(function(res) {
          return res.data;
        });
    }
    /*    findAll: function() {
      return _.clone(contacts);
    }
    */
  };
});
