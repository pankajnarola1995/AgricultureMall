
<title>:: Home ::</title>

<script type="text/javascript" src="<?php echo base_url()?>data/js/jquery.flexisel.js"></script>
<!--<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
--><?php include_once("menuheader.php") ?>

<div class="content">
	 <div class="container">
		 <div class="slider">
				<a href="<?php echo base_url("user/product"); ?>"><ul class="rslides" id="slider1">
				  <li><img src="<?php echo base_url()?>data/images/banner3.jpg" alt="" style="width:1200px;height:405px"></li>
				  <li><img src="<?php echo base_url()?>data/images/banner2.jpg" alt="" style="width:1200px;height:405px"></li>
				  <li><img src="<?php echo base_url()?>data/images/banner1.jpg" alt="" style="width:1200px;height:405px"></li>
                  <li><img src="<?php echo base_url()?>data/images/banner4.jpg" alt="" style="width:1200px;height:405px"></li>
                  <li><img src="<?php echo base_url()?>data/images/banner5.jpg" alt="" style="width:1200px;height:405px"></li>
				</ul></a>
		 </div>
	 </div>
</div>

<div class="new">
	 <div class="container">
		 <h3>specially designed for Furnyish</h3>
         
         
          <?php
                 if(isset($seed_data))
        		{
					 foreach($seed_data as $data)
				  {
            ?>
		 <div class="new-products">
		 		<div class="new-items">
                         <div class="item1">
                             <a href="<?php echo base_url("user/product/more_seed_product_view/".$data['seed_detail_id']);?>">
                             <img src="<?php 
										if($data['seed_detail_id'])
										{
										echo base_url()?>image/<?php echo $data['image_name'];
										}					
										?>" alt="" width="100%" height="200px"/>
                                </a>
			<div class="item-info">
                                 <h4><a href="products.html"><?php echo $data['seed_detail_name']; ?></a></h4>
                                  <span style="font-size:24px"><span class="fa fa-rupee "><b><?php echo $data['seed_price']?></b></span>		</span> <a href="single.html">Buy Now</a>
                             </div>
                         </div>
                         
                         <?php }  } ?>
                        
                        
                        
                        <?php
                 if(isset($seed_data))
        		{
					 foreach($seed_data as $data)
				  {
            ?>
                 <div class="item4">
                 
                 <a href="<?php echo base_url("user/product/more_seed_product_view/".$data['seed_detail_id']);?>">
                             <img src="<?php 
										if($data['seed_detail_id'])
										{
										echo base_url()?>image/<?php echo $data['image_name'];
										}					
										?>" alt="" width="100%" height="205px" />
                                </a><div class="item-info4">
                         <h4><a href="products.html"><?php echo $data['seed_detail_name']; ?></a></h4>
                         <span style="font-size:24px"><span class="fa fa-rupee "><b><?php echo $data['seed_price']?></b></span>		</span> <a href="single.html">Buy Now</a>
                     </div>			 
                 </div>
                 <?php }  } ?>
		 </div>
         
         
         
         
				<div class="new-items new_middle">
                
                     
          <?php
                 if(isset($fertilizer_data))
        		{
           
	
			 foreach($fertilizer_data as $data)
				  {
				  
			?>	
                
                
			 <div class="item2">			 
				 <div class="item-info2">
					 <h4><a href="products.html"><?php echo $data['fertilizer_detail_name']; ?></a></h4>
					 <span style="font-size:24px"><span class="fa fa-rupee "><b><?php echo $data['fertilizer_price']?></b></span>		</span><a href="single.html">Buy Now</a>
				 </div>
				 <a href="<?php echo base_url("user/product/more_fertilizer_product_view/".$data['fertilizer_detail_id']);?>"><img src="<?php 
										if($data['fertilizer_detail_id'])
										{
										echo base_url()?>image/<?php echo $data['image_name'];
										}					
										?>" alt=""  width="100%" height="240px"/>
                   </a> </div>
                    <?php }}?>
                    
                    
                      <?php
                 if(isset($fertilizer_data))
        		{
           
	
			 foreach($fertilizer_data as $data)
				  {
				  
			?>	
			 <div class="item5">	
				  <a href="<?php echo base_url("user/product/more_fertilizer_product_view/".$data['fertilizer_detail_id']);?>"><img src="<?php 
										if($data['fertilizer_detail_id'])
										{
										echo base_url()?>image/<?php echo $data['image_name'];
										}					
										?>" alt=""  width="100%" height="240px"/>
                   </a> <div class="item-info5">
					 <h4><a href="products.html"><?php echo $data['fertilizer_detail_name']; ?></a></h4>
					  <span style="font-size:24px"><span class="fa fa-rupee "><b><?php echo $data['fertilizer_price']?></b></span>		</span>
                     <a href="single.html">Buy Now</a>
				 </div>	
			 </div>
             <?php }}?>
		 </div>	
         
         
         
         	  
				<div class="new-items new_last">
                     <?php
                 if(isset($tools_data))
        		{
           
	
			 foreach($tools_data as $data)
				  {
				  
			?>	
			 <div class="item3">	
				 <a href="<?php echo base_url("user/product/more_tools_product_view/".$data['tools_detail_id']);?>"><img src="<?php 
										if($data['tools_detail_id'])
										{
										echo base_url()?>image/<?php echo $data['image_name'];
										}					
										?>" alt="" width="100%" height="230px"/>
                   </a> <div class="item-info3">
					 <h4><a href="products.html"><?php echo $data['tools_detail_name']; ?></a></h4>
					  <span style="font-size:24px"><span class="fa fa-rupee "><b><?php echo $data['tools_price']?></b></span>		</span>
					 <a href="single.html">Buy Now</a>
				 </div>	
             </div>
                 <?php }}?>		 
			 
             
             	     <?php
                 if(isset($tools_data))
        		{
           
	
			 foreach($tools_data as $data)
				  {
				  
			?>	
			 <div class="item6">	
				 <a href="<?php echo base_url("user/product/more_tools_product_view/".$data['tools_detail_id']);?>"><img src="<?php 
										if($data['tools_detail_id'])
										{
										echo base_url()?>image/<?php echo $data['image_name'];
										}					
										?>" alt="" width="100%" height="230px"/>
                   </a><div class="item-info6">
					 <h4><a href="products.html"><?php echo $data['tools_detail_name']; ?></a></h4>
					  <span style="font-size:24px"><span class="fa fa-rupee "><b><?php echo $data['tools_price']?></b></span>		</span>
					 <a href="single.html">Buy Now</a>
				 </div>
				 				 
			 </div>
             <?php }}?>
		 </div>
         
         
         
         
		 <div class="clearfix"></div>	
		 </div>
         
         
         
         
	 </div>		 
</div>
         
         
	 </div>		 
</div>
<!---->




<div class="top-sellers">
	 <div class="container">
		 <h3>TOP - SELLERS</h3>
         <div class="seller-grids">
		
			 <?php
                 if(isset($seed_data))
        		{
            ?>
		 	 <div class="col-md-3 seller-grid">
             
             <?php
			//echo count($seed_data);die();

	
			 foreach($seed_data as $data)
				  {
				  
			?>			
		
					 <a href="<?php echo base_url("user/product/more_seed_product_view/".$data['seed_detail_id']);?>">
				 				<img src="<?php 
										if($data['seed_detail_id'])
										{
										echo base_url()?>image/<?php echo $data['image_name'];
										}					
										?>" alt="" style="height:170px;width:100%"/>
                  </a>
				 <h4><a href="products.html"><?php echo $data['seed_detail_name']; ?></a></h4>
				 <p>Payment Terms : <?php echo $data['payment_terms']?> </p>
								<p>Trade Terms : <?php echo $data['trade_terms']?></p>
								
                 <p><span class="fa fa-rupee "></span><span class="item_price"><b><?php echo $data['seed_price']?></b></span>		/-</p>
                 <?php }?>
			 </div>
         <?php } ?>
			 
             
             
          <?php
                 if(isset($fertilizer_data))
        		{
            ?>
		 	 <div class="col-md-3 seller-grid">
             
             <?php
			//echo count($fertilizer_data);die();

	
			 foreach($fertilizer_data as $data)
				  {
				  
			?>			
		
					 <a href="<?php echo base_url("user/product/more_fertilizer_product_view/".$data['fertilizer_detail_id']);?>">
				 				<img src="<?php 
										if($data['fertilizer_detail_id'])
										{
										echo base_url()?>image/<?php echo $data['image_name'];
										}					
										?>" alt="" style="height:170px;width:100%"/>
                  </a>
				 <h4><a href="products.html"><?php echo $data['fertilizer_detail_name']; ?></a></h4>
				 <p>Payment Terms : <?php echo $data['payment_terms']?> </p>
								<p>Trade Terms : <?php echo $data['trade_terms']?></p>
								
                 <p><span class="fa fa-rupee "></span><span class="item_price"><b><?php echo $data['fertilizer_price']?></b></span>		/-</p>
                 <?php }?>
			 </div>
         <?php } ?>
         
         
         
         
         
        <?php
                 if(isset($tools_data))
        		{
            ?>
		 	 <div class="col-md-3 seller-grid">
             
             <?php
			//echo count($tools_data);die();

	
			 foreach($tools_data as $data)
				  {
				  
			?>			
		
					 <a href="<?php echo base_url("user/product/more_tools_product_view/".$data['tools_detail_id']);?>">
				 				<img src="<?php 
										if($data['tools_detail_id'])
										{
										echo base_url()?>image/<?php echo $data['image_name'];
										}					
										?>" alt="" style="height:170px;width:100%"/>
                  </a>
				 <h4><a href="products.html"><?php echo $data['tools_detail_name']; ?></a></h4>
				 <p>Uses : <?php echo $data['tools_uses']?> </p>
								<p>Model_no : <?php echo $data['model_no']?></p>
								
                 <p><span class="fa fa-rupee "></span><span class="item_price"><b><?php echo $data['tools_price']?></b></span>		/-</p>
                 <?php }?>
			 </div>
         <?php } ?>
         
         
         
         <?php
                 if(isset($pesticide_data))
        		{
            ?>
		 	 <div class="col-md-3 seller-grid">
             
             <?php
			//echo count($pesticide_data);die();

	
			 foreach($pesticide_data as $data)
				  {
				  
			?>			
		
					 <a href="<?php echo base_url("user/product/more_pesticide_product_view/".$data['pesticide_detail_id']);?>">
				 				<img src="<?php 
										if($data['pesticide_detail_id'])
										{
										echo base_url()?>image/<?php echo $data['image_name'];
										}					
										?>" alt="" style="height:170px;width:100%"/>
                  </a>
				 <h4><a href="products.html"><?php echo $data['pesticide_detail_name']; ?></a></h4>
				 <p>Price Type : <?php echo $data['pesticide_price_type']?> </p>
								<p>Weight : <?php echo $data['pesticide_weight']?></p>
								
                 <p><span class="fa fa-rupee "></span><span class="item_price"><b><?php echo $data['pesticide_price']?></b></span>		/-</p>
                 <?php }?>
			 </div>
         <?php } ?> 
			 <div class="clearfix"></div>
		 </div>
	 </div>
</div>

<div class="recommendation">
	 <div class="container">
		 <div class="recmnd-head">
			 <h3>RECOMMENDATIONS FOR YOU</h3>
		 </div>
		 <div class="bikes-grids">			 
			 <ul id="flexiselDemo1">
				 <li>
					 <a href="products.html"><img src="images/ts1.jpg" alt=""/></a>	
					 <h4><a href="products.html">King Size Bed</a></h4>	
					 <p>ID: KS3989</p>
				 </li>
				 <li>
					 <a href="products.html"><img src="images/r2.jpg" alt=""/></a>	
					 <h4><a href="products.html">Elite Diwan Seater</a></h4>	
					 <p>ID: KS3989</p>
				 </li>
				 <li>
					 <a href="products.html"><img src="images/r3.jpg" alt=""/></a>
					 <h4><a href="products.html">Dior Corner Sofa</a></h4>	
					 <p>ID: KS3989</p>
				 </li>
				 <li>
					 <a href="products.html"><img src="images/r4.jpg" alt=""/></a>
					 <h4><a href="products.html">Alia Modular Sofa</a></h4>	
					 <p>ID: KS3989</p>
				 </li>
				 <li>
					 <a href="products.html"><img src="images/r5.jpg" alt=""/></a>	
					 <h4><a href="products.html">King Size Bed</a></h4>	
					 <p>ID: KS3989</p>					 
				 </li>
		    </ul>
			<script type="text/javascript">
			 $(window).load(function() {			
			  $("#flexiselDemo1").flexisel({
				visibleItems: 5,
				animationSpeed: 1000,
				autoPlay: true,
				autoPlaySpeed: 3000,    		
				pauseOnHover:true,
				enableResponsiveBreakpoints: true,
				responsiveBreakpoints: { 
					portrait: { 
						changePoint:480,
						visibleItems: 1
					}, 
					landscape: { 
						changePoint:640,
						visibleItems: 2
					},
					tablet: { 
						changePoint:768,
						visibleItems: 3
					}
				}
			});
			});
			</script>
			<script type="text/javascript" src="js/jquery.flexisel.js"></script>			 
	 </div>
	 </div>
</div>
<?php include_once("footer.php") ?>
</body>
</html>