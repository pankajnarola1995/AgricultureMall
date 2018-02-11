<!--A Design by W3layouts
Author: W3layout
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
<?php
if($this->session->userdata("user_login_id")!="")
{
}
else
{
	redirect("home/login");
}
?>	
<html>

<title>Agromall :: Book Order</title>
<html>
<head>
<?php include_once("header.php") ;
date_default_timezone_set("asia/calcutta");
if(isset($_POST['confirmaddress']))
{
	$_SESSION["address"]=$_POST['address'];
}
else if(isset($_POST['chageaddress']))
{
	$_SESSION["address"]=$user_data[0]["address"];
}
else
{
	$_SESSION["address"]=$user_data[0]["address"];
	
}
?>

</head>


				<?php foreach($user_data as $data)
					  {
						 
				?>
 <div class="module" style="border:none">
                	<div class="content" style="width:100%">

							<div class="module-head" style="margin-top:50px;margin-left:100px;margin-right:100px;background-color:#E9E9E9">
                            <table border="0">
                            	<tr>
                            
								<td  style=" margin-top:10px;margin-left:0px;font-size:24px;margin-bottom:10px"><b>USER ID :	 </b></td>
								<td  style="margin-top:10px;font-size:24px;margin-bottom:10px"><b style="margin-left:170px;"><?php echo $data['email_id'];?>	 </b>	</td>
                              
                              
                                <tr>				
                            </table>    
                            </div>
                     </div>

                     <?php if(isset($_POST['chageaddress']))
					 {?>
                     <form action=""  method="post"> 
                        <div class="content" style="width:100%;">

							<div class="module-head" style="margin-top:10px;margin-right:100px;margin-left:100px;background-color:#E9E9E9;">
                            <table border="0">
                            	<tr>
                            
								<td style="margin-top:10px;margin-left:0px;font-size:24px;margin-bottom:10px;width:285px"><b>USER ADDRESS :	 </b></td>
								<td  style="margin-top:10px;font-size:24px;margin-bottom:10px"><b style="margin-left:0;width:100%"><textarea name="address" id="address" style="resize:none;width:400px;height:70px"><?php echo $data['address'];?></textarea>	 </b>	</td>
                                <td style="margin-top:10px;margin-left:0px;font-size:20px;margin-bottom:10px"><b><button type="submit" id="confirmaddress" name="confirmaddress"style="margin-left:385px;width:180px">Confirm Address</button>	 </b></td>
                                <tr>				
                            </table> 
                            </div>   </div></form>
					 <?php 
					 }
					 else
					 {
					 ?>
                     <form action=""  method="post">                     <div class="content" style="width:100%">
 
							<div class="module-head" style="margin-top:10px;margin-right:100px;margin-left:100px;background-color:#E9E9E9">
                            <table border="0">
                            	<tr>
                            
								<td style="margin-top:10px;margin-left:0px;font-size:24px;margin-bottom:10px;width:285px"><b>USER ADDRESS :	 </b></td>
								<td  style="margin-top:10px;font-size:24px;margin-bottom:10px"><b style="margin-left:0;width:100%"><?php echo $_SESSION['address'];?>	 </b>	</td>
                                <td style="margin-top:10px;margin-left:0px;font-size:20px;margin-bottom:10px"><b><button type="submit" id="chageaddress" name="chageaddress"style="margin-left:385px;width:180px"> Change Address</button>	 </b></td>
                                <tr>				
                            </table>    
                            </div>
                     </div>
                     </form>
                     <?php }?>
                     	<div class="module-head" style="margin-top:50px;margin-left:100px;margin-right:100px">
								<h3 style="margin-top:10px;margin-left:0px;font-size:24px;font-family:'Times New Roman', Times, serif"><b>Order Summary</b></h3>
							</div>
                     </div>              
                     
                     
                     
                     
                     
  <div class="container">
			 <div class="cart-header">
			
              <table cellpadding="0" cellspacing="0" border="1" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
											<th>PRODUCT NAME</th>
                                            
											<th>QTY</th>
											<th>PRICE</th>
											<th>DELIEVRY DETAIL</th>
											<th>SUBTOTAL</th>
									</tr>
                                    </thead>
                                   
                     
                     
                     <?php
			   
		if(isset($seed_data))
				{
					
					foreach($seed_data as $result)
					{
						
					$_SESSION['product_name']=$result["seed_detail_name"];
					$_SESSION['qty']=$result["seed_min_order"];
					$_SESSION['price']=$result["seed_price"];
					$_SESSION['subtotal']=$result['seed_min_order']*$result['seed_price'];
					$_SESSION['seller_id']=$result["seller_id"];
					$_SESSION['image_name']=$result["image_name"];
		
			 
		 
		 ?>	
         <div class="cart_header">
         <div class="container">
				 <tr>		
                       <td>            
						<img src="<?php 
										
										echo base_url()?>image/<?php echo $result["image_name"];
														
										?>" class="img-responsive" alt="" style="height:150px;width:200"/>
							
                            </div>
					   <div class="cart-item-info">
							 <h3><?php echo $result['seed_detail_name'];?></span></h3>
                             </td>
                             <td>
                            <b> <p class="qty" style="font-size:18px">Qty :</p></b>
                            <h4> <b><lable ><?php echo $result['seed_min_order'];?></label></b><h4>
                             </td>
                             <td>
							 <h4><span class="add-on fa fa-rupee"></span> <?php echo $result['seed_price'];?></h4>
							 </td>
                             <td>
                  
							<?php //$d =strtotime(date("Y m d"));
							//echo $d;
							//echo $dd =date("d M Y");
							//$date=explode(" ",$dd);
							echo "<b style='font-size:17px'>Dilvery on ". date('d-M-Y', strtotime('+7 day'))." , ".date("l")."</b>";
							$_SESSION["delivery_details"]=date('d-M-Y', strtotime('+7 day'))." , ".date("l");
							//echo strtotime('+7 days',date("Y-m-d"));
									//$dd= $dd + 7 ;
									//echo $dd;// strtotime("7 days",date("Y-m-d")); //echo date("Y m d",$dd); ?>
							 </td>
                             <td>
							 <h4><span class="add-on fa fa-rupee"></span> <?php 
							 
							 echo $result['seed_min_order']*$result['seed_price'];
							 
																				?>
                            </h4>
							 </td>
                              <!--<div class="cart-header">
				 <div class="close1" > </div>
				 <div class="cart-sec">
						<div class="cart-item cyc">
							 
			 
                             </div></div></div>-->
				 
                             
							 
					   </div>
					   
						<div class="delivery">
							<div class="clearfix"></div>
							  						 
				        </div>						
				  </div>
			 
            
             <?php 
					}
				}
					?>
                    
             <?php
			   
		if(isset($fertilizer_data))
				{
					
					foreach($fertilizer_data as $result)
					{
						
					$_SESSION['product_name']=$result["fertilizer_detail_name"];
					$_SESSION['qty']=$result["fertilizer_min_order"];
					$_SESSION['price']=$result["fertilizer_price"];
					$_SESSION['subtotal']=$result['fertilizer_min_order']*$result['fertilizer_price'];
					$_SESSION['seller_id']=$result["seller_id"];
					$_SESSION['image_name']=$result["image_name"];
		
			 
		 
		 ?>	
         <div class="cart_header">
         <div class="container">
				 <tr>		
                       <td>            
						<img src="<?php 
										
										echo base_url()?>image/<?php echo $result["image_name"];
														
										?>" class="img-responsive" alt="" style="height:150px;width:200"/>
							
                            </div>
					   <div class="cart-item-info">
							 <h3><?php echo $result['fertilizer_detail_name'];?></span></h3>
                             </td>
                             <td>
                            <b> <p class="qty" style="font-size:18px">Qty :</p></b>
                            <h4> <b><lable ><?php echo $result['fertilizer_min_order'];?></label></b><h4>
                             </td>
                             <td>
							 <h4><span class="add-on fa fa-rupee"></span> <?php echo $result['fertilizer_price'];?></h4>
							 </td>
                             <td>
                  
							<?php //$d =strtotime(date("Y m d"));
							//echo $d;
							//echo $dd =date("d M Y");
							//$date=explode(" ",$dd);
							echo "<b style='font-size:17px'>Dilvery on ". date('d-M-Y', strtotime('+7 day'))." , ".date("l")."</b>";
							$_SESSION["delivery_details"]=date('d-M-Y', strtotime('+7 day'))." , ".date("l");
							//echo strtotime('+7 days',date("Y-m-d"));
									//$dd= $dd + 7 ;
									//echo $dd;// strtotime("7 days",date("Y-m-d")); //echo date("Y m d",$dd); ?>
							 </td>
                             <td>
							 <h4><span class="add-on fa fa-rupee"></span> <?php 
							 
							 echo $result['fertilizer_min_order']*$result['fertilizer_price'];
							 
																				?>
                            </h4>
							 </td>
                              <!--<div class="cart-header">
				 <div class="close1" > </div>
				 <div class="cart-sec">
						<div class="cart-item cyc">
							 
			 
                             </div></div></div>-->
				 
                             
							 
					   </div>
					   
						<div class="delivery">
							<div class="clearfix"></div>
							  						 
				        </div>						
				  </div>
			 
            
             <?php 
					}
				}
					?>
                    
                 <?php
				 if(isset($tools_data))
				{
					
					foreach($tools_data as $result)
					{
						
					$_SESSION['product_name']=$result["tools_detail_name"];
					$_SESSION['qty']=1;
					$_SESSION['price']=$result["tools_price"];
					$_SESSION['subtotal']=1*$result['tools_price'];
					$_SESSION['seller_id']=$result["seller_id"];
					$_SESSION['image_name']=$result["image_name"];
		
			 
		 
		 ?>	
         <div class="cart_header">
         <div class="container">
				 <tr>		
                       <td>            
						<img src="<?php 
										
										echo base_url()?>image/<?php echo $result["image_name"];
														
										?>" class="img-responsive" alt="" style="height:150px;width:200"/>
							
                            </div>
					   <div class="cart-item-info">
							 <h3><?php echo $result['tools_detail_name'];?></span></h3>
                             </td>
                             <td>
                            <b> <p class="qty" style="font-size:18px">Qty :</p></b>
                            <h4> <b><lable ><?php echo "1"; ?></label></b><h4>
                             </td>
                             <td>
							 <h4><span class="add-on fa fa-rupee"></span> <?php echo $result['tools_price'];?></h4>
							 </td>
                             <td>
                  
							<?php //$d =strtotime(date("Y m d"));
							//echo $d;
							//echo $dd =date("d M Y");
							//$date=explode(" ",$dd);
							echo "<b style='font-size:17px'>Dilvery on ". date('d-M-Y', strtotime('+7 day'))." , ".date("l")."</b>";
							$_SESSION["delivery_details"]=date('d-M-Y', strtotime('+7 day'))." , ".date("l");
							//echo strtotime('+7 days',date("Y-m-d"));
									//$dd= $dd + 7 ;
									//echo $dd;// strtotime("7 days",date("Y-m-d")); //echo date("Y m d",$dd); ?>
							 </td>
                             <td>
							 <h4><span class="add-on fa fa-rupee"></span> <?php 
							 
							 echo 1*$result['tools_price'];
							 
																				?>
                            </h4>
							 </td>
                              <!--<div class="cart-header">
				 <div class="close1" > </div>
				 <div class="cart-sec">
						<div class="cart-item cyc">
							 
			 
                             </div></div></div>-->
				 
                             
							 
					   </div>
					   
						<div class="delivery">
							<div class="clearfix"></div>
							  						 
				        </div>						
				  </div>
			 
            
             <?php 
					}
				}
					?>
                    
                    <?php
					if(isset($pesticide_data))
				{
					
					foreach($pesticide_data as $result)
					{
						
					$_SESSION['product_name']=$result["pesticide_detail_name"];
					$_SESSION['qty']=$result["pesticide_min_order"];
					$_SESSION['price']=$result["pesticide_price"];
					$_SESSION['subtotal']=$result['pesticide_min_order']*$result['pesticide_price'];
					$_SESSION['seller_id']=$result["seller_id"];
					$_SESSION['image_name']=$result["image_name"];
		
			 
		 
		 ?>	
         <div class="cart_header">
         <div class="container">
				 <tr>		
                       <td>            
						<img src="<?php 
										
										echo base_url()?>image/<?php echo $result["image_name"];
														
										?>" class="img-responsive" alt="" style="height:150px;width:200"/>
							
                            </div>
					   <div class="cart-item-info">
							 <h3><?php echo $result['pesticide_detail_name'];?></span></h3>
                             </td>
                             <td>
                            <b> <p class="qty" style="font-size:18px">Qty :</p></b>
                            <h4> <b><lable ><?php echo $result['pesticide_min_order'];?></label></b><h4>
                             </td>
                             <td>
							 <h4><span class="add-on fa fa-rupee"></span> <?php echo $result['pesticide_price'];?></h4>
							 </td>
                             <td>
                  
							<?php //$d =strtotime(date("Y m d"));
							//echo $d;
							//echo $dd =date("d M Y");
							//$date=explode(" ",$dd);
							echo "<b style='font-size:17px'>Dilvery on ". date('d-M-Y', strtotime('+7 day'))." , ".date("l")."</b>";
							$_SESSION["delivery_details"]=date('d-M-Y', strtotime('+7 day'))." , ".date("l");
							//echo strtotime('+7 days',date("Y-m-d"));
									//$dd= $dd + 7 ;
									//echo $dd;// strtotime("7 days",date("Y-m-d")); //echo date("Y m d",$dd); ?>
							 </td>
                             <td>
							 <h4><span class="add-on fa fa-rupee"></span> <?php 
							 
							 echo $result['pesticide_min_order']*$result['pesticide_price'];
							 
																				?>
                            </h4>
							 </td>
                              <!--<div class="cart-header">
				 <div class="close1" > </div>
				 <div class="cart-sec">
						<div class="cart-item cyc">
							 
			 
                             </div></div></div>-->
				 
                             
							 
					   </div>
					   
						<div class="delivery">
							<div class="clearfix"></div>
							  						 
				        </div>						
				  </div>
			 
            
             <?php 
					}
				}
					?>
                    
                       
                    </tr>
                  
                                <div>
              
                             <tr>
                           <?php   $_SESSION["payment"]="cash"; ?> 
                             	<td style="text-align:right"><a class="order" style="" href="<?php  echo base_url("user/product/book_main_order")?>">CASH PAYMENT</a><a class="order" style="" href="<?php  echo base_url("user/product/payment")?>">NET BANKING PAYMENT</a>
                               </td>
                               <td colspan="4" style="text-align:right;font-size:28px" ><b>AMOUNT PAYABLE :</b><br><span><span class="fa fa-rupee"></span><?php  echo $_SESSION['subtotal'] ?></span></span>
                               </td>
                           </tr>
                               </div>
                           </table>
			            		 
                            </div>
                          </div>          								
										
									
							
                        <?php 
					  }
					  ?>


<?php include_once("footer.php") ?>
</body>
</html>


