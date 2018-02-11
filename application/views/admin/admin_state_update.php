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
		$("#update_state").click(function(){
			
			var country_id,state_name;
			//var fname1=getElementById("#fname").value;
			country_id = test_drop("#country_id","#msgcountry_id");
			state_name = test_statename("#state_name","#msgstate_name");
			if(country_id == true && state_name == true)
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
								<h3>Update State</h3>
							</div>
							<div class="module-body" style="alignment-baseline:central;margin-left:170px">

									<br />

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_location/update_state") ?>">
                                    <input type="hidden" name="state_id" id="state_id"  class="span8"  value="<?php echo $update_state_select[0]['state_id'];?>">
                                    <div class="control-group">
										<label class="control-label" ><b>Country Name</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="country_id" id="country_id">
										<option value="Select here..">Select Country..</option>
										<?php
													
										  foreach($country_data as $data)
											{
										?>
												<option value="<?php echo $data['country_id']?>" <?php if($update_state_select[0]['country_id']==$data['country_id'])echo "selected"?> ><?php echo $data['country_name']?></option>
										<?php
                                            }
										?>
										</select>
                                        <!--<span class="help-inline" id="msgcountry_id"></span>			-->
										</div>
									</div>
                                    
                                    
                                    
                                    <div class="control-group">
											<label class="control-label"><b>State Name</b></label>
											<div class="controls">
												<input type="text" name="state_name" id="state_name" placeholder="Enter State Name" class="span8"  value="<?php echo $update_state_select[0]['state_name'];?>">
												<span class="help-inline" id="msgstate_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group">
											<div class="controls" >
												<button type="submit" class="btn" name="update_state" id="update_state">Update State</button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<!--/.module-->
				
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>