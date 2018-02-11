<?php
if($this->session->userdata("seller_login_id")!="")
{
}

else
{
	redirect("seller/seller");
}
if($this->session->userdata("fertilizer_type")!=NULL)
{
	
}
else
{
	$this->session->flashdata("seller_fertilizer_error","ddd");
	redirect("seller/seller_fertilizer");
}
?>
<?php include("header.php"); ?>
<script type="text/javascript" src="<?php echo base_url()?>data/validation/jquery-1.10.2.js">
</script>
<script type="text/javascript" src="<?php echo base_url()?>data/validation/validate.js"></script>
<script>
		
	$("document").ready(function(){
		$("#add_fertilizer").click(function(){
			var fertilizer_data_name,fertilizer_price,fertilizer_price_type,fertilizer_total_qty,fertilizer_min_order,model_no,classification,appearance,payment_terms,trade_terms,origin_country,hs_code,description;
			//var fname1=getElementById("#fname").value;
			//alert(fname1);
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
			fertilizer_images = test_file("#fertilizer_images","#msgfertilizer_images");
			if(fertilizer_data_name == true && fertilizer_price == true && fertilizer_price_type == true && fertilizer_total_qty == true
				&& fertilizer_min_order == true && model_no == true && classification == true && appearance == true && payment_terms == true &&
				 trade_terms == true && origin_country == true && hs_code == true && description == true && fertilizer_images == true
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
								<h3>Fertilizer Detail Add</h3>
							</div>
							<div class="module-body">

								<!--	<div class="alert">
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
									</div>-->

									<br/>
                                    

									<form class="form-horizontal row-fluid" method="post" action="<?php  echo base_url('seller/seller_fertilizer/seller_fertilizer_insert');?>" enctype="multipart/form-data">
										<div class="control-group">
											<label class="control-label" ><b>Fertilizer Detail Name</b></label>
											<div class="controls">
												<input type="text" id="fertilizer_data_name" placeholder="Enter Fertilizer name" name="fertilizer_data_name" class="span8">
												<span class="help-inline" id="msgfertilizer_data_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>

										<div class="control-group">
											<label class="control-label" ><b>Fertilizer Price</b></label>
											<div class="controls">
                                            <div class="input-append">
												<input type="text" id="fertilizer_price" name="fertilizer_price" placeholder="5.000" class="span8" ><span class="add-on fa fa-rupee"></span>
                                              </div><span class="help-inline" id="msgfertilizer_price" style="color:#F00;position:absolute;">
											</div>
										</div>
                                        
                                        
                                        	<div class="control-group">
											<label class="control-label"><b>Fertilizer Price Type</b></label>
											<div class="controls">
												<label class="radio inline">
													<input type="radio" name="fertilizer_price_type" id="fertilizer_price_type" value="Kilogram" >
													Kilogram
												</label> 
												<label class="radio inline">
													<input type="radio" name="fertilizer_price_type" id="fertilizer_price_type" value="Liter">
													Liter
												</label> 
												<label class="radio inline">
													<input type="radio" name="fertilizer_price_type" id="fertilizer_price_type" value="Ton">
													Ton
												</label>
                                                <label class="radio inline">
													<input type="radio" name="fertilizer_price_type" id="fertilizer_price_type" value="Beg">
													Beg
												</label>
                                             
                                                <span class="help-inline" id="msgfertilizer_price_type" style="color:#F00;position:absolute" ></span>
											</div>
										</div>
                                        
                                        <div class="control-group">
											<label class="control-label" ><b>Fertilizer Total Quantity</b></label>
											<div class="controls">
												<input type="text" name="fertilizer_total_qty" id="fertilizer_total_qty" placeholder="Enter total quantity" class="span8" >
                                                <span class="help-inline" id="msgfertilizer_total_qty" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                        
                                        
                                        <div class="control-group">
											<label class="control-label" style="width:260px;margin-left:-100px;"><b>Fertilizer Minimum Order</b></label>
											<div class="controls">
                                            
												<input type="text" id="fertilizer_min_order" name="fertilizer_min_order" placeholder="Enter Minumum Order" class="span8" >
                                               
                                                <span class="help-inline" id="msgfertilizer_min_order" style="color:#F00;position:absolute;">
											</div>
										</div>
                                        
                                           <div class="control-group">
											<label class="control-label" ><b>Model Number</b></label>
											<div class="controls">
												<input type="text" id="model_no" name="model_no" placeholder="Enter model number" class="span8" >
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
													<option value="<?php echo $data['fertilizer_classification_id']?>"><?php echo $data['fertilizer_classification_name']?></option>
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
													<option value="<?php echo $data['fertilizer_appearance_id']?>"><?php echo $data['fertilizer_appearance_name']?></option>
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
													<input type="checkbox" value="L/C" name="payment_terms[]" id="payment_terms">
													L/C
												</label>
												<label class="checkbox inline">
													<input type="checkbox" value="T/T" name="payment_terms[]" id="payment_terms">
													T/T
												</label>
												<label class="checkbox inline">
													<input type="checkbox" value="D/P" name="payment_terms[]" id="payment_terms">
													D/P
												</label>
                                
                                                <span class="help-inline" id="msgpayment_terms" style="color:#F00;position:absolute" ></span>
											</div>
										</div>

                                        
                                        
                                        	<div class="control-group">
											<label class="control-label"><b>Trade Terms</b></label>
											<div class="controls" >
												<label class="checkbox inline">
													<input type="checkbox" value="FOB" name="trade_terms[]" id="trade_terms">
													FOB
												</label>
												<label class="checkbox inline">
													<input type="checkbox" value="CFR" name="trade_terms[]" id="trade_terms">
													CFR
												</label>
												<label class="checkbox inline">
													<input type="checkbox" value="CIF" name="trade_terms[]" id="trade_terms">
													CIF
												</label>
                                                <label class="checkbox inline">
													<input type="checkbox" value="CIP" name="trade_terms[]" id="trade_terms">
													CIP
												</label>
												<label class="checkbox inline">
													<input type="checkbox" value="EXW" name="trade_terms[]" id="trade_terms" >
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
													<option value="<?php echo $data['country_id']?>"><?php echo $data['country_name']?></option>
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
												<input type="text" id="hs_code" name="hs_code" placeholder="Enter your hs code" class="span8">
												<span class="help-inline" id="msghs_code" style="color:#F00;position:absolute;"></span>
											</div>
										</div>
                                        
                                        
										<div class="control-group">
											<label class="control-label"><b>Description</b></label>
											<div class="controls">
												<textarea class="span8" rows="5" id="description" name="description" style="resize:none" placeholder="Enter description"></textarea>
                                                <span class="help-inline" id="msgdescription" style="color:#F00;position:absolute;"></span>
											</div>
										</div>


										
                                              <div class="control-group">
											<label class="control-label" ><b>Profile</b></label>
											<div class="controls">
												<input type="file" id="fertilizer_images" name="fertilizer_images[]" class="span8" multiple >
                                                <span class="help-inline"  id="msgfertilizer_images" style="color:#F00;position:absolute;"></span>
											</div>
										</div>
                                        
                                        
										<div class="control-group">
											<div class="controls">
												<button type="submit" name="add_fertilizer" class="btn" id="add_fertilizer">Add Fertilizer Detail</button>
											</div>
										</div>
                                        
                                  
                                        
									</form>
							</div>
						</div>

						<!--/.module-->

					<br />
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>