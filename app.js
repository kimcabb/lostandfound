"use strict";

(function(){
  angular
  .module("whereismystuff",[
    "ui.router",
    "welcome",
    "createProfile",
    "userProfile",
    "lostItem",
    "itemReceived",
    "reportFoundItem"
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
    .state("itemReceivedIndex", {
      url: "/itemreceived",
      templateUrl: "js/stuff/itemreceived.html",
      controller: "itemReceivedController",
      controllerAs: "itemReceivedViewModel"
    })
    .state("reportFoundItem", {
      url: "/reportfounditem",
      templateUrl: "js/stuff/reportfounditem.html",
      controller: "reportFoundItemController",
      controllerAs: "reportFoundItemViewModel"
    })  
    ;
  }
  })();
