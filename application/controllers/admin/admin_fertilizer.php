<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_fertilizer extends CI_Controller {
	
	 public function __construct()
       {	
	   		parent::__construct();
			$this->load->model("admin/admin_fertilizer_model");
        }
		//fertilizer type........................
	public function index()
	{
		$status=array("status"=>0);
		$fertilizer_type["fertilizer_data_type"]=$this->admin_fertilizer_model->select_fertilizer_type($status);
		$this->load->view('admin/admin_fertilizer_add_type',$fertilizer_type);
	}
	public function insert_fertilizer_type()
	{
		$fertilizer_data=array("fertilizer_type_id"=>random_string('alnum', 8),"fertilizer_type_name"=>$_POST['fertilizer_type_name']);
		if($this->admin_fertilizer_model->insert_fertilizer_type_data($fertilizer_data))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Type Insert Success..........");
					redirect(base_url()."admin/admin_fertilizer");
		}
		else
		{
		$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong In Insert Fertilizer Type Please Try Again..........");
					redirect(base_url()."admin/admin_fertilizer");
		}
	}
	public function admin_fertilizer_trash_type()
	{
		$status=array("status"=>1);
		$fertilizer_type["select_fertilizer_type"]=$this->admin_fertilizer_model->select_fertilizer_trash_type($status);
		
		$this->load->view('admin/admin_fertilizer_type_trash',$fertilizer_type);
	}
	public function select_delete_fertilizer_type($type_id)
	{
		//$fertilizer_type_id=array("fertilizer_type_id"=>$type_id);
		//$status=array("status"=>1);
		if($this->admin_fertilizer_model->fertilizer_delete_type($type_id))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Type Delete Success..........");
			redirect(base_url()."admin/admin_fertilizer");
		}
		else
		{
			$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong On Delete Fertilizer Type..........");
			redirect(base_url()."admin/admin_fertilizer");
		}
	}
	public function select_update_fertilizer_type($type_id)
	{
		$fertilizer_type_id=array("fertilizer_type_id"=>$type_id);
		$select_fertilizer_update['update_fertilizer']=$this->admin_fertilizer_model->fertilizer_update_type_select($fertilizer_type_id);
		$this->load->view('admin/admin_fertilizer_update_type',$select_fertilizer_update);
			
	}
	public function update_fertilizer_type()
	{
		if(isset($_POST["Back"]))
		{
			redirect(base_url()."admin/admin_fertilizer");
		}
		else
		{
				$id=array("fertilizer_type_id"=>$_POST['fertilizer_type_id']);
				$name=array("fertilizer_type_name"=>$_POST['fertilizer_type_name']);
				if($this->admin_fertilizer_model->fertilizer_type_update($name,$id))
				{
					$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Type Update Success..........");
					redirect(base_url()."admin/admin_fertilizer");
				}
				else
				{
					$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong On Fertilizer Type Update..........");
					redirect(base_url()."admin/admin_fertilizer");
					
				}
		}
		
	}
	public function admin_fertilizer_type_trash_backup($fertilizer_type_id)
	{
		//$id=array("fertilizer_type_id"=>$fertilizer_type_id);
		//$status=array("status"=>0);
		if($this->admin_fertilizer_model->fertilizer_trash_type_backup($fertilizer_type_id))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Type Back Up Success..........");
			redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong On Fertilizer Type Backup..........");
			redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_trash_type");
			
		}
		
	}
	public function admin_fertilizer_type_trash_delete($fertilizer_type_id)
	{
		$id=array("fertilizer_type_id"=>$fertilizer_type_id);
		if($this->admin_fertilizer_model->fertilizer_trash_type_delete($id))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Type Delete Success..........");
			redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong On Fertilizer Type Delete..........");
			redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_trash_type");
			
		}
		
	}
	//fertilizer sub type....................
	public function admin_fertilizer_add_subtype()
	{
		$status=array("status"=>0);
		$fertilizer_type["fertilizer_data_type"]=$this->admin_fertilizer_model->select_fertilizer_type($status);
		$fertilizer_type["fertilizer_data_subtype"]=$this->admin_fertilizer_model->select_fertilizer_subtype($status);
		$fertilizer_type["fertilizer_subtype"]="";
		$this->load->view('admin/admin_fertilizer_add_subtype',$fertilizer_type);
	}
	public function select_fertilizer_type_data($id)
	{
		$data=array("fertilizer_type_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_data["fertilizer_data_type"]=$this->admin_fertilizer_model->select_fertilizer_type($status);
		$select_data['fertilizer_data_subtype']=$this->admin_fertilizer_model->select_fertilizer_subtype_data($data);
		$select_data["fertilizer_subtype"]=array("fertilizer_type_id"=>$id);
		if($select_data)
		{
				$this->load->view('admin/admin_fertilizer_add_subtype',$select_data);
		}
	}

	public function insert_fertilizer_subtype()
	{
		$fertilizer_data=array("fertilizer_subtype_id"=>random_string('alnum', 8),"fertilizer_type_id"=>$_POST['fertilizer_type_id'],"fertilizer_subtype_name"=>$_POST['fertilizer_subtype_name']);
		if($this->admin_fertilizer_model->insert_fertilizer_subtype_data($fertilizer_data))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Sub Type Insert Success..........");
					redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_subtype");
		}
		else
		{
		$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong In Insert Fertilizer Sub Type Please Try Again..........");
					redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_subtype");
		}
	}
	public function admin_fertilizer_trash_subtype()
	{
		$status_id=array("status"=>1);
		$fertilizer_type["fertilizer_data_subtype"]=$this->admin_fertilizer_model->select_fertilizer_subtype($status_id);
		$this->load->view('admin/admin_fertilizer_subtype_trash',$fertilizer_type);
		
	}
	public function select_delete_fertilizer_subtype($subtype_id)
	{
		$fertilizer_subtype_id=array("fertilizer_subtype_id"=>$subtype_id);
		$status=array("status"=>1);
		if($this->admin_fertilizer_model->fertilizer_delete_subtype($fertilizer_subtype_id,$status))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Sub Type Delete Success..........");
			redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_subtype");
		}
		else
		{
			$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong On Delete Fertilizer Sub Type..........");
			redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_subtype");
		}
	}
	public function admin_fertilizer_subtype_trash_delete($fertilizer_subtype_id)
	{
		$id=array("fertilizer_subtype_id"=>$fertilizer_subtype_id);
		if($this->admin_fertilizer_model->fertilizer_trash_subtype_delete($id))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Sub Type Delete Success..........");
			redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_trash_subtype");
		}
		else
		{
			$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong On Fertilizer Sub Type Delete..........");
			redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_trash_subtype");
			
		}
		
	}
	public function admin_fertilizer_subtype_trash_backup($fertilizer_subtype_id)
	{
		$id=array("fertilizer_subtype_id"=>$fertilizer_subtype_id);
		$status=array("status"=>0);
		if($this->admin_fertilizer_model->fertilizer_trash_subtype_backup($id,$status))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Sub Type Back Up Success..........");
			redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong On Fertilizer Sub Type Backup..........");
			redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_trash_type");
			
		}
		
	}
	public function select_update_fertilizer_subtype($subtype_id)
	{
		$fertilizer_subtype_id=array("fertilizer_subtype_id"=>$subtype_id);
		$status=array("status"=>0);
		$select_fertilizer_update["fertilizer_data_subtype"]=$this->admin_fertilizer_model->select_fertilizer_type($status);
		$select_fertilizer_update['update_fertilizer_subtype_select']=$this->admin_fertilizer_model->fertilizer_update_subtype_select($fertilizer_subtype_id);
		
		$this->load->view('admin/admin_fertilizer_update_subtype',$select_fertilizer_update);
			
	}
	public function update_fertilizer_subtype()
	{
		if(isset($_POST["Back"]))
		{
			redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_subtype");
		}
		else
		{
				$subid=array("fertilizer_subtype_id"=>$_POST['fertilizer_subtype_id']);
				$data=array("fertilizer_subtype_name"=>$_POST['fertilizer_subtype_name'],"fertilizer_type_id"=>$_POST['fertilizer_type_id']);
			
				if($this->admin_fertilizer_model->fertilizer_subtype_update($data,$subid))
				{
					$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Sub Type Update Success..........");
					redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_subtype");
				}
				else
				{
					$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong On Fertilizer Sub Type Update..........");
					redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_subtype");
					
				}
		}
		
	}
	
	//fertilizer sub Menu type....................
	public function admin_fertilizer_add_submenu()
	{
		$status=array("status"=>0);
		$fertilizer_type["fertilizer_data_type"]=$this->admin_fertilizer_model->select_fertilizer_type($status);
		$fertilizer_type["fertilizer_data_subtype"]=$this->admin_fertilizer_model->select_fertilizer_subtype($status);
		$fertilizer_type["fertilizer_data_submenu"]=$this->admin_fertilizer_model->select_fertilizer_submenu($status);
		$fertilizer_type["fertilizer_type"]="";
		$fertilizer_type["fertilizer_subtype"]="";
		$this->load->view('admin/admin_fertilizer_add_submenu',$fertilizer_type);
	}
	
	public function select_submenu_fertilizer_type()
	{
		$data=array("fertilizer_type_id"=>$_POST['fertilizer_type_id'],"status"=>0);
		if($this->admin_fertilizer_model->select_fertilizer_sub_type($data))
		{
				$select_data=$this->admin_fertilizer_model->select_fertilizer_sub_type($data);
				$cnt=count($select_data);
				echo "<select tabindex='1' id='fertilizer_sub_type_id' name='fertilizer_sub_type_id' class='dropdown-menu' role='menu'>";
				echo "<option value='Select here..'>Select fertilizer Sub Type..</option>";
			for($i=0;$i<$cnt;$i++)
				{
			?><option value="<?php echo $select_data[$i]['fertilizer_subtype_id']?> "><?php echo $select_data[$i]['fertilizer_subtype_name']?></option>
			<?php
			}
													
			echo "</select>";	
		}
		else
		{
			echo "<select tabindex='1' id='fertilizer_sub_type_id' name='fertilizer_sub_type_id' class='dropdown-menu' role='menu'>";
				echo "<option value='Select here..'>Select fertilizer Sub Type..</option>";
				echo "</select>";	
		}
	}
	
	public function select_fertilizer_sub_type_data($id)
	{
		$data=array("fertilizer_type_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_data["fertilizer_data_type"]=$this->admin_fertilizer_model->select_fertilizer_type($status);
		$select_data["fertilizer_data_subtype"]=$this->admin_fertilizer_model->select_fertilizer_subtype($data);
		$select_data['fertilizer_data_submenu']=$this->admin_fertilizer_model->select_fertilizer_submenu_data_type($id);
		$select_data["fertilizer_type"]=$this->admin_fertilizer_model->select_fertilizer_data_type($data);
		//print_r($select_data["seed_type"]);
		//die();
		$select_data["fertilizer_subtype"]="";
		if($select_data)
		{
				$this->load->view('admin/admin_fertilizer_add_submenu',$select_data);
		}
	}
	public function select_fertilizer_subtype_data1($id)
	{
		$data=array("fertilizer_subtype_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_data["fertilizer_data_type"]=$this->admin_fertilizer_model->select_fertilizer_type($status);
		$select_data["fertilizer_data_subtype"]=$this->admin_fertilizer_model->select_fertilizer_subtype($status);
		$select_data['fertilizer_data_submenu']=$this->admin_fertilizer_model->select_fertilizer_submenu_data_type1($id);
		//echo "<pre>";
		//print_r($select_data['fertilizer_data_submenu']);
		//die();
		$select_data["fertilizer_type"]=""	;
		//print_r($select_data["fertilizer_type"]);
		//die();
		$select_data["fertilizer_subtype"]=$this->admin_fertilizer_model->select_fertilizer_data_subtype($data);
		if($select_data)
		{
				$this->load->view('admin/admin_fertilizer_add_submenu',$select_data);
		}
	}
	public function select_fertilzer_subtype_data1($id)
	{
		$data=array("fertilzer_subtype_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_data["fertilzer_data_type"]=$this->admin_fertilzer_model->select_fertilzer_type($status);
		$select_data["fertilzer_data_subtype"]=$this->admin_fertilzer_model->select_fertilzer_subtype($status);
		$select_data['fertilzer_data_submenu']=$this->admin_fertilzer_model->select_fertilzer_submenu_data_type1($id);
		//echo "<pre>";
		//print_r($select_data['fertilzer_data_submenu']);
		//die();
		$select_data["fertilzer_type"]=""	;
		//print_r($select_data["fertilzer_type"]);
		//die();
		$select_data["fertilzer_subtype"]=$this->admin_fertilzer_model->select_fertilzer_data_subtype($data);
		if($select_data)
		{
				$this->load->view('admin/admin_fertilzer_add_submenu',$select_data);
		}
	}
	
	public function insert_fertilizer_submenu_type()
	{
		$fertilizer_data=array("fertilizer_submenu_id"=>random_string('alnum',8),"fertilizer_subtype_id"=>$_POST['fertilizer_sub_type_id'],"fertilizer_submenu_name"=>$_POST['fertilizer_submenu_name']);
		//print_r($fertilizer_data);
		//die();
		if($this->admin_fertilizer_model->insert_fertilizer_submenu_data($fertilizer_data))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Sub Menu Type Insert Success..........");
					redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_submenu");
		}
		else
		{
		$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong In Insert Fertilizer Sub Menu Type Please Try Again..........");
		
		
					redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_submenu");
		}
	}
	public function select_fertilizer_submenu_type_data($id)
	{
		$id_data=explode("%20",$id);
		
		$data1=array("fertilizer_type_id"=>$id_data[1],"status"=>0);
		$status=array("status"=>0);
		$select_data["fertilizer_data_type"]=$this->admin_fertilizer_model->select_fertilizer_type($status);
		$select_data["fertilizer_data_subtype"]=$this->admin_fertilizer_model->select_fertilizer_subtype($data1);
		$select_data['fertilizer_data_submenu']=$this->admin_fertilizer_model->select_fertilizer_subtype_menu_data($id_data[0]);
		//echo "<pre>";
		//print_r($select_data);
		//die();
		$data=array("fertilizer_subtype_id"=>$id_data[0],"status"=>0);
		$select_data["fertilizer_type"]=$this->admin_fertilizer_model->select_fertilizer_subtype($data1);
		//print_r($select_data["seed_type"]);
		//die();
		$select_data["fertilizer_subtype"]=$this->admin_fertilizer_model->select_fertilizer_data_subtype($data);
		//echo "<pre>";
		//print_r($select_data["fertilzer_subtype"]);
		//die();
				$this->load->view('admin/admin_fertilizer_add_submenu',$select_data);
		
	}
	public function admin_fertilizer_trash_submenu()
	{
		$status_id=array("status"=>1);
		$fertilizer_type["fertilizer_data_submenu"]=$this->admin_fertilizer_model->select_fertilizer_submenu_trash($status_id);
		//echo "<pre>";
		//print_r($fertilizer_type["fertilizer_data_submenu"]);
		//die();
		$this->load->view('admin/admin_fertilizer_submenu_trash',$fertilizer_type);
		
	}
	public function select_delete_fertilizer_submenu($submenu_id)
	{
		$fertilizer_submenu_id=array("fertilizer_submenu_id"=>$submenu_id);
		$status=array("status"=>1);
		//echo "<pre>";
		//print_r($fertilizer_submenu_id);
		//die();
		if($this->admin_fertilizer_model->fertilizer_delete_submenu($fertilizer_submenu_id,$status))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Sub Menu Type Delete Success..........");
			redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_submenu");
		}
		else
		{
			$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong On Delete Fertilizer Sub Menu Type..........");
			redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_submenu");
		}
	}
	
	public function admin_fertilizer_submenu_trash_backup($fertilizer_submenu_id)
	{
		$id=array("fertilizer_submenu_id"=>$fertilizer_submenu_id);
		$status=array("status"=>0);
		//echo "<pre>";
		//print_r($id);
		//die();
		if($this->admin_fertilizer_model->fertilizer_trash_submenu_backup($id,$status))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Sub Menu Type Back Up Success..........");
			redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_trash_submenu");
		}
		else
		{
			$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong On Fertilizer Sub Menu Type Backup..........");
			redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_trash_submenu");
			
		}
		
	}
	public function admin_fertilizer_submenu_trash_delete($fertilizer_submenu_id)
	{
		$id=array("fertilizer_submenu_id"=>$fertilizer_submenu_id);
		if($this->admin_fertilizer_model->fertilizer_trash_submenu_delete($id))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Sub Menu Type Delete Success..........");
			redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_trash_submenu");
		}
		else
		{
			$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong On Fertilizer Sub Menu Type Delete..........");
			redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_trash_submenu");
			
		}
		
	}
	public function select_update_fertilizer_submenu($submenu_id)
	{
		$fertilizer_submenu_id=array("fertilizer_submenu_id"=>$submenu_id);
		$status=array("status"=>0);
		$select_fertilizer_update["fertilizer_data_type"]=$this->admin_fertilizer_model->select_fertilizer_type($status);
		$select_fertilizer_update['select']=$this->admin_fertilizer_model->select_fertilizer_subtype_data_menu($submenu_id);
		$select_fertilizer_update["fertilizer_data_subtype"]=$this->admin_fertilizer_model->select_fertilizer_subtype_menu($select_fertilizer_update['select'][0]['fertilizer_type_id']);	
		$select_fertilizer_update['update_fertilizer_submenu_select']=$this->admin_fertilizer_model->fertilizer_update_submenu_select($fertilizer_submenu_id);	

		$this->load->view('admin/admin_fertilizer_update_submenu',$select_fertilizer_update);
			
	}
	public function update_fertilizer_submenu()
	{
		if(isset($_POST["Back"]))
		{
			redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_submenu");
		}
		else
		{
				$subid=array("fertilizer_submenu_id"=>$_POST['fertilizer_submenu_id']);
				$data=array("fertilizer_submenu_name"=>$_POST['fertilizer_submenu_name'],"fertilizer_subtype_id"=>$_POST['fertilizer_sub_type_id']);
			
				if($this->admin_fertilizer_model->fertilizer_submenu_update($data,$subid))
				{
					$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Sub Menu Type Update Success..........");
					redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_submenu");
				}
				else
				{
					$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong On Fertilizer Sub Menu Type Update..........");
					redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_submenu");
					
				}
		}
		
	}
	
	
}
