<?php
if($this->session->userdata("seller_login_id")!="")
{
}

else
{
	redirect("seller/seller");
}
if($this->session->userdata("seed_type")!=NULL)
{
	
}
else
{
	$this->session->flashdata("seller_seed_error","ddd");
	redirect("seller/seller_seed");
}
?>
<?php include("header.php");
//echo $this->session->userdata("seed_type"); ?>

<script type="text/javascript" src="<?php echo base_url()?>data/validation/jquery-1.10.2.js">
</script>
<script type="text/javascript" src="<?php echo base_url()?>data/validation/validate.js"></script>
<script>
		
	$("document").ready(function(){
		$("#add_seed").click(function(){
			
			var seed_detail_name,seed_price,seed_price_type,seed_total_qty,seed_min_order,cultivation_type,model_no,payment_terms,trade_terms,item_weight,shipping_weight,origin_country,description,seed_images;
			//var fname1=getElementById("#fname").value;
			
			seed_detail_name = test_seeddetailname("#seed_detail_name","#msgseed_detail_name");
			
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
			seed_images = test_file("#seed_images","#msgseed_images");
			//alert(seed_detail_name +","+ seed_price +","+seed_price_type +","+seed_total_qty +","+seed_min_order +","+cultivation_type+","+model_no+","+payment_terms+","+trade_terms+","+item_weight+","+shipping_weight+","+origin_country+","+description+","+seed_images);
			if(seed_detail_name == true && seed_price == true && seed_price_type == true && seed_total_qty == true
				&& seed_min_order == true && cultivation_type == true && model_no == true && payment_terms == true && trade_terms == true &&item_weight == true && shipping_weight == true &&  origin_country == true && description == true && seed_images == true
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
								<h3>Seed Detail Add</h3>
							</div>
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

									<br />-->

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url('seller/seller_seed/seller_seed_insert');?>" enctype="multipart/form-data">	
                                    
                               			<div class="control-group">
											<label class="control-label"><b>Seed Name</b></label>
											<div class="controls">
												<input type="text" name="seed_detail_name" id="seed_detail_name" placeholder="Type seed name" class="span8">
												<span class="help-inline" id="msgseed_detail_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                        
										<div class="control-group">
											<label class="control-label" ><b>Seed Price</b></label>
											<div class="controls">
												<div class="input-append">
													<input type="text" placeholder="5.000" name="seed_price" class="span8" id="seed_price"><span class="add-on fa fa-rupee"></span>
                                                   
												</div> <span class="help-inline" id="msgseed_price" style="color:#F00;position:absolute;margin-left:-35px"></span>
											</div>
										</div>

									
                                    
                                    <div class="control-group">
											<label class="control-label"><b>Seed Price Type</b></label>
											<div class="controls">
												
												<label class="radio inline">
													<input type="radio" name="seed_price_type" id="seed_price_type" value="Piece" id="seed_price_type">
													Piece
												</label> 
												<label class="radio inline">
													<input type="radio" name="seed_price_type" id="seed_price_type" value="Kilogram" id="seed_price_type">
													Kilogram
												</label>
                                                <label class="radio inline">
													<input type="radio" name="seed_price_type" id="seed_price_type" value="Ton" id="seed_price_type">
													TON
												</label>	
                                                <span class="help-inline" id="msgseed_price_type" style="color:#F00;position:absolute">	</span>			
											</div>
										</div>
										
                                       
																			<div class="control-group">
										<label class="control-label" ><b>Seed Total Quantity</b></label>
										<div class="controls">
										<input type="text" id="seed_total_qty" name="seed_total_qty" placeholder="Enter Total quantity" class="span8">	
                                        <span class="help-inline" id="msgseed_total_qty" style="color:#F00;position:absolute">		</span>									
										</div>
										</div>
                                        
                                        <div class="control-group">
										<label class="control-label" ><b>Seed Minimum Order</b></label>
										<div class="controls">
										
										<input type="text" placeholder="Enter Minmum Order" name="seed_min_order" class="span8" id="seed_min_order">
                                       
                                  
										<span class="help-inline" id="msgseed_min_order" style="color:#F00;position:absolute;margin-left:-35px">
										</div>
										</div>
										
                                        
                                        <div class="control-group">
										<label class="control-label" ><b>Cultivation Type</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="cultivation_type" id="cultivation_type">
                                        
										<option value="Select here..">Select here..</option>
										 <?php
												$data="";		
													foreach($cultivation_type as $data)
													{
										?>
													<option value="<?php echo $data['seed_cultivation_id']?>"><?php echo $data['seed_cultivation_name']?></option>
										<?php
                                     	            }
										?>
                                        </select>
                                       <!--<span class="help-inline" id="msgcultivation_type"></span>			-->
										</div>
										</div>
                                        
                                        
                                        <div class="control-group">
										<label class="control-label" ><b>Model No</b></label>
										<div class="controls">
										<input type="text" id="model_no" name="model_no" placeholder="Type seed Model no" class="span8">	
                                        <span class="help-inline" id="msgmodel_no" style="color:#F00;position:absolute">		</span>									
										</div>
										</div>
                                        
                                        <div class="control-group">
										<label class="control-label"><b>Payment Terms</b></label>
										<div class="controls">
										<label class="checkbox inline">
										<input type="checkbox" value="DD" name="payment_terms[]" id="payment_terms">
										DD
										</label>
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
                                        <span class="help-inline" id="msgpayment_terms" style="color:#F00;position:absolute"></span>
										</div>
										</div>
                                        
                                        <div class="control-group">
                                        <label class="control-label"><b>Trade Terms</b></label>
                                        <div class="controls">
                                        <label class="checkbox inline">
                                        <input type="checkbox" value="FOB" name="trade_terms[]" id="trade_terms">
                                        FOB
                                        </label>
                                        <label class="checkbox inline">
                                        <input type="checkbox" value="CFR" name="trade_terms[]" id="trade_terms" >
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
                                        <input type="checkbox" value="EXW" name="trade_terms[]" id="trade_terms">
                                        EXW
                                        </label>
                                        <span class="help-inline" id="msgtrade_terms" style="color:#F00;position:absolute"></span>
                                        </div>
                                        </div>
                                        
                                    <div class="control-group">
                                    <label class="control-label"><b>Item Weight</b></label>
                                    <div class="controls">
                                    
                                    <input type="text" name="item_weight" placeholder="Enter Item Weight" class="span8" id="item_weight">						
                                    <span class="help-inline" id="msgitem_weight"style="color:#F00;position:absolute"></span>										
                                    
                                    </div>
                                    </div>
                                            
                                     <div class="control-group">
                                     <label class="control-label" ><b>Shipping Weight</b></label>
                                     <div class="controls">
                                     
                                     <input type="text" name="shipping_weight" placeholder="Enter Shipping Weight" class="span8" id="shipping_weight">					
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
													<option value="<?php echo $data['country_id']?>"><?php echo $data['country_name']?></option>
										<?php
                                     	            }
										?>
                                   
                                     </select>
                                    <!--<span class="help-inline" id="msgorigin_country"></span>-->
                                     </div>
                                     </div>
                                            
                                    <div class="control-group">
                                    <label class="control-label"><b>Description</b></label>
                                    <div class="controls">
                                    <textarea class="span8" rows="5" name="description" id="description" placeholder="Enter description"></textarea>
                                    <span class="help-inline" id="msgdescription" style="color:#F00;position:absolute"></span>
                                    </div>
                                    </div>
                                              
                                               <div class="control-group">
											<label class="control-label" ><b>Images</b></label>
											<div class="controls">
												<input type="file" id="seed_images" name="seed_images[]" class="span8" multiple >
                                                <span class="help-inline"  id="msgseed_images" style="color:#F00;position:absolute" ></span>
											</div>
										</div>
                                        
                                        
                                          
                                    <div class="control-group">
                                    <div class="controls">
                                    <button type="submit" class="btn" name="add_seed" id="add_seed">Submit Form</button>
                                    </div>
                                    </div>
									
                                    </form>
							</div>
						</div>

						

					<br/>
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>