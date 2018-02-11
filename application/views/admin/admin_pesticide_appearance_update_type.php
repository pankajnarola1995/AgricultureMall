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
		$("#update_pesticide_appearance_type").click(function(){
			
			var pesticide_appearance_name;
			//var fname1=getElementById("#fname").value;
			pesticide_appearance_name = test_pesticideappername("#pesticide_appearance_name","#msgpesticide_appearance_name");
			if(pesticide_appearance_name == true)
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
								<h3>Update Pesticide Appearance Type</h3>
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

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_agro_other/update_pesticide_appearance_type") ?>">
                                    <input type="hidden" name="pesticide_appearance_id" id="pesticide_appearance_id"  class="span8" value="<?php echo $update_pesticide_appearance[0]['pesticide_appearance_id'];?>">
                                    <div class="control-group">
											<label class="control-label" style="width:310px"><b>Pesticide Appearance Type Name &nbsp;&nbsp;</b></label>
											<div class="controls">
												<input type="text" name="pesticide_appearance_name" id="pesticide_appearance_name" placeholder="Enter pesticide appearance Type Name" class="span8" value="<?php echo $update_pesticide_appearance[0]['pesticide_appearance_name'];?>" style="width:310px">
												<span class="help-inline" id="msgpesticide_appearance_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group" style="margin-left:120px;">
											<div class="controls" >
                                             <a href="<?php echo base_url('admin/admin_agro_other/pesticide_appearance_type');?>"  class="btn" >Back</a>
												<button type="submit" class="btn"  name="update_pesticide_appearance_type" id="update_pesticide_appearance_type">Update Pesticide Appearance Type </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<!--/.module-->
					
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>