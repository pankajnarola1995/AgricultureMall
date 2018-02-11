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
		$("#update_tools_subtype").click(function(){
			
			var tools_type_id,tools_subtype_name;
			//var fname1=getElementById("#fname").value;
			tools_type_id = test_drop("#tools_type_id","#msgtools_type_id");
			tools_subtype_name = test_subtoolsname("#tools_subtype_name","#msgtools_subtype_name");
			if(tools_type_id == true && tools_subtype_name == true)
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
								<h3>Update Tools Sub Type</h3>
							</div>
							<div class="module-body" style="alignment-baseline:central;margin-left:170px">

									<br />

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_tools/update_tools_subtype") ?>">
                                    <input type="hidden" name="tools_subtype_id" id="tools_subtype_id"  class="span8"  value="<?php echo $update_tools_subtype_select[0]['tools_subtype_id'];?>">
                                    <div class="control-group">
										<label class="control-label" ><b>Tools Type</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="tools_type_id" id="tools_type_id">
										<option value="Select here..">Select Tools Type..</option>
										<?php
													
										  foreach($tools_data_subtype as $data)
											{
										?>
												<option value="<?php echo $data['tools_type_id']?>" <?php if($update_tools_subtype_select[0]['tools_type_id'] == $data['tools_type_id'])echo "selected"; ?> ><?php echo $data['tools_type_name']?></option>
										<?php
                                            }
										?>
										</select>
                                       <!-- <span class="help-inline" id="msgtools_type_id" style="float:right"></span>			-->
										</div>
									</div>
                                    
                                    
                                    
                                    <div class="control-group">
											<label class="control-label"><b>Tools SubType Name</b></label>
											<div class="controls">
												<input type="text" name="tools_subtype_name" id="tools_subtype_name" placeholder="Enter Tools SubType Name" class="span8"  value="<?php echo $update_tools_subtype_select[0]['tools_subtype_name'];?>">
												<span class="help-inline" id="msgtools_subtype_name"  style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group">
											<div class="controls" >
                                             <button type="submit" class="btn" name="Back" id="Back">Back</button>
												<button type="submit" class="btn" name="update_tools_subtype" id="update_tools_subtype">Update Tools SubType </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<!--/.module-->
				
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>