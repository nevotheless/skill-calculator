var data = {
  med: {
    skill1: {
      name: "Pulse",
      desc: "Sends out recon pulse that marks hostiles and allies through walls and covers.",
      req: "",
      mod0: {
        name: "Pulse",
        desc: "Sends out recon pulse that marks hostiles and allies through walls and covers.",
        attr: {
          range: {
            name: 'Range',
            base: 60.0,
            unit: 'm',
          },
          duration: {
            name: 'Duration',
            base: 25.0,
            unit: 's',
          },
          critChance: {
            name: 'Critical Hit Chance',
            base: 12.8,
            unit: '%',
          },
          critDamage: {
            name: 'Critical Hit Damage',
            base: 25.6,
            unit: '%',
          },
          cooldown: {
            name: 'Cooldown',
            base: 55.5,
            unit: 's',
          }
        },
      },
      mod1: {
        name: "Recon Pack",
        desc: "The pulse has an increased range and is capable of locating nearby loot containers.",
        req: "Quarantine",
        attr: {
          range: {
            name: 'Range',
            base: 80.0,
            unit: 'm',
          },
          duration: {
            name: 'Duration',
            base: 17.5,
            unit: 's',
          },
          critChance: {
            name: 'Critical Hit Chance',
            base: 12.8,
            unit: '%',
          },
          critDamage: {
            name: 'Critical Hit Damage',
            base: 25.6,
            unit: '%',
          },
          cooldown: {
            name: 'Cooldown',
            base: 55.5,
            unit: 's',
          }
        },
      },
      mod2: {
        name: "Scrambler",
        desc: "The pulse protects the user and allies from hostile pulse scans.",
        attr: {
          range: {
            name: 'Range',
            base: 60.0,
            unit: 'm',
          },
          duration: {
            name: 'Duration',
            base: 25.0,
            unit: 's',
          },
          critChance: {
            name: 'Critical Hit Chance',
            base: 6.4,
            unit: '%',
          },
          critDamage: {
            name: 'Critical Hit Damage',
            base: 16.0,
            unit: '%',
          },
          cooldown: {
            name: 'Cooldown',
            base: 55.5,
            unit: 's',
          }
        },
      },
      mod3: {
        name: "Tactical Scanner",
        desc: "Damage is increased when attacking any hostile targets identified by the pulse scan.",
        attr: {
          range: {
            name: 'Range',
            base: 60.0,
            unit: 'm',
          },
          duration: {
            name: 'Duration',
            base: 25.0,
            unit: 's',
          },
          critChance: {
            name: 'Critical Hit Chance',
            base: 16.0,
            unit: '%',
          },
          critDamage: {
            name: 'Critical Hit Damage',
            base: 32.0,
            unit: '%',
          },
          cooldown: {
            name: 'Cooldown',
            base: 64.8,
            unit: 's',
          }
        },
      },
      mod4: {
        name: "Threat Detector",
        desc: "The pulse gives an early warning of nearby hostiles and identifies if the user has been scanned by a hostile pulse.",
        attr: {},
      },
    },
    skill2: {
      name: "First Aid",
      desc: "Heals all allies within a small radius. The device can be used on location or launched to a distant target.",
      req: "",
      mod0: {
        attr:{
          selfHeal: {
            name: "Self Heal",
            base: 7390.0,
            unit: 'HP'
          },
          allyHeal: {
            name: "Ally Heal",
            base: 7390.0,
            unit: 'HP'
          },
          range: {
            name: "Range",
            base: 3.0,
            unit: 'm'
          },
          deployRange: {
            name: "Deploy Range",
            base: 40.0,
            unit: 'm'
          },
          cooldown: {
            name: "Cooldown",
            base: 41.7,
            unit: 's'
          },
        },
      },
      mod1: {
        name: "Defibrillator",
        desc: "The device can revive downed allies and grant them a portion of their normal health.",
        attr:{
          selfHeal: {
            name: "Self Heal",
            base: 7390.0,
            unit: 'HP'
          },
          allyHeal: {
            name: "Ally Heal",
            base: 7390.0,
            unit: 'HP'
          },
          range: {
            name: "Range",
            base: 3.0,
            unit: 'm'
          },
          deployRange: {
            name: "Deploy Range",
            base: 40.0,
            unit: 'm'
          },
          cooldown: {
            name: "Cooldown",
            base: 55.5,
            unit: 's'
          },
        },

      },
      mod2: {
        name: "Overdose",
        desc: "The device heals targets more efficiently, and may even extend the target's health beyond its normal rating.",
        attr:{
          selfHeal: {
            name: "Self Heal",
            base: 10078.0,
            unit: 'HP'
          },
          allyHeal: {
            name: "Ally Heal",
            base: 10078.0,
            unit: 'HP'
          },
          range: {
            name: "Range",
            base: 2.0,
            unit: 'm'
          },
          deployRange: {
            name: "Deploy Range",
            base: 40.0,
            unit: 'm'
          },
          cooldown: {
            name: "Cooldown",
            base: 41.7,
            unit: 's'
          },
        },
      },
      mod3: {
        name: "Booster Shot",
        desc: "Temporarily increases damage for the affected targets in additionto the normal healing effect.",
        attr:{
          selfHeal: {
            name: "Self Heal",
            base: 5912.0,
            unit: 'HP'
          },
          allyHeal: {
            name: "Ally Heal",
            base: 8062.0,
            unit: 'HP'
          },
          range: {
            name: "Range",
            base: 3.0,
            unit: 'm'
          },
          deployRange: {
            name: "Deploy Range",
            base: 40.0,
            unit: 'm'
          },
          cooldown: {
            name: "Cooldown",
            base: 41.7,
            unit: 's'
          },
        },
      },
      mod4: {
        name: "Extended Service",
        desc: "Extends the duration of the effect, giving allies more time to approach the device.",
        attr: "",
      },
    },
    skill3: {
      name: "Support Station",
      desc: "Drops a support station that heals allies and can be used to revive downed allies.",
      req: "Virus Lab",
      mod0: {
        name: "Support Station",
        desc: "Drops a support station that heals allies and can be used to revive downed allies.",
        attr:{
          range: {
            name: "Range",
            base: 8.0,
            unit: "m",
          },
          healingRate: {
            name: "Healing Rate",
            base: 403,
            unit: "HP/s",
          },
          reviveTime:{
            name: "Revive Time",
            base: 5.0,
            unit: "s",
          },
          lifetime:{
            name: "Lifetime",
            base: 30.0,
            unit: "s",
          },
          health: {
            name: "Health",
            base: 5375,
            unit: "HP",
          },
          cooldown: {
            name: "Cooldown",
            base: 83.3,
            unit: "s",
          }
        }
      },
      mod1: {
        name: "Life Support",
        desc: "Drops a revival station that automatically revives any aliies who are downed within the affected area.",
        attr:{
          range: {
            name: "Range",
            base: 6.0,
            unit: "m",
          },
          healingRate: {
            name: "Heling Rate",
            base: 403,
            unit: "HP/s",
          },
          reviveTime:{
            name: "Revive Time",
            base: 5.0,
            unit: "s",
          },
          lifeTime:{
            name: "Lifetime",
            base: 30.0,
            unit: "s",
          },
          health: {
            name: "Health",
            base: 5375,
            unit: "HP",
          },
          cooldown: {
            name: "Cooldown",
            base: 83.3,
            unit: "s",
          }
        }
      },
      mod2: {
        name: "Immunizer",
        desc: "Drops a recovery station that removes Status Effects and makes allies immune while within the affected area.",
        attr:{
          range: {
            name: "Range",
            base: 8.0,
            unit: "m",
          },
          healingRate: {
            name: "Heling Rate",
            base: 403,
            unit: "HP/s",
          },
          reviveTime:{
            name: "Revive Time",
            base: 5.0,
            unit: "s",
          },
          lifeTime:{
            name: "Lifetime",
            base: 24.0,
            unit: "s",
          },
          health: {
            name: "Health",
            base: 5375,
            unit: "HP",
          },
          cooldown: {
            name: "Cooldown",
            base: 83.3,
            unit: "s",
          }
        }
      },
      mod3: {
        name: "Ammo Cache",
        desc: "While close to the device, allies regain their ammo as they reload, and skill cooldown recovery is faster.",
        attr:{
          range: {
            name: "Range",
            base: 8.0,
            unit: "m",
          },
          healingRate: {
            name: "Heling Rate",
            base: 322,
            unit: "HP/s",
          },
          reviveTime:{
            name: "Revive Time",
            base: 5.0,
            unit: "s",
          },
          lifeTime:{
            name: "Lifetime",
            base: 30.0,
            unit: "s",
          },
          health: {
            name: "Health",
            base: 5375,
            unit: "HP",
          },
          cooldown: {
            name: "Cooldown",
            base: 83.3,
            unit: "s",
          }
        }
      },
      mod4: {
        name: "Discharge",
        desc: "When the device is disabled, nearby aliies receive immediate healing.",
        attr: {},
      },
    },
    sig: {
      name: "Recovery Link",
      desc: "Heals and cures the users and nearby allies. Revives downed allies within range. Can \"overheal\" beyond maximum health.",
      req: "Disaster Aid",
      mod0: {
        attr: {
          instantHeal: {
            name: "Instant Heal",
            base: 25279,
            unit: "HP",
          },
          healingRate: {
            name: "Healing Rate",
            base: 7222,
            unit: "HP/s",
          },
          duration: {
            name: "Duration",
            base: 5,
            unit: "s",
          },
          range:{
            name: "Range",
            base: 40,
            unit: "m",
          },
          cooldown: {
            name: "Cooldown",
            base: 833,
            unit: "s",
          }
        },
      },
    }
  },
  tech: {
    skill1: {
      name: "Sticky bomb",
      desc: "Fires a bomb that sticks to most surfaces and explodes when detonated remotely.",
      req: "",
      mod0: {
        attr: {
          explosionDamage: {
            name: 'Explosion Damage',
            base: 1650.0,
            unit: 'HP',
          },
          explosionRadius: {
            name: 'Explosion Radius',
            base: 5.0,
            unit: 'm',
          },
          deployRange: {
            name: 'Deploy Range',
            base: 50.0,
            unit: 'm',
          },
          cooldown: {
            name: 'Cooldown',
            base: 45.0,
            unit: 's',
          }
        },
      },
      mod1: {
        name: "BFB",
        desc: "Increases the damage and radius of the explosion and may cause targets to bleed.",
        attr: {
          explosionDamage: {
            name: 'Explosion Damage',
            base: 2475.0,
            unit: 'HP',
          },
          explosionRadius: {
            name: 'Exoplosion Radius',
            base: 6.25,
            unit: 'm'
          },
          deployRange: {
            name: 'Deploy Range',
            base: 50.0,
            unit: 'm',
          },
          cooldown: {
            name: 'Cooldown',
            base: 90.0,
            unit: 's'
          }
        }
      },
      mod2: {
        name: "Flashbang",
        desc: "The bomb explodes with a non-lethal effect that blinds and disrupts all targets in range.",
        attr: {
          explosionDamage: {
            name: 'Explosion Damage',
            base: 165.0,
            unit: 'HP',
          },
          explosionRadius: {
            name: 'Exoplosion Radius',
            base: 8.0,
            unit: 'm'
          },
          deployRange: {
            name: 'Deploy Range',
            base: 50.0,
            unit: 'm',
          },
          cooldown: {
            name: 'Cooldown',
            base: 45.0,
            unit: 's'
          }
        }
      },
      mod3: {
        name: "Proximity Fuse",
        desc: "The bomb explodes automatically when a hostile target is within range.",
        attr: {
          explosionDamage: {
            name: 'Explosion Damage',
            base: 1650.0,
            unit: 'HP',
          },
          explosionRadius: {
            name: 'Exoplosion Radius',
            base: 6.25,
            unit: 'm'
          },
          deployRange: {
            name: 'Deploy Range',
            base: 50.0,
            unit: 'm',
          },
          cooldown: {
            name: 'Cooldown',
            base: 45.0,
            unit: 's'
          }
        }
      },
      mod4: {
        name: "nodata",
        desc: "(?)Makes bomb harder to detect by enemies"
      },
    },
    skill2: {
      name: "Turret",
      desc: "Deploys a stationary turret that attacks nearby hostiles until it is destroyed or its battery runs out.",
      req: "Control Room",
      mod0: {

      },
      mod1: {
        name: "Active Sensor",
        desc: "Increases turret's damage and pulses attacked targets, making them visible to all allies.",
      },
      mod2: {
        name: "Dragonbreath",
        desc: "Turret has reduced range but shoots a column of fire.",
      },
      mod3: {
        name: "Zapper",
        desc: "Turret shoots electrical darts that damage and shock multiple targets.",
      },
      mod4: {
        name: "Scorched Earth",
        desc: "Turret explodes when manually disabled, damaging all nearby targets."
      },
    },
    skill3: {
      name: "Seeker Mine",
      desc: "Releases an automated mine that seeks out hostile targets before exploding on proximity.",
      req: "Communications",
      mod0: {

      },
      mod1: {
        name: "Airburst",
        desc: "Upon impact, the mine is launched in the air and releases a cluster of small incendiary explosives.",
      },
      mod2: {
        name: "Gas Charge",
        desc: "The mine seeks out and moves between multiple targets, releasing a cloud of disorienting gas on impact.",
      },
      mod3: {
        name: "Cluster",
        desc: "Mine separates into smaller pieces that seek out multiple targets simultaneously.",
      },
      mod4: {
        name: "Seeking-Betty",
        desc: "Mine can bounce onto and over low covers, and can move directly towards its target."
      },
    },
    sig: {
      name: "Tactical Link",
      desc: "Increases damage and critical hit chance to the user and all nearby allies.",
      req: "Division Tech",
      mod0: {
        
      },
    }
  },
  sec: {
    skill1: {
      name: "Ballistic Shield",
      desc: "Equips a portable Ballistic Shield that absorbs damage. The user can only use their sidearm while the shield is active.",
      req: "",
      mod0: {
        attr: {
          health: {
            name: 'Health',
            base: 1800.0,
            unit: 'HP',
          },
          damageInc: {
            name: 'Damage Increase',
            base: 10.0,
            unit: '%',
          },
          damageRes: {
            name: 'Damage Resistance',
            base: 10.0,
            unit: '%',
          },
          cooldown: {
            name: 'Cooldown',
            base: 42.4,
            unit: 's',
          }
        }
      },
      mod1: {
        name: "nodata",
        desc: "(?)Stronger and lighter riot shield, pulses targets that shoot at it",
      },
      mod2: {
        name: "nodata",
        desc: "(?)Strengthen shield and increase side arm damage, knockback, accuracy and faster reload speed",
      },
      mod3: {
        name: "nodata",
        desc: "(?)Convert small portion of incoming damage as healing",
      },
      mod4: {
        name: "nodata",
        desc: "(?)Allows riot shield to heal itself after not taking damage for a small amount of time."
      },
    },
    skill2: {
      name: "Smart Cover",
      desc: "Reinforces a cover, increasing the users damage and decreasing the incoming damage for all allies behind it.",
      req: "Situation Room",
      mod0: {

      },
      mod1: {
        name: "nodata",
        desc: "(?)Hostiles using the affected cover deal less damage and take more damage.",
      },
      mod2: {
        name: "nodata",
        desc: "(?)Slow health recovery and faster skill cooldown recharge",
      },
      mod3: {
        name: "nodata",
        desc: "(?)Anyone behind cover is immune to pulse and any hostile shot by allies in this cover are pulsed",
      },
      mod4: {
        name: "nodata",
        desc: "(?)Extends duration of effect after leaving the cover."
      },
    },
    skill3: {
      name: "Mobile Cover",
      desc: "Creates a temporary cover for one person, which provides standard cover protection until destroyed.",
      req: "Armory",
      mod0: {

      },
      mod1: {
        name: "nodata",
        desc: "(?)Fixed cover is larger allowing more than 1 person behind it.",
      },
      mod2: {
        name: "nodata",
        desc: "(?)Adds remote explosives and damages hostiles in front of it.",
      },
      mod3: {
        name: "nodata",
        desc: "(?)Increases your damage output while behind it and protects you from hostile pulses.",
      },
      mod4: {
        name: "nodata",
        desc: "(?)If cover is destroyed, any allies behind it gain damage resistance"
      },
    },
    sig: {
      name: "Survivor Link",
      desc: "Increases damage resistance and speed for the user and nearby allies.",
      req: "Barracks",
      mod0: {

      },
      mod1: {
        name: "nodata",
        desc: "nodata",
      },
      mod2: {
        name: "nodata",
        desc: "nodata",
      },
      mod3: {
        name: "nodata",
        desc: "nodata",
      },
      mod4: {
        name: "nodata",
        desc: "nodata"
      },
    }
  },
};



var choiceSkill = "med1";
var choiceMod = $("#modBoxes").find(".modBox").attr('id');
var activeSkill = 'skill1';
var activeMod = 1;
var pickMod = 0;
var activeTree = "med";
var choiceTab = "tabSkills";


$(".skillBox").click(function() {

  $(this).addClass("boxToggle");

  if (choiceSkill === $(this).attr('id')) {
    $(".modBox").removeClass("boxToggle");
    $("#modBoxes").find(".modBox").addClass("boxToggle");
    choiceMod = $("#modBoxes").find(".modBox").attr('id');
  } else if (choiceSkill !== "") {
    $("#" + choiceSkill).removeClass("boxToggle");
    choiceSkill = "";
    choiceSkill = $(this).attr('id');
    $(".modBox").removeClass("boxToggle");
    $("#modBoxes").find(".modBox").addClass("boxToggle");
    choiceMod = $("#modBoxes").find(".modBox").attr('id');
  }

});




$(".modBox").click(function() {


if($(this).attr('id') !== 'sig'){
  $(this).addClass("boxToggle");
  if (choiceMod === $(this).attr('id')) {
  } else if (choiceMod !== "") {

    $("#" + choiceMod).removeClass("boxToggle");
    choiceMod = "";
    choiceMod = $(this).attr('id');
// console.log(choiceMod);

  }
}else{
  if($(this).hasClass("boxToggle")){
    $(this).removeClass("boxToggle");
  }else{
    $(this).addClass("boxToggle");
  }
}
});


//TABS

var noticeTalentsPlayed = false;
var noticePerksPlayed = false;

$(".noticeTalents").slideUp();
$(".noticePerks").slideUp();

$(".noticeSkills").slideUp().delay(500).slideDown().delay(6000).slideUp();

$(".tab").click(function(){

  $(this).addClass("tabToggle");

  if (choiceTab === $(this).attr('id')) {

  } else if (choiceTab !== "") {
    if($(this).attr('id') === "tabTalents"){
      // $(this).child('.tabLine').css('height','10px');
      $("#" + choiceTab).removeClass("tabToggle");
      choiceTab = "";
      choiceTab = $(this).attr('id');
      $(".tabContainerTalents").css("display","block");
      if(noticeTalentsPlayed === false){
        $(".noticeTalents").delay(500).slideDown().delay(6000).slideUp(function(){noticeTalentsPlayed = true;})
      }
      $(".tabContainerPerks").css("display","none");
      $(".tabContainerSkills").css("display","none");
    }
    if($(this).attr('id') === "tabPerks"){
      $("#" + choiceTab).removeClass("tabToggle");
      choiceTab = "";
      choiceTab = $(this).attr('id');
      $(".tabContainerTalents").css("display","none");
      $(".tabContainerPerks").css("display","block");
      if(noticePerksPlayed === false){
        $(".noticePerks").delay(500).slideDown().delay(6000).slideUp(function(){noticePerksPlayed = true;})
      }
      $(".tabContainerSkills").css("display","none");
    }
    if($(this).attr('id') === "tabSkills"){
      $("#" + choiceTab).removeClass("tabToggle");
      choiceTab = "";
      choiceTab = $(this).attr('id');
      $(".tabContainerTalents").css("display","none");
      $(".tabContainerPerks").css("display","none");
      $(".tabContainerSkills").css("display","block");
    }
  }

});



function modCheck(tree) {
  if(activeSkill == 'sig'){
    $('.modsTable').css('display','none');
  }else{
    $('.modsTable').css('display','block');
  }
  if (activeMod === 0) {
    if(activeSkill == 'sig'){
      $("#infoDescTitle").text("Signature: " + data[tree][activeSkill].name);
    }else{
      $("#infoDescTitle").text("Base: " + data[tree][activeSkill].name);
    }
    $("#infoDesc").text(data[tree][activeSkill].desc);
  } else if (activeMod === 1) {
    $("#infoDescTitle").text("Mod: " + data[tree][activeSkill]["mod1"]["name"]);
    $("#infoDesc").text(data[tree][activeSkill].mod1.desc);
  } else if (activeMod === 2) {
    $("#infoDescTitle").text("Mod: " + data[tree][activeSkill]["mod2"]["name"]);
    $("#infoDesc").text(data[tree][activeSkill].mod2.desc);
  } else if (activeMod === 3) {
    $("#infoDescTitle").text("Mod: " + data[tree][activeSkill]["mod3"]["name"]);
    $("#infoDesc").text(data[tree][activeSkill].mod3.desc);
  } else if (activeMod === 4) {
    $("#infoDescTitle").text("Master: " + data[tree][activeSkill]["mod4"]["name"]);
    $("#infoDesc").text(data[tree][activeSkill].mod4.desc);
  }
//   $("#infoDescTitle").text("Mod: " + data[tree][activeSkill]['mod'+activeMod]['name']);
//   $("#infoDesc").text(data[tree][activeSkill]['mod'+activeMod]['desc']);
  if (activeTree === "med") {
    $('.infoBox').css("border-top", "2px #6ec449 solid");
    $('.infoBox').css("border-bottom", "2px #6ec449 solid");
  } else if (activeTree === "tech") {
    $('.infoBox').css("border-top", "2px #ffca57 solid");
    $('.infoBox').css("border-bottom", "2px #ffca57 solid");
  } else if (activeTree === "sec") {
    $('.infoBox').css("border-top", "2px #4084c5 solid");
    $('.infoBox').css("border-bottom", "2px #4084c5 solid");
  }
}

function sigCheck(tree) {
    $("#infoDescTitle").text("Master: " + data[tree][activeSkill].mod4.name);
    $("#infoDesc").text(data[tree][activeSkill].mod4.desc);
//   $("#infoDescTitle").text("Mod: " + data[tree][activeSkill]['mod'+activeMod]['name']);
//   $("#infoDesc").text(data[tree][activeSkill]['mod'+activeMod]['desc']);
}

function backMod(tree){
  if (pickMod === 0) {
    if(activeSkill == 'sig'){
      $("#infoDescTitle").text("Signature: " + data[tree][activeSkill].name);
    }
    $("#infoDescTitle").text("Base: " + data[tree][activeSkill].name);
    $("#infoDesc").text(data[tree][activeSkill].desc);
  } else if (activeMod === 1) {
    $("#infoDescTitle").text("Mod: " + data[tree][activeSkill]['mod'+pickMod].name);
    $("#infoDesc").text(data[tree][activeSkill]['mod'+pickMod].desc);
  } else if (activeMod === 2) {
    $("#infoDescTitle").text("Mod: " + data[tree][activeSkill]["mod"+pickMod].name);
    $("#infoDesc").text(data[tree][activeSkill]['mod'+pickMod].desc);
  } else if (activeMod === 3) {
    $("#infoDescTitle").text("Mod: " + data[tree][activeSkill]["mod"+pickMod].name);
    $("#infoDesc").text(data[tree][activeSkill]['mod'+pickMod].desc);
  } else if (activeMod === 4) {
    $("#infoDescTitle").text("Master: " + data[tree][activeSkill]["mod"+pickMod].name);
    $("#infoDesc").text(data[tree][activeSkill]['mod'+pickMod].desc);
  }
  if (activeTree === "med") {
    $('.infoBox').css("border-top", "2px #6ec449 solid");
    $('.infoBox').css("border-bottom", "2px #6ec449 solid");
  } else if (activeTree === "tech") {
    $('.infoBox').css("border-top", "2px #ffca57 solid");
    $('.infoBox').css("border-bottom", "2px #ffca57 solid");
  } else if (activeTree === "sec") {
    $('.infoBox').css("border-top", "2px #4084c5 solid");
    $('.infoBox').css("border-bottom", "2px #4084c5 solid");
  }
}



function checkAttr() {

  //   console.log($(data[activeTree][activeSkill]['mod'+activeMod]['attr'].cooldown).length);


  function check(what) {
    var dataAttr = data[activeTree][activeSkill]['mod' + activeMod].attr;
    if ((typeof(data[activeTree][activeSkill]['mod' + activeMod].attr[what])) !== "undefined") {
      $('.attrTable thead:last').after('<tr><td>' + dataAttr[what].name + '</td><td>' + dataAttr[what].base.toFixed(1) + ' '+ dataAttr[what].unit +'</td><td>' + (parseFloat(dataAttr[what].base) + ((parseFloat(dataAttr[what].pm) / 100) * parseFloat(dataAttr[what].base))).toFixed(1) + ' ' + dataAttr[what].unit +'</td></tr>');
    }
  }

  if (typeof(data[activeTree][activeSkill]['mod' + activeMod].attr) !== "undefined") {
    $('.attrTable').html('<thead class="attrTableHead"><tr><td width="40%">Type</td><td width="30%">Base</td><td width="30%">Total</td></tr></thead>');
    check('cooldown');
    check('critDamage');
    check('critChance');
    check('duration');
    check('deployRange');
    check('range');
    check('instantHeal');
    check('healingRate');
    check('reviveTime');
    check('lifetime');
    check('allyHeal');
    check('selfHeal');
    check('explosionRadius');
    check('explosionDamage');
    check('damageRes');
    check('damageInc');
    check('health');
  } else {
    $('.attrTable').html('<thead class="attrTableHead"><tr><td width="40%">Type</td><td width="30%">Base</td><td width="30%">Total</td></tr></thead>');
    $('.attrTable').text('no data :(');
  }
  activeMod = pickMod;
}

function skillCheck(tree) {
  $("#infoSkillName").text(data[tree][activeSkill].name);
  if (activeSkill !== 'sig') {
    $(".infoSkillIcon").attr("id", tree + activeSkill.substr(activeSkill.length - 1));
  } else {
    $(".infoSkillIcon").attr("id", tree + "Sig");
  }
  $("#infoDesc").text(data[tree][activeSkill].desc);
  if (data[tree][activeSkill].req === "")
    $(".reqDetail").text("");
  else {
    $(".reqDetail").text(data[tree][activeSkill].req);
  }
  if (data[tree][activeSkill].req === "") {
    $('.req').css("display", "none");
  } else if (data[tree][activeSkill].req !== "") {
    $('.req').css("display", "block");
    $('.reqDetail').text(data[tree][activeSkill].req);
    if (activeTree === "med") {
      $('.reqTree').text("Medical Tree Upgrade");
      $('.reqIcon').css("background-position", "0 0");
    } else if (activeTree === "tech") {
      $('.reqTree').text("Tech Tree Upgrade");
      $('.reqIcon').css("background-position", "-50px 0");
    } else {
      $('.reqTree').text("Security Tree Upgrade");
      $('.reqIcon').css("background-position", "-100px 0");
    }
  }

}

function updateModIcons(tree) {
  var tr;
  var sk;
  var y;
  if (tree === "med") {
    tr = 0;
  } else if (tree === "tech") {
    tr = 320;
  } else if (tree === "sec") {
    tr = 640;
  }

  if (activeSkill === 'skill1') {
    sk = 0;
  } else if (activeSkill === 'skill2') {
    sk = 1;
  } else if (activeSkill === 'skill3') {
    sk = 2;
  } else if (activeSkill === 'sig') {
    sk = 3;
  }

  y = parseFloat(tr) + parseFloat(sk) * parseFloat(80);

  $(".mod0").css("background-position", "0px -" + y+"px");
  $(".mod1").css("background-position", "-80px -" + y+"px");
  $(".mod2").css("background-position", "-160px -" + y+"px");
  $(".mod3").css("background-position", "-240px -" + y+"px");
  $(".mod4").css("background-position", "-320px 0");
}

$(document).ready(function() {
  updateModIcons(activeTree);
});




$(".mod0").mouseenter(function() {
  activeMod = 0;
  modCheck(activeTree);
  checkAttr();
});

$(".mod0").mouseleave(function() {
  backMod(activeTree);
  checkAttr();
  activeMod= 0;
});

$(".mod1").mouseenter(function() {
  activeMod = 1;
  modCheck(activeTree);
  checkAttr();
});

$(".mod1").mouseleave(function() {
  backMod(activeTree);
  checkAttr();
  activeMod= 1;
});

$(".mod2").mouseenter(function() {
  activeMod = 2;
  modCheck(activeTree);
  checkAttr();
});

$(".mod2").mouseleave(function() {
  backMod(activeTree);
  checkAttr();
  activeMod= 2;
});

$(".mod3").mouseenter(function() {
  activeMod = 3;
  modCheck(activeTree);
  checkAttr();
});

$(".mod3").mouseleave(function() {
  backMod(activeTree);
  checkAttr();
  activeMod= 3;
});

$(".mod0").mousedown(function() {
  pickMod = 0;
  activeMod = 0;
});

$(".mod1").mousedown(function() {
  pickMod = 1;
  activeMod = 1;
});

$(".mod2").mousedown(function() {
  pickMod = 2;
  activeMod = 2;
});

$(".mod3").mousedown(function() {
  pickMod = 3;
  activeMod = 3;
});

$(".mod4").mouseenter(function() {
  activeMod = 4;
  activeSig = true;
  sigCheck(activeTree);
  checkAttr();
});

$(".mod4").mousedown(function() {
  pickSig = true;
});

$(".mod4").mouseleave(function() {
  backMod(activeTree);
  checkAttr();
});

// --

$("#med1").mousedown(function() {
  activeMod = 0;
  activeSkill = 'skill1';
  activeTree = "med";
  modCheck(activeTree);
  skillCheck(activeTree);
  updateModIcons(activeTree);
  checkAttr();
});

$("#med2").mousedown(function() {
  activeMod = 0;
  activeSkill = 'skill2';
  activeTree = "med";
  modCheck(activeTree);
  skillCheck(activeTree);
  updateModIcons(activeTree);
  checkAttr();
  //   $(".infoDetails").scrollTo(0);
});

$("#med3").mousedown(function() {
  activeMod = 0;
  activeSkill = 'skill3';
  activeTree = "med";
  modCheck(activeTree);
  skillCheck(activeTree);
  updateModIcons(activeTree);
  checkAttr();
});

$("#medSig").mousedown(function() {
  activeMod = 0;
  activeSkill = 'sig';
  activeTree = "med";
  modCheck(activeTree);
  skillCheck(activeTree);
  updateModIcons(activeTree);
  checkAttr();
});

$("#tech1").mousedown(function() {
  activeMod = 0;
  activeSkill = 'skill1';
  activeTree = "tech";
  modCheck(activeTree);
  skillCheck(activeTree);
  updateModIcons(activeTree);
  checkAttr();
});

$("#tech2").mousedown(function() {
  activeMod = 0;
  activeSkill = 'skill2';
  activeTree = "tech";
  modCheck(activeTree);
  skillCheck(activeTree);
  updateModIcons(activeTree);
  checkAttr();
});

$("#tech3").mousedown(function() {
  activeMod = 0;
  activeSkill = 'skill3';
  activeTree = "tech";
  modCheck(activeTree);
  skillCheck(activeTree);
  updateModIcons(activeTree);
  checkAttr();
});

$("#techSig").mousedown(function() {
  activeMod = 0;
  activeSkill = 'sig';
  activeTree = "tech";
  modCheck(activeTree);
  skillCheck(activeTree);
  updateModIcons(activeTree);
  checkAttr();
});

$("#sec1").mousedown(function() {
  activeMod = 0;
  activeSkill = 'skill1';
  activeTree = "sec";
  modCheck(activeTree);
  skillCheck(activeTree);
  updateModIcons(activeTree);
  checkAttr();
});

$("#sec2").mousedown(function() {
  activeMod = 0;
  activeSkill = 'skill2';
  activeTree = "sec";
  modCheck(activeTree);
  skillCheck(activeTree);
  updateModIcons(activeTree);
  checkAttr();
});

$("#sec3").mousedown(function() {
  activeMod = 0;
  activeSkill = 'skill3';
  activeTree = "sec";
  modCheck(activeTree);
  skillCheck(activeTree);
  updateModIcons(activeTree);
  checkAttr();
});

$("#secSig").mousedown(function() {
  activeMod = 0;
  activeSkill = 'sig';
  activeTree = "sec";
  modCheck(activeTree);
  skillCheck(activeTree);
  updateModIcons(activeTree);
  checkAttr();
});
