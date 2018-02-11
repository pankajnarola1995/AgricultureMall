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
		$("#deletemsg").hide();
		$("#backmsg").hide();
		$(".msg_delete").click(function(){
			if($(".msg_delete:checked").length > 0)
			{
				$("#deletemsg").show();
				$("#backmsg").show();
			}
			else
			{
				$("#deletemsg").hide();
				$("#backmsg").hide();
			}
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
	
	});
</script>

				<div class="span9">
					<div class="content" >
							 <form method="post" name="deletemsg" action="<?php echo base_url("seller/seller/seller_delete_trash_message")?>" >
					<div class="module message">
                                <div class="module-head">
                                    <h3>
                                        Trash Message</h3>
                                </div>
                                <div class="module-option clearfix">
                                    <div class="pull-left">
                                        <div class="btn-group">
                                           <a href="<?php echo base_url("seller/seller/seller_inbox") ?>" class="btn" style="background-color:#CCC" >Inbox</a>
                                            <button class="btn dropdown-toggle" data-toggle="dropdown" style="height:28px">
                                                <span class="caret"></span>
                                            </button>
                                            <ul class="dropdown-menu">
                                               <li><a href="<?php echo base_url("seller/seller/seller_inbox") ?>">Inbox</a></li>
                                                <li><a href="<?php echo base_url("seller/seller/seller_inbox_send") ?>">Sent</a></li>
                                             
                                                <li><a href="<?php echo base_url("seller/seller/seller_inbox_trash") ?>">Trash</a></li>
                                            </ul>
                                            <input type="submit" name="deletemsg" id="deletemsg" value="Delete"  style="padding-left:10px;margin-left:50px">
                                             <input type="submit" name="backmsg" id="backmsg" value="Back Up" style="margin-left:10px">
                                        </div>
                                    </div>
                                    <div class="pull-right">
                                        <a href="#myModal" class="btn btn-primary" data-toggle="modal">Compose</a>
                                    </div>
  
                                </div>
                                <div class="module-body table">
                                    <table class="table table-message" style="font-family:'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'DejaVu Sans', Verdana, sans-serif;font-size:14px">
                                        <tbody>
                                            <tr class="heading">
                                                <td class="cell-check">
                                                  
                                                </td>
                                                <td class="cell-icon">
                                                </td>
                                                <td class="cell-author hidden-phone hidden-tablet">
                                                    Sender
                                                </td>
                                                <td class="cell-title">
                                                    Subject
                                                </td>
                                                <td class="cell-icon hidden-phone hidden-tablet">
                                                </td>
                                                 <td class="cell-time align-right">
                                                    Time
                                                </td>
                                                <td class="cell-time align-right">
                                                    Date
                                                </td>
                                               
                                            </tr>
                                             <?php
												//$data="";	
												if(count($seller_message)!=0)
												{
													foreach($seller_message as $data1)
													{
														foreach($data1 as $data)
													{?>
                                                   
                                            <tr class="unread">
                                                <td class="cell-check">
                                                    <input type="checkbox" class="inbox-checkbox msg_delete" name="msg_delete[]" value="<?php echo $data["chat_id"] ?>">
                                                </td>
                                                
                                                <td class="cell-icon">
                                                    
                                                </td>
                                                <td class="cell-author hidden-phone hidden-tablet">                                            
                                                    <?php 
													if($data["sender_id"]=="Bha7871")
													echo "ADMIN";
													else
													{
														foreach($seller_msg as $data1)
														{
																if($data["sender_id"]==$data1["seller_id"])
																{
																	echo $data1["seller_name"];
																}
													
									
                                     	          		  }
													}?>
                                                </td>
                                                <td class="cell-title">
                                                   <?php echo $data["subject"] ?>
                                                </td>
                                                <td class="cell-icon hidden-phone hidden-tablet">
                                                   <a href="#myModal<?php echo $data['chat_id']; ?>"  data-toggle="modal"> <i class="icon-paper-clip"></i></a>
                                                </td>
                                                 <td class="cell-time align-right">
                                                   <?php echo $data["time"] ?>
                                                </td>
                                                <td class="cell-time align-right">
                                                    <?php echo $data["date"] ?>
                                                </td>
                                               
                                            </tr>
                                             
                        
                                           <?php
													}
													}
													}else
													{?>
														<tr class="read">
                                                
                                               <td colspan="4" style="padding-left:65px">No Message
                                               </td>
                                            </tr>
													<?php
                                                    }
												
										   ?>
                                          
                                        </tbody>
                                    </table>
                                    
                                </div>
                                <div class="module-foot">
                                </div>
                            </div>
                            </form>
			 <div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">New Message</h4>
      </div>
      <form name="imgfrm"  action="<?php echo base_url("seller/seller/send_message") ?>" method="post"  >
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