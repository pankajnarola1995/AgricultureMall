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
		$("#seed_type_id").change(function(){
					var id = $(this).val();
					if(id == "Select Seed Type..")
					{	//alert();
					}
					else
					{
						//alert(id);
						$.ajax({
							url:"<?php echo base_url("admin/admin_seed/select_submenu_seed_type")?>",
							type:"post",
							data:{seed_type_id:id},
							success:function(result){
								//alert(result);
								$("#seed_sub_type_id").html(result);
							}
						});
					}
				
				});
		$("#update_seed_submenu").click(function(){
			
			var seed_type_id,seed_sub_type_id,seed_submenu_name;
			//var fname1=getElementById("#fname").value;
			seed_type_id = test_drop("#seed_type_id","#msgseed_type_id");
			seed_sub_type_id = test_drop("#seed_sub_type_id","#msgseed_sub_type_id");
			seed_submenu_name = test_submenuseedname("#seed_submenu_name","#msgseed_submenu_name");
			if(seed_type_id == true && seed_sub_type_id == true && seed_submenu_name == true)
			{
				return true;
				
			}
			else
			{
				return false;
			}
			
		});
			$("#select_seed_subtype").change(function(){
					var id = $(this).val();
					var type_id = $("#select_seed_type").val();
					//alert(id);
					//alert(type_id);
					if(id == "Select Seed subType..")
					{	//alert();
					
					}
					else
					{
						//alert(id);
						
						window.location.assign("<?php echo base_url("admin/admin_seed/select_seed_submenu_type_data")?>/"+id+" "+type_id);
					}
				
				});
	
	});
</script>
				<div class="span9">
					<div class="content" style="width:100%;margin-left:30px">

					<div class="module" >
							<div class="module-head" align="center">
								<h3>Update Seed Sub Menu Type</h3>
							</div>
							<div class="module-body" style="alignment-baseline:central;margin-left:170px">

									<br />

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_seed/update_seed_submenu") ?>">
                                    <div class="control-group">
										<label class="control-label" ><b>Seed Type</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="seed_type_id" id="seed_type_id">
										<option value="Select here..">Select Seed Type..</option>
										<?php
													
										  foreach($seed_data_type as $data)
											{
										?>
												<option value="<?php echo $data['seed_type_id']?>" <?php if(trim($select[0]['seed_type_id'])==trim($data['seed_type_id']))echo "selected";?>><?php echo $data['seed_type_name']?></option>
										<?php
                                            }
										?>
										</select>
                                          <!-- <span class="help-inline" id="msgseed_type_id" style="float:right"></span>-->
										</div>
									</div>
                                    
                                    
                                     <div class="control-group">
										<label class="control-label" ><b>Seed Sub Type</b></label>
										<div class="controls">
                                        <select tabindex="1" data-placeholder="Select here" class="span8" name="seed_sub_type_id" id="seed_sub_type_id">
										<option value="Select here..">Select Seed Sub Type..</option>
										<?php
													
										  foreach($seed_data_subtype as $data)
											{
										?>
												<option value="<?php echo $data['seed_subtype_id']?>" <?php if(trim($select[0]['seed_subtype_id'])==trim($data['seed_subtype_id']))echo "selected";?>><?php echo $data['seed_subtype_name']?></option>
										<?php
                                            }
										?>
										</select>
                                           <!--<span class="help-inline" id="msgseed_sub_type_id" style="float:right"></span>-->
										</div>
									</div>
                               
                                        
                                    <div class="control-group">
                                     <input type="hidden" name="seed_submenu_id" id="seed_submenu_id"  class="span8"  value="<?php echo $update_seed_submenu_select[0]['seed_submenu_id'];?>">
											<label class="control-label"><b>Seed Submenu Name</b></label>
											<div class="controls">
												<input type="text" name="seed_submenu_name" id="seed_submenu_name" placeholder="Enter Seed SubMenu Type Name" class="span8" value="<?php echo $update_seed_submenu_select[0]['seed_submenu_name']?>">
												<span class="help-inline" id="msgseed_submenu_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group">
											<div class="controls" >
                                              <button type="submit" class="btn "  name="Back" id="Back">Back</button>
												<button type="submit" class="btn " name="update_seed_submenu" id="update_seed_submenu">Update Seed SubMenu Type </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>