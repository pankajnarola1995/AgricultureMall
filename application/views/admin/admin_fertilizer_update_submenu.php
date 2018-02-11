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
		$("#fertilizer_type_id").change(function(){
					var id = $(this).val();
					if(id == "Select fertilizer Type..")
					{	//alert();
					}
					else
					{
						//alert(id);
						$.ajax({
							url:"<?php echo base_url("admin/admin_fertilizer/select_submenu_fertilizer_type")?>",
							type:"post",
							data:{fertilizer_type_id:id},
							success:function(result){
								//alert(result);
								$("#fertilizer_sub_type_id").html(result);
							}
						});
					}
				
				});
		$("#update_fertilizer_submenu").click(function(){
			
			var fertilizer_type_id,fertilizer_sub_type_id,fertilizer_submenu_name;
			//var fname1=getElementById("#fname").value;
			fertilizer_type_id = test_drop("#fertilizer_type_id","#msgfertilizer_type_id");
			fertilizer_sub_type_id = test_drop("#fertilizer_sub_type_id","#msgfertilizer_sub_type_id");
			fertilizer_submenu_name = test_submenufertilizername("#fertilizer_submenu_name","#msgfertilizer_submenu_name");
			if(fertilizer_type_id == true && fertilizer_sub_type_id == true && fertilizer_submenu_name == true)
			{
				return true;
				
			}
			else
			{
				return false;
			}
			
		});
			$("#select_fertilizer_subtype").change(function(){
					var id = $(this).val();
					var type_id = $("#select_fertilizer_type").val();
					//alert(id);
					//alert(type_id);
					if(id == "Select fertilizer subType..")
					{	//alert();
					
					}
					else
					{
						//alert(id);
						
						window.location.assign("<?php echo base_url("admin/admin_fertilizer/select_fertilizer_submenu_type_data")?>/"+id+" "+type_id);
					}
				
				});
	
	});
</script>
				<div class="span9">
					<div class="content" style="width:100%;margin-left:30px">

					<div class="module" >
							<div class="module-head" align="center">
								<h3>Update Fertilizer Sub Menu Type</h3>
							</div>
							<div class="module-body" style="alignment-baseline:central;margin-left:170px">

									<br />

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_fertilizer/update_fertilizer_submenu") ?>">
                                    <div class="control-group">
										<label class="control-label" ><b>Fertilizer Type</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="fertilizer_type_id" id="fertilizer_type_id">
										<option value="Select here..">Select Fertilizer Type..</option>
										<?php
													
										  foreach($fertilizer_data_type as $data)
											{
										?>
												<option value="<?php echo $data['fertilizer_type_id']?>" <?php if(trim($select[0]['fertilizer_type_id'])==trim($data['fertilizer_type_id']))echo "selected";?>><?php echo $data['fertilizer_type_name']?></option>
										<?php
                                            }
										?>
										</select>
                                        <!--<span class="help-inline" id="msgfertilizer_type_id" style="float:right"></span>			-->
										</div>
									</div>
                                    
                                    
                                     <div class="control-group">
										<label class="control-label" ><b>Fertilizer Sub Type</b></label>
										<div class="controls">
                                        <select tabindex="1" data-placeholder="Select here" class="span8" name="fertilizer_sub_type_id" id="fertilizer_sub_type_id">
										<option value="Select here..">Select Fertilizer SubType..</option>
										<?php
													
										  foreach($fertilizer_data_subtype as $data)
											{
										?>
												<option value="<?php echo $data['fertilizer_subtype_id']?>" <?php if(trim($select[0]['fertilizer_subtype_id'])==trim($data['fertilizer_subtype_id']))echo "selected";?>><?php echo $data['fertilizer_subtype_name']?></option>
										<?php
                                            }
										?>
										</select>
<!--                                        <span class="help-inline" id="msgfertilizer_sub_type_id" style="float:right"></span>-->			
										</div>
									</div>
                               
                                        
                                    <div class="control-group">
                                     <input type="hidden" name="fertilizer_submenu_id" id="fertilizer_submenu_id"  class="span8"  value="<?php echo $update_fertilizer_submenu_select[0]['fertilizer_submenu_id'];?>">
											<label class="control-label" style="width:260px;margin-left:-100px;"><b>Fertilizer Submenu Name</b></label>
											<div class="controls">
												<input type="text" name="fertilizer_submenu_name" id="fertilizer_submenu_name" placeholder="Enter Fertilizer SubMenu Type Name" class="span8" value="<?php echo $update_fertilizer_submenu_select[0]['fertilizer_submenu_name']?>">
												<span class="help-inline" id="msgfertilizer_submenu_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group" style="margin-left:-20px">
											<div class="controls" >
                                            <button type="submit" class="btn"  name="Back" id="Back">Back</button>
												<button type="submit" class="btn"  name="update_fertilizer_submenu" id="update_fertilizer_submenu">Update Fertilizer Sub Menu Type </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>