
<html>
<!-- Mirrored from www.egrappler.com/edmin/form.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 01 Dec 2015 07:50:57 GMT -->
<head>
	<title>Agromall | Admin</title>
     <link href="<?php echo base_url()?>data/images/header.png" rel="shortcut icon">
	<link type="text/css" href="<?php echo base_url()?>data/admindata/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link type="text/css" href="<?php echo base_url()?>data/admindata/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet">
	<link type="text/css" href="<?php echo base_url()?>data/admindata/css/theme.css" rel="stylesheet">
	<link type="text/css" href="<?php echo base_url()?>data/admindata/images/icons/css/font-awesome.min.css" rel="stylesheet">
    <link type="text/css" href="<?php echo base_url()?>data/admindata/images/icons/css/font-awesome.css" rel="stylesheet">
  <link type="text/css" href="<?php echo base_url()?>data/admindata/css/times.ttf" rel="stylesheet">  
	<!--<link type="text/css" href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600' rel='stylesheet'>-->
</head>
 <body">
 <script type="text/javascript" src="<?php echo base_url()?>data/validation/jquery-1.10.2.js">
</script>
<script>
		
	$(document).ready(function(e) {
        $('#regimsg').fadeIn().delay(2500).fadeOut();
    });
</script>

	<div class="navbar navbar-fixed-top" style="height:56px" >
    
		<div class="navbar-inner" style="height:60px;background-color:#008F4C">
			  <div class="container" style="margin-top:-4px;">
				<a class="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
					<i class="icon-reorder shaded"></i>
				</a>

			  	<a class="brand" href="index.html">
			  		Admin
			  	</a>

				<div class="nav-collapse collapse navbar-inverse-collapse">
				
					<ul class="nav pull-right">
						<li><a href="<?php echo base_url("admin/admin/logout"); ?>">
							Logout
						</a></li>
					</ul>
				</div>
				

					<form class="navbar-search pull-left input-append" action="#">
						<input type="text" class="span3">
						<button class="btn" type="button">
							<i class="icon-search"></i>
						</button>
					</form> 

<?php 
//$a="";
if($this->session->flashdata("admin_Login")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:80%;height:42px;margin-left:-70px'>
<br>		 <p style='font-size:20px' align='center'><strong>Well done ! </strong> your Login Success................ :) </p>
</div>";
?>					
<?php 
// admin allow to seller................
//$a="";
if($this->session->flashdata("admin_allow_seller")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:80%;height:42px;margin-left:-70px'>
<br><p style='font-size:20px' align='center'><strong>".$this->session->flashdata("admin_allow_seller")."</strong></p>
</div>";

// admin block seller..............
if($this->session->flashdata("admin_block_seller")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:80%;height:42px;margin-left:-70px'>
<br><p style='font-size:20px' align='center'><strong>".$this->session->flashdata("admin_block_seller")."</strong></p>
</div>";

//admin add seed type in trash restore it................
if($this->session->flashdata("admin_seed_type_add_error_trash")!="")
echo "<div class='alert' id='regimsg' style='position:absolute;width:80%;height:42px;margin-left:-70px'>
<br><p style='font-size:20px' align='center'><strong>".$this->session->flashdata("admin_seed_type_add_error_trash")."</strong></p>
</div>";

//admin add seed ................
if($this->session->flashdata("admin_seed_add")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:80%;height:42px;margin-left:-70px'>
<br><p style='font-size:20px' align='center'><strong>".$this->session->flashdata("admin_seed_add")."</strong></p>
</div>";

//admin add seed error................
if($this->session->flashdata("admin_seed_add_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:80%;height:42px;margin-left:-70px'>
<br><p style='font-size:20px' align='center'><strong>".$this->session->flashdata("admin_seed_add_error")."</strong></p>
</div>";

//admin add fertilizer ................
if($this->session->flashdata("admin_fertilizer_add")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:80%;height:42px;margin-left:-70px'>
<br><p style='font-size:20px' align='center'><strong>".$this->session->flashdata("admin_fertilizer_add")."</strong></p>
</div>";

//admin add fertilizer error................
if($this->session->flashdata("admin_fertilizer_add_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:80%;height:42px;margin-left:-70px'>
<br><p style='font-size:20px' align='center'><strong>".$this->session->flashdata("admin_fertilizer_add_error")."</strong></p>
</div>";

//admin add tools ................
if($this->session->flashdata("admin_tools_add")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:80%;height:42px;margin-left:-70px'>
<br><p style='font-size:20px' align='center'><strong>".$this->session->flashdata("admin_tools_add")."</strong></p>
</div>";

//admin add tools error................
if($this->session->flashdata("admin_tools_add_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:80%;height:42px;margin-left:-70px'>
<br><p style='font-size:20px' align='center'><strong>".$this->session->flashdata("admin_tools_add_error")."</strong></p>
</div>";

//admin add pesticide ................
if($this->session->flashdata("admin_pesticide_add")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:80%;height:42px;margin-left:-70px'>
<br><p style='font-size:20px' align='center'><strong>".$this->session->flashdata("admin_pesticide_add")."</strong></p>
</div>";

//admin add pesticide error................
if($this->session->flashdata("admin_pesticide_add_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:80%;height:42px;margin-left:-70px'>
<br><p style='font-size:20px' align='center'><strong>".$this->session->flashdata("admin_pesticide_add_error")."</strong></p>
</div>";

//admin add location ................
if($this->session->flashdata("admin_location_add")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:80%;height:42px;margin-left:-70px'>
<br><p style='font-size:20px' align='center'><strong>".$this->session->flashdata("admin_location_add")."</strong></p>
</div>";

//admin add location error................
if($this->session->flashdata("admin_location_add_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:80%;height:42px;margin-left:-70px'>
<br><p style='font-size:20px' align='center'><strong>".$this->session->flashdata("admin_location_add_error")."</strong></p>
</div>";

if($this->session->flashdata("admin_message")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:80%;height:42px;margin-left:-70px'>
<br><p style='font-size:20px' align='center'><strong>".$this->session->flashdata("admin_message")."</strong></p>
</div>";
?>

				</div><!-- /.nav-collapse -->
                
			</div>
		</div><!-- /navbar-inner -->
       
	</div><!-- /navbar -->
    <a href="index.html"><img src="<?php echo base_url()?>data/images/logo1.png" alt="logo" style="width:130px;height:100px;margin-top:-50px;position:fixed;margin-left:20px;z-index:100000;"/></a>
    
	<div class="wrapper">	
		<div class="container">
			<div class="row">
				<div class="span3">
					<div class="sidebar" style="width:120%;margin-left:-30px;">
                    <ul class="widget widget-menu unstyled">
                                <li><a href="<?php echo base_url("admin/admin/admin_index") ?>"><i class="menu-icon icon-pencil"></i>Seller Request</a></li>
                           <li><a href="<?php echo base_url("admin/admin/seller_profile") ?>"><i class="menu-icon icon-user"></i>Seller Profile</a></li>
                            <li><a href="<?php echo base_url("admin/admin/user_profile") ?>"><i class="menu-icon icon-user"></i>User Profile</a></li>
                            <li><a href="<?php echo base_url("admin/admin/admin_inbox") ?>"><i class="menu-icon icon-inbox"></i>Inbox <b class="label orange pull-right">
                                   </b> </a></li>
                            </ul>
                            
						<ul class="widget widget-menu unstyled">
							<li>
								<a class="collapsed" data-toggle="collapse" href="#seedid">
									<i class="menu-icon icon-leaf"></i>
									<i class="icon-chevron-down pull-right"></i><i class="icon-chevron-up pull-right"></i>
									Seed
								</a>
								<ul id="seedid" class="collapse unstyled">
									<li>
										<a href="<?php echo base_url("admin/admin_seed") ?>">
										<i class="menu-icon icon-leaf"></i>
										Add Seed Type
										</a>
									</li>
                                    <li>
                                        <a href="<?php echo base_url("admin/admin_seed/admin_seed_add_subtype") ?>">
                                            <i class="menu-icon icon-leaf"></i>
                                            Add Seed Sub Type
                                        </a>
                                    </li>
                                    <li>
                                        <a href="<?php echo base_url("admin/admin_seed/admin_seed_add_submenu") ?>">
                                            <i class="menu-icon icon-leaf"></i>
                                            Add Seed Sub Menu Type
                                            
                                        </a>
                                    </li>
                                    <li>
                                        <a href="<?php echo base_url("admin/admin_agro_other/seed_cultivation_type") ?>">
                                            <i class="menu-icon icon-leaf"></i>
                                            Seed Cultivation Type
                                            
                                        </a>
                                    </li>
								</ul>
						</li>
                          	<li>
								<a class="collapsed" data-toggle="collapse" href="#Fertilizer1">
									<i class="menu-icon icon-truck"></i>
									<i class="icon-chevron-down pull-right"></i><i class="icon-chevron-up pull-right"></i>
									Fertilizer
								</a>
								<ul id="Fertilizer1" class="collapse unstyled">
									<li>
								<a href="<?php echo base_url("admin/admin_fertilizer") ?>">
									<i class="menu-icon icon-truck"></i>
									Add Fertilizer Type
								</a>
							</li>
							<li>
								<a href="<?php echo base_url("admin/admin_fertilizer/admin_fertilizer_add_subtype") ?>">
									<i class="menu-icon icon-truck"></i>
									Add Fertilizer Sub Type
								</a>
							</li>
							<li>
								<a href="<?php echo base_url("admin/admin_fertilizer/admin_fertilizer_add_submenu") ?>">
									<i class="menu-icon icon-truck"></i>
									Add Fertilizer Sub Menu Type
									
								</a>
							</li>
                            <li>
								<a href="<?php echo base_url("admin/admin_agro_other/fertilizer_appearance_type") ?>">
									<i class="menu-icon icon-truck"></i>
									Fertilizer Appearance
									
								</a>
							</li>
                            <li>
								<a href="<?php echo base_url("admin/admin_agro_other/fertilizer_classification_type") ?>">
									<i class="menu-icon icon-truck"></i>
									Fertilizer Classification
									
								</a>
							</li>
						</ul>
							</li>
                            <li>
								<a class="collapsed" data-toggle="collapse" href="#Tools1">
									<i class="menu-icon icon-legal"></i>
									<i class="icon-chevron-down pull-right"></i><i class="icon-chevron-up pull-right"></i>
									Tools
								</a>
								<ul id="Tools1" class="collapse unstyled">
									<li >
								<a href="<?php echo base_url("admin/admin_tools") ?>">
									<i class="menu-icon icon-legal"></i>
									Add Tools Type
								</a>
							</li>
							<li>
								<a href="<?php echo base_url("admin/admin_tools/admin_tools_add_subtype") ?>">
									<i class="menu-icon icon-legal"></i>
									Add Tools Sub Type
								</a>
							</li>
                           <li>
								<a href="<?php echo base_url("admin/admin_agro_other/tools_engine_type") ?>">
									<i class="menu-icon icon-legal"></i>
									Tools Engine Type
								</a>
							</li>
                            <li>
								<a href="<?php echo base_url("admin/admin_agro_other/admin_tools_add_detail_type") ?>">
									<i class="menu-icon icon-legal"></i>
									Tools Detail Type
								</a>
							</li>
                              <li>
								<a href="<?php echo base_url("admin/admin_agro_other/tools_fuel_type") ?>">
									<i class="menu-icon icon-legal"></i>
									Tools Fuel Type
								</a>
							</li>
                             <li>
								<a href="<?php echo base_url("admin/admin_agro_other/tools_drive_type") ?>">
									<i class="menu-icon icon-legal"></i>
									Tools Drive Type
								</a>
							</li>
                             <li>
								<a href="<?php echo base_url("admin/admin_agro_other/tools_color_type") ?>">
									<i class="menu-icon icon-legal"></i>
									Tools Color Type
								</a>
							</li>
						</ul>
							</li>
                            <li>
								<a class="collapsed" data-toggle="collapse" href="#Medicine1">
									<i class="menu-icon icon-leaf"></i>
									<i class="icon-chevron-down pull-right"></i><i class="icon-chevron-up pull-right"></i>
									Pesticide
								</a>
								<ul id="Medicine1" class="collapse unstyled">
									<li>
								<a href="<?php echo base_url("admin/admin_pesticide") ?>">
									<i class="menu-icon icon-leaf"></i>
									Add Pesticide Type
								</a>
							</li>
							<li>
								<a href="<?php echo base_url("admin/admin_pesticide/admin_pesticide_add_subtype") ?>">
									<i class="menu-icon icon-leaf"></i>
									Add Pesticide Sub Type
								</a>
							</li>
                            <li>
								<a href="<?php echo base_url("admin/admin_agro_other/pesticide_appearance_type") ?>">
									<i class="menu-icon icon-truck"></i>
									Pesticide Appearance
									
								</a>
							</li>
                            <li>
								<a href="<?php echo base_url("admin/admin_agro_other/pesticide_classification_type") ?>">
									<i class="menu-icon icon-truck"></i>
									Pesticide Classification
									
								</a>
							</li>
						</ul>
							</li>
							
						</ul>
                        <!-- ////////////////////////////////////////////////////////////-->

						
                        	<ul class="widget widget-menu unstyled">
                                <li><a class="collapsed" data-toggle="collapse" href="#location"><i class="menu-icon icon-cog">
                                </i><i class="icon-chevron-down pull-right"></i><i class="icon-chevron-up pull-right">
                                </i>Location</a>
                                    <ul id="location" class="collapse unstyled">
                                        <li><a href="<?php echo base_url("admin/admin_location") ?>"><i class="icon-inbox"></i>Country</a></li>
                                        <li><a href="<?php echo base_url("admin/admin_location/admin_state_add") ?>"><i class="icon-inbox"></i>State</a></li>
                                        <li><a href="<?php echo base_url("admin/admin_location/admin_city_add") ?>"><i class="icon-inbox"></i>City</a></li>
                                        <li><a href="<?php echo base_url("admin/admin_location/admin_area_add") ?>"><i class="icon-inbox"></i>Area</a></li>
                                    </ul>
                                </li>
                       </ul>
                       <!--/.widget-nav-->
				 <!-- ////////////////////////////////////////////////////////////-->
					   <ul class="widget widget-menu unstyled">
							<li>
								<a class="collapsed" data-toggle="collapse" href="#trash1">
									<i class="menu-icon icon-trash"></i>
									<i class="icon-chevron-down pull-right"></i><i class="icon-chevron-up pull-right"></i>
									Trash Tool
								</a>
								<ul id="trash1" class="collapse widget widget-menu unstyled" >
								<li >
                                    <a class="collapsed" data-toggle="collapse" href="#seedid1">
                                        <i class="menu-icon icon-leaf"></i>
                                        <i class="icon-chevron-down pull-right"></i><i class="icon-chevron-up pull-right"></i>
                                        Seed Trash
                                    </a>
									<ul id="seedid1" class="collapse unstyled">
									<li >
									<a href="<?php echo base_url("admin/admin_seed/admin_seed_trash_type") ?>">
											<i class="menu-icon icon-leaf"></i>
										Seed Type Trash
										</a>
									</li>
                                    <li>
                                        <a href="<?php echo base_url("admin/admin_seed/admin_seed_trash_subtype") ?>">
                                            <i class="menu-icon icon-leaf"></i>
                                            Seed Sub Type Trash
                                        </a>
                                    </li>
                                    <li>
                                        <a href="<?php echo base_url("admin/admin_seed/admin_seed_trash_submenu") ?>">
                                            <i class="menu-icon icon-leaf"></i>
                                            Seed Sub Menu Type Trash
                                            
                                        </a>
                                    </li>
                                    <li>
                                        <a href="<?php echo base_url("admin/admin_agro_other/admin_seed_cultivation_trash_type") ?>">
                                            <i class="menu-icon icon-leaf"></i>
                                            Seed Cultivation Trash
                                            
                                        </a>
                                    </li>
								</ul>
								</li>
                        
                          		<li>
								<a class="collapsed" data-toggle="collapse" href="#Fertilizer11">
									<i class="menu-icon icon-truck"></i>
									<i class="icon-chevron-down pull-right"></i><i class="icon-chevron-up pull-right"></i>
									Fertilizer Trash
								</a>
								<ul id="Fertilizer11" class="collapse unstyled">
									<li >
								<a href="<?php echo base_url("admin/admin_fertilizer/admin_fertilizer_trash_type") ?>">
									<i class="menu-icon icon-truck"></i>
									Fertilizer Type Trash
								</a>
								</li>
								<li>
								<a href="<?php echo base_url("admin/admin_fertilizer/admin_fertilizer_trash_subtype") ?>">
									<i class="menu-icon icon-truck"></i>
									Fertilizer Sub Type Trash
								</a>
								</li>
								<li>
								<a href="<?php echo base_url("admin/admin_fertilizer/admin_fertilizer_trash_submenu") ?>">
									<i class="menu-icon icon-truck"></i>
									Fertilizer Sub Menu Type  Trash
									
								</a>
								</li>
                                <li>
								<a href="<?php echo base_url("admin/admin_agro_other/admin_fertilizer_appearance_trash_type") ?>">
									<i class="menu-icon icon-truck"></i>
									Fertilizer Appearance Trash
									
								</a>
								</li><li>
								<a href="<?php echo base_url("admin/admin_agro_other/admin_fertilizer_classification_trash_type") ?>">
									<i class="menu-icon icon-truck"></i>
									Fertilizer Classfication Trash
									
								</a>
								</li>
								</ul>
							</li>
                            <li>
								<a class="collapsed" data-toggle="collapse" href="#Tools11">
									<i class="menu-icon icon-legal"></i>
									<i class="icon-chevron-down pull-right"></i><i class="icon-chevron-up pull-right"></i>
									Tools Trash
								</a>
								<ul id="Tools11" class="collapse unstyled">
									<li >
								<a href="<?php echo base_url("admin/admin_tools/admin_tools_trash_type") ?>">
									<i class="menu-icon icon-legal"></i>
									Tools Type Trash
								</a>
							</li>
							<li>
								<a href="<?php echo base_url("admin/admin_tools/admin_tools_trash_subtype") ?>">
									<i class="menu-icon icon-legal"></i>
									Tools Sub Type Trash
								</a>
							</li>
                            <li>
								<a href="<?php echo base_url("admin/admin_agro_other/admin_tools_engine_trash_type") ?>">
									<i class="menu-icon icon-legal"></i>
									Tools Engine Trash
								</a>
							</li>
                             <li>
								<a href="<?php echo base_url("admin/admin_agro_other/admin_tools_detailtype_trash_type") ?>">
									<i class="menu-icon icon-legal"></i>
									Tools Detail Type Trash
								</a>
							</li>
                             <li>
								<a href="<?php echo base_url("admin/admin_agro_other/admin_tools_fuel_trash_type") ?>">
									<i class="menu-icon icon-legal"></i>
									Tools Fuel Trash
								</a>
							</li>
                            <li>
								<a href="<?php echo base_url("admin/admin_agro_other/admin_tools_drive_trash_type") ?>">
									<i class="menu-icon icon-legal"></i>
									Tools Drive Trash
								</a>
							</li>
                            <li>
								<a href="<?php echo base_url("admin/admin_agro_other/admin_tools_color_trash_type") ?>">
									<i class="menu-icon icon-legal"></i>
									Tools Color Trash
								</a>
							</li>
							</ul>
							</li>
                            <li>
								<a class="collapsed" data-toggle="collapse" href="#Medicine11">
									<i class="menu-icon icon-leaf"></i>
									<i class="icon-chevron-down pull-right"></i><i class="icon-chevron-up pull-right"></i>
									Pesticide Trash
								</a>
								<ul id="Medicine11" class="collapse unstyled">
									<li >
								<a href="<?php echo base_url("admin/admin_pesticide/admin_pesticide_trash_type") ?>">
									<i class="menu-icon icon-leaf"></i>
									Pesticide Type Trash
								</a>
							</li>
							<li>
								<a href="<?php echo base_url("admin/admin_pesticide/admin_pesticide_trash_subtype") ?>">
									<i class="menu-icon icon-leaf"></i>
									Pesticide Sub Type Trash
								</a>
							</li>
                            <li>
								<a href="<?php echo base_url("admin/admin_agro_other/admin_pesticide_appearance_trash_type") ?>">
									<i class="menu-icon icon-truck"></i>
									Pesticide Appearance Trash
									
								</a>
								</li><li>
								<a href="<?php echo base_url("admin/admin_agro_other/admin_pesticide_classification_trash_type") ?>">
									<i class="menu-icon icon-truck"></i>
									Pesticide Classfication Trash
									
								</a>
								</li>
						</ul>
							</li>
                           <li>
								<a class="collapsed" data-toggle="collapse" href="#location_trash">
									<i class="menu-icon icon-leaf"></i>
									<i class="icon-chevron-down pull-right"></i><i class="icon-chevron-up pull-right"></i>
									location Trash
								</a>
								<ul id="location_trash" class="collapse unstyled">
									<li >
								<a href="<?php echo base_url("admin/admin_location/admin_country_trash") ?>">
									<i class="menu-icon icon-leaf"></i>
									Country Trash
								</a>
							</li>
							<li>
								<a href="<?php echo base_url("admin/admin_location/admin_state_trash") ?>">
									<i class="menu-icon icon-leaf"></i>
									State Trash
								</a>
							</li>
							<li>
								<a href="<?php echo base_url("admin/admin_location/admin_city_trash") ?>">
									<i class="menu-icon icon-leaf"></i>
									City Trash
								</a>
							</li>
                            <li>
								<a href="<?php echo base_url("admin/admin_location/admin_area_trash") ?>">
									<i class="menu-icon icon-leaf"></i>
									Area Trash
								</a>
							</li>
						</ul>
							</li>
							
                        
                        
							</ul>
                            
							</li>
							
							<li>
								<a href="<?php echo base_url("admin/admin/logout"); ?>">
									<i class="menu-icon icon-signout"></i>
									Logout
								</a>
							</li>
						</ul>

					</div><!--/.sidebar-->
                    
				</div><!--/.span3-->

