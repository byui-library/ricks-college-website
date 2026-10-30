/******************************************************************************
* nav.js                                                                      *
*                                                                             *
* Copyright 2000 by Nick Jolliff - ASRC Web Team.                             *
* Web address: http://www.byui.edu/asrc                                      *
* Last update: October 2, 2000.                                               *
*                                                                             *
* Creates interactive DHTML navigation bars with drop-down menus.             *
* Note: requires dhtmllib.js and navbar.js                                    *
******************************************************************************/
// Define the navigation bars.

  var myNavBar, menu;
// Sets the initial value for the size of the menu bar
  myNavBar = new NavBar(600);
  myNavBar.setSizes(1, 5, 1);
// Sets the colors and Fonts of the Nav-Bar
  myNavBar.setColors("#ffffff",
    "#ffffff", "#323264", "#000000", "#0099FF",
    "#ffffff", "#0033CC", "#000000", "#0066Ff");
  myNavBar.setFonts("Arial, Helvetica", "plain", "bold", "10pt",
    "Arial, Helvetica", "plain", "bold", "10pt");
  myNavBar.setAlign("center");


// This is the code for all of the individual items under the menubar, the first additem is the header


  menu = new NavBarMenu(0, 100);
  menu.addItem(new NavBarMenuItem("<center>Home</center>", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/default.asp"));
  myNavBar.addMenu(menu);

  menu = new NavBarMenu(0, 100);
  menu.addItem(new NavBarMenuItem("<center>Mission</center>", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/mission/"));
  menu.addItem(new NavBarMenuItem("Stewardship", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/mission/default.asp#stewardship"));
  menu.addItem(new NavBarMenuItem("Service", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/mission/default.asp#service"));
  myNavBar.addMenu(menu);

  menu = new NavBarMenu(0, 100);
  menu.addItem(new NavBarMenuItem("<center>Theme</center>", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/theme/"));
  myNavBar.addMenu(menu);

  menu = new NavBarMenu(0, 180);
  menu.addItem(new NavBarMenuItem("<center>Offices</center>", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/offices/"));
  menu.addItem(new NavBarMenuItem("Student Body President", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/offices/president/"));
  menu.addItem(new NavBarMenuItem("Executive Vice President", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/offices/executive/"));
  menu.addItem(new NavBarMenuItem("Academic Vice President", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/offices/academic/"));
  menu.addItem(new NavBarMenuItem("Programs Vice President", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/offices/programs/"));
  menu.addItem(new NavBarMenuItem("Social Vice President", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/offices/social/"));
  menu.addItem(new NavBarMenuItem("Women's Vice President", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/offices/womens/"));
  menu.addItem(new NavBarMenuItem("Student Relations Officer", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/offices/relations/"));
  menu.addItem(new NavBarMenuItem("Secretary/Treasurer", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/offices/secretary/"));
  myNavBar.addMenu(menu);

  menu = new NavBarMenu(0, 100);
  menu.addItem(new NavBarMenuItem("<center>Events</center>", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/events/"));
  menu.addItem(new NavBarMenuItem("Devotional", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/events/devotional/"));
  menu.addItem(new NavBarMenuItem("Calendar", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/events/calendar/"));
  menu.addItem(new NavBarMenuItem("Women's Week", "https://web.archive.org/web/2001/http://www.byui.edu/WomensWeek/"));
  menu.addItem(new NavBarMenuItem("Men's Week", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/events/MensWeek/"));
  menu.addItem(new NavBarMenuItem("Guitars Unplugged", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/offices/relations/gunplugged/"));
  menu.addItem(new NavBarMenuItem("Multicultural Week", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/events/multi/"));
  myNavBar.addMenu(menu);

  menu = new NavBarMenu(0, 100);
  menu.addItem(new NavBarMenuItem("<center>Clubs/Organizations</center>", "https://web.archive.org/web/2001/http://www.byui.edu/clubs/"));
  myNavBar.addMenu(menu);

  menu = new NavBarMenu(0, 100);
  menu.addItem(new NavBarMenuItem("<center>Dances</center>", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/dances/"));
  menu.addItem(new NavBarMenuItem("March", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/dances/#March"));
  menu.addItem(new NavBarMenuItem("April", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/dances/#April"));
  myNavBar.addMenu(menu);

  menu = new NavBarMenu(0, 0);
  menu.addItem(new NavBarMenuItem("<center>Get Involved</center>", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/involved/"));
  menu.addItem(new NavBarMenuItem("Application", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/involved/application/"));
  myNavBar.addMenu(menu);

  menu = new NavBarMenu(0, 0);
  menu.addItem(new NavBarMenuItem("<center>Questions/Comments</center>", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/questions/"));
  menu.addItem(new NavBarMenuItem("Web Team", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/questions/webteam"));
  menu.addItem(new NavBarMenuItem("ASRC", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/questions/asrc/"));
  menu.addItem(new NavBarMenuItem("Student Solutions", "https://web.archive.org/web/2001/http://www.byui.edu/asrc/questions/ssolutions"));
  myNavBar.addMenu(menu);


// End of the Navbar creation code

  
  var fullWidth;
  function init() {

  // Get width of window, need to account for scrollbar width in Netscape.


  fullWidth = getWindowWidth() 
    - (isMinNS4 && getWindowHeight() < getPageHeight() ? 16 : 0);    
    myNavBar.resize(fullWidth);

    // Create the navigation bars.
    myNavBar.create();
    myNavBar.setzIndex(2);
  }