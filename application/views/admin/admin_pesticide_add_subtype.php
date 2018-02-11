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
		$("#add_pesticide_subtype").click(function(){
			
			var pesticide_type,pesticide_subtype_name;
			//var fname1=getElementById("#fname").value;
			pesticide_type_id = test_drop("#pesticide_type_id","#msgpesticide_type_id");
			pesticide_subtype_name = test_subpesticidename("#pesticide_subtype_name","#msgpesticide_subtype_name");
			if(pesticide_type_id == true && pesticide_subtype_name == true)
			{
				return true;
				
			}
			else
			{
				return false;
			}
			
		});
	$("#select_pesticide_type").change(function(){
					var id = $(this).val();
					if(id == "Select pesticide Type..")
					{	//alert();
						window.location.assign("<?php echo base_url("admin/admin_pesticide/admin_pesticide_add_subtype")?>");
					}
					else
					{
						//alert(id);
						
						window.location.assign("<?php echo base_url("admin/admin_pesticide/select_pesticide_type_data")?>/"+id);
					}
				
				});
	
	});
</script>
				<div class="span9">
					<div class="content" style="width:100%;margin-left:30px">

					<div class="module" >
							<div class="module-head" align="center">
								<h3>Add Pesticide Sub Type</h3>
							</div>
							<div class="module-body" style="alignment-baseline:central;margin-left:170px">

									<br />

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_pesticide/insert_pesticide_subtype") ?>">
                                    <div class="control-group">
										<label class="control-label" ><b>Pesticide Type</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="pesticide_type_id" id="pesticide_type_id">
										<option value="Select here..">Pesticide Type Name</option>
										<?php
													
										  foreach($pesticide_data_type as $data)
											{
										?>
												<option value="<?php echo $data['pesticide_type_id']?>"><?php echo $data['pesticide_type_name']?></option>
										<?php
                                            }
										?>
										</select>
<!--                                        <span class="help-inline" id="msgpesticide_type_id" style="float:right"></span>		-->	
										</div>
									</div>
                                    <div class="control-group">
											<label class="control-label" style="width:260px;margin-left:-100px;"><b>Pesticide SubType Name</b></label>
											<div class="controls">
												<input type="text" name="pesticide_subtype_name" id="pesticide_subtype_name" placeholder="Pesticide SubType Name" class="span8">
												<span class="help-inline" id="msgpesticide_subtype_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group">
											<div class="controls" >
												<button type="submit" class="btn"  name="add_pesticide_subtype" id="add_pesticide_subtype">Add Pesticide Sub Type </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<div class="module">
							<div class="module-head">
								<h3>Pesticide Sub Type Data</h3>
							</div>
                           <br />
                                    <div class="form-horizontal row-fluid" style="margin-left:150px">
										<label class="control-label"><b>Pesticide Type</b></label>
										<div class="controls" >
										<select tabindex="1" data-placeholder="Select pesticide Type.." class="span5" name="select_pesticide_type" id="select_pesticide_type">
										<option value="Select pesticide Type..">Select pesticide Type..</option>
										<?php
													
										  foreach($pesticide_data_type as $data)
											{
										?>
												<option value="<?php echo $data['pesticide_type_id']?>" <?php if($pesticide_data_sub)
												{
													if($pesticide_data_sub['pesticide_type_id'] == $data['pesticide_type_id'])echo "selected"; 
												}?> ><?php echo $data['pesticide_type_name']?></option>
										<?php
                                            }
										?>
										</select>
                                        <span class="help-inline" id="msgpesticide_type"></span>			
										</div>
									</div>
                                   
							<div class="module-body table"  >
                            
								<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
											<th>Pesticide Sub Type Name</th>
											<th>Delete</th>
                                            <th>Update</th>
                                           	</tr>
									</thead>
									<tbody >
                                     <?php
									 if($pesticide_data_subtype)
									 {
									foreach($pesticide_data_subtype as $select_data)
											{
										?>
							<tr class="odd gradeX">
								<td><?php echo $select_data['pesticide_subtype_name'] ?></td>
								<td ><a href="<?php echo base_url()?>admin/admin_pesticide/select_delete_pesticide_subtype/<?php echo $select_data['pesticide_subtype_id'];?>" ><img src="<?php echo base_url("data/images/delete.png");?>"  style="width:30px;height:30px;margin-left:20px" / ></a></td>
                                <td><a href="<?php echo base_url()?>admin/admin_pesticide/select_update_pesticide_subtype/<?php echo $select_data['pesticide_subtype_id'];?>"><img src="<?php echo base_url("data/images/update.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
							</tr>
                            <?php
							}
									 }
							?>

 									</tbody>							
									<tfoot>
										<tr>
											<th>Pesticide Sub Type Name</th>
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