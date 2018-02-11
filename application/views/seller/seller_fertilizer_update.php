<?php
if($this->session->userdata("seller_login_id")!="")
{
}
else
{
	redirect("seller/seller");
}
?>
<?php include("header.php"); ?>

<script type="text/javascript" src="<?php echo base_url()?>data/validation/jquery-1.10.2.js">
</script>
<script type="text/javascript" src="<?php echo base_url()?>data/validation/validate.js"></script>


	<script>
			$(document).ready(function(){
			//	alert("sss");
				$("#fertilizer_type").change(function(){
					var id = $(this).val();
					//alert();
					if(id == "Select here..")
					{	//alert();
					}
					else
					{
						//alert(id);
						$.ajax({
							url:"<?php echo base_url("seller/seller_fertilizer/select_fertilizer_sub_type")?>",
							type:"post",
							data:{fertilizer_type_id:id},
							success:function(result){
								// calert(result);
								$("#fertilizer_sub_type").html(result);
							}
						});
					}
				
				});
				
				$("#fertilizer_sub_type").change(function(){
					
					var id = $(this).val();
					//alert(id);
					if(id == "Select here..")
					{	//alert();
					$("#fertilizer_sub_menu").hide();
					}
					else
					{
						
						//alert(id);
						$.ajax({
							url:"<?php echo base_url("seller/seller_fertilizer/select_fertilizer_submenu_type")?>",
							type:"post",
							data:{fertilizer_subtype_id:id},
							success:function(result){
								//alert(result);
								if(result!=='')
								{
								$("#fertilizer_sub_menu").html(result);
								$("#fertilizer_sub_menu").show();
								}
								else
								{
									$("#fertilizer_sub_menu").hide();
								}
								
							}
						});
						
					}
				
				});
		//alert("sss");
	
		$("#update_fertilizer").click(function(){
			//alert("sss");
			 <?php
			 
													if($select_update_data[0]['fertilizer_submenu_id']!=NULL)
													{
														?>
			var fertilizer_data_name,fertilizer_price,fertilizer_price_type,fertilizer_total_qty,fertilizer_min_order,model_no,classification,appearance,payment_terms,trade_terms,origin_country,hs_code,description,fertilizer_type,fertilizer_sub_type,fertilizer_sub_menu;
			//var fname1=getElementById("#fname").value;
			
			fertilizer_type = test_drop("#fertilizer_type","#msgfertilizer_type");
			fertilizer_sub_type = test_drop("#fertilizer_sub_type","#msgfertilizer_sub_type");
			fertilizer_sub_menu = test_drop("#fertilizer_sub_menu_type","#msgfertilizer_sub_menu_type");
			
			fertilizer_data_name = test_fertilizerdetailname("#fertilizer_data_name","#msgfertilizer_data_name");
			fertilizer_price = test_fertilizerprice("#fertilizer_price","#msgfertilizer_price");
			fertilizer_price_type = test_ptype("#fertilizer_price_type","#msgfertilizer_price_type");
			fertilizer_total_qty = test_fertilizertotalqty("#fertilizer_total_qty","#msgfertilizer_total_qty");
			fertilizer_min_order = test_fertilizerminorder("#fertilizer_min_order","#msgfertilizer_min_order");
			model_no = test_modelno("#model_no","#msgmodel_no");
			classification = test_drop("#classification","#msgclassification");
			appearance = test_drop("#appearance","#msgappearance");
			payment_terms = test_check("#payment_terms","#msgpayment_terms")
			trade_terms = test_check("#trade_terms","#msgtrade_terms")
			origin_country = test_drop("#origin_country","#msgorigin_country");
			hs_code = test_hscodeno("#hs_code","#msghs_code");
			description = test_description("#description","#msgdescription");
			
			//alert(fertilizer_type +","+ fertilizer_sub_type +","+fertilizer_sub_menu +","+fertilizer_data_name +","+fertilizer_price +","+fertilizer_price_type+","+fertilizer_total_qty+","+fertilizer_min_order+","+model_no+","+classification+","+appearance+","+origin_country+","+description+","+payment_terms+","+trade_terms+","+hs_code);
			if(fertilizer_data_name == true && fertilizer_price == true && fertilizer_price_type == true && fertilizer_total_qty == true
				&& fertilizer_min_order == true && model_no == true && classification == true && appearance == true && payment_terms == true &&
				 trade_terms == true && origin_country == true && hs_code == true && description == true  && fertilizer_type == true && fertilizer_sub_type == true  && fertilizer_sub_menu == true )
			//alert(fertilizer_data_name +","+ fertilizer_price +","+fertilizer_price_type +","+fertilizer_total_qty +","+fertilizer_min_order +","+cultivation_type+","+model_no+","+payment_terms+","+trade_terms+","+item_weight+","+shipping_weight+","+origin_country+","+description);
			{
				return true;
				
			}
			else
			{
				return false;
			}
			 <?php
                                                    }
													else
													{?>
													if("#fertilizer_sub_menu_type")
													{
														var fertilizer_data_name,fertilizer_price,fertilizer_price_type,fertilizer_total_qty,fertilizer_min_order,model_no,classification,appearance,payment_terms,trade_terms,origin_country,hs_code,description,fertilizer_type,fertilizer_sub_type,fertilizer_sub_menu;
			//var fname1=getElementById("#fname").value;
			
			fertilizer_type = test_drop("#fertilizer_type","#msgfertilizer_type");
			fertilizer_sub_type = test_drop("#fertilizer_sub_type","#msgfertilizer_sub_type");
			fertilizer_sub_menu = test_drop("#fertilizer_sub_menu_type","#msgfertilizer_sub_menu_type");
			
			fertilizer_data_name = test_fertilizerdetailname("#fertilizer_data_name","#msgfertilizer_data_name");
			fertilizer_price = test_fertilizerprice("#fertilizer_price","#msgfertilizer_price");
			fertilizer_price_type = test_ptype("#fertilizer_price_type","#msgfertilizer_price_type");
			fertilizer_total_qty = test_fertilizertotalqty("#fertilizer_total_qty","#msgfertilizer_total_qty");
			fertilizer_min_order = test_fertilizerminorder("#fertilizer_min_order","#msgfertilizer_min_order");
			model_no = test_modelno("#model_no","#msgmodel_no");
			classification = test_drop("#classification","#msgclassification");
			appearance = test_drop("#appearance","#msgappearance");
			payment_terms = test_check("#payment_terms","#msgpayment_terms")
			trade_terms = test_check("#trade_terms","#msgtrade_terms")
			origin_country = test_drop("#origin_country","#msgorigin_country");
			hs_code = test_hscodeno("#hs_code","#msghs_code");
			description = test_description("#description","#msgdescription");
			
			//alert(fertilizer_type +","+ fertilizer_sub_type +","+fertilizer_sub_menu +","+fertilizer_data_name +","+fertilizer_price +","+fertilizer_price_type+","+fertilizer_total_qty+","+fertilizer_min_order+","+model_no+","+classification+","+appearance+","+origin_country+","+description+","+payment_terms+","+trade_terms+","+hs_code);
			if(fertilizer_data_name == true && fertilizer_price == true && fertilizer_price_type == true && fertilizer_total_qty == true
				&& fertilizer_min_order == true && model_no == true && classification == true && appearance == true && payment_terms == true &&
				 trade_terms == true && origin_country == true && hs_code == true && description == true  && fertilizer_type == true && fertilizer_sub_type == true  && fertilizer_sub_menu == true)
			{
				return true;
				
			}
			else
			{
				return false;
			}
													}else
													{
													var fertilizer_data_name,fertilizer_price,fertilizer_price_type,fertilizer_total_qty,fertilizer_min_order,model_no,classification,appearance,payment_terms,trade_terms,origin_country,hs_code,description,fertilizer_type,fertilizer_sub_type;
			//var fname1=getElementById("#fname").value;
			
			fertilizer_type = test_drop("#fertilizer_type","#msgfertilizer_type");
			fertilizer_sub_type = test_drop("#fertilizer_sub_type","#msgfertilizer_sub_type");
			//fertilizer_sub_menu = test_drop("#fertilizer_sub_menu_type","#msgfertilizer_sub_menu_type");
			
			fertilizer_data_name = test_fertilizerdetailname("#fertilizer_data_name","#msgfertilizer_data_name");
			fertilizer_price = test_fertilizerprice("#fertilizer_price","#msgfertilizer_price");
			fertilizer_price_type = test_ptype("#fertilizer_price_type","#msgfertilizer_price_type");
			fertilizer_total_qty = test_fertilizertotalqty("#fertilizer_total_qty","#msgfertilizer_total_qty");
			fertilizer_min_order = test_fertilizerminorder("#fertilizer_min_order","#msgfertilizer_min_order");
			model_no = test_modelno("#model_no","#msgmodel_no");
			classification = test_drop("#classification","#msgclassification");
			appearance = test_drop("#appearance","#msgappearance");
			payment_terms = test_check("#payment_terms","#msgpayment_terms")
			trade_terms = test_check("#trade_terms","#msgtrade_terms")
			origin_country = test_drop("#origin_country","#msgorigin_country");
			hs_code = test_hscodeno("#hs_code","#msghs_code");
			description = test_description("#description","#msgdescription");
		
		//alert(fertilizer_type +","+ fertilizer_sub_type +","+fertilizer_data_name +","+fertilizer_price +","+fertilizer_price_type+","+fertilizer_total_qty+","+fertilizer_min_order+","+model_no+","+classification+","+appearance+","+origin_country+","+description+","+payment_terms+","+trade_terms+","+hs_code);
		
			if(fertilizer_data_name == true && fertilizer_price == true && fertilizer_price_type == true && fertilizer_total_qty == true
				&& fertilizer_min_order == true && model_no == true && classification == true && appearance == true && payment_terms == true &&
				 trade_terms == true && origin_country == true && hs_code == true && description == true  && fertilizer_type == true && fertilizer_sub_type == true )
			{
				return true;
				
			}
			else
			{
				return false;
			}
													}
													<?php
													 }
									
													?>  
			
		});
	
	});
</script>

				<div class="span9">
					<div class="content">

						<div class="module">
							<div class="module-head">
								<h3>Update fertilizer Detail</h3>
							</div>
							<div class="module-body">
                            <div class="module-body">

									<!--<div class="alert">
										<button type="button" class="close" data-dismiss="alert">×</button>
										<strong>Warning!</strong> Something fishy here!
									</div>
									<div class="alert alert-error">
										<button type="button" class="close" data-dismiss="alert">×</button>
										<strong>Oh snap!</strong> Whats wrong with you? 
									</div>
									<div class="alert alert-success">
										<button type="button" class="close" data-dismiss="alert">×</button>
										<strong>Well done!</strong> Now you are listening me :) 
									</div>
-->
								

									
							</div>
						</div>
					
                    <?php
					if(isset($select_update_data) && $select_update_data!="")
					{
						/*echo $select_update_data[0]["fertilizer_detail_id"];
						die();*/
					?>
                    
				<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url('seller/seller_fertilizer/seller_fertilizer_update');?>" >	
                <input type="hidden" name="fertilizer_detail_id" id="fertilizer_detail_id"  class="span8" value="<?php echo $select_update_data[0]['fertilizer_detail_id'];?>">
                                       <input type="hidden" name="seller_id" id="seller_id"  class="span8" value="<?php echo $select_update_data[0]['seller_id'];?>">
                                     <div class="control-group">
                                    
											<label class="control-label" ><b>fertilizer Type</b></label>
											<div class="controls">
												<div class="dropdown">
                                              
													<select tabindex="1" data-placeholder="Select here.."  id="fertilizer_type" name="fertilizer_type" class="dropdown-menu" role="menu" class="span8">
													<option  value="Select here..">Select fertilizer Type..</option>
                                                    <?php
													
													foreach($fertilizer_type as $data)
													{
														?>
													<option value="<?php echo $data['fertilizer_type_id']?>"
                                                    <?php if($data['fertilizer_type_id']==$select_update_data[0]['fertilizer_type_id'])
															{
																echo "selected='selected'";
																
															}
															
															
													?>
                                                    
                                                    ><?php echo $data['fertilizer_type_name']?></option>
													<?php
                                                    }
									
													?>
												</select>
                                                <!--<span class="help-inline" id="msgfertilizer_type" style="float:right"></span>-->
												</div>
											</div>
										</div>
                                        
										<div class="control-group">
											<label class="control-label" ><b>fertilizer Sub Type</b></label>
											<div class="controls">
												<div class="dropdown">
                                              <select tabindex="1" data-placeholder="Select here.."  id="fertilizer_sub_type" name="fertilizer_sub_type" class="dropdown-menu" role="menu" class="span8">
													<option value="Select here..">Select fertilizer Type..</option>
                                                     <?php
													
													foreach($fertilizer_sub_type as $data)
													{
														?>
													<option value="<?php echo $data['fertilizer_subtype_id']?>"
                                                    <?php if($data['fertilizer_subtype_id']==trim($select_update_data[0]['fertilizer_subtype_id']))
															{
																echo "selected='selected'";
																
															}
															
															
													?>
                                                    
                                                    ><?php echo $data['fertilizer_subtype_name']?></option>
													<?php
                                                    }
									
													?>
                                                    </select>
                                                <!--<span id="msgfertilizer_sub_type" style="float:right">-->
                                                  </span>
                                                 
                                              
												</div>
											</div>
										</div>
										 
										<div class="control-group" id="fertilizer_submenudiv">
											<label class="control-label" ><b>fertilizer Sub Menu Type</b></label>
											<div class="controls">
												<div class="dropdown">
                                               
                                                <span id="fertilizer_sub_menu">
                                                  <?php
													if($select_update_data[0]['fertilizer_submenu_id']!=NULL)
													{
														?>
													<select tabindex="1" data-placeholder="Select here.."  id="fertilizer_sub_menu_type" name="fertilizer_sub_menu_type" class="dropdown-menu" role="menu" class="span8">
													<option  value="Select here..">Select fertilizer Submenu..</option>
                                                    <?php
													
													foreach($fertilizer_submenu as $data)
													{
														?>
													<option value="<?php echo $data['fertilizer_submenu_id']?>"
                                                    <?php if($data['fertilizer_submenu_id']==trim($select_update_data[0]['fertilizer_submenu_id']))
															{
																echo "selected='selected'";
																
															}
															
															
													?>
                                                    
                                                    ><?php echo $data['fertilizer_submenu_name']?></option>
													<?php
                                                    }
									
													?>
												</select>
                                                 <?php
												// echo "<span class='help-inline' id='msgfertilizer_sub_menu_type' style='float:right' ></span>";
                                                    }
									
													?>  
                                                </span>
                                                 
												</div>
											</div>
										</div>
                               			<div class="control-group">
											<label class="control-label" ><b>Fertilizer Detail Name</b></label>
											<div class="controls">
												<input type="text" id="fertilizer_data_name" placeholder="Enter Fertilizer name" name="fertilizer_data_name" class="span8" value="<?php echo $select_update_data[0]["fertilizer_detail_name"]?>">
												<span class="help-inline" id="msgfertilizer_data_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>

										<div class="control-group">
											<label class="control-label" ><b>Fertilizer Price</b></label>
											<div class="controls">
                                            <div class="input-append">
												<input type="text" id="fertilizer_price" name="fertilizer_price" placeholder="5.000" class="span8" value="<?php echo $select_update_data[0]["fertilizer_price"]?>" ><span class="add-on fa fa-rupee"></span>
                                              </div><span class="help-inline" id="msgfertilizer_price" style="color:#F00;position:absolute;">
											</div>
										</div>
                                        
                                        
                                        	<div class="control-group">
											<label class="control-label"><b>Fertilizer Price Type</b></label>
											<div class="controls">
												<label class="radio inline">
													<input type="radio" name="fertilizer_price_type" id="fertilizer_price_type" value="Kilogram" <?php if($select_update_data[0]["fertilizer_price_type"]=="Kilogram")echo "checked";?>>
													Kilogram
												</label> 
												<label class="radio inline">
													<input type="radio" name="fertilizer_price_type" id="fertilizer_price_type" value="Liter" <?php if($select_update_data[0]["fertilizer_price_type"]=="Liter")echo "checked";?>>
													Liter
												</label> 
												<label class="radio inline">
													<input type="radio" name="fertilizer_price_type" id="fertilizer_price_type" value="Ton" <?php if($select_update_data[0]["fertilizer_price_type"]=="Ton")echo "checked";?>>
													Ton
												</label>
                                                <label class="radio inline">
													<input type="radio" name="fertilizer_price_type" id="fertilizer_price_type" value="Beg" <?php if($select_update_data[0]["fertilizer_price_type"]=="Beg")echo "checked";?>>
													Beg
												</label>
                                             
                                                <span class="help-inline" id="msgfertilizer_price_type" style="color:#F00;position:absolute" ></span>
											</div>
										</div>
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Fertilizer Total Quantity</b></label>
											<div class="controls">
												<input type="text" name="fertilizer_total_qty" id="fertilizer_total_qty" placeholder="Enter total quantity" class="span8" value="<?php echo $select_update_data[0]["fertilizer_total_qty"]?>" >
                                                <span class="help-inline" id="msgfertilizer_total_qty" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                        
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Fertilizer Minimum Order</b></label>
											<div class="controls">
                                            
												<input type="text" id="fertilizer_min_order" name="fertilizer_min_order" placeholder="Enter Minumum Order" class="span8"value="<?php echo $select_update_data[0]["fertilizer_min_order"]?>" >
                                               
                                                <span class="help-inline" id="msgfertilizer_min_order" style="color:#F00;position:absolute;">
											</div>
										</div>
                                        
                                           <div class="control-group">
											<label class="control-label" ><b>Model Number</b></label>
											<div class="controls">
												<input type="text" id="model_no" name="model_no" placeholder="Enter model number" class="span8" value="<?php echo $select_update_data[0]["model_no"]?>" >
                                                <span class="help-inline" id="msgmodel_no" style="color:#F00;position:absolute;"></span>
											</div>
										</div>
                                        
											     <div class="control-group">
											<label class="control-label" ><b>Classification Type</b></label>
											<div class="controls">
                                                <select tabindex="1" data-placeholder="Select here" class="span8" name="classification" id="classification">
                                        
										<option value="Select here..">Select here..</option>
										 <?php
												$data="";	
												
													foreach($classification_type as $data)
													{
														
										?>
													<option value="<?php echo $data['fertilizer_classification_id'];?>"
													<?php if(trim($data['fertilizer_classification_id'])==trim($select_update_data[0]['classification']))
															{
																echo "selected='selected'";
																
															}?>><?php echo $data['fertilizer_classification_name']?></option>
										<?php
                                     	            }
										?>
                                        </select>
                                              <!--  <span class="help-inline" id="msgclassification" ></span>-->
											</div>
										</div>
                                        
                                        	<div class="control-group">
											<label class="control-label"><b>Appearance Type</b></label>
											<div class="controls">
												<select tabindex="1" data-placeholder="Select here" class="span8" name="appearance" id="appearance">
                                        
										<option value="Select here..">Select here..</option>
										 <?php
												$data="";	
												
													foreach($appearance_type as $data)
													{
										?>
													<option value="<?php echo $data['fertilizer_appearance_id']?>"
                                                    <?php if(trim($data['fertilizer_appearance_id'])==trim($select_update_data[0]['appearance']))
															{
																echo "selected='selected'";
																
															}?>><?php echo $data['fertilizer_appearance_name']?></option>
										<?php
                                     	            }
										?>
                                        </select>
                                                <!--<span class="help-inline" id="msgappearance" ></span>-->
											</div>
										</div>
                                        
                                        
                                    
                                        <div class="control-group">
											<label class="control-label"><b>Payment Terms</b></label>
											<div class="controls">
												<label class="checkbox inline">
													<input type="checkbox" value="L/C" name="payment_terms[]" id="payment_terms" <?php
	  if(strstr($select_update_data[0]["payment_terms"],"L/C"))
	  echo "checked";
	  ?>>
													L/C
												</label>
												<label class="checkbox inline">
													<input type="checkbox" value="T/T" name="payment_terms[]" id="payment_terms" <?php
	  if(strstr($select_update_data[0]["payment_terms"],"T/T"))
	  echo "checked";
	  ?>>
													T/T
												</label>
												<label class="checkbox inline">
													<input type="checkbox" value="D/P" name="payment_terms[]" id="payment_terms" <?php
	  if(strstr($select_update_data[0]["payment_terms"],"D/P"))
	  echo "checked";
	  ?>>
													D/P
												</label>
                                
                                                <span class="help-inline" id="msgpayment_terms" style="color:#F00;position:absolute" ></span>
											</div>
										</div>

                                        
                                        
                                        	<div class="control-group">
											<label class="control-label"><b>Trade Terms</b></label>
											<div class="controls" >
												<label class="checkbox inline">
													<input type="checkbox" value="FOB" name="trade_terms[]" id="trade_terms" <?php
	  if(strstr($select_update_data[0]["trade_terms"],"FOB"))
	  echo "checked";
	  ?>>
													FOB
												</label>
												<label class="checkbox inline">
													<input type="checkbox" value="CFR" name="trade_terms[]" id="trade_terms" <?php
	  if(strstr($select_update_data[0]["trade_terms"],"CFR"))
	  echo "checked";
	  ?>>
													CFR
												</label>
												<label class="checkbox inline">
													<input type="checkbox" value="CIF" name="trade_terms[]" id="trade_terms" <?php
	  if(strstr($select_update_data[0]["trade_terms"],"CIF"))
	  echo "checked";
	  ?>>
													CIF
												</label>
                                                <label class="checkbox inline">
													<input type="checkbox" value="CIP" name="trade_terms[]" id="trade_terms" <?php
	  if(strstr($select_update_data[0]["trade_terms"],"CIP"))
	  echo "checked";
	  ?>>
													CIP
												</label>
												<label class="checkbox inline">
													<input type="checkbox" value="EXW" name="trade_terms[]" id="trade_terms" <?php
	  if(strstr($select_update_data[0]["trade_terms"],"EXW"))
	  echo "checked";
	  ?>>
													EXW
												</label>
                                               <span class="help-inline" id="msgtrade_terms" style="color:#F00;position:absolute" >
											</div>
										</div>

                                        
                                        	<div class="control-group">
											<label class="control-label"><b>Origin Country</b></label>
											<div class="controls">
                                            <select tabindex="1" data-placeholder="Select here" class="span8" name="origin_country" id="origin_country">
                                        
										<option value="Select here..">Select here..</option>
										 <?php
												$data="";	
												
													foreach($origin_country as $data)
													{
										?>
													<option value="<?php echo $data['country_id']?>"
                                                     <?php if(trim($data['country_id'])==trim($select_update_data[0]['origin_country'])) 
															{
																echo "selected='selected'";
																
															}?>><?php echo $data['country_name']?></option>
										<?php
                                     	            }
										?>
                                        </select>
                                                <!--<span class="help-inline" id="msgorigin_country" ></span>-->
											</div>
										</div>
                                        
                                        	<div class="control-group">
											<label class="control-label" ><b>Hs Code</b></label>
											<div class="controls">
												<input type="text" id="hs_code" name="hs_code" placeholder="Enter your hs code" class="span8" value="<?php echo $select_update_data[0]["hs_code"]?>">
												<span class="help-inline" id="msghs_code" style="color:#F00;position:absolute;"></span>
											</div>
										</div>
                                        
                                        
										<div class="control-group">
											<label class="control-label"><b>Description</b></label>
											<div class="controls">
												<textarea class="span8" rows="5" id="description" name="description" style="resize:none" placeholder="Enter description" ><?php echo $select_update_data[0]["description"]?></textarea>
                                                <span class="help-inline" id="msgdescription" style="color:#F00;position:absolute;"></span>
											</div>
										</div>

     
                                        
                                        
                                          
                                    <div class="control-group" align="center" style="margin-left:-130px">
                                    <div class="controls">
                                     <a href="<?php echo base_url('seller/seller_fertilizer');?>"  class="btn btn-success" data-toggle="modal" >Back To fertilizer</a> <button type="submit" class="btn btn-primary" name="update_fertilizer" id="update_fertilizer">Update fertilizer</button>
                                    </div>
                                    </div>
			<br>
            <br>
                                    </form>
                                    <?php
									}
									
									
									?>
							</div>
						</div>

						

					<br/>
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>