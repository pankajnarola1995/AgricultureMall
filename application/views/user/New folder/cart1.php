<!--A Design by W3layouts
Author: W3layout
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
<?php include_once("menuheader.php") ?>
<div class="cart_main">
	 <div class="container">
			 <ol class="breadcrumb">
		  <li><a href="men.html">Home</a></li>
		  <li class="active">Cart</li>
		 </ol>			
		 <div class="cart-items">
			 <h2>My Shopping Bag( items)</h2>
				<script>$(document).ready(function(c) {
					$('.close1').on('click', function(c){
						$('.cart-header').fadeOut('slow', function(c){
							$('.cart-header').remove();
						});
						});	  
					});
			   </script>
               <?php
			   
		//$cnt_cart= count($cart_data);
		//print_r($_SESSION['cart']);die;
		
          $_SESSION['path_for_continue_shopping'] = uri_string(); 
		if(isset($_SESSION['cart']) && is_array($_SESSION['cart']))
				{
					
					$max=count($_SESSION['cart']);
					//print_r($max);die;
					$data = 0;
					for($i = 0; $i <$max; $i++)
					{
					//echo $_SESSION['cart'][$i]['qty'];die;
		 
			 
		 
		 ?>	
			 <div class="cart-header">
				 <div class="close1"> </div>
				 <div class="cart-sec">
						<div class="cart-item cyc">
						<img src="<?php 
										
										echo base_url()?>image/seed_image/<?php echo $_SESSION['cart'][$i]['image_name'];
														
										?>" class="img-responsive" alt="" style="height:150px;width:200"/>
							</div>
					   <div class="cart-item-info">
							 <h3><?php echo $_SESSION['cart'][$i]['seed_detail_name'];?></span></h3>
							 <h4><span class="add-on fa fa-rupee"></span> <?php echo $_SESSION['cart'][$i]['seed_price'];?></h4>
							 <p class="qty">Qty ::</p>
							 <input min="1" type="number" id="quantity" name="quantity" value="<?php echo $_SESSION['cart'][$i]['qty'];?>" class="form-control input-small">
                               </div>
					   <div class="clearfix"></div>
						<div class="delivery">
							 <p>Service Charges:: Rs.50.00</p>							 
				        </div>						
				  </div>
			 </div>
			 <script>$(document).ready(function(c) {
					$('.close2').on('click', function(c){
							$('.cart-header2').fadeOut('slow', function(c){
						$('.cart-header2').remove();
					});
					});	  
					});
			 </script>
             <?php
		 		}
		 	?>
			 <!--<div class="cart-header2">
				 <div class="close2"> </div>
				  <div class="cart-sec">
						<div class="cart-item">
							 <img src="images/ts1.jpg"/>
						</div>
					   <div class="cart-item-info">
							 <h3>Woolen Shrug<span>Model No: 8768</span></h3>
							 <h4><span>Rs. $ </span>200.00</h4>
							 <p class="qty">Qty ::</p>
							 <input min="1" type="number" id="quantity" name="quantity" value="1" class="form-control input-small">
					   </div>
					   <div class="clearfix"></div>
						<div class="delivery">
							 <p>Service Charges:: Rs.50.00</p>							
				        </div>						
				  </div>
			  </div>-->		
		 </div>
		 
		 <div class="cart-total">
                
			 <a class="continue" href="<?php  echo base_url("user/product")// history object in javascript?>">Continue to basket</a>
			 <div class="price-details">
				 <h3>Price Details</h3>
				 <span>Total</span>
				 <span class="total">
					<span class="simpleCart_total"><span class="fa fa-rupee">0.00</span></span></span>
				 <span>Discount</span>
				 <span class="total">---</span>
				 <!--<span>Delivery Charges</span>
				 <span class="total">100.00</span>
				 --><div class="clearfix"></div>				 
			 </div>	
			 <h4 class="last-price">TOTAL </h3>
				</a></h4>
			 <span class="total final"><span class="total">
					<span class="simpleCart_total"><span class="fa fa-rupee">0.00</span></span></span>
				 </span>
			 <div class="clearfix"></div>
			 <a class="order" href="<?php  echo base_url("user/product/place_order")?>">Place Order</a>
			 <!--<div class="total-item">
				 <h3>OPTIONS</h3>
				 <h4>COUPONS</h4>
				 <a class="cpns" href="#">Apply Coupons</a>
				 <p><a href="#">Log In</a> to use accounts - linked coupons</p>
			 </div>-->
			</div>
	 </div>
</div>
		<?php
			 
	}
		 else
		 {
			 //echo "false";die();
		 ?>
         <div class="cart_main">
	 <div class="container">
	
         <div class="cart-total">
			 <a class="continue" href="<?php  echo base_url("user/product")//history object in javascript?>">Continue to basket</a>
			 <div class="price-details">
				 <h3>Price Details</h3>
				 <span>Total</span>
				 <span class="total">0.00</span>
				 <span>Discount</span>
				 <span class="total">---</span>
				 <span>Delivery Charges</span>
				 <span class="total">0.00</span>
				 <div class="clearfix"></div>				 
			 </div>	
			 <h4 class="last-price">TOTAL</h4>
			 <span class="total final">0.00</span>
			 <div class="clearfix"></div>
			 <a class="order" href="<?php  echo base_url("user/product/place_order")?>">Place Order</a>
			 <!--<div class="total-item">
				 <h3>OPTIONS</h3>
				 <h4>COUPONS</h4>
				 <a class="cpns" href="#">Apply Coupons</a>
				 <p><a href="#">Log In</a> to use accounts - linked coupons</p>
			 </div>-->
			</div>
           </div></div>
         <?php }?>
         <span class="total final"></span>
			 <div class="clearfix"></div>
			 
          <div class="clearfix"></div>
	
<!---->

<!---->
<?php include_once("footer.php") ?>
</div>
<!---->
</body>
</html>
