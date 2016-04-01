"use strict";

(function(){
angular
.module("whereismystuff",[
  "ui.router",
  "welcome",
  "createProfile",
  "userProfile",
  "lostItem"
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
    })
    .state("userProfileIndex", {
      url: "/userprofile",
      templateUrl: "js/stuff/userprofile.html",
      controller: "userProfileController",
      controllerAs: "userProfileViewModel"
    })
    .state("lostItemIndex", {
      url: "/lostitem",
      templateUrl: "js/stuff/lostitem.html",
      controller: "lostItemController",
      controllerAs: "lostItemViewModel"
    })

  ;
}
})();
