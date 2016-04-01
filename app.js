"use strict";

(function(){
angular
.module("whereismystuff",[
  "ui.router",
  "welcome"
])

.config([
  "$stateProvider",
  RouterFunction
]);

function RouterFunction ($stateProvider) {
  $stateProvider
  .state("homeIndex", {
    url: "/",
    templateUrl: "js/stuff/index.html",
    controller: "stuffIndexController",
    controllerAs: "stuffIndexViewModel"
  });
}


})();
