/**
 * Created by hxsd on 2016/9/29.
 */
angular.module("myapp",["ionic"]);

angular.module("myapp").config(function ($urlRouterProvider,$stateProvider) {

    $stateProvider.state("tour",{
        url:'/tour',
        templateUrl:"views/tour/tour.html",
        controller:"tourCtrl"
    }).state("tabs",{
     url:"/tabs",
        templateUrl:"views/tabs/tabs.html",
        abstract:true//不具像化
    }).state("tabs.recommend",{
        url:'/recommend',
        views:{"recommend": {
            templateUrl:"views/recommend/recommend.html",
            controller:"recommendCtrl"}}}).
        state("tabs.photo",{
            url:'/photo?id:title',
            views:{"recommend": {
                templateUrl:"views/photo/photo.html",
                controller:"photoCtrl"}}}).
    state("tabs.theme",{
        url:'/theme?id:title',
        views:{"recommend": {
            templateUrl:"views/theme/theme.html",
            controller:"themeCtrl"}}}).
    state("tabs.destination",
        {url:'/destination',
            views:{"destination":{
        templateUrl:"views/destination/destination.html",
        controller:"destinationCtrl"
    }}}).state("tabs.look",
        {url:'/look?id:title',
            views:{"destination":{
                templateUrl:"views/look/look.html",
                controller:"lookCtrl"
            }}})
        .state("tabs.mine",
        {url:'/mine', views:{"mine":{
        templateUrl:"views/mine/mine.html",
        controller:"mineCtrl"
    }}}).state("tabs.desc",
        {url:'/desc?id:title', views:{"recommend":{
         templateUrl:"views/desc/desc.html",
                controller:"descCtrl"
        }}}).state("tabs.detail",
        {url:'/detail?id:title', views:{"recommend":{
            templateUrl:"views/detail/detail.html",
            controller:"detailCtrl"
        }}})


    $urlRouterProvider.otherwise("/tour");
})