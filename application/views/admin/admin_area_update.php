<?php
if($this->session->userdata("admin_login")!="")
{
}
else
{
	redirect(base_url().'admin/admin');
}
?>
<?php include("header.php");?>
<script type="text/javascript" src="<?php echo base_url()?>data/validation/jquery-1.10.2.js">
</script>
<script type="text/javascript" src="<?php echo base_url()?>data/validation/validate.js"></script>
<script>
		
	$("document").ready(function(){
		$("#country_id").change(function(){
					var id = $(this).val();
					if(id == "Select Country..")
					{	//alert();
					}
					else
					{
						//alert(id);
						$.ajax({
							url:"<?php echo base_url("admin/admin_location/select_city_country")?>",
							type:"post",
							data:{country_id:id},
							success:function(result){
								//alert(result);
								$("#state_id").html(result);
							}
						});
					}
				
				
				});
				$("#state_id").change(function(){
					var id = $(this).val();
					if(id == "Select State..")
					{	//alert();
					}
					else
					{
						//alert(id);
						$.ajax({
							url:"<?php echo base_url("admin/admin_location/select_city_state")?>",
							type:"post",
							data:{state_id:id},
							success:function(result){
								//alert(result);
								$("#city_id").html(result);
							}
						});
					}
				
				});
		$("#update_area").click(function(){
			
			var country_id,state_id,city_name,area_name;
			//var fname1=getElementById("#fname").value;
			country_id = test_drop("#country_id","#msgcountry_id");
			state_id = test_drop("#state_id","#msgstate_id");
			city_id = test_drop("#city_id","#msgcity_id");
			area_name = test_areaname("#area_name","#msgarea_name");
			
			if(country_id == true && state_id == true && city_id == true  && area_name == true)
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
					<div class="content" style="width:100%;margin-left:30px">

					<div class="module" >
							<div class="module-head" align="center">
								<h3>Update Area</h3>
							</div>
							<div class="module-body" style="alignment-baseline:central;margin-left:170px">

									<br />

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_location/update_area") ?>">
                                    <div class="control-group">
										<label class="control-label" ><b>Country Name</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="country_id" id="country_id">
										<option value="Select here..">Select Country..</option>
										<?php
													
										  foreach($country_data as $data)
											{
										?>
												<option value="<?php echo $data['country_id']?>" <?php 
													if($select[0]["country_id"]==$data['country_id'])
													{
														echo "selected";
													}
												?>><?php echo $data['country_name']?></option>
										<?php
                                            }
										?>
										</select>
                                        <!--<span class="help-inline" id="msgcountry_id" style="float:right"></span>			-->
										</div>
									</div>
                                    
                                    
                                     <div class="control-group">
										<label class="control-label" ><b>State Name</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="state_id" id="state_id">
										<option value="Select here..">Select State..</option>
                                        <?php
													
										  foreach($state_data as $data)
											{
											
										?>
												<option value="<?php echo $data['state_id']?>" <?php 
													if(trim($select[0]["state_id"])==$data["state_id"])
													{
														echo "selected";
													}
												?>><?php echo $data['state_name']?></option>
										<?php
                                            }
										?>
										</select>
                                       <!-- <span class="help-inline" id="msgstate_id" style="float:right"></span>			-->
										</div>
									</div>
                               
                                <div class="control-group">
										<label class="control-label" ><b>City Name</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="city_id" id="city_id">
										<option value="Select here..">Select City..</option>
                                        <?php
													
										  foreach($city_select as $data)
											{
											
										?>
												<option value="<?php echo $data['city_id']?>" <?php 
													if(trim($select[0]["city_id"])==$data['city_id'])
													{
														echo "selected";
													}
												?> ><?php echo $data['city_name'] ?></option>
										<?php
                                            }
										?>
										</select>
                                       <!-- <span class="help-inline" id="msgcity_id" style="float:right"></span>			-->
										</div>
									</div>
                               
                                        
                                   <div class="control-group">
                                     <input type="hidden" name="area_id" id="area_id"  class="span8"  value="<?php echo $select[0]['area_id'];?>">
											<label class="control-label"><b>Area Name</b></label>
											<div class="controls">
												<input type="text" name="area_name" id="area_name" placeholder="Enter Area Name" class="span8" value="<?php echo $select[0]['area_name'];?>">
												<span class="help-inline" id="msgarea_name" style="color:#F00;position:absolute"></span>
											</div>
									</div>
                                    

										<div class="control-group">
											<div class="controls" >
                                             <a href="<?php echo base_url('admin/admin_location/admin_area_add');?>"  class="btn" data-toggle="modal" >Back</a>
												<button type="submit" class="btn" name="update_area" id="update_area">Update Area </button>
											</div>
										</div>									</form>
							</div>
						</div>
					
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>