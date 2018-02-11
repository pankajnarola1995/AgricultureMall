<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Untitled Document</title>

<script type="text/javascript" src="jquery-1.10.2.js">
</script>
<script type="text/javascript" src="validate.js"></script>
<script>
		
	$("document").ready(function(){
/*		
		$("input").focus(function(){
    $("this").css("display", "inline").fadeOut(2000);
});

$("input").focusin(function(){
    $(this).css("background-color", "#FFFFCC");
}); 
$("input").focusout(function(){
    $(this).css("background-color", "#FFFFFF");
}); 

/*$("input").on("focusin focusout", function(){
        $(this).toggleClass("intro");
    });
});*/
	//$("#required").hide();
		
		$("#submit").click(function(){
			var fname,lname,num,phno,email,drop,pass,radio,check,file;
			//var fname1=getElementById("#fname").value;
			//alert(fname1);
			fname = test_name("#fname","#msgfname");
			//alert(fname);
			lname = test_name("#lname","#msglname");
			num = test_num("#salary","#msgsalary");
			phno = test_no("#phone","#msgphone");
			email = test_email("#mail","#msgmail");
			drop = test_drop("#dropdown","#msgdropdown");
			pass = test_match("#pass","#repass","#msgpass","#msgrepass");
			radio = test_radio("#gender","#msgradio");
			check = test_check("#check","#msgckb");
			file = test_file("#brws","#msgfile");
			
			if(fname == true && lname == true && num == true && phno == true
				&& radio == true && pass == true && drop == true && email == true
				&& check == true && file == true)
			{
				return true;
				
			}
			else
			{
				return false;
			}
			
		});
	
	});
</script>
</head>

<body>

<form name="myform" action="" method="post">

<table width="60%">
	<tr>
		<td>Enter Name<input type="text" name="txtfname" id="fname"/></td><td><span id="msgfname"></span></td>
	</tr>
	<tr>
		<td>Enter Last<input type="text" name="txtlname" id="lname"/></td><td><span id="msglname">
		</span></td>
	</tr>
	<tr>
		<td>Enter salary<input type="text" name="txtlname" maxlength="5" id="salary"/></td><td><span id="msgsalary"></span></td>
		
	</tr>
	<tr>
		<td>Enter Email<input type="text" name="txtemail" id="mail"/></td><td><span id="msgmail"></span></td>
		
	</tr>
	<tr>
		<td>Enter phone<input type="text" name="txtphone" id="phone"/></td><td><span id="msgphone"></span></td>
		
	</tr>
	<tr>
		<td>Password<input type="password" name="txtpass" id="pass"/></td><td><span id="msgpass"></span></td>
		
	</tr>
	<tr>
		<td>ReType Password<input type="password" name="txtrepasss" id="repass"/></td><td><span id="msgrepass"></span></td>
		
	</tr>
	<tr>
		<td><select id="dropdown" name="country">
		<option>--Select--</option>
		<option value="india">India</option>
		<option value="india">Japan</option>
		<option value="india">Pakistan</option>
		<option value="india">China</option>
		</select></td><td><span id="msgdropdown"></span></td>
	</tr>
	<tr>
		<td>Select Gender<input id="gender" type="radio" name="gender" value="male" />Male
		<input type="radio" id="gender" name="gender" value="Female" />female</td><td><span id="msgradio"></span></td>
		
	</tr>
	<tr>
		<td><input type="checkbox" id="check" name="ckb" value="Reading" />Reading
		<input type="checkbox" id="check" name="ckb" value="Dancing" />Dancing
		<input type="checkbox" id="check" name="ckb" value="Playing" />Playing
		<input type="checkbox"  id="check" name="ckb" value="Movie" />Movie</td><td>
		<span id="msgckb"></span></td>
	</tr>
	<tr>
		<td>Select File:- <input type="file" name="brws" id="brws"/></td><td><span id="msgfile"></span></td>
		
	</tr>
	<tr>
		<td colspan=2><input type="submit" name="submit" value="submit" id="submit"/></td>
		
	</tr>
</table>


</form>



</body>
</html>
