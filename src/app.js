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

            // initialize
            $scope.skill = res.data.skills.medical[0];
            $scope.mods  = res.data.skills.medical[0].mods;
            $scope.mod   = $scope.mods[0];

            $http.get('data/scaling.json')
                .then(function(calc) {
                $scope.calc = function(name, base, unit, modifier) {
                    $scope.playerScaleContext = calc.data[1];
                    var playerLevel = $scope.playerLevel;
    
                    // input values
                    // var playerLevel = parseInt(level);
                    var skillPowerParsed = parseInt($scope.skillPower);
                    //console.log(skillPowerParsed);
                    var skillBonusParsed = parseInt($scope.skillBonus);

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

                    var SkillPercentageScalingCurve = $scope.playerScaleContext.SkillPercentageScalingCurve;
                    var PlayerExclusiveBaseGearScalingCurve = $scope.playerScaleContext.PlayerExclusiveBaseGearScalingCurve;
                    var BaseCurve = 1.12 ^ (playerLevel - 1);
                    var SkillPowerExpectedCurve = (BaseCurve * 200) + (BaseCurve * 250 * PlayerExclusiveBaseGearScalingCurve);
                    var SkillPowerRatio = skillPowerParsed / SkillPowerExpectedCurve;
                    var SkillCooldownScalingCurve = $scope.playerScaleContext.SkillCooldownScalingCurve;
                    var BaseGearScalingCurve = $scope.playerScaleContext.BaseGearScalingCurve;
                    var SkillScalingFinal = BaseCurve * BaseGearScalingCurve;
                    var HealthScalingCalc = 1 * BaseCurve * BaseGearScalingCurve;
                    var DamageScalingCalc = 1.27 * BaseCurve * BaseGearScalingCurve;
                    // var SkillBaseCalc = (SkillScalingFinal * skillPowerParsed) / SkillPowerExpectedCurve;

                    /*
                     * Some poor exception handling
                     */

                    if(unit == "%")
                    {
                        if(name == "Critical Hit Damage" || name == "Critical Hit Chance" || name == "Damage Buff") {
                            // console.log($scope.skillPower);
                            if($scope.mod.name == "Tactical Link") {
                                var result = modifier;
                            }
                            //console.log($scope.mod)
                            var result = (modifier + (modifier * SkillPercentageScalingCurve * SkillPowerRatio)) * 100
                        }
                        if(name == "Weapon Resistance" || name == "Blast Resistance") {
                            var result = modifier * 100;
                        }
                        if(name == "Damage Increase" || name == "Damage Resistance" || name == "Movement Speed") {
                            var result = modifier;
                        }
                    }
                    else if (name == "Instant Heal" || name == "Effect Range" || name == "Detection Range" || name == "Deployment Range" || name == "Explosion Radius" || name == "Lifetime" || name == "Revive Time" || name == "Duration" || name == "Range" || name == "Deploy Range" || name == "Duration")
                    {
                        var result = modifier;
                    }
                    else if (name == "Explosion Damage" || name == "Self Heal" || name == "Ally Heal" || name == "Healing Rate")
                    {
                        // console.log($scope.mod);
                        var result = modifier * SkillScalingFinal * SkillPowerRatio;
                    }
                    else if (name == "Health") {
                        var result = modifier * (HealthScalingCalc * SkillPowerRatio);
                    }
                    else if (name == "Damage") {
                        var result = modifier * DamageScalingCalc * SkillPowerRatio;
                    }
                    else if (name == "Cooldown") {
                        var result = modifier - (modifier * SkillPowerRatio * SkillCooldownScalingCurve);
                    }

                    /* Cap function
                     * This function returns the value after checking if the
                     * calculated value is higher or lower as allowed and
                     * returns a corrected value
                     */

                    var cap = function(skillName, modName, attributeName, calculatedValue) {
                        switch (skillName) {
                            case "Pulse":
                                switch (attributeName) {
                                    case "Critical Hit Chance":
                                        if(calculatedValue >= 40)
                                            return 40
                                        else
                                            return calculatedValue;
                                        break;
                                    case "Critical Hit Damage":
                                        if(calculatedValue >= 100)
                                            return 100
                                        else
                                            return calculatedValue
                                        break;
                                    case "Range":
                                        if(calculatedValue >= 90)
                                            return 90
                                        else
                                            return calculatedValue
                                        break;
                                    case "Duration":
                                        if(calculatedValue >= 40)
                                            return 40
                                        else
                                            return calculatedValue
                                        break;
                                    case "Cooldown":
                                        if(calculatedValue <= 20)
                                            return 20
                                        else
                                            return calculatedValue
                                        break;
                                }
                                break;
                            case "Sticky Bomb":
                                switch (attributeName) {
                                    case "Explosion Damage":
                                        if(calculatedValue >= 250000)
                                            return 250000
                                        else
                                            return calculatedValue
                                        break;
                                    case "Explosion Radius":
                                        if(calculatedValue >= 10)
                                            return 10
                                        else
                                            return calculatedValue
                                        break;
                                    case "Deploy Range":
                                        if(calculatedValue >= 80)
                                            return 80
                                        else
                                            return calculatedValue
                                        break;
                                    case "Cooldown":
                                        if(calculatedValue <= 20)
                                            return 20
                                        else
                                            return calculatedValue
                                        break;
                                }
                                break;
                            case "Ballistic Shield":
                                switch (attributeName) {
                                    case "Health":
                                        if(calculatedValue >= 500000)
                                            return 500000
                                        else
                                            return calculatedValue
                                        break;
                                    case "Damage Increase":
                                        if(calculatedValue >= 30)
                                            return 30
                                        else
                                            return calculatedValue
                                        break;
                                    case "Damage Resistance":
                                        if(calculatedValue >= 15)
                                            return 15
                                        else
                                            return calculatedValue
                                        break;
                                    case "Cooldown":
                                        if(calculatedValue <= 15)
                                            return 15
                                        else
                                            return calculatedValue
                                        break;
                                }
                                break;
                            case "First Aid":
                                switch (attributeName) {
                                    case "Self Heal":
                                        if(calculatedValue >= 100000)
                                            return 100000
                                        else
                                            return calculatedValue
                                        break;
                                    case "Ally Heal":
                                        if(calculatedValue >= 100000)
                                            return 100000
                                        else
                                            return calculatedValue
                                        break;
                                    case "Range":
                                        if(calculatedValue >= 6)
                                            return 6
                                        else
                                            return calculatedValue
                                        break;
                                    case "Deploy Range":
                                        if(calculatedValue >= 60)
                                            return 60
                                        else
                                            return calculatedValue
                                        break;
                                    case "Cooldown":
                                        if(calculatedValue <= 20)
                                            return 20
                                        else
                                            return calculatedValue
                                        break;
                                }
                                break;
                            case "Turret":
                                switch (attributeName) {
                                    case "Damage":
                                        if(calculatedValue >= 2600)
                                            return 2600
                                        else
                                            return calculatedValue
                                        break;
                                    case "Range":
                                        if(calculatedValue >= 50)
                                            return 50
                                        else
                                            return calculatedValue
                                        break;
                                    case "Lifetime":
                                        if(calculatedValue >= 50)
                                            return 50
                                        else
                                            return calculatedValue
                                        break;
                                    case "Health":
                                        if(calculatedValue >= 150000)
                                            return 150000
                                        else
                                            return calculatedValue
                                        break;
                                    case "Cooldown":
                                        if(calculatedValue <= 20)
                                            return 20
                                        else
                                            return calculatedValue
                                        break;
                                }
                                break;
                            case "Smart Cover":
                                switch (attributeName) {
                                    case "Damage Resistance":
                                        if(calculatedValue >= 75)
                                            return 75
                                        else
                                            return calculatedValue
                                        break;
                                    case "Damage Buff":
                                        if(calculatedValue >= 50)
                                            return 50
                                        else
                                            return calculatedValue
                                        break;
                                    case "Lifetime":
                                        if(calculatedValue >= 50)
                                            return 50
                                        else
                                            return calculatedValue
                                        break;
                                    case "Effect Range":
                                        if(calculatedValue >= 15)
                                            return 15
                                        else
                                            return calculatedValue
                                        break;
                                    case "Deploy Range":
                                        if(calculatedValue >= 50)
                                            return 50
                                        else
                                            return calculatedValue
                                        break;
                                    case "Cooldown":
                                        if(calculatedValue <= 20)
                                            return 20
                                        else
                                            return calculatedValue
                                        break;
                                }
                                break;
                            case "Support Station":
                                switch (attributeName) {
                                    case "Healing Rate":
                                        if(calculatedValue >= 5000)
                                            return 5000
                                        else
                                            return calculatedValue
                                        break;
                                    case "Revive Time":
                                        if(calculatedValue <= 3)
                                            return 3
                                        else
                                            return calculatedValue
                                        break;
                                    case "Lifetime":
                                        if(calculatedValue >= 30)
                                            return 30
                                        else
                                            return calculatedValue
                                        break;
                                    case "Range":
                                        if(calculatedValue >= 15)
                                            return 15
                                        else
                                            return calculatedValue
                                        break;
                                    case "Health":
                                        if(calculatedValue >= 75000)
                                            return 75000
                                        else
                                            return calculatedValue
                                        break;
                                    case "Cooldown":
                                        if(calculatedValue <= 20)
                                            return 20
                                        else
                                            return calculatedValue
                                        break;
                                }
                                break;
                            case "Seeker Mine":
                                switch (attributeName) {
                                    case "Explosion Damage":
                                        if(calculatedValue >= 150000)
                                            return 150000
                                        else
                                            return calculatedValue
                                        break;
                                    case "Explosion Radius":
                                        if(calculatedValue >= 8)
                                            return 8
                                        else
                                            return calculatedValue
                                        break;
                                    case "Detection Range":
                                        if(calculatedValue >= 50)
                                            return 50
                                        else
                                            return calculatedValue
                                        break;
                                    case "Lifetime":
                                        if(calculatedValue >= 60)
                                            return 60
                                        else
                                            return calculatedValue
                                        break;
                                    case "Health":
                                        if(calculatedValue >= 25000)
                                            return 25000
                                        else
                                            return calculatedValue
                                        break;
                                    case "Cooldown":
                                        if(calculatedValue <= 20)
                                            return 20
                                        else
                                            return calculatedValue
                                        break;
                                }
                                break;
                            case "Mobile Cover":
                                switch (attributeName) {
                                    case "Health":
                                        if(calculatedValue >= 1200000)
                                            return 1200000
                                        else
                                            return calculatedValue
                                        break;
                                    case "Weapon Resistance":
                                        if(calculatedValue >= 30)
                                            return 30
                                        else
                                            return calculatedValue
                                        break;
                                    case "Blast Resistance":
                                        if(calculatedValue >= 35)
                                            return 35
                                        else
                                            return calculatedValue
                                        break;
                                    case "Cooldown":
                                        if(calculatedValue <= 15)
                                            return 15
                                        else
                                            return calculatedValue
                                        break;
                                }
                                break;
                            case "Recovery Link":
                                switch (attributeName) {
                                    case "Healing Rate":
                                        if(calculatedValue >= 25279)
                                            return 25279
                                        else
                                            return calculatedValue
                                        break;
                                    case "Instant Heal":
                                        if(calculatedValue >= 7222)
                                            return 7222
                                        else
                                            return calculatedValue
                                        break;
                                    case "Duration":
                                        if(calculatedValue >= 5)
                                            return 5
                                        else
                                            return calculatedValue
                                        break;
                                    case "Range":
                                        if(calculatedValue >= 40)
                                            return 40
                                        else
                                            return calculatedValue
                                        break;
                                    case "Cooldown":
                                        if(calculatedValue <= 360)
                                            return 360
                                        else
                                            return calculatedValue
                                        break;
                                }
                            case "Survivor Link":
                                switch (attributeName) {
                                    case "Damage Resistance":
                                        if(calculatedValue >= 80)
                                            return 80
                                        else
                                            return calculatedValue
                                        break;
                                    case "Movement Speed":
                                        if(calculatedValue >= 30)
                                            return 30
                                        else
                                            return calculatedValue
                                        break;
                                    case "Duration":
                                        if(calculatedValue >= 15)
                                            return 15
                                        else
                                            return calculatedValue
                                        break;
                                    case "Range":
                                        if(calculatedValue >= 25)
                                            return 25
                                        else
                                            return calculatedValue
                                        break;
                                    case "Cooldown":
                                        if(calculatedValue <= 360)
                                            return 360
                                        else
                                            return calculatedValue
                                        break;
                                }
                            case "Tactical Link":
                                switch (attributeName) {
                                    case "Damage Buff":
                                        if(calculatedValue >= 50)
                                            return 50
                                        else
                                            return calculatedValue
                                        break;
                                    case "Critical Hit Chance":
                                        if(calculatedValue >= 20)
                                            return 20
                                        else
                                            return calculatedValue
                                        break;
                                    case "Duration":
                                        if(calculatedValue >= 12)
                                            return 12
                                        else
                                            return calculatedValue
                                        break;
                                    case "Range":
                                        if(calculatedValue >= 25)
                                            return 25
                                        else
                                            return calculatedValue
                                        break;
                                    case "Cooldown":
                                        if(calculatedValue <= 360)
                                            return 360
                                        else
                                            return calculatedValue
                                        break;
                                }
                                break;
                        }

                    }
                    result = cap($scope.skill.name, $scope.mod.name, name, result);
                    console.log(result);
                    return result.toFixed(2) + unit;
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
