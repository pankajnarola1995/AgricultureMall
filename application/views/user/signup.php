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
<html>

<title>:: Sign Up ::</title>
<html>
<head>
<?php include_once("header.php") ?>
<link href="<?php echo base_url()?>data/css/jquery-ui1.css" rel="stylesheet">
      
      <script src="<?php echo base_url()?>data/js/jquery-ui.js"></script>
      <!-- Javascript -->
      <script>
         $(function() {
            $( "#datepicker-13" ).datepicker();
            //$( "#datepicker-13" ).datepicker("show");
         });
      </script>
<!--//theme-style-->

<script type="text/javascript" src="<?php echo base_url()?>data/validation/validate.js"></script>
<script>
		
	$("document").ready(function(){
		$("#country_id").change(function(){
					var id = $(this).val();
					if(id == "Select Country..")
					{	//alert();
					}
					else
					{
						//alert(id);
						$.ajax({
							url:"<?php echo base_url("admin/admin_location/select_city_country")?>",
							type:"post",
							data:{country_id:id},
							success:function(result){
								//alert(result);
								$("#state_id").html(result);
							}
						});
					}
				
				});
			$("#state_id").change(function(){
					var id = $(this).val();
					if(id == "Select State..")
					{	//alert();
					}
					else
					{
						//alert(id);
						$.ajax({
							url:"<?php echo base_url("admin/admin_location/select_city_state")?>",
							type:"post",
							data:{state_id:id},
							success:function(result){
								//alert(result);
								$("#city_id").html(result);
							}
						});
					}
				
				});
				$("#register-submit").click(function(){
			var email_id,password,first_name,last_name,address,city,gender,mobile_number,country_id,state_id,date;
			//var fname1=getElementById("#fname").value;
			//alert(fname1);
			email_id = test_email("#email","#msgmail");
			password = test_match("#password","#cpassword","#msgpassword","#msgconfirmpassword");
			first_name = test_userfname("#fname","#msgfname");
			date = test_date("#datepicker-13","#msgfname");
			last_name = test_userlname("#lname","#msglname");
			address = test_address("#address","#msgaddress");
			country_id = test_country("#country_id","#msgcountry_id");
			state_id = test_state("#state_id","#msgstate_id");
			city = test_city("#city_id","#msgcity_id");
			gender = test_radio("#gender","#msggender");
			mobile_number = test_mobno("#mobile_number","#msgmobile");
			//alert(email_id+","+password+","+first_name+","+last_name+","+address+","+country_id+","+state_id+","+city+","+date+","+gender+","+mobile_number);
			if(email_id == true && password == true && first_name == true && last_name == true
				&& address == true && city == true && gender == true  && mobile_number == true  && country_id == true && state_id == true && date == true
				 )
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
<!-- header -->


 
<!-- header -->
<!-- header -->


<!--cart-->
	 
<!------>

<!---->
<div class="container">
	  <ol class="breadcrumb">
		  <li><a href="index.html">Home</a></li>
		  <li class="active">Sign Up</li>
		 </ol>
	 <div class="registration">
		 <div class="registration_left">
			 <h2>new user? <span> create an account </span></h2>
			 <!-- [if IE] 
				< link rel='stylesheet' type='text/css' href='ie.css'/>  
			 [endif] -->  
			  
			 <!-- [if lt IE 7]>  
				< link rel='stylesheet' type='text/css' href='ie6.css'/>  
			 <! [endif] -->  
			 <script>
				(function() {
			
				// Create input element for testing
				var inputs = document.createElement('input');
				
				// Create the supports object
				var supports = {};
				
				supports.autofocus   = 'autofocus' in inputs;
				supports.required    = 'required' in inputs;
				supports.placeholder = 'placeholder' in inputs;
			
				// Fallback for autofocus attribute
				if(!supports.autofocus) {
					
				}
				
				// Fallback for required attribute
				if(!supports.required) {
					
				}
			
				// Fallback for placeholder attribute
				if(!supports.placeholder) {
					
				}
				
				// Change text inside send button on submit
				var send = document.getElementById('register-submit');
				if(send) {
					send.onclick = function () {
						this.innerHTML = '...Sending';
					}
				}
			
			 })();
			 </script>
			 <div class="registration_form">
			 <!-- Form -->
             <table border="0" style="width:1150px">
             <tr>
            
				<form id="registration_form" action="<?php echo base_url("home/signup_user")?>" method="post" enctype="multipart/form-data">
                 <td style="width:650px">
					<div>
						<label>
							<input placeholder="first name:" type="text" tabindex="1" name="fname" id="fname" required autofocus>
						</label>
					</div>
					<div>
						<label>
							<input placeholder="last name:" type="text" tabindex="2" name="lname" id="lname" required autofocus>
						</label>
					</div>
					<div>
						<label>
							<input placeholder="email address:" type="email" tabindex="3" name="email" id="email" required>
						</label>
					</div>
					<div>
						<label>
							<input placeholder="Mobile:" type="text" tabindex="3" name="mobile_number" id="mobile_number" required>
						</label>
					</div>					
						<div class="sky_form1">
							<ul>
								<li><label class="radio left"><input type="radio" name="gender" id="gender" value="MALE"><i></i>Male</label></li>
								<li><label class="radio"><input type="radio" name="gender" id="gender" value="FEMALE"><i></i>Female</label></li>
								<div class="clearfix"></div>
							</ul>
						</div>					
					<div>
						<label>
							<input placeholder="password" type="password" tabindex="4" name="password" id="password" required>
						</label>
					</div>						
					<div>
						<label>
							<input placeholder="retype password" type="password" tabindex="4" name="cpassword" id="cpassword" required>
						</label>
					</div>	
                     </td>
                     <td style="padding-left:40px;width:650px">
					<div>
						<label>
							<input placeholder="DOB:" type="text" tabindex="1" id="datepicker-13" name="date" required autofocus>
						</label>
					</div>
					<div>
						<label>
							<textarea placeholder="Address:"  required autofocus style="height:91px;resize:none" name="address" id="address"></textarea>
						</label>
					</div>
					<div>
						<label>
							<select tabindex="1" data-placeholder="Select Country"  name="country_id" id="country_id">
										<option value="Select here..">Select Country..</option>
										<?php
													
										  foreach($country_data as $data)
											{
										?>
												<option value="<?php echo $data['country_id']?>"><?php echo $data['country_name']?></option>
										<?php
                                            }
										?>
										</select>
						</label>
					</div>
					
						<label>
							<select tabindex="1" data-placeholder="Select here"  name="state_id" id="state_id">
										<option value="Select here..">Select State..</option>
										</select>
						</label>				
					<div >
						<label>
							<select tabindex="1" data-placeholder="Select here"  name="city_id" id="city_id" >
										<option value="Select here..">Select City..</option>
										</select>
						</label>
					</div>	
                    <div>
						<label>
							<input type="file" tabindex="1" id="profile" name="profile" required autofocus>
						</label>
					</div>			
					
                     </td>
					
                   
				
                <tr>
                <tr><td colspan="1"><div>
						<input type="submit" value="create an account" id="register-submit" name="register-submit">
					</div>
					<div class="sky-form">
						<label class="checkbox"><input type="checkbox" name="checkbox" ><i></i>i agree to mobilya.com &nbsp;<a class="terms" href="#"> terms of service</a> </label>
					</div></td></tr>
                    </form>
                </table>
				<!-- /Form -->
			 </div>
		 </div>
		 <div class="registration_left">
			 <h2>existing user ? <a class="" href="<?php echo base_url("home/login")?>">Sign In</a></h2>
		 </div>
		 <div class="clearfix"></div>
	 </div>
</div>
<!-- end registration -->

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
</div>
<!---->
</body>
</html>


</body>
</html>