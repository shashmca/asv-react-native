


// var o = {
//     doWork: function () {
//         console.log("im mod1");
//     }
// }

var App = App || {};

(function () {

    var pri = 123;
    App.mod2.doWork()
    var o = {
        doWork: function () {
            console.log("im mod1");
        }
    }

    App.mod1 = o;

})();