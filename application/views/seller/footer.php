</div>
		</div><!--/.container-->
	</div><!--/.wrapper-->
<br>
<div class="footer" align="center" style="margin-left:220px">
		<div class="container">

			<b class="copyright">&copy; 2016 Seller - www.agromall.com </b> All rights reserved.
		</div>
	</div>
    <script src="<?php echo base_url()?>data/sellerdata/scripts/jquery-1.9.1.min.js" type="text/javascript"></script>
	<script src="<?php echo base_url()?>data/sellerdata/scripts/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>
	<script src="<?php echo base_url()?>data/sellerdata/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
  
<script src="<?php echo base_url()?>data/sellerdata/scripts/datatables/jquery.dataTables.js"></script>
	<script>
		$(document).ready(function() {
			$('.datatable-1').dataTable();
			$('.dataTables_paginate').addClass("btn-group datatable-pagination");
			$('.dataTables_paginate > a').wrapInner('<span />');
			$('.dataTables_paginate > a:first-child').append('<i class="icon-chevron-left shaded"></i>');
			$('.dataTables_paginate > a:last-child').append('<i class="icon-chevron-right shaded"></i>');
		} );
	</script>
	
	
     <script type="text/javascript" src="<?php echo base_url()?>data/sellerdata/wp-content/themes/piha/js/top-bar.js" ></script>
		<script type="text/javascript" src="<?php echo base_url()?>data/sellerdata/wp-content/themes/piha/js/bsa-ads.js" ></script>
	   <!--Dynamically creates analytics markup-->
  </body>