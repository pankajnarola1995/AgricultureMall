	<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Seller_pesticide extends CI_Controller {

	 public function __construct()
       {
              // Call the CI_Model constructor
              parent::__construct();
			$this->load->model("seller/seller_pesticide_model");
        }
	public function index()
	{
		$status=array("status"=>0);
		$select_pesticide["pesticide_type"]=$this->seller_pesticide_model->select_pesticide_type();
		$select_pesticide["pesticide_data"]=$this->seller_pesticide_model->select_pesticide_detail();
		$select_pesticide["origin_country"]=$this->seller_pesticide_model->select_origin_country2();
		$select_pesticide["classification"]=$this->seller_pesticide_model->select_classification_type();
		$select_pesticide["pesticide_subtype"]=$this->seller_pesticide_model->select_pesticide_sub_type($status);
		$select_pesticide["select"]="";
		$select_pesticide['select1']="";;
		$id=array("seller_id"=>$this->session->userdata("seller_login_id"));	
				$seller_pic=$this->seller_pesticide_model->select_seller_image($id);
				/*echo "<pre>";
				print_r($seller_pic);
				die();*/
				$this->session->set_userdata("seller_pic",$seller_pic[0]['image_name']);
		$this->load->view('seller/seller_pesticide_index',$select_pesticide);
		
	}
	public function select_subtype_data_menu($id)
	{
		$data=array("pesticide_type_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_pesticide["pesticide_type"]=$this->seller_pesticide_model->select_pesticide_type();
		$select_pesticide["pesticide_data"]=$this->seller_pesticide_model->select_pesticide_detail_type($id);
		$select_pesticide["origin_country"]=$this->seller_pesticide_model->select_origin_country2();
		$select_pesticide["classification"]=$this->seller_pesticide_model->select_classification_type();
		$select_pesticide["pesticide_subtype"]=$this->seller_pesticide_model->select_pesticide_sub_type($data);
		$select_pesticide["select"]=$this->seller_pesticide_model->select_pesticide_type_data($id);
		$select_pesticide['select1']="";
	
		//echo "<pre>";
		//print_r($select_data['select']);
		//die();
		if($select_pesticide)
		{
			$this->load->view('seller/seller_pesticide_index',$select_pesticide);
		}
	}
	public function select_pesticide_type_menu($id)
	{
		$data1=array("pesticide_subtype_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_pesticide["pesticide_type"]=$this->seller_pesticide_model->select_pesticide_type();
		$select_pesticide["pesticide_data"]=$this->seller_pesticide_model->select_pesticide_detail_type1($id);
		$select_pesticide["origin_country"]=$this->seller_pesticide_model->select_origin_country2();
		$select_pesticide["classification"]=$this->seller_pesticide_model->select_classification_type();
		$select_pesticide["pesticide_subtype"]=$this->seller_pesticide_model->select_pesticide_sub_type($status);
		$select_pesticide["select"]="";
		$select_pesticide['select1']=$this->seller_pesticide_model->select_pesticide_type_data12($id);
		if($select_pesticide)
		{
			$this->load->view('seller/seller_pesticide_index',$select_pesticide);
		}
		
		
	}
public function select_submenu_data_subtype($id)
	{
	     $id_data=explode("%20",$id);
		$data1=array("pesticide_type_id"=>$id_data[1],"status"=>0);
		$status=array("status"=>0);
		$select_pesticide["pesticide_type"]=$this->seller_pesticide_model->select_pesticide_type();
		$select_pesticide["pesticide_data"]=$this->seller_pesticide_model->select_pesticide_detail_type1($id_data[0]);
		$select_pesticide["origin_country"]=$this->seller_pesticide_model->select_origin_country2();
		$select_pesticide["classification"]=$this->seller_pesticide_model->select_classification_type();
		$select_pesticide["pesticide_subtype"]=$this->seller_pesticide_model->select_pesticide_sub_type($data1);
		$select_pesticide["select"]=$this->seller_pesticide_model->select_pesticide_type_data($id_data[1]);
		$select_pesticide['select1']=$this->seller_pesticide_model->select_pesticide_type_data12($id_data[0]);
		//$select_pesticide['select2']="";
		if($select_pesticide)
		{
			$this->load->view('seller/seller_pesticide_index',$select_pesticide);
		}
		
	}
	public function seller_pesticide_data()
	{
		$select_pesticide_data["classification"]=$this->seller_pesticide_model->select_classification_type();
		$select_pesticide_data["appearance"]=$this->seller_pesticide_model->select_appearance_type();
		$select_pesticide_data["origin_country"]=$this->seller_pesticide_model->select_origin_country();

		$this->load->view("seller/seller_pesticide",$select_pesticide_data);
		
	}
	public function pesticide_add_data()
	{
			$this->session->set_userdata("pesticide_subtype","");
		
		if($_POST["pesticide_type"]!="")
		{
		$this->session->set_userdata("pesticide_type",$_POST["pesticide_type"]);
		}
		
		if($_POST["pesticide_sub_type"]!="")
		{
		$this->session->set_userdata("pesticide_subtype",$_POST["pesticide_sub_type"]);
		
		}		
		redirect(base_url().'seller/seller_pesticide/seller_pesticide_data');
	}
	public function select_pesticide_sub_type()
	{
		$data=array("pesticide_type_id"=>$_POST['pesticide_type_id'],"status"=>0);
		if($this->seller_pesticide_model->select_pesticide_sub_type($data))
		{
				$select_data=$this->seller_pesticide_model->select_pesticide_sub_type($data);
				$cnt=count($select_data);
				echo "<select tabindex='1' id='pesticide_sub_type' name='pesticide_sub_type' class='dropdown-menu' role='menu'>";
				echo "<option value='Select here..'>Select pesticide Sub Type..</option>";
			for($i=0;$i<$cnt;$i++)
				{
			?><option value="<?php echo $select_data[$i]['pesticide_subtype_id']?> "><?php echo $select_data[$i]['pesticide_subtype_name']?></option>
			<?php
			}
													
			echo "</select>";
			//echo "<span class='help-inline' id='msgpesticide_sub_type' style='float:right' ></span>";		
		}
		else
		{
		}
	}
	
	public function seller_pesticide_insert()
	{		
	/*echo "<pre>";
	print_r($_POST);
	die();*/
							
					//add code on that .................	
					$pesticide_detail_id=random_string('alnum', 8);	
					
						$pesticide_data=array('pesticide_detail_id'=>$pesticide_detail_id,'seller_id'=>$this->session->userdata("seller_login_id"),'pesticide_type_id'=>$this->session->userdata("pesticide_type"),'pesticide_subtype_id'=>$this->session->userdata("pesticide_subtype"),'pesticide_detail_name'=>$_POST['pesticide_name'],'pesticide_price'=>$_POST['price'],'pesticide_price_type'=>$_POST['pesticide_price_type'],'pesticide_brand_name'=>$_POST['pesticide_brand_name'],'pesticide_total_qty'=>$_POST['total_qty'],'pesticide_min_order'=>$_POST['min_order'],'classification'=>$_POST['pesticide_classification_id'],'appearance'=>$_POST['pesticide_appearance_id'],'model_no'=>$_POST['model_no'],'cas_no'=>$_POST['casno'],'pesticide_weight'=>$_POST['weight'],'pesticide_shipping_weight'=>$_POST['shipping_weight'],'origin_country'=>$_POST['origin_country'],'description'=>$_POST['description']);
						$this->session->set_userdata("pesticide_type","");
					/*echo "<pre>";
					print_r($pesticide_data);
					die();*/
			$result_pesticide=$this->seller_pesticide_model->seller_pesticide_insert($pesticide_data);
			
				$config["upload_path"]="image/pesticide_image/";
				$config['allowed_types']= 'gif|jpg|png';
					/*echo "<pre>";
					print_r($_FILES);
					die();*/
					
				// pesticide Image Insert.......
				$this->upload->initialize($config);
				$count_file=count($_FILES['pesticide_images']['name']);
			
				for($i=0;$i<$count_file;$i++)
				{
				
					$_FILES['newimg']['name']=$_FILES['pesticide_images']['name'][$i];
					$_FILES['newimg']['tmp_name']=$_FILES['pesticide_images']['tmp_name'][$i];
					$_FILES['newimg']['type']=$_FILES['pesticide_images']['type'][$i];
					$_FILES['newimg']['size']=$_FILES['pesticide_images']['size'][$i];
					/*echo "<pre>";
					echo $_FILES['newimg']['name'];
					//print_r($_FILES);
					die();*/
					if(!$this->upload->do_upload('newimg'))
					{
					$this->session->set_flashdata("seller_pesticide_image_error","Something Wrong In Insert Pesticide Image Please Try Again..........");
					redirect(base_url()."seller/seller_pesticide");
									
					}
					else
					{
						$image_name="pesticide_image/".$_FILES['newimg']['name'];
						$img=array("image_id"=>random_string('alnum', 8),"pesticide_detail_id"=>$pesticide_detail_id,"image_name"=>$image_name);
						$result_image=$this->seller_pesticide_model->insert_pesticide_image($img);
						
					}
				}
				//Insert pesticide...............
				
			if($result_image!=TRUE)
			{			
				$this->session->set_flashdata("seller_pesticide_error","Pesticide Image Insert Error..........");
				redirect(base_url()."seller/seller_pesticide");
			}
			elseif($result_pesticide==TRUE and $result_image==TRUE)
			{			
				$this->session->set_flashdata("seller_pesticide_add","Pesticide Insert Success..........");
				redirect(base_url()."seller/seller_pesticide");
			}
			elseif($result_pesticide!=TRUE and $result_image!=TRUE)
			{
				//error code of insert.....
				$this->session->set_flashdata("seller_pesticide_add_error","Something Wrong In Insert Pesticide..........");
							$this->load->view("seller/seller_pesticide");
			}
			else
			{
				$this->session->set_flashdata("seller_pesticide_add_error","Something Wrong In Insert Pesticide..........");
							$this->load->view("seller/seller_pesticide");
			}
	}
	
	public function seller_pesticide_trash()
	{
		$select_pesticide["classification"]=$this->seller_pesticide_model->select_classification_type();
		$select_pesticide["origin_country"]=$this->seller_pesticide_model->select_origin_country2();
		$select_pesticide["pesticide_data"]=$this->seller_pesticide_model->select_pesticide_detail_trash();
		$this->load->view('seller/seller_pesticide_trash',$select_pesticide);
	}
public function seller_pesticide_trash_backup($pesticide_detail_id)
	{
		$id=array("pesticide_detail_id"=>$pesticide_detail_id);
		$status=array("status"=>0);
		if($this->seller_pesticide_model->pesticide_trash_backup($id,$status))
		{
			$this->session->set_flashdata("seller_pesticide_add","Pesticide Back Up Success..........");
			redirect(base_url()."seller/seller_pesticide/seller_pesticide_trash");
		}
		else
		{
			$this->session->set_flashdata("seller_pesticide_add_error","Something Wrong..........");
			redirect(base_url()."seller/seller_pesticide/seller_pesticide_trash");
			
		}
		
	}
	public function seller_pesticide_trash_delete($pesticide_detail_id)
	{
		$id=array("pesticide_detail_id"=>$pesticide_detail_id);
		if($this->seller_pesticide_model->pesticide_trash_delete($id))
		{
			$this->session->set_flashdata("seller_pesticide_add","Pesticide Delete Success..........");
			redirect(base_url()."seller/seller_pesticide/seller_pesticide_trash");
		}
		else
		{
			$this->session->set_flashdata("seller_pesticide_add_error","Something Wrong..........");
			redirect(base_url()."seller/seller_pesticide/seller_pesticide_trash");
			
		}
		
	}
	public function seller_pesticide_backup($pesticide_detail_id)
	{
		$id=array("pesticide_detail_id"=>$pesticide_detail_id);
		$status=array("status"=>1);
		if($this->seller_pesticide_model->pesticide_back($id,$status))
		{
			$this->session->set_flashdata("seller_pesticide_add","Pesticide Delete Success..........");
			redirect(base_url()."seller/seller_pesticide");
		}
		else
		{
			$this->session->set_flashdata("seller_pesticide_add_error","Something Wrong on Delete Pesticide..........");
			redirect(base_url()."seller/seller_pesticide");
			
		}
		
	}


	public function seller_pesticide_data_update($pesticide_detail_id="")
	{
		
		if(isset($pesticide_detail_id) && $pesticide_detail_id =="")
		{
			
			echo "<h3 style='color:red'>You Have no Permission to access this page.</h3>";
			die();
		}else
		{
		$id=array("pesticide_detail_id"=>$pesticide_detail_id);
		
		$select_pesticide_data["select_update_data"]=$this->seller_pesticide_model->update_pesticide_data_select($id);
		//echo "<pre>";
		//print_r($select_pesticide_data["select_update_data"]);
		//die();
		$subtype=array("pesticide_type_id"=>$select_pesticide_data["select_update_data"][0]["pesticide_type_id"]);
		$subtype1=array("pesticide_subtype_id"=>$select_pesticide_data["select_update_data"][0]["pesticide_subtype_id"]);
		$select_pesticide_data["pesticide_type"]=$this->seller_pesticide_model->select_pesticide_type();
		$select_pesticide_data["pesticide_sub_type"]=$this->seller_pesticide_model->select_pesticide_sub_type( $subtype);
		$select_pesticide_data["classification"]=$this->seller_pesticide_model->select_classification_type();
		$select_pesticide_data["appearance"]=$this->seller_pesticide_model->select_appearance_type();
		$select_pesticide_data["origin_country"]=$this->seller_pesticide_model->select_origin_country();
		//echo "<pre>";
		//print_r($select_pesticide_data["image"]);
		//die();
		if($select_pesticide_data["select_update_data"])
		{
		$this->load->view("seller/seller_pesticide_update",$select_pesticide_data);
		}
		else
		{
			echo "<h3 style='color:red'>No Record Found.</h3>";
			die();
		}
		}
		
	}	
	public function seller_pesticide_display($pesticide_detail_id="")
	{
		if(isset($pesticide_detail_id) && $pesticide_detail_id =="")
		{
			
			echo "<h3 style='color:red'>You Have no Permission to access this page.</h3>";
			die();
		}else
		{
		$id=array("pesticide_detail_id"=>$pesticide_detail_id);
		
		$select_pesticide_data["select_update_data"]=$this->seller_pesticide_model->update_pesticide_data_select($id);
		//echo "<pre>";
		//print_r($select_pesticide_data["select_update_data"]);
		//die();
		$subtype=array("pesticide_type_id"=>$select_pesticide_data["select_update_data"][0]["pesticide_type_id"]);
		$subtype1=array("pesticide_subtype_id"=>$select_pesticide_data["select_update_data"][0]["pesticide_subtype_id"]);
		$select_pesticide_data["pesticide_type"]=$this->seller_pesticide_model->select_pesticide_type();
		$select_pesticide_data["pesticide_sub_type"]=$this->seller_pesticide_model->select_pesticide_sub_type($subtype);
		$select_pesticide_data["classification"]=$this->seller_pesticide_model->select_classification_type();
		$select_pesticide_data["appearance"]=$this->seller_pesticide_model->select_appearance_type();
		$select_pesticide_data["origin_country"]=$this->seller_pesticide_model->select_origin_country();
		//echo "<pre>";
		//print_r($select_pesticide_data["image"]);
		//die();
		if($select_pesticide_data["select_update_data"])
		{
		$this->load->view("seller/seller_pesticide_display",$select_pesticide_data);
		}
		else
		{
			echo "<h3 style='color:red'>No Record Found.</h3>";
			die();
		}
		}
		
		
	}	
	public function seller_pesticide_data_update_image($pesticide_detail_id="")
	{
		if(isset($pesticide_detail_id) && $pesticide_detail_id =="")
		{
			
			echo "<h3 style='color:red'>You Have no Permission to access this page.</h3>";
			die();
		}
		else
		{
		$id=array("pesticide_detail_id"=>$pesticide_detail_id);
		$select_pesticide_data["image"]=$this->seller_pesticide_model->select_image($id);
		//echo "<pre>";
		//print_r($select_pesticide_data["image"]);
		//die();
		$select_pesticide_data["pesticide_detail_id"]=array("pesticide_detail_id"=>$pesticide_detail_id);
	if(count($select_pesticide_data["image"])!=0)
	{
		$this->load->view("seller/seller_pesticide_update_image",$select_pesticide_data);
		}
		else
		{
			echo "<h3 style='color:red'>No Record Found.</h3>";
			die();
		}
		}
		
		
	}	
	public function pesticide_image_delete($image_id,$old_pesticide_images_name,$pesticide_detail_id)
	{
		$id=array("image_id"=>$image_id);
		if($this->seller_pesticide_model->delete_pesticide_image($id))
		{
		
		unlink("image/".$old_pesticide_images_name);
		$id1=array("pesticide_detail_id"=>$pesticide_detail_id);
		$select_pesticide_data["image_all"]=$this->seller_pesticide_model->select_image($id1);
	//	echo count($select_pesticide_data["image_all"]);die();
		if(count($select_pesticide_data["image_all"])>=0 )
			{
				redirect(base_url()."seller/seller_pesticide/seller_pesticide_data_update_image/".$pesticide_detail_id);
			}
		else
			{
				redirect(base_url()."seller/seller_pesticide");
			}
		}
		else
		{
			$this->session->set_flashdata("seller_pesticide_image_error","Something Wrong In Delete Pesticide Image Please Try Again..........");
			redirect(base_url()."seller/seller_pesticide/seller_pesticide_data_update_image/".$select_pesticide_data["image_all"][0]["pesticide_detail_id"]);
		}
		
		
	}	
	public function add_image()
	{
		$config["upload_path"]="image/pesticide_image/";
				$config['allowed_types']= 'gif|jpg|png';
					
					
				// pesticide Image Insert.......
				$this->upload->initialize($config);
				$count_file=count($_FILES['pesticide_images']['name']);
			
				for($i=0;$i<$count_file;$i++)
				{
				
					$_FILES['newimg']['name']=$_FILES['pesticide_images']['name'][$i];
					$_FILES['newimg']['tmp_name']=$_FILES['pesticide_images']['tmp_name'][$i];
					$_FILES['newimg']['type']=$_FILES['pesticide_images']['type'][$i];
					$_FILES['newimg']['size']=$_FILES['pesticide_images']['size'][$i];
					/*echo "<pre>";
					echo $_FILES['newimg']['name'];
					//print_r($_FILES);
					die();*/
					if(!$this->upload->do_upload('newimg'))
					{
					$this->session->set_flashdata("seller_pesticide_image_error","Something Wrong In Insert Pesticide Image Please Try Again..........");
					redirect(base_url()."seller/seller_pesticide");
									
					}
					else
					{
						$image_name="pesticide_image/".$_FILES['newimg']['name'];
						$img=array("image_id"=>random_string('alnum', 8),"image_name"=>$image_name,"pesticide_detail_id"=>$_POST["pesticide_detail_id"]);
						$result_image=$this->seller_pesticide_model->insert_pesticide_image($img);
						
					}
				}
			if($result_image)
			{
				redirect(base_url()."seller/seller_pesticide/seller_pesticide_data_update_image/".$_POST["pesticide_detail_id"]);
			}
			
			
		
	}	
	public function pesticide_image_update()
	{
		//echo "xfdd";
		//die();
		$id=array("image_id"=>$_POST["pesticide_images_id"]);
		//$name=array("image_name"=>$_POST["pesticide_images"]);
		//echo "<pre>";
		//print_r($_POST["old_pesticide_images_id"]);
		//die();
		if($_FILES['pesticide_images']['name']!="")
		{
		$config['upload_path']= 'image/pesticide_image/';
		$config['allowed_types']= 'gif|jpg|png';
		$this->upload->initialize($config);
		$seller_profile="";	
		if ($this->upload->do_upload('pesticide_images'))
								{
								$fname ="pesticide_image/".$_FILES['pesticide_images']['name'];
								$name=array("image_name"=>$fname);
								//$seller_profile=array("image_id"=>random_string('alnum', 8),"seller_id"=>$seller_id,"image_name"=>$fname);
								$select_pesticide_data["image_update"]=$this->seller_pesticide_model->update_image($id,$name);
								unlink("image/".$_POST["old_pesticide_images_id"]);
								}
		}
		$select_pesticide_data["image"]=$this->seller_pesticide_model->select_image($id);
		redirect(base_url()."seller/seller_pesticide/seller_pesticide_data_update_image/".$select_pesticide_data["image"][0]["pesticide_detail_id"]);
		
	}	
	public function seller_pesticide_update()
	{
		//echo "<pre>";
		//print_r($_POST);
		//die();
		$id=array("pesticide_detail_id"=>$_POST["pesticide_detail_id"]);
		
					//add code on that .................	
				//Insert pesticide...............
				
			/*	echo "<pre>";
					print_r($_POST);
					die();*/
				$pesticide_data=array('seller_id'=>$this->session->userdata("seller_login_id"),'pesticide_type_id'=>$_POST['pesticide_type'],'pesticide_subtype_id'=>$_POST['pesticide_sub_type'],'pesticide_detail_name'=>$_POST['pesticide_name'],'pesticide_price'=>$_POST['price'],'pesticide_price_type'=>$_POST['pesticide_price_type'],'pesticide_brand_name'=>$_POST['pesticide_brand_name'],'pesticide_total_qty'=>$_POST['total_qty'],'pesticide_min_order'=>$_POST['min_order'],'classification'=>$_POST['pesticide_classification_id'],'appearance'=>$_POST['pesticide_appearance_id'],'model_no'=>$_POST['model_no'],'cas_no'=>$_POST['casno'],'pesticide_weight'=>$_POST['weight'],'pesticide_shipping_weight'=>$_POST['shipping_weight'],'origin_country'=>$_POST['origin_country'],'description'=>$_POST['description']);
					/*echo "<pre>";
					print_r($pesticide_data);
					die();*/
					
			$result_pesticide=$this->seller_pesticide_model->seller_pesticide_update($pesticide_data,$id);
			if($result_pesticide==TRUE )
			{			
				$this->session->set_flashdata("seller_pesticide_add","Pesticide update Success..........");
				redirect(base_url()."seller/seller_pesticide");
			}
			else
			{
				//error code of insert.....
				$this->session->set_flashdata("seller_pesticide_add_error","Something Wrong In Insert Pesticide..........");
							$this->load->view("seller/seller_pesticide");
			}
		
	}
	
	
}
 