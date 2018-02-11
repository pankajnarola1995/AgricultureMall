
	<?php include_once("header.php") ?> 
    <script type="text/javascript" src="<?php echo base_url()?>data/validation/validate.js"></script>
<script>
		
	$("document").ready(function(){
		$("#register").click(function(){
			var new_password;
			//var fname1=getElementById("#fname").value;
			//alert(fname1);
			
			new_password = test_match("#new_password","#new_confirmpassword","#msgnew_password","#msgnew_confirmpassword");
			
			if( new_password == true )
			{
				return true;
				
			}
			else
			{
				return false;
			}
			
		});
		 $('#regimsg').fadeIn().delay(2500).fadeOut();
	
	});
</script> 			
    <div class="span9" style="margin-left:350px;">
    
					<div class="content" >

						<div class="module">
							<div class="module-head">
								<h3>Confirm Password</h3>
							</div>
                              <div class="registration_form">
                             <table border="0" style="width:1150px">
             <tr>
            
				<form id="registration_form" action="<?php echo base_url('home/set_newpassword');?>" method="post">
                 <td style="width:350px">
					<div>
						<label>
							<input placeholder="Enter password" type="password" tabindex="1" name="new_password" id="new_password" required autofocus style="width:400px">
						</label>
                        
					</div>
                    <div>
						<label>
							<input placeholder="Enter Confirm password" type="password" tabindex="1" name="new_confirmpassword" id="new_confirmpassword" required autofocus style="width:400px">
						</label>
                        
					</div>
										
					
                     </td>
					
                   
				
                <tr>
                <tr><td colspan="1">
                                        <input type="submit" value="Set New Password" id="register" name="register">
                                          
                                            
					
					</td></tr>
                    </form>
                </table>
                </div>
							
						</div>

						

					
						
					</div><!--/.content-->
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