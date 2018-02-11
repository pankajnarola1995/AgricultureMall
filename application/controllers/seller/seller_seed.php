	<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Seller_seed extends CI_Controller {

	 public function __construct()
       {
              // Call the CI_Model constructor
              parent::__construct();
			$this->load->model("seller/seller_seed_model");
        }
	public function index()
	{
		$status=array("status"=>0);
		$select_seed["seed_type"]=$this->seller_seed_model->select_seed_type();
		$select_seed["seed_data"]=$this->seller_seed_model->select_seed_detail();
		$select_seed["cultivation_type"]=$this->seller_seed_model->select_seed_cultivation_type();
		$select_seed["origin_country"]=$this->seller_seed_model->select_origin_country2();
		$select_seed["seed_subtype"]=$this->seller_seed_model->select_seed_sub_type($status);
		$select_seed["seed_submenu"]=$this->seller_seed_model->select_seed_submenu_type($status);
		$select_seed["select"]="";
		$select_seed['select1']="";
		$select_seed['select2']="";
		$id=array("seller_id"=>$this->session->userdata("seller_login_id"));	
				$seller_pic=$this->seller_seed_model->select_seller_image($id);
				/*echo "<pre>";
				print_r($seller_pic);
				die();*/
				$this->session->set_userdata("seller_pic",$seller_pic[0]['image_name']);
		$this->load->view('seller/seller_seed_index',$select_seed);
		
	}
	public function select_subtype_data_menu($id)
	{
		$data=array("seed_type_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_seed["seed_type"]=$this->seller_seed_model->select_seed_type();
		$select_seed["seed_data"]=$this->seller_seed_model->select_seed_detail_type($id);
		
		$select_seed["cultivation_type"]=$this->seller_seed_model->select_seed_cultivation_type();
		$select_seed["origin_country"]=$this->seller_seed_model->select_origin_country2();
		$select_seed["seed_subtype"]=$this->seller_seed_model->select_seed_sub_type($data);
		$select_seed["seed_submenu"]=$this->seller_seed_model->select_seed_submenu_seedtype($id);
		
		$select_seed["select"]=$this->seller_seed_model->select_seed_type_data($id);
		$select_seed['select1']="";
		$select_seed['select2']="";
		//echo "<pre>";
		//print_r($select_data['select']);
		//die();
		if($select_seed)
		{
			$this->load->view('seller/seller_seed_index',$select_seed);
		}
	}
	public function select_submenu_data_menu($id)
	{
		$data=array("seed_submenu_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_seed["seed_type"]=$this->seller_seed_model->select_seed_type();
		$select_seed["seed_data"]=$this->seller_seed_model->select_seed_detail_type11($id);
		
		$select_seed["cultivation_type"]=$this->seller_seed_model->select_seed_cultivation_type();
		$select_seed["origin_country"]=$this->seller_seed_model->select_origin_country2();
		$select_seed["seed_subtype"]=$this->seller_seed_model->select_seed_sub_type($status);
		$select_seed["seed_submenu"]=$this->seller_seed_model->select_seed_submenu_type($status);
		
		$select_seed["select"]="";
		$select_seed['select1']="";
		$select_seed['select2']=$this->seller_seed_model->select_seed_submenu_type($data);
		//echo "<pre>";
		//print_r($select_data['select']);
		//die();
		if($select_seed)
		{
			$this->load->view('seller/seller_seed_index',$select_seed);
		}
	}
public function select_subtype_type_menu($id)
	{
		$id_data=explode("%20",$id);
		$data1=array("seed_subtype_id"=>$id_data[1],"status"=>0);
		$status=array("status"=>0);
		$data=array("seed_submenu_id"=>$id_data[0],"status"=>0);
		$select_seed["seed_type"]=$this->seller_seed_model->select_seed_type();
		$select_seed["seed_data"]=$this->seller_seed_model->select_seed_detail_type11($id_data[0]);
		$select_seed["cultivation_type"]=$this->seller_seed_model->select_seed_cultivation_type();
		$select_seed["origin_country"]=$this->seller_seed_model->select_origin_country2();
		$select_seed["seed_subtype"]=$this->seller_seed_model->select_seed_sub_type($data1);
		$select_seed["seed_submenu"]=$this->seller_seed_model->select_seed_submenu_seedtype1($id_data[1]);
		//echo "<pre>";
		//print_r($select_seed["seed_submenu"]);
		//die();
		$select_seed["select"]="";
		$select_seed['select1']=$this->seller_seed_model->select_seed_type_data12($id_data[1]);
		$select_seed['select2']=$this->seller_seed_model->select_seed_submenu_type($data);
		if($select_seed)
		{
			$this->load->view('seller/seller_seed_index',$select_seed);
		}
			
	}
	public function select_menu_data_subtype_type_all($id)
	{
		$id_data=explode("%20",$id);
		$data1=array("seed_type_id"=>$id_data[1],"status"=>0);
		$data2=array("seed_subtype_id"=>$id_data[2],"status"=>0);
		$status=array("status"=>0);
		$data=array("seed_submenu_id"=>$id_data[0],"status"=>0);
		$select_seed["seed_type"]=$this->seller_seed_model->select_seed_type();
		$select_seed["seed_data"]=$this->seller_seed_model->select_seed_detail_type11($id_data[0]);
		$select_seed["cultivation_type"]=$this->seller_seed_model->select_seed_cultivation_type();
		$select_seed["origin_country"]=$this->seller_seed_model->select_origin_country2();
		$select_seed["seed_subtype"]=$this->seller_seed_model->select_seed_sub_type($data1);
		$select_seed["seed_submenu"]=$this->seller_seed_model->select_seed_submenu_seedtype1($id_data[2]);
		//echo "<pre>";
		//print_r($select_seed["seed_submenu"]);
		//die();
		$select_seed["select"]=$this->seller_seed_model->select_seed_type_data($id_data[1]);
		$select_seed['select1']=$this->seller_seed_model->select_seed_type_data12($id_data[2]);
		$select_seed['select2']=$this->seller_seed_model->select_seed_submenu_type($data);
		if($select_seed)
		{
			$this->load->view('seller/seller_seed_index',$select_seed);
		}
		
		
	    
	}
	public function select_seed_type_menu($id)
	{
		$data1=array("seed_subtype_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_seed["seed_type"]=$this->seller_seed_model->select_seed_type();
		$select_seed["seed_data"]=$this->seller_seed_model->select_seed_detail_type1($id);
		$select_seed["cultivation_type"]=$this->seller_seed_model->select_seed_cultivation_type();
		$select_seed["origin_country"]=$this->seller_seed_model->select_origin_country2();
		$select_seed["seed_subtype"]=$this->seller_seed_model->select_seed_sub_type($status);
		$select_seed["seed_submenu"]=$this->seller_seed_model->select_seed_submenu_seedtype1($id);
		//echo "<pre>";
		//print_r($select_seed["seed_submenu"]);
		//die();
		$select_seed["select"]="";
		$select_seed['select1']=$this->seller_seed_model->select_seed_type_data12($id);
		$select_seed['select2']="";
		if($select_seed)
		{
			$this->load->view('seller/seller_seed_index',$select_seed);
		}
		
		
	}
public function select_submenu_data_subtype($id)
	{
	     $id_data=explode("%20",$id);
		$data1=array("seed_type_id"=>$id_data[1],"status"=>0);
		$status=array("status"=>0);
		$select_seed["seed_type"]=$this->seller_seed_model->select_seed_type();
		$select_seed["seed_data"]=$this->seller_seed_model->select_seed_detail_type1($id_data[0]);
		$select_seed["cultivation_type"]=$this->seller_seed_model->select_seed_cultivation_type();
		$select_seed["origin_country"]=$this->seller_seed_model->select_origin_country2();
		$select_seed["seed_subtype"]=$this->seller_seed_model->select_seed_sub_type($data1);
		$select_seed["seed_submenu"]=$this->seller_seed_model->select_seed_submenu_seedtype1($id_data[0]);
		//echo "<pre>";
		//print_r($select_seed["seed_submenu"]);
		//die();
		$select_seed["select"]=$this->seller_seed_model->select_seed_type_data($id_data[1]);
		$select_seed['select1']=$this->seller_seed_model->select_seed_type_data12($id_data[0]);
		$select_seed['select2']="";
		if($select_seed)
		{
			$this->load->view('seller/seller_seed_index',$select_seed);
		}
		
	}
public function select_submenu_data_subtype1($id)
	{
	     $id_data=explode("%20",$id);
		$data1=array("seed_type_id"=>$id_data[1],"status"=>0);
		$data=array("seed_submenu_id"=>$id_data[0],"status"=>0);
		$status=array("status"=>0);
		$select_seed["seed_type"]=$this->seller_seed_model->select_seed_type();
		$select_seed["seed_data"]=$this->seller_seed_model->select_seed_detail_type11($id_data[0]);
		$select_seed["cultivation_type"]=$this->seller_seed_model->select_seed_cultivation_type();
		$select_seed["origin_country"]=$this->seller_seed_model->select_origin_country2();
		$select_seed["seed_subtype"]=$this->seller_seed_model->select_seed_sub_type($status);
		$select_seed["seed_submenu"]=$this->seller_seed_model->select_seed_submenu_seedtype($id_data[1]);
		//echo "<pre>";
		//print_r($select_seed["seed_submenu"]);
		//die();
		$select_seed["select"]=$this->seller_seed_model->select_seed_type_data($id_data[1]);
		$select_seed['select1']="";
		$select_seed['select2']=$this->seller_seed_model->select_seed_submenu_type($data);
		if($select_seed)
		{
			$this->load->view('seller/seller_seed_index',$select_seed);
		}
		
	}
	public function seller_seed_data()
	{
		$select_seed_data["cultivation_type"]=$this->seller_seed_model->select_cultivation_type();
		$select_seed_data["origin_country"]=$this->seller_seed_model->select_origin_country();

		$this->load->view("seller/seller_seed",$select_seed_data);
		
	}
	public function seed_add_data()
	{
			$this->session->set_userdata("seed_submenu","");
			$this->session->set_userdata("seed_subtype","");
		
		if($_POST["seed_type"]!="")
		{
		$this->session->set_userdata("seed_type",$_POST["seed_type"]);
		}
		
		if($_POST["seed_sub_type"]!="")
		{
		$this->session->set_userdata("seed_subtype",$_POST["seed_sub_type"]);
		
		}
		if($_POST["seed_sub_menu_type"]!="")
		{
		$this->session->set_userdata("seed_submenu",$_POST["seed_sub_menu_type"]);
		}		
		redirect(base_url().'seller/seller_seed/seller_seed_data');
	}
	public function select_seed_sub_type()
	{
		$data=array("seed_type_id"=>$_POST['seed_type_id'],"status"=>0);
		if($this->seller_seed_model->select_seed_sub_type($data))
		{
				$select_data=$this->seller_seed_model->select_seed_sub_type($data);
				$cnt=count($select_data);
				echo "<select tabindex='1' id='seed_sub_type' name='seed_sub_type' class='dropdown-menu' role='menu'>";
				echo "<option value='Select here..'>Select Seed Sub Type..</option>";
			for($i=0;$i<$cnt;$i++)
				{
			?><option value="<?php echo $select_data[$i]['seed_subtype_id']?> "><?php echo $select_data[$i]['seed_subtype_name']?></option>
			<?php
			}
													
			echo "</select>";
			//echo "<span class='help-inline' id='msgseed_sub_type' style='float:right' ></span>";		
		}
		else
		{
		}
	}
	public function select_seed_submenu_type()
	{
		$data=array("seed_subtype_id"=>$_POST['seed_subtype_id'],"status"=>0);
		
		if($select_data=$this->seller_seed_model->select_seed_submenu_type($data))
		{
				$cnt=count($select_data);
				
				echo "<select tabindex='1'  id='seed_sub_menu_type' name='seed_sub_menu_type' class='dropdown-menu' role='menu'>";
				echo "<option value='Select here..'>Select Seed Menu Type..</option>";
			for($i=0;$i<$cnt;$i++)
				{
			?><option value="<?php echo $select_data[$i]['seed_submenu_id']?> "><?php echo $select_data[$i]['seed_submenu_name']?></option>
			<?php
				}
													
			echo "</select>";
			//echo "<span class='help-inline' id='msgseed_sub_menu_type' style='float:right' ></span>";	
		}
		else
		{ 
			
		}
	}
	
	public function seller_seed_insert()
	{
		$trade ="";
		$payment="";
		$payment_cnt= count($_POST['payment_terms']);
					for($i=0;$i<$payment_cnt;$i++)
							{
							$payment = $payment." ".$_POST['payment_terms'][$i];
							}
							
		$trade_cnt= count($_POST['trade_terms']);
					for($j=0;$j<$trade_cnt;$j++)
							{
							$trade = $trade." ".$_POST['trade_terms'][$j];
							}				
							
					//add code on that .................	
					$seed_detail_id=random_string('alnum', 8);	
					if($this->session->userdata("seed_submenu")=="")
					{
						$seed_data=array('seed_detail_id'=>$seed_detail_id,'seller_id'=>$this->session->userdata("seller_login_id"),'seed_type_id'=>$this->session->userdata("seed_type"),'seed_subtype_id'=>$this->session->userdata("seed_subtype"),'seed_detail_name'=>$_POST['seed_detail_name'],'seed_price'=>$_POST['seed_price'],'seed_price_type'=>$_POST['seed_price_type'],'seed_total_qty'=>$_POST['seed_total_qty'],'seed_min_order'=>$_POST['seed_min_order'],'cultivation_type'=>$_POST['cultivation_type'],'model_no'=>$_POST['model_no'],'payment_terms'=>$payment,'trade_terms'=>$trade,'item_weight'=>$_POST['item_weight'],'shipping_weight'=>$_POST['shipping_weight'],'origin_country'=>$_POST['origin_country'],'description'=>$_POST['description']);
						$this->session->set_userdata("seed_type","");
					}
					else
					{
					$seed_data=array('seed_detail_id'=>$seed_detail_id,'seller_id'=>$this->session->userdata("seller_login_id"),'seed_type_id'=>$this->session->userdata("seed_type"),'seed_subtype_id'=>$this->session->userdata("seed_subtype"),'seed_submenu_id'=>$this->session->userdata("seed_submenu"),'seed_detail_name'=>$_POST['seed_detail_name'],'seed_price'=>$_POST['seed_price'],'seed_price_type'=>$_POST['seed_price_type'],'seed_total_qty'=>$_POST['seed_total_qty'],'seed_min_order'=>$_POST['seed_min_order'],'cultivation_type'=>$_POST['cultivation_type'],'model_no'=>$_POST['model_no'],'payment_terms'=>$payment,'trade_terms'=>$trade,'item_weight'=>$_POST['item_weight'],'shipping_weight'=>$_POST['shipping_weight'],'origin_country'=>$_POST['origin_country'],'description'=>$_POST['description']);
						$this->session->set_userdata("seed_type","");
					}
					/*echo "<pre>";
					print_r($seed_data);
					die();*/
			$result_seed=$this->seller_seed_model->seller_seed_insert($seed_data);
			
				$config["upload_path"]="image/seed_image/";
				$config['allowed_types']= 'gif|jpg|png';
					/*echo "<pre>";
					print_r($_FILES);
					die();*/
					
				// seed Image Insert.......
				$this->upload->initialize($config);
				$count_file=count($_FILES['seed_images']['name']);
			
				for($i=0;$i<$count_file;$i++)
				{
				
					$_FILES['newimg']['name']=$_FILES['seed_images']['name'][$i];
					$_FILES['newimg']['tmp_name']=$_FILES['seed_images']['tmp_name'][$i];
					$_FILES['newimg']['type']=$_FILES['seed_images']['type'][$i];
					$_FILES['newimg']['size']=$_FILES['seed_images']['size'][$i];
					/*echo "<pre>";
					echo $_FILES['newimg']['name'];
					//print_r($_FILES);
					die();*/
					if(!$this->upload->do_upload('newimg'))
					{
					$this->session->set_flashdata("seller_seed_image_error","Something Wrong In Insert Seed Image Please Try Again..........");
					redirect(base_url()."seller/seller_seed");
									
					}
					else
					{
						$image_name="seed_image/".$_FILES['newimg']['name'];
						$img=array("image_id"=>random_string('alnum', 8),"seed_detail_id"=>$seed_detail_id,"image_name"=>$image_name);
						$result_image=$this->seller_seed_model->insert_seed_image($img);
						
					}
				}
				//Insert Seed...............
				
			if($result_image!=TRUE)
			{			
				$this->session->set_flashdata("seller_seed_error","Seed Image Insert Error..........");
				redirect(base_url()."seller/seller_seed");
			}
			elseif($result_seed==TRUE and $result_image==TRUE)
			{			
				$this->session->set_flashdata("seller_seed_add","Seed Insert Success..........");
				redirect(base_url()."seller/seller_seed");
			}
			elseif($result_seed!=TRUE and $result_image!=TRUE)
			{
				//error code of insert.....
				$this->session->set_flashdata("seller_seed_add_error","Something Wrong In Insert Seed..........");
							$this->load->view("seller/seller_seed");
			}
			else
			{
				$this->session->set_flashdata("seller_seed_add_error","Something Wrong In Insert Seed..........");
							$this->load->view("seller/seller_seed");
			}
	}
	
	public function seller_seed_trash()
	{
		$select_seed["cultivation_type"]=$this->seller_seed_model->select_seed_cultivation_type();
		$select_seed["origin_country"]=$this->seller_seed_model->select_origin_country2();
		$select_seed["seed_data"]=$this->seller_seed_model->select_seed_detail_trash();
		$this->load->view('seller/seller_seed_trash',$select_seed);
	}
public function seller_seed_trash_backup($seed_detail_id)
	{
		$id=array("seed_detail_id"=>$seed_detail_id);
		$status=array("status"=>0);
		if($this->seller_seed_model->seed_trash_backup($id,$status))
		{
			$this->session->set_flashdata("seller_seed_add","Seed Back Up Success..........");
			redirect(base_url()."seller/seller_seed/seller_seed_trash");
		}
		else
		{
			$this->session->set_flashdata("seller_seed_add_error","Something Wrong..........");
			redirect(base_url()."seller/seller_seed/seller_seed_trash");
			
		}
		
	}
	public function seller_seed_trash_delete($seed_detail_id)
	{
		$id=array("seed_detail_id"=>$seed_detail_id);
		if($this->seller_seed_model->seed_trash_delete($id))
		{
			$this->session->set_flashdata("seller_seed_add","Seed Delete Success..........");
			redirect(base_url()."seller/seller_seed/seller_seed_trash");
		}
		else
		{
			$this->session->set_flashdata("seller_seed_add_error","Something Wrong..........");
			redirect(base_url()."seller/seller_seed/seller_seed_trash");
			
		}
		
	}
	public function seller_seed_backup($seed_detail_id)
	{
		$id=array("seed_detail_id"=>$seed_detail_id);
		$status=array("status"=>1);
		if($this->seller_seed_model->seed_back($id,$status))
		{
			$this->session->set_flashdata("seller_seed_add","Seed Delete Success..........");
			redirect(base_url()."seller/seller_seed");
		}
		else
		{
			$this->session->set_flashdata("seller_seed_add_error","Something Wrong on Delete Seed..........");
			redirect(base_url()."seller/seller_seed");
			
		}
		
	}


	public function seller_seed_data_update($seed_detail_id="")
	{
		
		if(isset($seed_detail_id) && $seed_detail_id =="")
		{
			
			echo "<h3 style='color:red'>You Have no Permission to access this page.</h3>";
			die();
		}else
		{
		$id=array("seed_detail_id"=>$seed_detail_id);
		
		$select_seed_data["select_update_data"]=$this->seller_seed_model->update_seed_data_select($id);
		//echo "<pre>";
		//print_r($select_seed_data["select_update_data"]);
		//die();
		$subtype=array("seed_type_id"=>$select_seed_data["select_update_data"][0]["seed_type_id"]);
		$subtype1=array("seed_subtype_id"=>$select_seed_data["select_update_data"][0]["seed_subtype_id"]);
		$select_seed_data["seed_type"]=$this->seller_seed_model->select_seed_type();
		$select_seed_data["seed_sub_type"]=$this->seller_seed_model->select_seed_sub_type( $subtype);
		$select_seed_data["seed_submenu"]=$this->seller_seed_model->select_seed_submenu_type($subtype1);
		//echo "<pre>";
		//print_r($select_seed_data["select_update_data"]);
		//die();
		//$select_seed_data["seed_data"]=$this->seller_seed_model->select_seed_detail();
		$select_seed_data["cultivation_type"]=$this->seller_seed_model->select_cultivation_type();
		$select_seed_data["origin_country"]=$this->seller_seed_model->select_origin_country();
		//echo "<pre>";
		//print_r($select_seed_data["image"]);
		//die();
		if($select_seed_data["select_update_data"])
		{
		$this->load->view("seller/seller_seed_update",$select_seed_data);
		}
		else
		{
			echo "<h3 style='color:red'>No Record Found.</h3>";
			die();
		}
		}
		
	}	
	public function seller_seed_display($seed_detail_id="")
	{
		if(isset($seed_detail_id) && $seed_detail_id =="")
		{
			
			echo "<h3 style='color:red'>You Have no Permission to access this page.</h3>";
			die();
		}else
		{
		$id=array("seed_detail_id"=>$seed_detail_id);
		
		$select_seed_data["select_update_data"]=$this->seller_seed_model->update_seed_data_select($id);
		//echo "<pre>";
		//print_r($select_seed_data["select_update_data"]);
		//die();
		$subtype=array("seed_type_id"=>$select_seed_data["select_update_data"][0]["seed_type_id"]);
		$subtype1=array("seed_subtype_id"=>$select_seed_data["select_update_data"][0]["seed_subtype_id"]);
		$select_seed_data["seed_type"]=$this->seller_seed_model->select_seed_type();
		$select_seed_data["seed_sub_type"]=$this->seller_seed_model->select_seed_sub_type($subtype);
		$select_seed_data["seed_submenu"]=$this->seller_seed_model->select_seed_submenu_type($subtype1);
//echo "<pre>";
		//print_r($select_seed_data["select_update_data"]);
		//die();
		//$select_seed_data["seed_data"]=$this->seller_seed_model->select_seed_detail();
		$select_seed_data["cultivation_type"]=$this->seller_seed_model->select_cultivation_type();
		$select_seed_data["origin_country"]=$this->seller_seed_model->select_origin_country();
		//echo "<pre>";
		//print_r($select_seed_data["image"]);
		//die();
		if($select_seed_data["select_update_data"])
		{
		$this->load->view("seller/seller_seed_display",$select_seed_data);
		}
		else
		{
			echo "<h3 style='color:red'>No Record Found.</h3>";
			die();
		}
		}
		
		
	}	
	public function seller_seed_data_update_image($seed_detail_id="")
	{
		if(isset($seed_detail_id) && $seed_detail_id =="")
		{
			
			echo "<h3 style='color:red'>You Have no Permission to access this page.</h3>";
			die();
		}
		else
		{
		$id=array("seed_detail_id"=>$seed_detail_id);
		$select_seed_data["image"]=$this->seller_seed_model->select_image($id);
		//echo "<pre>";
		//print_r($select_seed_data["image"]);
		//die();
		$select_seed_data["seed_detail_id"]=array("seed_detail_id"=>$seed_detail_id);
	if(count($select_seed_data["image"])!=0)
	{
		$this->load->view("seller/seller_seed_update_image",$select_seed_data);
		}
		else
		{
			echo "<h3 style='color:red'>No Record Found.</h3>";
			die();
		}
		}
		
		
	}	
	public function seed_image_delete($image_id,$old_seed_images_name,$seed_detail_id)
	{
		$id=array("image_id"=>$image_id);
		if($this->seller_seed_model->delete_seed_image($id))
		{
		
		unlink("image/".$old_seed_images_name);
		$id1=array("seed_detail_id"=>$seed_detail_id);
		$select_seed_data["image_all"]=$this->seller_seed_model->select_image($id1);
	//	echo count($select_seed_data["image_all"]);die();
		if(count($select_seed_data["image_all"])>=0 )
			{
				redirect(base_url()."seller/seller_seed/seller_seed_data_update_image/".$seed_detail_id);
			}
		else
			{
				redirect(base_url()."seller/seller_seed");
			}
		}
		else
		{
			$this->session->set_flashdata("seller_seed_image_error","Something Wrong In Delete Seed Image Please Try Again..........");
			redirect(base_url()."seller/seller_seed/seller_seed_data_update_image/".$select_seed_data["image_all"][0]["seed_detail_id"]);
		}
		
		
	}	
	public function add_image()
	{
		$config["upload_path"]="image/seed_image/";
				$config['allowed_types']= 'gif|jpg|png';
					
					
				// seed Image Insert.......
				$this->upload->initialize($config);
				$count_file=count($_FILES['seed_images']['name']);
			
				for($i=0;$i<$count_file;$i++)
				{
				
					$_FILES['newimg']['name']=$_FILES['seed_images']['name'][$i];
					$_FILES['newimg']['tmp_name']=$_FILES['seed_images']['tmp_name'][$i];
					$_FILES['newimg']['type']=$_FILES['seed_images']['type'][$i];
					$_FILES['newimg']['size']=$_FILES['seed_images']['size'][$i];
					/*echo "<pre>";
					echo $_FILES['newimg']['name'];
					//print_r($_FILES);
					die();*/
					if(!$this->upload->do_upload('newimg'))
					{
					$this->session->set_flashdata("seller_seed_image_error","Something Wrong In Insert Seed Image Please Try Again..........");
					redirect(base_url()."seller/seller_seed");
									
					}
					else
					{
						$image_name="seed_image/".$_FILES['newimg']['name'];
						$img=array("image_id"=>random_string('alnum', 8),"image_name"=>$image_name,"seed_detail_id"=>$_POST["seed_detail_id"]);
						$result_image=$this->seller_seed_model->insert_seed_image($img);
						
					}
				}
			if($result_image)
			{
				redirect(base_url()."seller/seller_seed/seller_seed_data_update_image/".$_POST["seed_detail_id"]);
			}
			
			
		
	}	
	public function seed_image_update()
	{
		//echo "xfdd";
		//die();
		$id=array("image_id"=>$_POST["seed_images_id"]);
		//$name=array("image_name"=>$_POST["seed_images"]);
		//echo "<pre>";
		//print_r($_POST["old_seed_images_id"]);
		//die();
		if($_FILES['seed_images']['name']!="")
		{
		$config['upload_path']= 'image/seed_image/';
		$config['allowed_types']= 'gif|jpg|png';
		$this->upload->initialize($config);
		$seller_profile="";	
		if ($this->upload->do_upload('seed_images'))
								{
								$fname ="seed_image/".$_FILES['seed_images']['name'];
								$name=array("image_name"=>$fname);
								//$seller_profile=array("image_id"=>random_string('alnum', 8),"seller_id"=>$seller_id,"image_name"=>$fname);
								$select_seed_data["image_update"]=$this->seller_seed_model->update_image($id,$name);
								unlink("image/".$_POST["old_seed_images_id"]);
								}
		}
		$select_seed_data["image"]=$this->seller_seed_model->select_image($id);
		redirect(base_url()."seller/seller_seed/seller_seed_data_update_image/".$select_seed_data["image"][0]["seed_detail_id"]);
		
	}	
	public function seller_seed_update()
	{
		//echo "<pre>";
		//print_r($_POST);
		//die();
		$id=array("seed_detail_id"=>$_POST["seed_detail_id"]);
		$trade ="";
		$payment="";
		$payment_cnt= count($_POST['payment_terms']);
					for($i=0;$i<$payment_cnt;$i++)
							{
							$payment = $payment." ".$_POST['payment_terms'][$i];
							}
							
		$trade_cnt= count($_POST['trade_terms']);
					for($j=0;$j<$trade_cnt;$j++)
							{
							$trade = $trade." ".$_POST['trade_terms'][$j];
							}				
							
					//add code on that .................	
				//Insert Seed...............
				
			/*	echo "<pre>";
					print_r($_POST);
					die();*/
				if(isset($_POST["seed_sub_menu_type"]))
					{
						$seed_data=array('seller_id'=>$_POST["seller_id"],'seed_type_id'=>$_POST["seed_type"],'seed_subtype_id'=>$_POST["seed_sub_type"],'seed_submenu_id'=>$_POST["seed_sub_menu_type"],'seed_detail_name'=>$_POST['seed_detail_name'],'seed_price'=>$_POST['seed_price'],'seed_price_type'=>$_POST['seed_price_type'],'seed_total_qty'=>$_POST['seed_total_qty'],'seed_min_order'=>$_POST['seed_min_order'],'cultivation_type'=>$_POST['cultivation_type'],'model_no'=>$_POST['model_no'],'payment_terms'=>$payment,'trade_terms'=>$trade,'item_weight'=>$_POST['item_weight'],'shipping_weight'=>$_POST['shipping_weight'],'origin_country'=>$_POST['origin_country'],'description'=>$_POST['description']);
					//echo "<pre>";
		//print_r($seed_data);
		//die();
					}
					else
					{
						
					$seed_data=array('seller_id'=>$_POST["seller_id"],'seed_type_id'=>$_POST["seed_type"],'seed_subtype_id'=>$_POST["seed_sub_type"],'seed_submenu_id'=>NULL,'seed_detail_name'=>$_POST['seed_detail_name'],'seed_price'=>$_POST['seed_price'],'seed_price_type'=>$_POST['seed_price_type'],'seed_total_qty'=>$_POST['seed_total_qty'],'seed_min_order'=>$_POST['seed_min_order'],'cultivation_type'=>$_POST['cultivation_type'],'model_no'=>$_POST['model_no'],'payment_terms'=>$payment,'trade_terms'=>$trade,'item_weight'=>$_POST['item_weight'],'shipping_weight'=>$_POST['shipping_weight'],'origin_country'=>$_POST['origin_country'],'description'=>$_POST['description']);
					}
					/*echo "<pre>";
					print_r($seed_data);
					die();*/
					
			$result_seed=$this->seller_seed_model->seller_seed_update($seed_data,$id);
			if($result_seed==TRUE )
			{			
				$this->session->set_flashdata("seller_seed_add","Seed update Success..........");
				redirect(base_url()."seller/seller_seed");
			}
			else
			{
				//error code of insert.....
				$this->session->set_flashdata("seller_seed_add_error","Something Wrong In Insert Seed..........");
							$this->load->view("seller/seller_seed");
			}
		
	}
	
	
}
 