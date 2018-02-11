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

				<div class="span9">
					<div class="content" style="width:100%">
							<div class="module">
							<div class="module-head">
								<h3>City Trash Data</h3>
							</div>
							<div class="module-body table" >
                            
								<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
											<th>City Name</th>
											<th>Delete</th>
                                            <th>Back Up</th>
                                            

										</tr>
									</thead>
									<tbody>
                                    <?php
									if(isset($city_data))
									{
										
										foreach($city_data as $city)
											{
										?>
											<tr class="odd gradeX">
												<td><?php echo $city['city_name'] ?></td>
												<td ><a href="<?php echo base_url()?>admin/admin_location/admin_city_trash_delete/<?php echo $city['city_id'];?>" ><img src="<?php echo base_url("data/images/delete.png");?>"  style="width:30px;height:30px;margin-left:20px" / ></a></td>
												<td><a href="<?php echo base_url()?>admin/admin_location/admin_city_trash_backup/<?php echo $city['city_id'];?>"><img src="<?php echo base_url("data/images/backup.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
											</tr>
											<?php
											}
									}
										?>										
										
									</tbody>
									<tfoot>
										<tr>
											<th>City Name</th>
											<th>Delete</th>
                                            <th>Back Up</th>
                                        
										</tr>
									</tfoot>
								</table>
							</div>
						</div><!--/.module-->

					<br />
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>