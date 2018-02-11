<?php


?>
<div style="box-shadow:#CC9900 -1px 1px 4px; background-color:#CCCCCC" align="center">
<h2 align="center">.............You are a Admin...........</h2>


<form action="<?php echo site_url('product/add_subcategory')?>" enctype="multipart/form-data" method="post"> 
  <table  border="1" class="tab">
   <tr>
      <th align="left">Category</th>
      <td><select name="category" id="category">
	  <?php
	  foreach($data as $result)
	  {
	  echo "<option value='$result->tool_type_id'>$result->tool_type_name</option>";
	  }
	  ?>
      </select>
      </td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <th align="left">Sub Category Name </th>
      <td><input name="subcategory_name" type="text" id="subcategory_name " /></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td colspan="2"><div align="center">
        <input name="add_subcategory" type="submit" id="add_subcategory" value="ADD SUBCATEGORY" />
      </div></td>
      <td>&nbsp;</td>
    </tr>
  </table>
</form>
</div>