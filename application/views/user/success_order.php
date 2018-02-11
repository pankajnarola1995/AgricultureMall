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
<script type="text/javascript" src="<?php echo base_url()?>data/validation/validate.js"></script>

<script src="<?php echo base_url()?>data/sellerdata/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script>
		
	$("document").ready(function(){
		
		$("#cancel").click(function(){
					
			var reason;
			
			reason = test_hscodeno("#reason","#msgreason");
			//alert(reason);
			if(reason == true )
			{
				return true;
				
			}
			else
			{
				return false;
			}
		});
			
	});
</script>
<title>Agromall :: Order</title>
							<br>
                            <br>
                       <!--<script>
		
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
                  -->          
          
							
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
                                            
											<th>CANCEL ORDER</th>
											
									</tr>
                                    </thead>
                                   
                     
                     
                    	 <?php foreach($order_detail as $data)
					  {
						  if($data['order_status']=="cancel order")
						  {?>
						
                        <tr>		
                 			<td>
                             
                             <lable><?php echo $data['order_id'];?> </lable>
                            </td>
                       		<td>            
						
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
                             </td>
                             <td>
                             Cancel By seller
                           
                    		 </td>
                         </tr>
						  <?php
						  }
						  
				?>
                
                         <tr>		
                         
                             <td>
                                <lable><?php echo $data['order_id'];?> </lable>
                             </td>
                       		<td>            
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
                            	 In progress
                             </td>
                             <td>
                             
					<a href="#myModal<?php echo $data['order_book_id'];?>" data-toggle="modal" title="Click To Update Profile Picture" class="item_add items" style="text-decoration:none;color:#FFF">Cancel Order</a>						
							
                  			 </td>
                               </tr>
<div id="myModal<?php echo $data['order_book_id'];?>" class="modal fade" role="dialog" style="margin-top:35px;border:none">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Cancel Order Detail</h4>
      </div>
      <form method="post" name="reason_form" action="<?php  echo base_url("user/product/cancel_order/".$data['order_book_id']);?> ">								   	<div class="modal-body">
      
            <div style="margin-bottom:15px"> Reason :</div>
            <textarea name="reason" id="reason" style="resize:none" required="required"></textarea>
            
             <span class="help-inline" id="msgreason" style="color:#F00;position:absolute" >
            
            </span>
          </div>
            <div class="modal-body">
          
            Please Give a Reason For maintainance.........
          </div>
          <div class="modal-footer">
            <input type="submit" class="item_add items" name="cancel" id="cancel" value="CANCEL ORDER">
                            
          </div>
    </div>
</form>
  </div>
  </div>
</div>
                        <?php
                                
                        }
                        ?>
                  

                           
                    <form method="post"  action="">
						 <tr>
                                               <td colspan="7" align="center">
												<a href="<?php echo base_url('home'); ?>"  title="Click To BACK TO HOME" class="item_add items" style="text-decoration:none">BACK TO HOME</a>						
					
                        
                                                
											
                                        </td>
                        </tr>	
                        </div>
                   </form>
                     </table>
                     
					               
               
            		</div>
				</div>
              </div>
         </div> 
         </div>
         </div>

<?php include_once("footer.php") ?>
</div>
<!---->
</body>
</html>
