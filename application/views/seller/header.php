<html>
<!-- Mirrored from www.egrappler.com/edmin/form.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 01 Dec 2015 07:50:57 GMT -->
<head>
	<title>Agromall | Seller</title>
    <link href="<?php echo base_url()?>data/images/header.png" rel="shortcut icon">
	<link type="text/css" href="<?php echo base_url()?>data/sellerdata/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link type="text/css" href="<?php echo base_url()?>data/sellerdata/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet">
	<link type="text/css" href="<?php echo base_url()?>data/sellerdata/css/theme.css" rel="stylesheet">
	<link type="text/css" href="<?php echo base_url()?>data/sellerdata/images/icons/css/font-awesome.min.css" rel="stylesheet">
    <link type="text/css" href="<?php echo base_url()?>data/sellerdata/images/icons/css/font-awesome.css" rel="stylesheet">
  <link type="text/css" href="<?php echo base_url()?>data/sellerdata/css/times.ttf" rel="stylesheet">  

</head>
 <body >

 <script type="text/javascript" src="<?php echo base_url()?>data/validation/jquery-1.10.2.js">
</script>
<script>
		
	$(document).ready(function() {
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

	<div class="navbar navbar-fixed-top" style="height:56px;">
   
		<div class="navbar-inner" style="height:60px;background-color:#008F4C">
               <?php 
					$a="";
					//seller login .................
if($this->session->flashdata("seller_Login")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:105%;height:42px;margin-left:-70px'>
<br>		 <p style='font-size:20px' align='center'><strong>Well done ! </strong> your Login Success................ :) </p>
</div>";

//insert seed data.............
if($this->session->flashdata("seller_seed_add")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:105%;height:42px;margin-left:-70px'>		 
<p style='font-size:20px' align='center'><strong>Well done ! ".$this->session->flashdata("seller_seed_add")."</strong></p>
</div>";

//Error on insert seed data...........
if($this->session->flashdata("seller_seed_add_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:105%;height:42px;margin-left:-70px'>		 
<p style='font-size:20px' align='center'><strong>Opps ! ".$this->session->flashdata("seller_seed_add_error")."</strong></p>
</div>";

//Error on Insert Seed Image..............
if($this->session->flashdata("seller_seed_image_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:105%;height:42px;margin-left:-70px'>		 
<p style='font-size:20px' align='center'><strong>".$this->session->flashdata("seller_seed_image_error")."</strong> </p>
</div>";

if($this->session->flashdata("seller_message")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:105%;height:42px;margin-left:-70px'>
<br><p style='font-size:20px' align='center'><strong>".$this->session->flashdata("seller_message")."</strong></p>
</div>";

//insert fertilizer data.............
if($this->session->flashdata("seller_fertilizer_add")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:105%;height:42px;margin-left:-70px'>		 
<p style='font-size:20px' align='center'><strong>Well done ! ".$this->session->flashdata("seller_fertilizer_add")."</strong></p>
</div>";

//Error on insert fertilizer data...........
if($this->session->flashdata("seller_fertilizer_add_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:105%;height:42px;margin-left:-70px'>		 
<p style='font-size:20px' align='center'><strong>Opps ! ".$this->session->flashdata("seller_fertilizer_add_error")."</strong></p>
</div>";

//Error on Insert fertilizer Image..............
if($this->session->flashdata("seller_fertilizer_image_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:105%;height:42px;margin-left:-70px'>		 
<p style='font-size:20px' align='center'><strong>".$this->session->flashdata("seller_fertilizer_image_error")."</strong> </p>
</div>";

//insert tools data.............
if($this->session->flashdata("seller_tools_add")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:105%;height:42px;margin-left:-70px'>		 
<p style='font-size:20px' align='center'><strong>Well done ! ".$this->session->flashdata("seller_tools_add")."</strong></p>
</div>";

//Error on insert tools data...........
if($this->session->flashdata("seller_tools_add_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:105%;height:42px;margin-left:-70px'>		 
<p style='font-size:20px' align='center'><strong>Opps ! ".$this->session->flashdata("seller_tools_add_error")."</strong></p>
</div>";

//Error on Insert tools Image..............
if($this->session->flashdata("seller_tools_image_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:105%;height:42px;margin-left:-70px'>		 
<p style='font-size:20px' align='center'><strong>".$this->session->flashdata("seller_tools_image_error")."</strong> </p>
</div>";

//insert pesticide data.............
if($this->session->flashdata("seller_pesticide_add")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:105%;height:42px;margin-left:-70px'>		 
<p style='font-size:20px' align='center'><strong>Well done ! ".$this->session->flashdata("seller_pesticide_add")."</strong></p>
</div>";

//Error on insert pesticide data...........
if($this->session->flashdata("seller_pesticide_add_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:105%;height:42px;margin-left:-70px'>		 
<p style='font-size:20px' align='center'><strong>Opps ! ".$this->session->flashdata("seller_pesticide_add_error")."</strong></p>
</div>";

//Error on Insert pesticide Image..............
if($this->session->flashdata("seller_pesticide_image_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:105%;height:42px;margin-left:-70px'>		 
<p style='font-size:20px' align='center'><strong>".$this->session->flashdata("seller_pesticide_image_error")."</strong> </p>
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
                    <li class="top_link" ><a href="#myModal" data-toggle="modal" title="Click To Update Profile Picture"><img src="<?php echo base_url()?>image/user/<?php echo $this->session->userdata("seller_pic")?>" class="nav-avatar" /></a></li>						
			
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
<div id="myModal" class="modal fade" role="dialog">
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
                   
              
				</div><!-- /.nav-collapse -->
                
			</div>
            <a href="<?php echo base_url("seller/seller_seed") ?>"><img src="<?php echo base_url()?>data/images/logo1.png" alt="logo" style="width:130px;height:100px;position:fixed;margin-top:7px;z-index:100000;"/></a>	
		</div><!-- /navbar-inner -->
      
	</div><!-- /navbar -->
    
    
	<div class="wrapper" >
		<div class="container" >
			<div class="row">
				<div class="span3" style="margin-left:-50px">
					<div class="sidebar">

						<ul class="widget widget-menu unstyled">
							<li class="active">
								<a href="<?php echo base_url("seller/seller_seed") ?>">
									<i class="menu-icon icon-leaf"></i>
									Seeds
								</a>
							</li>
							<li>
								<a href="<?php echo base_url("seller/seller_fertilizer") ?>">
									<i class="menu-icon icon-truck"></i>
									Fertilizer
								</a>
							</li>
							<li>
								<a href="<?php echo base_url("seller/seller_tools") ?>">
									<i class="menu-icon icon-legal"></i>
									Agro Tools
									
								</a>
							</li>
							
							<li>
								<a href="<?php echo base_url("seller/seller_pesticide") ?>">
									<i class="menu-icon icon-ambulance"></i>
									Pesticide
									<!--<b class="label orange pull-right">19</b>-->
								</a>
							</li>
						</ul><!--/.widget-nav-->

						<ul class="widget widget-menu unstyled" style="margin-top:10px">
                                <li><a href="<?php echo base_url("seller/seller/seller_inbox") ?>"><i class="menu-icon icon-inbox"></i>Inbox <b class="label orange pull-right">
                                    </b> </a></li>
                                <li><a href="<?php echo base_url("seller/seller/seller_order") ?>"><i class="menu-icon icon-reorder"></i>User Order <b class="label orange pull-right">
                                    </b> </a></li>
                               
                            </ul><!--/.widget-nav-->

						<ul class="widget widget-menu unstyled" style="margin-top:10px">
							<li>
								<a class="collapsed" data-toggle="collapse" href="#togglePages">
									<i class="menu-icon icon-trash"></i>
									<i class="icon-chevron-down pull-right"></i><i class="icon-chevron-up pull-right"></i>
									Trash Tool
								</a>
								<ul id="togglePages" class="collapse unstyled">
									<li class="active">
								<a href="<?php echo base_url("seller/seller_seed/seller_seed_trash") ?>">
									<i class="menu-icon icon-leaf"></i>
									Seeds Trash
								</a>
							</li>
							<li>
								<a href="<?php echo base_url("seller/seller_fertilizer/seller_fertilizer_trash") ?>">
									<i class="menu-icon icon-truck"></i>
									Fertilizer Trash
								</a>
							</li>
							<li>
								<a href="<?php echo base_url("seller/seller_tools/seller_tools_trash") ?>">
									<i class="menu-icon icon-legal"></i>
									Agro Tools Trash
									
								</a>
							</li>
							
							<li>
								<a href="<?php echo base_url("seller/seller_pesticide/seller_pesticide_trash") ?>">
									<i class="menu-icon icon-ambulance"></i>
									Pesticide Trash
									<!--<b class="label orange pull-right">19</b>-->
								</a>
							</li>
								</ul>
							</li>
							
							<li>
								<a href="<?php echo base_url("seller/seller/logout"); ?>">
									<i class="menu-icon icon-signout"></i>
									Logout
								</a>
							</li>
						</ul>

					</div><!--/.sidebar-->
                    
				</div><!--/.span3-->

