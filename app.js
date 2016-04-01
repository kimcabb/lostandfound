"use strict";

(function(){
angular
.module("whereismystuff",[
  "ui.router",
  "welcome",
  "createProfile"
])

.config([
  "$stateProvider",
  RouterFunction
]);

function RouterFunction ($stateProvider) {
  $stateProvider
  .state("homeIndex", {
    url: "/",
    templateUrl: "js/stuff/home.html",
    controller: "stuffIndexController",
    controllerAs: "stuffIndexViewModel"
  })

    .state("createProfileIndex", {
      url: "/createprofile",
      templateUrl: "js/stuff/createprofile.html",
      controller: "createProfileController",
      controllerAs: "createProfileViewModel"
    });

}


})();
