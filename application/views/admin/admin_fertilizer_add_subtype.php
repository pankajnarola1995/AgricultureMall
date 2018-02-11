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
		$("#add_fertilizer_subtype").click(function(){
			
			var fertilizer_type,fertilizer_subtype_name;
			//var fname1=getElementById("#fname").value;
			fertilizer_type_id = test_drop("#fertilizer_type_id","#msgfertilizer_type_id");
			fertilizer_subtype_name = test_subfertilizername("#fertilizer_subtype_name","#msgfertilizer_subtype_name");
			if(fertilizer_type_id == true && fertilizer_subtype_name == true)
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
					if(id == "Select fertilizer Type..")
					{	//alert();
					window.location.assign("<?php echo base_url("admin/admin_fertilizer/admin_fertilizer_add_subtype")?>");
					
					}
					else
					{
						//alert(id);
						
						window.location.assign("<?php echo base_url("admin/admin_fertilizer/select_fertilizer_type_data")?>/"+id);
					}
				
				});
	
	});
</script>
				<div class="span9">
					<div class="content" style="width:100%;margin-left:30px">

					<div class="module" >
							<div class="module-head" align="center">
								<h3>Add Fertilizer Sub Type</h3>
							</div>
							<div class="module-body" style="alignment-baseline:central;margin-left:170px">

									<br />

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_fertilizer/insert_fertilizer_subtype") ?>">
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
                                        <!--<span class="help-inline" id="msgfertilizer_type_id" style="float:right"></span>	-->		
										</div>
									</div>
                                    <div class="control-group">
											<label class="control-label" style="width:260px;margin-left:-100px;"><b>Fertilizer SubType Name</b></label>
											<div class="controls">
												<input type="text" name="fertilizer_subtype_name" id="fertilizer_subtype_name" placeholder="Enter Fertilizer SubType Name" class="span8">
												<span class="help-inline" id="msgfertilizer_subtype_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group">
											<div class="controls" >
												<button type="submit" class="btn"  name="add_fertilizer_subtype" id="add_fertilizer_subtype">Add Fertilizer Sub Type </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<div class="module">
							<div class="module-head">
								<h3>Fertilizer Sub Type Data</h3>
							</div>
                           <br />
                                    <div class="form-horizontal row-fluid" style="margin-left:150px">
										<label class="control-label"><b>Fertilizer Type</b></label>
										<div class="controls" >
										<select tabindex="1" data-placeholder="Select fertilizer Type.." class="span5" name="select_fertilizer_type" id="select_fertilizer_type">
										<option value="Select fertilizer Type..">Select Fertilizer Type..</option>
										<?php
													
										  foreach($fertilizer_data_type as $data)
											{
										?>
												<option value="<?php echo $data['fertilizer_type_id']?>" <?php if($fertilizer_subtype)
												{
													if($fertilizer_subtype['fertilizer_type_id'] == $data['fertilizer_type_id'])
													echo "selected";
												}?> ><?php echo $data['fertilizer_type_name']?></option>
										<?php
                                            }
										?>
										</select>
                                        <span class="help-inline" id="msgfertilizer_type"></span>			
										</div>
									</div>
                                   
							<div class="module-body table"  >
                            
								<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
											<th>Fertilizer Sub Type Name</th>
											<th>Delete</th>
                                            <th>Update</th>
                                           	</tr>
									</thead>
									<tbody >
                                     <?php
									 if($fertilizer_data_subtype)
									 {
									foreach($fertilizer_data_subtype as $select_data)
											{
										?>
							<tr class="odd gradeX">
								<td><?php echo $select_data['fertilizer_subtype_name'] ?></td>
								<td ><a href="<?php echo base_url()?>admin/admin_fertilizer/select_delete_fertilizer_subtype/<?php echo $select_data['fertilizer_subtype_id'];?>" ><img src="<?php echo base_url("data/images/delete.png");?>"  style="width:30px;height:30px;margin-left:20px" / ></a></td>
                                <td><a href="<?php echo base_url()?>admin/admin_fertilizer/select_update_fertilizer_subtype/<?php echo $select_data['fertilizer_subtype_id'];?>"><img src="<?php echo base_url("data/images/update.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
							</tr>
                            <?php
							}
									 }
							?>

 									</tbody>							
									<tfoot>
										<tr>
											<th>Fertilizer Sub Type Name</th>
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