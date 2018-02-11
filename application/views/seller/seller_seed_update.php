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
				$("#seed_type").change(function(){
					var id = $(this).val();
					//alert();
					if(id == "Select here..")
					{	//alert();
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
				
				$("#seed_sub_type").change(function(){
					
					var id = $(this).val();
					//alert(id);
					if(id == "Select here..")
					{	//alert();
					$("#seed_sub_menu").hide();
					}
					else
					{
						
						//alert(id);
						$.ajax({
							url:"<?php echo base_url("seller/seller_seed/select_seed_submenu_type")?>",
							type:"post",
							data:{seed_subtype_id:id},
							success:function(result){
								//alert(result);
								if(result!=='')
								{
								$("#seed_sub_menu").html(result);
								$("#seed_sub_menu").show();
								}
								else
								{
									$("#seed_sub_menu").hide();
								}
								
							}
						});
						
					}
				
				});
		
	
		$("#update_seed").click(function(){
			 <?php
													if($select_update_data[0]['seed_submenu_id']!=NULL)
													{
														?>
			var seed_data_name,seed_price,seed_price_type,seed_total_qty,seed_min_order,cultivation_type,model_no,payment_terms,trade_terms,item_weight,shipping_weight,origin_country,description,seed_type,seed_sub_type,seed_sub_menu;
			//var fname1=getElementById("#fname").value;
			
			seed_data_name = test_seeddetailname("#seed_detail_name","#msgseed_data_name");
			seed_type = test_drop("#seed_type","#msgseed_type");
			seed_sub_type = test_drop("#seed_sub_type","#msgseed_sub_type");
			seed_sub_menu = test_drop("#seed_sub_menu_type","#msgseed_sub_menu_type");
			
			seed_price = test_seedprice("#seed_price","#msgseed_price");
			seed_price_type = test_ptype("#seed_price_type","#msgseed_price_type");
			seed_total_qty = test_seedtotalqty("#seed_total_qty","#msgseed_total_qty");
			seed_min_order = test_seedminorder("#seed_min_order","#msgseed_min_order");
			cultivation_type = test_drop("#cultivation_type","#msgcultivation_type");
			model_no = test_modelno("#model_no","#msgmodel_no");
			payment_terms = test_check("#payment_terms","#msgpayment_terms")
			trade_terms = test_check("#trade_terms","#msgtrade_terms")
			item_weight = test_itemwight("#item_weight","#msgitem_weight");
			shipping_weight = test_shipp("#shipping_weight","#msgshipping_weight");
			origin_country = test_drop("#origin_country","#msgorigin_country");
			description = test_description("#description","#msgdescription");
			//alert(seed_data_name +","+ seed_price +","+seed_price_type +","+seed_total_qty +","+seed_min_order +","+cultivation_type+","+model_no+","+payment_terms+","+trade_terms+","+item_weight+","+shipping_weight+","+origin_country+","+description);
			if(seed_data_name == true && seed_price == true && seed_price_type == true && seed_total_qty == true
				&& seed_min_order == true && cultivation_type == true && model_no == true && payment_terms == true && trade_terms == true &&item_weight == true && shipping_weight == true &&  origin_country == true && description == true 
&& seed_type == true && seed_sub_type == true  && seed_sub_menu == true)
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
													if("#seed_sub_menu_type")
													{
														var seed_data_name,seed_price,seed_price_type,seed_total_qty,seed_min_order,cultivation_type,model_no,payment_terms,trade_terms,item_weight,shipping_weight,origin_country,description,seed_type,seed_sub_type,seed_sub_menu;
			//var fname1=getElementById("#fname").value;
			
	seed_data_name = test_seeddetailname("#seed_detail_name","#msgseed_data_name");
			seed_type = test_drop("#seed_type","#msgseed_type");
			seed_sub_type = test_drop("#seed_sub_type","#msgseed_sub_type");
			seed_sub_menu = test_drop("#seed_sub_menu_type","#msgseed_sub_menu_type");
			
		seed_price = test_seedprice("#seed_price","#msgseed_price");
			seed_price_type = test_ptype("#seed_price_type","#msgseed_price_type");
			seed_total_qty = test_seedtotalqty("#seed_total_qty","#msgseed_total_qty");
			seed_min_order = test_seedminorder("#seed_min_order","#msgseed_min_order");
			cultivation_type = test_drop("#cultivation_type","#msgcultivation_type");
			model_no = test_modelno("#model_no","#msgmodel_no");
			payment_terms = test_check("#payment_terms","#msgpayment_terms")
			trade_terms = test_check("#trade_terms","#msgtrade_terms")
			item_weight = test_itemwight("#item_weight","#msgitem_weight");
			shipping_weight = test_shipp("#shipping_weight","#msgshipping_weight");
			origin_country = test_drop("#origin_country","#msgorigin_country");
			description = test_description("#description","#msgdescription");
			//alert(seed_data_name +","+ seed_price +","+seed_price_type +","+seed_total_qty +","+seed_min_order +","+cultivation_type+","+model_no+","+payment_terms+","+trade_terms+","+item_weight+","+shipping_weight+","+origin_country+","+description);
			if(seed_data_name == true && seed_price == true && seed_price_type == true && seed_total_qty == true
				&& seed_min_order == true && cultivation_type == true && model_no == true && payment_terms == true && trade_terms == true &&item_weight == true && shipping_weight == true &&  origin_country == true && description == true 
&& seed_type == true && seed_sub_type == true  && seed_sub_menu == true)
			{
				return true;
				
			}
			else
			{
				return false;
			}
													}else
													{
													var seed_data_name,seed_price,seed_price_type,seed_total_qty,seed_min_order,cultivation_type,model_no,payment_terms,trade_terms,item_weight,shipping_weight,origin_country,description,seed_type,seed_sub_type;
			//var fname1=getElementById("#fname").value;
			
				seed_data_name = test_seeddetailname("#seed_detail_name","#msgseed_data_name");
			seed_type = test_drop("#seed_type","#msgseed_type");
			seed_sub_type = test_drop("#seed_sub_type","#msgseed_sub_type");
			//seed_sub_menu = test_drop("#seed_sub_menu_type","#msgseed_sub_menu_type");
			
			seed_price = test_seedprice("#seed_price","#msgseed_price");
			seed_price_type = test_ptype("#seed_price_type","#msgseed_price_type");
			seed_total_qty = test_seedtotalqty("#seed_total_qty","#msgseed_total_qty");
			seed_min_order = test_seedminorder("#seed_min_order","#msgseed_min_order");
			cultivation_type = test_drop("#cultivation_type","#msgcultivation_type");
			model_no = test_modelno("#model_no","#msgmodel_no");
			payment_terms = test_check("#payment_terms","#msgpayment_terms")
			trade_terms = test_check("#trade_terms","#msgtrade_terms")
			item_weight = test_itemwight("#item_weight","#msgitem_weight");
			shipping_weight = test_shipp("#shipping_weight","#msgshipping_weight");
			origin_country = test_drop("#origin_country","#msgorigin_country");
			description = test_description("#description","#msgdescription");
			//alert(seed_data_name +","+ seed_price +","+seed_price_type +","+seed_total_qty +","+seed_min_order +","+cultivation_type+","+model_no+","+payment_terms+","+trade_terms+","+item_weight+","+shipping_weight+","+origin_country+","+description);
			if(seed_data_name == true && seed_price == true && seed_price_type == true && seed_total_qty == true
				&& seed_min_order == true && cultivation_type == true && model_no == true && payment_terms == true && trade_terms == true &&item_weight == true && shipping_weight == true &&  origin_country == true && description == true 
&& seed_type == true && seed_sub_type == true)
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
								<h3>Update Seed Detail</h3>
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
						/*echo $select_update_data[0]["seed_detail_id"];
						die();*/
					?>
                    
				<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url('seller/seller_seed/seller_seed_update');?>" enctype="multipart/form-data">	
                <input type="hidden" name="seed_detail_id" id="seed_detail_id"  class="span8" value="<?php echo $select_update_data[0]['seed_detail_id'];?>">
                                       <input type="hidden" name="seller_id" id="seller_id"  class="span8" value="<?php echo $select_update_data[0]['seller_id'];?>">
                                     <div class="control-group">
                                    
											<label class="control-label" ><b>Seed Type</b></label>
											<div class="controls">
												<div class="dropdown">
                                              
													<select tabindex="1" data-placeholder="Select here.."  id="seed_type" name="seed_type" class="dropdown-menu" role="menu" class="span8">
													<option  value="Select here..">Select Seed Type..</option>
                                                    <?php
													
													foreach($seed_type as $data)
													{
														?>
													<option value="<?php echo $data['seed_type_id']?>"
                                                    <?php if($data['seed_type_id']==$select_update_data[0]['seed_type_id'])
															{
																echo "selected='selected'";
																
															}
															
															
													?>
                                                    
                                                    ><?php echo $data['seed_type_name']?></option>
													<?php
                                                    }
									
													?>
												</select>
                                                <!--<span class="help-inline" id="msgseed_type" style="float:right"></span>-->
												</div>
											</div>
										</div>
                                        
										<div class="control-group">
											<label class="control-label" ><b>Seed Sub Type</b></label>
											<div class="controls">
												<div class="dropdown">
                                              <select tabindex="1" data-placeholder="Select here.."  id="seed_sub_type" name="seed_sub_type" class="dropdown-menu" role="menu" class="span8">
													<option value="Select here..">Select Seed Type..</option>
                                                     <?php
													
													foreach($seed_sub_type as $data)
													{
														?>
													<option value="<?php echo $data['seed_subtype_id']?>"
                                                    <?php if($data['seed_subtype_id']==trim($select_update_data[0]['seed_subtype_id']))
															{
																echo "selected='selected'";
																
															}
															
															
													?>
                                                    
                                                    ><?php echo $data['seed_subtype_name']?></option>
													<?php
                                                    }
									
													?>
                                                    </select>
                                                <!--<span id="msgseed_sub_type" style="float:right">-->
                                                  </span>
                                                 
                                              
												</div>
											</div>
										</div>
										 
										<div class="control-group" id="seed_submenudiv">
											<label class="control-label" ><b>Seed Sub Menu Type</b></label>
											<div class="controls">
												<div class="dropdown">
                                               
                                                <span id="seed_sub_menu">
                                                  <?php
													if($select_update_data[0]['seed_submenu_id']!=NULL)
													{
														?>
													<select tabindex="1" data-placeholder="Select here.."  id="seed_sub_menu_type" name="seed_sub_menu_type" class="dropdown-menu" role="menu" class="span8">
													<option  value="Select here..">Select Seed Submenu..</option>
                                                    <?php
													
													foreach($seed_submenu as $data)
													{
														?>
													<option value="<?php echo $data['seed_submenu_id']?>"
                                                    <?php if($data['seed_submenu_id']==trim($select_update_data[0]['seed_submenu_id']))
															{
																echo "selected='selected'";
																
															}
															
															
													?>
                                                    
                                                    ><?php echo $data['seed_submenu_name']?></option>
													<?php
                                                    }
									
													?>
												</select>
                                                 <?php
												// echo "<span class='help-inline' id='msgseed_sub_menu_type' style='float:right' ></span>";
                                                    }
									
													?>  
                                                </span>
                                                 
												</div>
											</div>
										</div>
                               			<div class="control-group">
											<label class="control-label"><b>Seed Name</b></label>
											<div class="controls">
												<input type="text" name="seed_detail_name" id="seed_detail_name" placeholder="Type seed name" class="span8" value="<?php echo $select_update_data[0]["seed_detail_name"]?>">
												
												
                                                <span class="help-inline" id="msgseed_data_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                        
										<div class="control-group">
											<label class="control-label" ><b>Seed Price</b></label>
											<div class="controls">
												<div class="input-append">
													<input type="text" placeholder="5.000" name="seed_price"class="span8" id="seed_price" value="<?php echo $select_update_data[0]["seed_price"]?>"><span class="add-on"><span class="fa fa-rupee" ></span></span>
                                                   
												</div> <span class="help-inline" id="msgseed_price" style="color:#F00;position:absolute;margin-left:-35px"></span>
											</div>
										</div>

									
                                    
                                    <div class="control-group">
											<label class="control-label"><b>Seed Price Type</b></label>
											<div class="controls">
												
												<label class="radio inline">
													<input type="radio" name="seed_price_type" id="seed_price_type" value="Piece" id="seed_price_type" <?php if($select_update_data[0]["seed_price_type"]=="Piece")echo "checked";?>>
													Piece
												</label> 
												<label class="radio inline">
													<input type="radio" name="seed_price_type" id="seed_price_type" value="Kilogram" id="seed_price_type" <?php if($select_update_data[0]["seed_price_type"]=="Kilogram")echo "checked";?>>
													Kilogram
												</label>
                                                <label class="radio inline">
													<input type="radio" name="seed_price_type" id="seed_price_type" value="Ton" id="seed_price_type" <?php if($select_update_data[0]["seed_price_type"]=="Ton")echo "checked";?>>
													TON
												</label>	
                                                <span class="help-inline" id="msgseed_price_type" style="color:#F00;position:absolute">	</span>			
											</div>
										</div>
										
                                       
																			<div class="control-group">
										<label class="control-label" ><b>Seed Total Qty</b></label>
										<div class="controls">
										<input type="text" id="seed_total_qty" name="seed_total_qty" placeholder="Enter Total quantity" class="span8" value="<?php echo $select_update_data[0]["seed_total_qty"]?>">	
                                        <span class="help-inline" id="msgseed_total_qty" style="color:#F00;position:absolute">		</span>									
										</div>
										</div>
                                        
                                        <div class="control-group">
										<label class="control-label" ><b>Seed Minimum Order</b></label>
										<div class="controls">
										<div class="input-append">
										<input type="text" placeholder="5.000" name="seed_min_order" class="span8" id="seed_min_order" value="<?php echo $select_update_data[0]["seed_min_order"]?>">
                                        <span class="add-on"><span class="fa fa-rupee" ></span></span>
                                      
										</div>  <span class="help-inline" id="msgseed_min_order" style="color:#F00;position:absolute;margin-left:-35px"></span>
										</div>
										</div>
										
                                        
                                        <div class="control-group">
										<label class="control-label" ><b>Cultivation Type</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="cultivation_type" id="cultivation_type" >
										<option value="Select here..">Select here..</option>
										 <?php
												$data="";		
													foreach($cultivation_type as $data)
													{
										?>
													<option value="<?php echo $data['seed_cultivation_id']?>"  
													<?php if($data['seed_cultivation_id']==$select_update_data[0]['cultivation_type'])
															{
																echo "selected='selected'";
																
															}
															
															
													?>> <?php echo $data['seed_cultivation_name']?></option>
										<?php
                                     	            }
										?></select>
                                        <!--<span class="help-inline" id="msgcultivation_type" style="color:#F00;position:absolute"></span>			-->
										</div>
										</div>
                                        
                                        
                                        <div class="control-group">
										<label class="control-label" ><b>Model No</b></label>
										<div class="controls">
										<input type="text" id="model_no" name="model_no" placeholder="Type seed Model no" class="span8" value="<?php echo $select_update_data[0]["model_no"]?>">	
                                        <span class="help-inline" id="msgmodel_no" style="color:#F00;position:absolute">		</span>									
										</div>
										</div>
                                        
                                        <div class="control-group">
										<label class="control-label"><b>Payment Terms</b></label>
										<div class="controls">
										<label class="checkbox inline">
										<input type="checkbox" value="DD" name="payment_terms[]" id="payment_terms" <?php
	  if(strstr($select_update_data[0]["payment_terms"],"DD"))
	  echo "checked";
	  ?>>
										DD
										</label>
										<label class="checkbox inline">
										<input type="checkbox" value="L/C" name="payment_terms[]" id="payment_terms"<?php
	  if(strstr($select_update_data[0]["payment_terms"],"L/C"))
	  echo "checked";
	  ?>>
										L/C
										</label>
										<label class="checkbox inline">
										<input type="checkbox" value="T/T" name="payment_terms[]" id="payment_terms"<?php
	  if(strstr($select_update_data[0]["payment_terms"],"T/T"))
	  echo "checked";
	  ?>>
										T/T
										</label>
                                        <label class="checkbox inline">
										<input type="checkbox" value="D/P" name="payment_terms[]" id="payment_terms"<?php
	  if(strstr($select_update_data[0]["payment_terms"],"D/P"))
	  echo "checked";
	  ?>>
										D/P
										</label>
                                        <span class="help-inline" id="msgpayment_terms" style="color:#F00;position:absolute"></span>
										</div>
										</div>
                                        
                                        <div class="control-group">
                                        <label class="control-label"><b>Trade Terms</b></label>
                                        <div class="controls">
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
                                        <span class="help-inline" id="msgtrade_terms" style="color:#F00;position:absolute"></span>
                                        </div>
                                        </div>
                                        
                                    <div class="control-group">
                                    <label class="control-label"><b>Item Weight</b></label>
                                    <div class="controls">
                                    
                                    <input type="text" name="item_weight" placeholder="5.000" class="span8" id="item_weight" value="<?php echo $select_update_data[0]["item_weight"]?>">						
                                    <span class="help-inline" id="msgitem_weight" style="color:#F00;position:absolute"></span>										
                                    
                                    </div>
                                    </div>
                                            
                                     <div class="control-group">
                                     <label class="control-label" ><b>Shipping Weight</b></label>
                                     <div class="controls">
                                     
                                     <input type="text" name="shipping_weight" placeholder="5.000" class="span8" id="shipping_weight" value="<?php echo $select_update_data[0]["shipping_weight"]?>">					
                                     <span class="help-inline" id="msgshipping_weight" style="color:#F00;position:absolute">	</span>																				
                                     
                                     </div>
                                     </div>
                                            
                                     <div class="control-group">
                                     <label class="control-label"><b>Origin Country</b></label>
                                     <div class="controls">
                                     <select tabindex="1"  class="span8" name="origin_country" id="origin_country" data-placeholder="Select here">
                                     <option value="Select here..">Select here..</option>
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
										?> </select>
                                    <!---<span class="help-inline" id="msgorigin_country"></span>-->
                                     </div>
                                     </div>
                                            
                                    <div class="control-group">
                                    <label class="control-label"><b>Description</b></label>
                                    <div class="controls">
                                    <textarea class="span8" rows="5" name="description" id="description" placeholder="Enter description"><?php echo $select_update_data[0]["description"]?></textarea>
                                    <span class="help-inline" id="msgdescription" style="color:#F00;position:absolute"></span>
                                    </div>
                                    </div>
                                              
                                               
                                        
                                        
                                          
                                    <div class="control-group" align="center" style="margin-left:-130px">
                                    <div class="controls">
                                     <a href="<?php echo base_url('seller/seller_seed');?>"  class="btn btn-success" data-toggle="modal" >Back To Seed</a> <button type="submit" class="btn btn-primary" name="update_seed" id="update_seed">Update Seed</button>
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