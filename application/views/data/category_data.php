<?php


?>
<div style="box-shadow:#CC9900 -1px 1px 4px; background-color:#CCCCCC" align="center">
<h2 align="center">.............You are a Admin...........</h2>

<form action="<?php echo site_url('product/add_category')?>" enctype="multipart/form-data" method="post"> 
  <table  border="1" class="tab">
    <tr>
      <th align="left">Category Name </th>
      <td><input name="category_name" type="text" id="category_name " /></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td colspan="2"><div align="center">
        <input name="add_category" type="submit" id="add_category" value="ADD CATEGORY" />
      </div></td>
      <td>&nbsp;</td>
    </tr>
  </table>
</form>
</div>