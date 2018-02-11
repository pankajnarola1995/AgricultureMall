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
		$("#add_tools_subtype").click(function(){
			
			var tools_type,tools_detail_type_name;
			//var fname1=getElementById("#fname").value;
			tools_type_id = test_drop("#tools_type_id","#msgtools_type_id");
			tools_detail_type_name = test_toolsdetailname("#tools_detail_type_name","#msgtools_detail_type_name");
			if(tools_type_id == true && tools_detail_type_name == true)
			{
				return true;
				
			}
			else
			{
				return false;
			}
			
		});
	$("#select_tools_type").change(function(){
					var id = $(this).val();
					if(id == "Select tools Type..")
					{	//alert();
					 	window.location.assign("<?php echo base_url("admin/admin_agro_other/admin_tools_add_detail_type") ?>");
					}
					else
					{
						//alert(id);
						
						window.location.assign("<?php echo base_url("admin/admin_agro_other/select_tools_details_type_data")?>/"+id);
					}
				
				});
	
	});
</script>
				<div class="span9">
					<div class="content" style="width:100%;margin-left:30px">

					<div class="module" >
							<div class="module-head" align="center">
								<h3>Add Tools detail Type</h3>
							</div>
							<div class="module-body" style="alignment-baseline:central;margin-left:170px">

									<br />

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_agro_other/insert_tools_detail_type") ?>">
                                    <div class="control-group">
										<label class="control-label" ><b>Tools Type</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="tools_type_id" id="tools_type_id">
										<option value="Select here..">Select Tools Type..</option>
										<?php
													
										  foreach($tools_add_type as $data)
											{
										?>
												<option value="<?php echo $data['tools_type_id']?>"><?php echo $data['tools_type_name']?></option>
										<?php
                                            }
										?>
										</select>
<!--                                        <span class="help-inline" id="msgtools_type_id" style="float:right"></span>		-->	
										</div>
									</div>
                                    <div class="control-group">
											<label class="control-label"><b>Tools DetailType Name</b></label>
											<div class="controls">
												<input type="text" name="tools_detail_type_name" id="tools_detail_type_name" placeholder="Enter Tools Detail Type Name" class="span8">
												<span class="help-inline" id="msgtools_detail_type_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group">
											<div class="controls" >
												<button type="submit" class="btn"  name="add_tools_subtype" id="add_tools_subtype">Add Tools Sub Type </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<div class="module">
							<div class="module-head">
								<h3>Tools detail Type Data</h3>
							</div>
                           <br />
                                    <div class="form-horizontal row-fluid" style="margin-left:150px">
										<label class="control-label"><b>Tools Type</b></label>
										<div class="controls" >
										<select tabindex="1" data-placeholder="Select tools Type.." class="span5" name="select_tools_type" id="select_tools_type">
										<option value="Select tools Type..">Select Tools Type..</option>
										<?php
													
										  foreach($tools_add_type as $data)
											{
										?>
												<option value="<?php echo $data['tools_type_id']?>" <?php 
												if($tools_subtype)
												{
													if($tools_subtype['tools_type_id'] == $data['tools_type_id'])
													echo "selected";
												}?> ><?php echo $data['tools_type_name']?></option>
										<?php
                                            }
										?>
										</select>
                                        <span class="help-inline" id="msgtools_type"></span>			
										</div>
									</div>
                                   
							<div class="module-body table"  >
                            
								<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
											<th>Tools Detail Type Name</th>
											<th>Delete</th>
                                            <th>Update</th>
                                           	</tr>
									</thead>
									<tbody >
                                     <?php
									 if($tools_add_detail_type)
									 {
									foreach($tools_add_detail_type as $select_data)
											{
										?>
							<tr class="odd gradeX">
								<td><?php echo $select_data['tools_detail_type_name'] ?></td>
								<td ><a href="<?php echo base_url()?>admin/admin_agro_other/select_delete_tools_detailtype/<?php echo $select_data['tools_detail_type_id'];?>" ><img src="<?php echo base_url("data/images/delete.png");?>"  style="width:30px;height:30px;margin-left:20px" / ></a></td>
                                <td><a href="<?php echo base_url()?>admin/admin_agro_other/select_update_tools_detailtype/<?php echo $select_data['tools_detail_type_id'];?>"><img src="<?php echo base_url("data/images/update.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
							</tr>
                            <?php
							}
									 }
							?>

 									</tbody>							
									<tfoot>
										<tr>
											<th>Tools Detail Type Name</th>
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