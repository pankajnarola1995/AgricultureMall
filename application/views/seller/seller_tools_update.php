<?php include("header.php"); ?>
<script type="text/javascript" src="<?php echo base_url()?>data/validation/jquery-1.10.2.js">
</script>
<script type="text/javascript" src="<?php echo base_url()?>data/validation/validate.js"></script>
<script>

$("document").ready(function(){
		$("#tools_type").change(function(){
							var id = $(this).val();
					//alert();
					if(id == "Select here..")
					{	
					$("#seed_sub_menu").hide();
					//alert();
					}
					else
					{
						//alert(id);
						$.ajax({
							url:"<?php echo base_url("seller/seller_seed/select_seed_sub_type")?>",
							type:"post",
							data:{seed_type_id:id},
							success:function(result){
								// calert(result);
								$("#seed_sub_type").html(result);
							}
						});
					}
				
				});
				
				
	
		$("#update_tools").click(function(){
			//alert();
			var tools_type,tools_sub_type,tools_name,price,type,uses,total_qty,model_no,origin_country,color,fuel,drive,shipping_weight,engine_type,weight,material,eye_shape,package_detail,description;
			tools_type = test_drop("#tools_type","#msgtools_type");
			tools_sub_type = test_drop("#tools_sub_type","#msgtools_sub_type");
			tools_name = test_toolsdetailname("#tools_name","#msgtools_name");
			price = test_toolsprice("#price","#msgprice");
			type = test_drop("#type","#msgtype");
			uses = test_toolsuses("#uses","#msguses");
			total_qty = test_toolstotalqty("#total_qty","#msgtotal_qty");
			model_no = test_modelno("#model_no","#msgmodel_no");
			origin_country = test_drop("#origin_country","#msgorigin_country");
			color = test_drop("#color","#msgcolor");
			fuel = test_drop("#fuel","#msgfuel");
			drive = test_drop("#drive","#msgdrive");
			shipping_weight = test_shipp("#shipping_weight","#msgshipping_weight");
			engine_type = test_drop("#engine_type","#msgengine_type");
			weight = test_itemwight("#weight","#msgweight");
			material = test_material("#material","#msgmaterial");
			eye_shape = test_eye_shape("#eye_shape","#msgeye_shape");
			package_detail = test_package_detail("#package_detail","#msgpackage_detail");
			description = test_description("#description","#msgdescription");
			//tools_images = test_file("#tools_images","#msgtools_images");
	//alert(tools_name +","+ price +","+type +","+uses +","+total_qty +","+model_no+","+origin_country+","+color+","+fuel+","+drive+","+shipping_weight+","+engine_type+",,"+weight+","+material+","+eye_shape+","+package_detail+""+description);
			if(tools_type == true && tools_sub_type == true && tools_name == true && price == true && type == true && uses == true && total_qty == true && model_no == true && origin_country == true && color == true && fuel == true && drive == true && shipping_weight == true && engine_type == true && weight == true  && material == true && eye_shape == true && package_detail == true && description == true  )
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

		

				<div class="span9">
					<div class="content">

						<div class="module">
							<div class="module-head">
									<h3>Update Tools Detail</h3>
							</div>
							<div class="module-body">

								

									<br />
 <?php
					if(isset($select_update_data) && $select_update_data!="")
					{
						/*echo $select_update_data[0]["seed_detail_id"];
						die();*/
					?>
                    
				<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url('seller/seller_tools/seller_tools_update');?>" enctype="multipart/form-data">	
                <input type="hidden" name="tools_detail_id" id="tools_detail_id"  class="span8" value="<?php echo $select_update_data[0]['tools_detail_id'];?>">
                                       <input type="hidden" name="seller_id" id="seller_id"  class="span8" value="<?php echo $select_update_data[0]['seller_id'];?>">
                                       <div class="control-group">
                                    
											<label class="control-label" ><b>Tools Type</b></label>
											<div class="controls">
												<div class="dropdown">
                                              
													<select tabindex="1" data-placeholder="Select here.."  id="tools_type" name="tools_type" class="dropdown-menu" role="menu" class="span8">
													<option  value="Select here..">Select Tools Type..</option>
                                                    <?php
													
													foreach($tools_type as $data)
													{
														?>
													<option value="<?php echo $data['tools_type_id']?>"
                                                    <?php if(trim($data['tools_type_id'])==trim($select_update_data[0]['tools_type_id']))
															{
																echo "selected='selected'";
																
															}
															
															
													?>
                                                    
                                                    ><?php echo $data['tools_type_name']?></option>
													<?php
                                                    }
									
													?>
												</select>
                                                <!--<span class="help-inline" id="msgseed_type" style="float:right"></span>-->
												</div>
											</div>
										</div>
                                        
										<div class="control-group">
											<label class="control-label" ><b>Tools Sub Type</b></label>
											<div class="controls">
												<div class="dropdown">
                                              <select tabindex="1" data-placeholder="Select here.."  id="tools_sub_type" name="tools_sub_type" class="dropdown-menu" role="menu" class="span8">
													<option value="Select here..">Select Tools Type..</option>
                                                     <?php
													
													foreach($tools_sub_type as $data)
													{
														?>
													<option value="<?php echo $data['tools_subtype_id']?>"
                                                    <?php if(trim($data['tools_subtype_id'])==trim($select_update_data[0]['tools_subtype_id']))
															{
																echo "selected='selected'";
																
															}
															
															
													?>
                                                    
                                                    ><?php echo $data['tools_subtype_name']?></option>
													<?php
                                                    }
									
													?>
                                                    </select>
                                                <!--<span id="msgseed_sub_type" style="float:right">-->
                                                  </span>
                                                 
                                              
												</div>
											</div>
										</div>
										 
					
									
                               			<div class="control-group">
											<label class="control-label" ><b>Tools Name</b></label>
											<div class="controls">
												<input type="text" name="tools_name" id="tools_name" placeholder="Type Tools Detail name" class="span8" value="<?php echo $select_update_data[0]['tools_detail_name'];?>">
												<span class="help-inline" id="msgtools_name" style="color:#F00;position:absolute"></span>
											 </div>
										</div>
                                        
										
                                        <div class="control-group">
											<label class="control-label" ><b>Tools Price</b></label>
											<div class="controls">
												<div class="input-append">
													<input type="text" id="price" placeholder="5.000" name="price"class="span8" value="<?php echo $select_update_data[0]['tools_price'];?>">								
                                                    <span class="add-on"><span class="fa fa-rupee" style="float:left"></span></span>   
												</div><label id="msgprice"  class="help-inline" style="color:#F00;position:absolute" ></label>	
											</div>
										</div>


 
										
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Tools Detail Type</b></label>
											<div class="controls">
												<select tabindex="1" data-placeholder="Select here.." class="span8" name="type" id="type">
													<option value="Select here..">Select Detail Type..</option>
													 <?php
													
													foreach($tools_detail_type_id as $data)
													{
														if(trim($data['tools_type_id'])==trim($select_update_data[0]['tools_type_id']))
														{
														?>
													<option value="<?php echo $data['tools_detail_type_id']?>"
                                                    <?php if(trim($data['tools_detail_type_id'])==trim($select_update_data[0]['tools_detail_type_id']))
															{
																echo "selected='selected'";
																
															}
															
															
													?>
                                                    
                                                    ><?php echo $data['tools_detail_type_name']?></option>
													<?php
														}
                                                    }
									
													?>
                                                     
													 </select>
                                              <!--<span id="msgtype" class="help-inline">  							-->
											</div>
										</div>
                                        
                                        
                                        
                                        
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Tools Uses</b></label>
											<div class="controls">
												
													<input type="text" placeholder="uses" id="uses" name="uses"class="span8" value="<?php echo $select_update_data[0]['tools_uses'];?>">
                                                    <span id="msguses" class="help-inline" style="color:#F00;position:absolute">
												
											</div>
										</div>
                                        
                                        
                                        
                                        
									  		
                                       <div class="control-group">
											<label class="control-label" ><b>Tools Total Qty</b></label>
											<div class="controls">
												
													<input type="text" placeholder="Enter Total Qty" id="total_qty" name="total_qty"class="span8" value="<?php echo $select_update_data[0]['tools_total_qty'];?>">
                                                    <span class="help-inline" id="msgtotal_qty" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Model No</b></label>
											<div class="controls">
												<input type="text" id="model_no" name="model_no" placeholder="Type Tools Model no." class="span8" value="<?php echo $select_update_data[0]['model_no'];?>">					<span id="msgmodel_no" class="help-inline" style="color:#F00;position:absolute">							
											</div>
										</div>
                                        <div class="control-group">
											<label class="control-label" ><b>Origin Country</b></label>
											<div class="controls">
												<select tabindex="1" data-placeholder="Select here.." class="span8" name="origin_country" id="origin_country">
													<option value="Select here..">Select Country..</option>
													<?php
														
													foreach($origin_country as $data)
													{
										?>
													<option  value="<?php echo $data['country_id']?> " <?php if(trim($data['country_id'])==trim($select_update_data[0]['origin_country']))
															{
																echo "selected='selected'";
																
															}
															
															
													?> > 	<?php echo $data['country_name']?></option>
										<?php
                                     	            }
										?> 
                                                     </select>
                                             <!-- <span id="msgorigin_country" class="help-inline">  							-->
											</div>
										</div>
                                        
                                         
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Tools Color</b> </label>
											<div class="controls">
												<select tabindex="1" data-placeholder="Select here.." class="span8" name="color" id="color">
													<option value="Select here..">Select Color..</option>
													<?php
													
													foreach($color as $data)
													{
														?>
													<option value="<?php echo $data['color_id']?>"
                                                    <?php if(trim($data['color_id'])==trim($select_update_data[0]['color_id']))
															{
																echo "selected='selected'";
																
															}
															
															
													?>
                                                    
                                                    ><?php echo $data['color_name']?></option>
													<?php
                                                    }
									
													?>
                                                     </select>
                                              <!--<span id="msgcolor" class="help-inline">  							-->
											</div>
										</div>
                                          
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Tools Fuel</b></label>
											<div class="controls">
												<select tabindex="1" data-placeholder="Select here.." class="span8" name="fuel" id="fuel">
													<option value="Select here..">Select Fuel..</option>
													 <?php
													
													foreach($fuel as $data)
													{
														?>
													<option value="<?php echo $data['tools_fuel_id']?>"
                                                    <?php if(trim($data['tools_fuel_id'])==trim($select_update_data[0]['tools_fuel_id']))
															{
																echo "selected='selected'";
																
															}
															
															
													?>
                                                    
                                                    ><?php echo $data['tools_fuel_name']?></option>
													<?php
                                                    }
									
													?>
                                                     </select>
                                             <!-- <span id="msgfuel" class="help-inline">  							-->
											</div>
										</div>
                                          
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Tools Drive</b></label>
											<div class="controls">
												<select tabindex="1" data-placeholder="Select here.." class="span8" name="drive" id="drive">
													<option value="Select here..">Select Drive..</option>
													 <?php
													
													foreach($drive as $data)
													{
														?>
													<option value="<?php echo $data['tools_drive_id']?>"
                                                    <?php if(trim($data['tools_drive_id'])==trim($select_update_data[0]['tools_drive_id']))
															{
																echo "selected='selected'";
																
															}
															
															
													?>
                                                    
                                                    ><?php echo $data['tools_drive_name']?></option>
													<?php
                                                    }
									
													?>
                                                     </select>
                                             <!-- <span id="msgdrive" class="help-inline">  							-->
											</div>
										</div>
                                        
                                       <div class="control-group">
											<label class="control-label" ><b>Tools Shipping Weight</b></label>
											<div class="controls">
												
													<input type="text" id="shipping_weight" name="shipping_weight" placeholder="5.000" class="span8" value="<?php echo $select_update_data[0]['tools_shipping_weight'];?>">			<span id="msgshipping_weight" class="help-inline" style="color:#F00;position:absolute">													
												
											</div>
										</div>
                                       
                                       
                                       
                                        
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Tools Engine Type</b></label>
											<div class="controls">
												<select tabindex="1" data-placeholder="Select here.." class="span8" name="engine_type" id="engine_type">
													<option value="Select here..">Select Engine Type..</option>
													 <?php
													
													foreach($engine_type as $data)
													{
														?>
													<option value="<?php echo $data['tools_engine_id']?>"
                                                    <?php if(trim($data['tools_engine_id'])==trim($select_update_data[0]['tools_engine_id']))
															{
																echo "selected='selected'";
																
															}
															
															
													?>
                                                    
                                                    ><?php echo $data['tools_engine_name']?></option>
													<?php
                                                    }
									
													?>
                                                     </select>
                                              <!--<span id="msgengine_type" class="help-inline">  							-->
											</div>
										</div>
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Tools Weight</b></label>
											<div class="controls">
												
													<input type="text" id="weight"name="weight" placeholder="weight" class="span8" value="<?php echo $select_update_data[0]['tools_weight'];?>">								<span id="msgweight" class="help-inline" style="color:#F00;position:absolute">								
												
											</div>
										</div>
										
                                        
                                        
                                        
                                        
                                       <div class="control-group">
											<label class="control-label" ><b>Tools Material</b></label>
											<div class="controls">
												<input type="text" name="material" id="material" placeholder="Type Tools material" class="span8" value="<?php echo $select_update_data[0]['tools_material'];?>">
												<span class="help-inline" id="msgmaterial" style="color:#F00;position:absolute" ></span>
											</div>
										</div>
                                        
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Tools Eye Shape</b></label>
											<div class="controls">
												<input type="text" name="eye_shape" id="eye_shape" placeholder="Type Tools eye shape" class="span8" value="<?php echo $select_update_data[0]['tools_eye_shape'];?>">
												<span class="help-inline" id="msgeye_shape" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                        
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Tools Package Details</b></label>
											<div class="controls">
												<input type="text" name="package_detail" id="package_detail" placeholder="Type Tools package details" class="span8" value="<?php echo $select_update_data[0]['tools_package_detail'];?>">
												<span class="help-inline" id="msgpackage_detail" style="color:#F00;position:absolute" ></span>
											</div>
										</div>
                                        
                                       	<div class="control-group">
											<label class="control-label" ><b>Description</b></label>
											<div class="controls">
												<textarea class="span8" rows="5" id="description" name="description" placeholder="Product Description"><?php echo $select_update_data[0]['description'];?></textarea>
                                               <span id="msgdescription" class="help-inline" style="color:#F00;position:absolute"> 							
											</div>
										</div>
                                        
                                         
                                        
                                 <div class="control-group">
											<div class="controls">
												<button type="submit" class="btn" name="update_tools" id="update_tools">Update Tools Detail</button>
											</div>
										</div>
									</form>
                                      <?php
									}
									
									
									?>
							</div>
						</div>

						

					<br />
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>