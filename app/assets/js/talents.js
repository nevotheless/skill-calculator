/*!
 * Skill-calculator
 * Skill Calculator for Tom Clancy's The Division
 * http://miodec.com/division/
 * @author Jacek Bartnik
 * @version 0.1.0
 * Copyright 2016. MIT licensed.
 */
var talData = {
    med: {
        tal1: {
            name: "Adrenaline",
            desc: "Use a medkit when not at full health to receive an overheal",
            req: "Decontamination Unit",
            benefits: ["Overheal", "Affects Agent"],
        },
        tal2: {
            name: "Triage",
            desc: "Heal an ally with a skill to reduce skill cooldowns by 15%",
            req: "Decontamination Unit",
            benefits: ["Cooldown Reduction", "Affects Group"],
        },
        tal3: {
            name: "Shock and Awe",
            desc: "Suppress a hostile to increase movement speed by 25% for 10 seconds",
            req: "Pharmacy",
            benefits: ["Movement Speed", "Affects Agent"],
        },
        tal4: {
            name: "Battle Buddy",
            desc: "Revive a downed agent to reduce incoming damage by 50% for 10 seconds for both players",
            req: "Pharmacy",
            benefits: ["Damage Reduction", "Affects Group"],
        },
        tal5: {
            name: "Critical Save",
            desc: "Use a medkit during low health to increase damage resistance by 40% for 10 seconds",
            req: "Counselling",
            benefits: ["Damage Resistance", "Affects Agent"],
        },
        tal6: {
            name: "Shrapnel",
            desc: "Applying Bleed to any target triggers a 30% chance to apply the effect to all targets within 10m",
            req: "Counselling",
            benefits: ["Bleed Chance", "Affects Hostiles"],
        },
        tal7: {
            name: "Combat Medic",
            desc: "Use a medkit near allies to heal group members and proxies within 20m by 40%",
            req: "",
            benefits: ["Healing", "Affects Group"],
        },
        tal8: {
            name: "Strike Back",
            desc: "Reach low health to reduce active skill cooldowns by 20%",
            req: "",
            benefits: ["Cooldown Reduction", "Affects Agent"],
        }
    },
    tech: {
        tal1: {
            name: "Tactical Advance",
            desc: "Complete a cover to cover move to increase weapon damage by 2% per meter covered for 10 seconds",
            req: "Central Heating",
            benefits: ["Weapon Damage", "Affects Agent"],
        },
        tal2: {
            name: "Demolition Expert",
            desc: "Kill a hostile with an explosion to increase explosion damage by 40% for 15 seconds",
            req: "Central Heating",
            benefits: ["Explosion Damage", "Affects Hostiles"],
        },
        tal3: {
            name: "Police Up",
            desc: "Kill a hostile with any skill for a 25% chance of auto-refilling all ammo types to capacity",
            req: "SatComms",
            benefits: ["Ammo Refill Chance", "Affects Agent"],
        },
        tal4: {
            name: "Fear Tactics",
            desc: "Applying Shock to any target triggers a 30% chance to apply the effect to all targets within 10m",
            req: "SatComms",
            benefits: ["Shock Chance", "Affects Hostiles"],
        },
        tal5: {
            name: "Evasive Action",
            desc: "During a cover to cover move incoming damage is reduced by 30%",
            req: "Recalibration",
            benefits: ["Damage Reduction", "Affects Agent"],
        },
        tal6: {
            name: "Tech Support",
            desc: "Kill a hostile while any skill is deployed to extend any active skills duration by 10%",
            req: "Recalibration",
            benefits: ["Skill Duration", "Affects Agent"],
        },
        tal7: {
            name: "Wildfire",
            desc: "Applying Burn to any target triggers a 30% chance to apply the effect to all targets within 10m",
            req: "Recharge Center",
            benefits: ["Burn Chance", "Affects Hostiles"],
        },
        tal8: {
            name: "Death by Proxy",
            desc: "Destroy a hostile's deployed skill to increase skill power by 20% for 30 seconds",
            req: "Recharge Center",
            benefits: ["Disruption", "Affects Hostiles"],
        }
    },
    sec: {
        tal1: {
            name: "Steady Hands",
            desc: "Enter any cover to reduce recoil by 25% for 10 seconds",
            req: "Procurement Team",
            benefits: ["Recoil Reduction", "Affects Agent"],
        },
        tal2: {
            name: "On the Move",
            desc: "Kill a hostile while moving to reduce incoming damage by 30% for 10 seconds",
            req: "Procurement Team",
            benefits: ["Damage Reduction", "Affects Agent"],
        },
        tal3: {
            name: "Precision",
            desc: "Headshot a hostile to pulse them for 10 seconds",
            req: "Guard Posts",
            benefits: ["Headshot Damage", "Affects Hostiles"],
        },
        tal4: {
            name: "Chain Reaction",
            desc: "Damage multiple hostiles with an explosion to apply 40% more damage from the blast",
            req: "Guard Posts",
            benefits: ["Explosion Damage", "Affects Hostiles"],
        },
        tal5: {
            name: "Desperate Times",
            desc: "Reach low health to increase blind fire accuracy by 20%",
            req: "Shooting Range",
            benefits: ["Blindfire Accuracy", "Affects Agent"],
        },
        tal6: {
            name: "Stopping Power",
            desc: "Suppress a hostile to increase headshot damage by 25% for 10 seconds",
            req: "Shooting Range",
            benefits: ["Headshot Damage", "Affects Hostiles"],
        },
        tal7: {
            name: "Repo Reaper",
            desc: "Kill a hostile with the sidearm to receive 1 magazine for your primary weapon",
            req: "Canine Unit",
            benefits: ["Ammo", "Affects Agent"],
        },
        tal8: {
            name: "One is None",
            desc: "Headshot a hostile to have a 50% chance of not consuming a the bullet",
            req: "Canine Unit",
            benefits: ["Bullet Consumption", "Affects Hostiles"],
        }
    },
};



var activeTalent = "tal1";
var activeTree = "med";


var choiceTalent = "talMed1";
$(".talentBox").click(function() {

    $(this).addClass("boxToggle");

    if (choiceTalent === $(this).attr('id')) {

    } else if (choiceTalent !== "") {
        $("#" + choiceTalent).removeClass("boxToggle");
        choiceTalent = "";
        choiceTalent = $(this).attr('id');
    }

});

function updateTalentIcons (tree) {
	var y;
	var tr;

	if (tree === "med") {
    y = 0;
    ic = 0;
    tr = "Med";
  } else if (tree === "tech") {
    y = 65;
    ic = 100;
    tr = "Tech";
  } else if (tree === "sec") {
    y = 130;
    ic = 200;
    tr = "Sec";
  }

  $("#tal"+tr+1).css("background-position", "0px -"+y+"px");
  $("#tal"+tr+2).css("background-position", "-65px -"+y+"px");
  $("#tal"+tr+3).css("background-position", "-130px -"+y+"px");
  $("#tal"+tr+4).css("background-position", "-195px -"+y+"px");
  $("#tal"+tr+5).css("background-position", "-260px -"+y+"px");
  $("#tal"+tr+6).css("background-position", "-325px -"+y+"px");
  $("#tal"+tr+7).css("background-position", "-390px -"+y+"px");
  $("#tal"+tr+8).css("background-position", "-455px -"+y+"px");
}

updateTalentIcons('med');
updateTalentIcons('tech');
updateTalentIcons('sec');

function updateTalentInfoIcon(tree) {
	var y;
	var tr;
	var x;

	if (tree === "med") {
    y = 0;
  } else if (tree === "tech") {
    y = 100;
  } else if (tree === "sec") {
    y = 200;
  }

  x = parseFloat(activeTalent.slice(-1)-1) * 100;

  $(".talInfoTalentIcon").css("background-position", "-"+x+"px -"+y+"px");
}

function talentCheck(tree) {
    // Change talent name
    $("#talInfoTalentName").text(talData[tree][activeTalent].name);
    // Change talent description
    $(".talInfoDesc").text(talData[tree][activeTalent].desc);
    if (talData[tree][activeTalent].req === "") {
        // Hide requirement if 'req' is empty
        $('.talReq').css("display", "none");
    } else if (talData[tree][activeTalent].req !== "") {
        // Show requirement if present
        $('.talReq').css("display", "block");
        // Change req text
        $(".talReqDetail").text(talData[tree][activeTalent].req);
        // Change icon depending on tree
        if (activeTree === "med") {
            $('.talReqTree').text("Medical Tree Upgrade");
            $('.talReqIcon').css("background-position", "0 0");
        } else if (activeTree === "tech") {
            $('.talReqTree').text("Tech Tree Upgrade");
            $('.talReqIcon').css("background-position", "-50px 0");
        } else {
            $('.talReqTree').text("Security Tree Upgrade");
            $('.talReqIcon').css("background-position", "-100px 0");
        }
    }
    // Clear table
    $('.benefitTable').html('<thead><tr><td><span style="margin-bottom: 0px;color:orange;">Benefits</span></td></tr></thead>');
    // Loop through benefits array
    var len = talData[tree][activeTalent].benefits.length;
    for (i = 0; i < len; i++) {
        $('.benefitTable thead:last').after('<tr><td>' + talData[tree][activeTalent].benefits[i] + '</td></tr>');
    }
    if (activeTree === "med") {
        $('.talInfoBox').css("border-top", "2px #6ec449 solid");
        $('.talInfoBox').css("border-bottom", "2px #6ec449 solid");
    } else if (activeTree === "tech") {
        $('.talInfoBox').css("border-top", "2px #ffca57 solid");
        $('.talInfoBox').css("border-bottom", "2px #ffca57 solid");
    } else if (activeTree === "sec") {
        $('.talInfoBox').css("border-top", "2px #4084c5 solid");
        $('.talInfoBox').css("border-bottom", "2px #4084c5 solid");
    }
}

function talentClick(tree,number){
	$("#tal"+tree+number).mousedown(function() {
    activeTalent = 'tal'+number;
    activeTree = tree.toLowerCase();
    talentCheck(activeTree);
    updateTalentInfoIcon(activeTree);
	});
}

talentClick('Med',1);
talentClick('Med',2);
talentClick('Med',3);
talentClick('Med',4);
talentClick('Med',5);
talentClick('Med',6);
talentClick('Med',7);
talentClick('Med',8);

talentClick('Tech',1);
talentClick('Tech',2);
talentClick('Tech',3);
talentClick('Tech',4);
talentClick('Tech',5);
talentClick('Tech',6);
talentClick('Tech',7);
talentClick('Tech',8);

talentClick('Sec',1);
talentClick('Sec',2);
talentClick('Sec',3);
talentClick('Sec',4);
talentClick('Sec',5);
talentClick('Sec',6);
talentClick('Sec',7);
talentClick('Sec',8);
