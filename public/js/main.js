/**
 * Created by user on 15-01-02.
 */



var app = angular.module('app', []);

app.controller('MyController', function ($scope) {
    var isFixClassAdded = true;


    var wrap = document.getElementById("wrap");
    var search = document.getElementById("search");

    console.log("search.offsetTop: " + search.offsetTop);
    //console.log("search.offsetParent: " + search.offsetParent);

    var topMargin = 10;
    var searchInitialOffsets = search.getBoundingClientRect() ;
    console.log("searchInitialOffsets: " + searchInitialOffsets.top);
    var searchInitialTop = searchInitialOffsets.top - topMargin;



    wrap.onscroll = function(e) {
        var offsets = search.getBoundingClientRect();
        //console.log("search.offsets.top: " + offsets.top);
        //console.log("search.offsets.bottom: " + offsets.bottom);


        console.log("searchInitialTop: " + searchInitialTop);
        if (wrap.scrollTop > 147) {
            //wrap.addClass("fix-search");
            wrap.classList.add("fix-search");
        } else {
            //wrap.removeClass("fix-search");
            wrap.classList.remove("fix-search");
        }
    };

    $scope.phones = [
        {'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'}
    ];



});
