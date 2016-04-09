require('angular')
require("angular-route")

var app = angular.module("skill-calculator", ['ngRoute']).
config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!')
    $routeProvider.
    when("/skills", { templateUrl: "./partials/skills.partial.html" }).
    when("/talents", { templateUrl: "./partials/talents.partial.html" }).
    when("/perks", { templateUrl: "./partials/perks.partial.html" }).
    otherwise( { redirectTo: "/skills" })
})

app.controller('skillCtrl', function($scope, $http) {
    $http.get('data/skills.json')
        .then(function(res){
            $scope.medical = res.data.skills.medical;
            //$scope.context = res.data[medical][skill1];
            //console.log($scope.context);

            $scope.changeContext = function(type, skills) {
                $scope.skill = res.data.skills[type][skills];
                $scope.mods = res.data.skills[type][skills].mods;
                //console.log($scope.skills);
                //console.log($scope.context.mods);
            }
            $scope.changeSubContext = function(key) {
                $scope.mod = $scope.mods[key];
                console.log($scope.mod);
                //console.log($scope.subContext);
            }

        });
    $scope.something = "Hello";
});