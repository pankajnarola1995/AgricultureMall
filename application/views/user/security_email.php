<?php include_once("header.php") ?>  
				<script type="text/javascript" src="<?php echo base_url()?>data/validation/validate.js"></script>
<script>
		
	$("document").ready(function(){
		
				$("#verify_email").click(function(){
					//alert();
			var email_id;
			//var fname1=getElementById("#fname").value;
			//alert(fname1);
			email_id = test_email("#email_id","#msgmail");
			
			//alert(email_id+","+password+","+first_name+","+last_name+","+address+","+country_id+","+state_id+","+city+","+date+","+gender+","+mobile_number);
			if(email_id == true 
				 )
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
    <div class="span9" style="margin-left:350px;">
    
					<div class="content" >

						<div class="module">
							<div class="module-head">
								<h3>Email Verification</h3>
							</div>
                             <div class="registration_form">
			 <!-- Form -->
             <table border="0" style="width:1150px">
             <tr>
            
				<form id="registration_form" action="<?php echo base_url('home/security_question');?>" method="post">
                 <td style="width:350px">
					<div>
						<label>
							<input placeholder="Enter Email Id" type="text" tabindex="1" name="email_id" id="email_id" required autofocus style="width:400px">
						</label>
					</div>
										
					
                     </td>
					
                   
				
                <tr>
                <tr><td colspan="1"><div>
						<input type="submit" value="Verify Email" id="verify_email" name="verify_email">
					</div>
					</td></tr>
                    </form>
                </table>
				<!-- /Form -->
			 </div>
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
	