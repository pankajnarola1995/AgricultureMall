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
								<h3>pesticide Detail Trash Data</h3>
							</div>
							<div class="module-body table" >
                            
								<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
											<th>pesticide Name</th>
											<th>pesticide Price</th>
											<th>pesticide Classification</th>
											<th>Origin Country</th>
											<th>Delete</th>
                                            <th>Back Up</th>
                                            

										</tr>
									</thead>
									<tbody>
                                    <?php
									
										foreach($pesticide_data as $pesticide_detail)
											{
										?>
											<tr class="odd gradeX">
												<td><?php echo $pesticide_detail['pesticide_detail_name'] ?></td>
												<td><?php echo $pesticide_detail['pesticide_price'] ?></td>
                                               <td><?php foreach($classification as $data)
													{
                                                   		if(trim($data['pesticide_classification_id'])==trim($pesticide_detail['classification']))
															{
																echo $data['pesticide_classification_name']; 
																
															}
													}
													?></td>
											
											
											<td><?php foreach($origin_country as $detail1)
														{
															if(trim($detail1['country_id'])==trim($pesticide_detail['origin_country']))echo $detail1['country_name']; 
														} ?></td>
                                                        <td ><a href="<?php echo base_url()?>seller/seller_pesticide/seller_pesticide_trash_delete/<?php echo $pesticide_detail['pesticide_detail_id'];?>" ><img src="<?php echo base_url("data/images/delete.png");?>"  style="width:30px;height:30px;margin-left:20px" / ></a></td>
											
                                                
                                                <td><a href="<?php echo base_url()?>seller/seller_pesticide/seller_pesticide_trash_backup/<?php echo $pesticide_detail['pesticide_detail_id'];?>"><img src="<?php echo base_url("data/images/backup.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
											</tr>
											<?php
											}
									
										?>										
										
									</tbody>
									<tfoot>
										<tr>
									<th>pesticide Name</th>
											<th>pesticide Price</th>
											<th>pesticide Classification</th>
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