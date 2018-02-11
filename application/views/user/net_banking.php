<!--A Design by W3layouts
Author: W3layout
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
<?php
if($this->session->userdata("user_login_id")!="")
{
}
else
{
	redirect("home/login");
}
?>
<?php include_once("header.php") ?>
<link href="<?php echo base_url()?>data/css/logo.css" rel='stylesheet' type='text/css' />
<title>Agromall :: Payment</title>


<div class="cart_main" style="margin-top:30px;" >
	 <div class="container">
<div class="form-group" id="" >
                                                
                                                <?php   $_SESSION["payment"]="netbanking"; ?>
                          							<header class="panel-heading tab-bg-dark-navy-blue">
                              						<ul class="nav nav-tabs" >
                                  						
                                                        <li >
                                                              <a data-toggle="tab" href="<?php echo base_url("home/credit")?>">
                                                               <i class="fa fa-home"></i>
                                                                  Credit Card
                                                                  
                                                              </a>
                                                        </li>
                                                        
                                                      <li >
                                                              <a data-toggle="tab" href="<?php echo base_url("home/debit")?>">
                                                                  
                                                                  Debit Card
                                                        </a>
                                                        </li>
                                                        <li class="active">
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
                                                                   Net Banking
                                                                    <div class="registration_form">
			 <!-- Form -->
             <table border="0" style="width:1150px">
             <tr>
            
				<form id="registration_form" action="<?php echo base_url("user/product/book_order")?>" method="post">
                 <td style="width:650px">
					<br>
                                                                    <div class="box sel" style="float:left">
                                                                        <div class="radioBox"><input type="radio" name="netbanking" value="7.0"><label><a></a></label> </div>
                                                                        <img src="<?php echo base_url("data/images")?>/icici.png" alt="ICICI">
                                                                        
                                                                    </div>
                                                                
                                                                    <div class="box" style="float:left;margin-left:15px;margin-right:15px">
                                                                        <div class="radioBox"><input type="radio" name="netbanking" value="8.0"> <label><a></a></label></div>
                                                                        <img src="<?php echo base_url("data/images")?>/axis.png" alt="AXIS">
                                                                       
                                                                    </div>
                                                                
                                                                
                                                                    <div class="box" style="margin-left:50px">
                                                                        <div class="radioBox"><input type="radio" name="netbanking" value="9.0"> <label><a></a></label></div>
                                                                        <img src="<?php echo base_url("data/images")?>/citibank.png" alt="CITIBANK">
                                                                        
                                                                    </div>
                                                                <br>
                                                                <br>
                                                                <br>
                                                                <br>
                                                                
                                                                    <div class="box" style="float:left;margin-top:-50px">
                                                                        <div class="radioBox"><input type="radio" name="netbanking" value="58.0"> <label><a></a></label></div>
                                                                        <img src="<?php echo base_url("data/images")?>/sbi.png" alt="SBI">
                                                                       
                                                                    </div>
                                                                
                                                                    <div class="box" style="float:left;margin-top:-50px;margin-left:15px">
                                                                        <div class="radioBox"><input type="radio" name="netbanking" value="10.0"> <label><a></a></label></div>
                                                                        <img src="<?php echo base_url("data/images")?>/kotak.png" alt="KOTAK">
                                                                        
                                                                    </div>
                                                                
                                                                    <div class="box" style="float:left;margin-top:-50px;margin-left:15px">
                                                                        <div class="radioBox"><input type="radio" name="netbanking" value="6.0"> <label><a></a></label></div>
                                                                        <img src="<?php echo base_url("data/images")?>/hdfc.png" alt="HDFC">
                                                                       
                                                                    </div>
                                                                
                                                        
                                                    </div>
                                                    <div class="clr"></div>
                                                    <div class="textBox noIconLeft dropDown">
                                                      <select placeholder="otherbank" data-readonly="" name="month"  style="width:400px;float:left">
                                                        <option>OTHER BANK</option>
                                                            <option><a>Federal Bank</a></option>
                                                            <option><a>Shamrao Vitthal Co-operative Bank</a> </option>
                                                            <option><a>Bank of Maharashtra</a> </option>
                                                            <option><a>IDBI Bank</a> </option>
                                                            <option><a>Indian Bank</a> </option>
                                                            <option><a>South Indian Bank</a> </option>
                                                            <option><a>IndusInd Bank</a> </option>
                                                            <option><a>City Union Bank</a> </option>
                                                            <option><a>Central Bank of India</a> </option>
                                                            <option><a>YES BANK</a> </option>
                                                            <option><a>Bank of India</a> </option>
                                                            <option><a>State Bank of Hyderabad</a> </option>
                                                            </select>
                                                       
                                                       
                                                       
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