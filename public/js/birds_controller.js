angular.module('BirdApp').controller('BirdsController', BirdsController);

BirdsController.$inject = ['$http']

function BirdsController ($http){

  var birds = this;

  birds.all=[]

  birds.add = function(){
    var newBird = {name: birds.name, location: birds.location}
    console.log('clicked', birds.new, birds.location);
    $http
    .post('/birds', newBird)
    .then(function(response){
      console.log(response.data)
      console.log(birds)
      birds.fetch()
    })
  }

  birds.fetch = function(){
    $http.
      get('/birds')
      .then(function(response){
        birds.all = response.data
      })
  }
 
  birds.fetch();



};