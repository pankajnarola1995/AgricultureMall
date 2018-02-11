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
								<h3>Pesticide Detail Display</h3>
							</div>
							<div class="module-body table" >
                            
                                  <?php
								  if(isset($select_update_data) && $select_update_data!="")
								  {
									foreach($select_update_data as $pesticide_detail)
									{
									?>
 <label class="span3"><b>Pesticide Type Name</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;"><b> <?php
													
													foreach($pesticide_type as $data)
													{
														?>
													
                                                    <?php if(trim($data['pesticide_type_id'])==trim($select_update_data[0]['pesticide_type_id']))
															{
																  echo $data['pesticide_type_name'];
																
															}
															
															
													?>
                                                    
                                                
													<?php
                                                    }
									
													?></b></label> 
            <label class="span3"><b>Pesticide SubType Name</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;"><b> <?php
													
													foreach($pesticide_sub_type as $data)
													{
														?>
													
                                                    <?php if(trim($data['pesticide_subtype_id'])==trim($select_update_data[0]['pesticide_subtype_id']))
															{
																  echo $data['pesticide_subtype_name'];
																
															}
															
															
													?>
                                                    
                                                
													<?php
                                                    }
									
													?></b></label> 
                                                    
                
													
             
     <label class="span3"><b>Pesticide Detail Name</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;"><b><?php echo $pesticide_detail['pesticide_detail_name']; ?></b></label> 
      <label class="span3"><b>Pesticide Price</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $pesticide_detail['pesticide_price']; ?></b></label>
       <label class="span3"><b>pesticide Brand Name</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $pesticide_detail['pesticide_brand_name'];?> </b></label>  
        <label class="span3"><b>Pesticide Price Type</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $pesticide_detail['pesticide_price_type']; ?></b></label> 
         <label class="span3"><b>Pesticide Total Qty</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $pesticide_detail['pesticide_total_qty']." ".$pesticide_detail['pesticide_price_type']; ?></b></label>
           <label class="span3"><b>Pesticide Minimum Order</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $pesticide_detail['pesticide_min_order']." ".$pesticide_detail['pesticide_price_type']; ?></b></label>
             <label class="span3"><b>Pesticide weight</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $pesticide_detail['pesticide_weight']." ".$pesticide_detail['pesticide_price_type']; ?></b></label>
               <label class="span3"><b>Pesticide Shipping weight</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $pesticide_detail['pesticide_shipping_weight']." ".$pesticide_detail['pesticide_price_type']; ?></b></label>
      <label class="span3"><b>pesticide Model Number</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $pesticide_detail['model_no']; ?></b></label>
                 <label class="span3"><b>Origin Country</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php foreach($origin_country as $detail1)
					{
								if(trim($detail1['country_id'])==trim($pesticide_detail['origin_country']))echo $detail1['country_name']; 
						} ?></b></label> 
                 <label class="span3"><b>Pesticide Classification</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php foreach($classification as $detail1)
					{
								if(trim($detail1['pesticide_classification_id'])==trim($pesticide_detail['classification']))echo $detail1['pesticide_classification_name']; 
						} ?></b></label> 
      <label class="span3"><b>Pesticide Appearance</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php foreach($appearance as $detail2)
					{
								if(trim($detail2['pesticide_appearance_id'])==trim($pesticide_detail['appearance']))echo $detail2['pesticide_appearance_name']; 
						} ?></b></label> 
      
      
      <label class="span3"><b>CAS NO</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $pesticide_detail['cas_no']; ?></b></label>
      
      <label class="span3"><b>Pesticide Description</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;overflow:auto;height:150px;width:350px;" ><b><?php echo $pesticide_detail['description']; ?></b></label> 
     
       <?php
									}
								  }
									?> 
                                    <br>
                                      <a href="<?php echo base_url('seller/seller_pesticide');?>"  class="btn btn-success"  style="margin-left:370px">Back To pesticide</a>
                                      <br>
                                      <br>
      </div>
							
						</div><!--/.module-->

					<br />
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>