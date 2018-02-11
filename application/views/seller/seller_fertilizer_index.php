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
if($this->session->flashdata("seller_fertilizer_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:80%;height:42px;margin-left:-70px'>
<br>		 <p style='font-size:20px' align='center'>Select fertilizer Type And Subtype</p>
</div>";

?>
<?php include("header.php");?>

<script src="<?php echo base_url()?>data/validation/jquery-1.10.2.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url()?>data/validation/validate.js"></script>
	
	<script>
			$(document).ready(function(){
				$("#fertilizer_sub_type").hide();
				$("#fertilizer_sub_menu").hide();
				$("#msgfertilizer_sub_type").hide();
				$("#fertilizer_type").change(function(){
					var id = $(this).val();
					if(id == "Select here..")
					{	//alert();
						$("#fertilizer_sub_type").hide();
						$("#fertilizer_sub_menu").hide();
						$("#msgfertilizer_sub_type").hide();
					}
					else
					{
						//alert(id);
						$.ajax({
							url:"<?php echo base_url("seller/seller_fertilizer/select_fertilizer_sub_type")?>",
							type:"post",
							data:{fertilizer_type_id:id},
							success:function(result){
								//alert(result);
								$("#fertilizer_sub_type").html(result);
								$("#fertilizer_sub_type").show();
								$("#msgfertilizer_sub_type").show();
							}
						});
					}
				
				});
				$("#fertilizer_sub_type").change(function(){
					var id = $(this).val();
					//alert(id);
					if(id == "Select here..")
					{	//alert();
						$("#fertilizer_sub_menu").hide();
					}
					else
					{
						
						//alert(id);
						$.ajax({
							url:"<?php echo base_url("seller/seller_fertilizer/select_fertilizer_submenu_type")?>",
							type:"post",
							data:{fertilizer_subtype_id:id},
							success:function(result){
								//alert(result);
								if(result!=='')
								{
								$("#fertilizer_sub_menu").html(result);
								$("#fertilizer_sub_menu").show();
								}
								else
								{
									$("#fertilizer_sub_menu").hide();
								}
							}
						});
						
					}
				
				});
				
			$("#add_fertilizer_category").click(function(){
			var fertilizer_type,fertilizer_sub_type,fertilizer_sub_menu;
			
			fertilizer_type = test_drop("#fertilizer_type","#msgfertilizer_type");
			fertilizer_sub_type = test_drop("#fertilizer_sub_type","#msgfertilizer_sub_type");
			fertilizer_sub_menu = test_drop("#fertilizer_sub_menu_type","#msgfertilizer_sub_menu_type");
			
			if(fertilizer_type == true && fertilizer_sub_type == true && fertilizer_sub_menu == true)
			{
				return true;
				
			}
			else
			{
				return false;
			}
			
		});
	$("#select_fertilizer_type").change(function(){
		//alert();
					var id = $(this).val();
					if(id == "Select Type Name..")
					{	//alert();
						window.location.assign("<?php echo base_url("seller/seller_fertilizer")?>");
					}
					else
					{
						window.location.assign("<?php echo base_url("seller/seller_fertilizer/select_subtype_data_menu")?>/"+id);//alert(id);						
					}
				
				});
			$("#select_subtype_name").change(function(){
					var id = $(this).val();
					var type_id = $("#select_fertilizer_type").val();
					var type_id1 = $("#select_submenu_name").val();
					//alert(id);
					//alert(type_id);
					if(type_id == "Select Type Name.." && type_id1 == "Select Submenu Name.." && id != "Select Subtype Name..")
					{	//alert("ssss");
						window.location.assign("<?php echo base_url("seller/seller_fertilizer/select_fertilizer_type_menu")?>/"+id);
					}
					else if(id == "Select Subtype Name.." && type_id != "Select Type Name.." && type_id1 == "Select Submenu Name.." )
					{	//alert();
						window.location.assign("<?php echo base_url("seller/seller_fertilizer/select_subtype_data_menu")?>/"+type_id);
					}
					else if(id == "Select Subtype Name.." && type_id != "Select Type Name.." && type_id1 != "Select Submenu Name.." )
					{	//alert();
						window.location.assign("<?php echo base_url("seller/seller_fertilizer/select_subtype_data_menu")?>/"+type_id);
					}
					else if(id != "Select Subtype Name.." && type_id == "Select Type Name.." && type_id1 != "Select Submenu Name.." )
					{	//alert("hhhh");
						window.location.assign("<?php echo base_url("seller/seller_fertilizer/select_fertilizer_type_menu")?>/"+id);
					}
					else if(type_id1 == "Select Submenu Name.." && id == "Select Subtype Name.." && type_id == "Select Type Name..")
					{	//alert("mmmm");
						window.location.assign("<?php echo base_url("seller/seller_fertilizer")?>");
					}
					else
					{
						//alert(id);
						
						window.location.assign("<?php echo base_url("seller/seller_fertilizer/select_submenu_data_subtype")?>/"+id+" "+type_id);
					}
				
				});
	$("#select_submenu_name").change(function(){
					var id = $(this).val();
					var type_id = $("#select_fertilizer_type").val();
					var type_id1 = $("#select_subtype_name").val();
					
					//alert(id);
					//alert(type_id);
					//alert(type_id1);
					if(type_id1 == "Select Subtype Name.." && id == "Select Submenu Name.." && type_id != "Select Type Name..")
					{	//alert();
						window.location.assign("<?php echo base_url("seller/seller_fertilizer/select_subtype_data_menu")?>/"+type_id);
					}
					else if(id != "Select Submenu Name.." && type_id1 == "Select Subtype Name.." && type_id == "Select Type Name..")
					{	//alert("mmmm");
						window.location.assign("<?php echo base_url("seller/seller_fertilizer/select_submenu_data_menu")?>/"+id);
					}
					else if(id != "Select Submenu Name.." && type_id1 != "Select Subtype Name.." && type_id == "Select Type Name..")
					{	//alert("mmmm");
						window.location.assign("<?php echo base_url("seller/seller_fertilizer/select_subtype_type_menu")?>/"+id+" "+type_id1);
					}
					else if(id == "Select Submenu Name.." && type_id1 != "Select Subtype Name.." && type_id != "Select Type Name..")
					{	//alert();
						window.location.assign("<?php echo base_url("seller/seller_fertilizer/select_submenu_data_subtype")?>/"+type_id1+" "+type_id);
					}
					else if(type_id1 == "Select Subtype Name.." && id != "Select Submenu Name.." && type_id != "Select Type Name..")
					{	//alert();
						window.location.assign("<?php echo base_url("seller/seller_fertilizer/select_submenu_data_subtype1")?>/"+id+" "+type_id);
					}
					else if(id == "Select Submenu Name.." && type_id1 == "Select Subtype Name.." && type_id == "Select Type Name..")
					{	//alert("mmmm");
						window.location.assign("<?php echo base_url("seller/seller_fertilizer")?>");
					}
					else if(id == "Select Submenu Name.." && type_id1 != "Select Subtype Name.." && type_id == "Select Type Name..")
					{	//alert("mmmm");
						window.location.assign("<?php echo base_url("seller/seller_fertilizer/select_fertilizer_type_menu")?>/"+type_id1);
					}
					else
					{
						//alert(id);
						
						window.location.assign("<?php echo base_url("seller/seller_fertilizer/select_menu_data_subtype_type_all")?>/"+id+" "+type_id+" "+type_id1);
					}
				
				});
					
			
			});	
	</script>
     
				<div class="span9">
					<div class="content" style="width:120%">

					<div class="module">
							<div class="module-head">
								<h3>Select fertilizer Category</h3>
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

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("seller/seller_fertilizer/fertilizer_add_data") ?>">
                                    <div class="control-group">
											<label class="control-label" ><b>fertilizer Type</b></label>
											<div class="controls">
												<div class="dropdown">
													<select tabindex="1" data-placeholder="Select here.."  id="fertilizer_type" name="fertilizer_type" class="dropdown-menu" role="menu" class="span8">
													<option value="Select here..">Select fertilizer Type..</option>
                                                    <?php
													
													foreach($fertilizer_type as $data)
													{
														?>
													<option value="<?php echo $data['fertilizer_type_id']?>"><?php echo $data['fertilizer_type_name']?></option>
													<?php
                                                    }
													?>
												</select>
                                                <!--<span class="help-inline" id="msgfertilizer_type" style="float:right"></span>-->
												</div>
											</div>
										</div>
                         
										<div class="control-group">
											<label class="control-label" ><b>fertilizer Sub Type</b></label>
											<div class="controls">
												<div class="dropdown">
                                              <select tabindex="1" data-placeholder="Select here.."  id="fertilizer_sub_type" name="fertilizer_sub_type" class="dropdown-menu" role="menu" class="span8">
													<option value="Select here..">Select fertilizer Type..</option>
                                                    </select>
                                               <!-- <span id="msgfertilizer_sub_type" class="help-inline" style="float:right">
                                                  </span>-->
                                                 
                                              
												</div>
											</div>
										</div>
										
										<div class="control-group">
											<label class="control-label" ><b>fertilizer Sub Menu Type</b></label>
											<div class="controls">
												<div class="dropdown">
													<span id="fertilizer_sub_menu">
                                                    </span>
                                                
												</div>
											</div>
										</div>
<div class="control-group">
											<div class="controls" >
												<button type="submit" class="btn"  name="add_fertilizer_category" id="add_fertilizer_category">Add fertilizer Category</button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					
						<div class="module">
							<div class="module-head">
								<h3>fertilizer Detail Tables</h3>
							</div>
							<div class="module-body table" >
                             <div class="form-horizontal row-fluid" style="margin-left:150px">
                            <form class="form-horizontal row-fluid" method="post" action="#">
										<label class="control-label" style="width:260px;margin-left:-100px;"><b>fertilizer Type Name</b></label>
										<div class="controls" >
										<select tabindex="1" data-placeholder="Select fertilizer Type.." class="span5" name="select_fertilizer_type" id="select_fertilizer_type">
											<option value="Select Type Name.." selected >Select Type Name..</option>
										<?php
													
										  foreach($fertilizer_type as $data)
											{
										?>
												<option value="<?php echo $data['fertilizer_type_id'] ?>"  <?php if($select)
												{
													if(trim($select[0]["fertilizer_type_id"])==trim($data['fertilizer_type_id']))
													{
														echo "selected";
													}
												}?>><?php echo $data['fertilizer_type_name']?></option>
										<?php
                                            }
										?>
										</select>
                                       
										</div>
									</div>
                                    <br />
                                      <div class="form-horizontal row-fluid" style="margin-left:150px">
										<label class="control-label" style="width:260px;margin-left:-100px;"><b>fertilizer Subtype Name</b></label>
										<div class="controls" >
										<select tabindex="1" data-placeholder="Select subtype Name.." class="span5" name="select_subtype_name" id="select_subtype_name">
										<option value="Select Subtype Name.." selected>Select Subtype Name..</option>
										<?php
													
										  foreach($fertilizer_subtype as $data)
											{
											
										?>
												<option value="<?php echo $data['fertilizer_subtype_id']?>" <?php if($select1)
												{
													if(trim($select1[0]["fertilizer_subtype_id"])==trim($data['fertilizer_subtype_id']))
													{
														echo "selected";
													}
												}?>><?php echo $data['fertilizer_subtype_name']?></option>
										<?php
                                            }
										?>
										</select>
                                    		
										</div>
									</div>
                                    <br />
                                    <div class="form-horizontal row-fluid" style="margin-left:150px">
										<label class="control-label" style="width:260px;margin-left:-100px;"><b>fertilizer Submenu Name</b></label>
										<div class="controls" >
										<select tabindex="1" data-placeholder="Select Submenu Name.." class="span5" name="select_submenu_name" id="select_submenu_name">
										<option value="Select Submenu Name..">Select Submenu Name..</option>
										<?php
													
										  foreach($fertilizer_submenu as $data)
											{
											
										?>
												<option value="<?php echo $data['fertilizer_submenu_id']?>" <?php if($select2)
												{
													if(trim($select2[0]["fertilizer_submenu_id"])==trim($data['fertilizer_submenu_id']))
													{
														echo "selected";
													}
												}?> ><?php echo $data['fertilizer_submenu_name']?></option>
										<?php
                                            }
										?>
										</select>
                                      
										</div>
									</div>
                                    </form>
                                    <br>
								<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
											<th>fertilizer Name</th>
											<th>fertilizer Price</th>
											<th>Classification Type</th>
											<th>Origin Country</th>
											<th>Delete</th>
                                            <th>Update</th>
                                             <th>Update Image</th>
                                            <th>More Detail</th>

										</tr>
									</thead>
									<tbody>
                                    <?php
									foreach($fertilizer_data as $fertilizer_detail)
									{
									?>
										<tr class="odd gradeX">
											<td><?php echo $fertilizer_detail['fertilizer_detail_name']; ?></td>
											<td><?php echo $fertilizer_detail['fertilizer_price']; ?></td>
											<td><?php foreach($classification_type as $detail)
														{
															if(trim($detail['fertilizer_classification_id'])==trim($fertilizer_detail['classification']))echo $detail['fertilizer_classification_name']; 
														}?></td>
											<td><?php foreach($origin_country as $detail1)
														{
															if(trim($detail1['country_id'])==trim($fertilizer_detail['origin_country']))echo $detail1['country_name']; 
														} ?></td>
											<td ><a href="<?php echo base_url()?>seller/seller_fertilizer/seller_fertilizer_backup/<?php echo $fertilizer_detail['fertilizer_detail_id'];?>" ><img src="<?php echo base_url("data/images/delete.png");?>"  style="width:30px;height:30px;margin-left:20px" / ></a></td>
                                            <td><a href="<?php echo base_url()?>seller/seller_fertilizer/seller_fertilizer_data_update/<?php echo $fertilizer_detail['fertilizer_detail_id']; ?>"><img src="<?php echo base_url("data/images/update.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
                                             <td><a href="<?php echo base_url()?>seller/seller_fertilizer/seller_fertilizer_data_update_image/<?php echo $fertilizer_detail['fertilizer_detail_id']; ?>"><img src="<?php echo base_url("data/images/update_image.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
                                            <td><a href="<?php echo base_url()?>seller/seller_fertilizer/seller_fertilizer_display/<?php echo $fertilizer_detail['fertilizer_detail_id']; ?>" ><img src="<?php echo base_url("data/images/more.png");?>"  style="width:40px;height:40px;margin-top:-5px;margin-bottom:-5px;margin-left:40px"/></a></td>
</tr>										
                   <!-- Modal -->


                                        <?php
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