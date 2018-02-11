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
		//alert("fff");
		$("#updateprofile").click(function(){
			//alert("dd");
			var city,gender,company_name,address ;
			//var fname1=getElementById("#fname").value;
			//alert("ccc");
			city = test_city("#city","#msgcity_id");
			gender = test_radio("#gender","#msggender");
			company_name=test_companyname("#company_name","#msgcname");
			address= test_address("#address","#msgaddress");
			//alert("old :"+old_password + " new :"+new_password);
			if( city == true && gender == true && company_name == true  && address == true)
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
		
		 $('#regimsg').fadeIn().delay(2500).fadeOut();
		$("#citydrop").hide();

		$("#cityclick").mouseover(function () {
			$("#citydrop").slideDown('slow');
		});
		
	

		$("#citydrop").mouseleave(function () {
			$("#citydrop").slideUp('slow');
		});	});
</script>
</head>
 <body>

	<div class="navbar navbar-fixed-top" style="height:56px" >
		<div class="navbar-inner" style="height:60px;background-color:#008F4C">
      <?php //email not verify 
	// echo $this->session->userdata("seller_password");
if($this->session->flashdata("seller_edit_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:105%;height:42px;margin-left:-70px'>
<br>		 <p style='font-size:20px' align='center'><strong>".$this->session->flashdata("seller_edit_error")."</strong> </p>
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
      <form name="imgfrm"  action="<?php echo base_url("seller/seller/seller_profile_edit_seller") ?>" method="post"  enctype="multipart/form-data">
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
				
    <div class="span9" style="margin-left:250px;">
 <div class="container">
      <div class="row">
      
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >
   
   
          <div class="panel panel-info">
            <div class="panel-heading">
              <h3 class="panel-title"><?php echo $seller_data[0]["seller_name"]?></h3>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-md-3 col-lg-3 " align="center">
                <a href="#profileupdate" data-toggle="modal" title="Click To Update Profile Picture"><div class="product-grid" style="margin-left:400px;border:none;height:200px">
											
						<div class="product-img b-link-stripe b-animate-go  thickbox" >
							<img alt="User Pic" src="<?php echo base_url()?>image/user/<?php echo $this->session->userdata("seller_pic")?>" class="img-circle img-responsive" style="width:350px;height:230px">
							<div class="b-wrapper" >
							<h4 class="b-animate b-from-left  b-delay03" >							
							<button class="btns" >Update Profile</button>
							</h4>
							</div>
						</div></a>	
                	
                            </div>
                
                <!--<div class="col-xs-10 col-sm-10 hidden-md hidden-lg"> <br>
                  <dl>
                    <dt>DEPARTMENT:</dt>
                    <dd>Administrator</dd>
                    <dt>HIRE DATE</dt>
                    <dd>11/12/2013</dd>
                    <dt>DATE OF BIRTH</dt>
                       <dd>11/12/2013</dd>
                    <dt>GENDER</dt>
                    <dd>Male</dd>
                  </dl>
                </div>-->
                <div class=" col-md-9 col-lg-9 "> 
                <form action="<?php echo base_url("seller/seller/seller_edit_profile") ?>" method="post">
                  <table class="table table-user-information">
                    <tbody>
                      <tr>
                        <td>Email Address:</td>
                        <td><?php echo $seller_data[0]["email_id"]?></td>
                      </tr>
                       <tr>
                        <td>Mobile Number</td>
                        <td><?php echo $seller_data[0]["mobile_number"]?></td>
                      </tr>
                      <tr>
                        <td>City</td>
                        <td><select  id="city" name="city"  style="width:515px;height:45px">
													<option value="Select here..">Select City..</option>
                                                    <?php
													
													foreach($city_data as $city)
													{
														?>
													<option value="<?php echo $city['city_id']?>" <?php if(trim($city["city_id"])==trim($seller_data[0]["city"]))
							echo "selected";?>><?php echo $city['city_name']?></option>
													<?php
                                                    }
													?>
												</select></td>
                      </tr>
                      <tr>
                        <td>Gender</td>
                        <td><input type="radio" value="Male" name="gender" id="gender" <?php if($seller_data[0]["gender"]=="Male")echo "checked"?>>&nbsp;MALE &nbsp;&nbsp; <input type="radio" value="Female" name="gender" id="gender" <?php if($seller_data[0]["gender"]=="Female")echo "checked"?>>&nbsp;FEMALE <span class="help-inline" id="msggender" style="color:#F00;position:absolute"></span></td>
                      </tr>
                   
                         <tr>
                             <tr>
                        <td>Company Name</td>
                        <td><input name="company_name" id="company_name" type="text" style="resize:none;width:500px" value="<?php echo $seller_data[0]["company_name"]?>"><span class="help-inline" id="msgcname" style="color:#F00;position:absolute"></span></td>
                      </tr>
                        <tr>
                        <td>Home Address</td>
                        <td><textarea name="address" id="address" style="resize:none;width:500px"><?php echo $seller_data[0]["address"]?></textarea><span class="help-inline" id="msgaddress" style="color:#F00;position:absolute"></span></td>
                      </tr>
                     
                        <td></td>
                        <td>
                        </td>
                           
                      </tr>
                     
                    </tbody>
                  </table>
                       <button type="submit" class="btn btn-primary" name="updateprofile" id="updateprofile"> UPDATE PROFILE</button>
                        
                   
                   
                  </form>
                </div>
              </div>
            </div>
                
          </div>
        </div>
      </div>
    </div>
    </div>
    <br>
    <br>
    
    <!--/.wrapper-->
<div class="footer" align="center" >
		<div class="container">
			<b class="copyright" >&copy; 2016 Seller - Agromall.com </b> All rights reserved.
		</div>
	</div>
	<script src="<?php echo base_url()?>data/sellerdata/scripts/jquery-1.9.1.min.js" type="text/javascript"></script>
	<script src="<?php echo base_url()?>data/sellerdata/scripts/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>
	<script src="<?php echo base_url()?>data/sellerdata/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
	
	   <!--Dynamically creates analytics markup-->
  </body>