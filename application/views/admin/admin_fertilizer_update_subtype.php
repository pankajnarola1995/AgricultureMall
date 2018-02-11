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
		$("#update_fertilizer_subtype").click(function(){
			
			var fertilizer_type_id,fertilizer_subtype_name;
			//var fname1=getElementById("#fname").value;
			fertilizer_type_id = test_drop("#fertilizer_type_id","#msgfertilizer_type_id");
			fertilizer_subtype_name = test_subfertilizername("#fertilizer_subtype_name","#msgfertilizer_subtype_name");
			if(fertilizer_type_id == true && fertilizer_subtype_name == true)
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
								<h3>Update Fertilizer Sub Type</h3>
							</div>
							<div class="module-body" style="alignment-baseline:central;margin-left:170px">

									<br />

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_fertilizer/update_fertilizer_subtype") ?>">
                                    <input type="hidden" name="fertilizer_subtype_id" id="fertilizer_subtype_id"  class="span8"  value="<?php echo $update_fertilizer_subtype_select[0]['fertilizer_subtype_id'];?>">
                                    <div class="control-group">
										<label class="control-label" ><b>Fertilizer Type</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="fertilizer_type_id" id="fertilizer_type_id">
										<option value="Select here..">Select Fertilizer Type</option>
										<?php
													
										  foreach($fertilizer_data_subtype as $data)
											{
										?>
												<option value="<?php echo $data['fertilizer_type_id']?>" <?php if(trim($update_fertilizer_subtype_select[0]['fertilizer_type_id']) == trim($data['fertilizer_type_id']))echo "selected"; ?> ><?php echo $data['fertilizer_type_name']?></option>
										<?php
                                            }
										?>
										</select>
                                       <!-- <span class="help-inline" id="msgfertilizer_type_id" style="float:right"></span>			-->
										</div>
									</div>
                                    
                                    
                                    
                                    <div class="control-group">
											<label class="control-label" style="width:260px;margin-left:-100px;"><b>Fertilizer SubType Name</b></label>
											<div class="controls">
												<input type="text" name="fertilizer_subtype_name" id="fertilizer_subtype_name" placeholder="Enter Fertilizer SubType Name" class="span8"  value="<?php echo $update_fertilizer_subtype_select[0]['fertilizer_subtype_name'];?>">
												<span class="help-inline" id="msgfertilizer_subtype_name" style="float:right" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group" style="margin-left:-20px">
											<div class="controls" >
                                            <button type="submit" class="btn"  name="Back" id="Back">Back</button>
												<button type="submit" class="btn" name="update_fertilizer_subtype" id="update_fertilizer_subtype">Update Fertilizer Sub Type </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<!--/.module-->
				
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>