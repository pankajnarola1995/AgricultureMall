<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_pesticide extends CI_Controller {
	
	 public function __construct()
       {	
	   		parent::__construct();
			$this->load->model("admin/admin_pesticide_model");
        }
		//pesticide type........................
	public function index()
	{
		$status=array("status"=>0);
		$pesticide_type["pesticide_data_type"]=$this->admin_pesticide_model->select_pesticide_type($status);
		$this->load->view('admin/admin_pesticide_add_type',$pesticide_type);
	}
	public function insert_pesticide_type()
	{
		$pesticide_data=array("pesticide_type_id"=>random_string('alnum', 8),"pesticide_type_name"=>$_POST['pesticide_type_name']);
		if($this->admin_pesticide_model->insert_pesticide_type_data($pesticide_data))
		{
			$this->session->set_flashdata("admin_pesticide_add","Pesticide Type Insert Success..........");
					redirect(base_url()."admin/admin_pesticide");
		}
		else
		{
		$this->session->set_flashdata("admin_pesticide_add_error","Something Wrong In Insert Pesticide Type Please Try Again..........");
					redirect(base_url()."admin/admin_pesticide");
		}
	}
	public function admin_pesticide_trash_type()
	{
		$status=array("status"=>1);
		$pesticide_type["select_pesticide_type"]=$this->admin_pesticide_model->select_pesticide_trash_type($status);
		
		$this->load->view('admin/admin_pesticide_type_trash',$pesticide_type);
	}
	public function select_delete_pesticide_type($type_id)
	{
		$pesticide_type_id=array("pesticide_type_id"=>$type_id);
		$status=array("status"=>1);
		if($this->admin_pesticide_model->pesticide_delete_type($pesticide_type_id,$status))
		{
			$this->session->set_flashdata("admin_pesticide_add","Pesticide Type Delete Success..........");
			redirect(base_url()."admin/admin_pesticide");
		}
		else
		{
			$this->session->set_flashdata("admin_pesticide_add_error","Something Wrong On Delete Pesticide Type..........");
			redirect(base_url()."admin/admin_pesticide");
		}
	}
	public function select_update_pesticide_type($type_id)
	{
		$pesticide_type_id=array("pesticide_type_id"=>$type_id);
		$select_pesticide_update['update_pesticide']=$this->admin_pesticide_model->pesticide_update_type_select($pesticide_type_id);
		$this->load->view('admin/admin_pesticide_update_type',$select_pesticide_update);
			
	}
	public function update_pesticide_type()
	{
		$id=array("pesticide_type_id"=>$_POST['pesticide_type_id']);
		$name=array("pesticide_type_name"=>$_POST['pesticide_type_name']);
		if($this->admin_pesticide_model->pesticide_type_update($name,$id))
		{
			$this->session->set_flashdata("admin_pesticide_add","Pesticide Type Update Success..........");
			redirect(base_url()."admin/admin_pesticide");
		}
		else
		{
			$this->session->set_flashdata("admin_pesticide_add_error","Something Wrong On Pesticide Type Update..........");
			redirect(base_url()."admin/admin_pesticide");
			
		}
		
	}
	public function admin_pesticide_type_trash_backup($pesticide_type_id)
	{
		$id=array("pesticide_type_id"=>$pesticide_type_id);
		$status=array("status"=>0);
		if($this->admin_pesticide_model->pesticide_trash_type_backup($id,$status))
		{
			$this->session->set_flashdata("admin_pesticide_add","Pesticide Type Back Up Success..........");
			redirect(base_url()."admin/admin_pesticide/admin_pesticide_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_pesticide_add_error","Something Wrong On Pesticide Type Backup..........");
			redirect(base_url()."admin/admin_pesticide/admin_pesticide_trash_type");
			
		}
		
	}
	public function admin_pesticide_type_trash_delete($pesticide_type_id)
	{
		$id=array("pesticide_type_id"=>$pesticide_type_id);
		if($this->admin_pesticide_model->pesticide_trash_type_delete($id))
		{
			$this->session->set_flashdata("admin_pesticide_add","Pesticide Type Delete Success..........");
			redirect(base_url()."admin/admin_pesticide/admin_pesticide_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_pesticide_add_error","Something Wrong On Pesticide Type Delete..........");
			redirect(base_url()."admin/admin_pesticide/admin_pesticide_trash_type");
			
		}
		
	}
	//pesticide sub type....................
	public function admin_pesticide_add_subtype()
	{
		$status=array("status"=>0);
		$pesticide_type["pesticide_data_type"]=$this->admin_pesticide_model->select_pesticide_type($status);
		$pesticide_type["pesticide_data_subtype"]=$this->admin_pesticide_model->select_pesticide_subtype($status);
		$pesticide_type["pesticide_data_sub"]="";
		$this->load->view('admin/admin_pesticide_add_subtype',$pesticide_type);
	}
	public function select_pesticide_type_data($id)
	{
		$data=array("pesticide_type_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_data["pesticide_data_type"]=$this->admin_pesticide_model->select_pesticide_type($status);
		$select_data['pesticide_data_subtype']=$this->admin_pesticide_model->select_pesticide_subtype_data($data);
		$select_data["pesticide_data_sub"]=array("pesticide_type_id"=>$id);
		if($select_data)
		{
				$this->load->view('admin/admin_pesticide_add_subtype',$select_data);
		}
	}

	public function insert_pesticide_subtype()
	{
		$pesticide_data=array("pesticide_subtype_id"=>random_string('alnum', 8),"pesticide_type_id"=>$_POST['pesticide_type_id'],"pesticide_subtype_name"=>$_POST['pesticide_subtype_name']);
		if($this->admin_pesticide_model->insert_pesticide_subtype_data($pesticide_data))
		{
			$this->session->set_flashdata("admin_pesticide_add","Pesticide Sub Type Insert Success..........");
					redirect(base_url()."admin/admin_pesticide/admin_pesticide_add_subtype");
		}
		else
		{
		$this->session->set_flashdata("admin_pesticide_add_error","Something Wrong In Insert Pesticide Sub Type Please Try Again..........");
					redirect(base_url()."admin/admin_pesticide/admin_pesticide_add_subtype");
		}
	}
	public function admin_pesticide_trash_subtype()
	{
		$status_id=array("status"=>1);
		$pesticide_type["pesticide_data_subtype"]=$this->admin_pesticide_model->select_pesticide_subtype($status_id);
		$this->load->view('admin/admin_pesticide_subtype_trash',$pesticide_type);
		
	}
	public function select_delete_pesticide_subtype($subtype_id)
	{
		$pesticide_subtype_id=array("pesticide_subtype_id"=>$subtype_id);
		$status=array("status"=>1);
		if($this->admin_pesticide_model->pesticide_delete_subtype($pesticide_subtype_id,$status))
		{
			$this->session->set_flashdata("admin_pesticide_add","Pesticide Sub Type Delete Success..........");
			redirect(base_url()."admin/admin_pesticide/admin_pesticide_add_subtype");
		}
		else
		{
			$this->session->set_flashdata("admin_pesticide_add_error","Something Wrong On Delete Pesticide Sub Type..........");
			redirect(base_url()."admin/admin_pesticide/admin_pesticide_add_subtype");
		}
	}
	public function admin_pesticide_subtype_trash_delete($pesticide_subtype_id)
	{
		$id=array("pesticide_subtype_id"=>$pesticide_subtype_id);
		if($this->admin_pesticide_model->pesticide_trash_subtype_delete($id))
		{
			$this->session->set_flashdata("admin_pesticide_add","Pesticide Sub Type Delete Success..........");
			redirect(base_url()."admin/admin_pesticide/admin_pesticide_trash_subtype");
		}
		else
		{
			$this->session->set_flashdata("admin_pesticide_add_error","Something Wrong On Pesticide Sub Type Delete..........");
			redirect(base_url()."admin/admin_pesticide/admin_pesticide_trash_subtype");
			
		}
		
	}
	public function admin_pesticide_subtype_trash_backup($pesticide_subtype_id)
	{
		$id=array("pesticide_subtype_id"=>$pesticide_subtype_id);
		$status=array("status"=>0);
		if($this->admin_pesticide_model->pesticide_trash_subtype_backup($id,$status))
		{
			$this->session->set_flashdata("admin_pesticide_add","Pesticide Sub Type Back Up Success..........");
			redirect(base_url()."admin/admin_pesticide/admin_pesticide_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_pesticide_add_error","Something Wrong On Pesticide Sub Type Backup..........");
			redirect(base_url()."admin/admin_pesticide/admin_pesticide_trash_type");
			
		}
		
	}
	public function select_update_pesticide_subtype($subtype_id)
	{
		$pesticide_subtype_id=array("pesticide_subtype_id"=>$subtype_id);
		$status=array("status"=>0);
		$select_pesticide_update["pesticide_data_subtype"]=$this->admin_pesticide_model->select_pesticide_type($status);
		$select_pesticide_update['update_pesticide_subtype_select']=$this->admin_pesticide_model->pesticide_update_subtype_select($pesticide_subtype_id);
		
		$this->load->view('admin/admin_pesticide_update_subtype',$select_pesticide_update);
			
	}
	public function update_pesticide_subtype()
	{
		$subid=array("pesticide_subtype_id"=>$_POST['pesticide_subtype_id']);
		$data=array("pesticide_subtype_name"=>$_POST['pesticide_subtype_name'],"pesticide_type_id"=>$_POST['pesticide_type_id']);
	
		if($this->admin_pesticide_model->pesticide_subtype_update($data,$subid))
		{
			$this->session->set_flashdata("admin_pesticide_add","Pesticide Sub Type Update Success..........");
			redirect(base_url()."admin/admin_pesticide/admin_pesticide_add_subtype");
		}
		else
		{
			$this->session->set_flashdata("admin_pesticide_add_error","Something Wrong On Pesticide Sub Type Update..........");
			redirect(base_url()."admin/admin_pesticide/admin_pesticide_add_subtype");
			
		}
		
	}
	
	
	
	
}
