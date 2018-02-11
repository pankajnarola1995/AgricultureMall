	<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Seller_fertilizer extends CI_Controller {

	 public function __construct()
       {
              // Call the CI_Model constructor
              parent::__construct();
			$this->load->model("seller/seller_fertilizer_model");
        }
	public function index()
	{
		$status=array("status"=>0);
		$select_fertilizer["fertilizer_type"]=$this->seller_fertilizer_model->select_fertilizer_type();
		$select_fertilizer["fertilizer_data"]=$this->seller_fertilizer_model->select_fertilizer_detail();
		$select_fertilizer["classification_type"]=$this->seller_fertilizer_model->select_fertilizer_classification_type();
		$select_fertilizer["appearance_type"]=$this->seller_fertilizer_model->select_fertilizer_appearance_type();
		$select_fertilizer["origin_country"]=$this->seller_fertilizer_model->select_origin_country2();
		$select_fertilizer["fertilizer_subtype"]=$this->seller_fertilizer_model->select_fertilizer_sub_type($status);
		$select_fertilizer["fertilizer_submenu"]=$this->seller_fertilizer_model->select_fertilizer_submenu_type($status);
		$select_fertilizer["select"]="";
		$select_fertilizer['select1']="";
		$select_fertilizer['select2']="";
		$id=array("seller_id"=>$this->session->userdata("seller_login_id"));	
				$seller_pic=$this->seller_fertilizer_model->select_seller_image($id);
				/*echo "<pre>";
				print_r($seller_pic);
				die();*/
				$this->session->set_userdata("seller_pic",$seller_pic[0]['image_name']);
		$this->load->view('seller/seller_fertilizer_index',$select_fertilizer);
		
	}
	public function select_subtype_data_menu($id)
	{
		$data=array("fertilizer_type_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_fertilizer["fertilizer_type"]=$this->seller_fertilizer_model->select_fertilizer_type();
		$select_fertilizer["fertilizer_data"]=$this->seller_fertilizer_model->select_fertilizer_detail_type($id);
		
		$select_fertilizer["classification_type"]=$this->seller_fertilizer_model->select_fertilizer_classification_type();
		$select_fertilizer["appearance_type"]=$this->seller_fertilizer_model->select_fertilizer_appearance_type();
		$select_fertilizer["origin_country"]=$this->seller_fertilizer_model->select_origin_country2();
		$select_fertilizer["fertilizer_subtype"]=$this->seller_fertilizer_model->select_fertilizer_sub_type($data);
		$select_fertilizer["fertilizer_submenu"]=$this->seller_fertilizer_model->select_fertilizer_submenu_fertilizertype($id);
		
		$select_fertilizer["select"]=$this->seller_fertilizer_model->select_fertilizer_type_data($id);
		$select_fertilizer['select1']="";
		$select_fertilizer['select2']="";
		//echo "<pre>";
		//print_r($select_data['select']);
		//die();
		if($select_fertilizer)
		{
			$this->load->view('seller/seller_fertilizer_index',$select_fertilizer);
		}
	}
	public function select_submenu_data_menu($id)
	{
		$data=array("fertilizer_submenu_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_fertilizer["fertilizer_type"]=$this->seller_fertilizer_model->select_fertilizer_type();
		$select_fertilizer["fertilizer_data"]=$this->seller_fertilizer_model->select_fertilizer_detail_type11($id);
		
		$select_fertilizer["classification_type"]=$this->seller_fertilizer_model->select_fertilizer_classification_type();
		$select_fertilizer["appearance_type"]=$this->seller_fertilizer_model->select_fertilizer_appearance_type();
		$select_fertilizer["origin_country"]=$this->seller_fertilizer_model->select_origin_country2();
		$select_fertilizer["fertilizer_subtype"]=$this->seller_fertilizer_model->select_fertilizer_sub_type($status);
		$select_fertilizer["fertilizer_submenu"]=$this->seller_fertilizer_model->select_fertilizer_submenu_type($status);
		
		$select_fertilizer["select"]="";
		$select_fertilizer['select1']="";
		$select_fertilizer['select2']=$this->seller_fertilizer_model->select_fertilizer_submenu_type($data);
		//echo "<pre>";
		//print_r($select_data['select']);
		//die();
		if($select_fertilizer)
		{
			$this->load->view('seller/seller_fertilizer_index',$select_fertilizer);
		}
	}
public function select_subtype_type_menu($id)
	{
		$id_data=explode("%20",$id);
		$data1=array("fertilizer_subtype_id"=>$id_data[1],"status"=>0);
		$status=array("status"=>0);
		$data=array("fertilizer_submenu_id"=>$id_data[0],"status"=>0);
		$select_fertilizer["fertilizer_type"]=$this->seller_fertilizer_model->select_fertilizer_type();
		$select_fertilizer["fertilizer_data"]=$this->seller_fertilizer_model->select_fertilizer_detail_type11($id_data[0]);
		$select_fertilizer["classification_type"]=$this->seller_fertilizer_model->select_fertilizer_classification_type();
		$select_fertilizer["appearance_type"]=$this->seller_fertilizer_model->select_fertilizer_appearance_type();
		$select_fertilizer["origin_country"]=$this->seller_fertilizer_model->select_origin_country2();
		$select_fertilizer["fertilizer_subtype"]=$this->seller_fertilizer_model->select_fertilizer_sub_type($data1);
		$select_fertilizer["fertilizer_submenu"]=$this->seller_fertilizer_model->select_fertilizer_submenu_fertilizertype1($id_data[1]);
		//echo "<pre>";
		//print_r($select_fertilizer["fertilizer_submenu"]);
		//die();
		$select_fertilizer["select"]="";
		$select_fertilizer['select1']=$this->seller_fertilizer_model->select_fertilizer_type_data12($id_data[1]);
		$select_fertilizer['select2']=$this->seller_fertilizer_model->select_fertilizer_submenu_type($data);
		if($select_fertilizer)
		{
			$this->load->view('seller/seller_fertilizer_index',$select_fertilizer);
		}
			
	}
	public function select_menu_data_subtype_type_all($id)
	{
		$id_data=explode("%20",$id);
		$data1=array("fertilizer_type_id"=>$id_data[1],"status"=>0);
		$data2=array("fertilizer_subtype_id"=>$id_data[2],"status"=>0);
		$status=array("status"=>0);
		$data=array("fertilizer_submenu_id"=>$id_data[0],"status"=>0);
		$select_fertilizer["fertilizer_type"]=$this->seller_fertilizer_model->select_fertilizer_type();
		$select_fertilizer["fertilizer_data"]=$this->seller_fertilizer_model->select_fertilizer_detail_type11($id_data[0]);
		$select_fertilizer["classification_type"]=$this->seller_fertilizer_model->select_fertilizer_classification_type();
		$select_fertilizer["appearance_type"]=$this->seller_fertilizer_model->select_fertilizer_appearance_type();
		$select_fertilizer["origin_country"]=$this->seller_fertilizer_model->select_origin_country2();
		$select_fertilizer["fertilizer_subtype"]=$this->seller_fertilizer_model->select_fertilizer_sub_type($data1);
		$select_fertilizer["fertilizer_submenu"]=$this->seller_fertilizer_model->select_fertilizer_submenu_fertilizertype1($id_data[2]);
		//echo "<pre>";
		//print_r($select_fertilizer["fertilizer_submenu"]);
		//die();
		$select_fertilizer["select"]=$this->seller_fertilizer_model->select_fertilizer_type_data($id_data[1]);
		$select_fertilizer['select1']=$this->seller_fertilizer_model->select_fertilizer_type_data12($id_data[2]);
		$select_fertilizer['select2']=$this->seller_fertilizer_model->select_fertilizer_submenu_type($data);
		if($select_fertilizer)
		{
			$this->load->view('seller/seller_fertilizer_index',$select_fertilizer);
		}
		
		
	    
	}
	public function select_fertilizer_type_menu($id)
	{
		$data1=array("fertilizer_subtype_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_fertilizer["fertilizer_type"]=$this->seller_fertilizer_model->select_fertilizer_type();
		$select_fertilizer["fertilizer_data"]=$this->seller_fertilizer_model->select_fertilizer_detail_type1($id);
		$select_fertilizer["classification_type"]=$this->seller_fertilizer_model->select_fertilizer_classification_type();
		$select_fertilizer["appearance_type"]=$this->seller_fertilizer_model->select_fertilizer_appearance_type();
		$select_fertilizer["origin_country"]=$this->seller_fertilizer_model->select_origin_country2();
		$select_fertilizer["fertilizer_subtype"]=$this->seller_fertilizer_model->select_fertilizer_sub_type($status);
		$select_fertilizer["fertilizer_submenu"]=$this->seller_fertilizer_model->select_fertilizer_submenu_fertilizertype1($id);
		//echo "<pre>";
		//print_r($select_fertilizer["fertilizer_submenu"]);
		//die();
		$select_fertilizer["select"]="";
		$select_fertilizer['select1']=$this->seller_fertilizer_model->select_fertilizer_type_data12($id);
		$select_fertilizer['select2']="";
		if($select_fertilizer)
		{
			$this->load->view('seller/seller_fertilizer_index',$select_fertilizer);
		}
		
		
	}
public function select_submenu_data_subtype($id)
	{
	     $id_data=explode("%20",$id);
		$data1=array("fertilizer_type_id"=>$id_data[1],"status"=>0);
		$status=array("status"=>0);
		$select_fertilizer["fertilizer_type"]=$this->seller_fertilizer_model->select_fertilizer_type();
		$select_fertilizer["fertilizer_data"]=$this->seller_fertilizer_model->select_fertilizer_detail_type1($id_data[0]);
		$select_fertilizer["classification_type"]=$this->seller_fertilizer_model->select_fertilizer_classification_type();
		$select_fertilizer["appearance_type"]=$this->seller_fertilizer_model->select_fertilizer_appearance_type();
		$select_fertilizer["origin_country"]=$this->seller_fertilizer_model->select_origin_country2();
		$select_fertilizer["fertilizer_subtype"]=$this->seller_fertilizer_model->select_fertilizer_sub_type($data1);
		$select_fertilizer["fertilizer_submenu"]=$this->seller_fertilizer_model->select_fertilizer_submenu_fertilizertype1($id_data[0]);
		//echo "<pre>";
		//print_r($select_fertilizer["fertilizer_submenu"]);
		//die();
		$select_fertilizer["select"]=$this->seller_fertilizer_model->select_fertilizer_type_data($id_data[1]);
		$select_fertilizer['select1']=$this->seller_fertilizer_model->select_fertilizer_type_data12($id_data[0]);
		$select_fertilizer['select2']="";
		if($select_fertilizer)
		{
			$this->load->view('seller/seller_fertilizer_index',$select_fertilizer);
		}
		
	}
public function select_submenu_data_subtype1($id)
	{
	     $id_data=explode("%20",$id);
		$data1=array("fertilizer_type_id"=>$id_data[1],"status"=>0);
		$data=array("fertilizer_submenu_id"=>$id_data[0],"status"=>0);
		$status=array("status"=>0);
		$select_fertilizer["fertilizer_type"]=$this->seller_fertilizer_model->select_fertilizer_type();
		$select_fertilizer["fertilizer_data"]=$this->seller_fertilizer_model->select_fertilizer_detail_type11($id_data[0]);
		$select_fertilizer["classification_type"]=$this->seller_fertilizer_model->select_fertilizer_classification_type();
		$select_fertilizer["appearance_type"]=$this->seller_fertilizer_model->select_fertilizer_appearance_type();
		$select_fertilizer["origin_country"]=$this->seller_fertilizer_model->select_origin_country2();
		$select_fertilizer["fertilizer_subtype"]=$this->seller_fertilizer_model->select_fertilizer_sub_type($status);
		$select_fertilizer["fertilizer_submenu"]=$this->seller_fertilizer_model->select_fertilizer_submenu_fertilizertype($id_data[1]);
		//echo "<pre>";
		//print_r($select_fertilizer["fertilizer_submenu"]);
		//die();
		$select_fertilizer["select"]=$this->seller_fertilizer_model->select_fertilizer_type_data($id_data[1]);
		$select_fertilizer['select1']="";
		$select_fertilizer['select2']=$this->seller_fertilizer_model->select_fertilizer_submenu_type($data);
		if($select_fertilizer)
		{
			$this->load->view('seller/seller_fertilizer_index',$select_fertilizer);
		}
		
	}
	public function seller_fertilizer_data()
	{
		$select_fertilizer_data["classification_type"]=$this->seller_fertilizer_model->select_classification_type();
		
		$select_fertilizer_data["appearance_type"]=$this->seller_fertilizer_model->select_appearance_type();
		
		$select_fertilizer_data["origin_country"]=$this->seller_fertilizer_model->select_origin_country();

		$this->load->view("seller/seller_fertilizer",$select_fertilizer_data);
		
	}
	public function fertilizer_add_data()
	{
			$this->session->set_userdata("fertilizer_submenu","");
			$this->session->set_userdata("fertilizer_subtype","");
		
		if($_POST["fertilizer_type"]!="")
		{
		$this->session->set_userdata("fertilizer_type",$_POST["fertilizer_type"]);
		}
		
		if($_POST["fertilizer_sub_type"]!="")
		{
		$this->session->set_userdata("fertilizer_subtype",$_POST["fertilizer_sub_type"]);
		
		}
		if($_POST["fertilizer_sub_menu_type"]!="")
		{
		$this->session->set_userdata("fertilizer_submenu",$_POST["fertilizer_sub_menu_type"]);
		}		
		redirect(base_url().'seller/seller_fertilizer/seller_fertilizer_data');
	}
	public function select_fertilizer_sub_type()
	{
		$data=array("fertilizer_type_id"=>$_POST['fertilizer_type_id'],"status"=>0);
		if($this->seller_fertilizer_model->select_fertilizer_sub_type($data))
		{
				$select_data=$this->seller_fertilizer_model->select_fertilizer_sub_type($data);
				$cnt=count($select_data);
				echo "<select tabindex='1' id='fertilizer_sub_type' name='fertilizer_sub_type' class='dropdown-menu' role='menu'>";
				echo "<option value='Select here..'>Select fertilizer Sub Type..</option>";
			for($i=0;$i<$cnt;$i++)
				{
			?><option value="<?php echo $select_data[$i]['fertilizer_subtype_id']?> "><?php echo $select_data[$i]['fertilizer_subtype_name']?></option>
			<?php
			}
													
			echo "</select>";
			//echo "<span class='help-inline' id='msgfertilizer_sub_type' style='float:right' ></span>";		
		}
		else
		{
		}
	}
	public function select_fertilizer_submenu_type()
	{
		$data=array("fertilizer_subtype_id"=>$_POST['fertilizer_subtype_id'],"status"=>0);
		
		if($select_data=$this->seller_fertilizer_model->select_fertilizer_submenu_type($data))
		{
				$cnt=count($select_data);
				
				echo "<select tabindex='1'  id='fertilizer_sub_menu_type' name='fertilizer_sub_menu_type' class='dropdown-menu' role='menu'>";
				echo "<option value='Select here..'>Select fertilizer Menu Type..</option>";
			for($i=0;$i<$cnt;$i++)
				{
			?><option value="<?php echo $select_data[$i]['fertilizer_submenu_id']?> "><?php echo $select_data[$i]['fertilizer_submenu_name']?></option>
			<?php
				}
													
			echo "</select>";
			//echo "<span class='help-inline' id='msgfertilizer_sub_menu_type' style='float:right' ></span>";	
		}
		else
		{ 
			
		}
	}
	
	public function seller_fertilizer_insert()
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
					$fertilizer_detail_id=random_string('alnum', 8);	
					if($this->session->userdata("fertilizer_submenu")=="")
					{
						 $fertilizer_data = array('fertilizer_detail_id'=>$fertilizer_detail_id,'seller_id'=>$this->session->userdata("seller_login_id"),'fertilizer_type_id'=>$this->session->userdata("fertilizer_type"),'fertilizer_subtype_id'=>$this->session->userdata("fertilizer_subtype"),'fertilizer_detail_name'=>$_POST['fertilizer_data_name'],'fertilizer_price'=>$_POST['fertilizer_price'],'fertilizer_price_type'=>$_POST['fertilizer_price_type'],'fertilizer_total_qty'=>$_POST['fertilizer_total_qty'],'fertilizer_min_order'=>$_POST['fertilizer_min_order'],'model_no'=>$_POST['model_no'],'classification'=>$_POST['classification'],'appearance'=>$_POST['appearance'],'payment_terms'=>$payment,'trade_terms'=>$trade,'origin_country'=>$_POST['origin_country'],'hs_code'=>$_POST['hs_code'],'description'=>$_POST['description']);
				
						$this->session->set_userdata("fertilizer_type","");
					}
					else
					{
						 $fertilizer_data = array('fertilizer_detail_id'=>$fertilizer_detail_id,'seller_id'=>$this->session->userdata("seller_login_id"),'fertilizer_type_id'=>$this->session->userdata("fertilizer_type"),'fertilizer_subtype_id'=>$this->session->userdata("fertilizer_subtype"),'fertilizer_submenu_id'=>$this->session->userdata("fertilizer_submenu"),'fertilizer_detail_name'=>$_POST['fertilizer_data_name'],'fertilizer_price'=>$_POST['fertilizer_price'],'fertilizer_price_type'=>$_POST['fertilizer_price_type'],'fertilizer_total_qty'=>$_POST['fertilizer_total_qty'],'fertilizer_min_order'=>$_POST['fertilizer_min_order'],'model_no'=>$_POST['model_no'],'classification'=>$_POST['classification'],'appearance'=>$_POST['appearance'],'payment_terms'=>$payment,'trade_terms'=>$trade,'origin_country'=>$_POST['origin_country'],'hs_code'=>$_POST['hs_code'],'description'=>$_POST['description']);
						/*echo "<pre>";
		print_r( $fertilizer_data);
		die();*/
		$this->session->set_userdata("fertilizer_type","");
					}
					/*echo "<pre>";
					print_r($fertilizer_data);
					die();*/
			$result_fertilizer=$this->seller_fertilizer_model->seller_fertilizer_insert($fertilizer_data);
			
				$config["upload_path"]="image/fertilizer_image/";
				$config['allowed_types']= 'gif|jpg|png';
					/*echo "<pre>";
					print_r($_FILES);
					die();*/
					
				// fertilizer Image Insert.......
				$this->upload->initialize($config);
				$count_file=count($_FILES['fertilizer_images']['name']);
			
				for($i=0;$i<$count_file;$i++)
				{
				
					$_FILES['newimg']['name']=$_FILES['fertilizer_images']['name'][$i];
					$_FILES['newimg']['tmp_name']=$_FILES['fertilizer_images']['tmp_name'][$i];
					$_FILES['newimg']['type']=$_FILES['fertilizer_images']['type'][$i];
					$_FILES['newimg']['size']=$_FILES['fertilizer_images']['size'][$i];
					//echo "<pre>";
					//echo $_FILES['fertilizer_images']['name'][$i];
					//print_r($_FILES);
					//die();
					if(!$this->upload->do_upload('newimg'))
					{
					$this->session->set_flashdata("seller_fertilizer_image_error","Something Wrong In Insert fertilizer Image Please Try Again..........");
					redirect(base_url()."seller/seller_fertilizer");
									
					}
					else
					{
						$image_name="fertilizer_image/".$_FILES['newimg']['name'];
						$img=array("image_id"=>random_string('alnum', 8),"fertilizer_detail_id"=>$fertilizer_detail_id,"image_name"=>$image_name);
						$result_image=$this->seller_fertilizer_model->insert_fertilizer_image($img);
						
					}
				}
				//Insert fertilizer...............
				
			if($result_image!=TRUE)
			{			
				$this->session->set_flashdata("seller_fertilizer_error","fertilizer Image Insert Error..........");
				redirect(base_url()."seller/seller_fertilizer");
			}
			elseif($result_fertilizer==TRUE and $result_image==TRUE)
			{			
				$this->session->set_flashdata("seller_fertilizer_add","fertilizer Insert Success..........");
				redirect(base_url()."seller/seller_fertilizer");
			}
			elseif($result_fertilizer!=TRUE and $result_image!=TRUE)
			{
				//error code of insert.....
				$this->session->set_flashdata("seller_fertilizer_add_error","Something Wrong In Insert fertilizer..........");
							$this->load->view("seller/seller_fertilizer");
			}
			else
			{
				$this->session->set_flashdata("seller_fertilizer_add_error","Something Wrong In Insert fertilizer..........");
							$this->load->view("seller/seller_fertilizer");
			}
	}
	
	public function seller_fertilizer_trash()
	{
		$select_fertilizer["classification_type"]=$this->seller_fertilizer_model->select_fertilizer_classification_type();
		$select_fertilizer["origin_country"]=$this->seller_fertilizer_model->select_origin_country2();
		$select_fertilizer["appearance_type"]=$this->seller_fertilizer_model->select_fertilizer_appearance_type();
		$select_fertilizer["fertilizer_data"]=$this->seller_fertilizer_model->select_fertilizer_detail_trash();
		$this->load->view('seller/seller_fertilizer_trash',$select_fertilizer);
	}
public function seller_fertilizer_trash_backup($fertilizer_detail_id)
	{
		$id=array("fertilizer_detail_id"=>$fertilizer_detail_id);
		$status=array("status"=>0);
		if($this->seller_fertilizer_model->fertilizer_trash_backup($id,$status))
		{
			$this->session->set_flashdata("seller_fertilizer_add","fertilizer Back Up Success..........");
			redirect(base_url()."seller/seller_fertilizer/seller_fertilizer_trash");
		}
		else
		{
			$this->session->set_flashdata("seller_fertilizer_add_error","Something Wrong..........");
			redirect(base_url()."seller/seller_fertilizer/seller_fertilizer_trash");
			
		}
		
	}
	public function seller_fertilizer_trash_delete($fertilizer_detail_id)
	{
		$id=array("fertilizer_detail_id"=>$fertilizer_detail_id);
		if($this->seller_fertilizer_model->fertilizer_trash_delete($id))
		{
			$this->session->set_flashdata("seller_fertilizer_add","fertilizer Delete Success..........");
			redirect(base_url()."seller/seller_fertilizer/seller_fertilizer_trash");
		}
		else
		{
			$this->session->set_flashdata("seller_fertilizer_add_error","Something Wrong..........");
			redirect(base_url()."seller/seller_fertilizer/seller_fertilizer_trash");
			
		}
		
	}
	public function seller_fertilizer_backup($fertilizer_detail_id)
	{
		$id=array("fertilizer_detail_id"=>$fertilizer_detail_id);
		$status=array("status"=>1);
		if($this->seller_fertilizer_model->fertilizer_back($id,$status))
		{
			$this->session->set_flashdata("seller_fertilizer_add","fertilizer Delete Success..........");
			redirect(base_url()."seller/seller_fertilizer");
		}
		else
		{
			$this->session->set_flashdata("seller_fertilizer_add_error","Something Wrong on Delete fertilizer..........");
			redirect(base_url()."seller/seller_fertilizer");
			
		}
		
	}


	public function seller_fertilizer_data_update($fertilizer_detail_id="")
	{
		
		if(isset($fertilizer_detail_id) && $fertilizer_detail_id =="")
		{
			
			echo "<h3 style='color:red'>You Have no Permission to access this page.</h3>";
			die();
		}else
		{
		$id=array("fertilizer_detail_id"=>$fertilizer_detail_id);
		
		$select_fertilizer_data["select_update_data"]=$this->seller_fertilizer_model->update_fertilizer_data_select($id);
		//echo "<pre>";
		//print_r($select_fertilizer_data["select_update_data"]);
		//die();
		$subtype=array("fertilizer_type_id"=>$select_fertilizer_data["select_update_data"][0]["fertilizer_type_id"]);
		$subtype1=array("fertilizer_subtype_id"=>$select_fertilizer_data["select_update_data"][0]["fertilizer_subtype_id"]);
		$select_fertilizer_data["fertilizer_type"]=$this->seller_fertilizer_model->select_fertilizer_type();
		$select_fertilizer_data["fertilizer_sub_type"]=$this->seller_fertilizer_model->select_fertilizer_sub_type( $subtype);
		$select_fertilizer_data["fertilizer_submenu"]=$this->seller_fertilizer_model->select_fertilizer_submenu_type($subtype1);
		//echo "<pre>";
		//print_r($select_fertilizer_data["select_update_data"]);
		//die();
		//$select_fertilizer_data["fertilizer_data"]=$this->seller_fertilizer_model->select_fertilizer_detail();
		$select_fertilizer_data["classification_type"]=$this->seller_fertilizer_model->select_fertilizer_classification_type();
		$select_fertilizer_data["appearance_type"]=$this->seller_fertilizer_model->select_fertilizer_appearance_type();
		$select_fertilizer_data["origin_country"]=$this->seller_fertilizer_model->select_origin_country();
		//echo "<pre>";
		//print_r($select_fertilizer_data["image"]);
		//die();
		if($select_fertilizer_data["select_update_data"])
		{
		$this->load->view("seller/seller_fertilizer_update",$select_fertilizer_data);
		}
		else
		{
			echo "<h3 style='color:red'>No Record Found.</h3>";
			die();
		}
		}
		
	}	
	public function seller_fertilizer_display($fertilizer_detail_id="")
	{
		if(isset($fertilizer_detail_id) && $fertilizer_detail_id =="")
		{
			
			echo "<h3 style='color:red'>You Have no Permission to access this page.</h3>";
			die();
		}else
		{
		$id=array("fertilizer_detail_id"=>$fertilizer_detail_id);
		
		$select_fertilizer_data["select_update_data"]=$this->seller_fertilizer_model->update_fertilizer_data_select($id);
		//echo "<pre>";
		//print_r($select_fertilizer_data["select_update_data"]);
		//die();
		$subtype=array("fertilizer_type_id"=>$select_fertilizer_data["select_update_data"][0]["fertilizer_type_id"]);
		$subtype1=array("fertilizer_subtype_id"=>$select_fertilizer_data["select_update_data"][0]["fertilizer_subtype_id"]);
		$select_fertilizer_data["fertilizer_type"]=$this->seller_fertilizer_model->select_fertilizer_type();
		$select_fertilizer_data["fertilizer_sub_type"]=$this->seller_fertilizer_model->select_fertilizer_sub_type($subtype);
		$select_fertilizer_data["fertilizer_submenu"]=$this->seller_fertilizer_model->select_fertilizer_submenu_type($subtype1);
//echo "<pre>";
		//print_r($select_fertilizer_data["select_update_data"]);
		//die();
		//$select_fertilizer_data["fertilizer_data"]=$this->seller_fertilizer_model->select_fertilizer_detail();
		$select_fertilizer_data["classification_type"]=$this->seller_fertilizer_model->select_fertilizer_classification_type();
		$select_fertilizer_data["appearance_type"]=$this->seller_fertilizer_model->select_fertilizer_appearance_type();
		$select_fertilizer_data["origin_country"]=$this->seller_fertilizer_model->select_origin_country();
		//echo "<pre>";
		//print_r($select_fertilizer_data["image"]);
		//die();
		if($select_fertilizer_data["select_update_data"])
		{
		$this->load->view("seller/seller_fertilizer_display",$select_fertilizer_data);
		}
		else
		{
			echo "<h3 style='color:red'>No Record Found.</h3>";
			die();
		}
		}
		
		
	}	
	public function seller_fertilizer_data_update_image($fertilizer_detail_id="")
	{
		if(isset($fertilizer_detail_id) && $fertilizer_detail_id =="")
		{
			
			echo "<h3 style='color:red'>You Have no Permission to access this page.</h3>";
			die();
		}
		else
		{
		$id=array("fertilizer_detail_id"=>$fertilizer_detail_id);
		$select_fertilizer_data["image"]=$this->seller_fertilizer_model->select_image($id);
		//echo "<pre>";
		//print_r($select_fertilizer_data["image"]);
		//die();
		$select_fertilizer_data["fertilizer_detail_id"]=array("fertilizer_detail_id"=>$fertilizer_detail_id);
	if(count($select_fertilizer_data["image"])!=0)
	{
		$this->load->view("seller/seller_fertilizer_update_image",$select_fertilizer_data);
		}
		else
		{
			echo "<h3 style='color:red'>No Record Found.</h3>";
			die();
		}
		}
		
		
	}	
	public function fertilizer_image_delete($image_id,$old_fertilizer_images_name,$fertilizer_detail_id)
	{
		$id=array("image_id"=>$image_id);
		if($this->seller_fertilizer_model->delete_fertilizer_image($id))
		{
		
		unlink("image/".$old_fertilizer_images_name);
		$id1=array("fertilizer_detail_id"=>$fertilizer_detail_id);
		$select_fertilizer_data["image_all"]=$this->seller_fertilizer_model->select_image($id1);
	//	echo count($select_fertilizer_data["image_all"]);die();
		if(count($select_fertilizer_data["image_all"])>=0 )
			{
				redirect(base_url()."seller/seller_fertilizer/seller_fertilizer_data_update_image/".$fertilizer_detail_id);
			}
		else
			{
				redirect(base_url()."seller/seller_fertilizer");
			}
		}
		else
		{
			$this->session->set_flashdata("seller_fertilizer_image_error","Something Wrong In Delete fertilizer Image Please Try Again..........");
			redirect(base_url()."seller/seller_fertilizer/seller_fertilizer_data_update_image/".$select_fertilizer_data["image_all"][0]["fertilizer_detail_id"]);
		}
		
		
	}	
	public function add_image()
	{
		$config["upload_path"]="image/fertilizer_image/";
				$config['allowed_types']= 'gif|jpg|png';
					
					
				// fertilizer Image Insert.......
				$this->upload->initialize($config);
				$count_file=count($_FILES['fertilizer_images']['name']);
			
				for($i=0;$i<$count_file;$i++)
				{
				
					$_FILES['newimg']['name']=$_FILES['fertilizer_images']['name'][$i];
					$_FILES['newimg']['tmp_name']=$_FILES['fertilizer_images']['tmp_name'][$i];
					$_FILES['newimg']['type']=$_FILES['fertilizer_images']['type'][$i];
					$_FILES['newimg']['size']=$_FILES['fertilizer_images']['size'][$i];
					/*echo "<pre>";
					echo $_FILES['newimg']['name'];
					//print_r($_FILES);
					die();*/
					if(!$this->upload->do_upload('newimg'))
					{
					$this->session->set_flashdata("seller_fertilizer_image_error","Something Wrong In Insert fertilizer Image Please Try Again..........");
					redirect(base_url()."seller/seller_fertilizer");
									
					}
					else
					{
						$image_name="fertilizer_image/".$_FILES['newimg']['name'];
						$img=array("image_id"=>random_string('alnum', 8),"image_name"=>$image_name,"fertilizer_detail_id"=>$_POST["fertilizer_detail_id"]);
						$result_image=$this->seller_fertilizer_model->insert_fertilizer_image($img);
						
					}
				}
			if($result_image)
			{
				redirect(base_url()."seller/seller_fertilizer/seller_fertilizer_data_update_image/".$_POST["fertilizer_detail_id"]);
			}
			
			
		
	}	
	public function fertilizer_image_update()
	{
		//echo "xfdd";
		//die();
		$id=array("image_id"=>$_POST["fertilizer_images_id"]);
		//$name=array("image_name"=>$_POST["fertilizer_images"]);
		//echo "<pre>";
		//print_r($_POST["old_fertilizer_images_id"]);
		//die();
		if($_FILES['fertilizer_images']['name']!="")
		{
		$config['upload_path']= 'image/fertilizer_image/';
		$config['allowed_types']= 'gif|jpg|png';
		$this->upload->initialize($config);
		$seller_profile="";	
		if ($this->upload->do_upload('fertilizer_images'))
								{
									
								$fname ="fertilizer_image/".$_FILES['fertilizer_images']['name'];
								$name=array("image_name"=>$fname);
								//$seller_profile=array("image_id"=>random_string('alnum', 8),"seller_id"=>$seller_id,"image_name"=>$fname);
								$select_fertilizer_data["image_update"]=$this->seller_fertilizer_model->update_image($id,$name);
								
								unlink("image/".$_POST["old_fertilizer_images_id"]);
								}
		}
		$select_fertilizer_data["image"]=$this->seller_fertilizer_model->select_image($id);
		redirect(base_url()."seller/seller_fertilizer/seller_fertilizer_data_update_image/".$select_fertilizer_data["image"][0]["fertilizer_detail_id"]);
		
	}	
	public function seller_fertilizer_update()
	{
		//echo "<pre>";
		//print_r($_POST);
		//die();
		$id=array("fertilizer_detail_id"=>$_POST["fertilizer_detail_id"]);
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
				//Insert fertilizer...............
				
			/*	echo "<pre>";
					print_r($_POST);
					die();*/
				if(isset($_POST["fertilizer_sub_menu_type"]))
					{
						$fertilizer_data = array('seller_id'=>$_POST["seller_id"],'fertilizer_type_id'=>$_POST["fertilizer_type"],'fertilizer_subtype_id'=>$_POST["fertilizer_sub_type"],'fertilizer_submenu_id'=>$_POST["fertilizer_sub_menu_type"],'fertilizer_detail_name'=>$_POST['fertilizer_data_name'],'fertilizer_price'=>$_POST['fertilizer_price'],'fertilizer_price_type'=>$_POST['fertilizer_price_type'],'fertilizer_total_qty'=>$_POST['fertilizer_total_qty'],'fertilizer_min_order'=>$_POST['fertilizer_min_order'],'model_no'=>$_POST['model_no'],'classification'=>$_POST['classification'],'appearance'=>$_POST['appearance'],'payment_terms'=>$payment,'trade_terms'=>$trade,'origin_country'=>$_POST['origin_country'],'hs_code'=>$_POST['hs_code'],'description'=>$_POST['description']);
						
						
					//echo "<pre>";
		//print_r($fertilizer_data);
		//die();
					}
					else
					{
						
					$fertilizer_data = array('seller_id'=>$_POST["seller_id"],'fertilizer_type_id'=>$_POST["fertilizer_type"],'fertilizer_subtype_id'=>$_POST["fertilizer_sub_type"],'fertilizer_submenu_id'=>NULL,'fertilizer_detail_name'=>$_POST['fertilizer_data_name'],'fertilizer_price'=>$_POST['fertilizer_price'],'fertilizer_price_type'=>$_POST['fertilizer_price_type'],'fertilizer_total_qty'=>$_POST['fertilizer_total_qty'],'fertilizer_min_order'=>$_POST['fertilizer_min_order'],'model_no'=>$_POST['model_no'],'classification'=>$_POST['classification'],'appearance'=>$_POST['appearance'],'payment_terms'=>$payment,'trade_terms'=>$trade,'origin_country'=>$_POST['origin_country'],'hs_code'=>$_POST['hs_code'],'description'=>$_POST['description']);
					}
					/*echo "<pre>";
					print_r($fertilizer_data);
					die();*/
					
			$result_fertilizer=$this->seller_fertilizer_model->seller_fertilizer_update($fertilizer_data,$id);
			if($result_fertilizer==TRUE )
			{			
				$this->session->set_flashdata("seller_fertilizer_add","fertilizer update Success..........");
				redirect(base_url()."seller/seller_fertilizer");
			}
			else
			{
				//error code of insert.....
				$this->session->set_flashdata("seller_fertilizer_add_error","Something Wrong In Insert fertilizer..........");
							$this->load->view("seller/seller_fertilizer");
			}
		
	}
	
	
}
 