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
		$("#replay").hide();
		$(".msg_delete").click(function(){
			
				$("#replay").show();
			
			});
		$("#send").click(function(){
			
			var seller_name,subject;
			//var fname1=getElementById("#fname").value;
			seller_name = test_drop("#seller_id","#msgseller_name");
			subject = test_subject("#subject","#msgseller_name");
			msg = test_subject("#message","#msgseller_name");
			if(seller_name == true && subject == true && msg == true)
			{
				return true;
				
			}
			else
			{
				return false;
			}
			
		});
		$("#send1").click(function(){
			
			var seller_name1,subject1;
			//var fname1=getElementById("#fname").value;
			//seller_name = test_drop("#seller_id","#msgseller_name");
			subject1 = test_subject("#subject1","#msgseller_name");
			msg1= test_subject("#message1","#msgseller_name");
			if( subject1 == true && msg1 == true)
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
					<div class="content" style="margin-left:30px">
							
					<div class="module message">
                                <div class="module-head">
                                    <h3>
                                        <?php echo $chat[0]["subject"]?></h3>
                                </div>
                               <div class="module-option clearfix">
                                    <div class="pull-left">
                                        <div class="btn-group">
                                            <a href="<?php echo base_url("admin/admin/admin_inbox") ?>" class="btn" style="background-color:#CCC">Inbox</a>
                                            <button class="btn dropdown-toggle" data-toggle="dropdown" style="height:28px">
                                                <span class="caret"></span>
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a href="<?php echo base_url("admin/admin/admin_inbox") ?>">Inbox</a></li>
                                                <li><a href="<?php echo base_url("admin/admin/admin_inbox_send") ?>">Sent</a></li>
                                               
                                                <li><a href="<?php echo base_url("admin/admin/admin_inbox_trash") ?>">Trash</a></li>
                                                
                                            </ul>
                                            
                                           
                                             
                                        </div>
                                    </div>
                                    <div class="pull-right">
                                        <a href="#myModal" class="btn btn-primary" data-toggle="modal">Compose</a>
                                    </div>
  
                             
                                    <br>
                                    <br>
                                    <br> <fieldset>
                            <legend style="border-bottom:#333 solid 1px">Message</legend></fieldset>
                            <h3 style="margin-left:20px;margin-top:-20px"><?php echo $chat[0]["subject"]?></h3>
                            <h5 style="margin-left:20px;"><?php echo $chat[0]["message"]?></h5>
  <span class="btn msg_delete" style="margin-left:20px">reply</span><br>
  <br>
                              
                            <fieldset>
                            <legend></legend></fieldset>
                            <div class="module-body" id="replay" style="border:#666 solid 0px"> <fieldset>
                            <legend style="border-bottom:#333 solid 1px">REPLY</legend></fieldset>
                                    <form class="form-horizontal row-fluid" method="post" action="<?php echo base_url('admin/admin/admin_msg_replay');?>" >
                                    <input type="hidden" id="seller_id1" name="seller_id1" value="<?php echo $chat[0]["sender_id"]?>" style="width:300px">	
                                     &nbsp;&nbsp;&nbsp;&nbsp;      <b>To</b>
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<?php 
													if($chat[0]["sender_id"]=="Bha7871")
													echo "ADMIN";
													else
													{
														foreach($seller_msg as $data1)
														{
																if($chat[0]["sender_id"]==$data1["seller_id"])
																{
																	echo $data1["seller_name"];
																}
													
									
                                     	          		  }
													}?><br><br>
                                         &nbsp;&nbsp;&nbsp;&nbsp;      <b>Subject</b>
        &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="subject1" name="subject1" value="" style="width:300px"><br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;   <b>Message</b>&nbsp;&nbsp;&nbsp;&nbsp;<textarea id="message1" name="message1" style="width:300px;height:100px;resize:none"></textarea><br><br>
      <button type="submit" class="btn btn-primary"  name="send" id="send1" style="margin-left:200px">SEND</button>
								</form>
                                </div>
                                 </div>
                                
                               
                            </div>
                           
			 <div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">New Message</h4>
      </div>
      <form name="imgfrm"  action="<?php echo base_url("admin/admin/send_message") ?>" method="post"  >
      <div class="modal-body">
      
      
      <b> To</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <select  data-placeholder="Select here" name="seller_id" id="seller_id" style="width:300px">
                                        
										<option value="Select here..">Select here..</option>
										 <?php
												//$data="";		
													foreach($seller_msg as $data)
													{
										?>
													<option value="<?php echo $data['seller_id']?>"><?php echo $data['seller_name']?></option>
										<?php
                                     	            }
										?>
                                        </select><br>
      <b>Subject</b>
        &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="subject" name="subject" value="" style="width:300px"><br>
        <b>Message</b>&nbsp;&nbsp;&nbsp;&nbsp;<textarea id="message" name="message" style="width:300px;height:100px;resize:none"></textarea>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary"  name="send" id="send">SEND</button>
      </div>
    </div>
</form>
  </div>
</div>
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>