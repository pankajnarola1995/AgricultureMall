<?php
if($this->session->userdata("seller_login_id")!="")
{
}
else
{
	redirect("seller/seller");
}
?>
  <?php 
					$a="";
					//seller login .................
if($this->session->flashdata("seller_pesticide_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:80%;height:42px;margin-left:-70px'>
<br>		 <p style='font-size:20px' align='center'>Select pesticide Type And Subtype</p>
</div>";

?>
<?php include("header.php");?>

<script src="<?php echo base_url()?>data/validation/jquery-1.10.2.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url()?>data/validation/validate.js"></script>
	
	<script>
			$(document).ready(function(){
				$("#pesticide_sub_type").hide();
				$("#msgpesticide_sub_type").hide();
				$("#pesticide_type").change(function(){
					var id = $(this).val();
					if(id == "Select here..")
					{	//alert();
						$("#pesticide_sub_type").hide();
						$("#msgpesticide_sub_type").hide();
					}
					else
					{
						//alert(id);
						$.ajax({
							url:"<?php echo base_url("seller/seller_pesticide/select_pesticide_sub_type")?>",
							type:"post",
							data:{pesticide_type_id:id},
							success:function(result){
								//alert(result);
								$("#pesticide_sub_type").html(result);
								$("#pesticide_sub_type").show();
								$("#msgpesticide_sub_type").show();
							}
						});
					}
				
				});
				
				
			$("#add_pesticide_category").click(function(){
			var pesticide_type,pesticide_sub_type;
			
			pesticide_type = test_drop("#pesticide_type","#msgpesticide_type");
			pesticide_sub_type = test_drop("#pesticide_sub_type","#msgpesticide_sub_type");
			
			
			if(pesticide_type == true && pesticide_sub_type == true )
			{
				return true;
				
			}
			else
			{
				return false;
			}
			
		});
	$("#select_pesticide_type").change(function(){
		//alert();
					var id = $(this).val();
					if(id == "Select Type Name..")
					{	//alert();
						window.location.assign("<?php echo base_url("seller/seller_pesticide")?>");
					}
					else
					{
						window.location.assign("<?php echo base_url("seller/seller_pesticide/select_subtype_data_menu")?>/"+id);//alert(id);						
					}
				
				});
			$("#select_subtype_name").change(function(){
					var id = $(this).val();
					var type_id = $("#select_pesticide_type").val();
					var type_id1 = $("#select_submenu_name").val();
					//alert(id);
					//alert(type_id);
					if(type_id == "Select Type Name.." && type_id1 == "Select Submenu Name.." && id != "Select Subtype Name..")
					{	//alert("ssss");
						window.location.assign("<?php echo base_url("seller/seller_pesticide/select_pesticide_type_menu")?>/"+id);
					}
					else if(id == "Select Subtype Name.." && type_id != "Select Type Name.." && type_id1 == "Select Submenu Name.." )
					{	//alert();
						window.location.assign("<?php echo base_url("seller/seller_pesticide/select_subtype_data_menu")?>/"+type_id);
					}
					else if(id == "Select Subtype Name.." && type_id != "Select Type Name.." && type_id1 != "Select Submenu Name.." )
					{	//alert();
						window.location.assign("<?php echo base_url("seller/seller_pesticide/select_subtype_data_menu")?>/"+type_id);
					}
					else if(id != "Select Subtype Name.." && type_id == "Select Type Name.." && type_id1 != "Select Submenu Name.." )
					{	//alert("hhhh");
						window.location.assign("<?php echo base_url("seller/seller_pesticide/select_pesticide_type_menu")?>/"+id);
					}
					else if(type_id1 == "Select Submenu Name.." && id == "Select Subtype Name.." && type_id == "Select Type Name..")
					{	//alert("mmmm");
						window.location.assign("<?php echo base_url("seller/seller_pesticide")?>");
					}
					else
					{
						//alert(id);
						
						window.location.assign("<?php echo base_url("seller/seller_pesticide/select_submenu_data_subtype")?>/"+id+" "+type_id);
					}
				
				});
	
					
			
			});	
	</script>
     
				<div class="span9">
					<div class="content" style="width:120%">

					<div class="module">
							<div class="module-head">
								<h3>Select pesticide Category</h3>
							</div>
							<div class="module-body">

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

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("seller/seller_pesticide/pesticide_add_data") ?>">
                                    <div class="control-group">
											<label class="control-label" ><b>pesticide Type</b></label>
											<div class="controls">
												<div class="dropdown">
													<select tabindex="1" data-placeholder="Select here.."  id="pesticide_type" name="pesticide_type" class="dropdown-menu" role="menu" class="span8">
													<option value="Select here..">Select pesticide Type..</option>
                                                    <?php
													
													foreach($pesticide_type as $data)
													{
														?>
													<option value="<?php echo $data['pesticide_type_id']?>"><?php echo $data['pesticide_type_name']?></option>
													<?php
                                                    }
													?>
												</select>
                                                <!--<span class="help-inline" id="msgpesticide_type" style="float:right"></span>-->
												</div>
											</div>
										</div>
                         
										<div class="control-group">
											<label class="control-label" ><b>pesticide Sub Type</b></label>
											<div class="controls">
												<div class="dropdown">
                                              <select tabindex="1" data-placeholder="Select here.."  id="pesticide_sub_type" name="pesticide_sub_type" class="dropdown-menu" role="menu" class="span8">
													<option value="Select here..">Select pesticide Type..</option>
                                                    </select>
                                               <!-- <span id="msgpesticide_sub_type" class="help-inline" style="float:right">
                                                  </span>-->
                                                 
                                              
												</div>
											</div>
										</div>
										
										
<div class="control-group">
											<div class="controls" >
												<button type="submit" class="btn"  name="add_pesticide_category" id="add_pesticide_category">Add pesticide Category</button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					
						<div class="module">
							<div class="module-head">
								<h3>pesticide Detail Tables</h3>
							</div>
							<div class="module-body table" >
                             <div class="form-horizontal row-fluid" style="margin-left:150px">
                            <form class="form-horizontal row-fluid" method="post" action="#">
										<label class="control-label"><b>pesticide Type Name</b></label>
										<div class="controls" >
										<select tabindex="1" data-placeholder="Select pesticide Type.." class="span5" name="select_pesticide_type" id="select_pesticide_type">
											<option value="Select Type Name.." selected >Select Type Name..</option>
										<?php
													
										  foreach($pesticide_type as $data)
											{
										?>
												<option value="<?php echo $data['pesticide_type_id'] ?>"  <?php if($select)
												{
													if(trim($select[0]["pesticide_type_id"])==trim($data['pesticide_type_id']))
													{
														echo "selected";
													}
												}?>><?php echo $data['pesticide_type_name']?></option>
										<?php
                                            }
										?>
										</select>
                                       
										</div>
									</div>
                                    <br />
                                      <div class="form-horizontal row-fluid" style="margin-left:150px">
										<label class="control-label"><b>pesticide Subtype Name</b></label>
										<div class="controls" >
										<select tabindex="1" data-placeholder="Select subtype Name.." class="span5" name="select_subtype_name" id="select_subtype_name">
										<option value="Select Subtype Name.." selected>Select Subtype Name..</option>
										<?php
													
										  foreach($pesticide_subtype as $data)
											{
											
										?>
												<option value="<?php echo $data['pesticide_subtype_id']?>" <?php if($select1)
												{
													if(trim($select1[0]["pesticide_subtype_id"])==trim($data['pesticide_subtype_id']))
													{
														echo "selected";
													}
												}?>><?php echo $data['pesticide_subtype_name']?></option>
										<?php
                                            }
										?>
										</select>
                                    		
										</div>
									</div>
                                    <br />
                                    
                                    </form>
                                    <br>
								<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
											<th>pesticide Name</th>
											<th>pesticide Price</th>
											<th>pesticide Classification</th>
											<th>Origin Country</th>
											<th>Delete</th>
                                            <th>Update</th>
                                             <th>Update Image</th>
                                            <th>More Detail</th>

										</tr>
									</thead>
									<tbody>
                                    <?php
									foreach($pesticide_data as $data)
									{
									?>
										<tr class="odd gradeX">
											<td><?php echo $data['pesticide_detail_name']; ?></td>
											<td><?php echo $data['pesticide_price']; ?></td>
                                            <td><?php foreach($classification as $data1)
													{
                                                   		if(trim($data1['pesticide_classification_id'])==trim($data['classification']))
															{
																echo $data1['pesticide_classification_name']; 
																
															}
													}
													?></td>
											
											
											<td><?php foreach($origin_country as $detail1)
														{
															if(trim($detail1['country_id'])==trim($data['origin_country']))echo $detail1['country_name']; 
														} ?></td>
											<td ><a href="<?php echo base_url()?>seller/seller_pesticide/seller_pesticide_backup/<?php echo $data['pesticide_detail_id'];?>" ><img src="<?php echo base_url("data/images/delete.png");?>"  style="width:30px;height:30px;margin-left:20px" / ></a></td>
                                            <td><a href="<?php echo base_url()?>seller/seller_pesticide/seller_pesticide_data_update/<?php echo $data['pesticide_detail_id']; ?>"><img src="<?php echo base_url("data/images/update.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
                                             <td><a href="<?php echo base_url()?>seller/seller_pesticide/seller_pesticide_data_update_image/<?php echo $data['pesticide_detail_id']; ?>"><img src="<?php echo base_url("data/images/update_image.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
                                            <td><a href="<?php echo base_url()?>seller/seller_pesticide/seller_pesticide_display/<?php echo $data['pesticide_detail_id']; ?>" ><img src="<?php echo base_url("data/images/more.png");?>"  style="width:40px;height:40px;margin-top:-5px;margin-bottom:-5px;margin-left:40px"/></a></td>
</tr>										
                   <!-- Modal -->


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
                                            <th>Update</th>
                                            <th>Update Image</th>
                                            <th>More Detail</th>
										</tr>
									</tfoot>
								</table>
							</div>
						</div><!--/.module-->

					<br />
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>