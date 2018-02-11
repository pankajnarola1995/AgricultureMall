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
		$("#update_pesticide_classification_type").click(function(){
			
			var pesticide_classification_name;
			//var fname1=getElementById("#fname").value;
			pesticide_classification_name = test_pesticideclassificationname("#pesticide_classification_name","#msgpesticide_classification_name");
			if(pesticide_classification_name == true)
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
								<h3>Update Pesticide Classification</h3>
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

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_agro_other/update_pesticide_classification_type") ?>">
                                    <input type="hidden" name="pesticide_classification_id" id="pesticide_classification_id"  class="span8" value="<?php echo $update_pesticide_classification[0]['pesticide_classification_id'];?>">
                                    <div class="control-group">
											<label class="control-label" style="width:310px"><b>Pesticide Classification Name &nbsp;&nbsp;</b></label>
											<div class="controls">
												<input type="text" name="pesticide_classification_name" id="pesticide_classification_name" placeholder="Enter Pesticide classification Type Name" class="span8" value="<?php echo $update_pesticide_classification[0]['pesticide_classification_name'];?>" style="width:310px">
												<span class="help-inline" id="msgpesticide_classification_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group" style="margin-left:120px;">
											<div class="controls" >
                                             <a href="<?php echo base_url('admin/admin_agro_other/pesticide_classification_type');?>"  class="btn" data-toggle="modal" >Back</a>
												<button type="submit" class="btn" name="update_pesticide_classification_type" id="update_pesticide_classification_type">Update Pesticide Classification </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<!--/.module-->
					
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>