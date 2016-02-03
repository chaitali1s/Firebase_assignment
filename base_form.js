function validateForm() {
    var username = document.forms["contactForm"]["uname"].value;
	var emailid = document.forms["contactForm"]["eid"].value;
	var msg = document.forms["contactForm"]["usermsg"].value;
	var atpos,dotpos;
	var letters = /^[A-Za-z]+$/;
	
    if (username == null || username == "") {
		document.getElementById('txtemail').innerHTML="";
		document.getElementById('txtmsg').innerHTML="";
        document.getElementById('txtname').innerHTML="Please enter your name";
		
        return false;
    }
	else if(emailid == null || emailid == "") {
		document.getElementById('txtname').innerHTML="";
		document.getElementById('txtmsg').innerHTML="";
        document.getElementById('txtemail').innerHTML="Please enter your email id";
        return false;
    }
	else if(msg == null || msg == "") {
		document.getElementById('txtname').innerHTML="";
        document.getElementById('txtemail').innerHTML="";
        document.getElementById('txtmsg').innerHTML="Please enter your Message";
        return false;
    }
	else
	{
		atpos = emailid.indexOf("@");
		dotpos = emailid.lastIndexOf(".");

		if (atpos < 1 || ( dotpos - atpos < 2 )) 
		{
			document.getElementById('txtemail').innerHTML="Please enter correct email id";
			return false;
		}

		if(username.match(letters))  
		{
		}  
		else{
			document.getElementById('txtname').innerHTML="Username must have alphabet characters only";
			return false; 
		}
	}
}