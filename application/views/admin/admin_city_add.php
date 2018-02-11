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
			
		$("#add_city").click(function(){
			
			var country_id,state_id,city_name;
			//var fname1=getElementById("#fname").value;
			country_id = test_drop("#country_id","#msgcountry_id");
			state_id = test_drop("#state_id","#msgstate_id");
			city_name = test_cityname("#city_name","#msgcity_name");
			if(country_id == true && state_id == true && city_name == true)
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
						window.location.assign("<?php echo base_url("admin/admin_location/admin_city_add")?>");
					}
					else
					{
						window.location.assign("<?php echo base_url("admin/admin_location/select_state_data_city")?>/"+id);//alert(id);						
					}
				
				});
			$("#select_state_name").change(function(){
					var id = $(this).val();
					var type_id = $("#select_country").val();
					
					//alert(id);
					//alert(type_id);
					if(type_id == "Select Country Name..")
					{	//alert("dddd");
						window.location.assign("<?php echo base_url("admin/admin_location/select_state_data_city_data")?>/"+id);
					}
					else if(id == "Select State Name..")
					{	//alert();
						window.location.assign("<?php echo base_url("admin/admin_location/select_state_data_city")?>/"+type_id);
					}
					else
					{
						//alert(id);
						
						window.location.assign("<?php echo base_url("admin/admin_location/select_city_data")?>/"+id+" "+type_id);
					}
				
				});
	
	});
</script>
				<div class="span9">
					<div class="content" style="width:100%;margin-left:30px">

					<div class="module" >
							<div class="module-head" align="center">
								<h3>Add City</h3>
							</div>
							<div class="module-body" style="alignment-baseline:central;margin-left:170px">

									<br />

									<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("admin/admin_location/insert_city") ?>">
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
<!--                                        <span class="help-inline" id="msgcountry_id" style="float:right"></span>	-->		
										</div>
									</div>
                                    
                                    
                                     <div class="control-group">
										<label class="control-label" ><b>State Name</b></label>
										<div class="controls">
										<select tabindex="1" data-placeholder="Select here" class="span8" name="state_id" id="state_id">
										<option value="Select here..">Select State..</option>
										</select>
<!--                                        <span class="help-inline" id="msgstate_id" style="float:right"></span>		-->	
										</div>
									</div>
                               
                                        
                                    <div class="control-group">
											<label class="control-label"><b>City Name</b></label>
											<div class="controls">
												<input type="text" name="city_name" id="city_name" placeholder="Enter City Name" class="span8">
												<span class="help-inline" id="msgcity_name"  style="color:#F00;position:absolute"></span>
											</div>
										</div>
                                    
										<div class="control-group">
											<div class="controls" >
												<button type="submit" class="btn"  name="add_city" id="add_city">Add City </button>
											</div>
										</div>
									</form>
							</div>
						</div>
					
					<div class="module">
							<div class="module-head">
								<h3>City Data</h3>
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
                                       	
										</div>
									</div>
                                    </form>
                                    <br />
								<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
											<th>City Name</th>
											<th>Delete</th>
                                            <th>Update</th>
                                           	</tr>
									</thead>
									<tbody >
                                     <?php
									 if($city_data)
									 {
									foreach($city_data as $select_data)
											{
										?>
							<tr class="odd gradeX">
								<td><?php echo $select_data['city_name'] ?></td>
								<td ><a href="<?php echo base_url()?>admin/admin_location/select_delete_city/<?php echo $select_data['city_id'];?>" ><img src="<?php echo base_url("data/images/delete.png");?>"  style="width:30px;height:30px;margin-left:20px" / ></a></td>
                                <td><a href="<?php echo base_url()?>admin/admin_location/select_update_city/<?php echo $select_data['city_id'];?>"><img src="<?php echo base_url("data/images/update.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
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