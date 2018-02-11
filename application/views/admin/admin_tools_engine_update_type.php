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
		$("#update_tools_engine_type").click(function(){
			
			var tools_engine_name;
			//var fname1=getElementById("#fname").value;
			tools_engine_name = test_toolsenginname("#tools_engine_name","#msgtools_engine_name");
			if(tools_engine_name == true)
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
								<h3>Update Tools Engine Type</h3>
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

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_agro_other/update_tools_engine_type") ?>">
                                    <input type="hidden" name="tools_engine_id" id="tools_engine_id"  class="span8" value="<?php echo $update_tools_engine[0]['tools_engine_id'];?>">
                                    <div class="control-group">
											<label class="control-label" style="width:310px"><b>Tools Engine Type Name &nbsp;&nbsp;</b></label>
											<div class="controls">
												<input type="text" name="tools_engine_name" id="tools_engine_name" placeholder="Enter Tools engine Type Name" class="span8" value="<?php echo $update_tools_engine[0]['tools_engine_name'];?>" style="width:310px">
												<span class="help-inline" id="msgtools_engine_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group" style="margin-left:120px;">
											<div class="controls" >
                                             <a href="<?php echo base_url('admin/admin_agro_other/tools_engine_type');?>"  class="btn" data-toggle="modal" >Back</a>
												<button type="submit" class="btn"  name="update_tools_engine_type" id="update_tools_engine_type">Update Tools Engine Type </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<!--/.module-->
					
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>