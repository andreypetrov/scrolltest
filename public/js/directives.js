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



app.directive('tdSticky', function () {

    return {
        restrict: 'A',
        scope: {
           stickyClassName: "@",
           stickyMargin: "@"
        },
        link: function (scope, element, attrs, ctrl) {
            //get the y coordinate of the current element
            var yCoord = element[0].getBoundingClientRect().top;
            //get the top margin as a number value. This is required to apply stickiness before the element reaches the top of the page
            var stickyTopMargin = Number(scope.stickyMargin);
            //when scrolling the parent apply stickiness to the given element
            element.parent().bind("scroll", function (e) {

                //this = the parent
                //TODO figure out how to not hard-code the height at which stickiness should happen
                //TODO figure out how to do it with multiple elements

                var threshold = yCoord - stickyTopMargin;
                console.log("threshold: " + threshold);

                if (this.scrollTop > threshold) element.addClass(scope.stickyClassName);
                else element.removeClass(scope.stickyClassName);
            });
        }
    }
});