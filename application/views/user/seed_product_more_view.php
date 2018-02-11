<title>Agromall :: Product</title>
<link rel="stylesheet" href="<?php echo base_url()?>data/css/etalage.css">

<script src="<?php echo base_url()?>data/js/jquery.etalage.min.js"></script>
<script>
			jQuery(document).ready(function($){

				$('#etalage').etalage({
					thumb_image_width: 400,
					thumb_image_height: 400,
					source_image_width: 900,
					source_image_height: 1200,
					show_hint: true,
					click_callback: function(image_anchor, instance_id){
						alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
					}
				});

			});
		</script>


<!-- //etalage-->
  
</head>
<body>
<!-- header -->


<!--cart-->
	 
<!------>

<!----><div class="single-sec">
	 <div class="container">
		 <ol class="breadcrumb">
			 <li><a href="index.html">Home</a></li>
			 <li class="active">Products</li>
		 </ol>
           
      
		 <!-- ...........SEED.......... -->	
			<div class="col-md-9 det">
            
     <?php
	if(isset($seed_data))
	{
		?>
           
         <?php
		 
		 foreach($seed_data as $data)
		 {
			 
		 
		 ?>	
				  <div class="single_left">
					 <div class="grid images_3_of_2">
						 <ul id="etalage">
						<?php
							
							  foreach($image as $data1)
														 {?>
															 
																
															 
							<li> 					
								<a href="optionallink.html">
									<img class="etalage_thumb_image" src="<?php echo base_url();?>image/<?php echo $data1['image_name'] ?>" class="img-responsive"  />
									<img class="etalage_source_image" src="<?php echo base_url();?>image/<?php echo $data1['image_name'] ?>" class="img-responsive" title="" />
								</a>
							</li>
							<!--<li>
								<img class="etalage_thumb_image" src="images/ss2.jpg" class="img-responsive" />
								<img class="etalage_source_image" src="images/ss2.jpg" class="img-responsive" title="" />
							</li>							
						    <li>
								<img class="etalage_thumb_image" src="images/ss4.jpg" class="img-responsive"  />
								<img class="etalage_source_image" src="images/ss4.jpg"class="img-responsive"  />
							</li>-->
						 
						  <?php }
						?></ul>
						 <div class="clearfix"></div>		
				      </div>
				  </div>
				  <div class="single-right" style="position:relative">
					 <h3><b><?php echo $data['seed_detail_name'];?></b></h3>
					  
					  <div class="cost">
						 <div class="prdt-cost">
							 <ul>
								 <li>Selling Price:</li>
								 <li class="active"><span class="add-on fa fa-rupee"></span> <?php echo $data['seed_price'];?></li>
								 <a href="<?php echo base_url("user/product/place_main_order")."/".$data['seed_detail_id']?>">BUY NOW</a>
							 </ul>
						 </div>
						 
						 <div class="clearfix"></div>
					  </div>
					  <div class="item-list">
						 <ul>
							  <li>Cultivation Type: <?php
							
							  foreach($cultivation_type as $data1)
														 {
															 if(trim($data1['seed_cultivation_id'])==trim($data['cultivation_type']))
															 {
																 echo $data1['seed_cultivation_name'];
															 }
														 }
													?></li>
                                                    
                             <li>Availabal In: <?php echo $data['seed_price_type'];?></li>
							 <li>MIN Order: <?php echo $data['seed_min_order'];?></li>
							 <li>Item Weight: <?php echo $data['item_weight'];?></li>
                             
							 <li>Shipping weight: <?php echo $data['shipping_weight'];?></li>
							 
                            </ul>
					  </div>
					  <div class="single-bottom1">
						<h6>Details</h6>
						<li>Model No: <?php echo $data['model_no'];?></li>
						<li>Origin Country: <?php
							
							  foreach($origin_country as $data1)
														 {
															 if(trim($data1['country_id'])==trim($data['origin_country']))
															 {
																 echo $data1['country_name'];
															 }
														 }
													?></li>
                        <li>Payment Terms: <?php echo $data['payment_terms'];?></li>
						<li>Tradet Terms: <?php echo $data['trade_terms'];?></li>
						
					 </div>					 
				  </div>
				  <div class="clearfix"></div>
				  <div class="sofaset-info">
						 <h4>Product Summary For <b><?php echo $data['seed_detail_name'];?></b> </h4>
						 <ul>
							 <li><?php echo $data['description'];?></li>
							 </ul>
				  </div>
                  <?php }}?>				  					
		    </div>
				     				
		     <!--<div class="clearfix"></div>-->
             
             
             
       <!-- ...........FERTILIZER......... -->	
		      
             
<div class="col-md-9 det">
            
     <?php
	if(isset($fertilizer_data))
	{
		?>
           
         <?php
		 
		 foreach($fertilizer_data as $data)
		 {
			 
		 
		 ?>	
				  <div class="single_left">
					 <div class="grid images_3_of_2">
						 <ul id="etalage">
						<?php
							
							  foreach($image as $data1)
														 {?>
															 
																
															 
							<li> 					
								<a href="optionallink.html">
									<img class="etalage_thumb_image" src="<?php echo base_url();?>image/<?php echo $data1['image_name'] ?>" class="img-responsive"  />
									<img class="etalage_source_image" src="<?php echo base_url();?>image/<?php echo $data1['image_name'] ?>" class="img-responsive" title="" />
								</a>
							</li>
							<!--<li>
								<img class="etalage_thumb_image" src="images/ss2.jpg" class="img-responsive" />
								<img class="etalage_source_image" src="images/ss2.jpg" class="img-responsive" title="" />
							</li>							
						    <li>
								<img class="etalage_thumb_image" src="images/ss4.jpg" class="img-responsive"  />
								<img class="etalage_source_image" src="images/ss4.jpg"class="img-responsive"  />
							</li>-->
						 
						  <?php }
						?></ul>
						 <div class="clearfix"></div>		
				      </div>
				  </div>
				  <div class="single-right" style="position:relative">
					 <h3><b><?php echo $data['fertilizer_detail_name'];?></b></h3>
					  
					  <div class="cost">
						 <div class="prdt-cost">
							 <ul>
								 <li>Sellling Price:</li>
								 <li class="active"><span class="add-on fa fa-rupee"></span> <?php echo $data['fertilizer_price'];?></li>
                	 		 
								 <a href="<?php echo base_url("user/product/place_main_order")."/".$data['fertilizer_detail_id']?>"  >BUY NOW</a>
                
							 </ul>
						 </div>
						 
						 <div class="clearfix"></div>
					  </div>
					  <div class="item-list">
						 <ul>
							  <li>Classification: <?php
							
							  foreach($classification as $data1)
														 {
															 if(trim($data1['fertilizer_classification_id'])==trim($data['classification']))
															 {
																 echo $data1['fertilizer_classification_name'];
															 }
														 }
													?></li>
                              <li>Appearance: <?php
							
							  foreach($appearance as $data1)
														 {
															 if(trim($data1['fertilizer_appearance_id'])==trim($data['appearance']))
															 {
																 echo $data1['fertilizer_appearance_name'];
															 }
														 }
													?></li>
                                                    
                             <li>Availabal In: <?php echo $data['fertilizer_price_type'];?></li>
							 <li>MIN Order: <?php echo $data['fertilizer_min_order'];?></li>
							 <!--<li>Item Weight: <?php echo $data['item_weight'];?></li>
                             
							 <li>Shipping weight: <?php echo $data['shipping_weight'];?></li>
							 -->
                            </ul>
					  </div>
					  <div class="single-bottom1">
						<h6>Details</h6>
						<li>Model No: <?php echo $data['model_no'];?></li>
						<li>Origin Country: <?php
							
							  foreach($origin_country as $data1)
														 {
															 if(trim($data1['country_id'])==trim($data['origin_country']))
															 {
																 echo $data1['country_name'];
															 }
														 }
													?></li>
                        <li>Payment Terms: <?php echo $data['payment_terms'];?></li>
						<li>Tradet Terms: <?php echo $data['trade_terms'];?></li>
						<li>HS Code: <?php echo $data['hs_code'];?></li>
											 </div>					 
				  </div>
				  <div class="clearfix"></div>
				  <div class="sofaset-info">
						 <h4>Product Summary For <b><?php echo $data['fertilizer_detail_name'];?></b> </h4>
						 <ul>
							 <li><?php echo $data['description'];?></li>
							 </ul>
				  </div>
                  <?php }}?>				  					
		    </div>             
     
     
     
             
      <!-- ...........tools......... -->
      
       
        <div class="col-md-9 det">
            
     <?php
	if(isset($tools_data))
	{
		?>
           
         <?php
		 
		 foreach($tools_data as $data)
		 {
			 
		 
		 ?>	
				  <div class="single_left">
					 <div class="grid images_3_of_2">
						 <ul id="etalage">
						<?php
							
							  foreach($image as $data1)
														 {?>
															 
																
															 
							<li> 					
								<a href="optionallink.html">
									<img class="etalage_thumb_image" src="<?php echo base_url();?>image/<?php echo $data1['image_name'] ?>" class="img-responsive"  />
									<img class="etalage_source_image" src="<?php echo base_url();?>image/<?php echo $data1['image_name'] ?>" class="img-responsive" title="" />
								</a>
							</li>
							<!--<li>
								<img class="etalage_thumb_image" src="images/ss2.jpg" class="img-responsive" />
								<img class="etalage_source_image" src="images/ss2.jpg" class="img-responsive" title="" />
							</li>							
						    <li>
								<img class="etalage_thumb_image" src="images/ss4.jpg" class="img-responsive"  />
								<img class="etalage_source_image" src="images/ss4.jpg"class="img-responsive"  />
							</li>-->
						 
						  <?php }
						?></ul>
						 <div class="clearfix"></div>		
				      </div>
				  </div>
				  <div class="single-right" style="position:relative">
					 <h3><b><?php echo $data['tools_detail_name'];?></b></h3>
					  
					  <div class="cost">
						 <div class="prdt-cost">
							 <ul>
								 <li>Sellling Price:</li>
								 <li class="active"><span class="add-on fa fa-rupee"></span> <?php echo $data['tools_price'];?></li>
                	 		 
								 <a href="<?php echo base_url("user/product/place_main_order")."/".$data['tools_detail_id']?>"  >BUY NOW</a>
                
							 </ul>
						 </div>
						 
						 <div class="clearfix"></div>
					  </div>
					  <div class="item-list">
						 <ul>
							  <li>Tools Type: <?php
							
							  foreach($tools_detail as $data1)
														 {
															 if(trim($data1['tools_detail_type_id'])==trim($data['tools_detail_type_id']))
															 {
																 echo $data1['tools_detail_type_name'];
															 }
														 }
													?> </li>
                              <li> Uses : <?php echo $data['tools_uses']?></li>
                                                    
                             <li>Color : <?php
							
							  foreach($color as $data1)
														 {
															 if(trim($data1['color_id'])==trim($data['color_id']))
															 {
																 echo $data1['color_name'];
															 }
														 }
													?> </li>
							 <li>Fuel :  <?php
							
							  foreach($fuel as $data1)
														 {
															 if(trim($data1['tools_fuel_id'])==trim($data['tools_fuel_id']))
															 {
																 echo $data1['tools_fuel_name'];
															 }
														 }
													?></li>
							 <li>Drive :  <?php
							
							  foreach($drive as $data1)
														 {
															 if(trim($data1['tools_drive_id'])==trim($data['tools_drive_id']))
															 {
																 echo $data1['tools_drive_name'];
															 }
														 }
													?></li>
                             
							 
                             <li>Engine Type: <?php
							
							  foreach($engine as $data1)
														 {
															 if(trim($data1['tools_engine_id'])==trim($data['tools_engine_id']))
															 {
																 echo $data1['tools_engine_name'];
															 }
														 }
													?></li>
							 <li>Tools Weight: <?php echo $data['tools_weight'];?></li>
							  <li>Shipping weight: <?php echo $data['tools_shipping_weight'];?></li>
							
                            </ul>
					  </div>
					  <div class="single-bottom1">
						<h6>Details</h6>
						<li>Model No: <?php echo $data['model_no'];?></li>
						<li>Origin Country: <?php
							
							  foreach($origin_country as $data1)
														 {
															 if(trim($data1['country_id'])==trim($data['origin_country']))
															 {
																 echo $data1['country_name'];
															 }
														 }
													?></li>
                        <li>Tools Material: <?php echo $data['tools_material'];?></li>
						<li>Tools Eye Shape: <?php echo $data['tools_eye_shape'];?></li>
						<li>Tools Package Detail: <?php echo $data['tools_package_detail'];?></li>
											 </div>					 
				  </div>
				  <div class="clearfix"></div>
				  <div class="sofaset-info">
						 <h4>Product Summary For <b><?php echo $data['tools_detail_name'];?></b> </h4>
						 <ul>
							 <li><?php echo $data['description'];?></li>
							 </ul>
				  </div>
                  <?php }}?>				  					
		    </div>     
             
  <!-- ...........pesticide......... -->           
     <div class="col-md-9 det">
            
     <?php
	if(isset($pesticide_data))
	{
		?>
           
         <?php
		 
		 foreach($pesticide_data as $data)
		 {
			 
		 
		 ?>	
				  <div class="single_left">
					 <div class="grid images_3_of_2">
						 <ul id="etalage">
						<?php
							
							  foreach($image as $data1)
														 {?>
															 
																
															 
							<li> 					
								<a href="optionallink.html">
									<img class="etalage_thumb_image" src="<?php echo base_url();?>image/<?php echo $data1['image_name'] ?>" class="img-responsive"  />
									<img class="etalage_source_image" src="<?php echo base_url();?>image/<?php echo $data1['image_name'] ?>" class="img-responsive" title="" />
								</a>
							</li>
							<!--<li>
								<img class="etalage_thumb_image" src="images/ss2.jpg" class="img-responsive" />
								<img class="etalage_source_image" src="images/ss2.jpg" class="img-responsive" title="" />
							</li>							
						    <li>
								<img class="etalage_thumb_image" src="images/ss4.jpg" class="img-responsive"  />
								<img class="etalage_source_image" src="images/ss4.jpg"class="img-responsive"  />
							</li>-->
						 
						  <?php }
						?></ul>
						 <div class="clearfix"></div>		
				      </div>
				  </div>
				  <div class="single-right" style="position:relative">
					 <h3><b><?php echo $data['pesticide_detail_name'];?></b></h3>
					  
					  <div class="cost">
						 <div class="prdt-cost">
							 <ul>
								 <li>Sellling Price:</li>
								 <li class="active"><span class="add-on fa fa-rupee"></span> <?php echo $data['pesticide_price'];?></li>
                	 		 
								 <a href="<?php echo base_url("user/product/place_main_order")."/".$data['pesticide_detail_id']?>"  >BUY NOW</a>
                
							 </ul>
						 </div>
						 
						 <div class="clearfix"></div>
					  </div>
					  <div class="item-list">
						 <ul>
							  <li>Classification: <?php
							
							  foreach($classification as $data1)
														 {
															 if(trim($data1['pesticide_classification_id'])==trim($data['classification']))
															 {
																 echo $data1['pesticide_classification_name'];
															 }
														 }
													?></li>
                              <li>Appearance: <?php
							
							  foreach($appearance as $data1)
														 {
															 if(trim($data1['pesticide_appearance_id'])==trim($data['appearance']))
															 {
																 echo $data1['pesticide_appearance_name'];
															 }
														 }
													?></li>
                                                    
                             <li>Availabal In: <?php echo $data['pesticide_price_type'];?></li>
							 <li>MIN Order: <?php echo $data['pesticide_min_order'];?></li>
							 <li>Item Weight: <?php echo $data['pesticide_weight'];?></li>
                             
							 <li>Shipping weight: <?php echo $data['pesticide_shipping_weight'];?></li>
							 
                            </ul>
					  </div>
					  <div class="single-bottom1">
						<h6>Details</h6>
						<li>Model No: <?php echo $data['model_no'];?></li>
						<li>Origin Country: <?php
							
							  foreach($origin_country as $data1)
														 {
															 if(trim($data1['country_id'])==trim($data['origin_country']))
															 {
																 echo $data1['country_name'];
															 }
														 }
													?></li>
                       <li>CAS No: <?php echo $data['cas_no'];?></li>
											 </div>					 
				  </div>
				  <div class="clearfix"></div>
				  <div class="sofaset-info">
						 <h4>Product Summary For <b><?php echo $data['pesticide_detail_name'];?></b> </h4>
						 <ul>
							 <li><?php echo $data['description'];?></li>
							 </ul>
				  </div>
                  <?php }}?>				  					
		    </div>        
             
             
             
             
             
         </div>	 
</div>
				     				
		     




<!---->
<?php include_once("footer.php") ?>
<!---->

</div>
<!---->
</body>
</html>