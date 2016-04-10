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
            $scope.tec     = res.data.skills.tec;
            $scope.sec     = res.data.skills.sec;

            //$scope.context = res.data[medical][skill1];
            //console.log($scope.context);

            // initialize
            $scope.skill = res.data.skills.medical[0];
            $scope.mods  = res.data.skills.medical[0].mods;
            $scope.mod   = $scope.mods[0];

            $scope.getSkillIconClass = function(type, skill) {
                return "icon-" + res.data.skills[type][skill].name.replace(/\s/g, '-');
            }
            $scope.getModIconClass = function(skillName, identifier) {
                return "icon-" + skillName.replace(/\s/g, '-') + '-' + identifier;
            }
            $scope.isSignature = function(skillName) {
                if(skillName=="Recovery Link")
                    return "hideSkillHead"
                else if(skillName=="Tactical Link")
                    return "hideSkillHead"
                else if(skillName=="Survivor Link")
                    return "hideSkillHead"
            }

            // context changer
            $scope.changeContext = function(type, skill) {
                $scope.skill = res.data.skills[type][skill];
                $scope.mods  = res.data.skills[type][skill].mods;
                $scope.mod   = $scope.mods[0];
                
                // change context skill icon and mod icons depending of the current skill context
                $scope.skillIconClass = "icon-" + $scope.skill.name.replace(/\s/g, '-');
                $scope.modIconClass = "icon-mod-" + $scope.mod.name.replace(/\s/g, '-');

                //console.log(res.data.skills.medical[0]);
                //console.log($scope.context.mods);
            }

            // subcontext changer
            $scope.changeSubContext = function(key) {
                $scope.mod = $scope.mods[key];
                //console.log($scope.skill.name);
                //console.log($scope.mod);
            }

        });
});