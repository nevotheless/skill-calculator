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
app.directive('toggleClass', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                element.toggleClass(attrs.toggleClass);
            });
        }
    };
});
app.controller("glob", function($scope) {
    $scope.toggleBoxState
});

// Perk Controller
app.controller('perksCtrl', function($scope, $http) {
    $http.get('data/perks.json')
        .then(function(res) {
            $scope.medical = res.data.perks.medical;
            $scope.tec     = res.data.perks.tec;
            $scope.sec     = res.data.perks.sec;

            // Init
            $scope.tree = 'Medical';
            $scope.perk = $scope.medical[0];

            $scope.changePerkContext = function(tree, perk) {
                // console.log(tree);
                // console.log(talent);
                $scope.tree = tree;
                // console.log($scope.tree);
                $scope.perk = perk;
                // console.log($scope.perk);
                // console.log($scope.talent.req);
            };


            $scope.getPerkIconClass = function(mode, perk) {
                // console.log(perk);

                var perkStripped = perk.name.replace(/\s/g, '-');

                // console.log(perkStripped);
                if(mode == 0) {
                    var ret = "icon-" + perkStripped;
                } else {
                    // console.log(perk.name);
                    var ret = "icon-" + perkStripped + '-Header';
                    // console.log(ret);
                }
                //console.log(talent);
                return ret;

            }

            $scope.getTreeIcon = function(tree) {
                if(tree == "Security")
                    return "req-sec";
                else if(tree == "Medical")
                    return "req-med";
                else if(tree == "Tech")
                    return "req-tec";
            };

        });
});

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

            $http.get('data/scaling.json')
                .then(function(calc) {
                $scope.calc = function(name, base, unit, modifier) {
                    $scope.playerScaleContext = calc.data[1];
                    var playerLevel = $scope.playerLevel;
                    // data scope
                    //  data.name
                    //  data.base
                    //  data.unit
    
                    // parse values
                    // var unit = $scope.unit;
                    // var name = $scope.name;

                    // console.log(name);
    
                    // input values
                    // var playerLevel = parseInt(level);
                    var skillPowerParsed = parseInt($scope.skillPower);
                    //console.log(skillPowerParsed);
                    var skillBonusParsed = parseInt($scope.skillBonus);

                    //console.log(playerLevel);

                    // Gives the Scaling Context for the calculations
                    if($scope.playerScaleContext == "")
                        $scope.playerScaleContext = calc.data[1];
                    else
                        $scope.playerScaleContext = calc.data[playerLevel];
    

                    // Scaling Values
                    // THIS IS THE MAGIC
                    // Based on https://docs.google.com/spreadsheets/d/1PPR9FBZ2JN1Dbd8tGlq1Mwg9PTTy82_m8A-X36dxyyc/edit#gid=914965688
                    //
                    // These are calculated using the Values of the Scaling.json, Agent Level and SkillPower
                    // console.log($scope.playerScaleContext)
                    var SkillPercentageScalingCurve = $scope.playerScaleContext.SkillPercentageScalingCurve;
                    // console.log("SkillPercentageScalingCurve: " + SkillPercentageScalingCurve);
                    var PlayerExclusiveBaseGearScalingCurve = $scope.playerScaleContext.PlayerExclusiveBaseGearScalingCurve;
                    // console.log("PlayerExclusiveBaseGearScalingCurve: " + PlayerExclusiveBaseGearScalingCurve)
                    var BaseCurve = 1.12 ^ playerLevel - 1; // TODO: This Formula is to rough and should be improved
                    // console.log("BaseCurve: " + BaseCurve)
                    var SkillPowerExpectedCurve = (BaseCurve * 200) + (BaseCurve * 250 * PlayerExclusiveBaseGearScalingCurve);
                    // console.log("SkillPowerExpectedCurve: " + SkillPowerExpectedCurve)
                    var SkillPowerRatio = skillPowerParsed / SkillPowerExpectedCurve;
                    // console.log("SkillPowerRatio: " + SkillPowerRatio)
                    var SkillCooldownScalingCurve = $scope.playerScaleContext.SkillCooldownScalingCurve;
                    // console.log("SkillCooldownScalingCurve: " + SkillCooldownScalingCurve)
                    var BaseGearScalingCurve = $scope.playerScaleContext.BaseGearScalingCurve;
                    // console.log("BaseGearScalingCurve: " + BaseGearScalingCurve)
                    var SkillScalingFinal = BaseCurve * BaseGearScalingCurve;
                    // console.log("SkillScalingFinal: " + SkillScalingFinal)
                    var HealthScalingCalc = 1 * BaseCurve * BaseGearScalingCurve;
                    // console.log("HealthScalingCalc: " + HealthScalingCalc)
                    var DamageScalingCalc = 1.27 * BaseCurve * BaseGearScalingCurve;
                    // console.log("DamageScalingCalc: " + DamageScalingCalc)
                    var SkillBaseCalc = (SkillScalingFinal * skillPowerParsed) / SkillPowerExpectedCurve;
                    // console.log("SkillBaseCalc: " + SkillBaseCalc)

                    // percentage value
                    if(unit == "%")
                    {
                        if(name == "Critical Hit Damage" || name == "Critical Hit Chance" || name == "Damage Buff") {
                            // console.log($scope.skillPower);
                            if($scope.mod.name == "Tactical Link") {
                                var result = modifier;
                                return result + unit;
                            }
                            console.log($scope.mod)
                            var result = (modifier + (modifier * SkillPercentageScalingCurve * SkillPowerRatio)) * 100
                            return result.toFixed(2) + unit;
                        }
                        if(name == "Weapon Resistance" || name == "Blast Resistance") {
                            var result = modifier * 100;
                            return result + unit;
                        }
                        if(name == "Damage Increase" || name == "Damage Resistance" || name == "Movement Speed") {
                            var result = modifier;
                            return result + unit;
                        }
                    }
                    else if (name == "Instant Heal" || name == "Effect Range" || name == "Detection Range" || name == "Deployment Range" || name == "Explosion Radius" || name == "Lifetime" || name == "Revive Time" || name == "Duration" || name == "Range" || name == "Deploy Range" || name == "Duration")
                    {
                        var result = modifier;
                        return result + unit; // TODO: Should be affected by Skill Bonus
                    }
                    else if (name == "Explosion Damage" || name == "Self Heal" || name == "Ally Heal" || name == "Healing Rate")
                    {
                        var result = modifier * SkillScalingFinal * SkillPowerRatio;
                        return result.toFixed(2) + unit;
                    }
                    else if (name == "Health") {
                        var result = modifier * (HealthScalingCalc * SkillPowerRatio);
                        return result.toFixed(2) + unit;
                    }
                    else if (name == "Damage") {
                        var result = modifier * DamageScalingCalc * SkillPowerRatio;
                        return result.toFixed(2) + unit;
                    }
                    else if (name == "Cooldown") {
                        if(base == 833) {
                            // Signature CDs
                            var result = 900 - (900 * SkillPowerRatio * SkillCooldownScalingCurve);

                            // minimal value
                            if (result < 360)
                                result = 360;

                            return result.toFixed(2) + unit;

                        } else {
                            // Other CDs
                            var result = modifier - (modifier * SkillPowerRatio * SkillCooldownScalingCurve);
                            return result.toFixed(2) + unit;
                        }
                    }

                    // percentage value
                    // <scaled base value> = <base value> * (1 + <skill power> / <percentage scaling factor>)
    
                    // flat numbers
                    // <scaled base value> = <base value> * <skill power> / <flat scaling factor>
    
                    // cooldowns
                    // <scaled cooldown> = (<base value> * (1 - <skill power> / <cooldown scaling factor>)) / (1 + <skill haste>)
    
                    // $scope.calculatedValue =
                }

            })

            $scope.getSkillIconClass = function(type, skill) {
                return "icon-" + res.data.skills[type][skill].name.replace(/\s/g, '-');
            }
            $scope.getModIconClass = function(skillName, identifier) {
                return "icon-" + skillName.replace(/\s/g, '-') + '-' + identifier;
            }
            $scope.isSignature = function(type, skillName) {
                if(type === 0) {
                    var hideState = "hideSkillHead";
                } else if(type === 1) {
                    var hideState = "removeSkillHead";
                }
                if (skillName == "Recovery Link")
                    return hideState
                else if (skillName == "Tactical Link")
                    return hideState
                else if (skillName == "Survivor Link")
                    return hideState
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
