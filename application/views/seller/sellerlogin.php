<?php
if($this->session->userdata("seller_login_id")=="")
{
}
else
{
	redirect("seller/seller_seed");
}
?>
<?php 
//$a="";
if($this->session->flashdata("seller_Logout")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:100%;height:60px'>
<br>		 <p style='font-size:20px' align='center'><strong>Well done ! </strong> your Logout Success................ :) </p>
</div>";
?>

<?php 
if($this->session->flashdata("seller_allow")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:100%;height:60px'>
<br>		 <p style='font-size:20px' align='center'><strong>Sorry ! ".$this->session->flashdata("seller_allow")."</strong></p>
</div>";
?>
 <?php 
if($this->session->flashdata("seller_registration")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:100%;height:60px'>
<br>		 <p style='font-size:20px' align='center'><strong>Well done ! </strong> your registration Success................ :) </p>
</div>";

if($this->session->flashdata("email_success")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:100%;height:60px'>
<br><p style='font-size:20px' align='center'><strong>".$this->session->flashdata("email_success")."</strong></p>
</div>";
?><!DOCTYPE html>
<html lang="en">

<!-- Mirrored from www.egrappler.com/edmin/other-login.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 01 Dec 2015 07:50:58 GMT -->
<head>
	<title>Agromall | Seller Login</title>
     <link href="<?php echo base_url()?>data/images/header.png" rel="shortcut icon">
	<link type="text/css" href="<?php echo base_url()?>data/sellerdata/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link type="text/css" href="<?php echo base_url()?>data/sellerdata/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet">
	<link type="text/css" href="<?php echo base_url()?>data/sellerdata/css/theme.css" rel="stylesheet">
	<link type="text/css" href="<?php echo base_url()?>data/sellerdata/images/icons/css/font-awesome.min.css" rel="stylesheet">
    <link type="text/css" href="<?php echo base_url()?>data/sellerdata/images/icons/css/font-awesome.css" rel="stylesheet">
  <link type="text/css" href="<?php echo base_url()?>data/sellerdata/css/times.ttf" rel="stylesheet">  
 
  <!--<link href="<?php echo base_url()?>data/css/bootstrap.css" rel='stylesheet' type='text/css' />
	<!--<link type="text/css" href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600' rel='stylesheet'>-->
</head>
 <body">
 <script type="text/javascript" src="<?php echo base_url()?>data/validation/jquery-1.10.2.js">
</script>
<script>
		
	$(document).ready(function() {
        $('#regimsg').fadeIn().delay(2500).fadeOut();
		
		$("#showpass").click(function(){
			if($("#showpass:checked").length > 0)
			{
				$("#login_password").attr("type","text");
			}
			else
			{
				$("#login_password").attr("type","password");
			}
		});
    });
</script>

	<div class="navbar navbar-fixed-top" style="height:65px" >
    
		<div  style="height:65px;background-color:#008F4C;width:100%">
			  <div class="container" style="margin-top:-4px;">
				<a class="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
					<i class="icon-reorder shaded"></i>
				</a>

			  	<a class="brand" href="index.html">
			  		Seller
			  	</a>

				

					
					<div class="top_left" style="color:#FFF;margin-left:550px">
				<ul style="margin-top:17px;">
					<li class="top_link">Email:agromall.info@gmail.com</li>|
					 <li class="top_link" style="margin-top:7px;"><a href="<?php echo base_url("seller/seller/seller_signup")?>">
							Sign Up
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
					

				</div><!-- /.nav-collapse -->
                
			</div>
		</div><!-- /navbar-inner -->
       
	</div><!-- /navbar -->
    
    <a href="index.html"><img src="<?php echo base_url()?>data/images/logo1.png" alt="logo" style="width:130px;height:100px;margin-top:-50px;position:fixed;z-index:100000;"/></a>	
	<div class="wrapper" >
          
		<div class="container" >
        
			<div class="row">
     
				<div class="module module-login span4 offset4">
         <?php
						
						if(form_error('email') or form_error('login_password') or $this->session->flashdata("seller_login")!="")
						{
						echo "
                        <div class='alert alert-error' style='position:absolute;margin-left:0px;width:320px;height:23px' id='regimsg'>
										
										<strong >Error !</strong> Enter valid Email and password. 
									</div>";
						}
						?>        
					<form class="form-vertical" method="post" action="<?php echo base_url("seller/seller/seller_login_chk")?>">
                    
                        
						<div class="module-head">
							<h3>Sign In</h3>
						</div> 
                       
						<div class="module-body">
                     
							<div class="control-group"  >
                            <b><label class="control-label" for="basicinput" >Email</label></b>
								<div class="controls row-fluid" style="float:right">
                                 
									<input class="span12" type="text" id="email" name="email" placeholder="Email Id" value="<?php echo set_value("email");?>">
								</div>
							</div>
							<div class="control-group">
                            <b><label class="control-label" for="basicinput">Password</label></b>
								<div class="controls row-fluid">
                                <input class="span12" type="password" id="login_password" name="login_password" placeholder="Password" value="<?php echo set_value("login_password");?>">
								</div>
							</div>
						</div>
						<div class="module-foot">
							<div class="control-group">
								<div class="controls clearfix">
									<button type="submit" class="btn btn-primary pull-right" id="login" name="login">Login</button>
									<label class="checkbox">
										<input type="checkbox" id="showpass" name="showpass" class=""> Show Password
									</label>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div><!--/.wrapper-->
<br>
<div class="footer" align="center" style="margin-left:220px">
		<div class="container">
			 

			<b class="copyright" >&copy; 2014 Seller - Agromall.com </b> All rights reserved.
		</div>
	</div>
	<script src="<?php echo base_url()?>data/sellerdata/scripts/jquery-1.9.1.min.js" type="text/javascript"></script>
	<script src="<?php echo base_url()?>data/sellerdata/scripts/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>
	<script src="<?php echo base_url()?>data/sellerdata/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
	
	   <!--Dynamically creates analytics markup-->
  </body>