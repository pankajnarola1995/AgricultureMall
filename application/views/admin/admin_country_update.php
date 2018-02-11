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
		$("#update_country").click(function(){
			
			var country_name;
			//var fname1=getElementById("#fname").value;
			country_name = test_countryname("#country_name","#msgcountry_name");
			if(country_name == true)
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
								<h3>Update Country</h3>
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

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_location/update_country") ?>">
                                    <input type="hidden" name="country_id" id="country_id"  class="span8" value="<?php echo $update_country[0]['country_id'];?>">
                                    <div class="control-group">
											<label class="control-label"><b>Country Name</b></label>
											<div class="controls">
												<input type="text" name="country_name" id="country_name" placeholder="Enter Country Name" class="span8" value="<?php echo $update_country[0]['country_name'];?>">
												<span class="help-inline" id="msgcountry_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group">
											<div class="controls" >
                                            <a href="<?php echo base_url('admin/admin_location');?>"  class="btn" data-toggle="modal" >Back</a>
												<button type="submit" class="btn"  name="update_country" id="update_country">Update Country </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<!--/.module-->
					
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>