<?php
mysql_connect("localhost","root","");
mysql_select_db("paras_db");

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>RM Realtor - Admin Facility</title>
<link rel="stylesheet" href="css/css.css" type="text/css" />


<script src="jquery-1.10.2.js" type="text/javascript"></script>
	<script>
			$(document).ready(function(){
				//alert("hello);
				$("#state").hide();
				$("#city").hide();
				$("#area_name").hide();
						$("#pincode").hide();
				
				$("#ddlcountry").change(function(){
					var id = $(this).val();
					//alert(id);
					if(id == "--select--")
					{	//alert();
						$("#state").hide();
						$("#city").hide();
						$("#area_name").hide();
						$("#pincode").hide();
					}
					else
					{
						//alert(id);
						$.ajax({
							url:"selectdata.php",
							type:"post",
							data:{s_id:id},
							success:function(result){
								//alert(result);
								$("#ddlstate").html(result);
								$("#state").show();
							}
						});
					}
				
				});
				$("#ddlstate").change(function(){
					var id = $(this).val();
					//alert(id);
					if(id == "--select--")
					{	//alert();
						$("#city").hide();
						$("#area_name").hide();
						$("#pincode").hide();
					}
					else
					{
						
						$("#area").show();
						//alert(id);
						$.ajax({
							url:"selectdata.php",
							type:"post",
							data:{c_id:id},
							success:function(result){
								//alert(result);
								$("#ddlcity").html(result);
								$("#city").show();
							}
						});
						
					}
				
				});
				$("#ddlcity").change(function(){
					var id = $(this).val();
					//alert(id);
					if(id == "--select--")
					{	//alert();
						$("#area_name").hide();
						$("#pincode").hide();
					}
					else
					{
						$.ajax({
							url:"selectdata.php",
							type:"post",
							data:{a_id:id},
							success:function(result){
								$("#ddlarea").html(result);
								$("#area_name").show();
								$("#pincode").show();
							}
						
					
					});
				   }
				});
					
			
			});	
	</script>




 

</head>
<body>
        <form class="cmxform" id="frmarea" name="frmarea" method="post" enctype="multipart/form-data" >
  
           <table width="100%" border="0" cellpadding="5" cellspacing="0" class="border">
            
			            <tr>

                        <td  width="375"  align="right" class="normal_fonts9">Select Country</td>
                        <td width="10" align="center" class="normal_fonts9">:</td>
                        <td class="normal_fonts9">
                        	<select name="ddlcountry" id="ddlcountry" style="width:230px">
								<option value="">Select Country</option>
								<?php		 
		  							$qry="select * from country_master";
		  							$res=mysql_query($qry);
		 							 while($arr=mysql_fetch_array($res))
		  							{
		      							echo "<option value=".$arr['country_id'].">".$arr['country_name']."</option>";
		  							}
								?>
						</select>
                      	</td>
                      </tr>
			
			
			            <tr id="state">

                        <td  width="375"  align="right" class="normal_fonts9">Select State</td>
                        <td width="10" align="center" class="normal_fonts9">:</td>
                        <td class="normal_fonts9">
                        	<select name="ddlstate" id="ddlstate" style="width:230px">
								<option value="">Select State</option>
								
						</select>
                      	</td>
                      </tr>
			<tr id="city">

                        <td  width="375"  align="right" class="normal_fonts9">Select City</td>
                        <td width="10" align="center" class="normal_fonts9">:</td>
                        <td class="normal_fonts9">
                        	<select name="ddlcity" id="ddlcity" style="width:230px">
								<option value="">Select City</option>
								
              				</select>
                      	</td>
                      </tr>
                          

</body>
</html>