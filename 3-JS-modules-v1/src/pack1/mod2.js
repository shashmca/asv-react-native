


// var o = {
//     doWork: function () {
//         console.log("im mod2");
//     }
// }


var App = App || {};

(function () {

    App.mod3.doWork()
    var o = {
        doWork: function () {
            console.log("im mod2");
        }
    }

    App.mod2 = o;

})();