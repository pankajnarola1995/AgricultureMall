﻿<?php include("header.php");?>

  
<div class="span9">
                    <div class="content" style="margin-left:30px">
                        <div class="module">
                            <div class="module-head">
                                <h3>
                                    All Members</h3>
                            </div>
                            <div class="module-option clearfix">
                                <form action="<?php echo base_url("admin/admin/user_profile_search")?>">
                                <div class="input-append pull-left">
                                    <input type="text" class="span3" placeholder="Filter by name..." name="search">
                                    <button type="submit" class="btn">
                                        <i class="icon-search"></i>
                                    </button>
                                </div>
                                </form>
                              
                            </div>
                             <?php
							if(isset($user_data) or isset($seller_image))
							{
								//echo "<pre>";
								//print_r($seller_image);
								$cnt1=count($user_data);
								$cnt=$cnt1/2;
								for($i=0;$i<$cnt1;$i++)
								{
							?>
                            <div class="module-body">
                           
                                <div class="row-fluid">
                                
                                    <div class="span6">
                                        <div class="media user">
                                            <a class="media-avatar pull-left" href="#">
                                                <img src="<?php echo base_url()?>image/user/<?php 
												$cnt2=count($user_image);
												for($j=0;$j<$cnt2;$j++)
												{
												if(trim($user_data[$i]["user_id"])==trim($user_image[$j]['user_id']))
												{
													echo $user_image[$j]['image_name'];
												}
												}
													?>">
                                            </a>
                                            <div class="media-body">
                                                <h3 class="media-title">
                                                
                                                    <?php echo $user_data[$i]['name'];?>
                                         
                                                </h3>
                                                <p>
                                                    <small class="muted"> <?php
													
													foreach($city_data as $city)
													{
														if(trim($city["city_id"])==trim($user_data[$i]["city"]))
																 echo $city['city_name'];
                                                    }
													?></small></p>
                                                <div class="media-option btn-group shaded-icon">
                                          <a  href="#profile<?php echo $user_data[$i]['user_id']; ?>" data-toggle="modal" > 
                                                    <button class="btn btn-small">
                                                        <i class="icon-share-alt"></i>
                                                    </button></a>
                                                </div>	
                                            </div>
                                        </div>
                                    </div>
                                         <div id="profile<?php echo $user_data[$i]['user_id']; ?>" class="modal fade" role="dialog" style="margin-top:50px">
  <div class="modal-dialog">

    
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"  style="width:30px">&times;</button>
        <h4 class="modal-title">Profile</h4>
        <br>
        <fieldset><legend></legend></fieldset>
        <h5 class="modal-title">Name :<?php echo $user_data[$i]['name']; ?></h5>
        <h5 class="modal-title">Email Address :<?php echo $user_data[$i]['email_id']; ?></h5>
        <h5 class="modal-title">City : <?php
													
													foreach($city_data as $city)
													{
														if(trim($city["city_id"])==trim($user_data[$i]["city"]))
																 echo $city['city_name'];
                                                    }
													?></h5>
        <h5 class="modal-title">Gender :<?php echo $user_data[$i]['gender']; ?></h5>
        <h5 class="modal-title">address :<?php echo $user_data[$i]['address']; ?></h5>
         <h5 class="modal-title">Mobile Number :<?php echo $user_data[$i]['mobile_number']; ?></h5>
        
      </div>
     
  </div>
</div>
                             
                                <!--/.row-fluid-->
                              
                            
                                
                            </div>

                                <?php
								
								}
							}
							else
							{
								echo "No User Found";
								}
							?>
                                
                        </div></div>
                    </div>
                    <!--/.content-->
                </div>
<?php include("footer.php"); ?>