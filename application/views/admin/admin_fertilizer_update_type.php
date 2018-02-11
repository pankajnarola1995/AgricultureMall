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
		$("#update_fertilizer_type").click(function(){
			
			var fertilizer_type_name;
			//var fname1=getElementById("#fname").value;
			fertilizer_type_name = test_fertilizername("#fertilizer_type_name","#msgfertilizer_type_name");
			if(fertilizer_type_name == true)
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
								<h3>Update Fertilizer Type</h3>
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

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_fertilizer/update_fertilizer_type") ?>">
                                    <input type="hidden" name="fertilizer_type_id" id="fertilizer_type_id"  class="span8" value="<?php echo $update_fertilizer[0]['fertilizer_type_id'];?>">
                                    <div class="control-group">
											<label class="control-label"><b>Fertilizer Type Name</b></label>
											<div class="controls">
												<input type="text" name="fertilizer_type_name" id="fertilizer_type_name" placeholder=" Enter Fertilizer Type Name" class="span8" value="<?php echo $update_fertilizer[0]['fertilizer_type_name'];?>">
												<span class="help-inline" id="msgfertilizer_type_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group">
											<div class="controls" >
                                            <button type="submit" class="btn" name="Back" id="Back">Back</button>
												<button type="submit" class="btn"  name="update_fertilizer_type" id="update_fertilizer_type">Update Fertilizer Type </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<!--/.module-->
					
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>