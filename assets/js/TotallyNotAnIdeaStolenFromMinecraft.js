window.SplashText = function() {
var now = new Date();
var aprilFools = {
  month: 3,
  date: 1
}
var myArray =["Don't eat the red spikes",
"Don't watch secret invasion...",
"Deviantart is known to cause cancer! O_O",
"When the drip is a drop",
"Elvus gud movy",
"FDA approved!",
"This is not a highscore message lol",
"No cubes",
"Teaming is kinda sus <-- Fellow kids!",
"Pee",
"By Faris90",
"Meaty",
"Give a larbage, and throw out your garbage!",
"AI is a mistake"
];
var yourArray =["Eat the red spikes",
"Go watch Secret Invasion, It's the best show ever!",
"Deviantart is known to cause the cure for cancer! :)",
"When the drip isn't a drop",
"yvom mud suvlE",
"FDA non-approved!",
"This is a highscore message lol",
"Only cubes and triangles",
"Teaming is allowed <-- I recomend it kids!",
"Bathroom",
"Coded by ZAPZAP, the god of gods.",
"<h1>Big and Meaty</h1>",
"Give no larbage, and keep your garbage!",
"AI should replace artists :D"
];
var tips = myArray[Math.floor(Math.random()*myArray.length)];
var tops = yourArray[Math.floor(Math.random()*yourArray.length)];
if(now.getDate() === 1 && now.getMonth() === 3) {
document.getElementById("tips").innerHTML = tops
document.title = "lennar.icUwU"
document.getElementById("title").innerHTML = "youtube . com";
} else {
document.getElementById("tips").innerHTML = tips
}

}