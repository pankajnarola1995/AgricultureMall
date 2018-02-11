<?php include_once("header.php") ?>  
				<script type="text/javascript" src="<?php echo base_url()?>data/validation/validate.js"></script>
<script>
		
	$("document").ready(function(){
		$("#changepass").click(function(){
			var new_password,old_password ;
			//var fname1=getElementById("#fname").value;
			//alert(fname1);
			old_password = test_oldpassword("#old_password","#msgold_password");
			new_password = test_match("#new_password","#new_confirmpassword","#msgnew_password","#msgnew_confirmpassword");
			//alert("old :"+old_password + " new :"+new_password);
			if( old_password == true && new_password == true )
			{
				//alert("okkk");
				return true;
				
			}
			else
			{
				//alert("okkkkkkk");
				return false;
			}
			
		});
		$("#old_password").blur(function(){
					var id = $(this).val();
						//alert(id);
						$.ajax({
							url:"<?php echo base_url("home/check_password")?>",
							type:"post",
							data:{old_pass:id},
							success:function(result){
								//alert(result);
								$("#msgold_password").html(result);
								//alert(result);
								if(result!="")
								$("#old_password").val("");
								
								
							}
						});
					
				
				});
		
	
	});
</script>
    <div class="span9" style="width:50%;margin-left:420px" align="">
    
					<div class="content" >

						
							
								<h3>Change Password</h3>
							<br>
                            <div class="registration_form">
			 <!-- Form -->
             <table border="0" style="width:1150px">
             <tr>
            
			<form class="form-horizontal row-fluid" method="post" action="<?php echo base_url("home/changepassword")?>" >	
                 <td style="width:650px">
					<div>
						<label>
							Old Password
						</label><input type="password" name="old_password" id="old_password" placeholder="Type Old password" class="span8" style="width:50%">
												<span class="help-inline" id="msgold_password" style="color:#F00;float:right"></span>
					</div>
					<div>
						<label>
							New Password
						</label>
                        <input type="password" name="new_password" id="new_password" placeholder="Type New password" class="span8" style="width:50%">
												<span class="help-inline" id="msgnew_password" style="color:#F00"></span>
					</div>
					<div>
						<label>Confirm New Password
							
						</label>
                        <input type="password" name="new_confirmpassword" id="new_confirmpassword" placeholder="Type New confirm password" class="span8" style="width:50%">
												<span class="help-inline" id="msgnew_confirmpassword" style="color:#F00;position:absolute"></span>
					</div>
                     </td>
                    
					
                   
				
                <tr>
                <tr><td colspan="1"><div>
						<input type="submit" value="Change Password" id="changepass" name="changepass">
					</div>
					</td></tr>
                    </form>
                </table>
				<!-- /Form -->
			 </div>
							
						</div>

						

					<br />
						
					
				</div>
    
    
    <!--/.wrapper-->
<div class="footer">
	 <div class="container">
		 <div class="store">
			 <ul>
				 <li class="active">OUR STORE LOCATOR::</li>
				 <li><a href="#">Noida</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Belgium</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">China</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Germany</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Japan</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Armenia</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">South Africa</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Malaysia</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Indonesia</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Mumbai</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Portugal</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Spain</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Northern Ireland</a></li>	
				 <li><a href="#">|</a></li>				 
				 <li><a href="#">Mohali</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Gurgaon</a></li>
				 <li><a href="#">|</a></li>
				 <li><a href="#">Panchkula</a></li>
				 <li><a href="#">|</a></li>				 
				 <li><a href="#">Ambala</a></li>	
			 </ul>
		 </div>		 
		 <div class="copywrite" align="center">
			 <p>Copyright © 2015 Furnyish Store. All rights reserved | Design by <a href="http://rakshinfotech.com">Raksh</a></p>
		 </div>			 
		 </div>
	 </div>
<!---->
</div>
<!---->
</body>
</html>


</body>
</html>
