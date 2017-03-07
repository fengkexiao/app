/**
 * Created by hxsd on 2016/10/5.
 */
angular.module("myapp").
controller("themeCtrl", function ($scope, $stateParams) {

    var id = $stateParams.id;
    var title = $stateParams.title;
    $scope.titled=title;

})