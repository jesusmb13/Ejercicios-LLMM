tabla = "";
tabla = "<table>";
n = document.getElementsByTagName("book").length;
for(i=0; i < n; i++)
tabla += "<tr> <td>" document.getElementsByTagName("book")[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</td> <td>" + document.getElementsByTagName("book")[i].getElementsByTagName("author")[0].nodeValue + "</td> </tr>";