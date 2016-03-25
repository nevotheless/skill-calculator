var perData = {
	med:{
		per1:{
			name:"Medkits",
			desc:"Increase Medkit inventory by 1 slot",
			req:"Clinic"
		},
		per2:{
			name:"Protective Measures",
			desc:"Increase Virus Protection by 1, gaining access to higher contamination areas.",
			req:"Virus Lab"
		},
		per3:{
			name:"Canned Food",
			desc:"Increase Canned Food effect duration by 10 seconds",
			req:"Disaster Aid"
		},
		per4:{
			name:"Supplier",
			desc:"Collect canned food, water, energy bar and soda in the Suppy Line once per hour.",
			req:"Disaster Aid"
		},
		per5:{
			name:"Contamination Intel",
			desc:"Reveal all contaminated areas on the map",
			req:"Quarantine"
		},
		per6:{
			name:"Medkits",
			desc:"Increase Medkit inventory by 1 slot",
			req:"Intensive Care"
		},
		per7:{
			name:"Protective Measures",
			desc:"Increase Virus Protection by 1, gaining access to higher contamination areas.",
			req:"Hazmat Unit"
		},
		per8:{
			name:"Hazardous Materials",
			desc:"Increase Dark Zone inventory by 1 slot.",
			req:"Decontamination Unit"
		},
		per9:{
			name:"Rigger",
			desc:"Collect fabrics (crafting materials) in the Medical Wing once per hour.",
			req:"Pharmacy"
		},
		per10:{
			name:"Protective Measures",
			desc:"Increase Virus Protection by 1, gaining access to higher contamination areas.",
			req:"Pharmacy"
		},
		per11:{
			name:"Credit",
			desc:"Increase credit gains by 10%",
			req:"Counseling"
		},
		per12:{
			name:"Medkits",
			desc:"Increase Medkit inventory by 1 slot",
			req:"Pediatric Care"
		},
		per13:{
			name:"Talents",
			desc:"Increase active talents by 1 slot",
			req:"Build all upgrades"
		},
	},
	tech:{
		per1:{
			name:"Inventory",
			desc:"Increase inventory by 10 slots",
			req:"Control Room"
		},
		per2:{
			name:"Hazardous Materials",
			desc:"Increase Dark Zone inventory by 1 slot",
			req:"Communications"
		},
		per3:{
			name:"Division Tech Materials",
			desc:"Convert Division Tech crafting materials into other materials at the crafting station",
			req:"Division Tech"
		},
		per4:{
			name:"Engineer",
			desc:"Collect electronics (crafting materials) in the Tech Wing once per hour",
			req:"4"
		},
		per5:{
			name:"Soda",
			desc:"Increase Soda consumable effect duration by 10 seconds",
			req:"Generators"
		},
		per6:{
			name:"Water",
			desc:"Increase Water consumable effect duration by 10 seconds",
			req:"Water Purification"
		},
		per7:{
			name:"Craftsman",
			desc:"Collect tools (crafting materials) in the Tech Wing once per hour",
			req:"Field Engineering"
		},
		per8:{
			name:"Energy Bar",
			desc:"Increase enerby bar effect duration by 5 seconds",
			req:"Central Heating"
		},
		per9:{
			name:"Rescue Assessment",
			desc:"Reveal all Division Tech crafting nodes on the Dark Zone map",
			req:"SatComms"
		},
		per10:{
			name:"Stat Switch",
			desc:"Unlock item stat switching at the Recalibration Station",
			req:"Recalibration"
		},
		per11:{
			name:"Dark Zone Funds",
			desc:"Increase looted Dark Zone fund gains by 10%",
			req:"Recharge Center"
		},
		per12:{
			name:"Stash",
			desc:"Increase stash by 10 slots",
			req:"Build all upgrades"
		},
	},
	sec:{
		per1:{
			name:"Experienced Agent",
			desc:"Increase XP gained from all activities by 10%",
			req:"Situation Room"
		},
		per2:{
			name:"Grenades",
			desc:"Increase the grenade inventory by 1 slot",
			req:"Armory"
		},
		per3:{
			name:"Advanced Weaponry",
			desc:"Unlock advanced weapons vendorin the Security Wing",
			req:"Armory"
		},
		per4:{
			name:"Combat Veteran",
			desc:"Increase XP gained from accolades by 25%",
			req:"Barracks"
		},
		per5:{
			name:"Hazardous Materials",
			desc:"Increase Dark Zone inventory by 1 slot",
			req:"Dark Zone Ops"
		},
		per6:{
			name:"Black Market Vendor",
			desc:"Unlock Dark Zone fund purchases in the Base of Operations",
			req:"Dark Zone Ops"
		},
		per7:{
			name:"Clothes Vendor",
			desc:"Unlock a clother venodr in the Base of Operations",
			req:"Suppy Line"
		},
		per8:{
			name:"Explosive Bullets",
			desc:"Increase Explosive Bullets effect duration by 10 seconds",
			req:"Gunsmith"
		},
		per9:{
			name:"Gunsmith",
			desc:"Collect weapon parts (crafting materials) in the Security Wing once per hour",
			req:""
		},
		per10:{
			name:"Scavenger",
			desc:"Collect items from the scavenger box in the Security Wing once per hour",
			req:"Gunsmith"
		},
		per11:{
			name:"Incendiary Bullets",
			desc:"Increase Incendiary Bullets effect duration by 10 seconds",
			req:"Guard Posts"
		},
		per12:{
			name:"Special Ammo",
			desc:"Collect incendiary and explosive bullets (ammo) in the Supply Line ince per hour",
			req:"Guard Posts"
		},
		per13:{
			name:"Shooting Range",
			desc:"Train in Marksmanship at the Shooting Range",
			req:"Shooting Range"
		},
		per14:{
			name:"Intel Discovery",
			desc:"When completing all Side Missions and Encounters in a Named Zone, reveal all undiscovered Intel on the map",
			req:"Canine Unit"
		},
		per15:{
			name:"Collector",
			desc:"Increase Scavenging by 15%",
			req:"Build all upgrades"
		},
	}
};

var activePerk = "per1";
var activeTree = "med";

var choicePerk = "perMed1";
$(".perkBox").click(function() {

    $(this).addClass("boxToggle");

    if (choicePerk === $(this).attr('id')) {

    } else if (choicePerk !== "") {
        $("#" + choicePerk).removeClass("boxToggle");
        choicePerk = "";
        choicePerk = $(this).attr('id');
    }

});

function updatePerkIcons (tree) {
	var y;
	var tr;
	var x = 75;

	if (tree === "med") {
    y = 0;
    tr = "Med";
  } else if (tree === "tech") {
    y = 75;
    tr = "Tech";
  } else if (tree === "sec") {
    y = 75*2;
    tr = "Sec";
  }

  $("#per"+tr+1).css("background-position", "0px -"+y+"px");
  $("#per"+tr+2).css("background-position", "-"+x+"px -"+y+"px");
  $("#per"+tr+3).css("background-position", "-"+x*2+"px -"+y+"px");
  $("#per"+tr+4).css("background-position", "-"+x*3+"px -"+y+"px");
  $("#per"+tr+5).css("background-position", "-"+x*4+"px -"+y+"px");
  $("#per"+tr+6).css("background-position", "-"+x*5+"px -"+y+"px");
  $("#per"+tr+7).css("background-position", "-"+x*6+"px -"+y+"px");
  $("#per"+tr+8).css("background-position", "-"+x*7+"px -"+y+"px");
  $("#per"+tr+9).css("background-position", "-"+x*8+"px -"+y+"px");
  $("#per"+tr+10).css("background-position", "-"+x*9+"px -"+y+"px");
  $("#per"+tr+11).css("background-position", "-"+x*10+"px -"+y+"px");
  $("#per"+tr+12).css("background-position", "-"+x*11+"px -"+y+"px");
  $("#per"+tr+13).css("background-position", "-"+x*12+"px -"+y+"px");
  $("#per"+tr+14).css("background-position", "-"+x*13+"px -"+y+"px");
  $("#per"+tr+15).css("background-position", "-"+x*14+"px -"+y+"px");
}

updatePerkIcons('med');
updatePerkIcons('tech');
updatePerkIcons('sec');

function updatePerkInfoIcon(tree) {
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

  if(activePerk.length == 4){
  	x = parseFloat(activePerk.slice(-1)-1) * 100;
  }else{
  	x = parseFloat(activePerk.slice(-2)-1) * 100;
  }

  $(".perInfoPerkIcon").css("background-position", "-"+x+"px -"+y+"px");
}

function perkCheck(tree) {
    // Change talent name
    $("#perInfoPerkName").text(perData[tree][activePerk].name);
    // Change talent description
    $(".perInfoDesc").text(perData[tree][activePerk].desc);
    if (perData[tree][activePerk].req === "") {
        // Hide requirement if 'req' is empty
        $('.perReq').css("display", "none");
    } else if (perData[tree][activePerk].req !== "") {
        // Show requirement if present
        $('.perReq').css("display", "block");
        // Change req text
        $(".reqDetail").text(perData[tree][activePerk].req);
        // Change icon depending on tree
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
    if (activeTree === "med") {
        $('.perInfoBox').css("border-top", "2px #6ec449 solid");
        $('.perInfoBox').css("border-bottom", "2px #6ec449 solid");
    } else if (activeTree === "tech") {
        $('.perInfoBox').css("border-top", "2px #ffca57 solid");
        $('.perInfoBox').css("border-bottom", "2px #ffca57 solid");
    } else if (activeTree === "sec") {
        $('.perInfoBox').css("border-top", "2px #4084c5 solid");
        $('.perInfoBox').css("border-bottom", "2px #4084c5 solid");
    }
}

function perkClick(tree,number){
	$("#per"+tree+number).mousedown(function() {
    activePerk = 'per'+number;
    activeTree = tree.toLowerCase();
    perkCheck(activeTree);
    updatePerkInfoIcon(activeTree);
	});
}

perkClick('Med',1);
perkClick('Med',2);
perkClick('Med',3);
perkClick('Med',4);
perkClick('Med',5);
perkClick('Med',6);
perkClick('Med',7);
perkClick('Med',8);
perkClick('Med',9);
perkClick('Med',10);
perkClick('Med',11);
perkClick('Med',12);
perkClick('Med',13);

perkClick('Tech',1);
perkClick('Tech',2);
perkClick('Tech',3);
perkClick('Tech',4);
perkClick('Tech',5);
perkClick('Tech',6);
perkClick('Tech',7);
perkClick('Tech',8);
perkClick('Tech',9);
perkClick('Tech',10);
perkClick('Tech',11);
perkClick('Tech',12);

perkClick('Sec',1);
perkClick('Sec',2);
perkClick('Sec',3);
perkClick('Sec',4);
perkClick('Sec',5);
perkClick('Sec',6);
perkClick('Sec',7);
perkClick('Sec',8);
perkClick('Sec',9);
perkClick('Sec',10);
perkClick('Sec',11);
perkClick('Sec',12);
perkClick('Sec',13);
perkClick('Sec',14);
perkClick('Sec',15);
