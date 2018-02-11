<?php
if($this->session->userdata("seller_login_id")!="")
{
}
else
{
	redirect("seller/seller");
}
?>
  <?php 
					$a="";
					//seller login .................
if($this->session->flashdata("seller_fertilizer_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:80%;height:42px;margin-left:-70px'>
<br>		 <p style='font-size:20px' align='center'>Select fertilizer Type And Subtype</p>
</div>";

?>
<?php include("header.php");?>

<script src="<?php echo base_url()?>data/validation/jquery-1.10.2.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url()?>data/validation/validate.js"></script>
<!--<script>
$("document").ready(function(){
	//alert();
	
	$(".status").change(function(){
		//var id = $(this).val();
				//	alert(id);
			var id = $(".status").val();
			var cnt = $("#count").val();
			for(i=1;i<=cnt;i++)
			{
				if(i=$("#book_id"+i))
				{
				var id2 = $("#book_id"+i).val();
			
				}
			}
					alert(id2);die;
						
						window.location.assign("/"+id+" "+id2);
					
			
			
			});
	
	
		
		});
	
</script>-->
	<!--/.content--><div class="span9">
					<div class="content" style="width:120%">

                    <div class="module">
							<div class="module-head">
								<h3>Order Detail Tables</h3>
							</div>
							<div class="module-body table" >
                             
                                   <form method="post" action="<?php echo base_url("seller/seller/order_status")?>">
								<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
                                        <th>Order Id</th>
									
											<th>Product Name</th>
											<th>Price</th>
											<th>QTY</th>
											<th>Status</th>
                                          
										</tr>
									</thead>
									<tbody>
                                   <?php
								   $i=1;
								   $cnt=count($seller_order);
									foreach($seller_order as $order_detail)
									{
									?>
										<tr class="odd gradeX">
											<td><?php echo $order_detail['order_id']; ?></td>
											
                                            <td><?php echo $order_detail['product_name']; ?></td>
											<td><?php echo $order_detail['qty']; ?></td>
											<td><?php echo $order_detail['price']; ?></td>
											<td><div class="btn-group">
                                            <form method="post" action="<?php echo base_url("seller/seller/order_status")?>">
                                            <select name="status">
                                             <option  <?php if($order_detail['order_status']=="inprogress")
											   echo "selected";?> value="inprogress">Inprogress</option>
                                                <option <?php if($order_detail['order_status']=="shipped")
											   echo "selected";?> value="shipped">Shipped</option>
                                             
                                                <option  <?php if($order_detail['order_status']=="complete")
											   echo "selected";?> value="complete" >Complete</option>
                                                <option  <?php if($order_detail['order_status']=="cancel order")
											   echo "selected";?> value="cancel order" >Cancel Order</option>
                                                
                                                 </select>
                                                 <input type="hidden" value="<?php echo $order_detail['order_book_id']; ?>" id="book_id" name="book_id" /> 
                                                 
                                                 
                                            	<button type="submit" name="add_fertilizer" class="btn" id="add_fertilizer" style="margin-left:8px">Change Status</button>
											
                                              </form>
                                             
                                        
                                        </div>
                                  
                                       </td>
                                        
											
												
                   <!-- Modal -->

										</tr>
                                        
                                        <?php
										$i++;
										}
										?>										
										
									</tbody>
									<tfoot>
										<tr>
                                    <th>Order Id</th>
									
									<th>Product Name</th>
											<th>Price</th>
											<th>QTY</th>
											<th>Status</th>
                                           </tr>
									</tfoot>
								</table>
                              
							</div>
						</div>
                        </div>
                        </div>
				
<?php include("footer.php"); ?>