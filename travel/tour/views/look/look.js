/**
 * Created by hxsd on 2016/9/29.
 */
angular.module("myapp").
controller("lookCtrl", function ($scope, $stateParams) {


    var id = $stateParams.id;
    var title = $stateParams.title;

    $scope.titledd=title;



})