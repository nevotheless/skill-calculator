require('angular')
require("angular-route")

// Routing
var app = angular.module("skill-calculator", ['ngRoute']).
config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!')
    $routeProvider.
    when("/skills", { templateUrl: "./partials/skills.partial.html" }).
    when("/talents", { templateUrl: "./partials/talents.partial.html" }).
    when("/perks", { templateUrl: "./partials/perks.partial.html" }).
    otherwise( { redirectTo: "/skills" })
})

// Talents Controller
app.controller('talentsCtrl', function($scope, $http) {

    $http.get('data/talents.json')
        .then(function(res){
            $scope.medical = res.data.talents.medical;
            $scope.tec     = res.data.talents.tec;
            $scope.sec     = res.data.talents.sec;

            // init
            $scope.talent = $scope.medical[0];
            $scope.tree   = 'Medical';

            // console.log($scope.medical);

            $scope.changeTalentContext = function(tree, talent) {
                // console.log(tree);
                // console.log(talent);
                $scope.tree = tree;
                $scope.talent = talent;
                // console.log($scope.talent.req);
            };
            $scope.getTreeIcon = function(tree) {
                if(tree == "Security")
                    return "req-sec";
                else if(tree == "Medical")
                    return "req-med";
                else if(tree == "Tech")
                    return "req-tec";
            };

            $scope.getHiddenState = function(req) {
                if(req == "")
                {
                    return "hidden";
                }
                //console.log(req);
            };
            $scope.getTalentIconClass = function(mode, talent) {
                if(mode == 0) {
                    var ret = "icon-" + talent.name.replace(/\s/g, '-');
                } else {
                    // console.log(talent);
                    var ret = "icon-" + talent.replace(/\s/g, '-') + '-Header';
                    //console.log(ret);
                }
                //console.log(talent);
                return ret;

            }
        });

});

// Skills Controller
app.controller('skillCtrl', function($scope, $http) {

    $http.get('data/skills.json')
        .then(function(res){
            $scope.medical = res.data.skills.medical;
            $scope.tec     = res.data.skills.tec;
            $scope.sec     = res.data.skills.sec;

            //$scope.context = res.data[medical][skill1];
            //console.log($scope.medical);

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