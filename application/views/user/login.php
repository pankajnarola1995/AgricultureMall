<!--A Design by W3layouts
Author: W3layout
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
<?php
if($this->session->userdata("user_login_id")=="")
{
}
else
{$this->session->set_flashdata("user_login_okk","Please Logout First..........");
	redirect("home");
}

?>
<!DOCTYPE HTML>
<html>
<title>:: Login :: </title>

<html>
<head>

<?php include_once("header.php") ?>   
<script type="text/javascript" src="<?php echo base_url()?>data/validation/validate.js"></script>
<script>
$("document").ready(function(){
	$("#login").click(function(){
			var email_id,password;
			//var fname1=getElementById("#fname").value;
			//alert(fname1);
			email_id = test_email("#email","#msgmail");
			password = test_oldpassword("#password","#msgpassword");
			
			//alert(email_id+","+password+","+first_name+","+last_name+","+security_answer+","+address+","+country_id+","+state_id+","+city+","+security_question+","+gender+","+company_name+","+mobile_number);
			if(email_id == true && password == true  )
			{
				return true;
				
			}
			else
			{
				return false;
			}
			
		});
		$("#showpass").click(function(){
			if($("#showpass:checked").length > 0)
			{
				$("#password").attr("type","text");
			}
			else
			{
				$("#password").attr("type","password");
			}
		});
		
		});
</script>     
<!---->
<div class="login_sec">
	 <div class="container">
		 <ol class="breadcrumb">
		  <li><a href="index.html">Home</a></li>
		  <li class="active">Login</li>
		 </ol>
		 <h2>Login</h2>
		 <div class="col-md-6 log">			 
				 <p>Welcome, please enter the folling to continue.</p>
				 <p>If you have previously Login with us, <span>click here</span></p>
                  <?php
						
						if(form_error('email') or form_error('password') or $this->session->flashdata("user_login")!="")
						{
						echo "
                        <div class='alert alert-error' style='position:absolute;margin-left:0px;width:400px;height:40px' id='regimsg'>
										
										<p style='margin-top:-10px;color:#b55351d;' align='center'><strong  >Error !</strong> Enter valid Email and password. </p>
									</div>";
						}
						?>
                 	 <br>
				 <form action="<?php echo base_url("home/user_login_chk")?>" method="post">
					 <h5>User Name:</h5>	
					 <input type="text" value="" name="email" id="email" placeholder="UserName:">
					 <h5>Password:</h5>
					 <input type="password" value="" placeholder="Password:" name="password" id="password">
                     <label class="checkbox" style="position:absolute;margin-top:-27px">
										<input type="checkbox" id="showpass" name="showpass" class=""> Show Password
									</label>
                    <input type="submit" value="Login" id="login">
					  <a href="<?php echo base_url("home/security_email")?>">Forgot Password ?</a>
				 </form>				 
		 </div>
		  <div class="col-md-6 login-right">
			  	<h3>NEW REGISTRATION</h3>
				<p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
				<a class="acount-btn" href="<?php echo base_url("home/signup")?>">Create an Account</a>
		 </div>
		 <div class="clearfix"></div>
	 </div>
</div>
<!---->
<div class="footer">
	 <div class="container">
		 <div class="store">
			 <ul>
				 <li class="active">OUR STORE LOCATOR::</li>
				 <li><a href="#">Noida</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Belgium</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">China</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Germany</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Japan</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Armenia</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">South Africa</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Malaysia</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Indonesia</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Mumbai</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Portugal</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Spain</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Northern Ireland</a></li>	
				 <li><a href="#">|</a></li>				 
				 <li><a href="#">Mohali</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Gurgaon</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Panchkula</a></li>
				 <li><a href="#">|</a></li>				 
				 <li><a href="#">Ambala</a></li>	
			 </ul>
		 </div>		 
		 <div class="copywrite" align="center">
			 <p>Copyright © 2015 Furnyish Store. All rights reserved | Design by <a href="http://rakshinfotech.com">Raksh</a></p>
		 </div>			 
		 </div>
	 </div>
<!---->
</div>
<!---->
</body>
</html>


</body>
</html>