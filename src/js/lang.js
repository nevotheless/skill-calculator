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