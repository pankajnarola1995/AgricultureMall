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
		$("#update_tools_type").click(function(){
			
			var tools_type_name;
			//var fname1=getElementById("#fname").value;
			tools_type_name = test_toolsname("#tools_type_name","#msgtools_type_name");
			if(tools_type_name == true)
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
								<h3>Update Tools Type</h3>
							</div>
							<div class="module-body" style="alignment-baseline:central;margin-left:170px">

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

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_tools/update_tools_type") ?>">
                                    <input type="hidden" name="tools_type_id" id="tools_type_id"  class="span8" value="<?php echo $update_tools[0]['tools_type_id'];?>">
                                    <div class="control-group">
											<label class="control-label"><b>Tools Type Name</b></label>
											<div class="controls">
												<input type="text" name="tools_type_name" id="tools_type_name" placeholder="Enter Tools Type Name" class="span8" value="<?php echo $update_tools[0]['tools_type_name'];?>">
												<span class="help-inline" id="msgtools_type_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group">
											<div class="controls" >
                                             <button type="submit" class="btn"  name="Back" id="Back">Back</button>
												<button type="submit" class="btn"  name="update_tools_type" id="update_tools_type">Update Tools Type </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<!--/.module-->
					
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>