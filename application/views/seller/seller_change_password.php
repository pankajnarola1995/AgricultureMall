<?php
if($this->session->userdata("seller_login_id")!="")
{
}
else
{
	redirect("seller/seller");
}
?>
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
		$("#changepass").click(function(){
			var new_password,old_password ;
			//var fname1=getElementById("#fname").value;
			//alert(fname1);
			old_password = test_oldpassword("#old_password","#msgold_password");
			new_password = test_match("#new_password","#new_confirmpassword","#msgnew_password","#msgnew_confirmpassword");
			//alert("old :"+old_password + " new :"+new_password);
			if( old_password == true && new_password == true )
			{
				//alert("okkk");
				return true;
				
			}
			else
			{
				//alert("okkkkkkk");
				return false;
			}
			
		});
		$("#old_password").blur(function(){
					var id = $(this).val();
						//alert(id);
						$.ajax({
							url:"<?php echo base_url("seller/seller/check_password")?>",
							type:"post",
							data:{old_pass:id},
							success:function(result){
								//alert(result);
								$("#msgold_password").html(result);
								//alert(result);
								if(result!="")
								$("#old_password").val("");
								
								
							}
						});
					
				
				});
		 $('#regimsg').fadeIn().delay(2500).fadeOut();
		$("#citydrop").hide();

		$("#cityclick").mouseover(function () {
			$("#citydrop").slideDown('slow');
		});
		
		$("#citydrop").mouseleave(function () {
			$("#citydrop").slideUp('slow');
		});
	
	});
</script>
</head>
 <body>

	<div class="navbar navbar-fixed-top" style="height:56px" >
		<div class="navbar-inner" style="height:60px;background-color:#008F4C">
      <?php //email not verify 
	// echo $this->session->userdata("seller_password");
if($this->session->flashdata("email_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:105%;height:42px;margin-left:-70px'>
<br>		 <p style='font-size:20px' align='center'><strong>".$this->session->flashdata("email_error")."</strong> </p>
</div>";
?>
			  <div class="container" style="margin-top:-4px;">
				<a class="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
					<i class="icon-reorder shaded"></i>
				</a>

			  	<a class="brand" href="<?php echo base_url("seller/seller_seed") ?>">
			  		Seller
			  	</a>

				

					
					<div class="top_left" style="color:#FFF;margin-left:550px">
				<ul style="margin-top:17px;">
					<li class="top_link">Email:agromall.info@gmail.com</li>|
					<li class="top_link" style="margin-top:7px;"><a href="<?php echo base_url("seller/seller/seller_profile"); ?>" id="cityclick"><?php echo $this->session->userdata("seller_name"); ?></a></li>|
                    <li class="top_link" ><a href="#profileupdate" data-toggle="modal" title="Click To Update Profile Picture"><img src="<?php echo base_url()?>image/user/<?php echo $this->session->userdata("seller_pic")?>" class="nav-avatar" /></a></li>						
			
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
					<div id="citydrop" style="position:absolute;margin-left:800px;width:150px;text-align:center">
    <div class="dropbottom" style="display:block;background-color:#008E4B;color:#FFF">
        <div class="dropmid" style="margin-left:-20px">
            <ul class="account" style="list-style:none">
                <li ><a href="<?php echo base_url("seller/seller/seller_profile"); ?>" ><i class="menu-icon icon-user"></i>PROFILE</a>
                </li>
                <li ><a href="<?php echo base_url("seller/seller/change_password"); ?>" >Change Password</a>
                </li>
                <li style="padding-bottom:5px"><a href="<?php echo base_url("seller/seller/logout"); ?>" >
									<i class="menu-icon icon-signout"></i>
									Logout
								</a>
                </li>
            </ul>
        </div>
    </div>
</div>
					

				</div><!-- /.nav-collapse -->
                
			</div><!-- /navbar-inner -->
	</div><!-- /navbar -->
   <div id="profileupdate" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Update Profile Picture</h4>
      </div>
      <form name="imgfrm"  action="<?php echo base_url("seller/seller/seller_profile_update") ?>" method="post"  enctype="multipart/form-data">
      <div class="modal-body">
      
       <input type="file" id="images" name="images" value="" >
        <input type="hidden" id="seller_id" name="seller_id" value="<?php echo $this->session->userdata("seller_login_id")?>">
        <input type="hidden" id="old_images_id" name="old_images_id" value="<?php echo $this->session->userdata("seller_pic")?>">
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn"  name="update" id="update">Update</button>
      </div>
    </div>
</form>
  </div>
</div>
 <a href="<?php echo base_url("seller/seller_seed") ?>"><img src="<?php echo base_url()?>data/images/logo1.png" alt="logo" style="width:130px;height:100px;margin-top:-50px;position:fixed;z-index:100000;"/></a>
<br><br>
				
    <div class="span9" style="margin-left:350px;">
    
					<div class="content" >

						<div class="module">
							<div class="module-head">
								<h3>Change Password</h3>
							</div>
							<div class="module-body">

									

									<br/>

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("seller/seller/changepassword")?>" >	
                                    
                               				<div class="control-group">
											<label class="control-label" ><b>Old Password</b></label>
											<div class="controls">
												<input type="password" name="old_password" id="old_password" placeholder="Type Old password" class="span8">
												<span class="help-inline" id="msgold_password" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                        	
										<div class="control-group">
											<label class="control-label" ><b>New Password</b></label>
											<div class="controls">
												<input type="password" name="new_password" id="new_password" placeholder="Type New password" class="span8">
												<span class="help-inline" id="msgnew_password" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Confirm New Password</b></label>
											<div class="controls">
												<input type="password" name="new_confirmpassword" id="new_confirmpassword" placeholder="Type New confirm password" class="span8">
												<span class="help-inline" id="msgnew_confirmpassword" style="color:#F00;position:absolute"></span>
											</div>
										</div>
         
                                <div class="control-group" align="center">
											<div class="controls"  >

                                              
                                              <button type="submit" class="btn"  name="changepass" id="changepass">Change Password</button>
											</div>
										</div>
									</form>
							</div>
						</div>

						

					<br />
						
					</div><!--/.content-->
				</div>
    
    
    <!--/.wrapper-->

	<br>
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