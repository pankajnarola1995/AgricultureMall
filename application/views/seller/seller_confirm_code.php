<!DOCTYPE html>
<html lang="en">

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
		$("#conform").click(function(){
			var code;
			//var fname1=getElementById("#fname").value;
			//alert(fname1);
			
			code = test_confirm_code("#code","#msgcode");
			
			if( code == true )
			{
				return true;
				
			}
			else
			{
				return false;
			}
			
		});
		 $('#regimsg').fadeIn().delay(2500).fadeOut();
	
	});
</script>
</head>
 <body>

	<div class="navbar navbar-fixed-top" style="height:56px" >
		<div class="navbar-inner" style="height:60px;background-color:#008F4C">
      <?php //email not verify 
if($this->session->flashdata("email_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:105%;height:42px;margin-left:-70px'>
<br>		 <p style='font-size:20px' align='center'><strong>".$this->session->flashdata("email_error")."</strong> </p>
</div>";
?>
			  <div class="container" style="margin-top:-4px;">
				<a class="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
					<i class="icon-reorder shaded"></i>
				</a>

			  	<a class="brand" href="index.html">
			  		Seller
			  	</a>

				

					
					<div class="top_left" style="color:#FFF;margin-left:650px">
				<ul style="margin-top:17px;">
					<li class="top_link">Email:agromall.info@gmail.com</li>|
					 <li class="top_link" style="margin-top:7px;"><a href="<?php echo base_url("seller/seller")?>">
							Login
						</a></li>
                   					
			
				<div class="social" style="float:right;margin-right:-105px">
					<ul>
						<li><a href="#"><i class="facebook"></i></a></li>
						<li><a href="#"><i class="email"></i></a></li>
						<li><a href="#"><i class="dribble"></i></a></li>	
						<li><a href="#"><i class="google"></i></a></li>	
                      							
					</ul>
                   
				</div>
                </ul>
			</div>
					

				</div><!-- /.nav-collapse -->
                
			</div><!-- /navbar-inner -->
	</div><!-- /navbar -->
 <a href="index.html"><img src="<?php echo base_url()?>data/images/logo1.png" alt="logo" style="width:130px;height:100px;margin-top:-50px;position:fixed;z-index:100000;"/></a>
<br><br>
				
    <div class="span9" style="margin-left:350px;">
    
					<div class="content" >

						<div class="module">
							<div class="module-head">
								<h3>Confirm Code</h3>
							</div>
							<div class="module-body">

									

									<br/>

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("seller/seller/confirm_code")?>" >	
                                    
                               			
                                        	
										<div class="control-group">
											<label class="control-label" ><b>Confirm Code</b></label>
											<div class="controls">
												<input type="text" name="code" id="code" placeholder="Type Confirm Code" class="span8">
												<span class="help-inline" id="msgcode" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                        
         
                                <div class="control-group" align="center">
											<div class="controls"  >

                                              
                                              <button type="submit" class="btn btn-primary pull-center"  name="conform" id="conform"   >Verifiy Code</button>&nbsp;&nbsp;&nbsp;<button type="submit" class=""  name="resend" id="resend"   >Resend Code ?</button>
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