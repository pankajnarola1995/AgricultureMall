<?php

mysql_connect("localhost","root","");
mysql_select_db("paras_db");

if(isset($_POST['s_id']))
{	
	//echo "area selected";
	echo "<select id='ddlstate' name='ddlstate'>";
	echo "<option value=''>---select---</option>";
	$query="select * from state_master where country_id=".$_POST['s_id'];
	$rs=mysql_query($query);
	
	while($data=mysql_fetch_array($rs))
	{
		echo "<option value='".$data['state_id']."'>".$data['state_name']."</option>";
	}
	echo "</select>";
	
}


if(isset($_POST['c_id']))
{	
	//echo "area selected";
	echo "<select id='drpcity' name='drpcity'>";
	echo "<option value=''>---select---</option>";
	$query="select * from city_master where state_id=".$_POST['c_id'];
	$rs=mysql_query($query);
	
	while($data=mysql_fetch_array($rs))
	{
		echo "<option value='".$data['city_id']."'>".$data['city_name']."</option>";
	}
	echo "</select>";
	
}


if(isset($_POST['a_id']))
{	
	//echo "area selected";
	echo "<select id='ddlarea' name='ddlarea'>";
	echo "<option value=''>---select---</option>";
	$query="select * from area_master where city_id=".$_POST['a_id'];
	$rs=mysql_query($query);
	
	while($data=mysql_fetch_array($rs))
	{
		echo "<option value='".$data['area_id']."'>".$data['area_name']."</option>";
	}
	echo "</select>";
	
}


if(isset($_POST['ap_id']))
{	
	//echo "area selected";
	//echo "<select id='ddlarea' name='ddlarea'>";
	//echo "<option value=''>--select--</option>";
	$query="select * from area_master where area_id=".$_POST['ap_id'];
	$rs=mysql_query($query);
	
while($data=mysql_fetch_array($rs))
	{?>
		<input type="text" name="areacode" id="areacode" class="text" readonly="readonly" value="<?php echo $data['area_code']; ?>" />
		<?php } 
	
}

if(isset($_POST['cc_id']))
{	
	
	echo "<select id='ddlcountry' name='ddlcountry'>";
	//echo "<option value=''></option>";
	$query="select * from country_master where country_id=".$_POST['cc_id'];
	$rs=mysql_query($query);
	
	while($data=mysql_fetch_array($rs))
	{
		echo "<option value='".$data['country_id']."'>".$data['country_code']."</option>";
	}
	echo "</select>";
			

}

?>