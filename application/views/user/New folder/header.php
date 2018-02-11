<?php 
mysql_connect("localhost","root","");
mysql_select_db("agromall");

?>

<html>
<head>

<link href="<?php echo base_url()?>data/images/header.png" rel="shortcut icon">
<link href="<?php echo base_url()?>data/css/bootstrap.css" rel='stylesheet' type='text/css' />
<link type="text/css" href="<?php echo base_url()?>data/sellerdata/images/icons/css/font-awesome.min.css" rel="stylesheet">
<!-- jQuery (necessary JavaScript plugins) -->
<script type='text/javascript' src="<?php echo base_url()?>data/js/jquery-1.9.1.min.js"></script>
<!-- Custom Theme files -->
<link href="<?php echo base_url()?>data/css/style.css" rel='stylesheet' type='text/css' />
<!-- Custom Theme files -->
<!--//theme-style-->
 <link type="text/css" href="<?php echo base_url()?>data/sellerdata/images/icons/css/font-awesome.css" rel="stylesheet">

  
  <script type="text/javascript" src="<?php echo base_url()?>data/js/jquery.autocomplete.min.js"></script>
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<link href="<?php echo base_url()?>data/css/font1.css" rel='stylesheet' type='text/css'>
<link href="<?php echo base_url()?>data/css/font.css" rel='stylesheet' type='text/css'>
<link href="<?php echo base_url()?>data/css/font2.css" rel='stylesheet' type='text/css'>
<link type="text/css" href="<?php echo base_url()?>data/sellerdata/css/newprofile.css" rel="stylesheet">
<!-- start menu -->

<link href="<?php echo base_url()?>data/css/megamenu.css" rel="stylesheet" type="text/css" media="all" />
<link href="<?php echo base_url()?>data/css/form.css" rel="stylesheet" type="text/css" media="all" />

<script type="text/javascript" src="<?php echo base_url()?>data/js/megamenu.js"></script>
<script>$(document).ready(function(){$(".megamenu").megamenu();});</script>
<script src="<?php echo base_url()?>data/js/simpleCart.min.js"> </script>
  <script src="<?php echo base_url()?>data/js/responsiveslides.min.js"></script>
<script>
    // You can also use "$(window).load(function() {"
    $(function () {
      // Slideshow 1
      $("#slider1").responsiveSlides({
         auto: true,
		 nav: true,
		 speed: 500,
		 namespace: "callbacks",
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
<script>
  $(document).ready(function(){
  
  	var packages = [
		<?php 
		
			foreach($partsid as $pdata)
			{
				echo "{ value: '".$pdata['tools_detail_name']."', data: '{$pdata['tools_detail_id']}' },";
			}
		?>
	  ];
	  
	  // setup autocomplete function pulling from currencies[] array
	  $('#autocomplete').autocomplete({
		lookup: packages,
		onSelect: function (suggestion) {
		  var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
		  //$('#outputcontent').html(thehtml);
		  window.location.assign('<?php echo base_url() ?>home/parts?part='+suggestion.data);
		}
	  });
  });
  </script>  
</head>
<!-- header -->  <?php 
					$a="";
					
					if($this->session->flashdata("cart_error")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:100%;height:58px;z-index:50000'>	 
<br>		 <p style='font-size:20px;margin-top:-15px' align='center'><strong>".$this->session->flashdata("cart_error")."</strong></p>
</div>";
if($this->session->flashdata("login_error")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:100%;height:58px;z-index:50000'>	 
<br>		 <p style='font-size:20px;margin-top:-15px' align='center'><strong>".$this->session->flashdata("login_error")."</strong></p>
</div>";

if($this->session->flashdata("order_error")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:100%;height:58px;z-index:50000'>	 
<br>		 <p style='font-size:20px;margin-top:-15px' align='center'>><strong>".$this->session->flashdata("order_error")."</strong></p>
</div>";
					//seller login .................
if($this->session->flashdata("user_add")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:100%;height:58px;z-index:50000'>
<br>		 <p style='font-size:20px;margin-top:-15px' align='center'><strong>".$this->session->flashdata("user_add")."</strong></p>
</div>";

if($this->session->flashdata("user_Login")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:100%;height:58px;z-index:50000'>
<br>		 <p style='font-size:20px;margin-top:-15px' align='center'><strong>".$this->session->flashdata("user_Login")."</strong></p>
</div>";

if($this->session->flashdata("user_allow")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:100%;height:58px;z-index:50000'>
<br>		 <p style='font-size:20px;margin-top:-15px' align='center'><strong>".$this->session->flashdata("user_allow")."</strong></p>
</div>";

if($this->session->flashdata("email_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:100%;height:58px;z-index:50000'>
<br>		 <p style='font-size:20px;margin-top:-15px' align='center'><strong>".$this->session->flashdata("email_error")."</strong> </p>
</div>";

if($this->session->flashdata("email_success")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:100%;height:58px;z-index:50000'>
<br> <p style='font-size:20px;margin-top:-15px' align='center'><strong>".$this->session->flashdata("email_success")."</strong></p>
</div>";

if($this->session->flashdata("user_login_okk")!="")
echo "<div class='alert' id='regimsg' style='position:absolute;width:100%;height:58px;z-index:50000'>
<br>		 <p style='font-size:20px;margin-top:-15px' align='center'><strong>".$this->session->flashdata("user_login_okk")."</strong></p>
</div>";
?>
<?php
if($this->session->flashdata("user_Logout")!="")
echo "<div class='alert alert-success' id='regimsg' style='position:absolute;width:100%;height:58px;z-index:50000'>
<br>		 <p style='font-size:20px;margin-top:-15px' align='center'><strong>".$this->session->flashdata("user_Logout")."</strong></p>
</div>";
?>
<div class="top_bg" >
	<div class="container" >
		<div class="header_top-sec">
			<div class="top_right">
				<ul>
					<li><a href="#">help</a></li>|
					<li><a href="<?php echo base_url("home/contact"); ?>">Contact</a></li>|
					<li><a href="login.html">Track Order</a></li>
				</ul>
			</div>
			<div class="top_left">
				<ul>
					<li class="top_link">Email:agromall.info@gmail.com</li>|
                    <?php  
					if($this->session->userdata("user_login_id")!="")
					{
					?>
					<li class="top_link"><a href="login.html" id="cityclick"><?php echo $this->session->userdata("user_name"); ?></a></li>|	
					<?php  
					}
					?>				
				</ul>
				<div class="social">
					<ul>
						<li><a href="#"><i class="facebook"></i></a></li>
						<li><a href="#"><i class="twitter"></i></a></li>
						<li><a href="#"><i class="dribble"></i></a></li>	
						<li><a href="#"><i class="google"></i></a></li>										
					</ul>
				</div>
			</div>
              
                   
				<div class="clearfix"> </div>
                <div id="citydrop" style="position:absolute;margin-left:827px;width:150px;text-align:center;margin-top:8px">
    <div class="dropbottom" style="display:block;background-color:#008E4B;color:#FFF">
        <div class="dropmid" style="margin-left:-20px">
            <ul class="account" style="list-style:none">
                <li ><a href="<?php echo base_url("home/profile"); ?>" ><i class="menu-icon icon-user"></i>PROFILE</a>
                </li>
                <li ><a href="<?php echo base_url("home/change_password"); ?>" >Change Password</a>
                </li>
                <li ><a href="<?php echo base_url("home/change_password"); ?>" >Book Order</a>
                </li>
                <li ><a href="<?php echo base_url("home/change_password"); ?>" >Change Password</a>
                </li>
                <li style="padding-bottom:5px"><a href="<?php echo base_url("home/logout"); ?>" >
									<i class="menu-icon icon-signout"></i>
									Logout
								</a>
                </li>
            </ul>
        </div>
    </div>
</div>
		</div>
	</div>
</div>

<div class="header_top" >
	 <div class="container">
		 <div class="logo">
		 	<a href="<?php echo base_url("home"); ?>""><img src="<?php echo base_url()?>data/images/logo.png" alt="logo" style="width:130px;height:100px;margin-top:-30px"/></a>			 
		 </div>
		 <div class="header_right">	
         <?php
		 if($this->session->userdata("user_login_id")=="")
		 {
			 ?>
         <div class="login1">
				 <a href="<?php echo base_url("home/signup")?>">SIGN UP</a>
			 </div>
			 <div class="login">
				 <a href="<?php echo base_url("home/login")?>">LOGIN</a>
			 </div>
             <?php
		 }
		 else
		 {?>
          <div class="login">
				 <a href="<?php echo base_url("home/logout")?>">LOGOUT</a>
			 </div>
         <?php
		 }
		 ?>
			  <div class="cart box_1">
				<a href="<?php echo base_url("user/product/cart_view");?>">
                   <?php
                
				if(isset($_SESSION['cart']) && is_array($_SESSION['cart']))
				{?>
					<h3> <span ><span class="fa fa-rupee">0.00</span></span> (<span>0</span> <?php echo count($_SESSION['cart']) ?> items)<img src="<?php echo base_url()?>data/images/bag.png" alt=""></h3>
				<?php }
				else
				{
					 ?>
                     <h3> <span class=""><span class="fa fa-rupee">0.00</span></span> (<span id="" class="">0</span> items)<img src="<?php echo base_url()?>data/images/bag.png" alt=""></h3>
                     <?php }?>
                </a>
                	
               <input type="hidden"  name="url" value="<?php echo base_url().uri_string()?>"></a>
                
                <?php $_SESSION['path'] = uri_string(); ?>
                <p><a href="<?php echo base_url("user/product/empty_cart")?>" class="simpleCart_empty">Empty cart</a></p>
             
					
				
               
				<div class="clearfix"> </div>
			 </div>						 
		 </div>
		  <div class="clearfix"></div>	
	 </div>
</div>
<!--cart-->
	 
<!------>


<!---->
