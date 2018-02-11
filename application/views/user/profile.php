
<?php include_once("header.php") ?>
<script src="<?php echo base_url()?>data/sellerdata/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
   <div id="profileupdate" class="modal fade" role="dialog" style="margin-top:50px">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"  style="width:30px">&times;</button>
        <h4 class="modal-title">Update Profile Picture</h4>
      </div>
      <form name="imgfrm"  action="<?php echo base_url("home/user_profile_update_image") ?>" method="post"  enctype="multipart/form-data">
      <div class="modal-body">
      
       <input type="file" id="images" name="images" value="" >
        <input type="hidden" id="user_id" name="user_id" value="<?php echo $this->session->userdata("user_login_id")?>">
        <input type="hidden" id="old_images_id" name="old_images_id" value="<?php echo $this->session->userdata("user_pic")?>">
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn"  name="update" id="update">Update</button>
      </div>
    </div>
</form>
  </div>
</div>

      
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >
   
   
          <div class="panel panel-info">
            <div class="panel-heading">
              <h3 class="panel-title"><?php echo $user_data[0]["name"]?></h3>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-md-3 col-lg-3 " >
                <a href="#profileupdate" data-toggle="modal" title="Click To Update Profile Picture"><div class="product-grid" style="border:none" align="center">
											
						<div class="product-img b-link-stripe b-animate-go  thickbox" style="width:150px;height:150px" style="border:none">
							<img alt="User Pic" src="<?php echo base_url()?>image/user/<?php echo $this->session->userdata("user_pic")?>" class="img-circle img-responsive" >
							<div class="b-wrapper"  >
							<h4 class="b-animate b-from-left  b-delay03">							
							<button class="btns" >Update Profile</button>
							</h4>
							</div>
						</div></a>	
                	
                            </div>
                
                <!--<div class="col-xs-10 col-sm-10 hidden-md hidden-lg"> <br>
                  <dl>
                    <dt>DEPARTMENT:</dt>
                    <dd>Administrator</dd>
                    <dt>HIRE DATE</dt>
                    <dd>11/12/2013</dd>
                    <dt>DATE OF BIRTH</dt>
                       <dd>11/12/2013</dd>
                    <dt>GENDER</dt>
                    <dd>Male</dd>
                  </dl>
                </div>-->
                <div class="col-md-9 col-lg-9"> 
                  <table class="table table-user-information" style="width:500px;margin-left:80px">
                    <tbody>
                      <tr>
                        <td>Email Address:</td>
                        <td><?php echo $user_data[0]["email_id"]?></td>
                      </tr>
                      <tr>
                        <td>City</td>
                        <td><?php foreach($city_data as $city)
						{
							if(trim($city["city_id"])==trim($user_data[0]["city"]))
							echo $city["city_name"];
						}?></td>
                      </tr>
                      <tr>
                        <td>Gender</td>
                        <td><?php echo $user_data[0]["gender"]?></td>
                      </tr>
                   
                         <tr>
                             <tr>
                        <td>Date Of Birth</td>
                        <td><?php echo $user_data[0]["dob"]?></td>
                      </tr>
                        <tr>
                        <td>Home Address</td>
                        <td><?php echo $user_data[0]["address"]?></td>
                      </tr>
                      <tr>
                        <td>Mobile Number</td>
                        <td><?php echo $user_data[0]["mobile_number"]?></td>
                      </tr>
                        <td></td>
                        <td><br>
                        </td>
                           
                      </tr>
                     
                    </tbody>
                  </table>
                  
                  
                </div>
              </div>
            </div>
                 <div class="panel-footer">
                       <a href="<?php echo base_url("home/user_updateprofile");?>" title="Edit this user" data-toggle="tooltip" type="button" class="btn btn-primary"><i class="menu-icon icon-edit"></i></a>
                        
                    </div>
            
          </div>
        </div>
      </div>
    
    
 
	
	
   