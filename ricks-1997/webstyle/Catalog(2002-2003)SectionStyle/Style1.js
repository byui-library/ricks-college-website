var server = ""   //put a 1 here if you are working on nephi, a 2 if you are working on Jarom, and leave blank for omni
if (donotusetype == 1)
{
document.writeln('<link href="/webstyle/sectionHeaderStyleSheet.css" type="text/css" rel="stylesheet">')
document.writeln('<script src="/webstyle/websiteNavBar.js"></script>')
}
else if (donotusetype == 2)
{
document.writeln('<link href="https://web.archive.org/web/1998/https://www' + server + '.byui.edu/webstyle/securesectionHeaderStyleSheet.css" type="text/css" rel="stylesheet">')
document.writeln('<script src="https://web.archive.org/web/1998im_/https://www' + server + '.byui.edu/webstyle/securewebsitenavbar.js"></script>')
}