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
		$("#add_fuel_type").click(function(){
			
			var tools_fuel_name;
			//var fname1=getElementById("#fname").value;
			tools_fuel_name = test_toolsfuelname("#tools_fuel_name","#msgtools_fuel_name");
			if(tools_fuel_name == true)
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
								<h3>Add Tools Fuel Type</h3>
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

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_agro_other/insert_tools_fuel_type") ?>">
                                    <div class="control-group">
											<label class="control-label" style="width:310px"><b>Tools Fuel Type Name   &nbsp;&nbsp; </b></label>
											<div class="controls">
												<input type="text" name="tools_fuel_name" id="tools_fuel_name" placeholder="Enter Tools fuel Type Name" class="span8" style="width:310px">
												<span class="help-inline" id="msgtools_fuel_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group" style="margin-left:160px;">
											<div class="controls" >
												<button type="submit" class="btn"  name="add_fuel_type" id="add_fuel_type">Add Tools Fuel Type </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<div class="module">
							<div class="module-head">
								<h3>Tools Fuel Type Data</h3>
							</div>
							<div class="module-body table" >
                            
								<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
											<th>Tools Fuel Type Name</th>
											<th>Delete</th>
                                            <th>Update</th>
                                           	</tr>
									</thead>
									<tbody>
                                    <?php
									foreach($tools_fuel_type as $tools_fuel)
									{
									?>
										<tr class="odd gradeX">
											<td><?php echo $tools_fuel['tools_fuel_name'] ?></td>
											<td ><a href="<?php echo base_url()?>admin/admin_agro_other/select_delete_tools_fuel_type/<?php echo $tools_fuel['tools_fuel_id'];?>" ><img src="<?php echo base_url("data/images/delete.png");?>"  style="width:30px;height:30px;margin-left:20px" / ></a></td>
                                            <td><a href="<?php echo base_url()?>admin/admin_agro_other/select_update_tools_fuel_type/<?php echo $tools_fuel['tools_fuel_id'];?>"><img src="<?php echo base_url("data/images/update.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
										</tr>
                                        <?php
										}
										?>										
										
									</tbody>
									<tfoot>
										<tr>
											<th>Tools Fuel Type Name</th>
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