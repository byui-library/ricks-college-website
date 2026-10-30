/*
Cross browser marquee script- 
© Dynamic Drive (www.dynamicdrive.com)
For full source code, installation instructions,
100's more DHTML scripts, and Terms Of
Use, visit dynamicdrive.com
*/


//Specify the marquee's width (in pixels)
var marqueewidth=740
//Specify the marquee's height (in pixels, pertains only to NS)
var marqueeheight=20
//Specify the marquee's scroll speed (larger is faster)
var speed=5
//Specify the marquee contents
display = new Array(6)
display[0] = '<a href = "https://web.archive.org/web/2001/http://www.byui.edu/brochure/spirit.html"><font color="#679bcd" size = "-1" face = "arial">The "Spirit of Ricks" is preserved and enhanced. (Click Here)</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
display[1] = '<a href = "https://web.archive.org/web/2001/http://www.byui.edu/brochure/twotier.html"><font color="#679bcd" size = "-1" face = "arial">A two-tiered institution allows students to choose between associate or bachelor\'s degrees. (Click Here)</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
display[2] = '<a href = "https://web.archive.org/web/2001/http://www.byui.edu/brochure/degrees.html"><font color="#679bcd" size = "-1" face = "arial">An integrated degree is tailored to fit students\' interests, provide relevant internships, and enhance marketability. (Click Here)</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
display[3] = '<a href = "https://web.archive.org/web/2001/http://www.byui.edu/brochure/activities.html"><font color="#679bcd" size = "-1" face = "arial">The activities program opens sports, the arts, and service to everyone. (Click Here)</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
display[4] = '<a href = "https://web.archive.org/web/2001/http://www.byui.edu/brochure/tracks.html"><font color="#679bcd" size = "-1" face = "arial">A year-round track system allows more students to attend. (Click Here)</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
display[5] = '<a href = "https://web.archive.org/web/2001/http://www.byui.edu/brochure/faculty.html"><font color="#679bcd" size = "-1" face = "arial">The faculty is focused on the scholarship of learning and teaching. (Click Here)</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
var now=new Date();
var mystart=(now.getSeconds())%5;
var marqueecontents='<b>' 
for(index = 0;index<6;index++)
{
   marqueecontents = marqueecontents + display[mystart]
   if(++mystart>5)
   mystart = 0;
}




if (document.all)
document.write('<marquee scrollAmount='+speed+' style="width:'+marqueewidth+'">'+marqueecontents+'</marquee>')

function regenerate(){
window.location.reload()
}
function regenerate2(){
if (document.layers){
setTimeout("window.onresize=regenerate",450)
intializemarquee()
}
}

function intializemarquee(){
document.cmarquee01.document.cmarquee02.document.write('<nobr>'+marqueecontents+'</nobr>')
document.cmarquee01.document.cmarquee02.document.close()
thelength=document.cmarquee01.document.cmarquee02.document.width
document.cmarquee01.document.cmarquee02.left += 750
scrollit()
}

function scrollit(){
if (document.cmarquee01.document.cmarquee02.left>=thelength*(-1)){
document.cmarquee01.document.cmarquee02.left-=speed
setTimeout("scrollit()",100)
}
else{
document.cmarquee01.document.cmarquee02.left=marqueewidth
scrollit()
}
}

window.onload=regenerate2

