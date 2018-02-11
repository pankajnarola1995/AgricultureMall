</div>
		</div><!--/.container-->
	</div><!--/.wrapper-->

<div class="footer" style="float: left;">
		<div class="container" >
			 

			<b class="copyright">&copy; 2016 Admin - Agro Mall.com </b> All rights reserved.
		</div>
	</div>
    <script src="<?php echo base_url()?>data/admindata/scripts/jquery-1.9.1.min.js" type="text/javascript"></script>
	<script src="<?php echo base_url()?>data/admindata/scripts/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>
	<script src="<?php echo base_url()?>data/admindata/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
  
<script src="<?php echo base_url()?>data/admindata/scripts/datatables/jquery.dataTables.js"></script>
	<script>
		$(document).ready(function() {
			$('.datatable-1').dataTable();
			$('.dataTables_paginate').addClass("btn-group datatable-pagination");
			$('.dataTables_paginate > a').wrapInner('<span />');
			$('.dataTables_paginate > a:first-child').append('<i class="icon-chevron-left shaded"></i>');
			$('.dataTables_paginate > a:last-child').append('<i class="icon-chevron-right shaded"></i>');
		} );
	</script>
	
	
     <script type="text/javascript" src="<?php echo base_url()?>data/admindata/wp-content/themes/piha/js/top-bar.js" ></script>
		<script type="text/javascript" src="<?php echo base_url()?>data/admindata/wp-content/themes/piha/js/bsa-ads.js" ></script>
	   <!--Dynamically creates analytics markup-->
  </body>