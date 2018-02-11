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
<script type="text/javascript" src="<?php echo base_url()?>data/validation/jquery-1.10.2.js">
</script>
<script type="text/javascript" src="<?php echo base_url()?>data/validation/validate.js"></script>
<script>
		
	$("document").ready(function(){
		$("#update_seed_type").click(function(){
			
			var seed_type_name;
			//var fname1=getElementById("#fname").value;
			seed_type_name = test_name("#seed_type_name","#msgseed_type_name");
			if(seed_type_name == true)
			{
				return true;
				
			}
			else
			{
				return false;
			}
			
		});
	
	});
</script>
				<div class="span9">
					<div class="content" style="width:100%;margin-left:10px">

					<div class="module" >
							<div class="module-head" align="center">
								<h3>Update Seed Image</h3>
							</div>
							<div class="module-body" style="alignment-baseline:central;margin-left:170px">

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

									<div class="control-group" >
											
											<div class="controls" style="margin-left:-150px">
                                            <table >
                                            
                                            
                                               <?php
														if($image)
														{
															
													foreach($image as $data)
													{
										?>
                                        
                                      
                                        <tr >
                                   			<td colspan="2" align="center" style="padding-bottom:5px">
                                            <img src="<?php echo base_url()?>image/<?php echo $data['image_name'];?>" width="100px" height="100px"></td>
                                      <td>   <a href="#myModal<?php echo $data['image_id']; ?>" role="button" class="btn btn-primary" data-toggle="modal">Update</a> </td>
                                        <td> 
                                         <a href="<?php echo base_url("seller/seller_seed/seed_image_delete") ?>/<?php echo $data['image_id']; ?>/<?php echo $data['image_name']; ?>/<?php echo $seed_detail_id['seed_detail_id']; ?>" role="button" class="btn btn-primary" data-toggle="modal">Delete</a> </td>
                                        						<!-- Modal -->
<div id="myModal<?php echo $data['image_id']; ?>" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Update Image</h4>
      </div>
      <form name="imgfrm"  action="<?php echo base_url("seller/seller_seed/seed_image_update") ?>" method="post"  enctype="multipart/form-data">
      <div class="modal-body">
      
       <input type="file" id="seed_images" name="seed_images"  value="" >
        <input type="hidden" id="seed_images_id" name="seed_images_id" value="<?php echo $data['image_id']; ?>">
        <input type="hidden" id="old_seed_images_id" name="old_seed_images_id" value="<?php echo $data['image_name']; ?>">
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary"  name="update" id="update">Update</button>
      </div>
    </div>
</form>
  </div>
</div>
                                            <?php
                                     	            }
														}
														else
														{
															echo "No Image Found";
														}
										?> <br>
                                        <br>
                                   <form class="form-horizontal row-fluid" method="post" action="<?php echo base_url('seller/seller_seed/add_image');?>" enctype="multipart/form-data">	
                                          <div class="control-group">
                                           <input type="hidden" id="seed_detail_id" name="seed_detail_id" value="<?php echo $seed_detail_id['seed_detail_id']; ?>">
											<label class="control-label" ><b>Images</b></label>
											<div class="controls">
												<input type="file" id="seed_images" name="seed_images[]" class="span8" multiple >
                                                <span class="help-inline"  id="msgseed_images" ></span>
											</div>
										</div>
                                       <div class="control-group">
                                        <div class="controls">
                                        <button type="submit" class="btn btn-primary" name="add_seedimage" id="add_seedimage">Add Seed Image</button>
                                        </div>
                                        </div>
			
    								  </form>
												
											</div>
                                            
                                            </tr>
                                            </table>
										</div>
                                        <br>
                                        <br>
                                        <br>
                                      <a href="<?php echo base_url('seller/seller_seed');?>"  class="btn btn-success" data-toggle="modal" style="margin-left:170px">Back To Seed</a> 
							</div>
						</div>
					
					<!--/.module-->
					
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>