<?php include("header.php"); ?>
<script type="text/javascript" src="<?php echo base_url()?>data/validation/jquery-1.10.2.js">
</script>
<script type="text/javascript" src="<?php echo base_url()?>data/validation/validate.js"></script>
<script>

$("document").ready(function(){
		$("#pesticide_type").change(function(){
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
				
				
	
		$("#update_pesticide").click(function(){
			//alert();
			var pesticide_type,pesticide_sub_type,pesticide_name,price,pesticide_price_type,pesticide_min_order,total_qty,model_no,origin_country,casno,pesticide_classification_id,pesticide_appearance_id,shipping_weight,weight,description;
			pesticide_type = test_drop("#pesticide_type","#msgpesticide_type");
			pesticide_sub_type = test_drop("#pesticide_sub_type","#msgpesticide_sub_type");
			pesticide_name = test_pesticidedetailname("#pesticide_name","#msgpesticide_name");
			pesticide_brand_name = test_pesticidebrandname("#pesticide_brand_name","#msgpesticide_brand_name");
			price = test_pesticideprice("#price","#msgprice");
			pesticide_min_order = test_pesticideminorder("#min_order","#msgmin_order");
			pesticide_price_type = test_ptype("#pesticide_price_type","#msgpesticide_price_type");
			total_qty = test_pesticidetotalqty("#total_qty","#msgtotal_qty");
			model_no = test_modelno("#model_no","#msgmodel_no");
			origin_country = test_drop("#origin_country","#msgorigin_country");
			pesticide_classification_id = test_drop("#pesticide_classification_id","#msgpesticide_classification_id");
			pesticide_appearance_id = test_drop("#pesticide_appearance_id","#msgpesticide_appearance_id");
			shipping_weight = test_shipp("#shipping_weight","#msgshipping_weight");
			weight = test_itemwight("#weight","#msgweight");
			casno = test_casno("#casno","#msgcasno");
			description = test_description("#description","#msgdescription");
			//pesticide_images = test_file("#pesticide_images","#msgpesticide_images");
	//alert(pesticide_name +","+ price +","+type +","+uses +","+total_qty +","+model_no+","+origin_country+","+color+","+fuel+","+drive+","+shipping_weight+","+engine_type+",,"+weight+","+material+","+eye_shape+","+package_detail+""+description);
			if(pesticide_type == true && pesticide_sub_type == true && pesticide_name == true && price == true  && total_qty == true && model_no == true && origin_country == true  && shipping_weight == true  && weight == true  &&  description == true && pesticide_price_type == true && pesticide_min_order == true && casno == true && pesticide_classification_id == true && pesticide_appearance_id == true)
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
									<h3>Update pesticide Detail</h3>
							</div>
							<div class="module-body">

								

									<br />
 <?php
					if(isset($select_update_data) && $select_update_data!="")
					{
						/*echo $select_update_data[0]["seed_detail_id"];
						die();*/
					?>
                    
				<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url('seller/seller_pesticide/seller_pesticide_update');?>" enctype="multipart/form-data">	
                <input type="hidden" name="pesticide_detail_id" id="pesticide_detail_id"  class="span8" value="<?php echo $select_update_data[0]['pesticide_detail_id'];?>">
                                       <input type="hidden" name="seller_id" id="seller_id"  class="span8" value="<?php echo $select_update_data[0]['seller_id'];?>">
                                       <div class="control-group">
                                    
											<label class="control-label" ><b>pesticide Type</b></label>
											<div class="controls">
												<div class="dropdown">
                                              
													<select tabindex="1" data-placeholder="Select here.."  id="pesticide_type" name="pesticide_type" class="dropdown-menu" role="menu" class="span8">
													<option  value="Select here..">Select pesticide Type..</option>
                                                    <?php
													
													foreach($pesticide_type as $data)
													{
														?>
													<option value="<?php echo $data['pesticide_type_id']?>"
                                                    <?php if(trim($data['pesticide_type_id'])==trim($select_update_data[0]['pesticide_type_id']))
															{
																echo "selected='selected'";
																
															}
															
															
													?>
                                                    
                                                    ><?php echo $data['pesticide_type_name']?></option>
													<?php
                                                    }
									
													?>
												</select>
                                                <!--<span class="help-inline" id="msgseed_type" style="float:right"></span>-->
												</div>
											</div>
										</div>
                                        
										<div class="control-group">
											<label class="control-label" ><b>pesticide Sub Type</b></label>
											<div class="controls">
												<div class="dropdown">
                                              <select tabindex="1" data-placeholder="Select here.."  id="pesticide_sub_type" name="pesticide_sub_type" class="dropdown-menu" role="menu" class="span8">
													<option value="Select here..">Select pesticide Type..</option>
                                                     <?php
													
													foreach($pesticide_sub_type as $data)
													{
														?>
													<option value="<?php echo $data['pesticide_subtype_id']?>"
                                                    <?php if(trim($data['pesticide_subtype_id'])==trim($select_update_data[0]['pesticide_subtype_id']))
															{
																echo "selected='selected'";
																
															}
															
															
													?>
                                                    
                                                    ><?php echo $data['pesticide_subtype_name']?></option>
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
											<label class="control-label" ><b>Pesticide Detail Name</b></label>
											<div class="controls">
												<input type="text" name="pesticide_name" id="pesticide_name" placeholder="Enter pesticide Detail name" class="span8" value="<?php echo $select_update_data[0]['pesticide_detail_name'];?>">
                                                <span class="help-inline" id="msgpesticide_name" style="color:#F00;position:absolute"></span>
												 </div>
										</div>
                                        
										  
										<div class="control-group">
											<label class="control-label" ><b>Pesticide Price</b></label>
											<div class="controls">
												<div class="input-append">
													<input type="text" placeholder="5.000" name="price" class="span8" id="price" value="<?php echo $select_update_data[0]['pesticide_price'];?>"><span class="add-on fa fa-rupee" ></span>
                                                   
												</div> <span class="help-inline" id="msgprice" style="color:#F00;position:absolute"></span>
											</div>
										</div>
 
										
                                         
                                        <div class="control-group">
											<label class="control-label" ><b>Pesticide Brand Name</b></label>
											<div class="controls">
												<input type="text" name="pesticide_brand_name" id="pesticide_brand_name" placeholder="Enter pesticide Detail name" class="span8" value="<?php echo $select_update_data[0]['pesticide_brand_name'];?>">
                                                <span class="help-inline" id="msgpesticide_brand_name" style="color:#F00;position:absolute"></span>						
										</div>
										</div>
                                        
                                        
                                        
                                        
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Pesticide Price Type</b></label>
                                            <div class="controls">
												<label class="radio inline">
													<input type="radio" name="pesticide_price_type" id="pesticide_price_type" value="Kilogram" <?php if($select_update_data[0]["pesticide_price_type"]=="Kilogram")echo "checked";?>>
													Kilogram
												</label> 
												<label class="radio inline">
													<input type="radio" name="pesticide_price_type" id="pesticide_price_type" value="Liter" <?php if($select_update_data[0]["pesticide_price_type"]=="Liter")echo "checked";?>>
													Liter
												</label> 
												<label class="radio inline">
													<input type="radio" name="pesticide_price_type" id="pesticide_price_type" value="Ton" <?php if($select_update_data[0]["pesticide_price_type"]=="Ton")echo "checked";?>>
													Ton
												</label>
                                                <label class="radio inline">
													<input type="radio" name="pesticide_price_type" id="pesticide_price_type" value="Beg" <?php if($select_update_data[0]["pesticide_price_type"]=="Beg")echo "checked";?>>
													Beg
												</label>
                                             
                                                <span class="help-inline" id="msgpesticide_price_type" style="color:#F00;position:absolute" ></span>
                                                </div>
											</div>
										
                                        
                                        
                                        
                                        
									  		
                                       <div class="control-group">
											<label class="control-label" ><b>Pesticide Total Qty</b></label>
											<div class="controls">
												
													<input type="text" placeholder="Enter Total Qty" id="total_qty" name="total_qty"class="span8" value="<?php echo $select_update_data[0]['pesticide_total_qty'];?>">
                                                    <span class="help-inline" id="msgtotal_qty" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                        
                                         <div class="control-group">
											<label class="control-label" style="width:260px;margin-left:-100px;"><b>Pesticide Minimum Order</b> </label>
											<div class="controls">
												<input type="text" placeholder="Enter Minimum Order" id="min_order" name="min_order"class="span8" value="<?php echo $select_update_data[0]['pesticide_min_order'];?>">
                                                    <span class="help-inline" id="msgmin_order" style="color:#F00;position:absolute"></span>
                                              </div>
										</div>
                                          
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Model No</b></label>
											<div class="controls">
												<input type="text" id="model_no" name="model_no" placeholder="Enter Pesticide Model no." class="span8" value="<?php echo $select_update_data[0]['model_no'];?>">				
                                                	<span class="help-inline" id="msgmodel_no" style="color:#F00;position:absolute"></span>						
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
													<option value="<?php echo $data['country_id']?>" 
                                                    <?php if(trim($data['country_id'])==trim($select_update_data[0]['origin_country']))
															{
																echo "selected='selected'";
																
															}
															
															
													?>
                                                    ><?php echo $data['country_name']?></option>
										<?php
                                     	            }
										?></select>
                                             </div>
										</div>
                                        
                                         
                                        
                                       
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Pesticide Classification</b></label>
											<div class="controls">
												<select tabindex="1" data-placeholder="Select here.." class="span8" name="pesticide_classification_id" id="pesticide_classification_id">
													<option value="Select here..">Select Classification..</option>
													 <?php
														
													foreach($classification as $data)
													{
										?>
													<option value="<?php echo $data['pesticide_classification_id']?>"
                                                     <?php if(trim($data['pesticide_classification_id'])==trim($select_update_data[0]['classification']))
															{
																echo "selected='selected'";
																
															}
															
															
													?>
                                                    ><?php echo $data['pesticide_classification_name']?></option>
										<?php
                                     	            }
										?></select>
                                             </div>
										</div>
                                          
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Pesticide Appearance</b></label>
											<div class="controls">
												<select tabindex="1" data-placeholder="Select here.." class="span8" name="pesticide_appearance_id" id="pesticide_appearance_id">
													<option value="Select here..">Select Appearance..</option>
													 <?php
														
													foreach($appearance as $data)
													{
										?>
													<option value="<?php echo $data['pesticide_appearance_id']?>"
                                                     <?php if(trim($data['pesticide_appearance_id'])==trim($select_update_data[0]['appearance']))
															{
																echo "selected='selected'";
																
															}
															
															
													?>
                                                    ><?php echo $data['pesticide_appearance_name']?></option>
										<?php
                                     	            }
										?></select>
                                             </div>
										</div>
                                        
                                           <div class="control-group">
											<label class="control-label" ><b>Pesticide Weight</b></label>
											<div class="controls">
												
													<input type="text" id="weight"name="weight" placeholder="Enter Weight" class="span8" value="<?php echo $select_update_data[0]['pesticide_weight'];?>">	
                                                    							<span class="help-inline" id="msgweight" style="color:#F00;position:absolute"></span>				
											</div>
										</div>
										
                                        
                                       <div class="control-group">
											<label class="control-label" style="width:260px;margin-left:-100px;"><b>Pesticide Shipping Weight</b></label>
											<div class="controls">
												
													<input type="text" id="shipping_weight" name="shipping_weight" placeholder="Enter Shipping Weight" class="span8" value="<?php echo $select_update_data[0]['pesticide_shipping_weight'];?>">	
                                                    		<span class="help-inline" id="msgshipping_weight" style="color:#F00;position:absolute"></span>						
											</div>
										</div>
                                       
                                       
                                       
                                        
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Pesticide CAS NO</b></label>
											<div class="controls">
												<input type="text" id="casno" name="casno" placeholder="Enter CAS No" class="span8" value="<?php echo $select_update_data[0]['cas_no'];?>">			
                                                <span class="help-inline" id="msgcasno" style="color:#F00;position:absolute"></span>		
                                             </div>
										</div>
                                        
                                     
                                        
                                        
                                        
                                        
                                       
                                       	<div class="control-group">
											<label class="control-label" ><b>Description</b></label>
											<div class="controls">
												<textarea class="span8" rows="5" id="description" name="description" placeholder="Enter Product Description"><?php echo $select_update_data[0]['description'];?></textarea>
                                             <span class="help-inline" id="msgdescription" style="color:#F00;position:absolute"></span>				</div>
										</div>
									
                               			
                                         
                                        
                                 <div class="control-group" >
											<div class="controls">
												<button type="submit" class="btn" name="update_pesticide" id="update_pesticide" >Update pesticide Detail</button>
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