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
											<th>TRACKING DETAIL</th>
											
									</tr>
                                    </thead>
                                   
                     
                    <?php foreach($order_detail as $data)
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
                             
                             <?php echo $data['qty'];?> 
                             </td>
                             <td>
							 <h4><span class="add-on fa fa-rupee"></span> <?php echo $data['price'];?></h4>
							 </td>
                             <td>
							 <h4><span class="add-on fa fa-rupee"></span> <?php echo $data['subtotal'];?></h4>
							
							 </td>
                             <td>
                            <h4> <?php echo $data['delivery_details'];?></h4>
                             </td>
                             <td>
                             <form method="post" action="<?php  echo base_url("user/product/track_detail/".$data['order_book_id']);?> ">
                             <input type="submit" class="item_add items" value="TRACK DETAIL"></form>
						
                             </form>
                             </td>
                		 </tr>
                			
							<?php
					}
					?>
                    <form method="post" action="">
						 <tr>
                                                        <td colspan="7" align="center"><div class="control-group">
											<div class="controls" style="margin-top:20px">
                                            	<button type="submit" name="add_fertilizer" class="btn" id="add_fertilizer"><b><a href="<?php echo base_url('home'); ?>">	BACK TO HOME</a><b></button>
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
