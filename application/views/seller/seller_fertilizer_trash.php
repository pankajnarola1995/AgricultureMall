<?php
if($this->session->userdata("seller_login_id")!="")
{
}
else
{
	redirect("seller/seller");
}
?>
<?php include("header.php");?>




	
				<div class="span9">
					<div class="content" style="width:100%">
							<div class="module">
							<div class="module-head">
								<h3>fertilizer Detail Trash Data</h3>
							</div>
							<div class="module-body table" >
                            
								<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
											<th>fertilizer Name</th>
											<th>fertilizer Price</th>
											<th>Classification Type</th>
											<th>Origin Country</th>
											<th>Delete</th>
                                            <th>Back Up</th>
                                            

										</tr>
									</thead>
									<tbody>
                                    <?php
									if(isset($fertilizer_data))
									{
										foreach($fertilizer_data as $fertilizer_detail)
											{
										?>
											<tr class="odd gradeX">
												<td><?php echo $fertilizer_detail['fertilizer_detail_name'] ?></td>
												<td><?php echo $fertilizer_detail['fertilizer_price'] ?></td>
												<td><?php foreach($classification_type as $detail)
														{
															if(trim($detail['fertilizer_classification_id'])==trim($fertilizer_detail['classification']))echo $detail['fertilizer_classification_name']; 
														}?></td>
											<td><?php foreach($origin_country as $detail1)
														{
															if(trim($detail1['country_id'])==trim($fertilizer_detail['origin_country']))echo $detail1['country_name']; 
														} ?></td>
												<td ><a href="<?php echo base_url()?>seller/seller_fertilizer/seller_fertilizer_trash_delete/<?php echo $fertilizer_detail['fertilizer_detail_id'];?>" ><img src="<?php echo base_url("data/images/delete.png");?>"  style="width:30px;height:30px;margin-left:20px" / ></a></td>
												<td><a href="<?php echo base_url()?>seller/seller_fertilizer/seller_fertilizer_trash_backup/<?php echo $fertilizer_detail['fertilizer_detail_id'];?>"><img src="<?php echo base_url("data/images/backup.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
											</tr>
											<?php
											}
									}
										?>										
										
									</tbody>
									<tfoot>
										<tr>
									<th>fertilizer Name</th>
											<th>fertilizer Price</th>
											<th>Cultivation Type</th>
											<th>Origin Country</th>
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