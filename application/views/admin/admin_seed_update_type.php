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
		$("#update_seed_type").click(function(){
			
			var seed_type_name;
			//var fname1=getElementById("#fname").value;
			seed_type_name = test_seedname("#seed_type_name","#msgseed_type_name");
			if(seed_type_name == true)
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
								<h3>Update Seed Type</h3>
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

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_seed/update_seed_type") ?>">
                                    <input type="hidden" name="seed_type_id" id="seed_type_id"  class="span8" value="<?php echo $update_seed[0]['seed_type_id'];?>" >
                                    <div class="control-group">
											<label class="control-label"><b>Seed Type Name</b></label>
											<div class="controls">
												<input type="text" name="seed_type_name" id="seed_type_name" placeholder="Enter Seed Type Name" class="span8" value="<?php echo $update_seed[0]['seed_type_name'];?>">
												   <span class="help-inline" id="msgseed_type_name" style="position:absolute;color:#F00"></span>
											</div>
										</div>
                                    
										<div class="control-group">
											<div class="controls" >
                                            <button type="submit" class="btn" name="Back" id="Back">Back</button>
												<button type="submit" class="btn"  name="update_seed_type" id="update_seed_type">Update Seed Type </button>
                                                
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<!--/.module-->
					
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>