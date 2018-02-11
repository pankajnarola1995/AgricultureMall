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
		$("#update_seed_subtype").click(function(){
			
			var seed_type_id,seed_subtype_name;
			//var fname1=getElementById("#fname").value;
			seed_type_id = test_drop("#seed_type_id","#msgseed_type_id");
			seed_subtype_name = test_subseedname("#seed_subtype_name","#msgseed_subtype_name");
			if(seed_type_id == true && seed_subtype_name == true)
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
								<h3>Update Seed Sub Type</h3>
							</div>
							<div class="module-body" style="alignment-baseline:central;margin-left:170px">

									<br />

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_seed/update_seed_subtype") ?>">
                                    <input type="hidden" name="seed_subtype_id" id="seed_subtype_id"  class="span8"  value="<?php echo $update_seed_subtype_select[0]['seed_subtype_id'];?>">
                                    <div class="control-group">
										<label class="control-label" ><b>Seed Type</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="seed_type_id" id="seed_type_id">
										<option value="Select here..">Select Seed Type..</option>
										<?php
													
										  foreach($seed_data_subtype as $data)
											{
										?>
												<option value="<?php echo $data['seed_type_id']?>" <?php if(trim($update_seed_subtype_select[0]['seed_type_id']) == trim($data['seed_type_id']))echo "selected"; ?> ><?php echo $data['seed_type_name']?></option>
										<?php
                                            }
										?>
										</select>
                                         <!-- <span class="help-inline" id="msgseed_type_id" style="float:right" style="color:#F00;position:absolute"></span>		-->
										</div>
									</div>
                                    
                                    
                                    
                                    <div class="control-group">
											<label class="control-label"><b>Seed SubType Name</b></label>
											<div class="controls">
												<input type="text" name="seed_subtype_name" id="seed_subtype_name" placeholder="Enter Seed SubType Name" class="span8"  value="<?php echo $update_seed_subtype_select[0]['seed_subtype_name'];?>">
												   <span class="help-inline" id="msgseed_subtype_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group">
											<div class="controls" >
                                              <button type="submit" class="btn" name="Back" id="Back">Back</button>
												<button type="submit" class="btn " name="update_seed_subtype" id="update_seed_subtype">Update Seed SubType </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<!--/.module-->
				
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>