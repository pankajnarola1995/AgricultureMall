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

<title>Agromall :: Payment</title>
<link href="<?php echo base_url()?>data/css/logo.css" rel='stylesheet' type='text/css' />
<div class="cart_main" style="margin-top:30px;" >
	 <div class="container">
<div class="form-group" id="" >
                                                
                                               <?php   $_SESSION["payment"]="credit"; ?>
                          							<header class="panel-heading tab-bg-dark-navy-blue">
                              						<ul class="nav nav-tabs" >
                                  						
                                                        <li class="active">
                                                              <a data-toggle="tab" href="<?php echo base_url("home/credit")?>">
                                                               <i class="fa fa-home"></i>
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
					<div class="textBox noIconLeft cardDropDown"><input type="text" name="card_number" maxlength="19" placeholder="XXXX-XXXX-XXXX-XXXX" ><img src="<?php echo base_url("data/images")?>/card.png" style="float:right;margin-top:-34px;margin-right:-60px">
                                                       
                                                    </div>
                                                    <br>
					
                                                    <div class="textBox noIconLeft cardDropDown">
                                                    
                                                
                                                        <select placeholder="Month" data-readonly="" name="month"  style="width:100px;float:left">
                                                        <option>MONTH</option>
                                                            <option><a>01</a> </option>
                                                            <option><a>02</a> </option>
                                                            <option><a>03</a> </option>
                                                            <option><a>04</a> </option>
                                                            <option><a>05</a> </option>
                                                            <option><a>06</a> </option>
                                                            <option><a>07</a> </option>
                                                            <option><a>08</a> </option>
                                                            <option><a>09</a> </option>
                                                            <option><a>10</a> </option>
                                                            <option><a>11</a> </option>
                                                            <option><a>12</a> </option>
                                                            </select>
                                                                            <select placeholder="year" data-readonly="" name="year"  style="width:100px;float:left;margin-left:20px">
                                                        <option>YEAR</option>
                                                            <option><a>2016</a> </option>
                                                            <option><a>2017</a> </option>
                                                            <option><a>2018</a> </option>
                                                            <option><a>2019</a> </option>
                                                            <option><a>2020</a> </option>
                                                            <option><a>2021</a> </option>
                                                            <option><a>2022</a> </option>
                                                            <option><a>2023</a> </option>
                                                            <option><a>2024</a> </option>
                                                            <option><a>2025</a> </option>
                                                            <option><a>2026</a> </option>
                                                            <option><a>2028</a> </option>
                                                            <option><a>2029</a> </option>
                                                            <option><a>2030</a> </option>
                                                            <option><a>2031</a> </option>
                                                            <option><a>2032</a> </option>
                                                            <option><a>2033</a> </option>
                                                            <option><a>2034</a> </option>
                                                            <option><a>2035</a> </option>
                                                            <option><a>2036</a> </option>
                                                            <option><a>2037</a> </option>
                                                            <option><a>2038</a> </option>
                                                            <option><a>2039</a> </option>
                                                            <option><a>2040</a> </option>
                                                            
                                                            </select>
                                                      </div>
                                                      <br>
					 <div class="textBox noIconLeft leftSide"><input type="password" maxlength="3" name="cvv" placeholder="CVV"><img src="<?php echo base_url("data/images")?>/cvv.png" style="float:right;margin-top:-33px;margin-right:-60px"></div>
                     <br>
					 <div class="textBox noIconLeft upperCase"><input type="text" name="name_on_card" placeholder="ENTER NAME ON THE CARD"><img src="<?php echo base_url("data/images")?>/cardname.png" style="float:right;margin-top:-35px;margin-right:-60px"></i></div>								
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