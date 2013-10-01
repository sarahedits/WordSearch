/*jshint multistr:true */

var text = "Sarah likes turtles. Jason is a turtle. Jason likes bird Songs. Sarah is a bird. Birdy Birdy Sarah Birdy Sillyness. Turtle bird sarah sarah jason turtle bird brew. sAraH luvs JaSon SSSS.";
var myName = "sarah";
var hits = [];

text.match (/Sarah/g)

for (var x=0; x < text.length; x++) 
{
    if (text[x].toLowerCase() === myName[0].toLowerCase())
    {
        for (var n = x; n < x + myName.length; n++) 
        {
            hits.push (text[n]);
        }
    }
}



if (hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log (hits);
} 
