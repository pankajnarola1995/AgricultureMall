<?php include_once("header.php") ?>
<div class="mega_nav">
	 <div class="container">
		 <div class="menu_sec">
		 <!-- start header menu -->
		 <ul class="megamenu skyblue">
			 <li class="active grid"><a class="color1" href="<?php echo base_url("home")?>">Home</a></li>
			  <li class="grid"><a class="color2" href="<?php echo base_url("user/product/select_seed")?>"><b>Seeds</b></a>
				<div class="megapanel">
					<div class="row">
                    <?php
					$count_data=count($seed_type_data);
					for($j=0;$j<$count_data;$j++)
					{
					?>
						<div class="col1">
							<div class="h_nav">
								<h4><a href="<?php echo base_url('user/product/view_seed_type_detail/'.$seed_type_data[$j]->seed_type_id);?>"><?php echo $seed_type_data[$j]->seed_type_name; ?></a></h4>
								<ul>
                                <?php
								$count_data1=count($seed_subtype_data);
								for($i=0;$i<$count_data1;$i++)
								{
									if(trim($seed_type_data[$j]->seed_type_id)==trim($seed_subtype_data[$i]->seed_type_id))
									{
								?>
									<li>
                                    <a  href="<?php  echo base_url('user/product/view_seed_subtype_detail/'.$seed_subtype_data[$i]->seed_subtype_id);?>"><h5><b><?php echo $seed_subtype_data[$i]->seed_subtype_name; ?></b></h5>	</a>
                                    		<ul>
											<?php
                                   			 $count_data2=count($seed_submenu_data);
											 
                                   			 for($k=0;$k<$count_data2;$k++)
                                   				 {
													// echo $seed_submenu_data[$k]->seed_submenu_name ;echo $seed_subtype_data[$i]->seed_subtype_id."<br>";
													//echo rtrim($seed_submenu_data[$k]->seed_subtype_id). "==".$seed_subtype_data[$i]->seed_subtype_id."<br>";
							
                                     			   if(trim($seed_submenu_data[$k]->seed_subtype_id) == trim($seed_subtype_data[$i]->seed_subtype_id))
                                     			   {
													   //echo $seed_submenu_data[$k]->seed_submenu_name ;
                                   			 ?>
												<li><a  href="<?php echo base_url('user/product/view_seed_submenu_detail/'.$seed_submenu_data[$k]->seed_submenu_id);?>"><?php echo $seed_submenu_data[$k]->seed_submenu_name; ?></a></li>
                                             <?php
													}
												}
											?>

											</ul>
                           		    </li>
                                <?php
									}
								}
								?>
								</ul>	
							</div>							
						</div>
                        <?php 
					}
						?>
					</div>
	
    			</div>
				</li>
                
			  <li class="grid"><a class="color2" href="<?php echo base_url("user/product/select_fertilizer")?>"><b>fertilizers</b></a>
				<div class="megapanel">
					<div class="row">
                    <?php
					$count_data=count($fertilizer_type_data);
					for($j=0;$j<$count_data;$j++)
					{
					?>
						<div class="col1">
							<div class="h_nav">
								<h4><a href="<?php echo base_url('user/product/view_fertilizer_type_detail/'.$fertilizer_type_data[$j]->fertilizer_type_id);?>"><?php echo $fertilizer_type_data[$j]->fertilizer_type_name; ?></a></h4>
								<ul>
                                <?php
								$count_data1=count($fertilizer_subtype_data);
								for($i=0;$i<$count_data1;$i++)
								{
									if(trim($fertilizer_type_data[$j]->fertilizer_type_id)==trim($fertilizer_subtype_data[$i]->fertilizer_type_id))
									{
								?>
									<li>
                                    <a  href="<?php  echo base_url('user/product/view_fertilizer_subtype_detail/'.$fertilizer_subtype_data[$i]->fertilizer_subtype_id);?>"><h5><b><?php echo $fertilizer_subtype_data[$i]->fertilizer_subtype_name; ?></b></h5>	</a>
                                    		<ul>
											<?php
                                   			 $count_data2=count($fertilizer_submenu_data);
											 
                                   			 for($k=0;$k<$count_data2;$k++)
                                   				 {
													// echo $fertilizer_submenu_data[$k]->fertilizer_submenu_name ;echo $fertilizer_subtype_data[$i]->fertilizer_subtype_id."<br>";
													//echo rtrim($fertilizer_submenu_data[$k]->fertilizer_subtype_id). "==".$fertilizer_subtype_data[$i]->fertilizer_subtype_id."<br>";
							
                                     			   if(trim($fertilizer_submenu_data[$k]->fertilizer_subtype_id) ==  trim($fertilizer_subtype_data[$i]->fertilizer_subtype_id))
                                     			   {
													   //echo $fertilizer_submenu_data[$k]->fertilizer_submenu_name ;
                                   			 ?>
												<li><a  href="<?php echo base_url('user/product/view_fertilizer_submenu_detail/'.$fertilizer_submenu_data[$k]->fertilizer_submenu_id);?>"><?php echo $fertilizer_submenu_data[$k]->fertilizer_submenu_name; ?></a></li>
                                             <?php
													}
												}
											?>

											</ul>
                           		    </li>
                                <?php
									}
								}
								?>
								</ul>	
							</div>							
						</div>
                        <?php 
					}
						?>
					</div>
	
    			</div>
				</li>				
				<li class="grid"><a class="color4" href="#"><b>Agro Tools</b></a>
				<div class="megapanel">
					<div class="row">
                    <?php
					$count_data6=count($tools_type_data);
					for($j=0;$j<$count_data6;$j++)
					{
					?>
						<div class="col1">
							<div class="h_nav">
								<h4><?php echo $tools_type_data[$j]->tools_type_name; ?></h4>
								<ul>
                                <?php
								$count_data7=count($tools_subtype_data);
								for($i=0;$i<$count_data7;$i++)
								{
									if(trim($tools_type_data[$j]->tools_type_id)==trim($tools_subtype_data[$i]->tools_type_id))
									{
								?>
									<li>
                                    <a href="<?php echo base_url("user/product")?>"><h5><b><?php echo $tools_subtype_data[$i]->tools_subtype_name; ?></b></h5>	</a>
                           		    </li>
                                <?php
									}
								}
								?>
								</ul>	
							</div>							
						</div>
                        <?php 
					}
						?>
					</div>
				
    			</div>
				</li>
				<li class="grid"><a class="color4" href="#"><b>Agro pesticide</b></a>
				<div class="megapanel">
					<div class="row">
                    <?php
					$count_data6=count($pesticide_type_data);
					for($j=0;$j<$count_data6;$j++)
					{
					?>
						<div class="col1">
							<div class="h_nav">
								<h4><?php echo $pesticide_type_data[$j]->pesticide_type_name; ?></h4>
								<ul>
                                <?php
								$count_data7=count($pesticide_subtype_data);
								for($i=0;$i<$count_data7;$i++)
								{
									if(trim($pesticide_type_data[$j]->pesticide_type_id)==trim($pesticide_subtype_data[$i]->pesticide_type_id))
									{
								?>
									<li>
                                    <a href="<?php echo base_url("user/product")?>"><h5><b><?php echo $pesticide_subtype_data[$i]->pesticide_subtype_name; ?></b></h5>	</a>
                           		    </li>
                                <?php
									}
								}
								?>
								</ul>	
							</div>							
						</div>
                        <?php 
					}
						?>
					</div>
				
    			</div>
				</li>				
			
								
			
								
			   </ul> 
			   <div class="search">
				 <form action="<?php echo base_url() ?>home/parts">
					<input type="text" value="" name="place" placeholder="Search..." class="biginput" id="autocomplete" style="padding:10px;margin-bottom:-15px;width:250px">
                    <input type="submit" value="">
					
					</form>
			 </div>
            
			 <div class="clearfix"></div>
		 </div>
	  </div>
</div>