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
		$("#add_appearance_type").click(function(){
			
			var pesticide_appearance_name;
			//var fname1=getElementById("#fname").value;
			pesticide_appearance_name = test_pesticideappername("#pesticide_appearance_name","#msgpesticide_appearance_name");
			if(pesticide_appearance_name == true)
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
								<h3>Add Pesticide Appearance Type</h3>
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

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_agro_other/insert_pesticide_appearance_type") ?>">
                                    <div class="control-group">
											<label class="control-label" style="width:310px"><b>Pesticide Appearance Type Name   &nbsp;&nbsp; </b></label>
											<div class="controls">
												<input type="text" name="pesticide_appearance_name" id="pesticide_appearance_name" placeholder="Enter Pesticide appearance Type Name" class="span8" style="width:310px">
												<span class="help-inline" id="msgpesticide_appearance_name" style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group" style="margin-left:140px;">
											<div class="controls" >
												<button type="submit" class="btn"  name="add_appearance_type" id="add_appearance_type">Add Pesticide Appearance Type </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<div class="module">
							<div class="module-head">
								<h3>pesticide Appearance Type Data</h3>
							</div>
							<div class="module-body table" >
                            
								<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
											<th>pesticide Appearance Type Name</th>
											<th>Delete</th>
                                            <th>Update</th>
                                           	</tr>
									</thead>
									<tbody>
                                    <?php
									foreach($pesticide_appearance_type as $pesticide_appearance)
									{
									?>
										<tr class="odd gradeX">
											<td><?php echo $pesticide_appearance['pesticide_appearance_name'] ?></td>
											<td ><a href="<?php echo base_url()?>admin/admin_agro_other/select_delete_pesticide_appearance_type/<?php echo $pesticide_appearance['pesticide_appearance_id'];?>" ><img src="<?php echo base_url("data/images/delete.png");?>"  style="width:30px;height:30px;margin-left:20px" / ></a></td>
                                            <td><a href="<?php echo base_url()?>admin/admin_agro_other/select_update_pesticide_appearance_type/<?php echo $pesticide_appearance['pesticide_appearance_id'];?>"><img src="<?php echo base_url("data/images/update.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
										</tr>
                                        <?php
										}
										?>										
										
									</tbody>
									<tfoot>
										<tr>
											<th>pesticide Appearance Type Name</th>
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