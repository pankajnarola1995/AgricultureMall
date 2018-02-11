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
								<h3>Seed Detail Trash Data</h3>
							</div>
							<div class="module-body table" >
                            
								<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
											<th>Seed Name</th>
											<th>Seed Price</th>
											<th>Cultivation Type</th>
											<th>Origin Country</th>
											<th>Delete</th>
                                            <th>Back Up</th>
                                            

										</tr>
									</thead>
									<tbody>
                                    <?php
									if(isset($seed_data))
									{
										foreach($seed_data as $seed_detail)
											{
										?>
											<tr class="odd gradeX">
												<td><?php echo $seed_detail['seed_detail_name'] ?></td>
												<td><?php echo $seed_detail['seed_price'] ?></td>
                                                <td><?php foreach($cultivation_type as $detail)
														{
															if(trim($detail['seed_cultivation_id'])==trim($seed_detail['cultivation_type']))echo $detail['seed_cultivation_name']; 
														}?></td>
											<td><?php foreach($origin_country as $detail1)
														{
															if(trim($detail1['country_id'])==trim($seed_detail['origin_country']))echo $detail1['country_name']; 
														} ?></td>
												
												<td ><a href="<?php echo base_url()?>seller/seller_seed/seller_seed_trash_delete/<?php echo $seed_detail['seed_detail_id'];?>" ><img src="<?php echo base_url("data/images/delete.png");?>"  style="width:30px;height:30px;margin-left:20px" / ></a></td>
												<td><a href="<?php echo base_url()?>seller/seller_seed/seller_seed_trash_backup/<?php echo $seed_detail['seed_detail_id'];?>"><img src="<?php echo base_url("data/images/backup.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
											</tr>
											<?php
											}
									}
										?>										
										
									</tbody>
									<tfoot>
										<tr>
									<th>Seed Name</th>
											<th>Seed Price</th>
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