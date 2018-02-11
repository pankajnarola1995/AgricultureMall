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
		$("#add_seed_subtype").click(function(){
			
			var seed_type,seed_subtype_name;
			//var fname1=getElementById("#fname").value;
			seed_type_id = test_drop("#seed_type_id","#msgseed_type_id");
			seed_subtype_name = test_subseedname("#seed_subtype_name","#msgseed_subtype_name");
			if(seed_type_id == true && seed_subtype_name == true)
			{
				return true;
				
			}
			else
			{
				return false;
			}
			
		});
	$("#select_seed_type").change(function(){
					var id = $(this).val();
					if(id == "Select Seed Type..")
					{	//alert();
					window.location.assign("<?php echo base_url("admin/admin_seed/admin_seed_add_subtype")?>");
					}
					else
					{
						//alert(id);
						
						window.location.assign("<?php echo base_url("admin/admin_seed/select_seed_type_data")?>/"+id);
					}
				
				});
	
	});
</script>
				<div class="span9">
					<div class="content" style="width:100%;margin-left:30px">

					<div class="module" >
							<div class="module-head" align="center">
								<h3>Add Seed Sub Type</h3>
							</div>
							<div class="module-body" style="alignment-baseline:central;margin-left:170px">

									<br />

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_seed/insert_seed_subtype") ?>">
                                    <div class="control-group">
										<label class="control-label" ><b>Seed Type</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="seed_type_id" id="seed_type_id">
										<option value="Select here..">Select Seed Type..</option>
										<?php
													
										  foreach($seed_data_type as $data)
											{
										?>
												<option value="<?php echo $data['seed_type_id']?>"><?php echo $data['seed_type_name']?></option>
										<?php
                                            }
										?>
										</select>
                                          <!-- <span class="help-inline" id="msgseed_type_id" style="float:right"></span>			-->
										</div>
									</div>
                                    <div class="control-group">
											<label class="control-label"><b>Seed SubType Name</b></label>
											<div class="controls">
												<input type="text" name="seed_subtype_name" id="seed_subtype_name" placeholder="Enter Seed SubType Name" class="span8">
												   <span class="help-inline" id="msgseed_subtype_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group">
											<div class="controls" >
												<button type="submit" class="btn"  name="add_seed_subtype" id="add_seed_subtype">Add Seed Sub Type </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<div class="module">
							<div class="module-head">
								<h3>Seed Sub Type Data</h3>
							</div>
                           <br />
                                    <div class="form-horizontal row-fluid" style="margin-left:150px">
										<label class="control-label"><b>Seed Type</b></label>
										<div class="controls" >
										<select tabindex="1" data-placeholder="Select Seed Type.." class="span5" name="select_seed_type" id="select_seed_type">
										<option value="Select Seed Type..">Select Seed Type..</option>
										<?php
													
										  foreach($seed_data_type as $data)
											{
										?>
												<option value="<?php echo $data['seed_type_id']?>" <?php if($seed_subtype)
												{
													if($seed_subtype['seed_type_id'] == $data['seed_type_id'])
													echo "selected"; 
												}?> ><?php echo $data['seed_type_name']?></option>
										<?php
                                            }
										?>
										</select>
                                        <span class="help-inline" id="msgseed_type"></span>			
										</div>
									</div>
                                   
							<div class="module-body table"  >
                            
								<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
											<th>Seed Sub Type Name</th>
											<th>Delete</th>
                                            <th>Update</th>
                                           	</tr>
									</thead>
									<tbody >
                                     <?php
									 if($seed_data_subtype)
									 {
									foreach($seed_data_subtype as $select_data)
											{
										?>
							<tr class="odd gradeX">
								<td><?php echo $select_data['seed_subtype_name'] ?></td>
								<td ><a href="<?php echo base_url()?>admin/admin_seed/select_delete_seed_subtype/<?php echo $select_data['seed_subtype_id'];?>" ><img src="<?php echo base_url("data/images/delete.png");?>"  style="width:30px;height:30px;margin-left:20px" / ></a></td>
                                <td><a href="<?php echo base_url()?>admin/admin_seed/select_update_seed_subtype/<?php echo $select_data['seed_subtype_id'];?>"><img src="<?php echo base_url("data/images/update.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
							</tr>
                            <?php
							}
									 }
							?>

 									</tbody>							
									<tfoot>
										<tr>
											<th>Seed Sub Type Name</th>
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