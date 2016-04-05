// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks

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
    .state("thanksForReporting", {
      url: "/thanksforreporting",
      templateUrl: "js/stuff/thanksforreporting.html",
      controller: "thanksForReportingController",
      controllerAs: "thanksForReportingViewModel"
    })
    ;
  }
  })();
