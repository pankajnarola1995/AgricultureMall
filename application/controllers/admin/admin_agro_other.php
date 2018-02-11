<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_agro_other extends CI_Controller {
	
	 public function __construct()
       {	
	   		parent::__construct();
			$this->load->model("admin/admin_agro_other_model");
        }
		
	//seed cultivation data...
	public function seed_cultivation_type()
	{
		$status=array("status"=>0);
		$seed_cultivation_type["seed_cultivation_type"]=$this->admin_agro_other_model->select_seed_cultivation_type($status);
		$this->load->view('admin/admin_seed_add_cultivation',$seed_cultivation_type);
	}
	public function insert_seed_cultivation_type()
	{
		
		$seed_cultivation=array("seed_cultivation_id"=>random_string('alnum', 8),"seed_cultivation_name"=>$_POST['seed_cultivation_name']);
		//print_r($seed_cultivation);
		//die();
		if($this->admin_agro_other_model->insert_seed_cultivation_type_data($seed_cultivation))
		{
			$this->session->set_flashdata("admin_seed_add","Seed Cultivation Type Insert Success..........");
					redirect(base_url()."admin/admin_agro_other/seed_cultivation_type");
		}
		else
		{
		$this->session->set_flashdata("admin_seed_add_error","Something Wrong In Insert Seed Cultivation Type Please Try Again..........");
					redirect(base_url()."admin/admin_agro_other/seed_cultivation_type");
		}
	}
	public function select_update_seed_cultivation_type($type_id)
	{
		$seed_cultivation_id=array("seed_cultivation_id"=>$type_id);
		$select_seed_cultivation_update['update_seed_cultivation']=$this->admin_agro_other_model->seed_update_cultivation_type_select($seed_cultivation_id);
		$this->load->view('admin/admin_seed_cultivation_update_type',$select_seed_cultivation_update);
			
	}
	public function update_seed_cultivation_type()
	{
		$id=array("seed_cultivation_id"=>$_POST['seed_cultivation_id']);
		$name=array("seed_cultivation_name"=>$_POST['seed_cultivation_name']);
		if($this->admin_agro_other_model->seed_cultivation_type_update($name,$id))
		{
			$this->session->set_flashdata("admin_seed_add","Seed Cultivation Type Update Success..........");
			redirect(base_url()."admin/admin_agro_other/seed_cultivation_type");
		}
		else
		{
			$this->session->set_flashdata("admin_seed_add_error","Something Wrong On Seed Cultivation Type Update..........");
			redirect(base_url()."admin/admin_agro_other/seed_cultivation_type");
			
		}
		
	}
	public function select_delete_seed_cultivation_type($type_id)
	{
		$seed_cultivation_id=array("seed_cultivation_id"=>$type_id);
		$status=array("status"=>1);
		if($this->admin_agro_other_model->seed_delete_cultivation_type($seed_cultivation_id,$status))
		{
			$this->session->set_flashdata("admin_seed_add","Seed Cultivation Type Delete Success..........");
			redirect(base_url()."admin/admin_agro_other/seed_cultivation_type");
		}
		else
		{
			$this->session->set_flashdata("admin_seed_add_error","Something Wrong On Delete Seed Cultivation Type..........");
			redirect(base_url()."admin/admin_agro_other/seed_cultivation_type");
		}
	}
	
	public function admin_seed_cultivation_trash_type()
	{
		$status=array("status"=>1);
		$seed_cultivation_type["select_seed_cultivation_type"]=$this->admin_agro_other_model->select_seed_cultivation_trash_type($status);
		
		$this->load->view('admin/admin_seed_cultivation_trash',$seed_cultivation_type);
	}
	public function admin_seed_cultivation_type_trash_delete($seed_cultivation_id)
	{
		$id=array("seed_cultivation_id"=>$seed_cultivation_id);
		if($this->admin_agro_other_model->seed_trash_cultivation_type_delete($id))
		{
			$this->session->set_flashdata("admin_seed_add","Seed Cultivation Type Delete Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_seed_cultivation_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_seed_add_error","Something Wrong On Seed Cultivation Type Delete..........");
			redirect(base_url()."admin/admin_agro_other/admin_seed_cultivation_trash_type");
			
		}
		
	}
	public function admin_seed_cultivation_type_trash_backup($seed_cultivation_id)
	{
		$id=array("seed_cultivation_id"=>$seed_cultivation_id);
		$status=array("status"=>0);
		if($this->admin_agro_other_model->seed_trash_cultivation_type_backup($id,$status))
		{
			$this->session->set_flashdata("admin_seed_add","Seed Cultivation Type Back Up Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_seed_cultivation_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_seed_add_error","Something Wrong On Seed Cultivation Type Backup..........");
			redirect(base_url()."admin/admin_agro_other/admin_seed_cultivation_trash_type");
			
		}
		
	}

//fertilizer appearance data...
	public function fertilizer_appearance_type()
	{
		$status=array("status"=>0);
		$fertilizer_appearance_type["fertilizer_appearance_type"]=$this->admin_agro_other_model->select_fertilizer_appearance_type($status);
		$this->load->view('admin/admin_fertilizer_add_appearance',$fertilizer_appearance_type);
	}
	public function insert_fertilizer_appearance_type()
	{
		
		$fertilizer_appearance=array("fertilizer_appearance_id"=>random_string('alnum', 8),"fertilizer_appearance_name"=>$_POST['fertilizer_appearance_name']);
		//print_r($fertilizer_appearance);
		//die();
		if($this->admin_agro_other_model->insert_fertilizer_appearance_type_data($fertilizer_appearance))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Appearance Insert Success..........");
					redirect(base_url()."admin/admin_agro_other/fertilizer_appearance_type");
		}
		else
		{
		$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong In Insert Fertilizer Appearance Please Try Again..........");
					redirect(base_url()."admin/admin_agro_other/fertilizer_appearance_type");
		}
	}
	public function select_update_fertilizer_appearance_type($type_id)
	{
		$fertilizer_appearance_id=array("fertilizer_appearance_id"=>$type_id);
		$select_fertilizer_appearance_update['update_fertilizer_appearance']=$this->admin_agro_other_model->fertilizer_update_appearance_type_select($fertilizer_appearance_id);
		$this->load->view('admin/admin_fertilizer_appearance_update_type',$select_fertilizer_appearance_update);
			
	}
	public function update_fertilizer_appearance_type()
	{
		$id=array("fertilizer_appearance_id"=>$_POST['fertilizer_appearance_id']);
		$name=array("fertilizer_appearance_name"=>$_POST['fertilizer_appearance_name']);
		if($this->admin_agro_other_model->fertilizer_appearance_type_update($name,$id))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Appearance Update Success..........");
			redirect(base_url()."admin/admin_agro_other/fertilizer_appearance_type");
		}
		else
		{
			$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong On Fertilizer Appearance Update..........");
			redirect(base_url()."admin/admin_agro_other/fertilizer_appearance_type");
			
		}
		
	}
	public function select_delete_fertilizer_appearance_type($type_id)
	{
		$fertilizer_appearance_id=array("fertilizer_appearance_id"=>$type_id);
		$status=array("status"=>1);
		if($this->admin_agro_other_model->fertilizer_delete_appearance_type($fertilizer_appearance_id,$status))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Appearance Delete Success..........");
			redirect(base_url()."admin/admin_agro_other/fertilizer_appearance_type");
		}
		else
		{
			$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong On Delete Fertilizer Appearance ..........");
			redirect(base_url()."admin/admin_agro_other/fertilizer_appearance_type");
		}
	}
	
	public function admin_fertilizer_appearance_trash_type()
	{
		$status=array("status"=>1);
		$fertilizer_appearance_type["select_fertilizer_appearance_type"]=$this->admin_agro_other_model->select_fertilizer_appearance_trash_type($status);
		
		$this->load->view('admin/admin_fertilizer_appearance_trash',$fertilizer_appearance_type);
	}
	public function admin_fertilizer_appearance_type_trash_delete($fertilizer_appearance_id)
	{
		$id=array("fertilizer_appearance_id"=>$fertilizer_appearance_id);
		if($this->admin_agro_other_model->fertilizer_trash_appearance_type_delete($id))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Appearance Delete Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_fertilizer_appearance_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong On Fertilizer Appearance Delete..........");
			redirect(base_url()."admin/admin_agro_other/admin_fertilizer_appearance_trash_type");
			
		}
		
	}
	public function admin_fertilizer_appearance_type_trash_backup($fertilizer_appearance_id)
	{
		$id=array("fertilizer_appearance_id"=>$fertilizer_appearance_id);
		$status=array("status"=>0);
		if($this->admin_agro_other_model->fertilizer_trash_appearance_type_backup($id,$status))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Appearance Back Up Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_fertilizer_appearance_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong On Fertilizer Appearance Backup..........");
			redirect(base_url()."admin/admin_agro_other/admin_fertilizer_appearance_trash_type");
			
		}
		
	}
	
	
//fertilizer classification data...
	public function fertilizer_classification_type()
	{
		$status=array("status"=>0);
		$fertilizer_classification_type["fertilizer_classification_type"]=$this->admin_agro_other_model->select_fertilizer_classification_type($status);
		$this->load->view('admin/admin_fertilizer_add_classification',$fertilizer_classification_type);
	}
	public function insert_fertilizer_classification_type()
	{
		
		$fertilizer_classification=array("fertilizer_classification_id"=>random_string('alnum', 8),"fertilizer_classification_name"=>$_POST['fertilizer_classification_name']);
		//print_r($fertilizer_classification);
		//die();
		if($this->admin_agro_other_model->insert_fertilizer_classification_type_data($fertilizer_classification))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Classification Insert Success..........");
					redirect(base_url()."admin/admin_agro_other/fertilizer_classification_type");
		}
		else
		{
		$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong In Insert Fertilizer Classification Please Try Again..........");
					redirect(base_url()."admin/admin_agro_other/fertilizer_classification_type");
		}
	}
	public function select_update_fertilizer_classification_type($type_id)
	{
		$fertilizer_classification_id=array("fertilizer_classification_id"=>$type_id);
		$select_fertilizer_classification_update['update_fertilizer_classification']=$this->admin_agro_other_model->fertilizer_update_classification_type_select($fertilizer_classification_id);
		$this->load->view('admin/admin_fertilizer_classification_update_type',$select_fertilizer_classification_update);
			
	}
	public function update_fertilizer_classification_type()
	{
		$id=array("fertilizer_classification_id"=>$_POST['fertilizer_classification_id']);
		$name=array("fertilizer_classification_name"=>$_POST['fertilizer_classification_name']);
		if($this->admin_agro_other_model->fertilizer_classification_type_update($name,$id))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Classification Update Success..........");
			redirect(base_url()."admin/admin_agro_other/fertilizer_classification_type");
		}
		else
		{
			$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong On Fertilizer Classification Update..........");
			redirect(base_url()."admin/admin_agro_other/fertilizer_classification_type");
			
		}
		
	}
	public function select_delete_fertilizer_classification_type($type_id)
	{
		$fertilizer_classification_id=array("fertilizer_classification_id"=>$type_id);
		$status=array("status"=>1);
		if($this->admin_agro_other_model->fertilizer_delete_classification_type($fertilizer_classification_id,$status))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Classification Delete Success..........");
			redirect(base_url()."admin/admin_agro_other/fertilizer_classification_type");
		}
		else
		{
			$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong On Delete Fertilizer Classification .........");
			redirect(base_url()."admin/admin_agro_other/fertilizer_classification_type");
		}
	}
	
	public function admin_fertilizer_classification_trash_type()
	{
		$status=array("status"=>1);
		$fertilizer_classification_type["select_fertilizer_classification_type"]=$this->admin_agro_other_model->select_fertilizer_classification_trash_type($status);
		
		$this->load->view('admin/admin_fertilizer_classification_trash',$fertilizer_classification_type);
	}
	public function admin_fertilizer_classification_type_trash_delete($fertilizer_classification_id)
	{
		$id=array("fertilizer_classification_id"=>$fertilizer_classification_id);
		if($this->admin_agro_other_model->fertilizer_trash_classification_type_delete($id))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Classification Delete Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_fertilizer_classification_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong On Fertilizer Classification Delete..........");
			redirect(base_url()."admin/admin_agro_other/admin_fertilizer_classification_trash_type");
			
		}
		
	}
	public function admin_fertilizer_classification_type_trash_backup($fertilizer_classification_id)
	{
		$id=array("fertilizer_classification_id"=>$fertilizer_classification_id);
		$status=array("status"=>0);
		if($this->admin_agro_other_model->fertilizer_trash_classification_type_backup($id,$status))
		{
			$this->session->set_flashdata("admin_fertilizer_add","Fertilizer Classification Back Up Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_fertilizer_classification_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_fertilizer_add_error","Something Wrong On Fertilizer Classification Backup..........");
			redirect(base_url()."admin/admin_agro_other/admin_fertilizer_classification_trash_type");
			
		}
		
	}
	
//tools engine data...
	public function tools_engine_type()
	{
		$status=array("status"=>0);
		$tools_engine_type["tools_engine_type"]=$this->admin_agro_other_model->select_tools_engine_type($status);
		$this->load->view('admin/admin_tools_add_engine',$tools_engine_type);
	}
	public function insert_tools_engine_type()
	{
		
		$tools_engine=array("tools_engine_id"=>random_string('alnum', 8),"tools_engine_name"=>$_POST['tools_engine_name']);
		//print_r($tools_engine);
		//die();
		if($this->admin_agro_other_model->insert_tools_engine_type_data($tools_engine))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Engine Type Insert Success..........");
					redirect(base_url()."admin/admin_agro_other/tools_engine_type");
		}
		else
		{
		$this->session->set_flashdata("admin_tools_add_error","Something Wrong In Insert Tools Engine Type Please Try Again..........");
					redirect(base_url()."admin/admin_agro_other/tools_engine_type");
		}
	}
	public function select_update_tools_engine_type($type_id)
	{
		$tools_engine_id=array("tools_engine_id"=>$type_id);
		$select_tools_engine_update['update_tools_engine']=$this->admin_agro_other_model->tools_update_engine_type_select($tools_engine_id);
		$this->load->view('admin/admin_tools_engine_update_type',$select_tools_engine_update);
			
	}
	public function update_tools_engine_type()
	{
		$id=array("tools_engine_id"=>$_POST['tools_engine_id']);
		$name=array("tools_engine_name"=>$_POST['tools_engine_name']);
		if($this->admin_agro_other_model->tools_engine_type_update($name,$id))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Engine Type Update Success..........");
			redirect(base_url()."admin/admin_agro_other/tools_engine_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Engine Type Update..........");
			redirect(base_url()."admin/admin_agro_other/tools_engine_type");
			
		}
		
	}
	public function select_delete_tools_engine_type($type_id)
	{
		$tools_engine_id=array("tools_engine_id"=>$type_id);
		$status=array("status"=>1);
		if($this->admin_agro_other_model->tools_delete_engine_type($tools_engine_id,$status))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Engine Type Delete Success..........");
			redirect(base_url()."admin/admin_agro_other/tools_engine_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Delete Tools Engine Type..........");
			redirect(base_url()."admin/admin_agro_other/tools_engine_type");
		}
	}
	
	public function admin_tools_engine_trash_type()
	{
		$status=array("status"=>1);
		$tools_engine_type["select_tools_engine_type"]=$this->admin_agro_other_model->select_tools_engine_trash_type($status);
		
		$this->load->view('admin/admin_tools_engine_trash',$tools_engine_type);
	}
	public function admin_tools_engine_type_trash_delete($tools_engine_id)
	{
		$id=array("tools_engine_id"=>$tools_engine_id);
		if($this->admin_agro_other_model->tools_trash_engine_type_delete($id))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Engine Type Delete Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_engine_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Engine Type Delete..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_engine_trash_type");
			
		}
		
	}
	public function admin_tools_engine_type_trash_backup($tools_engine_id)
	{
		$id=array("tools_engine_id"=>$tools_engine_id);
		$status=array("status"=>0);
		if($this->admin_agro_other_model->tools_trash_engine_type_backup($id,$status))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Engine Type Back Up Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_engine_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Engine Type Backup..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_engine_trash_type");
			
		}
		
	}
	//tools fuel data...
	public function tools_fuel_type()
	{
		$status=array("status"=>0);
		$tools_fuel_type["tools_fuel_type"]=$this->admin_agro_other_model->select_tools_fuel_type($status);
		$this->load->view('admin/admin_tools_add_fuel',$tools_fuel_type);
	}
	public function insert_tools_fuel_type()
	{
		
		$tools_fuel=array("tools_fuel_id"=>random_string('alnum', 8),"tools_fuel_name"=>$_POST['tools_fuel_name']);
		//print_r($tools_fuel);
		//die();
		if($this->admin_agro_other_model->insert_tools_fuel_type_data($tools_fuel))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Fuel Type Insert Success..........");
					redirect(base_url()."admin/admin_agro_other/tools_fuel_type");
		}
		else
		{
		$this->session->set_flashdata("admin_tools_add_error","Something Wrong In Insert Tools Fuel Type Please Try Again..........");
					redirect(base_url()."admin/admin_agro_other/tools_fuel_type");
		}
	}
	public function select_update_tools_fuel_type($type_id)
	{
		$tools_fuel_id=array("tools_fuel_id"=>$type_id);
		$select_tools_fuel_update['update_tools_fuel']=$this->admin_agro_other_model->tools_update_fuel_type_select($tools_fuel_id);
		$this->load->view('admin/admin_tools_fuel_update_type',$select_tools_fuel_update);
			
	}
	public function update_tools_fuel_type()
	{
		$id=array("tools_fuel_id"=>$_POST['tools_fuel_id']);
		$name=array("tools_fuel_name"=>$_POST['tools_fuel_name']);
		if($this->admin_agro_other_model->tools_fuel_type_update($name,$id))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Fuel Type Update Success..........");
			redirect(base_url()."admin/admin_agro_other/tools_fuel_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Fuel Type Update..........");
			redirect(base_url()."admin/admin_agro_other/tools_fuel_type");
			
		}
		
	}
	public function select_delete_tools_fuel_type($type_id)
	{
		$tools_fuel_id=array("tools_fuel_id"=>$type_id);
		$status=array("status"=>1);
		if($this->admin_agro_other_model->tools_delete_fuel_type($tools_fuel_id,$status))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Fuel Type Delete Success..........");
			redirect(base_url()."admin/admin_agro_other/tools_fuel_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Delete Tools Fuel Type..........");
			redirect(base_url()."admin/admin_agro_other/tools_fuel_type");
		}
	}
	
	public function admin_tools_fuel_trash_type()
	{
		$status=array("status"=>1);
		$tools_fuel_type["select_tools_fuel_type"]=$this->admin_agro_other_model->select_tools_fuel_trash_type($status);
		
		$this->load->view('admin/admin_tools_fuel_trash',$tools_fuel_type);
	}
	public function admin_tools_fuel_type_trash_delete($tools_fuel_id)
	{
		$id=array("tools_fuel_id"=>$tools_fuel_id);
		if($this->admin_agro_other_model->tools_trash_fuel_type_delete($id))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Fuel Type Delete Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_fuel_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Fuel Type Delete..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_fuel_trash_type");
			
		}
		
	}
	public function admin_tools_fuel_type_trash_backup($tools_fuel_id)
	{
		$id=array("tools_fuel_id"=>$tools_fuel_id);
		$status=array("status"=>0);
		if($this->admin_agro_other_model->tools_trash_fuel_type_backup($id,$status))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Fuel Type Back Up Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_fuel_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Fuel Type Backup..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_fuel_trash_type");
			
		}
		
	}
//tools detail type...............
	public function admin_tools_add_detail_type()
	{
		$status=array("status"=>0);
		$tools_add_detail_type["tools_add_type"]=$this->admin_agro_other_model->select_tools_add_type($status);
		$tools_add_detail_type["tools_add_detail_type"]=$this->admin_agro_other_model->select_tools_add_detail_type($status);
		//echo "<pre>";print_r($tools_add_detail_type);die();
		$tools_add_detail_type["tools_subtype"]="";
		$this->load->view('admin/admin_tools_add_detail_type',$tools_add_detail_type);
	}
public function insert_tools_detail_type()
	{
		//echo "jkgk";die("dhv");
		$tools_detail_type=array("tools_detail_type_id"=>random_string('alnum', 8),"tools_detail_type_name"=>$_POST['tools_detail_type_name'],"tools_type_id"=>$_POST['tools_type_id']);
		///print_r($tools_detail_type);
		//die();
		
		if($this->admin_agro_other_model->insert_tools_detail_type_data($tools_detail_type))
		{
			$this->session->set_flashdata("admin_tools_add","Tools detail Type Insert Success..........");
					redirect(base_url()."admin/admin_agro_other/admin_tools_add_detail_type");
		}
		else
		{
		$this->session->set_flashdata("admin_tools_add_error","Something Wrong In Insert Tools detail Type Please Try Again..........");
					redirect(base_url()."admin/admin_agro_other/admin_tools_add_detail_type");
		}
	}
public function select_tools_details_type_data($id)
	{
		$data=array("tools_type_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_data["tools_add_type"]=$this->admin_agro_other_model->select_tools_add_type($status);
		$select_data['tools_add_detail_type']=$this->admin_agro_other_model->select_tools_detalitype_data($data);
		$select_data["tools_subtype"]=array("tools_type_id"=>$id);
		if($select_data)
		{
				$this->load->view('admin/admin_tools_add_detail_type',$select_data);
		}
	}
public function select_update_tools_detailtype($detailtype_id)
	{
		$tools_detailtype_id=array("tools_detail_type_id"=>$detailtype_id);
		$status=array("status"=>0);
		$select_tools_update["tools_data_type"]=$this->admin_agro_other_model->select_tools_add_type($status);
		$select_tools_update['update_tools_subtype_select']=$this->admin_agro_other_model->select_tools_detalitype_data($tools_detailtype_id);
		//print_r($select_tools_update['update_tools_subtype_select']);
		//die();
		$this->load->view('admin/admin_tools_update_detail_type',$select_tools_update);
			
	}
public function update_tools_detailtype()
	{
		
				$subid=array("tools_detail_type_id"=>$_POST['tools_detailtype_id']);
				$data=array("tools_detail_type_name"=>$_POST['tools_detailtype_name'],"tools_type_id"=>$_POST['tools_type_id']);
			
				if($this->admin_agro_other_model->tools_detailtype_update($data,$subid))
				{
					$this->session->set_flashdata("admin_tools_add","Tools Detail Type Update Success..........");
					redirect(base_url()."admin/admin_agro_other/admin_tools_add_detail_type");
				}
				else
				{
					$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Detail Type Update..........");
					redirect(base_url()."admin/admin_agro_other/admin_tools_add_detail_type");
					
				}
	
		
	}
	public function select_delete_tools_detailtype($detailtype_id)
	{
		$tools_detailtype_id=array("tools_detail_type_id"=>$detailtype_id);
		//print_r($tools_detailtype_id);
		//die();
		$status=array("status"=>1);
		if($this->admin_agro_other_model->tools_delete_detailtype($tools_detailtype_id,$status))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Detail Type Delete Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_add_detail_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Delete Tools Detail Type..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_add_detail_type");
		}
	}
	public function admin_tools_detailtype_trash_type()
	{
		$status=array("status"=>1);
		$tools_engine_type["select_tools_deatil_type"]=$this->admin_agro_other_model->select_tools_detailtype_trash_type($status);
		
		$this->load->view('admin/admin_tools_detailtype_trash',$tools_engine_type);
	}
	public function admin_tools_detailtype_trash_delete($tools_detail_type_id)
	{
		$id=array("tools_detail_type_id"=>$tools_detail_type_id);
		if($this->admin_agro_other_model->tools_trash_detailtype_delete($id))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Detail Type Delete Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_detailtype_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Detail Type Delete..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_detailtype_trash_type");
			
		}
		
	}
public function admin_tools_detailtype_trash_backup($tools_detail_type_id)
	{
		$id=array("tools_detail_type_id"=>$tools_detail_type_id);
		$status=array("status"=>0);
		if($this->admin_agro_other_model->tools_trash_detailtype_backup($id,$status))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Detail Type Back Up Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_detailtype_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Detail Type Backup..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_detailtype_trash_type");
			
		}
		
	}
	public function pesticide_appearance_type()
	{
		$status=array("status"=>0);
		$pesticide_appearance_type["pesticide_appearance_type"]=$this->admin_agro_other_model->select_pesticide_appearance_type($status);
		$this->load->view('admin/admin_pesticide_add_appearance',$pesticide_appearance_type);
	}
	public function insert_pesticide_appearance_type()
	{
		
		$pesticide_appearance=array("pesticide_appearance_id"=>random_string('alnum', 8),"pesticide_appearance_name"=>$_POST['pesticide_appearance_name']);
		//print_r($pesticide_appearance);
		//die();
		if($this->admin_agro_other_model->insert_pesticide_appearance_type_data($pesticide_appearance))
		{
			$this->session->set_flashdata("admin_pesticide_add","Pesticide Appearance Insert Success..........");
					redirect(base_url()."admin/admin_agro_other/pesticide_appearance_type");
		}
		else
		{
		$this->session->set_flashdata("admin_pesticide_add_error","Something Wrong In Insert Pesticide Appearance Please Try Again..........");
					redirect(base_url()."admin/admin_agro_other/pesticide_appearance_type");
		}
	}
	public function select_update_pesticide_appearance_type($type_id)
	{
		$pesticide_appearance_id=array("pesticide_appearance_id"=>$type_id);
		$select_pesticide_appearance_update['update_pesticide_appearance']=$this->admin_agro_other_model->pesticide_update_appearance_type_select($pesticide_appearance_id);
		$this->load->view('admin/admin_pesticide_appearance_update_type',$select_pesticide_appearance_update);
			
	}
	public function update_pesticide_appearance_type()
	{
		$id=array("pesticide_appearance_id"=>$_POST['pesticide_appearance_id']);
		$name=array("pesticide_appearance_name"=>$_POST['pesticide_appearance_name']);
		if($this->admin_agro_other_model->pesticide_appearance_type_update($name,$id))
		{
			$this->session->set_flashdata("admin_pesticide_add","pesticide Appearance Update Success..........");
			redirect(base_url()."admin/admin_agro_other/pesticide_appearance_type");
		}
		else
		{
			$this->session->set_flashdata("admin_pesticide_add_error","Something Wrong On pesticide Appearance Update..........");
			redirect(base_url()."admin/admin_agro_other/pesticide_appearance_type");
			
		}
		
	}
	public function select_delete_pesticide_appearance_type($type_id)
	{
		$pesticide_appearance_id=array("pesticide_appearance_id"=>$type_id);
		$status=array("status"=>1);
		if($this->admin_agro_other_model->pesticide_delete_appearance_type($pesticide_appearance_id,$status))
		{
			$this->session->set_flashdata("admin_pesticide_add","pesticide Appearance Delete Success..........");
			redirect(base_url()."admin/admin_agro_other/pesticide_appearance_type");
		}
		else
		{
			$this->session->set_flashdata("admin_pesticide_add_error","Something Wrong On Delete pesticide Appearance ..........");
			redirect(base_url()."admin/admin_agro_other/pesticide_appearance_type");
		}
	}
	
	public function admin_pesticide_appearance_trash_type()
	{
		$status=array("status"=>1);
		$pesticide_appearance_type["select_pesticide_appearance_type"]=$this->admin_agro_other_model->select_pesticide_appearance_trash_type($status);
		
		$this->load->view('admin/admin_pesticide_appearance_trash',$pesticide_appearance_type);
	}
	public function admin_pesticide_appearance_type_trash_delete($pesticide_appearance_id)
	{
		$id=array("pesticide_appearance_id"=>$pesticide_appearance_id);
		if($this->admin_agro_other_model->pesticide_trash_appearance_type_delete($id))
		{
			$this->session->set_flashdata("admin_pesticide_add","pesticide Appearance Delete Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_pesticide_appearance_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_pesticide_add_error","Something Wrong On pesticide Appearance Delete..........");
			redirect(base_url()."admin/admin_agro_other/admin_pesticide_appearance_trash_type");
			
		}
		
	}
	public function admin_pesticide_appearance_type_trash_backup($pesticide_appearance_id)
	{
		$id=array("pesticide_appearance_id"=>$pesticide_appearance_id);
		$status=array("status"=>0);
		if($this->admin_agro_other_model->pesticide_trash_appearance_type_backup($id,$status))
		{
			$this->session->set_flashdata("admin_pesticide_add","pesticide Appearance Back Up Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_pesticide_appearance_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_pesticide_add_error","Something Wrong On pesticide Appearance Backup..........");
			redirect(base_url()."admin/admin_agro_other/admin_pesticide_appearance_trash_type");
			
		}
		
	}
	
	
//pesticide classification data...
	public function pesticide_classification_type()
	{
		$status=array("status"=>0);
		$pesticide_classification_type["pesticide_classification_type"]=$this->admin_agro_other_model->select_pesticide_classification_type($status);
		$this->load->view('admin/admin_pesticide_add_classification',$pesticide_classification_type);
	}
	public function insert_pesticide_classification_type()
	{
		
		$pesticide_classification=array("pesticide_classification_id"=>random_string('alnum', 8),"pesticide_classification_name"=>$_POST['pesticide_classification_name']);
		//print_r($pesticide_classification);
		//die();
		if($this->admin_agro_other_model->insert_pesticide_classification_type_data($pesticide_classification))
		{
			$this->session->set_flashdata("admin_pesticide_add","pesticide Classification Insert Success..........");
					redirect(base_url()."admin/admin_agro_other/pesticide_classification_type");
		}
		else
		{
		$this->session->set_flashdata("admin_pesticide_add_error","Something Wrong In Insert pesticide Classification Please Try Again..........");
					redirect(base_url()."admin/admin_agro_other/pesticide_classification_type");
		}
	}
	public function select_update_pesticide_classification_type($type_id)
	{
		$pesticide_classification_id=array("pesticide_classification_id"=>$type_id);
		$select_pesticide_classification_update['update_pesticide_classification']=$this->admin_agro_other_model->pesticide_update_classification_type_select($pesticide_classification_id);
		$this->load->view('admin/admin_pesticide_classification_update_type',$select_pesticide_classification_update);
			
	}
	public function update_pesticide_classification_type()
	{
		$id=array("pesticide_classification_id"=>$_POST['pesticide_classification_id']);
		$name=array("pesticide_classification_name"=>$_POST['pesticide_classification_name']);
		if($this->admin_agro_other_model->pesticide_classification_type_update($name,$id))
		{
			$this->session->set_flashdata("admin_pesticide_add","pesticide Classification Update Success..........");
			redirect(base_url()."admin/admin_agro_other/pesticide_classification_type");
		}
		else
		{
			$this->session->set_flashdata("admin_pesticide_add_error","Something Wrong On pesticide Classification Update..........");
			redirect(base_url()."admin/admin_agro_other/pesticide_classification_type");
			
		}
		
	}
	public function select_delete_pesticide_classification_type($type_id)
	{
		$pesticide_classification_id=array("pesticide_classification_id"=>$type_id);
		$status=array("status"=>1);
		if($this->admin_agro_other_model->pesticide_delete_classification_type($pesticide_classification_id,$status))
		{
			$this->session->set_flashdata("admin_pesticide_add","pesticide Classification Delete Success..........");
			redirect(base_url()."admin/admin_agro_other/pesticide_classification_type");
		}
		else
		{
			$this->session->set_flashdata("admin_pesticide_add_error","Something Wrong On Delete pesticide Classification .........");
			redirect(base_url()."admin/admin_agro_other/pesticide_classification_type");
		}
	}
	
	public function admin_pesticide_classification_trash_type()
	{
		$status=array("status"=>1);
		$pesticide_classification_type["select_pesticide_classification_type"]=$this->admin_agro_other_model->select_pesticide_classification_trash_type($status);
		
		$this->load->view('admin/admin_pesticide_classification_trash',$pesticide_classification_type);
	}
	public function admin_pesticide_classification_type_trash_delete($pesticide_classification_id)
	{
		$id=array("pesticide_classification_id"=>$pesticide_classification_id);
		if($this->admin_agro_other_model->pesticide_trash_classification_type_delete($id))
		{
			$this->session->set_flashdata("admin_pesticide_add","pesticide Classification Delete Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_pesticide_classification_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_pesticide_add_error","Something Wrong On pesticide Classification Delete..........");
			redirect(base_url()."admin/admin_agro_other/admin_pesticide_classification_trash_type");
			
		}
		
	}
	public function admin_pesticide_classification_type_trash_backup($pesticide_classification_id)
	{
		$id=array("pesticide_classification_id"=>$pesticide_classification_id);
		$status=array("status"=>0);
		if($this->admin_agro_other_model->pesticide_trash_classification_type_backup($id,$status))
		{
			$this->session->set_flashdata("admin_pesticide_add","pesticide Classification Back Up Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_pesticide_classification_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_pesticide_add_error","Something Wrong On pesticide Classification Backup..........");
			redirect(base_url()."admin/admin_agro_other/admin_pesticide_classification_trash_type");
			
		}
		
	}
	
	//tools drive data...
	public function tools_drive_type()
	{
		$status=array("status"=>0);
		$tools_drive_type["tools_drive_type"]=$this->admin_agro_other_model->select_tools_drive_type($status);
		$this->load->view('admin/admin_tools_add_drive',$tools_drive_type);
	}
	public function insert_tools_drive_type()
	{
		
		$tools_drive=array("tools_drive_id"=>random_string('alnum', 8),"tools_drive_name"=>$_POST['tools_drive_name']);
		//print_r($tools_drive);
		//die();
		if($this->admin_agro_other_model->insert_tools_drive_type_data($tools_drive))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Drive Type Insert Success..........");
					redirect(base_url()."admin/admin_agro_other/tools_drive_type");
		}
		else
		{
		$this->session->set_flashdata("admin_tools_add_error","Something Wrong In Insert Tools Drive Type Please Try Again..........");
					redirect(base_url()."admin/admin_agro_other/tools_drive_type");
		}
	}
	public function select_update_tools_drive_type($type_id)
	{
		$tools_drive_id=array("tools_drive_id"=>$type_id);
		$select_tools_drive_update['update_tools_drive']=$this->admin_agro_other_model->tools_update_drive_type_select($tools_drive_id);
		$this->load->view('admin/admin_tools_drive_update_type',$select_tools_drive_update);
			
	}
	public function update_tools_drive_type()
	{
		$id=array("tools_drive_id"=>$_POST['tools_drive_id']);
		$name=array("tools_drive_name"=>$_POST['tools_drive_name']);
		if($this->admin_agro_other_model->tools_drive_type_update($name,$id))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Drive Type Update Success..........");
			redirect(base_url()."admin/admin_agro_other/tools_drive_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Drive Type Update..........");
			redirect(base_url()."admin/admin_agro_other/tools_drive_type");
			
		}
		
	}
	public function select_delete_tools_drive_type($type_id)
	{
		$tools_drive_id=array("tools_drive_id"=>$type_id);
		$status=array("status"=>1);
		if($this->admin_agro_other_model->tools_delete_drive_type($tools_drive_id,$status))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Drive Type Delete Success..........");
			redirect(base_url()."admin/admin_agro_other/tools_drive_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Delete Tools Drive Type..........");
			redirect(base_url()."admin/admin_agro_other/tools_drive_type");
		}
	}
	
	public function admin_tools_drive_trash_type()
	{
		$status=array("status"=>1);
		$tools_drive_type["select_tools_drive_type"]=$this->admin_agro_other_model->select_tools_drive_trash_type($status);
		
		$this->load->view('admin/admin_tools_drive_trash',$tools_drive_type);
	}
	public function admin_tools_drive_type_trash_delete($tools_drive_id)
	{
		$id=array("tools_drive_id"=>$tools_drive_id);
		if($this->admin_agro_other_model->tools_trash_drive_type_delete($id))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Drive Type Delete Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_drive_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Drive Type Delete..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_drive_trash_type");
			
		}
		
	}
	public function admin_tools_drive_type_trash_backup($tools_drive_id)
	{
		$id=array("tools_drive_id"=>$tools_drive_id);
		$status=array("status"=>0);
		if($this->admin_agro_other_model->tools_trash_drive_type_backup($id,$status))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Drive Type Back Up Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_drive_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Drive Type Backup..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_drive_trash_type");
			
		}
		
	}
	//tools color data...
	public function tools_color_type()
	{
		$status=array("status"=>0);
		$tools_color_type["tools_color_type"]=$this->admin_agro_other_model->select_tools_color_type($status);
		$this->load->view('admin/admin_tools_add_color',$tools_color_type);
	}
	public function insert_tools_color_type()
	{
		
		$tools_color=array("color_id"=>random_string('alnum', 8),"color_name"=>$_POST['tools_color_name']);
		//print_r($tools_color);
		//die();
		if($this->admin_agro_other_model->insert_tools_color_type_data($tools_color))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Color Type Insert Success..........");
					redirect(base_url()."admin/admin_agro_other/tools_color_type");
		}
		else
		{
		$this->session->set_flashdata("admin_tools_add_error","Something Wrong In Insert Tools Color Type Please Try Again..........");
					redirect(base_url()."admin/admin_agro_other/tools_color_type");
		}
	}
	public function select_update_tools_color_type($type_id)
	{
		$color_id=array("color_id"=>$type_id);
		$select_tools_color_update['update_tools_color']=$this->admin_agro_other_model->tools_update_color_type_select($color_id);
		$this->load->view('admin/admin_tools_color_update_type',$select_tools_color_update);
			
	}
	public function update_tools_color_type()
	{
		$id=array("color_id"=>$_POST['tools_color_id']);
		$name=array("color_name"=>$_POST['tools_color_name']);
		if($this->admin_agro_other_model->tools_color_type_update($name,$id))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Color Type Update Success..........");
			redirect(base_url()."admin/admin_agro_other/tools_color_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Color Type Update..........");
			redirect(base_url()."admin/admin_agro_other/tools_color_type");
			
		}
		
	}
	public function select_delete_tools_color_type($type_id)
	{
		$color_id=array("color_id"=>$type_id);
		$status=array("status"=>1);
		if($this->admin_agro_other_model->tools_delete_color_type($color_id,$status))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Color Type Delete Success..........");
			redirect(base_url()."admin/admin_agro_other/tools_color_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Delete Tools Color Type..........");
			redirect(base_url()."admin/admin_agro_other/tools_color_type");
		}
	}
	
	public function admin_tools_color_trash_type()
	{
		$status=array("status"=>1);
		$tools_color_type["select_tools_color_type"]=$this->admin_agro_other_model->select_tools_color_trash_type($status);
		
		$this->load->view('admin/admin_tools_color_trash',$tools_color_type);
	}
	public function admin_tools_color_type_trash_delete($color_id)
	{
		$id=array("color_id"=>$color_id);
		if($this->admin_agro_other_model->tools_trash_color_type_delete($id))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Color Type Delete Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_color_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Color Type Delete..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_color_trash_type");
			
		}
		
	}
	public function admin_tools_color_type_trash_backup($color_id)
	{
		$id=array("color_id"=>$color_id);
		$status=array("status"=>0);
		if($this->admin_agro_other_model->tools_trash_color_type_backup($id,$status))
		{
			$this->session->set_flashdata("admin_tools_add","Tools Color Type Back Up Success..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_color_trash_type");
		}
		else
		{
			$this->session->set_flashdata("admin_tools_add_error","Something Wrong On Tools Color Type Backup..........");
			redirect(base_url()."admin/admin_agro_other/admin_tools_color_trash_type");
			
		}
		
	}
	
}
