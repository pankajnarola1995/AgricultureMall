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
		$("#add_fertilizer_submenu").click(function(){
			
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
		$("#select_fertilizer_type").change(function(){
					var id = $(this).val();
					var type_id = $("#select_fertilizer_subtype").val();
					if(id == "Select fertilizer Type..")
					{	//alert();
					window.location.assign("<?php echo base_url("admin/admin_fertilizer/admin_fertilizer_add_submenu")?>");
					}
					else
					{
						//alert(id);
						
						window.location.assign("<?php echo base_url("admin/admin_fertilizer/select_fertilizer_sub_type_data")?>/"+id);
					}
				
				});
			$("#select_fertilizer_subtype").change(function(){
					var id = $(this).val();
					var type_id = $("#select_fertilizer_type").val();
					//alert(id);
					//alert(type_id);
					if(id != "Select fertilizer subType.." && type_id == "Select fertilizer Type..")
					{	//alert();
						window.location.assign("<?php echo base_url("admin/admin_fertilizer/select_fertilizer_subtype_data1")?>/"+id);
					}
					else if(id == "Select fertilizer subType.." && type_id != "Select fertilizer Type..")
					{	//alert();
						window.location.assign("<?php echo base_url("admin/admin_fertilizer/select_fertilizer_sub_type_data")?>/"+type_id);
					}
					else if(id == "Select fertilizer subType.." && type_id == "Select fertilizer Type..")
					{	//alert();
						window.location.assign("<?php echo base_url("admin/admin_fertilizer/admin_fertilizer_add_submenu")?>");
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
								<h3>Add Fertilizer Sub Menu Type</h3>
							</div>
							<div class="module-body" style="alignment-baseline:central;margin-left:150px">

									<br />

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_fertilizer/insert_fertilizer_submenu_type") ?>">
                                    <div class="control-group">
										<label class="control-label" ><b>Fertilizer Type</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="fertilizer_type_id" id="fertilizer_type_id">
										<option value="Select here..">Select Fertilizer Type..</option>
										<?php
													
										  foreach($fertilizer_data_type as $data)
											{
										?>
												<option value="<?php echo $data['fertilizer_type_id']?>"><?php echo $data['fertilizer_type_name']?></option>
										<?php
                                            }
										?>
										</select>
                                       <!-- <span class="help-inline" id="msgfertilizer_type_id" style="float:right"></span>			-->
										</div>
									</div>
                                    
                                    
                                     <div class="control-group">
										<label class="control-label" ><b>Fertilizer Sub Type</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="fertilizer_sub_type_id" id="fertilizer_sub_type_id">
										<option value="Select here..">Select Fertilizer SubType..</option>
										</select>
                                        <!--<span class="help-inline" id="msgfertilizer_sub_type_id" style="float:right"></span>			-->
										</div>
									</div>
                               
                                        
                                    <div class="control-group">
											<label class="control-label" style="width:260px;margin-left:-100px;"><b>Fertilizer Submenu Name</b></label>
											<div class="controls">
												<input type="text" name="fertilizer_submenu_name" id="fertilizer_submenu_name" placeholder=" Enter Fertilizer SubMenu Type Name" class="span8">
												<span class="help-inline" id="msgfertilizer_submenu_name" style="color:#F00;position:absolute" ></span>
											</div>
										</div>
                                    
										<div class="control-group">
											<div class="controls" >
												<button type="submit" class="btn" name="add_fertilizer_submenu" id="add_fertilizer_submenu">Add Fertilizer SubMenu Type </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<div class="module">
							<div class="module-head">
								<h3>Fertilizer Sub Menu Type Data</h3>
							</div>
                           <br />
                            
                                   
							<div class="module-body table"  >
                              <div class="form-horizontal row-fluid" style="margin-left:150px">
                              <form class="form-horizontal row-fluid" method="post" action="#">
										<label class="control-label"><b>Fertilizer Type</b></label>
										<div class="controls" >
										<select tabindex="1" data-placeholder="Select fertilizer Type.." class="span5" name="select_fertilizer_type" id="select_fertilizer_type">
											<option value="Select fertilizer Type.." selected >Select Fertilizer Type..</option>
										<?php
													
										  foreach($fertilizer_data_type as $data)
											{
										?>
												<option value="<?php echo $data['fertilizer_type_id']?>" 
                                                 <?php if($fertilizer_type)
												{
													if($fertilizer_type[0]['fertilizer_type_id'] == $data['fertilizer_type_id'])
													echo "selected"; 
												}?> ><?php echo $data['fertilizer_type_name']?></option>
										<?php
                                            }
										?>
										</select>
                                        <span class="help-inline" id="msgfertilizer_type"></span>			
										</div>
									</div>
                                    <br />
                                      <div class="form-horizontal row-fluid" style="margin-left:150px">
										<label class="control-label"><b>Fertilizer Sub Type</b></label>
										<div class="controls" >
										<select tabindex="1" data-placeholder="Select fertilizer Sub Type.." class="span5" name="select_fertilizer_subtype" id="select_fertilizer_subtype">
										<option value="Select fertilizer subType..">Select Fertilizer SubType..</option>
										<?php
													
										  foreach($fertilizer_data_subtype as $data)
											{
											
										?>
												<option value="<?php echo $data['fertilizer_subtype_id']?>" 
                                                 <?php if($fertilizer_subtype)
												{
													if($fertilizer_subtype[0]['fertilizer_subtype_id'] == $data['fertilizer_subtype_id'])
													echo "selected"; 
												}?> ><?php echo $data['fertilizer_subtype_name']?></option>
										<?php
                                            }
										?>
										</select>
                                        <span class="help-inline" id="msgfertilizer_type"></span>			
										</div>
									</div>
                                    </form>
                                    <br />
								<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
											<th>Fertilizer Sub Menu Name</th>
											<th>Delete</th>
                                            <th>Update</th>
                                           	</tr>
									</thead>
									<tbody >
                                     <?php
									 if($fertilizer_data_submenu)
									 {
									foreach($fertilizer_data_submenu as $select_data)
											{
										?>
							<tr class="odd gradeX">
								<td><?php echo $select_data['fertilizer_submenu_name'] ?></td>
								<td ><a href="<?php echo base_url()?>admin/admin_fertilizer/select_delete_fertilizer_submenu/<?php echo $select_data['fertilizer_submenu_id'];?>" ><img src="<?php echo base_url("data/images/delete.png");?>"  style="width:30px;height:30px;margin-left:20px" / ></a></td>
                                <td><a href="<?php echo base_url()?>admin/admin_fertilizer/select_update_fertilizer_submenu/<?php echo $select_data['fertilizer_submenu_id'];?>"><img src="<?php echo base_url("data/images/update.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
							</tr>
                            <?php
							}
									 }
							?>

 									</tbody>							
									<tfoot>
										<tr>
											<th>Fertilizer Sub Menu Name</th>
											<th>Delete</th>
                                            <th>Update</th>
										</tr>
									</tfoot>
								</table>
                                  
							</div>
						</div><!--/.module-->
					<br />
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>