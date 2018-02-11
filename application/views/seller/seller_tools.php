<?php include("header.php"); ?>
<script type="text/javascript" src="<?php echo base_url()?>data/validation/jquery-1.10.2.js">
</script>
<script type="text/javascript" src="<?php echo base_url()?>data/validation/validate.js"></script>
<script>
$("document").ready(function(){
		$("#add_tools").click(function(){
			//alert();
			var tools_name,price,type,uses,total_qty,model_no,origin_country,color,fuel,drive,shipping_weight,engine_type,weight,material,eye_shape,package_detail,description,tools_images;
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
			tools_images = test_file("#tools_images","#msgtools_images");
		//alert(tools_name +","+ price +","+type +","+uses +","+power_type +","+model_no+","+origin_country+","+color+","+fuel+","+drive+","+shipping_weight+","+engine_type+",,"+weight+","+material+","+eye_shape+","+package_detail+""+description+","+tools_images);
			if(tools_name == true && price == true && type == true && uses == true && total_qty == true && model_no == true && origin_country == true && color == true && fuel == true && drive == true && shipping_weight == true && engine_type == true && weight == true  && material == true && eye_shape == true && package_detail == true && description == true && tools_images == true
				 )
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
									<h3>Tools Forms</h3>
							</div>
							<div class="module-body">

								

									<br />

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url('seller/seller_tools/seller_tools_insert');?>" enctype="multipart/form-data">	
                                    
                               			<div class="control-group">
											<label class="control-label" ><b>Tools Detail Name</b></label>
											<div class="controls">
												<input type="text" name="tools_name" id="tools_name" placeholder="Enter Tools Detail name" class="span8">
                                                <span class="help-inline" id="msgtools_name" style="color:#F00;position:absolute"></span>
												 </div>
										</div>
                                        
										  
										<div class="control-group">
											<label class="control-label" ><b>Tools Price</b></label>
											<div class="controls">
												<div class="input-append">
													<input type="text" placeholder="5.000" name="price" class="span8" id="price"><span class="add-on fa fa-rupee"></span>
                                                   
												</div> <span class="help-inline" id="msgprice" style="color:#F00;position:absolute"></span>
											</div>
										</div>
 
										
                                         
                                        <div class="control-group">
											<label class="control-label" ><b>Tools detail Type</b></label>
											<div class="controls">
												<select tabindex="1" data-placeholder="Select here.." class="span8" name="type" id="type">
													<option value="Select here..">Select Detail Type..</option>
													 <?php
														
													foreach($tools_detail_type_id as $data)
													{
										if(trim($data['tools_type_id'])==trim($this->session->userdata("tools_type")))
													{?>
													<option value="<?php  echo $data['tools_detail_type_id']?>"><?php 
														echo $data['tools_detail_type_name'];
													}?>
                                                    </option>
										<?php
                                     	            }
										?></select>
                                             <!-- <span id="msgtype" class="help-inline">  							
											--></div>
										</div>
                                        
                                        
                                        
                                        
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Tools Uses</b></label>
											<div class="controls">
												
													<input type="text" placeholder="Enter Uses" id="uses" name="uses"class="span8">
                                                    <span class="help-inline" id="msguses" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                        
                                        
                                        
                                        
									  		
                                       <div class="control-group">
											<label class="control-label" ><b>Tools Total Qty</b></label>
											<div class="controls">
												
													<input type="text" placeholder="Enter Total Qty" id="total_qty" name="total_qty"class="span8">
                                                    <span class="help-inline" id="msgtotal_qty" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Model No</b></label>
											<div class="controls">
												<input type="text" id="model_no" name="model_no" placeholder="Enter Tools Model no." class="span8">					<span class="help-inline" id="msgmodel_no" style="color:#F00;position:absolute"></span>						
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
													<option value="<?php echo $data['country_id']?>"><?php echo $data['country_name']?></option>
										<?php
                                     	            }
										?></select>
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
													<option value="<?php echo $data['color_id']?>"><?php echo $data['color_name']?></option>
										<?php
                                     	            }
										?></select>
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
													<option value="<?php echo $data['tools_fuel_id']?>"><?php echo $data['tools_fuel_name']?></option>
										<?php
                                     	            }
										?></select>
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
													<option value="<?php echo $data['tools_drive_id']?>"><?php echo $data['tools_drive_name']?></option>
										<?php
                                     	            }
										?></select>
                                             </div>
										</div>
                                        
                                       <div class="control-group">
											<label class="control-label" ><b>Tools Shipping Weight</b></label>
											<div class="controls">
												
													<input type="text" id="shipping_weight" name="shipping_weight" placeholder="Enter Shipping Weight" class="span8">			<span class="help-inline" id="msgshipping_weight" style="color:#F00;position:absolute"></span>						
											</div>
										</div>
                                       
                                       
                                       
                                        
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Tools Engine Type</b></label>
											<div class="controls">
												<select tabindex="1" data-placeholder="Select here.." class="span8" name="engine_type" id="engine_type">
													<option value="Select here..">Select here..</option>
													 <?php
														
													foreach($engine_type as $data)
													{//echo "<pre>";print_r($data);die();
		
										?>
													<option value="<?php echo $data['tools_engine_id']?>"><?php echo $data['tools_engine_name'];?></option>
										<?php
                                     	            }
										?></select>
                                             </div>
										</div>
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Tools Weight</b></label>
											<div class="controls">
												
													<input type="text" id="weight"name="weight" placeholder="Enter Weight" class="span8">								<span class="help-inline" id="msgweight" style="color:#F00;position:absolute"></span>				
											</div>
										</div>
										
                                        
                                        
                                        
                                        
                                       <div class="control-group">
											<label class="control-label" ><b>Tools Material</b></label>
											<div class="controls">
												<input type="text" name="material" id="material" placeholder="Enter Tools Material" class="span8">
												<span class="help-inline" id="msgmaterial" style="color:#F00;position:absolute"></span>				</div>
										</div>
                                        
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Tools Eye Shape</b></label>
											<div class="controls">
												<input type="text" name="eye_shape" id="eye_shape" placeholder="Enter Tools Eye Shape" class="span8">
												<span class="help-inline" id="msgeye_shape" style="color:#F00;position:absolute"></span>				</div>
										</div>
                                        
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Tools Package Details</b></label>
											<div class="controls">
												<input type="text" name="package_detail" id="package_detail" placeholder="Enter Tools Package Details" class="span8">
												<span class="help-inline" id="msgpackage_detail" style="color:#F00;position:absolute"></span>				</div>
										</div>
                                        
                                       	<div class="control-group">
											<label class="control-label" ><b>Description</b></label>
											<div class="controls">
												<textarea class="span8" rows="5" id="description" name="description" placeholder="Enter Product Description"></textarea>
                                             <span class="help-inline" id="msgdescription" style="color:#F00;position:absolute"></span>				</div>
										</div>
                                        
                                          <div class="control-group">
											<label class="control-label" ><b>Profile</b></label>
											<div class="controls">
												<input type="file" id="tools_images" name="tools_images[]" class="span8" multiple >
                                         <span class="help-inline" id="msgtools_images" style="color:#F00;position:absolute"></span>				</div>
										</div>
                                        
                                        
                                 <div class="control-group">
											<div class="controls">
												<button type="submit" class="btn" name="add_tools" id="add_tools">Add Tools Detail</button>
											</div>
										</div>
									</form>
							</div>
						</div>

						

					<br />
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>