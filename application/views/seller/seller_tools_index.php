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
if($this->session->flashdata("seller_tools_error")!="")
echo "<div class='alert alert-error' id='regimsg' style='position:absolute;width:80%;height:42px;margin-left:-70px'>
<br>		 <p style='font-size:20px' align='center'>Select tools Type And Subtype</p>
</div>";

?>
<?php include("header.php");?>

<script src="<?php echo base_url()?>data/validation/jquery-1.10.2.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url()?>data/validation/validate.js"></script>
	
	<script>
			$(document).ready(function(){
				$("#tools_sub_type").hide();
				$("#msgtools_sub_type").hide();
				$("#tools_type").change(function(){
					var id = $(this).val();
					if(id == "Select here..")
					{	//alert();
						$("#tools_sub_type").hide();
						$("#msgtools_sub_type").hide();
					}
					else
					{
						//alert(id);
						$.ajax({
							url:"<?php echo base_url("seller/seller_tools/select_tools_sub_type")?>",
							type:"post",
							data:{tools_type_id:id},
							success:function(result){
								//alert(result);
								$("#tools_sub_type").html(result);
								$("#tools_sub_type").show();
								$("#msgtools_sub_type").show();
							}
						});
					}
				
				});
				
				
			$("#add_tools_category").click(function(){
			var tools_type,tools_sub_type;
			
			tools_type = test_drop("#tools_type","#msgtools_type");
			tools_sub_type = test_drop("#tools_sub_type","#msgtools_sub_type");
			
			
			if(tools_type == true && tools_sub_type == true )
			{
				return true;
				
			}
			else
			{
				return false;
			}
			
		});
	$("#select_tools_type").change(function(){
		//alert();
					var id = $(this).val();
					if(id == "Select Type Name..")
					{	//alert();
						window.location.assign("<?php echo base_url("seller/seller_tools")?>");
					}
					else
					{
						window.location.assign("<?php echo base_url("seller/seller_tools/select_subtype_data_menu")?>/"+id);//alert(id);						
					}
				
				});
			$("#select_subtype_name").change(function(){
					var id = $(this).val();
					var type_id = $("#select_tools_type").val();
					var type_id1 = $("#select_submenu_name").val();
					//alert(id);
					//alert(type_id);
					if(type_id == "Select Type Name.." && type_id1 == "Select Submenu Name.." && id != "Select Subtype Name..")
					{	//alert("ssss");
						window.location.assign("<?php echo base_url("seller/seller_tools/select_tools_type_menu")?>/"+id);
					}
					else if(id == "Select Subtype Name.." && type_id != "Select Type Name.." && type_id1 == "Select Submenu Name.." )
					{	//alert();
						window.location.assign("<?php echo base_url("seller/seller_tools/select_subtype_data_menu")?>/"+type_id);
					}
					else if(id == "Select Subtype Name.." && type_id != "Select Type Name.." && type_id1 != "Select Submenu Name.." )
					{	//alert();
						window.location.assign("<?php echo base_url("seller/seller_tools/select_subtype_data_menu")?>/"+type_id);
					}
					else if(id != "Select Subtype Name.." && type_id == "Select Type Name.." && type_id1 != "Select Submenu Name.." )
					{	//alert("hhhh");
						window.location.assign("<?php echo base_url("seller/seller_tools/select_tools_type_menu")?>/"+id);
					}
					else if(type_id1 == "Select Submenu Name.." && id == "Select Subtype Name.." && type_id == "Select Type Name..")
					{	//alert("mmmm");
						window.location.assign("<?php echo base_url("seller/seller_tools")?>");
					}
					else
					{
						//alert(id);
						
						window.location.assign("<?php echo base_url("seller/seller_tools/select_submenu_data_subtype")?>/"+id+" "+type_id);
					}
				
				});
	
					
			
			});	
	</script>
     
				<div class="span9">
					<div class="content" style="width:120%">

					<div class="module">
							<div class="module-head">
								<h3>Select Tools Category</h3>
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

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("seller/seller_tools/tools_add_data") ?>">
                                    <div class="control-group">
											<label class="control-label" ><b>Tools Type</b></label>
											<div class="controls">
												<div class="dropdown">
													<select tabindex="1" data-placeholder="Select here.."  id="tools_type" name="tools_type" class="dropdown-menu" role="menu" class="span8">
													<option value="Select here..">Select Tools Type..</option>
                                                    <?php
													
													foreach($tools_type as $data)
													{
														?>
													<option value="<?php echo $data['tools_type_id']?>"><?php echo $data['tools_type_name']?></option>
													<?php
                                                    }
													?>
												</select>
                                                <!--<span class="help-inline" id="msgtools_type" style="float:right"></span>-->
												</div>
											</div>
										</div>
                         
										<div class="control-group">
											<label class="control-label" ><b>Tools Sub Type</b></label>
											<div class="controls">
												<div class="dropdown">
                                              <select tabindex="1" data-placeholder="Select here.."  id="tools_sub_type" name="tools_sub_type" class="dropdown-menu" role="menu" class="span8">
													<option value="Select here..">Select Tools Type..</option>
                                                    </select>
                                               <!-- <span id="msgtools_sub_type" class="help-inline" style="float:right">
                                                  </span>-->
                                                 
                                              
												</div>
											</div>
										</div>
										
										
<div class="control-group">
											<div class="controls" >
												<button type="submit" class="btn"  name="add_tools_category" id="add_tools_category">Add tools Category</button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					
						<div class="module">
							<div class="module-head">
								<h3>tools Detail Tables</h3>
							</div>
							<div class="module-body table" >
                             <div class="form-horizontal row-fluid" style="margin-left:150px">
                            <form class="form-horizontal row-fluid" method="post" action="#">
										<label class="control-label"><b>Tools Type Name</b></label>
										<div class="controls" >
										<select tabindex="1" data-placeholder="Select tools Type.." class="span5" name="select_tools_type" id="select_tools_type">
											<option value="Select Type Name.." selected >Select Type Name..</option>
										<?php
													
										  foreach($tools_type as $data)
											{
										?>
												<option value="<?php echo $data['tools_type_id'] ?>"  <?php if($select)
												{
													if(trim($select[0]["tools_type_id"])==trim($data['tools_type_id']))
													{
														echo "selected";
													}
												}?>><?php echo $data['tools_type_name']?></option>
										<?php
                                            }
										?>
										</select>
                                       
										</div>
									</div>
                                    <br />
                                      <div class="form-horizontal row-fluid" style="margin-left:150px">
										<label class="control-label"><b>Tools Subtype Name</b></label>
										<div class="controls" >
										<select tabindex="1" data-placeholder="Select subtype Name.." class="span5" name="select_subtype_name" id="select_subtype_name">
										<option value="Select Subtype Name.." selected>Select Subtype Name..</option>
										<?php
													
										  foreach($tools_subtype as $data)
											{
											
										?>
												<option value="<?php echo $data['tools_subtype_id']?>" <?php if($select1)
												{
													if(trim($select1[0]["tools_subtype_id"])==trim($data['tools_subtype_id']))
													{
														echo "selected";
													}
												}?>><?php echo $data['tools_subtype_name']?></option>
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
											<th>Tools Name</th>
											<th>Tools Price</th>
											<th>Tools Uses</th>
											<th>Origin Country</th>
											<th>Delete</th>
                                            <th>Update</th>
                                             <th>Update Image</th>
                                            <th>More Detail</th>

										</tr>
									</thead>
									<tbody>
                                    <?php
									foreach($tools_data as $data)
									{
									?>
										<tr class="odd gradeX">
											<td><?php echo $data['tools_detail_name']; ?></td>
											<td><?php echo $data['tools_price']; ?></td>
                                            <td><?php echo $data['tools_uses']; ?></td>
											
											
											<td><?php foreach($origin_country as $detail1)
														{
															if(trim($detail1['country_id'])==trim($data['origin_country']))echo $detail1['country_name']; 
														} ?></td>
											<td ><a href="<?php echo base_url()?>seller/seller_tools/seller_tools_backup/<?php echo $data['tools_detail_id'];?>" ><img src="<?php echo base_url("data/images/delete.png");?>"  style="width:30px;height:30px;margin-left:20px" / ></a></td>
                                            <td><a href="<?php echo base_url()?>seller/seller_tools/seller_tools_data_update/<?php echo $data['tools_detail_id']; ?>"><img src="<?php echo base_url("data/images/update.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
                                             <td><a href="<?php echo base_url()?>seller/seller_tools/seller_tools_data_update_image/<?php echo $data['tools_detail_id']; ?>"><img src="<?php echo base_url("data/images/update_image.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
                                            <td><a href="<?php echo base_url()?>seller/seller_tools/seller_tools_display/<?php echo $data['tools_detail_id']; ?>" ><img src="<?php echo base_url("data/images/more.png");?>"  style="width:40px;height:40px;margin-top:-5px;margin-bottom:-5px;margin-left:40px"/></a></td>
</tr>										
                   <!-- Modal -->


                                        <?php
										}
										?>										
										
									</tbody>
									<tfoot>
										<tr>
									<th>Tools Name</th>
											<th>Tools Price</th>
											<th>Tools Uses</th>
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