<?php
if($this->session->userdata("admin_login")=="")
{
}
else
{
	redirect(base_url().'admin/admin/admin_index');
}
?>
<?php 
//$a="";
if($this->session->flashdata("admin_Logout")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:100%;height:60px'>
<br>		 <p style='font-size:20px' align='center'><strong>Well done ! </strong> your Logout Success................ :) </p>
</div>";

//$a="";
if($this->session->flashdata("admin_allow")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:100%;height:60px'>
<br>		 <p style='font-size:20px' align='center'><strong>Sorry ! </strong> Wrong Username Or Password................ :) </p>
</div>";


?>


<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from www.egrappler.com/edmin/other-login.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 01 Dec 2015 07:50:58 GMT -->
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Agromall | Admin Login</title>
     <link href="<?php echo base_url()?>data/images/header.png" rel="shortcut icon">
	<link type="text/css" href="<?php echo base_url()?>data/admindata/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link type="text/css" href="<?php echo base_url()?>data/admindata/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet">
	<link type="text/css" href="<?php echo base_url()?>data/admindata/css/theme.css" rel="stylesheet">
	<link type="text/css" href="<?php echo base_url()?>data/admindata/images/icons/css/font-awesome.css" rel="stylesheet">
   <script type="text/javascript" src="<?php echo base_url()?>data/validation/jquery-1.10.2.js">
</script>
<script>
		
	$(document).ready(function(e) {
        $('#regimsg').fadeIn().delay(2500).fadeOut();
    });
</script>
</head>
 <body data-post="http://www.egrappler.com/responsive-bootstrap-admin-template-edmin/">

	<div class="navbar navbar-fixed-top" style="height:65px" >
		<div style="height:65px;background-color:#008F4C;width:100%">
			  <div class="container" style="margin-top:-4px;">
				<a class="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
					<i class="icon-reorder shaded"></i>
				</a>

			  	<a class="brand" href="#">
			  		Admin
			  	</a>

				<div class="nav-collapse collapse navbar-inverse-collapse">
				
					<ul class="nav pull-right">
						<li><a href="#">
							Forgot your password?
						</a></li>
					</ul>
				</div><!-- /.nav-collapse -->
			</div>
		</div><!-- /navbar-inner -->
	</div><!-- /navbar -->


	 <a href="index.html"><img src="<?php echo base_url()?>data/images/logo1.png" alt="logo" style="width:130px;height:100px;margin-top:-50px;position:fixed;z-index:100000;"/></a>	
	<div class="wrapper" >
          
		<div class="container">
        
			<div class="row">
     
				<div class="module module-login span4 offset4">
         <?php
						
						if(form_error('email') or form_error('login_password') or $this->session->flashdata("admin_login1")!="")
						{
						echo "
                        <div class='alert alert-error' style='position:absolute;margin-left:0px;width:320px;height:23px' id='regimsg'>
										
										<strong >Error !</strong> Enter valid Email and password. 
									</div>";
						}
						?>        
					<form class="form-vertical" method="post" action="<?php echo base_url("admin/admin/admin_login_chk")?>">
                    
                        
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
										<input type="checkbox"> Remember me
									</label>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div><!--/.wrapper-->

	<div class="footer">
		<div class="container" align="center">
			 

			<b class="copyright" >&copy; 2014 admin - Agromall.com </b> All rights reserved.
		</div>
	</div>
	<script src="<?php echo base_url()?>data/admindata/scripts/jquery-1.9.1.min.js" type="text/javascript"></script>
	<script src="<?php echo base_url()?>data/admindata/scripts/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>
	<script src="<?php echo base_url()?>data/admindata/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
	
	   <!--Dynamically creates analytics markup-->
  </body>