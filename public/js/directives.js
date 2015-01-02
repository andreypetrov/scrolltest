/**
 * Created by user on 15-01-02.
 */



var app = angular.module('app', []);

app.controller('MyController', function ($scope) {
    //var isFixClassAdded = true;
    //
    //
    //var wrap = document.getElementById("wrap");
    //var search = document.getElementById("search");
    //
    //console.log("search.offsetTop: " + search.offsetTop);
    ////console.log("search.offsetParent: " + search.offsetParent);
    //
    //var topMargin = 10;
    //var searchInitialOffsets = search.getBoundingClientRect() ;
    //console.log("searchInitialOffsets: " + searchInitialOffsets.top);
    //var searchInitialTop = searchInitialOffsets.top - topMargin;
    //
    //
    //
    //wrap.onscroll = function(e) {
    //    var offsets = search.getBoundingClientRect();
    //    //console.log("search.offsets.top: " + offsets.top);
    //    //console.log("search.offsets.bottom: " + offsets.bottom);
    //
    //
    //    console.log("searchInitialTop: " + searchInitialTop);
    //    if (wrap.scrollTop > 147) {
    //        //wrap.addClass("fix-search");
    //        wrap.classList.add("fix-search");
    //    } else {
    //        //wrap.removeClass("fix-search");
    //        wrap.classList.remove("fix-search");
    //    }
    //};


});


//TODO make the child the one with the changing class, not the parent. Because we can have potentially more sticky children
//and so the stickiness should come from every child

//app.directive('tdStickyParent', function () {
//    return {
//        restrict: 'A',
//        scope: {
//            //placeholderText: "=",
//            //onSearch: "&",
//            //onReset: "&"
//        },
//        link: function (scope, element, attrs, ctrl) {
//            console.log("linking");
//            element.bind("scroll", function(e) {
//                //var offsets = search.getBoundingClientRect();
//
//                if (this.scrollTop > 147) this.classList.add("fix-search");
//                else this.classList.remove("fix-search");
//            });
//        }
//    }
//});

app.directive('tdSticky', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, ctrl) {
            console.log("linking");
            element.parent().bind("scroll", function(e) {
                //var offsets = search.getBoundingClientRect();
                //this = the parent
                //TODO figure out how to not hardcode the height at which stickiness should happen
                //also figure out how to do it with multiple elements
                if (this.scrollTop > 147) element.addClass("fix-search");
                else element.removeClass("fix-search");
            });
        }
    }
});