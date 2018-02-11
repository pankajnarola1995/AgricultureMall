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
								<h3>Tools Detail Display</h3>
							</div>
							<div class="module-body table" >
                            
                                  <?php
								  if(isset($select_update_data) && $select_update_data!="")
								  {
									foreach($select_update_data as $tools_detail)
									{
									?>
 <label class="span3"><b>Tools Type Name</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;"><b> <?php
													
													foreach($tools_type as $data)
													{
														?>
													
                                                    <?php if(trim($data['tools_type_id'])==trim($select_update_data[0]['tools_type_id']))
															{
																  echo $data['tools_type_name'];
																
															}
															
															
													?>
                                                    
                                                
													<?php
                                                    }
									
													?></b></label> 
            <label class="span3"><b>Tools SubType Name</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;"><b> <?php
													
													foreach($tools_sub_type as $data)
													{
														?>
													
                                                    <?php if(trim($data['tools_subtype_id'])==trim($select_update_data[0]['tools_subtype_id']))
															{
																  echo $data['tools_subtype_name'];
																
															}
															
															
													?>
                                                    
                                                
													<?php
                                                    }
									
													?></b></label> 
                                                    
                
													
             
     <label class="span3"><b>Tools Detail Name</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;"><b><?php echo $tools_detail['tools_detail_name']; ?></b></label> 
      <label class="span3"><b>Tools Price</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $tools_detail['tools_price']; ?></b></label>
       <label class="span3"><b>Tools Detail Type Name</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php foreach($tools_detail_type_id as $detail1)
					{
								if(trim($detail1['tools_detail_type_id'])==trim($tools_detail['tools_detail_type_id']))echo $detail1['tools_detail_type_name']; 
						} ?></b></label>  
        <label class="span3"><b>Tools Uses</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $tools_detail['tools_uses']; ?></b></label> 
         <label class="span3"><b>Tools Total Qty</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $tools_detail['tools_total_qty']; ?></b></label>
      <label class="span3"><b>Tools Model Number</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $tools_detail['model_no']; ?></b></label>
                 <label class="span3"><b>Origin Country</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php foreach($origin_country as $detail1)
					{
								if(trim($detail1['country_id'])==trim($tools_detail['origin_country']))echo $detail1['country_name']; 
						} ?></b></label> 
                 <label class="span3"><b>Tools Color</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php foreach($color as $detail1)
					{
								if(trim($detail1['color_id'])==trim($tools_detail['color_id']))echo $detail1['color_name']; 
						} ?></b></label> 
      <label class="span3"><b>Tools Fuel</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php foreach($fuel as $detail1)
					{
								if(trim($detail1['tools_fuel_id'])==trim($tools_detail['tools_fuel_id']))echo $detail1['tools_fuel_name']; 
						} ?></b></label> 
      <label class="span3"><b>Tools Drive</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php foreach($drive as $detail1)
					{
								if(trim($detail1['tools_drive_id'])==trim($tools_detail['tools_drive_id']))echo $detail1['tools_drive_name']; 
						} ?></b></label> 
      
      <label class="span3"><b>Tools Shipping Weight</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $tools_detail['tools_shipping_weight']; ?></b></label> 
      <label class="span3"><b>Tools Engine</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php foreach($engine_type as $detail1)
					{
								if(trim($detail1['tools_engine_id'])==trim($tools_detail['tools_engine_id']))echo $detail1['tools_engine_name']; 
						} ?></b></label> 
      <label class="span3"><b>Tools Weight</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $tools_detail['tools_weight']; ?></b></label> 
      
      <label class="span3"><b>Tools Material</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $tools_detail['tools_material']; ?></b></label> 
      <label class="span3"><b>Tools Eye shape</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $tools_detail['tools_eye_shape']; ?></b></label> 
      
      <label class="span3"><b>Package Detail</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;" ><b><?php echo $tools_detail['tools_package_detail']; ?></b></label>
      
      <label class="span3"><b>Tools Description</b></label> <label class="span1"><b>:</b></label>  <label style="margin-left:-100px;overflow:auto;height:150px;width:350px;" ><b><?php echo $tools_detail['description']; ?></b></label> 
     
       <?php
									}
								  }
									?> 
                                    <br>
                                      <a href="<?php echo base_url('seller/seller_tools');?>"  class="btn btn-success"  style="margin-left:370px">Back To Tools</a>
                                      <br>
                                      <br>
      </div>
							
						</div><!--/.module-->

					<br />
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>