  // Get Servertime
  // Replace "new Date()"
  // example: Change "var thisDate = new Date()" to "var thisDate = getServertime()"
  
	function getSevertime(){
		var xmlHttp = new XMLHttpRequest();
		if( !xmlHttp ){
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlHttp.open("HEAD",location.href,false);
		xmlHttp.send();
		var severtime=new Date(xmlHttp.getResponseHeader("Date"));
		return severtime;
	}
