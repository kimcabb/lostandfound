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
    "reportFoundItem",
    "thanksForReporting"
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
      url: "/create-profile",
      templateUrl: "js/stuff/createprofile.html",
      controller: "createProfileController",
      controllerAs: "createProfileViewModel"
    })
    .state("userProfileIndex", {
      url: "/user-profile",
      templateUrl: "js/stuff/userprofile.html",
      controller: "userProfileController",
      controllerAs: "userProfileViewModel"
    })
    .state("lostItemIndex", {
      url: "/lost-item",
      templateUrl: "js/stuff/lostitem.html",
      controller: "lostItemController",
      controllerAs: "lostItemViewModel"
    })
    .state("itemReceivedIndex", {
      url: "/item-received",
      templateUrl: "js/stuff/itemreceived.html",
      controller: "itemReceivedController",
      controllerAs: "itemReceivedViewModel"
    })
    .state("reportFoundItem", {
      url: "/report-found-item",
      templateUrl: "js/stuff/reportfounditem.html",
      controller: "reportFoundItemController",
      controllerAs: "reportFoundItemViewModel"
    })
    .state("thanksForReporting", {
      url: "/thanks-for-reporting",
      templateUrl: "js/stuff/thanksforreporting.html",
      controller: "thanksForReportingController",
      controllerAs: "thanksForReportingViewModel"
    })
    ;
  }
  })();
