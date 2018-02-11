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
					<div class="content" style="width:120%;margin-left:30px">
							
						<div class="module">
							<div class="module-head">
								<h3>Seller Request</h3>
							</div>
							<div class="module-body table" >
                            
								<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
											<th>Seller Name</th>
											<th>Email Id</th>
											<th>Address</th>
											<th>City</th>
											<th>Company Name</th>
                                            <th>Mobile Number</th>
                                            <th>Allow</th>
                                            <th>Block</th>

										</tr>
									</thead>
									<tbody>
                                    <?php
									foreach($seller_allow as $seller_detail)
									{
									?>
										<tr class="odd gradeX">
											<td><?php echo $seller_detail['seller_name'] ?></td>
											<td><?php echo $seller_detail['email_id'] ?></td>
											<td><?php echo $seller_detail['address'] ?></td>
											<td> <?php
													if($city!="")
													{
													foreach($city as $data)
													{
													 if(trim($data['city_id'])==trim($seller_detail['city']))
															{
																echo $data['city_name'];
																
															}
													 }
													}
									
											 ?></td>
											<td ><?php echo $seller_detail['company_name'] ?></td>
                                            <td><?php echo $seller_detail['mobile_number'] ?></td>
                                            <td><a href="<?php echo base_url()?>admin/admin/admin_allow_seller/<?php echo $seller_detail['seller_id'];?>" style="text-decoration:none">Allowed</a></td>
                                            <td><a href="<?php echo base_url()?>admin/admin/admin_block_seller/<?php echo $seller_detail['seller_id'];?>" style="text-decoration:none">Block</a></td>
										</tr>
                                        <?php
										}
										?>										
										
									</tbody>
									<tfoot>
										<tr>
											<th>Seller Name</th>
											<th>Email Id</th>
											<th>Address</th>
											<th>City</th>
											<th>Company Name</th>
                                            <th>Mobile Number</th>
                                            <th>Allow</th>
                                            <th>Block</th>
										</tr>
									</tfoot>
								</table>
							</div>
						</div><!--/.module-->
					<br />
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>