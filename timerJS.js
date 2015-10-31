var second=0;
var min=0;
var newWindow;
var timeout;
var recDescription;
var recNum=-1;
var arrRecord=[];

function recordTime(){
		document.getElementById('btnRecord').disabled=true;
		recDescription=prompt("Description of time frame:");
		
		recNum++;
		
		arrRecord[recNum]=new Array(2);
		
		arrRecord[recNum][0]=elem_min.innerHTML + " : " + elem_s.innerHTML + " : " + elem_ms.innerHTML;
		arrRecord[recNum][1]=recDescription;
				
		alert("Recorded!");
}

function displayRecord(){
	var elem=document.getElementById("records");
	if (recNum<0)
		alert("Sorry! No records to display!");
	else
	{
		newWindow=window.open();
		newWindow.document.write('<html><head><title>Records</title><link rel="stylesheet" type="text/css" href="style.css"></head><body><h2><em>Records:</em></h2>');
		newWindow.document.write('<table class="gridtable">');
		newWindow.document.write('<tr><th>Time</th><th>Description</th></tr>');
		for (var i=0; i<=recNum; i++)
		{
			newWindow.document.write('<tr>');
			newWindow.document.write('<td>' + arrRecord[i][0] + '</td><td>' + arrRecord[i][1]+ '</td>');
			newWindow.document.write('</tr>');
		}
		newWindow.document.write('</table></body></html>');
	}
}


function functionality(task){
	if (task=='start'){
		document.getElementById('btnStart').disabled=true;
		document.getElementById('btnStop').disabled=false;
		document.getElementById('btnReset').disabled=true;
		document.getElementById('btnRecord').disabled=true;
		second++;
		if (second==60)
			{
				second=0;
				min++;
				showVal(min, document.getElementById("min"));
			}
			showVal(second, document.getElementById("sec"));
		timeout=window.setTimeout("functionality('start')", 1000);
	}
	else if (task=='reset')
	{
		document.getElementById('btnStart').disabled=false;
		elem_s.innerHTML='00';
		elem_min.innerHTML='00';
		millis=0;
		second=0;
		min=0;
		return;
	}
	else
	{
		clearTimeout(timeout);
		document.getElementById('btnStop').disabled=true;
		document.getElementById('btnStart').disabled=false;
		document.getElementById("btnReset").disabled=false;
		document.getElementById("btnRecord").disabled=false;
	}
}

function showVal(value, elem)
{
	if (value<10)
		elem.innerHTML='0'+ value;
	else
		elem.innerHTML=value;

	return;
}
