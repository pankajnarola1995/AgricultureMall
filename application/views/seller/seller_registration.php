<!-- Mirrored from www.egrappler.com/edmin/other-login.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 01 Dec 2015 07:50:58 GMT -->
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Agromall | Seller</title>
    <link href="<?php echo base_url()?>data/images/header.png" rel="shortcut icon">
	<link type="text/css" href="<?php echo base_url()?>data/sellerdata/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link type="text/css" href="<?php echo base_url()?>data/sellerdata/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet">
	<link type="text/css" href="<?php echo base_url()?>data/sellerdata/css/theme.css" rel="stylesheet">
	<link type="text/css" href="<?php echo base_url()?>data/sellerdata/images/icons/css/font-awesome.css" rel="stylesheet">
   
<script type="text/javascript" src="<?php echo base_url()?>data/validation/jquery-1.10.2.js">
</script>
<script type="text/javascript" src="<?php echo base_url()?>data/validation/validate.js"></script>
<script>
		
	$("document").ready(function(){
		$("#email_id").blur(function(){
					var id = $(this).val();
						//alert(id);
						$.ajax({
							url:"<?php echo base_url("admin/admin/check_email_exist")?>",
							type:"post",
							data:{email_id:id},
							success:function(result){
								//alert(result);
								$("#msgmail").html(result);
								if(result!="")
								$("#email_id").val("");
							}
						});
					
				
				});
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
		$("#register").click(function(){
			var email_id,password,first_name,last_name,address,city,gender,company_name,mobile_number,security_question,security_answer,country_id,state_id;
			//var fname1=getElementById("#fname").value;
			//alert(fname1);
			email_id = test_email("#email_id","#msgmail");
			password = test_match("#password","#confirmpassword","#msgpassword","#msgconfirmpassword");
			first_name = test_fname("#first_name","#msgfname");
			last_name = test_lname("#last_name","#msglname");
			security_answer = test_answer("#security_answer","#msgsecurity_answer");
			address = test_address("#address","#msgaddress");
			country_id = test_country("#country_id","#msgcountry_id");
			state_id = test_state("#state_id","#msgstate_id");
			city = test_city("#city_id","#msgcity_id");
			security_question = test_sque("#security_question","#msgsecurity_question");
			gender = test_radio("#gender","#msggender");
			company_name = test_companyname("#company_name","#msgcname");
			mobile_number = test_mobno("#mobile_number","#msgmobile");
			//alert(email_id+","+password+","+first_name+","+last_name+","+security_answer+","+address+","+country_id+","+state_id+","+city+","+security_question+","+gender+","+company_name+","+mobile_number);
			if(email_id == true && password == true && first_name == true && last_name == true
				&& address == true && city == true && gender == true && company_name == true && mobile_number == true && security_question == true && security_answer == true  && country_id == true && state_id == true
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
 <body>

	<div class="navbar navbar-fixed-top" style="height:60px" >
		<div class="navbar-inner" style="height:60px;background-color:#008F4C">
			  <div class="container" style="margin-top:-4px;">
				<a class="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
					<i class="icon-reorder shaded"></i>
				</a>

			  	<a class="brand" href="#">
			  		Seller
			  	</a>
					<div class="top_left" style="color:#FFF;margin-left:550px">
				<ul style="margin-top:17px;">
					<li class="top_link">Email:agromall.info@gmail.com</li>|
					 <li class="top_link" style="margin-top:7px;"><a href="<?php echo base_url("seller/seller")?>">
							Login
						</a></li>|
                    <li><a href="<?php echo base_url("seller/seller/seller_security_email")?>">
							Forgot your password?
						</a></li>						
			
				<div class="social" style="float:right;margin-right:-105px">
					<ul>
						<li><a href="#"><i class="facebook"></i></a></li>
						<li><a href="#"><i class="twitter"></i></a></li>
						<li><a href="#"><i class="dribble"></i></a></li>	
						<li><a href="#"><i class="google"></i></a></li>	
                      							
					</ul>
				</div>
                </ul>
			</div>
				<!-- /.nav-collapse -->
			</div>
		</div><!-- /navbar-inner -->
	</div><!-- /navbar -->
 <a href="index.html"><img src="<?php echo base_url()?>data/images/logo1.png" alt="logo" style="width:130px;height:100px;margin-top:-50px;position:fixed;z-index:100000;"/></a>
<br><br>
				
    <div class="span9" style="margin-left:320px;width:60%">
    
					<div class="content" >

						<div class="module">
							<div class="module-head">
								<h3>Registration</h3>
							</div>
							<div class="module-body">

									

									<br />

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url('seller/seller/seller_registration');?>" enctype="multipart/form-data">	
                                    
                               			<div class="control-group">
											<label class="control-label" ><b>Email Id</b></label>
											<div class="controls">
												<input type="text" name="email_id" id="email_id" placeholder="Type email id" class="span8">
												<span class="help-inline" id="msgmail" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                        
										<div class="control-group">
											<label class="control-label" ><b>Password</b></label>
											<div class="controls">
												<input type="password" name="password" id="password" placeholder="Type password" class="span8">
												<span class="help-inline" id="msgpassword" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                        <div class="control-group">
											<label class="control-label" ><b>Confirm Password</b></label>
											<div class="controls">
												<input type="password" name="confirmpassword" id="confirmpassword" placeholder="Type confirm password" class="span8">
												<span class="help-inline" id="msgconfirmpassword" style="color:#F00;position:absolute"></span>
											</div>
										</div>

									<div class="control-group">
											<label class="control-label" ><b>First Name</b></label>
											<div class="controls">
												<input type="text" id="first_name" name="first_name" placeholder="Type first name" class="span8"><span class="help-inline" id="msgfname" style="color:#F00;position:absolute"></span>
                            </div>
										</div>
                                        
                                          
                                        <div class="control-group">
											<label class="control-label" ><b>Last Name</b></label>
											<div class="controls">
												<input type="text" id="last_name" name="last_name" placeholder="Type last name" class="span8"><span class="help-inline" id="msglname" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Address</b></label>
											<div class="controls">
												<input type="text" name="address" id="address" placeholder="Type address" class="span8"><span class="help-inline" id="msgaddress" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                   
                                   <div class="control-group">
										<label class="control-label" ><b>Country Name</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="country_id" id="country_id">
										<option value="Select here..">Select Country..</option>
										<?php
													
										  foreach($country as $data)
											{
										?>
												<option value="<?php echo $data['country_id']?>"><?php echo $data['country_name']?></option>
										<?php
                                            }
										?>
										</select>
                                       <!-- <span class="help-inline" id="msgcountry_id" ></span>			-->
										</div>
									</div>
                                    
                                    
                                     <div class="control-group">
										<label class="control-label" ><b>State Name</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="state_id" id="state_id">
										<option value="Select here..">Select State..</option>
										</select>
                                       <!-- <span class="help-inline" id="msgstate_id" ></span>			-->
										</div>
									</div>
                               
                                <div class="control-group">
										<label class="control-label" ><b>City Name</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="city_id" id="city_id">
										<option value="Select here..">Select City..</option>
										</select>
                                       <!-- <span class="help-inline" id="msgcity_id" ></span>			-->
										</div>
									</div>
                                        
                                        <div class="control-group">
											<label class="control-label"><b>Gender</b></label>
											<div class="controls">
													<input type="radio" name="gender" id="gender" value="Male" >&nbsp; Male
													<input type="radio" name="gender" id="gender" value="Female">&nbsp;Female
<span class="help-inline" id="msggender" style="color:#F00;position:absolute"></span> 
											</div>
										</div>

                                          
                                        <div class="control-group">
											<label class="control-label" ><b>Company Name</b></label>
											<div class="controls">
												<input type="text" id="company_name" name="company_name" placeholder="Type company name" class="span8"><span class="help-inline" id="msgcname" style="color:#F00;position:absolute"></span>											
											</div>
										</div>
                                        
                                          
                                        <div class="control-group">
											<label class="control-label" ><b>Mobile Number</b></label>
											<div class="controls">
												<input type="text" id="mobile_number" name="mobile_number" placeholder="Type mobile number" class="span8"><span class="help-inline" id="msgmobile" style="color:#F00;position:absolute"></span>												
											</div>
										</div>
                                        
                                            
                                   <div class="control-group">
											<label class="control-label" ><b>Security Question</b></label>
											<div class="controls">
												<select tabindex="1" data-placeholder="Select here.." class="span8"  name="security_question" id="security_question">
													<option value="Select here..">Select Security Question</option>
													<option value="Your Mobile No">Your Mobile No</option>
                                                    <option value="Your First Name">Your First Name</option>
                                                    <option value="Your Birth Date">Your Birth Date</option>
                                      
													
												</select><!--<span class="help-inline" id="msgsecurity_question"></span>-->
											</div>
										</div>
                                        
                                         <div class="control-group">
											<label class="control-label" ><b>Answer</b></label>
											<div class="controls">
												<input type="text" id="security_answer" name="security_answer" placeholder="Enter Security Answer" class="span8">
                                                <span class="help-inline" id="msgsecurity_answer" style="color:#F00;position:absolute"></span>												
											</div>
										</div>
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Profile</b></label>
											<div class="controls">
												<input type="file" id="profile" name="profile"  class="span8"><span class="help-inline" ></span>
											</div>
										</div>
                                        
                                    
                                        
                                 <div class="control-group" align="center">
											<div class="controls" >
												<button type="submit" class="btn btn-primary pull-center"  name="register" id="register" >Register Now ! </button>
											</div>
										</div>
									</form>
							</div>
						</div>

						

					
						
					</div><!--/.content-->
				</div>
    
    
    <!--/.wrapper-->

	<div class="footer" align="center" style="margin-left:220px">
		<div class="container">
			<b class="copyright" >&copy; 2016 Seller - Agromall.com </b> All rights reserved.
		</div>
	</div>
	<script src="<?php echo base_url()?>data/sellerdata/scripts/jquery-1.9.1.min.js" type="text/javascript"></script>
	<script src="<?php echo base_url()?>data/sellerdata/scripts/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>
	<script src="<?php echo base_url()?>data/sellerdata/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
	
	   <!--Dynamically creates analytics markup-->
  </body>