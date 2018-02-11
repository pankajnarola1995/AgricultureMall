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
		$("#update_tools_drive_type").click(function(){
			
			var tools_drive_name;
			//var fname1=getElementById("#fname").value;
			tools_drive_name = test_toolsdrivename("#tools_drive_name","#msgtools_drive_name");
			if(tools_drive_name == true)
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
								<h3>Update Tools Drive Type</h3>
							</div>
							<div class="module-body" style="alignment-baseline:central;">

									<!--<div class="alert">
										<button type="button" class="close" data-dismiss="alert">×</button>
										<strong>Warning!</strong> Something fishy here!
									</div>
									<div class="alert alert-error">
										<button type="button" class="close" data-dismiss="alert">×</button>
										<strong>Oh snap!</strong> Whats wrong with you? 
									</div>
									<div class="alert alert-success">
										<button type="button" class="close" data-dismiss="alert">×</button>
										<strong>Well done!</strong> Now you are listening me :) 
									</div>
-->
									<br />

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_agro_other/update_tools_drive_type") ?>">
                                    <input type="hidden" name="tools_drive_id" id="tools_drive_id"  class="span8" value="<?php echo $update_tools_drive[0]['tools_drive_id'];?>">
                                    <div class="control-group">
											<label class="control-label" style="width:310px"><b>Tools Drive Type Name &nbsp;&nbsp;</b></label>
											<div class="controls">
												<input type="text" name="tools_drive_name" id="tools_drive_name" placeholder="Enter Tools Drive Type Name" class="span8" value="<?php echo $update_tools_drive[0]['tools_drive_name'];?>" style="width:310px">
												<span class="help-inline" id="msgtools_drive_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group" style="margin-left:120px;">
											<div class="controls" >
                                             <a href="<?php echo base_url('admin/admin_agro_other/tools_drive_type');?>"  class="btn" data-toggle="modal" >Back</a>
												<button type="submit" class="btn"  name="update_tools_drive_type" id="update_tools_drive_type">Update Tools Drive Type </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<!--/.module-->
					
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>