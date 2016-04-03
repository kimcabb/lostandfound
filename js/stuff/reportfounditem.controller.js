"use strict";

(function(){
  angular
  .module("reportFoundItem", [])
  .controller("reportFoundItemController",[
    reportFoundItemControllerFunction
  ]);
  function reportFoundItemControllerFunction(){
    console.log("report found item");
  }
})();



"use strict";

(function(){
angular
.module("lostItem",[])
.controller("lostItemController",[
  lostItemControllerFunction
]);

function lostItemControllerFunction(){
  console.log("this is where lost item is shown");
}
})();
