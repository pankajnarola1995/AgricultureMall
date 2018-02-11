<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_tools extends CI_Controller {
	
	 public function __construct()
       {	
	   		parent::__construct();
			$this->load->model("admin/admin_tools_model");
        }
		//tools type........................
	public function index()
	{
		$status=array("status"=>0);
		$tools_type["tools_data_type"]=$this->admin_tools_model->select_tools_type($status);
		$this->load->view('admin/admin_tools_add_type',$tools_type);
	}
	public function insert_tools_type()
	{
		$tools_data=array("tools_type_id"=>random_string('alnum', 8),"tools_type_name"=>$_POST['tools_type_name']);
		if($this->admin_tools_model->insert_tools_type_data($tools_data))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Type Insert Success..........");
					redirect(base_url()."admin/admin_tools");
		}
		else
		{
		$this->session->set_flashdata("admin_tools_add_error","Something Wrong In Insert Tools Type Please Try Again..........");
					redirect(base_url()."admin/admin_tools");
		}
	}
	public function admin_tools_trash_type()
	{
		$status=array("status"=>1);
		$tools_type["select_tools_type"]=$this->admin_tools_model->select_tools_trash_type($status);
		
		$this->load->view('admin/admin_tools_type_trash',$tools_type);
	}
	public function select_delete_tools_type($type_id)
	{
		$tools_type_id=array("tools_type_id"=>$type_id);
		$status=array("status"=>1);
		if($this->admin_tools_model->tools_delete_type($tools_type_id,$status))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Type Delete Success..........");
			redirect(base_url()."admin/admin_tools");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Delete Tools Type..........");
			redirect(base_url()."admin/admin_tools");
		}
	}
	public function select_update_tools_type($type_id)
	{
		$tools_type_id=array("tools_type_id"=>$type_id);
		$select_tools_update['update_tools']=$this->admin_tools_model->tools_update_type_select($tools_type_id);
		$this->load->view('admin/admin_tools_update_type',$select_tools_update);
			
	}
	public function update_tools_type()
	{
		if(isset($_POST["Back"]))
		{
			redirect(base_url()."admin/admin_tools");
		}
		else
		{
				$id=array("tools_type_id"=>$_POST['tools_type_id']);
				$name=array("tools_type_name"=>$_POST['tools_type_name']);
				if($this->admin_tools_model->tools_type_update($name,$id))
				{
					$this->session->set_flashdata("admin_tools_add","Tools Type Update Success..........");
					redirect(base_url()."admin/admin_tools");
				}
				else
				{
					$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Type Update..........");
					redirect(base_url()."admin/admin_tools");
					
				}
		}
		
	}
	public function admin_tools_type_trash_backup($tools_type_id)
	{
		$id=array("tools_type_id"=>$tools_type_id);
		$status=array("status"=>0);
		if($this->admin_tools_model->tools_trash_type_backup($id,$status))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Type Back Up Success..........");
			redirect(base_url()."admin/admin_tools/admin_tools_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Type Backup..........");
			redirect(base_url()."admin/admin_tools/admin_tools_trash_type");
			
		}
		
	}
	public function admin_tools_type_trash_delete($tools_type_id)
	{
		$id=array("tools_type_id"=>$tools_type_id);
		if($this->admin_tools_model->tools_trash_type_delete($id))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Type Delete Success..........");
			redirect(base_url()."admin/admin_tools/admin_tools_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Type Delete..........");
			redirect(base_url()."admin/admin_tools/admin_tools_trash_type");
			
		}
		
	}
	//tools sub type....................
	public function admin_tools_add_subtype()
	{
		$status=array("status"=>0);
		$tools_type["tools_data_type"]=$this->admin_tools_model->select_tools_type($status);
		$tools_type["tools_data_subtype"]=$this->admin_tools_model->select_tools_subtype($status);
		$tools_type["tools_subtype"]="";
		$this->load->view('admin/admin_tools_add_subtype',$tools_type);
	}
	public function select_tools_type_data($id)
	{
		$data=array("tools_type_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_data["tools_data_type"]=$this->admin_tools_model->select_tools_type($status);
		$select_data['tools_data_subtype']=$this->admin_tools_model->select_tools_subtype_data($data);
		$select_data["tools_subtype"]=array("tools_type_id"=>$id);
		if($select_data)
		{
				$this->load->view('admin/admin_tools_add_subtype',$select_data);
		}
	}

	public function insert_tools_subtype()
	{
		$tools_data=array("tools_subtype_id"=>random_string('alnum', 8),"tools_type_id"=>$_POST['tools_type_id'],"tools_subtype_name"=>$_POST['tools_subtype_name']);
		if($this->admin_tools_model->insert_tools_subtype_data($tools_data))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Sub Type Insert Success..........");
					redirect(base_url()."admin/admin_tools/admin_tools_add_subtype");
		}
		else
		{
		$this->session->set_flashdata("admin_tools_add_error","Something Wrong In Insert Tools Sub Type Please Try Again..........");
					redirect(base_url()."admin/admin_tools/admin_tools_add_subtype");
		}
	}
	public function admin_tools_trash_subtype()
	{
		$status_id=array("status"=>1);
		$tools_type["tools_data_subtype"]=$this->admin_tools_model->select_tools_subtype($status_id);
		$this->load->view('admin/admin_tools_subtype_trash',$tools_type);
		
	}
	public function select_delete_tools_subtype($subtype_id)
	{
		$tools_subtype_id=array("tools_subtype_id"=>$subtype_id);
		$status=array("status"=>1);
		if($this->admin_tools_model->tools_delete_subtype($tools_subtype_id,$status))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Sub Type Delete Success..........");
			redirect(base_url()."admin/admin_tools/admin_tools_add_subtype");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Delete Tools Sub Type..........");
			redirect(base_url()."admin/admin_tools/admin_tools_add_subtype");
		}
	}
	public function admin_tools_subtype_trash_delete($tools_subtype_id)
	{
		$id=array("tools_subtype_id"=>$tools_subtype_id);
		if($this->admin_tools_model->tools_trash_subtype_delete($id))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Sub Type Delete Success..........");
			redirect(base_url()."admin/admin_tools/admin_tools_trash_subtype");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Sub Type Delete..........");
			redirect(base_url()."admin/admin_tools/admin_tools_trash_subtype");
			
		}
		
	}
	public function admin_tools_subtype_trash_backup($tools_subtype_id)
	{
		$id=array("tools_subtype_id"=>$tools_subtype_id);
		$status=array("status"=>0);
		if($this->admin_tools_model->tools_trash_subtype_backup($id,$status))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Sub Type Back Up Success..........");
			redirect(base_url()."admin/admin_tools/admin_tools_trash_subtype");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Sub Type Backup..........");
			redirect(base_url()."admin/admin_tools/admin_tools_trash_subtype");
			
		}
		
	}
	public function select_update_tools_subtype($subtype_id)
	{
		$tools_subtype_id=array("tools_subtype_id"=>$subtype_id);
		$status=array("status"=>0);
		$select_tools_update["tools_data_subtype"]=$this->admin_tools_model->select_tools_type($status);
		$select_tools_update['update_tools_subtype_select']=$this->admin_tools_model->tools_update_subtype_select($tools_subtype_id);
		
		$this->load->view('admin/admin_tools_update_subtype',$select_tools_update);
			
	}
	public function update_tools_subtype()
	{
		if(isset($_POST["Back"]))
		{
			redirect(base_url()."admin/admin_tools/admin_tools_add_subtype");
		}
		else
		{
				$subid=array("tools_subtype_id"=>$_POST['tools_subtype_id']);
				$data=array("tools_subtype_name"=>$_POST['tools_subtype_name'],"tools_type_id"=>$_POST['tools_type_id']);
			
				if($this->admin_tools_model->tools_subtype_update($data,$subid))
				{
					$this->session->set_flashdata("admin_tools_add","Tools Sub Type Update Success..........");
					redirect(base_url()."admin/admin_tools/admin_tools_add_subtype");
				}
				else
				{
					$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Sub Type Update..........");
					redirect(base_url()."admin/admin_tools/admin_tools_add_subtype");
					
				}
		}
		
	}
	
	
}
