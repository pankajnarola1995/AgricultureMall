	<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Seller_tools extends CI_Controller {

	 public function __construct()
       {
              // Call the CI_Model constructor
              parent::__construct();
			$this->load->model("seller/seller_tools_model");
        }
	public function index()
	{
		$status=array("status"=>0);
		$select_tools["tools_type"]=$this->seller_tools_model->select_tools_type();
		$select_tools["tools_data"]=$this->seller_tools_model->select_tools_detail();
		$select_tools["origin_country"]=$this->seller_tools_model->select_origin_country2();
		$select_tools["tools_subtype"]=$this->seller_tools_model->select_tools_sub_type($status);
		$select_tools["select"]="";
		$select_tools['select1']="";;
		$id=array("seller_id"=>$this->session->userdata("seller_login_id"));	
				$seller_pic=$this->seller_tools_model->select_seller_image($id);
				/*echo "<pre>";
				print_r($seller_pic);
				die();*/
				$this->session->set_userdata("seller_pic",$seller_pic[0]['image_name']);
		$this->load->view('seller/seller_tools_index',$select_tools);
		
	}
	public function select_subtype_data_menu($id)
	{
		$data=array("tools_type_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_tools["tools_type"]=$this->seller_tools_model->select_tools_type();
		$select_tools["tools_data"]=$this->seller_tools_model->select_tools_detail_type($id);
		$select_tools["origin_country"]=$this->seller_tools_model->select_origin_country2();
		$select_tools["tools_subtype"]=$this->seller_tools_model->select_tools_sub_type($data);
		$select_tools["select"]=$this->seller_tools_model->select_tools_type_data($id);
		$select_tools['select1']="";
	
		//echo "<pre>";
		//print_r($select_data['select']);
		//die();
		if($select_tools)
		{
			$this->load->view('seller/seller_tools_index',$select_tools);
		}
	}
	public function select_tools_type_menu($id)
	{
		$data1=array("tools_subtype_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_tools["tools_type"]=$this->seller_tools_model->select_tools_type();
		$select_tools["tools_data"]=$this->seller_tools_model->select_tools_detail_type1($id);
		//$select_tools["cultivation_type"]=$this->seller_tools_model->select_tools_cultivation_type();
		$select_tools["origin_country"]=$this->seller_tools_model->select_origin_country2();
		$select_tools["tools_subtype"]=$this->seller_tools_model->select_tools_sub_type($status);
		//$select_tools["tools_submenu"]=$this->seller_tools_model->select_tools_submenu_toolstype1($id);
		//echo "<pre>";
		//print_r($select_tools["tools_submenu"]);
		//die();
		$select_tools["select"]="";
		$select_tools['select1']=$this->seller_tools_model->select_tools_type_data12($id);
		//$select_tools['select2']="";
		if($select_tools)
		{
			$this->load->view('seller/seller_tools_index',$select_tools);
		}
		
		
	}
public function select_submenu_data_subtype($id)
	{
	     $id_data=explode("%20",$id);
		$data1=array("tools_type_id"=>$id_data[1],"status"=>0);
		$status=array("status"=>0);
		$select_tools["tools_type"]=$this->seller_tools_model->select_tools_type();
		$select_tools["tools_data"]=$this->seller_tools_model->select_tools_detail_type1($id_data[0]);
		//$select_tools["cultivation_type"]=$this->seller_tools_model->select_tools_cultivation_type();
		$select_tools["origin_country"]=$this->seller_tools_model->select_origin_country2();
		$select_tools["tools_subtype"]=$this->seller_tools_model->select_tools_sub_type($data1);
		//$select_tools["tools_submenu"]=$this->seller_tools_model->select_tools_submenu_toolstype1($id_data[0]);
		//echo "<pre>";
		//print_r($select_tools["tools_submenu"]);
		//die();
		$select_tools["select"]=$this->seller_tools_model->select_tools_type_data($id_data[1]);
		$select_tools['select1']=$this->seller_tools_model->select_tools_type_data12($id_data[0]);
		//$select_tools['select2']="";
		if($select_tools)
		{
			$this->load->view('seller/seller_tools_index',$select_tools);
		}
		
	}
	public function seller_tools_data()
	{
		//$select_tools_data["cultivation_type"]=$this->seller_tools_model->select_cultivation_type();
		//$select_tools_data["power_type"]=$this->seller_tools_model->select_power_type();
		$select_tools_data["drive"]=$this->seller_tools_model->select_drive();
		$select_tools_data["fuel"]=$this->seller_tools_model->select_fuel();
		$select_tools_data["tools_detail_type_id"]=$this->seller_tools_model->select_tools_type_detail();
		$select_tools_data["engine_type"]=$this->seller_tools_model->select_engine_type();
		$select_tools_data["color"]=$this->seller_tools_model->select_color();
		$select_tools_data["origin_country"]=$this->seller_tools_model->select_origin_country();

		$this->load->view("seller/seller_tools",$select_tools_data);
		
	}
	public function tools_add_data()
	{
			$this->session->set_userdata("tools_subtype","");
		
		if($_POST["tools_type"]!="")
		{
		$this->session->set_userdata("tools_type",$_POST["tools_type"]);
		}
		
		if($_POST["tools_sub_type"]!="")
		{
		$this->session->set_userdata("tools_subtype",$_POST["tools_sub_type"]);
		
		}		
		redirect(base_url().'seller/seller_tools/seller_tools_data');
	}
	public function select_tools_sub_type()
	{
		$data=array("tools_type_id"=>$_POST['tools_type_id'],"status"=>0);
		if($this->seller_tools_model->select_tools_sub_type($data))
		{
				$select_data=$this->seller_tools_model->select_tools_sub_type($data);
				$cnt=count($select_data);
				echo "<select tabindex='1' id='tools_sub_type' name='tools_sub_type' class='dropdown-menu' role='menu'>";
				echo "<option value='Select here..'>Select Tools Sub Type..</option>";
			for($i=0;$i<$cnt;$i++)
				{
			?><option value="<?php echo $select_data[$i]['tools_subtype_id']?> "><?php echo $select_data[$i]['tools_subtype_name']?></option>
			<?php
			}
													
			echo "</select>";
			//echo "<span class='help-inline' id='msgtools_sub_type' style='float:right' ></span>";		
		}
		else
		{
		}
	}
	
	public function seller_tools_insert()
	{		
							
					//add code on that .................	
					$tools_detail_id=random_string('alnum', 8);	
					
						$tools_data=array('tools_detail_id'=>$tools_detail_id,'seller_id'=>$this->session->userdata("seller_login_id"),'tools_type_id'=>$this->session->userdata("tools_type"),'tools_subtype_id'=>$this->session->userdata("tools_subtype"),
										'tools_detail_name'=>$_POST['tools_name'],
										'tools_price'=>$_POST['price'],
										'tools_detail_type_id'=>$_POST['type'],'tools_uses'=>$_POST['uses'],
										'tools_total_qty'=>$_POST['total_qty'],'model_no'=>$_POST['model_no'],
										'origin_country'=>$_POST['origin_country'],'color_id'=>$_POST['color'],
										'tools_fuel_id'=>$_POST['fuel'],'tools_drive_id'=>$_POST['drive'],
										'tools_shipping_weight'=>$_POST['shipping_weight'],
										'tools_engine_id'=>$_POST['engine_type'],'tools_weight'=>$_POST['weight'],
										'tools_material'=>$_POST['material'],
										'tools_eye_shape'=>$_POST['eye_shape'],
										'tools_package_detail'=>$_POST['package_detail'],
										'description'=>$_POST['description']);
						$this->session->set_userdata("tools_type","");
					/*echo "<pre>";
					print_r($tools_data);
					die();*/
			$result_tools=$this->seller_tools_model->seller_tools_insert($tools_data);
			
				$config["upload_path"]="image/tools_image/";
				$config['allowed_types']= 'gif|jpg|png';
					/*echo "<pre>";
					print_r($_FILES);
					die();*/
					
				// tools Image Insert.......
				$this->upload->initialize($config);
				$count_file=count($_FILES['tools_images']['name']);
			
				for($i=0;$i<$count_file;$i++)
				{
				
					$_FILES['newimg']['name']=$_FILES['tools_images']['name'][$i];
					$_FILES['newimg']['tmp_name']=$_FILES['tools_images']['tmp_name'][$i];
					$_FILES['newimg']['type']=$_FILES['tools_images']['type'][$i];
					$_FILES['newimg']['size']=$_FILES['tools_images']['size'][$i];
					/*echo "<pre>";
					echo $_FILES['newimg']['name'];
					//print_r($_FILES);
					die();*/
					if(!$this->upload->do_upload('newimg'))
					{
					$this->session->set_flashdata("seller_tools_image_error","Something Wrong In Insert tools Image Please Try Again..........");
					redirect(base_url()."seller/seller_tools");
									
					}
					else
					{
						$image_name="tools_image/".$_FILES['newimg']['name'];
						$img=array("image_id"=>random_string('alnum', 8),"tools_detail_id"=>$tools_detail_id,"image_name"=>$image_name);
						$result_image=$this->seller_tools_model->insert_tools_image($img);
						
					}
				}
				//Insert tools...............
				
			if($result_image!=TRUE)
			{			
				$this->session->set_flashdata("seller_tools_error","tools Image Insert Error..........");
				redirect(base_url()."seller/seller_tools");
			}
			elseif($result_tools==TRUE and $result_image==TRUE)
			{			
				$this->session->set_flashdata("seller_tools_add","tools Insert Success..........");
				redirect(base_url()."seller/seller_tools");
			}
			elseif($result_tools!=TRUE and $result_image!=TRUE)
			{
				//error code of insert.....
				$this->session->set_flashdata("seller_tools_add_error","Something Wrong In Insert tools..........");
							$this->load->view("seller/seller_tools");
			}
			else
			{
				$this->session->set_flashdata("seller_tools_add_error","Something Wrong In Insert tools..........");
							$this->load->view("seller/seller_tools");
			}
	}
	
	public function seller_tools_trash()
	{
		//$select_tools["cultivation_type"]=$this->seller_tools_model->select_tools_cultivation_type();
		$select_tools["origin_country"]=$this->seller_tools_model->select_origin_country2();
		$select_tools["tools_data"]=$this->seller_tools_model->select_tools_detail_trash();
		$this->load->view('seller/seller_tools_trash',$select_tools);
	}
public function seller_tools_trash_backup($tools_detail_id)
	{
		$id=array("tools_detail_id"=>$tools_detail_id);
		$status=array("status"=>0);
		if($this->seller_tools_model->tools_trash_backup($id,$status))
		{
			$this->session->set_flashdata("seller_tools_add","tools Back Up Success..........");
			redirect(base_url()."seller/seller_tools/seller_tools_trash");
		}
		else
		{
			$this->session->set_flashdata("seller_tools_add_error","Something Wrong..........");
			redirect(base_url()."seller/seller_tools/seller_tools_trash");
			
		}
		
	}
	public function seller_tools_trash_delete($tools_detail_id)
	{
		$id=array("tools_detail_id"=>$tools_detail_id);
		if($this->seller_tools_model->tools_trash_delete($id))
		{
			$this->session->set_flashdata("seller_tools_add","Tools Delete Success..........");
			redirect(base_url()."seller/seller_tools/seller_tools_trash");
		}
		else
		{
			$this->session->set_flashdata("seller_tools_add_error","Something Wrong..........");
			redirect(base_url()."seller/seller_tools/seller_tools_trash");
			
		}
		
	}
	public function seller_tools_backup($tools_detail_id)
	{
		$id=array("tools_detail_id"=>$tools_detail_id);
		$status=array("status"=>1);
		if($this->seller_tools_model->tools_back($id,$status))
		{
			$this->session->set_flashdata("seller_tools_add","Tools Delete Success..........");
			redirect(base_url()."seller/seller_tools");
		}
		else
		{
			$this->session->set_flashdata("seller_tools_add_error","Something Wrong on Delete tools..........");
			redirect(base_url()."seller/seller_tools");
			
		}
		
	}


	public function seller_tools_data_update($tools_detail_id="")
	{
		
		if(isset($tools_detail_id) && $tools_detail_id =="")
		{
			
			echo "<h3 style='color:red'>You Have no Permission to access this page.</h3>";
			die();
		}else
		{
		$id=array("tools_detail_id"=>$tools_detail_id);
		
		$select_tools_data["select_update_data"]=$this->seller_tools_model->update_tools_data_select($id);
		//echo "<pre>";
		//print_r($select_tools_data["select_update_data"]);
		//die();
		$subtype=array("tools_type_id"=>$select_tools_data["select_update_data"][0]["tools_type_id"]);
		$subtype1=array("tools_subtype_id"=>$select_tools_data["select_update_data"][0]["tools_subtype_id"]);
		$select_tools_data["tools_type"]=$this->seller_tools_model->select_tools_type();
		$select_tools_data["tools_sub_type"]=$this->seller_tools_model->select_tools_sub_type( $subtype);
		$select_tools_data["drive"]=$this->seller_tools_model->select_drive();
		$select_tools_data["fuel"]=$this->seller_tools_model->select_fuel();
		$select_tools_data["tools_detail_type_id"]=$this->seller_tools_model->select_tools_type_detail();
		$select_tools_data["engine_type"]=$this->seller_tools_model->select_engine_type();
		$select_tools_data["color"]=$this->seller_tools_model->select_color();
		$select_tools_data["origin_country"]=$this->seller_tools_model->select_origin_country();
		//echo "<pre>";
		//print_r($select_tools_data["image"]);
		//die();
		if($select_tools_data["select_update_data"])
		{
		$this->load->view("seller/seller_tools_update",$select_tools_data);
		}
		else
		{
			echo "<h3 style='color:red'>No Record Found.</h3>";
			die();
		}
		}
		
	}	
	public function seller_tools_display($tools_detail_id="")
	{
		if(isset($tools_detail_id) && $tools_detail_id =="")
		{
			
			echo "<h3 style='color:red'>You Have no Permission to access this page.</h3>";
			die();
		}else
		{
		$id=array("tools_detail_id"=>$tools_detail_id);
		
		$select_tools_data["select_update_data"]=$this->seller_tools_model->update_tools_data_select($id);
		//echo "<pre>";
		//print_r($select_tools_data["select_update_data"]);
		//die();
		$subtype=array("tools_type_id"=>$select_tools_data["select_update_data"][0]["tools_type_id"]);
		$subtype1=array("tools_subtype_id"=>$select_tools_data["select_update_data"][0]["tools_subtype_id"]);
		$select_tools_data["tools_type"]=$this->seller_tools_model->select_tools_type();
		$select_tools_data["tools_sub_type"]=$this->seller_tools_model->select_tools_sub_type($subtype);
		$select_tools_data["drive"]=$this->seller_tools_model->select_drive();
		$select_tools_data["fuel"]=$this->seller_tools_model->select_fuel();
		$select_tools_data["tools_detail_type_id"]=$this->seller_tools_model->select_tools_type_detail();
		$select_tools_data["engine_type"]=$this->seller_tools_model->select_engine_type();
		$select_tools_data["color"]=$this->seller_tools_model->select_color();
		$select_tools_data["origin_country"]=$this->seller_tools_model->select_origin_country();
		//echo "<pre>";
		//print_r($select_tools_data["image"]);
		//die();
		if($select_tools_data["select_update_data"])
		{
		$this->load->view("seller/seller_tools_display",$select_tools_data);
		}
		else
		{
			echo "<h3 style='color:red'>No Record Found.</h3>";
			die();
		}
		}
		
		
	}	
	public function seller_tools_data_update_image($tools_detail_id="")
	{
		if(isset($tools_detail_id) && $tools_detail_id =="")
		{
			
			echo "<h3 style='color:red'>You Have no Permission to access this page.</h3>";
			die();
		}
		else
		{
		$id=array("tools_detail_id"=>$tools_detail_id);
		$select_tools_data["image"]=$this->seller_tools_model->select_image($id);
		//echo "<pre>";
		//print_r($select_tools_data["image"]);
		//die();
		$select_tools_data["tools_detail_id"]=array("tools_detail_id"=>$tools_detail_id);
	if(count($select_tools_data["image"])!=0)
	{
		$this->load->view("seller/seller_tools_update_image",$select_tools_data);
		}
		else
		{
			echo "<h3 style='color:red'>No Record Found.</h3>";
			die();
		}
		}
		
		
	}	
	public function tools_image_delete($image_id,$old_tools_images_name,$tools_detail_id)
	{
		$id=array("image_id"=>$image_id);
		if($this->seller_tools_model->delete_tools_image($id))
		{
		
		unlink("image/".$old_tools_images_name);
		$id1=array("tools_detail_id"=>$tools_detail_id);
		$select_tools_data["image_all"]=$this->seller_tools_model->select_image($id1);
	//	echo count($select_tools_data["image_all"]);die();
		if(count($select_tools_data["image_all"])>=0 )
			{
				redirect(base_url()."seller/seller_tools/seller_tools_data_update_image/".$tools_detail_id);
			}
		else
			{
				redirect(base_url()."seller/seller_tools");
			}
		}
		else
		{
			$this->session->set_flashdata("seller_tools_image_error","Something Wrong In Delete tools Image Please Try Again..........");
			redirect(base_url()."seller/seller_tools/seller_tools_data_update_image/".$select_tools_data["image_all"][0]["tools_detail_id"]);
		}
		
		
	}	
	public function add_image()
	{
		$config["upload_path"]="image/tools_image/";
				$config['allowed_types']= 'gif|jpg|png';
					
					
				// tools Image Insert.......
				$this->upload->initialize($config);
				$count_file=count($_FILES['tools_images']['name']);
			
				for($i=0;$i<$count_file;$i++)
				{
				
					$_FILES['newimg']['name']=$_FILES['tools_images']['name'][$i];
					$_FILES['newimg']['tmp_name']=$_FILES['tools_images']['tmp_name'][$i];
					$_FILES['newimg']['type']=$_FILES['tools_images']['type'][$i];
					$_FILES['newimg']['size']=$_FILES['tools_images']['size'][$i];
					/*echo "<pre>";
					echo $_FILES['newimg']['name'];
					//print_r($_FILES);
					die();*/
					if(!$this->upload->do_upload('newimg'))
					{
					$this->session->set_flashdata("seller_tools_image_error","Something Wrong In Insert tools Image Please Try Again..........");
					redirect(base_url()."seller/seller_tools");
									
					}
					else
					{
						$image_name="tools_image/".$_FILES['newimg']['name'];
						$img=array("image_id"=>random_string('alnum', 8),"image_name"=>$image_name,"tools_detail_id"=>$_POST["tools_detail_id"]);
						$result_image=$this->seller_tools_model->insert_tools_image($img);
						
					}
				}
			if($result_image)
			{
				redirect(base_url()."seller/seller_tools/seller_tools_data_update_image/".$_POST["tools_detail_id"]);
			}
			
			
		
	}	
	public function tools_image_update()
	{
		//echo "xfdd";
		//die();
		$id=array("image_id"=>$_POST["tools_images_id"]);
		//$name=array("image_name"=>$_POST["tools_images"]);
		//echo "<pre>";
		//print_r($_POST["old_tools_images_id"]);
		//die();
		if($_FILES['tools_images']['name']!="")
		{
		$config['upload_path']= 'image/tools_image/';
		$config['allowed_types']= 'gif|jpg|png';
		$this->upload->initialize($config);
		$seller_profile="";	
		if ($this->upload->do_upload('tools_images'))
								{
								$fname ="tools_image/".$_FILES['tools_images']['name'];
								$name=array("image_name"=>$fname);
								//$seller_profile=array("image_id"=>random_string('alnum', 8),"seller_id"=>$seller_id,"image_name"=>$fname);
								$select_tools_data["image_update"]=$this->seller_tools_model->update_image($id,$name);
								unlink("image/".$_POST["old_tools_images_id"]);
								}
		}
		$select_tools_data["image"]=$this->seller_tools_model->select_image($id);
		redirect(base_url()."seller/seller_tools/seller_tools_data_update_image/".$select_tools_data["image"][0]["tools_detail_id"]);
		
	}	
	public function seller_tools_update()
	{
		//echo "<pre>";
		//print_r($_POST);
		//die();
		$id=array("tools_detail_id"=>$_POST["tools_detail_id"]);
		
					//add code on that .................	
				//Insert tools...............
				
			/*	echo "<pre>";
					print_r($_POST);
					die();*/
				$tools_data=array('seller_id'=>$this->session->userdata("seller_login_id"),'tools_type_id'=>$_POST['tools_type'],'tools_subtype_id'=>$_POST['tools_sub_type'],
										'tools_detail_name'=>$_POST['tools_name'],
										'tools_price'=>$_POST['price'],
										'tools_detail_type_id'=>$_POST['type'],'tools_uses'=>$_POST['uses'],
										'tools_total_qty'=>$_POST['total_qty'],'model_no'=>$_POST['model_no'],
										'origin_country'=>$_POST['origin_country'],'color_id'=>$_POST['color'],
										'tools_fuel_id'=>$_POST['fuel'],'tools_drive_id'=>$_POST['drive'],
										'tools_shipping_weight'=>$_POST['shipping_weight'],
										'tools_engine_id'=>$_POST['engine_type'],'tools_weight'=>$_POST['weight'],
										'tools_material'=>$_POST['material'],
										'tools_eye_shape'=>$_POST['eye_shape'],
										'tools_package_detail'=>$_POST['package_detail'],
										'description'=>$_POST['description']);
					/*echo "<pre>";
					print_r($tools_data);
					die();*/
					
			$result_tools=$this->seller_tools_model->seller_tools_update($tools_data,$id);
			if($result_tools==TRUE )
			{			
				$this->session->set_flashdata("seller_tools_add","tools update Success..........");
				redirect(base_url()."seller/seller_tools");
			}
			else
			{
				//error code of insert.....
				$this->session->set_flashdata("seller_tools_add_error","Something Wrong In Insert tools..........");
							$this->load->view("seller/seller_tools");
			}
		
	}
	
	
}
 