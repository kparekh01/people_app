(function(){
  "use strict";

  angular.module("app").controller("people", function($scope){

    $scope.people = [
      {
        name: "Abe Lincoln",
        bio: "I failed in everything in life, but managed to become president!",
        bio_visible: false
      },

      {
        name: "Maryln Monroe",
        bio: "I dated JFK, or did I?!",
        bio_visible: false
      },

      {
        name: "Jack Nicholson",
        bio: "Life's good baby!",
        bio_visible: false
      }
     ];

   $scope.addPerson = function(person){
      // var newPerson =
      // {
      //   name: $scope.newName,
      //   bio: $scope.newBio,
      //   bio_visible: true
      // };
      person.bio_visible = false;
      $scope.people.push(person);
    };

    $scope.toggleBio = function(person) {
      person.bio_visible = !person.bio_visible;
    };

    $scope.deletePerson = function(index){
      // var index = $scope.people.indexOf(person);
      $scope.people.splice(index, 1);
    };

  //   $scope.isPositive = function(task){
  //     return task.text.indexOf("stupid") === -1;
  //   };
  //
  //
  });
})();
