/*!
 * Skill-calculator
 * Skill Calculator for Tom Clancy's The Division
 * http://miodec.com/division/
 * @author Jacek Bartnik
 * @version 0.1.0
 * Copyright 2016. MIT licensed.
 */
var userLangChoice;
var userLang = (navigator.language).substring(0,2);


$.getJSON("./lang/" + userLang + ".json", function(lang){
   	console.log(lang.tabSkills);

	$("#tabSkills").text(lang.tabSkills);
	$("#tabTalents").text(lang.tabTalents);
	// $("#tabPerks").text(lang.tabPerks);
	// $(".noticeSkills").text(lang.noticeSkills);
	// $(".treeNameMedical").text(lang.treeNameMedical);
	// $(".treeNameTech").text(lang.treeNameTech);
	// $(".treeNameSecurity").text(lang.treeNameSecurity);
	// $(".available").text(lang.available);
	// $(".skillPower").text(lang.skillPower);
	// $(".infoSkillName").text(lang.startnigSkillName);
	// $(".skillModBase").text(lang.skillModBase);
});