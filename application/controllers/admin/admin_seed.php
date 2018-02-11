<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_seed extends CI_Controller {
	
	 public function __construct()
       {	
	   		parent::__construct();
			$this->load->model("admin/admin_seed_model");
        }
		//seed type........................
	public function index()
	{
		$status=array("status"=>0);
		$seed_type["seed_data_type"]=$this->admin_seed_model->select_seed_type($status);
		$this->load->view('admin/admin_seed_add_type',$seed_type);
	}
	public function insert_seed_type()
	{
				$seed_data=array("seed_type_id"=>random_string('alnum', 8),"seed_type_name"=>$_POST['seed_type_name']);
				if($this->admin_seed_model->insert_seed_type_data($seed_data))
				{
					$this->session->set_flashdata("admin_seed_add","Seed Type Insert Success..........");
							redirect(base_url()."admin/admin_seed");
				}
				else
				{
				$this->session->set_flashdata("admin_seed_add_error","Something Wrong On Insert Seed Type..........");
				redirect(base_url()."admin/admin_seed");
				}
			
	}
	public function admin_seed_trash_type()
	{
		$status=array("status"=>1);
		$seed_type["select_seed_type"]=$this->admin_seed_model->select_seed_trash_type($status);
		
		$this->load->view('admin/admin_seed_type_trash',$seed_type);
	}
	public function select_delete_seed_type($type_id)
	{
		//$seed_type_id=array("seed_type_id"=>$type_id);
		//$status=array("status"=>1);
		//echo $this->admin_seed_model->seed_delete_type($seed_type_id,$status);
		//die();
		if($this->admin_seed_model->seed_delete_type($type_id))
		{
			$this->session->set_flashdata("admin_seed_add","Seed Type Delete Success..........");
			redirect(base_url()."admin/admin_seed");
		}
		else
		{
			$this->session->set_flashdata("admin_seed_add_error","Something Wrong On Delete Seed Type..........");
			redirect(base_url()."admin/admin_seed");
		}
	}
	public function select_update_seed_type($type_id)
	{
		
		$seed_type_id=array("seed_type_id"=>$type_id);
		$select_seed_update['update_seed']=$this->admin_seed_model->seed_update_type_select($seed_type_id);
		$this->load->view('admin/admin_seed_update_type',$select_seed_update);
			
	}
	public function update_seed_type()
	{
		if(isset($_POST["Back"]))
		{
			redirect(base_url()."admin/admin_seed");
		}
		else
		{
				$id=array("seed_type_id"=>$_POST['seed_type_id']);
				$name=array("seed_type_name"=>$_POST['seed_type_name']);
				if($this->admin_seed_model->seed_type_update($name,$id))
				{
					$this->session->set_flashdata("admin_seed_add","Seed Type Update Success..........");
					redirect(base_url()."admin/admin_seed");
				}
				else
				{
					$this->session->set_flashdata("admin_seed_add_error","Something Wrong On Seed Type Update..........");
					redirect(base_url()."admin/admin_seed");
					
				}
		}
		
	}
	public function admin_seed_type_trash_backup($seed_type_id)
	{
		//$id=array("seed_type_id"=>$seed_type_id);
		//$status=array("status"=>0);
		if($this->admin_seed_model->seed_trash_type_backup($seed_type_id))
		{
			$this->session->set_flashdata("admin_seed_add","Seed Type Back Up Success..........");
			redirect(base_url()."admin/admin_seed/admin_seed_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_seed_add_error","Something Wrong On Seed Type Backup..........");
			redirect(base_url()."admin/admin_seed/admin_seed_trash_type");
			
		}
		
	}
	public function admin_seed_type_trash_delete($seed_type_id)
	{
		$id=array("seed_type_id"=>$seed_type_id);
		if($this->admin_seed_model->seed_trash_type_delete($id))
		{
			$this->session->set_flashdata("admin_seed_add","Seed Type Delete Success..........");
			redirect(base_url()."admin/admin_seed/admin_seed_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_seed_add_error","Something Wrong On Seed Type Delete..........");
			redirect(base_url()."admin/admin_seed/admin_seed_trash_type");
			
		}
		
	}
	//seed sub type....................
	public function admin_seed_add_subtype()
	{
		$status=array("status"=>0);
		$seed_type["seed_data_type"]=$this->admin_seed_model->select_seed_type($status);
		$seed_type["seed_data_subtype"]=$this->admin_seed_model->select_seed_subtype($status);
		$seed_type["seed_subtype"]="";
		$this->load->view('admin/admin_seed_add_subtype',$seed_type);
	}
	public function select_seed_type_data($id)
	{
		$data=array("seed_type_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_data["seed_data_type"]=$this->admin_seed_model->select_seed_type($status);
		$select_data['seed_data_subtype']=$this->admin_seed_model->select_seed_subtype_data($data);
		$select_data["seed_subtype"]=array("seed_type_id"=>$id);
		//print_r($seed_type["seed_subtype"]);
		//die();
		if($select_data)
		{
				$this->load->view('admin/admin_seed_add_subtype',$select_data);
		}
	}

	public function insert_seed_subtype()
	{
				$seed_data=array("seed_subtype_id"=>random_string('alnum', 8),"seed_type_id"=>$_POST['seed_type_id'],"seed_subtype_name"=>$_POST['seed_subtype_name']);
				if($this->admin_seed_model->insert_seed_subtype_data($seed_data))
				{
					$this->session->set_flashdata("admin_seed_add","Seed Sub Type Insert Success..........");
							redirect(base_url()."admin/admin_seed/admin_seed_add_subtype");
				}
				else
				{
				$this->session->set_flashdata("admin_seed_add_error","Something Wrong In Insert Seed Sub Type Please Try Again..........");
							redirect(base_url()."admin/admin_seed/admin_seed_add_subtype");
				}
				
	}
	public function admin_seed_trash_subtype()
	{
		$status_id=array("status"=>1);
		$seed_type["seed_data_subtype"]=$this->admin_seed_model->select_seed_subtype($status_id);
		$this->load->view('admin/admin_seed_subtype_trash',$seed_type);
		
	}
	public function select_delete_seed_subtype($subtype_id)
	{
		$seed_subtype_id=array("seed_subtype_id"=>$subtype_id);
		$status=array("status"=>1);
		if($this->admin_seed_model->seed_delete_subtype($seed_subtype_id,$status))
		{
			$this->session->set_flashdata("admin_seed_add","Seed Sub Type Delete Success..........");
			redirect(base_url()."admin/admin_seed/admin_seed_add_subtype");
		}
		else
		{
			$this->session->set_flashdata("admin_seed_add_error","Something Wrong On Delete Seed Sub Type..........");
			redirect(base_url()."admin/admin_seed/admin_seed_add_subtype");
		}
	}
	public function admin_seed_subtype_trash_delete($seed_subtype_id)
	{
		$id=array("seed_subtype_id"=>$seed_subtype_id);
		if($this->admin_seed_model->seed_trash_subtype_delete($id))
		{
			$this->session->set_flashdata("admin_seed_add","Seed Sub Type Delete Success..........");
			redirect(base_url()."admin/admin_seed/admin_seed_trash_subtype");
		}
		else
		{
			$this->session->set_flashdata("admin_seed_add_error","Something Wrong On Seed Sub Type Delete..........");
			redirect(base_url()."admin/admin_seed/admin_seed_trash_subtype");
			
		}
		
	}
	public function admin_seed_subtype_trash_backup($seed_subtype_id)
	{
		$id=array("seed_subtype_id"=>$seed_subtype_id);
		$status=array("status"=>0);
		if($this->admin_seed_model->seed_trash_subtype_backup($id,$status))
		{
			$this->session->set_flashdata("admin_seed_add","Seed Sub Type Back Up Success..........");
			redirect(base_url()."admin/admin_seed/admin_seed_trash_subtype");
		}
		else
		{
			$this->session->set_flashdata("admin_seed_add_error","Something Wrong On Seed Sub Type Backup..........");
			redirect(base_url()."admin/admin_seed/admin_seed_trash_subtype");
			
		}
		
	}
	public function select_update_seed_subtype($subtype_id)
	{
		$seed_subtype_id=array("seed_subtype_id"=>$subtype_id);
		$status=array("status"=>0);
		$select_seed_update["seed_data_subtype"]=$this->admin_seed_model->select_seed_type($status);
		$select_seed_update['update_seed_subtype_select']=$this->admin_seed_model->seed_update_subtype_select($seed_subtype_id);
		
		$this->load->view('admin/admin_seed_update_subtype',$select_seed_update);
			
	}
	public function update_seed_subtype()
	{
		if(isset($_POST["Back"]))
		{
			redirect(base_url()."admin/admin_seed/admin_seed_add_subtype");
		}
		else
		{
				$subid=array("seed_subtype_id"=>$_POST['seed_subtype_id']);
				$data=array("seed_subtype_name"=>$_POST['seed_subtype_name'],"seed_type_id"=>$_POST['seed_type_id']);
			
				if($this->admin_seed_model->seed_subtype_update($data,$subid))
				{
					$this->session->set_flashdata("admin_seed_add","Seed Sub Type Update Success..........");
					redirect(base_url()."admin/admin_seed/admin_seed_add_subtype");
				}
				else
				{
					$this->session->set_flashdata("admin_seed_add_error","Something Wrong On Seed Sub Type Update..........");
					redirect(base_url()."admin/admin_seed/admin_seed_add_subtype");
					
				}
		}
		
	}
	
	//seed sub Menu type....................
	public function admin_seed_add_submenu()
	{
		$status=array("status"=>0);
		$seed_type["seed_data_type"]=$this->admin_seed_model->select_seed_type($status);
		$seed_type["seed_data_subtype"]=$this->admin_seed_model->select_seed_subtype($status);
		$seed_type["seed_data_submenu"]=$this->admin_seed_model->select_seed_submenu($status);
		$seed_type["seed_type"]="";
		$seed_type["seed_subtype"]="";
		$this->load->view('admin/admin_seed_add_submenu',$seed_type);
	}
	
	public function select_submenu_seed_type()
	{
		$data=array("seed_type_id"=>$_POST['seed_type_id'],"status"=>0);
		if($this->admin_seed_model->select_seed_sub_type($data))
		{
				$select_data=$this->admin_seed_model->select_seed_sub_type($data);
				$cnt=count($select_data);
				echo "<select tabindex='1' id='seed_sub_type_id' name='seed_sub_type_id' class='dropdown-menu' role='menu'>";
				echo "<option value='Select here..'>Select Seed Sub Type..</option>";
			for($i=0;$i<$cnt;$i++)
				{
			?><option value="<?php echo $select_data[$i]['seed_subtype_id']?> "><?php echo $select_data[$i]['seed_subtype_name']?></option>
			<?php
			}
													
			echo "</select>";	
		}
		else
		{
			echo "<select tabindex='1' id='seed_sub_type_id' name='seed_sub_type_id' class='dropdown-menu' role='menu'>";
				echo "<option value='Select here..'>Select Seed Sub Type..</option>";
				echo "</select>";	
		}
	}
	
	public function select_seed_sub_type_data($id)
	{
		$data=array("seed_type_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_data["seed_data_type"]=$this->admin_seed_model->select_seed_type($status);
		$select_data["seed_data_subtype"]=$this->admin_seed_model->select_seed_subtype($data);
		$select_data['seed_data_submenu']=$this->admin_seed_model->select_seed_submenu_data_type($id);
		$select_data["seed_type"]=$this->admin_seed_model->select_seed_data_type($data);
		//print_r($select_data["seed_type"]);
		//die();
		$select_data["seed_subtype"]="";
		if($select_data)
		{
				$this->load->view('admin/admin_seed_add_submenu',$select_data);
		}
	}

	public function select_seed_subtype_data1($id)
	{
		$data=array("seed_subtype_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_data["seed_data_type"]=$this->admin_seed_model->select_seed_type($status);
		$select_data["seed_data_subtype"]=$this->admin_seed_model->select_seed_subtype($status);
		$select_data['seed_data_submenu']=$this->admin_seed_model->select_seed_submenu_data_type1($id);
		//echo "<pre>";
		//print_r($select_data['seed_data_submenu']);
		//die();
		$select_data["seed_type"]=""	;
		//print_r($select_data["seed_type"]);
		//die();
		$select_data["seed_subtype"]=$this->admin_seed_model->select_seed_data_subtype($data);
		if($select_data)
		{
				$this->load->view('admin/admin_seed_add_submenu',$select_data);
		}
	}
	
	public function insert_seed_submenu_type()
	{
		$seed_data=array("seed_submenu_id"=>random_string('alnum',8),"seed_subtype_id"=>$_POST['seed_sub_type_id'],"seed_submenu_name"=>$_POST['seed_submenu_name']);
		//print_r($seed_data);
		//die();
		if($this->admin_seed_model->insert_seed_submenu_data($seed_data))
		{
			$this->session->set_flashdata("admin_seed_add","Seed Sub Menu Type Insert Success..........");
					redirect(base_url()."admin/admin_seed/admin_seed_add_submenu");
		}
		else
		{
		$this->session->set_flashdata("admin_seed_add_error","Something Wrong In Insert Seed Sub Menu Type Please Try Again..........");
		
		
					redirect(base_url()."admin/admin_seed/admin_seed_add_submenu");
		}
	}
	public function select_seed_submenu_type_data($id)
	{
		$id_data=explode("%20",$id);
		
		$data1=array("seed_type_id"=>$id_data[1],"status"=>0);
		$status=array("status"=>0);
		$select_data["seed_data_type"]=$this->admin_seed_model->select_seed_type($status);
		$select_data["seed_data_subtype"]=$this->admin_seed_model->select_seed_subtype($data1);
		$select_data['seed_data_submenu']=$this->admin_seed_model->select_seed_subtype_menu_data($id_data[0]);
		
		$data=array("seed_subtype_id"=>$id_data[0],"status"=>0);
		$select_data["seed_type"]=$this->admin_seed_model->select_seed_subtype($data1);
		//print_r($select_data["seed_type"]);
		//die();
		$select_data["seed_subtype"]=$this->admin_seed_model->select_seed_data_subtype($data);
	//echo "<pre>";
		//print_r($select_data["seed_subtype"]);
		//die();
		//die();
				$this->load->view('admin/admin_seed_add_submenu',$select_data);
		
	}
	public function admin_seed_trash_submenu()
	{
		$status_id=array("status"=>1);
		$seed_type["seed_data_submenu"]=$this->admin_seed_model->select_seed_submenu_trash($status_id);
		//echo "<pre>";
		//print_r($seed_type["seed_data_submenu"]);
		//die();
		$this->load->view('admin/admin_seed_submenu_trash',$seed_type);
		
	}
	public function select_delete_seed_submenu($submenu_id)
	{
		$seed_submenu_id=array("seed_submenu_id"=>$submenu_id);
		$status=array("status"=>1);
		//echo "<pre>";
		//print_r($seed_submenu_id);
		//die();
		if($this->admin_seed_model->seed_delete_submenu($seed_submenu_id,$status))
		{
			$this->session->set_flashdata("admin_seed_add","Seed Sub Menu Type Delete Success..........");
			redirect(base_url()."admin/admin_seed/admin_seed_add_submenu");
		}
		else
		{
			$this->session->set_flashdata("admin_seed_add_error","Something Wrong On Delete Seed Sub Menu Type..........");
			redirect(base_url()."admin/admin_seed/admin_seed_add_submenu");
		}
	}
	
	public function admin_seed_submenu_trash_backup($seed_submenu_id)
	{
		$id=array("seed_submenu_id"=>$seed_submenu_id);
		$status=array("status"=>0);
		//echo "<pre>";
		//print_r($id);
		//die();
		if($this->admin_seed_model->seed_trash_submenu_backup($id,$status))
		{
			$this->session->set_flashdata("admin_seed_add","Seed Sub Menu Type Back Up Success..........");
			redirect(base_url()."admin/admin_seed/admin_seed_trash_submenu");
		}
		else
		{
			$this->session->set_flashdata("admin_seed_add_error","Something Wrong On Seed Sub Menu Type Backup..........");
			redirect(base_url()."admin/admin_seed/admin_seed_trash_submenu");
			
		}
		
	}
	public function admin_seed_submenu_trash_delete($seed_submenu_id)
	{
		$id=array("seed_submenu_id"=>$seed_submenu_id);
		if($this->admin_seed_model->seed_trash_submenu_delete($id))
		{
			$this->session->set_flashdata("admin_seed_add","Seed Sub Menu Type Delete Success..........");
			redirect(base_url()."admin/admin_seed/admin_seed_trash_submenu");
		}
		else
		{
			$this->session->set_flashdata("admin_seed_add_error","Something Wrong On Seed Sub Menu Type Delete..........");
			redirect(base_url()."admin/admin_seed/admin_seed_trash_submenu");
			
		}
		
	}
	public function select_update_seed_submenu($submenu_id)
	{
		$seed_submenu_id=array("seed_submenu_id"=>$submenu_id);
		$status=array("status"=>0);
		$select_seed_update["seed_data_type"]=$this->admin_seed_model->select_seed_type($status);
		$select_seed_update['select']=$this->admin_seed_model->select_seed_subtype_data_menu($submenu_id);
		$select_seed_update["seed_data_subtype"]=$this->admin_seed_model->select_seed_subtype_menu($select_seed_update['select'][0]['seed_type_id']);	
		$select_seed_update['update_seed_submenu_select']=$this->admin_seed_model->seed_update_submenu_select($seed_submenu_id);	

		$this->load->view('admin/admin_seed_update_submenu',$select_seed_update);
			
	}
	public function update_seed_submenu()
	{
		if(isset($_POST["Back"]))
		{
			redirect(base_url()."admin/admin_seed/admin_seed_add_submenu");
		}
		else
		{
			$subid=array("seed_submenu_id"=>$_POST['seed_submenu_id']);
			$data=array("seed_submenu_name"=>$_POST['seed_submenu_name'],"seed_subtype_id"=>$_POST['seed_sub_type_id']);
		
			if($this->admin_seed_model->seed_submenu_update($data,$subid))
			{
				$this->session->set_flashdata("admin_seed_add","Seed Sub Menu Type Update Success..........");
				redirect(base_url()."admin/admin_seed/admin_seed_add_submenu");
			}
			else
			{
				$this->session->set_flashdata("admin_seed_add_error","Something Wrong On Seed Sub Menu Type Update..........");
				redirect(base_url()."admin/admin_seed/admin_seed_add_submenu");
				
			}
		}
		
	}
	
	
}
