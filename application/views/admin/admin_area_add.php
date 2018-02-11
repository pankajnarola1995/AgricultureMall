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
		$("#country_id").change(function(){
					var id = $(this).val();
					if(id == "Select Country..")
					{	//alert();
					}
					else
					{
						//alert(id);
						$.ajax({
							url:"<?php echo base_url("admin/admin_location/select_city_country")?>",
							type:"post",
							data:{country_id:id},
							success:function(result){
								//alert(result);
								$("#state_id").html(result);
							}
						});
					}
				
				});
			$("#state_id").change(function(){
					var id = $(this).val();
					if(id == "Select State..")
					{	//alert();
					}
					else
					{
						//alert(id);
						$.ajax({
							url:"<?php echo base_url("admin/admin_location/select_city_state")?>",
							type:"post",
							data:{state_id:id},
							success:function(result){
								//alert(result);
								$("#city_id").html(result);
							}
						});
					}
				
				});
		$("#add_city").click(function(){
			
			var country_id,state_id,city_id,area_name;
			//var fname1=getElementById("#fname").value;
			country_id = test_drop("#country_id","#msgcountry_id");
			state_id = test_drop("#state_id","#msgstate_id");
			city_id = test_drop("#city_id","#msgcity_id");
			area_name = test_areaname("#area_name","#msgarea_name");
			if(country_id == true && state_id == true && city_id== true && area_name == true)
			{
				return true;
				
			}
			else
			{
				return false;
			}
			
		});
		$("#select_country").change(function(){
					var id = $(this).val();
					if(id == "Select Country Name..")
					{	//alert();
						window.location.assign("<?php echo base_url("admin/admin_location/admin_area_add")?>");
					}
					else
					{
						window.location.assign("<?php echo base_url("admin/admin_location/select_state_data_city_area")?>/"+id);//alert(id);						
					}
				
				});
			$("#select_state_name").change(function(){
					var id = $(this).val();
					var type_id = $("#select_country").val();
					var type_id1 = $("#select_city_name").val();
					//alert(id);
					//alert(type_id);
					if(type_id == "Select Country Name.." && type_id1 == "Select City Name.." && id != "Select State Name..")
					{	//alert("ssss");
						window.location.assign("<?php echo base_url("admin/admin_location/select_state_country_area")?>/"+id);
					}
					else if(id == "Select State Name.." && type_id != "Select Country Name.." && type_id1 == "Select City Name.." )
					{	//alert();
						window.location.assign("<?php echo base_url("admin/admin_location/select_state_data_city_area")?>/"+type_id);
					}
					else if(id != "Select State Name.." && type_id == "Select Country Name.." && type_id1 != "Select City Name.." )
					{	//alert("hhhh");
						window.location.assign("<?php echo base_url("admin/admin_location/select_state_country_area")?>/"+id);
					}
					else if(type_id1 == "Select City Name.." && id == "Select State Name.." && type_id == "Select Country Name..")
					{	//alert("mmmm");
						window.location.assign("<?php echo base_url("admin/admin_location/admin_area_add")?>");
					}
					else
					{
						//alert(id);
						
						window.location.assign("<?php echo base_url("admin/admin_location/select_city_data_area")?>/"+id+" "+type_id);
					}
				
				});
	$("#select_city_name").change(function(){
					var id = $(this).val();
					var type_id = $("#select_country").val();
					var type_id1 = $("#select_state_name").val();
					
					//alert(id);
					//alert(type_id1);
					if(type_id1 == "Select State Name.." && id == "Select City Name.." && type_id != "Select Country Name..")
					{	//alert();
						window.location.assign("<?php echo base_url("admin/admin_location/select_state_data_city_area")?>/"+type_id);;
					}
					else if(id != "Select City Name.." && type_id1 == "Select State Name.." && type_id == "Select Country Name..")
					{	//alert("mmmm");
						window.location.assign("<?php echo base_url("admin/admin_location/select_state_country_area12")?>/"+id);
					}
					else if(id != "Select City Name.." && type_id1 != "Select State Name.." && type_id == "Select Country Name..")
					{	//alert("mmmm");
						window.location.assign("<?php echo base_url("admin/admin_location/select_state_country_area1")?>/"+id+" "+type_id1);
					}
					else if(id == "Select City Name.." && type_id1 != "Select State Name.." && type_id != "Select Country Name..")
					{	//alert();
						window.location.assign("<?php echo base_url("admin/admin_location/select_city_data_area")?>/"+type_id1+" "+type_id);
					}
					else if(type_id1 == "Select State Name.." && id != "Select City Name.." && type_id != "Select Country Name..")
					{	//alert();
						window.location.assign("<?php echo base_url("admin/admin_location/select_city_data_area_data")?>/"+id+" "+type_id);
					}
					else if(id == "Select City Name.." && type_id1 == "Select State Name.." && type_id == "Select Country Name..")
					{	//alert("mmmm");
						window.location.assign("<?php echo base_url("admin/admin_location/admin_area_add")?>");
					}
					else if(id == "Select City Name.." && type_id1 != "Select State Name.." && type_id == "Select Country Name..")
					{	//alert("mmmm");
						window.location.assign("<?php echo base_url("admin/admin_location/select_state_country_area")?>/"+type_id1);
					}
					else
					{
						//alert(id);
						
						window.location.assign("<?php echo base_url("admin/admin_location/select_city_data_area_type_all")?>/"+id+" "+type_id+" "+type_id1);
					}
				
				});
	
	});
</script>
				<div class="span9">
					<div class="content" style="width:100%;margin-left:30px">

					<div class="module" >
							<div class="module-head" align="center">
								<h3>Add Area</h3>
							</div>
							<div class="module-body" style="alignment-baseline:central;margin-left:170px">

									<br />

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_location/insert_area") ?>">
                                    <div class="control-group">
										<label class="control-label" ><b>Country Name</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="country_id" id="country_id">
										<option value="Select here..">Select Country..</option>
										<?php
													
										  foreach($country_data as $data)
											{
										?>
												<option value="<?php echo $data['country_id']?>"><?php echo $data['country_name']?></option>
										<?php
                                            }
										?>
										</select>
                                       <!-- <span class="help-inline" id="msgcountry_id" style="float:right"></span>			-->
										</div>
									</div>
                                    
                                    
                                     <div class="control-group">
										<label class="control-label" ><b>State Name</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="state_id" id="state_id">
										<option value="Select here..">Select State..</option>
										</select>
                                    <!--    <span class="help-inline" id="msgstate_id" style="float:right"></span>			-->
										</div>
									</div>
                               
                                <div class="control-group">
										<label class="control-label" ><b>City Name</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="city_id" id="city_id">
										<option value="Select here..">Select City..</option>
										</select>
                                      <!-- <span class="help-inline" id="msgcity_id" style="float:right"></span>			-->
										</div>
									</div>
                               
                                        
                                    <div class="control-group">
											<label class="control-label"><b>Area Name</b></label>
											<div class="controls">
												<input type="text" name="area_name" id="area_name" placeholder="Enter Area Name" class="span8">
												<span class="help-inline" id="msgarea_name"  style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group">
											<div class="controls" >
												<button type="submit" class="btn"  name="add_city" id="add_city">Add Area</button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<div class="module">
							<div class="module-head">
								<h3>Area Data</h3>
							</div>
                           <br />
                            
                                   
							<div class="module-body table"  >
                              <div class="form-horizontal row-fluid" style="margin-left:150px">
                              <form class="form-horizontal row-fluid" method="post" action="#">
										<label class="control-label"><b>Country Name</b></label>
										<div class="controls" >
										<select tabindex="1" data-placeholder="Select Seed Type.." class="span5" name="select_country" id="select_country">
											<option value="Select Country Name.." selected >Select Country..</option>
										<?php
													
										  foreach($country_data as $data)
											{
										?>
												<option value="<?php echo $data['country_id'] ?>"  <?php if($select)
												{
													if($select[0]["country_id"]==$data['country_id'])
													{
														echo "selected";
													}
												}?>><?php echo $data['country_name']?></option>
										<?php
                                            }
										?>
										</select>
                                        <span class="help-inline" id="msgcountry"></span>			
										</div>
									</div>
                                    <br />
                                      <div class="form-horizontal row-fluid" style="margin-left:150px">
										<label class="control-label"><b>State Name</b></label>
										<div class="controls" >
										<select tabindex="1" data-placeholder="Select State Name.." class="span5" name="select_state_name" id="select_state_name">
										<option value="Select State Name.." selected>Select State..</option>
										<?php
													
										  foreach($state_data as $data)
											{
											
										?>
												<option value="<?php echo $data['state_id']?>" <?php if($select1)
												{
													if($select1[0]["state_id"]==$data['state_id'])
													{
														echo "selected";
													}
												}?>><?php echo $data['state_name']?></option>
										<?php
                                            }
										?>
										</select>
                                        <span class="help-inline" id="msgstate"></span>			
										</div>
									</div>
                                    <br />
                                    <div class="form-horizontal row-fluid" style="margin-left:150px">
										<label class="control-label"><b>City Name</b></label>
										<div class="controls" >
										<select tabindex="1" data-placeholder="Select City Name.." class="span5" name="select_city_name" id="select_city_name">
										<option value="Select City Name..">Select City..</option>
										<?php
													
										  foreach($city_data as $data)
											{
											
										?>
												<option value="<?php echo $data['city_id']?>" <?php if($select2)
												{
													if($select2[0]["city_id"]==$data['city_id'])
													{
														echo "selected";
													}
												}?> ><?php echo $data['city_name']?></option>
										<?php
                                            }
										?>
										</select>
                                        <span class="help-inline" id="msgstate"></span>			
										</div>
									</div>
                                    </form>
                                    <br />
								<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
											<th>Area Name</th>
											<th>Delete</th>
                                            <th>Update</th>
                                           	</tr>
									</thead>
									<tbody >
                                     <?php
									 if($area_data)
									 {
									foreach($area_data as $select_data)
											{
										?>
							<tr class="odd gradeX">
								<td><?php echo $select_data['area_name'] ?></td>
								<td ><a href="<?php echo base_url()?>admin/admin_location/select_delete_area/<?php echo $select_data['area_id'];?>" ><img src="<?php echo base_url("data/images/delete.png");?>"  style="width:30px;height:30px;margin-left:20px" / ></a></td>
                                <td><a href="<?php echo base_url()?>admin/admin_location/select_update_area/<?php echo $select_data['area_id'];?>"><img src="<?php echo base_url("data/images/update.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
							</tr>
                            <?php
							}
									 }
							?>

 									</tbody>							
									<tfoot>
										<tr>
											<th>Area Name</th>
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