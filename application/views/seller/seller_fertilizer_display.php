<?php
if($this->session->userdata("seller_login_id")!="")
{
}
else
{
	redirect("seller/seller");
}
?>
<?php include("header.php");?>




	
				<div class="span9">
					<div class="content" style="width:100%">
							<div class="module">
							<div class="module-head">
								<h3>fertilizer Detail Display</h3>
							</div>
							<div class="module-body table" >
                            
                                  <?php
								  if(isset($select_update_data) && $select_update_data!="")
								  {
									foreach($select_update_data as $fertilizer_detail)
									{
									?>
 <label class="span3"><b>fertilizer Type Name</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;"><b> <?php
													
													foreach($fertilizer_type as $data)
													{
														?>
													
                                                    <?php if(trim($data['fertilizer_type_id'])==trim($select_update_data[0]['fertilizer_type_id']))
															{
																  echo $data['fertilizer_type_name'];
																
															}
															
															
													?>
                                                    
                                                
													<?php
                                                    }
									
													?></b></label> 
            <label class="span3"><b>fertilizer SubType Name</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;"><b> <?php
													
													foreach($fertilizer_sub_type as $data)
													{
														?>
													
                                                    <?php if(trim($data['fertilizer_subtype_id'])==trim($select_update_data[0]['fertilizer_subtype_id']))
															{
																  echo $data['fertilizer_subtype_name'];
																
															}
															
															
													?>
                                                    
                                                
													<?php
                                                    }
									
													?></b></label> 
                                                    
                <?php
													if($select_update_data[0]['fertilizer_submenu_id']!=NULL)
													{?>
														 <label class="span3"><b>fertilizer Submenu Type Name</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;"><b> 
													<?php
                                                    foreach($fertilizer_submenu as $data)
													{
														?>
													
                                                    <?php if(trim($data['fertilizer_submenu_id'])==trim($select_update_data[0]['fertilizer_submenu_id']))
															{
																  echo $data['fertilizer_submenu_name'];
																
															}
															
															
													?>
                                                    
                                                
													<?php
                                                    }?>

</b></label>                                                     <?php
													}
													?>
             
     <label class="span3"><b>fertilizer Detail Name</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;"><b><?php echo $fertilizer_detail['fertilizer_detail_name']; ?></b></label> 
      <label class="span3"><b>fertilizer Price</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $fertilizer_detail['fertilizer_price']; ?></b></label>
       <label class="span3"><b>fertilizer Price Type</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $fertilizer_detail['fertilizer_price_type']; ?></b></label>  
        <label class="span3"><b>fertilizer Total Quantity</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $fertilizer_detail['fertilizer_total_qty']." ".$fertilizer_detail['fertilizer_price_type']; ?></b></label> 
         <label class="span3"><b>fertilizer Minimun Order</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $fertilizer_detail['fertilizer_min_order']." ".$fertilizer_detail['fertilizer_price_type']; ?></b></label>
      <label class="span3"><b>Classification Type</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php foreach($classification_type as $detail)
				{
				if($detail['fertilizer_classification_id']==$fertilizer_detail['classification'])echo $detail['fertilizer_classification_name']; 
				}?></b></label>
                 <label class="span3"><b>Appearance Type</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php foreach($appearance_type as $detail)
				{
				if($detail['fertilizer_appearance_id']==$fertilizer_detail['appearance'])echo $detail['fertilizer_appearance_name']; 
				}?></b></label>
                 <label class="span3"><b>fertilizer Model Number</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $fertilizer_detail['model_no']; ?></b></label> 
                 <label class="span3"><b>fertilizer Payment Terms</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $fertilizer_detail['payment_terms']; ?></b></label> 
      <label class="span3"><b>fertilizer Trads Terms</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $fertilizer_detail['trade_terms']; ?></b></label> 
       <label class="span3"><b>HS Code</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $fertilizer_detail['hs_code']; ?></b></label> 
      
      <label class="span3"><b>Origin_country</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php foreach($origin_country as $detail1)
					{
								if(trim($detail1['country_id'])==trim($fertilizer_detail['origin_country']))echo $detail1['country_name']; 
						} ?></b></label>
      
      <label class="span3"><b>fertilizer Description</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $fertilizer_detail['description']; ?></b></label> 
     
       <?php
									}
								  }
									?> 
                                    <br>
                                      <a href="<?php echo base_url('seller/seller_fertilizer');?>"  class="btn btn-success"  style="margin-left:370px">Back To fertilizer</a>
                                      <br>
                                      <br>
      </div>
							
						</div><!--/.module-->

					<br />
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>