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
		$("#update_pesticide_subtype").click(function(){
			
			var pesticide_type_id,pesticide_subtype_name;
			//var fname1=getElementById("#fname").value;
			pesticide_type_id = test_drop("#pesticide_type_id","#msgpesticide_type_id");
			pesticide_subtype_name = test_subpesticidename("#pesticide_subtype_name","#msgpesticide_subtype_name");
			if(pesticide_type_id == true && pesticide_subtype_name == true)
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
								<h3>Update Pesticide Sub Type</h3>
							</div>
							<div class="module-body" style="alignment-baseline:central;margin-left:170px">

									<br />

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_pesticide/update_pesticide_subtype") ?>">
                                    <input type="hidden" name="pesticide_subtype_id" id="pesticide_subtype_id"  class="span8"  value="<?php echo $update_pesticide_subtype_select[0]['pesticide_subtype_id'];?>">
                                    <div class="control-group">
										<label class="control-label" ><b>Pesticide Type</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="pesticide_type_id" id="pesticide_type_id">
										<option value="Select here..">Select here..</option>
										<?php
													
										  foreach($pesticide_data_subtype as $data)
											{
										?>
												<option value="<?php echo $data['pesticide_type_id']?>" <?php if($update_pesticide_subtype_select[0]['pesticide_type_id'] == $data['pesticide_type_id'])echo "selected"; ?> ><?php echo $data['pesticide_type_name']?></option>
										<?php
                                            }
										?>
										</select>
                                       <!-- <span class="help-inline" id="msgpesticide_type_id" style="float:right"></span>			-->
										</div>
									</div>
                                    
                                    
                                    
                                    <div class="control-group" >
											<label class="control-label" style="width:260px;margin-left:-100px;"><b>Pesticide SubType Name</b></label>
											<div class="controls" >
												<input type="text" name="pesticide_subtype_name" id="pesticide_subtype_name" placeholder="Pesticide SubType Name" class="span8"  value="<?php echo $update_pesticide_subtype_select[0]['pesticide_subtype_name'];?>">
												<span class="help-inline" id="msgpesticide_subtype_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group" style="margin-left:-20px">
											<div class="controls" >
                                             <a href="<?php echo base_url('admin/admin_pesticide/admin_pesticide_add_subtype');?>"  class="btn" data-toggle="modal">Back</a>
												<button type="submit" class="btn"  name="update_pesticide_subtype" id="update_pesticide_subtype">Update Pesticide Sub Type </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<!--/.module-->
				
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>