// BYU-Idaho Nav Bar (2001)
// Concept by: Debi Valentine 
// Code by: Chris Bailey and Dan Price
// This bar is designed to give our users better navigation throughout the site by: 
// (1) giving them the page's name in a consistant location, 
// (2) supplying a "breadcrumb" trail to show them where they are in the site, 
// (3) placing the identity of the site on each page by utilizing the logo in the corner, and 
// (4) giving them the basic links needed in the menu bar to find their way to wherever they need to go.
// IMPORTANT NOTE:
// IMAGES (unless as backgrounds) AND LAYERS MUST NOT BE USED IN THIS webstyle because they disrupt any
// coding that deals with image counts, mouseovers, layer counts, etc.  Some of the code used below may
// seem a bit unorthodox (ie: tons of hardcoded spaces in the cell containing the logo background), but
// these measures have been taken to insure that this nav bar does not negavitely effect any page it is
// placed upon.


// The body tag makes sure the nav bar is flush with the top and sides of any web page it's assigned to.
document.writeln('<body marginheight=0 marginwidth=0 leftmargin=0 rightmargin=0 topmargin=0 bottommargin=0>')

//*******STYLE SHEET*******//
// Any modifications to the nav bar must be made in the style sheet unless it has to do with the table specifications themselves!!!
// The words "donotuse" are used at the beginning of all classes because:
// (1) We want to be sure that no users use the same class name in their style sheets (who else would use "donotuse"?)
// (2) Whoever modifies this code will know to ignore the beginning part of the classes in searching for the tags to modify.

document.writeln('<style stype="text/css">')
document.writeln('<!--')

// Background - where the color of the background is changed.
// The top background is only changed here.
document.writeln('td.donotusebackground')
	document.writeln('{background-color: #002a54;}')

// Bottom Portion Links - these include any links partaining to the menu bar.  
// This is where the font specifications (mainly the color and text-decoration) are changed.
// The bottom portion links font specifications are only changed here.
document.writeln('a.NoUnderLine, a.NoUnderLine:hover, a.NoUnderLine:active, a.NoUnderLine:visited')
	document.writeln('{text-decoration: none;')
	document.writeln('color: #ffffff;')
	document.writeln('font-size: 10pt;')
	document.writeln('font-family: arial, helvetica, sans-serif;}')

document.writeln('-->')
document.writeln('</style>')
//*******END STYLE SHEET*******//

//*******INITIAL TABLE*******//
//This table is to provide the horizontal padding needed on this version of the webstyle.
document.writeln('<table cellpadding=0 cellspacing=0 border=0 width=100%>')

	document.writeln('<tr><td background="https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/seperation.gif" colspan=2>')
var hide
if(!hide)
{
		//*******webstyle LINKS*******//
		//This is the table where the links themselves are stored
		document.writeln('<table cellpadding=2 cellspacing=0 border=0 width=100%>')
		document.writeln('<tr><td width=9%>')
		document.writeln('<nobr><img src = "https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/holder.gif" name = "blue1">')
		document.writeln('<a href="javascript:parent.window.location=\'http://www.byui.edu/\'" onmouseover = "javascript:blue1.src=\'https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/bluearrow.gif\'" onmouseout="javascript:blue1.src=\'https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/holder.gif\'" class="NoUnderLine">')
		document.writeln('<font size=-1 color="#ffffff">BYU-Idaho Home</font></a></nobr>')
		document.writeln('</td><td width=12%>')
		document.writeln('<center><nobr><img src = "https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/holder.gif" name = "blue2">')
		document.writeln('<a href="javascript:parent.window.location=\'http://www.byui.edu/students.htm\'" onmouseover = "javascript:blue2.src=\'https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/bluearrow.gif\'" onmouseout="javascript:blue2.src=\'https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/holder.gif\'" class="NoUnderLine">')
		document.writeln('<font size=-1 color="#ffffff">Students</font></a></nobr>')
		document.writeln('</td><td width=19%>')
		document.writeln('<center><nobr><img src = "https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/holder.gif" name = "blue3">')
		document.writeln('<a href="javascript:parent.window.location=\'http://www.byui.edu/employees.htm\'" onmouseover = "javascript:blue3.src=\'https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/bluearrow.gif\'" onmouseout="javascript:blue3.src=\'https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/holder.gif\'" class="NoUnderLine">')
		document.writeln('<font size=-1 color="#ffffff">Employees</font></a></nobr>')
		document.writeln('</td><td width=16%>')
		document.writeln('<center><nobr><img src = "https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/holder.gif" name = "blue4">')
		document.writeln('<a href="javascript:parent.window.location=\'http://www.byui.edu/Alumniandfriends.htm\'" onmouseover = "javascript:blue4.src=\'https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/bluearrow.gif\'" onmouseout="javascript:blue4.src=\'https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/holder.gif\'" class="NoUnderLine">')
		document.writeln('<font size=-1 color="#ffffff">Alumni/Friends</font></a></nobr>')
		document.writeln('</td><td width=17%>')
		document.writeln('<center><nobr><img src = "https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/holder.gif" name = "blue5">')
		document.writeln('<a href="javascript:parent.window.location=\'http://www.byui.edu/directories.htm\'" onmouseover = "javascript:blue5.src=\'https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/bluearrow.gif\'" onmouseout="javascript:blue5.src=\'https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/holder.gif\'" class="NoUnderLine">')
		document.writeln('<font size=-1 color="#ffffff">Directories</font></a></nobr>')
		document.writeln('</td><td width=10%>')
		document.writeln('<center><nobr><img src = "https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/holder.gif" name = "blue6">')
		document.writeln('<a href="javascript:parent.window.location=\'http://www.byui.edu/search.htm\'" onmouseover =  "javascript:blue6.src=\'https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/bluearrow.gif\'" onmouseout="javascript:blue6.src=\'https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/holder.gif\'"  class="NoUnderLine">')
		document.writeln('<font size=-1 color="#ffffff">Search</font></a></nobr>')
		document.writeln('</td><td width=11%>')
		document.writeln('<center><nobr><img src = "https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/holder.gif" name = "blue7">')
		document.writeln('<a href="javascript:parent.window.location=\'http://www.byui.edu/siteindex.htm\'" onmouseover = "javascript:blue7.src=\'https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/bluearrow.gif\'" onmouseout="javascript:blue7.src=\'https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/holder.gif\'" class="NoUnderLine">')
		document.writeln('<font size=-1 color="#ffffff">Index</font></a></nobr>')
		document.writeln('</td><td width=7% align=right>')
		document.writeln('<nobr><img src = "https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/holder.gif" name = "blue8">')
		document.writeln('<a href="javascript:parent.window.location=\'http://www.byui.edu/help/\'" onmouseover = "javascript:blue8.src=\'https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/bluearrow.gif\'" onmouseout="javascript:blue8.src=\'https://web.archive.org/web/1998im_/http://www.byui.edu/webstyle/holder.gif\'" class="NoUnderLine">')
		document.writeln('<font size=-1 color="#ffffff">Help&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></a></nobr>')
		document.writeln('</td></tr>')
		document.writeln('</table>')
		//*******END webstyle LINKS*******//
}	
	
	//*******END SECONDARY TABLE*******//

document.writeln('</td></tr>')
document.writeln('</table></body>')
//*******END INITIAL TABLE*******//    