<!--A Design by W3layouts
Author: W3layout
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
<?php include_once("header.php") ?>

<title>Agromall :: Payment</title>

<div class="cart_main" style="margin-top:30px;" >
	 <div class="container">
<div class="form-group" id="" >
                                                
                                               
                          							<header class="panel-heading tab-bg-dark-navy-blue">
                              						<ul class="nav nav-tabs" >
                                  						<li class="active">
                                                              <a data-toggle="tab" href="<?php echo base_url("home/payment")?>">
                                                                  <i class="fa fa-home"></i>
                                                                  Cash Payment
                                                              </a>
                                 						</li>
                                                        <li >
                                                              <a data-toggle="tab" href="<?php echo base_url("home/credit")?>">
                                                                  Credit Card
                                                                  
                                                              </a>
                                                        </li>
                                                        
                                                      <li>
                                                              <a data-toggle="tab" href="<?php echo base_url("home/debit")?>">
                                                                  
                                                                  Debit Card
                                                        </a>
                                                        </li>
                                                        <li>
                                                              <a data-toggle="tab" href="<?php echo base_url("home/net_banking")?>">
                                                                 Net Banking 
                                                                 
                                                          </a>
                                                        </li>
                                                       

                                                        <!--<li>                                                              <a data-toggle="tab" href="#masterplan">
                                                                  
                                                                  Master Plan
                                                              </a>
                                                        </li>
                                                        <li>                                                              <a data-toggle="tab" href="#other">
                                                                  
                                                                  Other
                                                              </a>
                                                        </li>-->
                                                        
                              						</ul>
                          							</header>
                                                      <div class="panel-body">
                                                          <div class="tab-content">
                                                              <div id="ExteriorView" >
                                                                   Credit Card
                                                                    <div class="registration_form">
			 <!-- Form -->
             <table border="0" style="width:1150px">
             <tr>
            
				<form id="registration_form" action="<?php echo base_url("user/product/book_order")?>" method="post">
                 <td style="width:650px">
					<div>
						<label>
							<input type="text" name="card_number" placeholder="Card Number" style="width:50%"> 
						</label>
					</div>
					<div>
						<label>
							<input type="text" name="expiry_date" placeholder="MM/YY" style="width:23%">
						</label>
					</div>
					<div>
						<label>
							<input type="text"  placeholder="CVV" style="width:10%">
						</label>
					</div>
					<div>
						<label>
							<input name="name_on_card" type="text" placeholder="Name On Card" style="width:50%"><input name="payment_type" type="hidden" value="Credit Card">
						</label>
					</div>									
					<div>
						<label>
							<input name="total" class="simpleCart_total" type="hidden" value="0.00">
						</label>
					</div>						
					</td>
                     <td style="padding-left:40px;width:650px">
			 <div >
                                                <table  border="0">
                                                <tr><td  colspan="4" style="text-align:right;font-size:20px" ><b>AMOUNT PAYABLE :</b></td>
                               
                               </tr>
                    <tr><td colspan="4" style="text-align:right;font-size:20px" ><br><span class="simpleCart_total"><span class="fa fa-rupee">0.00</span></span> </span>
                              </td> </tr>                           
                                                </table>
                                                </div> 					
					
                     </td>
                <tr><td colspan="1"><div>
						<input type="submit" value="Payment & Place Order" id="" name="">
					</div>
                        
					</td></tr>
                    </form>
                </table>
				<!-- /Form -->
			 </div>
		 </div>
		
	 </div>
</div>
                                                                  
         </div>
         
                                                              
                                                      </div>
                                                </div>        
                                                       
                                                
                                    
                                            
	</div>  