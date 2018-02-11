<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Product extends CI_Controller {

	  public function __construct()
       {
              // Call the CI_Model constructor
              parent::__construct();
			$this->load->model("user/home_model");        	
			$this->load->model("user/product_model");
			
		}
	public function loaddata()
	{
		$select_data_manu['seed_type_data']=$this->home_model->select_seedtype_data();
		$select_data_manu['seed_subtype_data']=$this->home_model->select_seedsubtype_data();
		$select_data_manu['seed_submenu_data']=$this->home_model->select_seedsubmanu_data();
		$select_data_manu['fertilizer_type_data']=$this->home_model->select_fertilizertype_data();
		$select_data_manu['fertilizer_subtype_data']=$this->home_model->select_fertilizersubtype_data();
		$select_data_manu['fertilizer_submenu_data']=$this->home_model->select_fertilizersubmanu_data();
		$select_data_manu['tools_type_data']=$this->home_model->select_tooltype_data();
		$select_data_manu['tools_subtype_data']=$this->home_model->select_toolsubtype_data();
		$select_data_manu['pesticide_type_data']=$this->home_model->select_pesticidetype_data();
		$select_data_manu['pesticide_subtype_data']=$this->home_model->select_pesticidesubtype_data();
		$select_data_manu['partsid']=$this->home_model->selectparts();
		$status=array("status"=>0);
		$select_data_manu["country_data"]=$this->home_model->select_country($status);
		$select_data_manu["origin_country"]=$this->home_model->select_country($status);
		return $select_data_manu;
	}
	public function index()
	{
	
	$select_data['seed_data']=$this->product_model->select_seed();
		//echo "<pre>";print_r($select_data);die();
		$select_data_manu= $this->loaddata();
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/seed_product',$select_data);
	}

//.............SEED...........
	
	public function select_seed()
	{
	
	$select_data['seed_data']=$this->product_model->select_seed();
		//echo "<pre>";print_r($select_data);die();
		$select_data_manu= $this->loaddata();
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/seed_product',$select_data);
	}

	public function view_seed_type_detail($id)
	{
	
		$select_data['seed_data']=$this->product_model->view_seed_type_detail($id);
		//echo "<pre>";print_r($select_data);die();
		$select_data_manu= $this->loaddata();
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/seed_product',$select_data);
	}
	public function select_product_data()
	{
	
	$id=$_GET["product"];
	//echo $id;
	//die();
		$select_data['seed_data']=$this->product_model->view_seed_detail($id);
		$select_data['fertilizer_data']=$this->product_model->view_fertilizer_detail($id);
		$select_data['tools_data']=$this->product_model->view_tools_detail($id);
		$select_data['tools_detail']=$this->product_model->select_tools_detail_type();
		$select_data['pesticide_data']=$this->product_model->view_pesticide_detail($id);
		
		//echo "<pre>";print_r($select_data);die();
		$select_data_manu= $this->loaddata();
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/seed_product',$select_data);
	}
	public function view_seed_subtype_detail($id)
	{
	
		$select_data['seed_data']=$this->product_model->view_seed_subtype_detail($id);
		//echo "<pre>";print_r($select_data);die();
		$select_data_manu= $this->loaddata();
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/seed_product',$select_data);
	}
	public function view_seed_submenu_detail($id)
	{
	
		$select_data['seed_data']=$this->product_model->view_seed_submenu_detail($id);
		//echo "<pre>";print_r($select_data);die();
		$select_data_manu= $this->loaddata();
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/seed_product',$select_data);
	}
	
	
	public function more_seed_product_view($id)
	{ 	//echo $id;die();
		$select_data['seed_data']=$this->product_model->more_seed_product_view($id);
		$select_data['cultivation_type']=$this->product_model->view_cultivation_detail();
		//$select_data['seed_detail_type']=$this->product_model->view_seed_type_detail($id);
		
		$select_data['image']=$this->product_model->view_seed_image_detail($id);
		$select_data_manu= $this->loaddata();
		//echo "<pre>";print_r($select_data['image']);die();
		
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/seed_product_more_view',$select_data);
	}
	




//..........FERTILIZER.............	
	
	
	
	public function select_fertilizer()
	{
	
	$select_data['fertilizer_data']=$this->product_model->select_fertilizer();
		//echo "<pre>";print_r($select_data);die();
		$select_data_manu= $this->loaddata();
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/seed_product',$select_data);
	}

	public function view_fertilizer_type_detail($id)
	{
	
		$select_data['fertilizer_data']=$this->product_model->view_fertilizer_type_detail($id);
		//echo "<pre>";print_r($select_data);die();
		$select_data_manu= $this->loaddata();
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/seed_product',$select_data);
	}
	public function view_fertilizer_subtype_detail($id)
	{
	
		$select_data['fertilizer_data']=$this->product_model->view_fertilizer_subtype_detail($id);
		//echo "<pre>";print_r($select_data);die();
		$select_data_manu= $this->loaddata();
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/seed_product',$select_data);
	}
	public function view_fertilizer_submenu_detail($id)
	{
	
		$select_data['fertilizer_data']=$this->product_model->view_fertilizer_submenu_detail($id);
		//echo "<pre>";print_r($select_data);die();
		$select_data_manu= $this->loaddata();
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/seed_product',$select_data);
	}
	
	
	public function more_fertilizer_product_view($id)
	{ 	//echo $id;die();
		$select_data['fertilizer_data']=$this->product_model->more_fertilizer_product_view($id);
		$select_data['classification']=$this->product_model->view_classification_detail();
		//$select_data['fertilizer_detail_type']=$this->product_model->view_fertilizer_type_detail($id);
		$select_data['appearance']=$this->product_model->view_appearance_detail();
		
		$select_data['image']=$this->product_model->view_fertilizer_image_detail($id);
		$select_data_manu= $this->loaddata();
		//echo "<pre>";print_r($select_data['image']);die();
		
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/seed_product_more_view',$select_data);
	}
		

//..........tools.............	
	
	
	
	public function select_tools()
	{
	
	$select_data['tools_data']=$this->product_model->select_tools();
		$select_data_manu= $this->loaddata();
		$select_data['tools_detail']=$this->product_model->select_tools_detail_type();
		
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/seed_product',$select_data);
	}

	public function view_tools_type_detail($id)
	{
	
		$select_data['tools_data']=$this->product_model->view_tools_type_detail($id);
		//echo "<pre>";print_r($select_data);die();
		$select_data_manu= $this->loaddata();
		$select_data['tools_detail']=$this->product_model->select_tools_detail_type();
		
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/seed_product',$select_data);
	}
	public function view_tools_subtype_detail($id)
	{
	
		$select_data['tools_data']=$this->product_model->view_tools_subtype_detail($id);
		//echo "<pre>";print_r($select_data);die();
		$select_data['tools_detail']=$this->product_model->select_tools_detail_type();
		
		$select_data_manu= $this->loaddata();
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/seed_product',$select_data);
	}
		
	public function more_tools_product_view($id)
	{ 	//echo $id;die();
		$select_data['tools_data']=$this->product_model->more_tools_product_view($id);
		/*$select_data['classification']=$this->product_model->view_classification_detail2();
		//$select_data['tools_detail_type']=$this->product_model->view_tools_type_detail($id);
		$select_data['appearance']=$this->product_model->view_appearance_detail2();
		*/$select_data['tools_detail']=$this->product_model->select_tools_detail_type();
		//$select_data['origin_country']=$this->product_model->select_origin_country();
		$select_data['color']=$this->product_model->select_color();
		$select_data['fuel']=$this->product_model->select_fuel();
		$select_data['drive']=$this->product_model->select_drive();
		$select_data['engine']=$this->product_model->select_engine();
		
		$select_data['image']=$this->product_model->view_tools_image_detail($id);
		$select_data_manu= $this->loaddata();
		//echo "<pre>";print_r($select_data['color']);die();
		
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/seed_product_more_view',$select_data);
	}




//..........pesticide.............	
	
	
	
	public function select_pesticide()
	{
	
	$select_data['pesticide_data']=$this->product_model->select_pesticide();
		//echo "<pre>";print_r($select_data);die();
		$select_data_manu= $this->loaddata();
		$select_data['classification']=$this->product_model->view_classification_detail3();
		$select_data['appearance']=$this->product_model->view_appearance_detail3();
		
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/seed_product',$select_data);
	}

	public function view_pesticide_type_detail($id)
	{
	
		$select_data['pesticide_data']=$this->product_model->view_pesticide_type_detail($id);
		//echo "<pre>";print_r($select_data);die();
		$select_data_manu= $this->loaddata();
		$select_data['classification']=$this->product_model->view_classification_detail3();
		$select_data['appearance']=$this->product_model->view_appearance_detail3();
		
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/seed_product',$select_data);
	}
	public function view_pesticide_subtype_detail($id)
	{
	
		$select_data['pesticide_data']=$this->product_model->view_pesticide_subtype_detail($id);
		//echo "<pre>";print_r($select_data);die();
		$select_data_manu= $this->loaddata();
		$select_data['classification']=$this->product_model->view_classification_detail3();
		$select_data['appearance']=$this->product_model->view_appearance_detail3();
		
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/seed_product',$select_data);
	}
		
	public function more_pesticide_product_view($id)
	{ 	//echo $id;die();
		$select_data['pesticide_data']=$this->product_model->more_pesticide_product_view($id);
		$select_data['classification']=$this->product_model->view_classification_detail3();
		$select_data['appearance']=$this->product_model->view_appearance_detail3();
		
		$select_data['image']=$this->product_model->view_pesticide_image_detail($id);
		$select_data_manu= $this->loaddata();
		//echo "<pre>";print_r($select_data['image']);die();
		
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/seed_product_more_view',$select_data);
	}
	
	
	
	public function add_product_cart($id)
	{ 	
	
	$select_data=$this->product_model->seed_view($id);
	$select_data2=$this->product_model->fertilizer_view($id);
	$select_data3=$this->product_model->tools_view($id);
	$select_data4=$this->product_model->pesticide_view($id);
	
	
	
	echo "<pre>";
	//session_destroy();
	//print_r($_SESSION['cart']);
	//print_r($select_data)."<br>";
	//print_r($select_data2)."<br>";
	//print_r($select_data3)."<br>";
	//print_r($select_data4)."<br>";die();
		//echo $id;	
			
	//print_r($_SESSION['cart']);die;
		
	//print_r($_SESSION['cart']);die;
	if(isset($_SESSION['cart']) && is_array($_SESSION['cart']))
				{
					//echo "<pre>";print_r($_SESSION['cart']);die;
					$max=count($_SESSION['cart']);
					//echo $max;die;
					$data = 0;
					for($i = 0; $i <$max; $i++)
					{
						if($_SESSION['cart'][$i]['seed_detail_id'] == $id) /*or $_SESSION['cart'][$i]['seed_detail_id'] == $id or $_SESSION['cart'][$i]['seed_detail_id'] == $id or $_SESSION['cart'][$i]['seed_detail_id'] == $id*/
						{
							//echo "if";die;
							if(isset($select_data) and count($select_data) > 0)
							{	$_SESSION['cart'][$i]['qty'] = $_SESSION['cart'][$i]['qty'] + $select_data[0]['seed_min_order'];
							
								$_SESSION['cart'][$i]['subtotal'] = $_SESSION['cart'][$i]['subtotal'] + $select_data[0]['seed_price'];
						
							//echo $_SESSION['cart'][$i]['total_price'];die;
							}else if(isset($select_data2) and count($select_data2) > 0)
							{
									$_SESSION['cart'][$i]['qty'] = $_SESSION['cart'][$i]['qty'] + $select_data2[0]['fertilizer_min_order'];
								$_SESSION['cart'][$i]['subtotal'] = $_SESSION['cart'][$i]['subtotal'] + $select_data2[0]['fertilizer_price'];
							}else if(isset($select_data3) and count($select_data3) > 0)
							{
								$_SESSION['cart'][$i]['qty'] = $_SESSION['cart'][$i]['qty'] + 1;
								$_SESSION['cart'][$i]['subtotal'] = $_SESSION['cart'][$i]['subtotal'] + $select_data3[0]['tools_price'];
							}else if(isset($select_data4) and count($select_data4) > 0)
							{
								$_SESSION['cart'][$i]['qty'] = $_SESSION['cart'][$i]['qty'] + $select_data4[0]['pesticide_min_order'];
								$_SESSION['cart'][$i]['subtotal'] = $_SESSION['cart'][$i]['subtotal'] + $select_data4[0]['pesticide_price'];
							}
							
							
							//$total = $total  + $select_data[0]['seed_price'];
							//echo $total;die;
							//$_SESSION['cart'][$i]['total_price'] = $_SESSION['cart'][$i]['total_price'] + $select_data[0]['seed_price'];
							
							//print_r($_SESSION['cart'][$i]['total_price']);die;
							$data = 1;
						}
						
					}
					if($data == 0)
					{
							if(isset($select_data) and count($select_data) > 0)
							{
								//echo "<pre>";echo $max;print_r($select_data);die;
						$_SESSION['cart'][$max]['seed_detail_id'] = $id;
						
						$_SESSION['cart'][$max]['seed_detail_name'] = $select_data[0]['seed_detail_name'];
						
						$_SESSION['cart'][$max]['seed_price'] = $select_data[0]['seed_price'];
						
						$_SESSION['cart'][$max]['item_weight'] = $select_data[0]['item_weight'];
						
						$_SESSION['cart'][$max]['image_name'] = $select_data[0]['image_name'];
						$_SESSION['cart'][$max]['seller_id'] = $select_data[0]['seller_id'];
						
						$_SESSION['cart'][$max]['qty'] = $select_data[0]['seed_min_order'];
						
						//$_SESSION['cart'][$max]['subtotal'] = $_SESSION['cart'][$max]['subtotal'] + $select_data[0]['seed_price'] ;
						//$_SESSION['cart']['total_price'] = $_SESSION['cart']['total_price'] +$select_data[0]['seed_price'];
						//print_r($_SESSION);die;
						}
						else if(isset($select_data2) and count($select_data2) > 0)
						 {
							// print_r($select_data2);die;
							// echo $select_data2[0]['fertilizer_price'];die; 
							$_SESSION['cart'][$max]['seed_detail_id'] = $id;
						
							$_SESSION['cart'][$max]['seed_detail_name'] = $select_data2[0]['fertilizer_detail_name'];
						
							$_SESSION['cart'][$max]['seed_price'] = $select_data2[0]['fertilizer_price'];
						
							$_SESSION['cart'][$max]['item_weight'] = $select_data2[0]['model_no'];
						
							$_SESSION['cart'][$max]['image_name'] = $select_data2[0]['image_name'];
							$_SESSION['cart'][$max]['seller_id'] = $select_data2[0]['seller_id'];
						
							$_SESSION['cart'][$max]['qty'] =  $select_data2[0]['fertilizer_min_order'];
							//print_r($_SESSION['cart']);
							//echo "hi";
							//die;
							//$_SESSION['cart'][$max]['subtotal'] = $_SESSION['cart'][$max]['subtotal'] + $select_data2[0]['fertilizer_price'] ;	
						//$_SESSION['cart']['total_price'] = $_SESSION['cart']['total_price'] +$select_data2[0]['fertilizer_price'];	
						}
						else if(isset($select_data3))
						{  //print_r($select_data3);die;
							$_SESSION['cart'][$max]['seed_detail_id'] = $id;
						
							$_SESSION['cart'][$max]['seed_detail_name'] = $select_data3[0]['tools_detail_name'];
						
							$_SESSION['cart'][$max]['seed_price'] = $select_data3[0]['tools_price'];
						
							$_SESSION['cart'][$max]['item_weight'] = $select_data3[0]['tools_uses'];
						
							$_SESSION['cart'][$max]['image_name'] = $select_data3[0]['image_name'];
							$_SESSION['cart'][$max]['seller_id'] = $select_data3[0]['seller_id'];
						
							$_SESSION['cart'][$max]['qty'] = 1;
							
						}
						else if(isset($select_data4))
						{ // print_r($select_data4);die;
							$_SESSION['cart'][$max]['seed_detail_id'] = $id;
						
							$_SESSION['cart'][$max]['seed_detail_name'] = $select_data4[0]['pesticide_detail_name'];
						
							$_SESSION['cart'][$max]['seed_price'] = $select_data4[0]['pesticide_price'];
						
							$_SESSION['cart'][$max]['item_weight'] = $select_data4[0]['pesticide_weight'];
						
							$_SESSION['cart'][$max]['image_name'] = $select_data4[0]['image_name'];
							$_SESSION['cart'][$max]['seller_id'] = $select_data4[0]['seller_id'];
						
							$_SESSION['cart'][$max]['qty'] =  $select_data4[0]['pesticide_min_order'];
							
						}
                        
                        
                        
						//$_SESSION['cart'][$max]['total_price'] = $_SESSION['cart'][$max]['total_price'] + $select_data[0]['seed_price'];
						/*$_SESSION['cart'][$id][$max]['item_name'] = $product[0]['menu_name'];
						$_SESSION['cart'][$id][$max]['item_qty'] = $qty;
						$_SESSION['cart'][$id][$max]['item_price'] = $product[0]['item_price'];
						*/
					}
				}
				else
				{
					$_SESSION['cart']=array();
					
						if(isset($select_data) and count($select_data) > 0)
						{ //print_r($select_data);die;
							$_SESSION['cart'][0]['seed_detail_id'] =  $id;
							
							$_SESSION['cart'][0]['seed_detail_name'] = $select_data[0]['seed_detail_name'];
								
							$_SESSION['cart'][0]['seed_price'] = $select_data[0]['seed_price'];
							
							$_SESSION['cart'][0]['item_weight'] = $select_data[0]['item_weight'];
							
							$_SESSION['cart'][0]['image_name'] = $select_data[0]['image_name'];
							$_SESSION['cart'][0]['seller_id'] = $select_data[0]['seller_id'];
						
							$_SESSION['cart'][0]['qty'] = $select_data[0]['seed_min_order'];
							$_SESSION['cart'][0]['subtotal'] = $select_data[0]['seed_price'];
							//$_SESSION['cart']['total_price'] = $select_data[0]['seed_price'];
							//print_r($_SESSION['cart']);die;
							
						}
						else if(isset($select_data2) and count($select_data2) > 0)
						 {//echo $select_data2[0]['model_no'];;die;
						
							$_SESSION['cart'][0]['seed_detail_id'] =  $id;
							
							$_SESSION['cart'][0]['seed_detail_name'] = $select_data2[0]['fertilizer_detail_name'];
								
							$_SESSION['cart'][0]['seed_price'] = $select_data2[0]['fertilizer_price'];
							
							$_SESSION['cart'][0]['item_weight'] = $select_data2[0]['model_no'];
							
							$_SESSION['cart'][0]['image_name'] = $select_data2[0]['image_name'];
							$_SESSION['cart'][0]['seller_id'] = $select_data2[0]['seller_id'];
						
							$_SESSION['cart'][0]['qty'] = $select_data2[0]['fertilizer_min_order'];
							$_SESSION['cart'][0]['subtotal'] =$select_data2[0]['fertilizer_price'];
							///$_SESSION['cart']['total_price'] = $select_data2[0]['fertilizer_price'];
							
						}
					
					else if(isset($select_data3) and count($select_data3) > 0)
						 {//echo "f";die;
						
							$_SESSION['cart'][0]['seed_detail_id'] =  $id;
							
							$_SESSION['cart'][0]['seed_detail_name'] = $select_data3[0]['tools_detail_name'];
								
							$_SESSION['cart'][0]['seed_price'] = $select_data3[0]['tools_price'];
							
							$_SESSION['cart'][0]['item_weight'] = $select_data3[0]['tools_uses'];
							
							$_SESSION['cart'][0]['image_name'] = $select_data3[0]['image_name'];
							$_SESSION['cart'][0]['seller_id'] = $select_data3[0]['seller_id'];
						
							$_SESSION['cart'][0]['qty'] = 1;
							$_SESSION['cart'][0]['subtotal'] =  $select_data3[0]['tools_price'];
						
							
						}
						else if(isset($select_data4) and count($select_data4) > 0)
						 {//echo "f";die;
						
							$_SESSION['cart'][0]['seed_detail_id'] =  $id;
							
							$_SESSION['cart'][0]['seed_detail_name'] = $select_data4[0]['pesticide_detail_name'];
								
							$_SESSION['cart'][0]['seed_price'] = $select_data4[0]['pesticide_price'];
							
							$_SESSION['cart'][0]['item_weight'] = $select_data4[0]['pesticide_weight'];
							
							$_SESSION['cart'][0]['image_name'] = $select_data4[0]['image_name'];
							$_SESSION['cart'][0]['seller_id'] = $select_data4[0]['seller_id'];
						
							$_SESSION['cart'][0]['qty'] =$select_data4[0]['pesticide_min_order'];
							$_SESSION['cart'][0]['subtotal'] = $select_data4[0]['pesticide_price'];
							//$_SESSION['cart']['total_price'] = 
							
						}
						
						//$total = $total  + $select_data[0]['seed_price'];
						//$_SESSION['cart'][0]['total_price'] = $_SESSION['cart'][$i]['total_price'] + $select_data[0]['seed_price'];
				}	
				//$_SESSION['cart']['total_price'] = $_SESSION['cart'][$i]['total_price'] + $select_data[0]['seed_price'];
				///echo "<pre>";print_r($_SESSION['cart']);die;
						
				$data =$_POST['url'];
				
				
				///$this->session->set_flashdata("user_add","User Registration Success..........");
					redirect($data);
			
	}
	public function cart_remove($id)
	{
		$max=count($_SESSION['cart']);
		
					for($i = 0; $i <$max; $i++)
					{
						
						if(trim($_SESSION['cart'][$i]["seed_detail_id"])==trim($id))
						{
							
		unset($_SESSION["cart"][$i]);
						}
					}
					$_SESSION['cart']=array_values($_SESSION['cart']);
		redirect("user/product/cart_view");
	}
	
	public function empty_cart()
	{//echo $id;die($id);
		//$id=$this->session->userdata("user_login_id");
		//$select_data['cart_data']=$this->product_model->empty_cart($id);
		//echo "<pre>";print_r($select_data);die();
		/*$select_data_manu= $this->loaddata();
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/cart',$select_data);
		*/
		if(isset($_SESSION['cart']) && is_array($_SESSION['cart']))
				{
					
					$max=count($_SESSION['cart']);
					$data = 0;
					//echo $max;die;
					for($i = 0; $i <$max; $i++)
					{
						unset($_SESSION['cart']);
					}
				}
		
		
		//$data =$id;
				
				
				///$this->session->set_flashdata("user_add","User Registration Success..........");
					redirect($_SESSION['path']);
	}
	
	public function cart_view()
	{
	//$id=$_SESSION['cart'];
	//echo "<pre>";print_r($id);die;
	//$select_data['image']=$this->product_model->image($id);
		//echo "<pre>";print_r($select_data);die();
		$select_data_manu= $this->loaddata();
		$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/cart');
	}
	public function place_order()
	{
		//echo $this->session->userdata("user_login_id");die;
	if($this->session->userdata("user_login_id")=='')
	{
		$this->session->set_flashdata("login_error","Please Login First To Buy..........");
		redirect("home/login");
	//$select_data['cart_data']=$this->product_model->book_order($id);
		//echo "<pre>";print_r($select_data);die();
		}
		elseif($_SESSION['cart']=='')
		{
			$this->session->set_flashdata("cart_error","Please Select Product To Buy..........");
			redirect("user/product");
		}
	else
	{
		
		$select_data['user_data']=$this->product_model->select_userdata();
		$select_data_manu= $this->loaddata();
		//$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/book_order',$select_data);
	
	}
	}
	
	public function place_main_order($id)
	{
		//echo $this->session->userdata("user_login_id");die;
	if($this->session->userdata("user_login_id")=='')
	{
		$this->session->set_flashdata("login_error","Please Login First To Buy..........");
		redirect("home/login");
	//$select_data['cart_data']=$this->product_model->book_order($id);
		//echo "<pre>";print_r($select_data);die();
		}
	else
	{
		
		$select_data["seed_data"]=$this->product_model->select_product_data($id);
		$select_data["fertilizer_data"]=$this->product_model->select_product_fertilizer_data($id);
		$select_data["tools_data"]=$this->product_model->select_product_tools_data($id);
		$select_data["pesticide_data"]=$this->product_model->select_product_pesticide_data($id);
		$select_data['user_data']=$this->product_model->select_userdata();
		//$select_data_manu= $this->loaddata();
		//echo "<pre>";
		//print_r($select_data['seed_data']);
		//die();
		//$this->load->view('user/menuheader',$select_data_manu);
		$this->load->view('user/book_main_order',$select_data);
	
	}
	}
	public function payment()
	{
		//echo $this->session->userdata("user_login_id");die;
		if($this->session->userdata("user_login_id")=='')
		{
			$this->session->set_flashdata("login_error","Please Login First To Buy..........");
			redirect("home/login");
		//$select_data['cart_data']=$this->product_model->book_order($id);
			//echo "<pre>";print_r($select_data);die();
			}
		else
		{
			
			//$select_data['user_data']=$this->product_model->select_userdata();
			//$select_data_manu= $this->loaddata();
			//$this->load->view('user/menuheader',$select_data_manu);
			$this->load->view('user/credit_payment');
		
		}
	}
	
	public function book_order()
	{
		//echo $this->session->userdata("user_login_id");die;
		if($this->session->userdata("user_login_id")=='')
		{
			$this->session->set_flashdata("login_error","Please Login First To Buy..........");
			redirect("home/login");
		//$select_data['cart_data']=$this->product_model->book_order($id);
			//echo "<pre>";print_r($select_data);die();
			}
				elseif($_SESSION['cart']=='')
		{
			$this->session->set_flashdata("cart_error","Please Select Product To Buy..........");
			redirect("user/product");
		//$select_data['cart_data']=$this->product_model->book_order($id);
			//echo "<pre>";print_r($select_data);die();
			}
		else
		{
			
			
			//$order_id="";
			$order_id=random_string('alnum', 8);
			$select_data=$this->product_model->select_userdata();
					//print_r($select_data[0]['email_id']);die;
					$data2=array('order_id'=>$order_id,'user_id'=>$this->session->userdata("user_login_id"),'email_id'=>$select_data[0]['email_id'],'name'=>$select_data[0]['name'],'address'=>$_SESSION['address'],'city'=>$select_data[0]['city'],'pincode'=>'395006','mobile_number'=>$select_data[0]['mobile_number']);
			
			$result2=$this->product_model->order_data($data2);
			
			
			if(isset($_SESSION['cart']) && is_array($_SESSION['cart']))
				{
					
					$max=count($_SESSION['cart']);
					//print_r($max);die;
					$total = 0;
					for($i = 0; $i <$max; $i++)
					{
					$total=$total+$_SESSION['cart'][$i]['subtotal'];
						//echo $total;die;
					}
					
				}
				
			if(isset($_SESSION['cart']) && is_array($_SESSION['cart']))
				{
					
					$max=count($_SESSION['cart']);
					//print_r($max);die;
					$data = 0;
					for($i = 0; $i <$max; $i++)
					{
						//$order_id=random_string('alnum', 8);
						$order_book_id=random_string('alnum', 8);
			
						$data3=array('order_book_id'=>$order_book_id,'order_id'=>$order_id,'user_id'=>$this->session->userdata('user_login_id'),'product_name'=>$_SESSION['cart'][$i]['seed_detail_name'],'qty'=>$_SESSION['cart'][$i]['qty'],'price'=>$_SESSION['cart'][$i]['seed_price'],'subtotal'=>$_SESSION['cart'][$i]['subtotal'],'delivery_details'=>$_SESSION['delivery_details'],"seller_id"=>$_SESSION['cart'][$i]['seller_id'],"order_status"=>"inprogress","image_name"=>$_SESSION['cart'][$i]['image_name']);
						$result3=$this->product_model->order_book_data($data3);
			
						//print_r($oder);die;
						//$_SESSION['cart'][$i]['seed_detail_id']
						
						
					}
					
				}
				//echo $_SESSION['payment'];
				//
				//die();
				if($_SESSION['payment']=="cash")
				{
					if($result2==TRUE && $result3==TRUE)
						{
					 // $_SESSION['path_for_continue_shopping'] = uri_string(); 
			
					//$select_data['user_data']=$this->product_model->select_userdata();
					$this->session->set_flashdata("order_book","Order Book Successfully..........");
					$select_data_manu= $this->loaddata();
					$this->load->view('user/menuheader',$select_data_manu);
					redirect('user/product/success_order');
						
						}
						else
						{
							
							$this->session->set_flashdata("order_error","Something Wrong Please Retry To Buy..........");
					
						
					$select_data_manu= $this->loaddata();
					//$this->load->view('user/menuheader',$select_data_manu);
					$this->load->view('user/order_place');
					
						}
					
				}
			else if($_SESSION['payment']=="netbanking")
				{
						if($result2==TRUE && $result3==TRUE)
						{
					 // $_SESSION['path_for_continue_shopping'] = uri_string(); 
			
					//$select_data['user_data']=$this->product_model->select_userdata();
					$this->session->set_flashdata("order_book","Order Book Successfully..........");
					$select_data_manu= $this->loaddata();
					$this->load->view('user/menuheader',$select_data_manu);
					redirect('user/product/success_order');
						
						}
						else
						{
							
							$this->session->set_flashdata("order_error","Something Wrong Please Retry To Buy..........");
					
						
					$select_data_manu= $this->loaddata();
					//$this->load->view('user/menuheader',$select_data_manu);
					$this->load->view('user/order_place');
					
						}
			}
			else
			{
				$data=$_POST['month']."/".$_POST["year"];
					$payment_id=random_string('alnum', 8);
					$data=array('payment_id'=>$payment_id,'order_id'=>$order_id,'payment_type'=>$_SESSION['payment'],'card_number'=>$_POST['card_number'],'expiry_date'=>$data,'name_on_card'=>$_POST['name_on_card'],'cvv'=>$_POST["cvv"]);
					$result=$this->product_model->credit_card($data);
					if($result==TRUE && $result2==TRUE && $result3==TRUE)
						{
					 // $_SESSION['path_for_continue_shopping'] = uri_string(); 
			
					//$select_data['user_data']=$this->product_model->select_userdata();
					$this->session->set_flashdata("order_book","Order Book Successfully..........");
					$select_data_manu= $this->loaddata();
					$this->load->view('user/menuheader',$select_data_manu);
					redirect('user/product/success_order');
						
						}
						else
						{
							
							$this->session->set_flashdata("order_error","Something Wrong Please Retry To Buy..........");
					
						
					$select_data_manu= $this->loaddata();
					//$this->load->view('user/menuheader',$select_data_manu);
					$this->load->view('user/order_place');
					
						}
						
			}
				
		
		}
	}
	
		
	public function book_main_order()
	{
		//echo $this->session->userdata("user_login_id");die;
		if($this->session->userdata("user_login_id")=='')
		{
			$this->session->set_flashdata("login_error","Please Login First To Buy..........");
			redirect("home/login");
		//$select_data['cart_data']=$this->product_model->book_order($id);
			//echo "<pre>";print_r($select_data);die();
			}
				elseif($_SESSION['product_name']=='')
		{
			$this->session->set_flashdata("cart_error","Please Select Product To Buy..........");
			redirect("user/product");
		//$select_data['cart_data']=$this->product_model->book_order($id);
			//echo "<pre>";print_r($select_data);die();
			}
		else
		{
			
			
			//$order_id="";
			$order_id=random_string('alnum', 8);
			$select_data=$this->product_model->select_userdata();
					//print_r($select_data[0]['email_id']);die;
					$data2=array('order_id'=>$order_id,'user_id'=>$this->session->userdata("user_login_id"),'email_id'=>$select_data[0]['email_id'],'name'=>$select_data[0]['name'],'address'=>$_SESSION['address'],'city'=>$select_data[0]['city'],'pincode'=>'395006','mobile_number'=>$select_data[0]['mobile_number']);
			
			$result2=$this->product_model->order_data($data2);
						//$order_id=random_string('alnum', 8);
						$order_book_id=random_string('alnum', 8);
			//print_r($_SESSION["seller_id"]);die;
						$data3=array('order_book_id'=>$order_book_id,'order_id'=>$order_id,'user_id'=>$this->session->userdata('user_login_id'),'product_name'=>$_SESSION['product_name'],'qty'=>$_SESSION['qty'],'price'=>$_SESSION['price'],'subtotal'=>$_SESSION['subtotal'],'delivery_details'=>$_SESSION['delivery_details'],"seller_id"=>$_SESSION['seller_id'],"order_status"=>"inprogress","image_name"=>$_SESSION['image_name']);
						$result3=$this->product_model->order_book_data($data3);
			
						//print_r($oder);die;
						//$_SESSION['cart'][$i]['seed_detail_id']
						
				
				//echo $_SESSION['payment'];
				//
				//die();
				if($_SESSION['payment']=="cash")
				{
					if($result2==TRUE && $result3==TRUE)
						{
					 // $_SESSION['path_for_continue_shopping'] = uri_string(); 
			
					//$select_data['user_data']=$this->product_model->select_userdata();
					$this->session->set_flashdata("order_book","Order Book Successfully..........");
					$select_data_manu= $this->loaddata();
					$this->load->view('user/menuheader',$select_data_manu);
					redirect('user/product/success_order');
						
						}
						else
						{
							
							$this->session->set_flashdata("order_error","Something Wrong Please Retry To Buy..........");
					
						
					$select_data_manu= $this->loaddata();
					//$this->load->view('user/menuheader',$select_data_manu);
					$this->load->view('user/order_place');
					
						}
					
				}
			else if($_SESSION['payment']=="netbanking")
				{
						if($result2==TRUE && $result3==TRUE)
						{
					 // $_SESSION['path_for_continue_shopping'] = uri_string(); 
			
					//$select_data['user_data']=$this->product_model->select_userdata();
					$this->session->set_flashdata("order_book","Order Book Successfully..........");
					$select_data_manu= $this->loaddata();
					$this->load->view('user/menuheader',$select_data_manu);
					redirect('user/product/success_order');
						
						}
						else
						{
							
							$this->session->set_flashdata("order_error","Something Wrong Please Retry To Buy..........");
					
						
					$select_data_manu= $this->loaddata();
					//$this->load->view('user/menuheader',$select_data_manu);
					$this->load->view('user/order_place');
					
						}
			}
			else
			{
				$data=$_POST['month']."/".$_POST["year"];
					$payment_id=random_string('alnum', 8);
					$data=array('payment_id'=>$payment_id,'order_id'=>$order_id,'payment_type'=>$_SESSION['payment'],'card_number'=>$_POST['card_number'],'expiry_date'=>$data,'name_on_card'=>$_POST['name_on_card'],'cvv'=>$_POST["cvv"]);
					$result=$this->product_model->credit_card($data);
					if($result==TRUE && $result2==TRUE && $result3==TRUE)
						{
					 // $_SESSION['path_for_continue_shopping'] = uri_string(); 
			
					//$select_data['user_data']=$this->product_model->select_userdata();
					$this->session->set_flashdata("order_book","Order Book Successfully..........");
					$select_data_manu= $this->loaddata();
					$this->load->view('user/menuheader',$select_data_manu);
					redirect('user/product/success_order');
						
						}
						else
						{
							
							$this->session->set_flashdata("order_error","Something Wrong Please Retry To Buy..........");
					
						
					$select_data_manu= $this->loaddata();
					//$this->load->view('user/menuheader',$select_data_manu);
					$this->load->view('user/order_place');
					
						}
						
			}
				
		
		}
	}
	public function success_order()
	{
		    $select_data['user_data']=$this->product_model->select_userdata();
			$select_data['order_detail']=$this->product_model->order_detail();
			//echo "<pre>";print_r($select_data['order_detail']);die;
			$select_data_manu= $this->loaddata();
			$this->load->view('user/menuheader',$select_data_manu);
			$this->load->view('user/success_order',$select_data);
			
	}
	
	public function track_order()
	{//echo "ddd";
	//die();
			 // $select_data['user_data']=$this->product_model->select_userdata();
			$select_data['order_detail']=$this->product_model->order_detail();
	$this->load->view('user/track_page',$select_data);
			
	}
	public function track_detail($id)
	{
			// $select_data['user_data']=$this->product_model->select_userdata();
			//$select_data['order_detail']=$this->product_model->order_detail();
			$dataall['data1']=$this->product_model->track_order($id);
			//echo "<pre>";	
		//print_r($dataall['data']);
		//die();
			if($dataall['data1'][0]['order_status']=="inprogress")
			{
				$this->load->view('user/order_inprogress',$dataall);
			
			}
			else if($dataall['data1'][0]['order_status']=="shipped")
			{
				//echo "asv";
				
				$this->load->view('user/order_shipped',$dataall);
			
			}
			else if($dataall['data1'][0]['order_status']=="complete")
			{
				
				$this->load->view('user/order_complete',$dataall);
			}
			else
			{
				
			$this->load->view('user/track_page',$select_data);
			}
	}
	public function cancel_order($id)
	{
		$id2=$_POST['reason'];
		
	$data=$this->product_model->cancel_order($id,$id2);
		if($data==1)
		{
				$this->session->set_flashdata("cancel_success","Order Cancel Successfully..........");
						
						redirect('user/product/success_order');
			//$this->load->view('user/success_order',$select_data);
		}
		else
		{
			$this->session->set_flashdata("cancel_error","Order Cancel Not Done..........");
						
			redirect('user/product/success_order');
		
		}
	}
	public function cancel_order_view()
	{
		    $select_data['user_data']=$this->product_model->select_userdata();
			$select_data['order_detail']=$this->product_model->cancel_order_view();
			//echo "<pre>";print_r($select_data['order_detail']);die;
			$select_data_manu= $this->loaddata();
			//$this->load->view('user/menuheader',$select_data_manu);
			$this->load->view('user/cancel_order',$select_data);
			
	}
	public function replace_order($id)
	{
	
	$data=$this->product_model->replace_order($id);
		if($data==1)
		{
				$this->session->set_flashdata("replace_order","Order Replace Successfully..........");
						
						redirect('user/product/success_order');
			//$this->load->view('user/success_order',$select_data);
		}
		else
		{
			$this->session->set_flashdata("replace_order_error","Order Replace Not Done..........");
						
			redirect('user/product/replace_order');
		
		}
	}
	
	
}
