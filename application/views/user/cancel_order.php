<?php
if($this->session->userdata("user_login_id")!="")
{
}
else
{
	redirect("home/login");
}
?>
<?php include_once("header.php") ?>
<title>Agromall :: Order</title>
							<br>
                            <br>
							
  <div class="container">
			 <div class="cart-header">
			
              <table cellpadding="0" cellspacing="0" border="1" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
                                        <th>Order Id</th>
											<th>PRODUCT NAME</th>
                                            
											<th>QTY</th>
											<th>PRICE</th>
                                            <th>SUBTOTAL</th>
											<th>DELIEVRY DETAIL</th>
                                            
											
											
									</tr>
                                    </thead>
                                   
                     
                     
                     <?php
			   
		//$cnt_cart= count($cart_data);
		//print_r($cart_data);die;
		
          //$_SESSION['path_for_continue_shopping'] = uri_string(); 
		/*if(isset($_SESSION['cart']) && is_array($_SESSION['cart']))
				{
					
					$max=count($_SESSION['cart']);
					//print_r($max);die;
					$data = 0;
					for($i = 0; $i <$max; $i++)
					{
					//echo $_SESSION['cart'][$i]['subtotal'];die;
		 $subtot = $_SESSION['cart'][$i]['qty'] * $_SESSION['cart'][$i]['seed_price'];
			 
		 */
		 ?>	 <?php foreach($order_detail as $data)
					  {
				?>
        		 <tr>		
                 
                 	 <td>
                             
                             <lable><?php echo $data['order_id'];?> </lable>
                             </td>
                       <td>            
						<!--<img src="<?php 
										
										//echo base_url()?>image/seed_image/<?php //echo $data['product_name'];
														
										?>" class="img-responsive" alt="" style="height:150px;width:200"/>
							-->
                           <?php echo $data['product_name'];?></span></h3>
                            </td>
                             <td>
                             
                            <h4> <?php echo $data['qty'];?> </h4>
                             </td>
                             <td>
							 <h4><span class="add-on fa fa-rupee"></span> <?php echo $data['price'];?></h4>
							 </td>
                             <td>
							 <h4><span class="add-on fa fa-rupee"></span> <?php echo $data['subtotal'];?></h4>
							
							 </td>
                             <td>
                             <h4><?php echo $data['delivery_details'];?></h4>
                             </td>
                            
                            
				 
                             
							 
					   
			 
            
                    </tr>
                  
                               
              
                             
                          
			            		 
                                   								
										
							<?php
					}
					?>
                    <form method="post" action="">
						 <tr>
                                                        <td colspan="7" align="center"><div class="control-group">
											<div class="controls" style="margin-top:20px">
                                            	<a href="<?php echo base_url('home'); ?>"  title="Click To BACK TO HOME" class="item_add items" style="text-decoration:none">BACK TO HOME</a>	
											</div>
										</div></td>
                                                      </tr>	
                   </form>
                     </table>
					               
               
            </div>
					   
						<div class="delivery">
							<div class="clearfix"></div>
							  						 
				        </div>						
				  </div>  </div>
                          </div> 
         </div></div>
	
<!---->

<!---->
<?php include_once("footer.php") ?>
</div>
<!---->
</body>
</html>
