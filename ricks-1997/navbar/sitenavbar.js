// BYU-Idaho Nav Bar (2001)
// Concept by: Debi Valentine 
// Code by: Dan Price
// This bar is designed to give our users better navigation throughout the site by: 
// (1) giving them the page's name in a consistant location, 
// (2) supplying a "breadcrumb" trail to show them where they are in the site, 
// (3) placing the identity of the site on each page by utilizing the logo in the corner, and 
// (4) giving them the basic links needed in the menu bar to find their way to wherever they need to go.
// IMPORTANT NOTE:
// IMAGES AND LAYERS MUST NOT BE USED IN THIS NAVBAR unless as backgrounds because they disrupt any
// coding that deals with image counts, mouseovers, layer counts, etc.  Some of the code used below may
// seem a bit unorthadox (ie: tons of hardcoded spaces in the cell containing the logo background), but
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

// Logo - where the name of the graphic storing the school logo is changed.
// The logo is only changed here.  
// Remember to name your logo image something different each time you change it to avoid caching problems.
document.writeln('td.donotuselogo')
	document.writeln('{background-image: url(https://web.archive.org/web/1998im_/http://www.byui.edu/navbar/yellowlogo.gif);}')

// Arrow - where the name of the graphic storing the arrow is changed.
// The arrow is only changed here.  
// Remember to name your arrow image something different each time you change it to avoid caching problems.
document.writeln('td.donotusearrow')
	document.writeln('{background-image: url(https://web.archive.org/web/1998im_/http://www.byui.edu/navbar/yellowarrow.gif);}')

// Border - where the color of the border around and through the navbar is changed.
// The border is only changed here.
document.writeln('table.donotuseborder')
	document.writeln('{background-color: #000000;}')

// Top Background - where the color of the top background is changed.
// The top background is only changed here.
document.writeln('td.donotusetopbackground')
	document.writeln('{background-color: #f5edaf;}')

// Bottom Background - where the color of the bottom background is changed.
// The bottom background is only changed here.
document.writeln('td.donotusebottombackground')
	document.writeln('{background-color: #203769;}')

// Title - where the font specifications for the title are changed.
// The title font specifications are only changed here.
document.writeln('td.donotusetitle')
	document.writeln('{color: #000000;')
	document.writeln('font-size: 17pt;')
	document.writeln('font-family: arial, helvetica, sans-serif;')
	document.writeln('font-weight: bold;}')

// Menu Bar - where the font specifications for the menu bar are changed.
// The menu bar font specifications are only changed here.
document.writeln('td.donotusemenubar')
	document.writeln('{color: #ffffff;')
	document.writeln('font-size: 10pt;')
	document.writeln('font-family: arial, helvetica, sans-serif;')
	document.writeln('text-align: center;}')

// Top Portion Links - these include any links partaining to the title and breadcrumb trail.  
// This is where the font specifications (mainly the color and text-decoration) are changed.
// The top portion links font specifications are only changed here.
document.writeln('a.donotusetoplinks, a.donotusetoplinks:hover, a.donotusetoplinks:active, a.donotusetoplinks:visited')
	document.writeln('{text-decoration: none;')
	document.writeln('color: #000000;}')

// Bottom Portion Links - these include any links partaining to the menu bar.  
// This is where the font specifications (mainly the color and text-decoration) are changed.
// The bottom portion links font specifications are only changed here.
document.writeln('a.donotusebottomlinks, a.donotusebottomlinks:hover, a.donotusebottomlinks:active, a.donotusebottomlinks:visited')
	document.writeln('{text-decoration: none;')
	document.writeln('color: #ffffff;}')

document.writeln('-->')
document.writeln('</style>')
//*******END STYLE SHEET*******//


//*******OUTER BORDER - DO NOT ERASE*******//
// Outer border is placed around the navbar to create proper border width.  
// Unless you mean to decrease the width of the border around the navbar, do not touch this border!
document.writeln('<table cellpadding=1 cellspacing=0 border=0 width=100% class="donotuseborder">')
document.writeln('<tr>')
document.writeln('<td valign=top>')

	//*******TOP PORTION******//
	// The top portion contains:
	// (1) The displayed page title
	// (2) The breadcrumb trail
	// (3) The school Logo
	// (4) A black border around the above mentioned elements
	// Changing the cellspacing of this table will change the border around the top portion (NOT RECOMMENDED)
	// There is no visible text included in this portion, as all text comes from backgrounds (i.e. the logo) and 
	// from javascript functions (i.e. appname & breadcrumb).  Therefore, do not try to change any text in this portion!
	// Any modifications to this portion must be done in the style sheet!
	document.writeln('<table cellpadding=0 cellspacing=1 border=0 width=100% class="donotuseborder">')
	document.writeln('<tr>')
	document.writeln('<td class="donotusetopbackground">')

		//*******SEPERATION TABLE*******//
		// The seperation table is created to correctly seperate and space the elements in the top portion.  
		// This table contains an invisible border to create a solid color behind these elements.
		document.writeln('<table cellpadding=0 cellspacing=0 border=0 width=100% height=45>')
		document.writeln('<tr>')
		document.writeln('<td width=3%>&nbsp;</td>')
		document.writeln('<td width=72% class="donotusetitle"><nobr>' + appName + '</nobr></td>')

		// All of the spaces included in this table cell are there for the purpose of:
		// (1) Keeping the logo visible as the browser window is scaled up and down
		//      (without them the side of the table will over-run the logo because the logo must be a background).
		// (2) Creates a hyperlink to the school's main page without using an image or layer.
		// Remember, images MUST NOT be used unless as backgrounds (see opening documentation).
		// If any new logo does not need as many spaces, feel free to delete some, but be sure to give the user
		// the availabilities explained in the purpose of having these spaces.
		// If you are wishing to change the logo, you must do so in the style sheet!
		document.writeln('<td class="donotuselogo" valign=top width=25%>')
		document.writeln('<a href = "https://web.archive.org/web/1998/http://www.byui.edu" class ="donotusetoplinks">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>')
		document.writeln('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>')
		document.writeln('</td>')
		document.writeln('</tr>')
		document.writeln('</table>')
		//*******END SEPERATION TABLE*******//

	document.writeln('</td>')
	document.writeln('</tr>')
	document.writeln('</table>')
	//*******END TOP PORTION*******//

// This if statement will remove the main links from the bottom portion of the nav bar if needs be.
var hide
if(!hide)
{
	//*******BOTTOM PORTION*******//
	// The bottom portion is home for the menu bar.  
	// It also creates a border around the menu bar.
	// Changing the cellspacing of this table will change the border in the menu bar (NOT RECOMMENDED)
	// Any changes to the menu bar (Unless dealing with text content and linkage) must be done in the style sheet!
	// Each element is set in it's own table to produce the needed spacing and button-like effect.
	document.writeln('<table cellpadding=0 cellspacing=1 border=0 width=100% class="donotuseborder">')
	document.writeln('<tr>')
	document.writeln('<td class="donotusebottombackground" width="10%">')

		//*******HOME*******//
		document.writeln('<table cellpadding=2 cellspacing=0 border=0 width=100%>')
		document.writeln('<tr>')
		document.writeln('<td class="donotusemenubar"><nobr><a href="https://web.archive.org/web/1998/http://www.byui.edu/" class="donotusebottomlinks">Home</a></nobr></td>')
		document.writeln('</tr>')
		document.writeln('</table>')

	document.writeln('</td>')
	document.writeln('<td class="donotusebottombackground" width="16%">')

		//*******ALUMNI & FRIENDS*******//
		document.writeln('<table cellpadding=2 cellspacing=0 border=0 width=100%>')
		document.writeln('<tr>')
		document.writeln('<td class="donotusemenubar"><nobr><a href="https://web.archive.org/web/1998/http://www.byui.edu/alumniandfriends.htm" class="donotusebottomlinks">Alumni & Friends</a></nobr></td>')
		document.writeln('</tr>')
		document.writeln('</table>')

	document.writeln('</td>')
	document.writeln('<td class="donotusebottombackground" width="13%">')

		//*******STUDENTS*******//
		document.writeln('<table cellpadding=2 cellspacing=0 border=0 width=100%>')
		document.writeln('<tr>')
		document.writeln('<td class="donotusemenubar"><a href="https://web.archive.org/web/1998/http://www.byui.edu/students.htm" class="donotusebottomlinks">Students</a></td>')
		document.writeln('</tr>')
		document.writeln('</table>')

	document.writeln('</td>')
	document.writeln('<td class="donotusebottombackground" width="13%">')

		//*******EMPLOYEES*******//
		document.writeln('<table cellpadding=2 cellspacing=0 border=0 width=100%>')
		document.writeln('<tr>')
		document.writeln('<td class="donotusemenubar"><a href="https://web.archive.org/web/1998/http://www.byui.edu/employees.htm" class="donotusebottomlinks">Employees</a></td>')
		document.writeln('</tr>')
		document.writeln('</table>')

	document.writeln('</td>')
	document.writeln('<td class="donotusebottombackground" width="12%">')

		//*******DIRECTORIES*******//
		document.writeln('<table cellpadding=2 cellspacing=0 border=0 width=100%>')
		document.writeln('<tr>')
		document.writeln('<td class="donotusemenubar"><a href="https://web.archive.org/web/1998/http://www.byui.edu/directories.htm" class="donotusebottomlinks">Directories</a></td>')
		document.writeln('</tr>')
		document.writeln('</table>')

	document.writeln('</td>')
	document.writeln('<td class="donotusebottombackground" width="11%">')

		//*******SEARCH*******//
		document.writeln('<table cellpadding=2 cellspacing=0 border=0 width=100%>')
		document.writeln('<tr>')
		document.writeln('<td class="donotusemenubar"><a href="https://web.archive.org/web/1998/http://www.byui.edu/search.htm" class="donotusebottomlinks">Search</a></td>')
		document.writeln('</tr>')
		document.writeln('</table>')

	document.writeln('</td>')
	document.writeln('<td class="donotusebottombackground" width="10%">')

		//*******INDEX*******//
		document.writeln('<table cellpadding=2 cellspacing=0 border=0 width=100%>')
		document.writeln('<tr>')
		document.writeln('<td class="donotusemenubar"><a href="https://web.archive.org/web/1998/http://www.byui.edu/siteindex.htm" class="donotusebottomlinks">Index</a></td>')
		document.writeln('</tr>')
		document.writeln('</table>')

	document.writeln('</td>')
	document.writeln('<td class="donotusebottombackground" width="10%">')

		//*******HELP*******//
		document.writeln('<table cellpadding=2 cellspacing=0 border=0 width=100%>')
		document.writeln('<tr>')
		document.writeln('<td class="donotusemenubar"><a href="https://web.archive.org/web/1998/http://www.byui.edu/help/" class="donotusebottomlinks">Help</a></td>')
		document.writeln('</tr>')
		document.writeln('</table>')

	document.writeln('</td>')
	document.writeln('</tr>')
	document.writeln('</table>')
	//*******END BOTTOM PORTION*******//
}

document.writeln('</td>')
document.writeln('</tr>')
document.writeln('</table>')
//*******END OUTER BORDER*******//