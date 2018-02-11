
<?php include_once("menuheader.php") ?>
<!---->
<!--header//-->
<div class="product-model">	 
	 <div class="container">
			<ol class="breadcrumb">
		  <?php //include_once("sub_header.php") ?>
          <a href="<?php echo base_url("home"); ?>">Home</a>
		  <li class="active">/ Products</li>
		 </ol>
			<h2>OUR PRODUCTS</h2>
            <div class="rsidebar span_1_of_left">
				 <section  class="sky-form">
					 <div class="product_right">
						 <h4 class="m_2"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span>Categories</h4>
						 
						 <!--seeds..............-->
						 
						 <div class="tab1">
							 <ul class="place">	 							 							
								
                          <li class="sort"><a href="<?php echo base_url("user/product")?>">SEEDS</a></li>
								 <li class="by"><img src="<?php echo base_url()?>data/images/do.png" alt=""></li>
									<div class="clearfix"> </div>
							  </ul> 
							 <div class="single-bottom">
								 <div class="single-bottom">						
						<?php
							$count_data1=count($seed_type_data);
								for($i=0;$i<$count_data1;$i++)
								{
												
						?><a href="<?php echo base_url('user/product/view_seed_type_detail/'.$seed_type_data[$i]->seed_type_id);?>">
						<?php echo $seed_type_data[$i]->seed_type_name;
						?></p></a>
						<?php 				 						 
						}
						?>						
								</div>
					      </div>
                         </div>
                          
                         <!--fertilizer..............-->
						

						 <div class="tab2">
							 <ul class="place">	 							 							
								
                          <li class="sort"><a href="<?php echo base_url("user/fertilizer_product")?>">FERTILIZER</a></li>
								 <li class="by"><img src="<?php echo base_url()?>data/images/do.png" alt=""></li>
									<div class="clearfix"> </div>
							  </ul> 
							 <div class="single-bottom">
								 <div class="single-bottom">						
						<?php
							$count_data1=count($fertilizer_type_data);
								for($i=0;$i<$count_data1;$i++)
								{
												
						?><a href="<?php echo base_url('user/product/view_fertilizer_type_detail/'.$fertilizer_type_data[$i]->fertilizer_type_id);?>">
						<?php echo $fertilizer_type_data[$i]->fertilizer_type_name;
						?></p></a>
						<?php 				 						 
						}
						?>						
								</div>
					      </div>
                         </div>
                         
                         <!--tools..............-->
						
                         
                         <div class="tab3">
							 <ul class="place">	 							 							
								
                          <li class="sort"><a href="<?php echo base_url("user/tools_product")?>">TOOLS</a></li>
								 <li class="by"><img src="<?php echo base_url()?>data/images/do.png" alt=""></li>
									<div class="clearfix"> </div>
							  </ul> 
							 <div class="single-bottom">
								 <div class="single-bottom">						
						<?php
							$count_data1=count($tools_type_data);
								for($i=0;$i<$count_data1;$i++)
								{
												
						?><a href="<?php echo base_url('user/product/view_tools_type_detail/'.$tools_type_data[$i]->tools_type_id);?>">
						<?php echo $tools_type_data[$i]->tools_type_name;
						?></p></a>
						<?php 				 						 
						}
						?>						
								</div>
					      </div>
                         </div>
                         
                          <!--pesticide..............-->
					    <div class="tab4">
							 <ul class="place">	 							 							
								
                          <li class="sort"><a href="<?php echo base_url("user/pesticide_product")?>">PESTICIDE</a></li>
								 <li class="by"><img src="<?php echo base_url()?>data/images/do.png" alt=""></li>
									<div class="clearfix"> </div>
							  </ul> 
							 <div class="single-bottom">
								 <div class="single-bottom">						
						<?php
							$count_data1=count($pesticide_type_data);
								for($i=0;$i<$count_data1;$i++)
								{
												
						?><a href="<?php echo base_url('user/product/view_pesticide_type_detail/'.$pesticide_type_data[$i]->pesticide_type_id);?>">
						<?php echo $pesticide_type_data[$i]->pesticide_type_name;
						?></p></a>
						<?php 				 						 
						}
						?>						
								</div>
					      </div>
                         </div>
                          
                        </div>
             
               </div>
					  
						  <!--script-->
						<script>
							$(document).ready(function(){
								$(".tab1 .single-bottom").hide();
								$(".tab2 .single-bottom").hide();
								$(".tab3 .single-bottom").hide();
								$(".tab4 .single-bottom").hide();
								$(".tab5 .single-bottom").hide();
								
								$(".tab1 ul").click(function(){
									$(".tab1 .single-bottom").slideToggle(300);
									$(".tab2 .single-bottom").hide();
									$(".tab3 .single-bottom").hide();
									$(".tab4 .single-bottom").hide();
									$(".tab5 .single-bottom").hide();
								})
								$(".tab2 ul").click(function(){
									$(".tab2 .single-bottom").slideToggle(300);
									$(".tab1 .single-bottom").hide();
									$(".tab3 .single-bottom").hide();
									$(".tab4 .single-bottom").hide();
									$(".tab5 .single-bottom").hide();
								})
								$(".tab3 ul").click(function(){
									$(".tab3 .single-bottom").slideToggle(300);
									$(".tab4 .single-bottom").hide();
									$(".tab5 .single-bottom").hide();
									$(".tab2 .single-bottom").hide();
									$(".tab1 .single-bottom").hide();
								})
								$(".tab4 ul").click(function(){
									$(".tab4 .single-bottom").slideToggle(300);
									$(".tab5 .single-bottom").hide();
									$(".tab3 .single-bottom").hide();
									$(".tab2 .single-bottom").hide();
									$(".tab1 .single-bottom").hide();
								})	
								$(".tab5 ul").click(function(){
									$(".tab5 .single-bottom").slideToggle(300);
									$(".tab4 .single-bottom").hide();
									$(".tab3 .single-bottom").hide();
									$(".tab2 .single-bottom").hide();
									$(".tab1 .single-bottom").hide();
								})	
							});
						</script>
						
            <?php
				if(isset($seed_data))
	{
		?>
			 <div class="col-md-9 product-model-sec">
			<?php
			//echo count($seed_data);die();

	
			 foreach($seed_data as $data)
				  {
				  
			?>			
		
					 <a href="<?php echo base_url("user/product/more_seed_product_view/".$data['seed_detail_id']);?>"><div class="product-grid love-grid">
						<div class="more-product"><span> </span></div>						
						<div class="product-img b-link-stripe b-animate-go  thickbox">
							<img src="<?php 
										if($data['seed_detail_id'])
										{
										echo base_url()?>image/<?php echo $data['image_name'];
										}					
										?>"class="img-responsive" alt="" style="height:150px;width:100%"/>
							<div class="b-wrapper">
							<h4 class="b-animate b-from-left  b-delay03">							
							<button class="btns"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>Quick View</button>
							</h4>
							</div>
						</div></a>						
						<div class="product-info simpleCart_shelfItem">
							<div class="product-info-cust prt_name">
								<h4><?php echo $data['seed_detail_name']; ?></h4>
								<p>Payment Terms : <?php echo $data['payment_terms']?> </p>
								<p>Trade Terms : <?php echo $data['trade_terms']?></p>
								<span class="fa fa-rupee "></span><span class="item_price"><b><?php echo $data['seed_price']?></b></span>								
								<br>
								 <form method="post" action="<?php echo base_url("user/product/add_product_cart/".$data['seed_detail_id']); ?>">
                                  <input type="hidden"  name="seller_id" value="<?php echo $data['seller_id']?>?>">
                                 <input type="hidden"  name="url" value="<?php echo base_url().uri_string()?>"></a>
							<input type="hidden"  name="seed_type_id" value=" <?php echo $data['seed_type_id']?>"></a>
                                 <input type="submit" class="item_add items" value="ADD TO CART"></a></form>
							</div>													
							<div class="clearfix"> </div>
						</div>
					</div>	
					<?php
					}echo "</div>";
	}
	
					?>
				
                
                
<!--..........FERTILIZER..........-->	
<?php 

 if(isset($fertilizer_data))
			{?>
	<div class="col-md-9 product-model-sec">
			<?php
	//echo count($fertilizer_data);die();
			
			
			 foreach($fertilizer_data as $data)
				  {
				  
			?>			
		
					 <a href="<?php echo base_url("user/product/more_fertilizer_product_view/".$data['fertilizer_detail_id']);?>"><div class="product-grid love-grid">
						<div class="more-product"><span> </span></div>						
						<div class="product-img b-link-stripe b-animate-go  thickbox">
							<img src="<?php 
										if($data['fertilizer_detail_id'])
										{
										echo base_url()?>image/<?php echo $data['image_name'];
										}					
										?>"class="img-responsive" alt="" style="height:150px;width:100%"/>
							<div class="b-wrapper">
							<h4 class="b-animate b-from-left  b-delay03">							
							<button class="btns"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>Quick View</button>
							</h4>
							</div>
						</div></a>						
						<div class="product-info simpleCart_shelfItem">
							<div class="product-info-cust prt_name">
								<h4><?php echo $data['fertilizer_detail_name']; ?></h4>
								<p>Payment Terms : <?php echo $data['payment_terms']?> </p>
								<p>Trade Terms : <?php echo $data['trade_terms']?></p>
								<span class="fa fa-rupee "></span><span class="item_price"><b><?php echo $data['fertilizer_price']?></b></span>								
								<br>
								 <form method="post" action="<?php echo base_url("user/product/add_product_cart/".$data['fertilizer_detail_id']); ?>">
                                  <input type="hidden"  name="seller_id" value="<?php echo $data['seller_id']?>?>">
                                 <input type="hidden"  name="url" value="<?php echo base_url().uri_string()?>"></a>
							<input type="hidden"  name="fertilizer_type_id" value=" <?php echo $data['fertilizer_type_id']?>"></a>
                                 <input type="submit" class="item_add items" value="ADD TO CART"></a></form>
							</div>													
							<div class="clearfix"> </div>
						</div>
					</div>	
					<?php
					}
			echo "</div>";
			
			}
			?>	
                    	
<?php 

 if(isset($tools_data))
			{?>
	<div class="col-md-9 product-model-sec">
			<?php
	//echo count($tools_data);die();
			
			
			 foreach($tools_data as $data)
				  {
				  
			?>			
		
					 <a href="<?php echo base_url("user/product/more_tools_product_view/".$data['tools_detail_id']);?>"><div class="product-grid love-grid">
						<div class="more-product"><span> </span></div>						
						<div class="product-img b-link-stripe b-animate-go  thickbox">
							<img src="<?php 
										if($data['tools_detail_id'])
										{
										echo base_url()?>image/<?php echo $data['image_name'];
										}					
										?>"class="img-responsive" alt="" style="height:150px;width:100%"/>
							<div class="b-wrapper">
							<h4 class="b-animate b-from-left  b-delay03">							
							<button class="btns"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>Quick View</button>
							</h4>
							</div>
						</div></a>						
						<div class="product-info simpleCart_shelfItem">
							<div class="product-info-cust prt_name">
								<h4><?php echo $data['tools_detail_name']; ?></h4>
								<p>Type : <?php
							
							  foreach($tools_detail as $data1)
														 {
															 if(trim($data1['tools_detail_type_id'])==trim($data['tools_detail_type_id']))
															 {
																 echo $data1['tools_detail_type_name'];
															 }
														 }
													?> </p>
								<p>Uses : <?php echo $data['tools_uses']?></p>
								<span class="fa fa-rupee "></span><span class="item_price"><b><?php echo $data['tools_price']?></b></span>								
								<br>
								 <form method="post" action="<?php echo base_url("user/product/add_product_cart/".$data['tools_detail_id']); ?>">
                                 <input type="hidden"  name="url" value="<?php echo base_url().uri_string()?>"></a>
							<input type="hidden"  name="tools_type_id" value=" <?php echo $data['tools_type_id']?>"></a>
                                 <input type="submit" class="item_add items" value="ADD TO CART"></a></form>
							</div>													
							<div class="clearfix"> </div>
						</div>
					</div>	
					<?php
					}
			echo "</div>";
			
			}
			?>	
        
        
        
        
        
        
        <!--..........pesticide..........-->	
<?php 

 if(isset($pesticide_data))
			{?>
	<div class="col-md-9 product-model-sec">
			<?php
	//echo count($pesticide_data);die();
			
			
			 foreach($pesticide_data as $data)
				  {
				  
			?>			
		
					 <a href="<?php echo base_url("user/product/more_pesticide_product_view/".$data['pesticide_detail_id']);?>"><div class="product-grid love-grid">
						<div class="more-product"><span> </span></div>						
						<div class="product-img b-link-stripe b-animate-go  thickbox">
							<img src="<?php 
										if($data['pesticide_detail_id'])
										{
										echo base_url()?>image/<?php echo $data['image_name'];
										}					
										?>"class="img-responsive" alt="" style="height:150px;width:100%"/>
							<div class="b-wrapper">
							<h4 class="b-animate b-from-left  b-delay03">							
							<button class="btns"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>Quick View</button>
							</h4>
							</div>
						</div></a>						
						<div class="product-info simpleCart_shelfItem">
							<div class="product-info-cust prt_name">
								<h4><?php echo $data['pesticide_detail_name']; ?></h4>
								<p>Classification : <?php
							
							  foreach($classification as $data1)
														 {
															 if(trim($data1['pesticide_classification_id'])==trim($data['classification']))
															 {
																 echo $data1['pesticide_classification_name'];
															 }
														 }
													?></p>
								<p>Appearance : <?php
							
							  foreach($appearance as $data1)
														 {
															 if(trim($data1['pesticide_appearance_id'])==trim($data['appearance']))
															 {
																 echo $data1['pesticide_appearance_name'];
															 }
														 }
													?></p>
								<span class="fa fa-rupee "></span><span class="item_price"><b><?php echo $data['pesticide_price']?></b></span>								
								<br>
								 <form method="post" action="<?php echo base_url("user/product/add_product_cart/".$data['pesticide_detail_id']); ?>">
                                 <input type="hidden"  name="url" value="<?php echo base_url().uri_string()?>"></a>
							<input type="hidden"  name="pesticide_type_id" value=" <?php echo $data['pesticide_type_id']?>"></a>
                                 <input type="submit" class="item_add items" value="ADD TO CART"></a></form>
							</div>													
							<div class="clearfix"> </div>
						</div>
					</div>	
					<?php
					}
			echo "</div>";
			
			}
			?>	
        
		
        
        
        
        
        
        
        
        
        
		
			
		
						<!-- script -->					 
			
                 
                 <!-- discount munu-->
				<!-- <section  class="sky-form">
					 <h4><span class="glyphicon glyphicon-minus" aria-hidden="true"></span>DISCOUNTS</h4>
					 <div class="row row1 scroll-pane">
						 <div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>Upto - 10% (20)</label>
						 </div>
						 <div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>40% - 50% (5)</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>30% - 20% (7)</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>10% - 5% (2)</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Other(50)</label>
						 </div>
					 </div>
				 </section> -->				 				 
				   <!--<section  class="sky-form">
						<h4><span class="glyphicon glyphicon-minus" aria-hidden="true"></span>Price</h4>
							<ul class="dropdown-menu1">
								 <li><a href="">								               
								<div id="slider-range"></div>							
								<input type="text" id="amount" style="border: 0; font-weight: NORMAL;   font-family: 'Arimo', sans-serif;" />
							 </a></li>			
						  </ul>
				   </section>-->
				   <!---->
					 <!---->
					 <!--<section  class="sky-form">
						<h4><span class="glyphicon glyphicon-minus" aria-hidden="true"></span>Type</h4>
							<div class="row row1 scroll-pane">
								<div class="col col-4">
									<label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>Sofa Cum Beds (30)</label>
								</div>
								<div class="col col-4">
									<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Dinner Sets   (30)</label>
									<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>3+1+1 Sofa Sets (30)</label>
									<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Sofa Chairs     (30)</label>
									<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>2 Seater Sofas  (30)</label>
									<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Display Units   (30)</label>
									<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>L-shaped Sofas  (30)</label>
									<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>3 Seater Sofas  (30)</label>
								</div>
							</div>
				   </section>-->
				   		 <!-- brand munu-->
				<!--<section  class="sky-form">
						<h4><span class="glyphicon glyphicon-minus" aria-hidden="true"></span>Brand</h4>
							<div class="row row1 scroll-pane">
								<div class="col col-4">
									<label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>Roadstar</label>
								</div>
								<div class="col col-4">
									<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Tornado</label>
									<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Kissan</label>
									<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Oakley</label>
									<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Manga</label>
									<label class="checkbox"><input type="checkbox" name="checkbox" ><i></i>Wega</label>
									<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Kings</label>
									<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Zumba</label>
								</div>
							</div>
				   </section>	-->		
			 </div>				 
	      </div>
		</div>
</div>	


</div>
<?php include_once("footer.php") ?>
</body>
</html>