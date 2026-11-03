document.writeln('<table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#e8ddb3" height="20">')
document.writeln('<tr align="center">')
document.writeln('<td align = "center" nowrap width="20%"><center>')
document.writeln('<a href="' + href1 +'"><font size="2" face="Arial,Helvetica,Geneva,Swiss,SunSans-Regular" color="#002a54"><b>' + title1 +'</b></font></a></center></td>')
document.writeln('<td align = "center" nowrap width="20%"><center>')
document.writeln('<a href="' + href2 +'"><font size="2" face="Arial,Helvetica,Geneva,Swiss,SunSans-Regular" color="#002a54"><b>' + title2 +'</b></font></a></center></td>')
if (href3 != "")
{
   document.writeln('<td align = "center" nowrap width="20%"><center>')
   document.writeln('<a href="' + href3 +'"><font size="2" face="Arial,Helvetica,Geneva,Swiss,SunSans-Regular" color="#002a54"><b>' + title3 +'</b></font></a></center></td>')
}
if (href4 != "")
{
   document.writeln('<td align = "center" nowrap width="20%"><center>')
   document.writeln('<a href="' + href4 +'"><font size="2" face="Arial,Helvetica,Geneva,Swiss,SunSans-Regular" color="#002a54"><b>' + title4 +'</b></font></a></center></td>')
}
if (href5 != "")
{
   document.writeln('<td align = "center" nowrap width="20%"><center>')
   document.writeln('<a href="' + href5 +'"><font size="2" face="Arial,Helvetica,Geneva,Swiss,SunSans-Regular" color="#002a54"><b>' + title5 +'</b></font></a></center></td>')
}
document.writeln('</tr></table>')