
/* Design Doc

The app rolls against some tables using a mood modifyer to make certain
outcomes more or less likely and in some cases impossible.

A mood of -5, 5 or any greater or less value from those will result in locking
out the most extream cases on either end. (mood of 5 removes all hate options,
-5 removes all love options.)

The original roll just decides which table to roll from. Then a seperate roll
is done to select an option from that table. The results are returned to the
user.


TODO: find a better easier to understand dice rolling range and method.

TODO: Add in usefull features like toggles for: No hate options,
no love options, no extreams, no middle grounds, etc.

 */



//--------listner------------------
window.onload = function () {
document.getElementById("moodbutton").addEventListener("click", rollIntent);
}

//----- tables --------------
var doc = jsyaml.load(yaml);
console.log(doc);

 //------roll-----------------
 function rollIntent ()
 {
   // have to cast mood as a Number. I belive this is because its reading in
   // negative numbers as strings be default.
   var mood  = Number(document.getElementById("myRange").value);
   console.log("mood is: " + mood);
   //console.log("wtf");
   var selection = (Math.floor((Math.random()) * Math.floor(12)+ 9 + (mood)));
      console.log("Selection: " + selection);

if(selection < 5)
{
  document.getElementById("intent").innerHTML = doc.hate[(Math.floor(Math.random() * Math.floor(doc.hate.length)))];
}

if(selection >= 5 && selection <= 9)
{
  document.getElementById("intent").innerHTML = doc.dislike[(Math.floor(Math.random() * Math.floor(doc.dislike.length)))];
}

if(selection >= 10 && selection <= 19)
{
    document.getElementById("intent").innerHTML = doc.neutral[(Math.floor(Math.random() * Math.floor(doc.neutral.length)))];
}

if(selection >= 20 && selection <= 24)
{
    document.getElementById("intent").innerHTML = doc.like[(Math.floor(Math.random() * Math.floor(doc.like.length)))];
}

if(selection >= 25)
{
    document.getElementById("intent").innerHTML = doc.love[(Math.floor(Math.random() * Math.floor(doc.love.length)))];
}

   rollTactic ();
 }

 function rollTactic ()
 {
  var tactics = doc.tactics;
  //console.log(tactics);
  var selection = (Math.floor(Math.random() * Math.floor(tactics.length)));
  console.log(tactics[selection]);
  document.getElementById("tactic").innerHTML = tactics[selection];
 }
