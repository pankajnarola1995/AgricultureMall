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
					<div class="content" style="width:100%;margin-left:30px">

					<div class="module">
							<div class="module-head">
								<h3>Tools Detail Type Trash Data</h3>
							</div>
                           <br />
                                   
							<div class="module-body table"  >
                            
								<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
											<th>Tools Detail Type Name</th>
											<th>Delete</th>
                                            <th>Backup</th>
                                           	</tr>
									</thead>
									<tbody >
                                     <?php
									 if($select_tools_deatil_type)
									 {
									foreach($select_tools_deatil_type as $select_data)
											{
										?>
							<tr class="odd gradeX">
								<td><?php echo $select_data['tools_detail_type_name'] ?></td>
								<td ><a href="<?php echo base_url()?>admin/admin_agro_other/admin_tools_detailtype_trash_delete/<?php echo $select_data['tools_detail_type_id'];?>" ><img src="<?php echo base_url("data/images/delete.png");?>"  style="width:30px;height:30px;margin-left:20px" / ></a></td>
                                <td><a href="<?php echo base_url()?>admin/admin_agro_other/admin_tools_detailtype_trash_backup/<?php echo $select_data['tools_detail_type_id'];?>"><img src="<?php echo base_url("data/images/backup.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
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
                                            <th>Backup</th>
										</tr>
									</tfoot>
								</table>
                                  
							</div>
						</div><!--/.module-->
					<br />
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>