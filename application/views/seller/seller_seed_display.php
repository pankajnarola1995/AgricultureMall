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
								<h3>Seed Detail Display</h3>
							</div>
							<div class="module-body table" >
                            
                                  <?php
								  if(isset($select_update_data) && $select_update_data!="")
								  {
									foreach($select_update_data as $seed_detail)
									{
									?>
 <label class="span3"><b>Seed Type Name</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;"><b> <?php
													
													foreach($seed_type as $data)
													{
														?>
													
                                                    <?php if(trim($data['seed_type_id'])==trim($select_update_data[0]['seed_type_id']))
															{
																  echo $data['seed_type_name'];
																
															}
															
															
													?>
                                                    
                                                
													<?php
                                                    }
									
													?></b></label> 
            <label class="span3"><b>Seed SubType Name</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;"><b> <?php
													
													foreach($seed_sub_type as $data)
													{
														?>
													
                                                    <?php if(trim($data['seed_subtype_id'])==trim($select_update_data[0]['seed_subtype_id']))
															{
																  echo $data['seed_subtype_name'];
																
															}
															
															
													?>
                                                    
                                                
													<?php
                                                    }
									
													?></b></label> 
                                                    
                <?php
													if($select_update_data[0]['seed_submenu_id']!=NULL)
													{?>
														 <label class="span3"><b>Seed Submenu Type Name</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;"><b> 
													<?php
                                                    foreach($seed_submenu as $data)
													{
														?>
													
                                                    <?php if(trim($data['seed_submenu_id'])==trim($select_update_data[0]['seed_submenu_id']))
															{
																  echo $data['seed_submenu_name'];
																
															}
															
															
													?>
                                                    
                                                
													<?php
                                                    }?>

</b></label>                                                     <?php
													}
													?>
             
     <label class="span3"><b>Seed Detail Name</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;"><b><?php echo $seed_detail['seed_detail_name']; ?></b></label> 
      <label class="span3"><b>Seed Price</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $seed_detail['seed_price']; ?></b></label>
       <label class="span3"><b>Seed Price Type</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $seed_detail['seed_price_type']; ?></b></label>  
        <label class="span3"><b>Seed Total Quantity</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $seed_detail['seed_total_qty']." ".$seed_detail['seed_price_type']; ?></b></label> 
         <label class="span3"><b>Seed Minimun Order</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $seed_detail['seed_min_order']." ".$seed_detail['seed_price_type']; ?></b></label>
      <label class="span3"><b>Cultivation Type</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php foreach($cultivation_type as $detail)
				{
				if($detail['seed_cultivation_id']==$seed_detail['cultivation_type'])echo $detail['seed_cultivation_name']; 
				}?></b></label>
                 <label class="span3"><b>Seed Model Number</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $seed_detail['model_no']; ?></b></label> 
                 <label class="span3"><b>Seed Payment Terms</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $seed_detail['payment_terms']; ?></b></label> 
      <label class="span3"><b>Seed Trads Terms</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $seed_detail['trade_terms']; ?></b></label> 
      <label class="span3"><b>Seed Item Weight</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $seed_detail['item_weight']; ?></b></label> 
      <label class="span3"><b>Seed Shipping Weight</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $seed_detail['shipping_weight']; ?></b></label> 
      <label class="span3"><b>Origin_country</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php foreach($origin_country as $detail1)
					{
								if(trim($detail1['country_id'])==trim($seed_detail['origin_country']))echo $detail1['country_name']; 
						} ?></b></label>
      
      <label class="span3"><b>Seed Description</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $seed_detail['description']; ?></b></label> 
     
       <?php
									}
								  }
									?> 
                                    <br>
                                      <a href="<?php echo base_url('seller/seller_seed');?>"  class="btn btn-success"  style="margin-left:370px">Back To Seed</a>
                                      <br>
                                      <br>
      </div>
							
						</div><!--/.module-->

					<br />
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>