<?php
if($this->session->userdata("user_login_id")!="")
{
}
else
{
	redirect("home/login");
}
?>
<?php include ("header.php");?>

<div class="main">
<div class="main">
<div class="container">
<div class="main-cn bg-white clearfix">
<div class="">
	<ul class="payment-step text-center clearfix">
		<li class="step-select"><span>1</span><p> Order Inprogress</p></li>
		<li class="step-part"><span>2</span><p>Order Shipped</p></li>
		<li><span>3</span><p>Order Deliivery Successfully!</p></li>
	</ul>
</div>

<?php
	 
?>
<div class="cart-header">
				
				 <div class="cart-sec">
						<div class="cart-item cyc">
						<img src="<?php echo base_url("image")."/".$data1[0]["image_name"]; ?>" class="img-responsive" alt="" style="height:150px;width:200"/>
							</div>
					   <div class="cart-item-info">
							 <h3><?php echo $data1[0]['product_name'];?></span></h3>
							 <h4><span class="add-on fa fa-rupee"></span> <?php echo $data1[0]['price'];?></h4>
							 <p class="qty">Qty ::</p>
							 <lable   id="quantity" name="quantity"  ><?php echo $data1[0]['qty'];?></label>
                               </div>
					   <div class="clearfix"></div>
											
				  </div>
			 </div>


<div class="controls" style="margin-top:20px">
                                            	<a href="<?php echo base_url('home'); ?>"  title="Click To BACK TO HOME" class="item_add items" style="text-decoration:none">BACK TO HOME</a>	
											</div>

</div>
</div>


<?php include ("footer.php");?>