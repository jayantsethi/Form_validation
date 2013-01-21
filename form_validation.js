function validName()
{
	if(theform.name1.value == "") document.getElementById("nlabel").innerHTML="Please Enter The Name";
	
}

function setName()
{
	if(document.getElementById("nlabel").value!="")
	document.getElementById("nlabel").innerHTML="";
}

function validAge()
{
	if(theform.age.value == "") document.getElementById("alabel").innerHTML="Please Enter Your Age";
	else if((theform.age.value<18) || theform.age.value>120) document.getElementById("alabel").innerHTML="This is not a valid Age";
	else if(/[^0-9]/.test(theform.age.value)) document.getElementById("alabel").innerHTML="This is not a valid Age";
}

function setAge()
{
	if(document.getElementById("alabel").value!="")
	document.getElementById("alabel").innerHTML="";
}

function validEmail()
{
	if(theform.email.value == "") document.getElementById("elabel").innerHTML="Please Enter Your Email ID";
	else if(!((theform.email.value.indexOf("@")>0) && (theform.email.value.indexOf(".")>0)) || /[^a-zA-Z0-9.@_-]/.test(theform.email.value))
	document.getElementById("elabel").innerHTML="This is not a valid Email ID";
}

function setEmail()
{
	if(document.getElementById("elabel").value!="")
	document.getElementById("elabel").innerHTML="";
}

function validUsername()
{
	if(theform.uname.value == "") document.getElementById("ulabel").innerHTML="Please Enter a Username";
	else if(theform.uname.value.length<6) document.getElementById("ulabel").innerHTML="Username should be more than 5 characters";
	else if(/[^a-zA-Z0-9_-]/.test(theform.uname.value)) document.getElementById("ulabel").innerHTML="Username should contain only letters, _ and -"
}

function setUname()
{
	if(document.getElementById("ulabel").value!="")
	document.getElementById("ulabel").innerHTML="";
}

function validPassword()
{
	if(theform.pw.value == "") document.getElementById("plabel").innerHTML="Please Enter a Password";
	else if(theform.pw.value.length<6) document.getElementById("plabel").innerHTML="Password should be more than 5 characters"
	else if(!/[a-z]/.test(theform.pw.value) || !/[A-Z]/.test(theform.pw.value) || !/[0-9]/.test(theform.pw.value))
	document.getElementById("plabel").innerHTML="Password should contain atleast one of uppercase letter, one of lowercase letter and one of numbers";
}

function setPword()
{
	if(document.getElementById("plabel").value!="")
	document.getElementById("plabel").innerHTML="";
}

function validCpassword()
{
	if(theform.cpw.value == "") document.getElementById("clabel").innerHTML="Please Enter The Password Again To Confirm";
	else if(theform.cpw.value!=theform.pw.value) document.getElementById("clabel").innerHTML="Passwords do not match";
}

function setCpword()
{
	if(document.getElementById("clabel").value!="")
	document.getElementById("clabel").innerHTML="";
}
