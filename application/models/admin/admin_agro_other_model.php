<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_agro_other_model extends CI_Model 
{
		//seed cultivation data.................
		
	public function select_seed_cultivation_type($status)
		{
		$result=$this->db->get_where('seed_cultivation_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function insert_seed_cultivation_type_data($seed_cultivation)
		{
			$cultivation_type_id=array("seed_cultivation_name"=>$_POST['seed_cultivation_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('seed_cultivation_master',$cultivation_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_agro_other/seed_cultivation_type");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Cultivation Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_agro_other/seed_cultivation_type");
					
				}
				else
				{
					if($this->db->insert("seed_cultivation_master",$seed_cultivation))
						return TRUE;
					else
						return FALSE;
				}
			}
		
		}
		
	public function seed_update_cultivation_type_select($id)
		{
		$result=$this->db->get_where('seed_cultivation_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function seed_cultivation_type_update($name,$id)
		{
			$cultivation_type_id=array("seed_cultivation_name"=>$_POST['seed_cultivation_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('seed_cultivation_master',$cultivation_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_agro_other/seed_cultivation_type");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Cultivation Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_agro_other/seed_cultivation_type");
					
				}
				else
				{
					$result=$this->db->update('seed_cultivation_master',$name,$id);
					if($result)
					return TRUE;
					else
					return FALSE;
				}
			}
		
		}
	public function seed_delete_cultivation_type($seed_cultivation_id,$status)
		{
			$result=$this->db->update('seed_cultivation_master',$status,$seed_cultivation_id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function select_seed_cultivation_trash_type($status)
		{
		$result=$this->db->get_where("seed_cultivation_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	public function seed_trash_cultivation_type_delete($id)
		{
			$result=$this->db->delete('seed_cultivation_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function seed_trash_cultivation_type_backup($id,$status)
		{
			$result=$this->db->update('seed_cultivation_master',$status,$id);
					if($result)
						return TRUE;
					else
						return FALSE;
			
		}	
		
//fertilizer apprearence data.................

	public function select_fertilizer_appearance_type($status)
		{
		$result=$this->db->get_where('fertilizer_appearance_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function insert_fertilizer_appearance_type_data($fertilizer_appearance)
		{
			$fertilizer_appearance_type_id=array("fertilizer_appearance_name"=>$_POST['fertilizer_appearance_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('fertilizer_appearance_master',$fertilizer_appearance_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_agro_other/fertilizer_appearance_type");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Appearance Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_agro_other/fertilizer_appearance_type");
					
				}
				else
				{
					if($this->db->insert("fertilizer_appearance_master",$fertilizer_appearance))
					return TRUE;
				else
					return FALSE;
				}
			}
			
		
		}
		
	public function fertilizer_update_appearance_type_select($id)
		{
		$result=$this->db->get_where('fertilizer_appearance_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function fertilizer_appearance_type_update($name,$id)
		{
			$fertilizer_appearance_type_id=array("fertilizer_appearance_name"=>$_POST['fertilizer_appearance_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('fertilizer_appearance_master',$fertilizer_appearance_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_agro_other/fertilizer_appearance_type");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Appearance Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_agro_other/fertilizer_appearance_type");
					
				}
				else
				{
					$result=$this->db->update('fertilizer_appearance_master',$name,$id);
					if($result)
					return TRUE;
					else
					return FALSE;
				}
			}
		
		}
	public function fertilizer_delete_appearance_type($fertilizer_appearance_id,$status)
		{
			$result=$this->db->update('fertilizer_appearance_master',$status,$fertilizer_appearance_id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function select_fertilizer_appearance_trash_type($status)
		{
		$result=$this->db->get_where("fertilizer_appearance_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	public function fertilizer_trash_appearance_type_delete($id)
		{
			$result=$this->db->delete('fertilizer_appearance_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function fertilizer_trash_appearance_type_backup($id,$status)
		{
			$result=$this->db->update('fertilizer_appearance_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	
//fertilizer classification data.................

	public function select_fertilizer_classification_type($status)
		{
		$result=$this->db->get_where('fertilizer_classification_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function insert_fertilizer_classification_type_data($fertilizer_classification)
		{
			
			$fertilizer_classification_type_id=array("fertilizer_classification_name"=>$_POST['fertilizer_classification_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('fertilizer_classification_master',$fertilizer_classification_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_agro_other/fertilizer_classification_type");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Cultivation Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_agro_other/fertilizer_classification_type");
					
				}
				else
				{
					if($this->db->insert("fertilizer_classification_master",$fertilizer_classification))
						return TRUE;
					else
						return FALSE;
				}
			}
		
		}
		
	public function fertilizer_update_classification_type_select($id)
		{
		$result=$this->db->get_where('fertilizer_classification_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function fertilizer_classification_type_update($name,$id)
		{
			$fertilizer_classification_type_id=array("fertilizer_classification_name"=>$_POST['fertilizer_classification_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('fertilizer_classification_master',$fertilizer_classification_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_agro_other/fertilizer_classification_type");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Cultivation Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_agro_other/fertilizer_classification_type");
					
				}
				else
				{
					$result=$this->db->update('fertilizer_classification_master',$name,$id);
					if($result)
					return TRUE;
					else
					return FALSE;
				}
			}
		
		}
	public function fertilizer_delete_classification_type($fertilizer_classification_id,$status)
		{
			$result=$this->db->update('fertilizer_classification_master',$status,$fertilizer_classification_id);
					if($result)
						return TRUE;
					else
						return FALSE;
			
		}
	public function select_fertilizer_classification_trash_type($status)
		{
		$result=$this->db->get_where("fertilizer_classification_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	public function fertilizer_trash_classification_type_delete($id)
		{
			$result=$this->db->delete('fertilizer_classification_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function fertilizer_trash_classification_type_backup($id,$status)
		{
			$result=$this->db->update('fertilizer_classification_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
		
		//pesticide apprearence data.................

	public function select_pesticide_appearance_type($status)
		{
		$result=$this->db->get_where('pesticide_appearance_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function insert_pesticide_appearance_type_data($pesticide_appearance)
		{
			$pesticide_appearance_type_id=array("pesticide_appearance_name"=>$_POST['pesticide_appearance_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('pesticide_appearance_master',$pesticide_appearance_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_agro_other/pesticide_appearance_type");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Appearance Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_agro_other/pesticide_appearance_type");
					
				}
				else
				{
					if($this->db->insert("pesticide_appearance_master",$pesticide_appearance))
					return TRUE;
				else
					return FALSE;
				}
			}
			
		
		}
		
	public function pesticide_update_appearance_type_select($id)
		{
		$result=$this->db->get_where('pesticide_appearance_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function pesticide_appearance_type_update($name,$id)
		{
			$pesticide_appearance_type_id=array("pesticide_appearance_name"=>$_POST['pesticide_appearance_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('pesticide_appearance_master',$pesticide_appearance_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_agro_other/pesticide_appearance_type");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Appearance Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_agro_other/pesticide_appearance_type");
					
				}
				else
				{
					$result=$this->db->update('pesticide_appearance_master',$name,$id);
					if($result)
					return TRUE;
					else
					return FALSE;
				}
			}
		
		}
	public function pesticide_delete_appearance_type($pesticide_appearance_id,$status)
		{
			$result=$this->db->update('pesticide_appearance_master',$status,$pesticide_appearance_id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function select_pesticide_appearance_trash_type($status)
		{
		$result=$this->db->get_where("pesticide_appearance_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	public function pesticide_trash_appearance_type_delete($id)
		{
			$result=$this->db->delete('pesticide_appearance_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function pesticide_trash_appearance_type_backup($id,$status)
		{
			$result=$this->db->update('pesticide_appearance_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	
//pesticide classification data.................

	public function select_pesticide_classification_type($status)
		{
		$result=$this->db->get_where('pesticide_classification_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function insert_pesticide_classification_type_data($pesticide_classification)
		{
			
			$pesticide_classification_type_id=array("pesticide_classification_name"=>$_POST['pesticide_classification_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('pesticide_classification_master',$pesticide_classification_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_agro_other/pesticide_classification_type");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Cultivation Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_agro_other/pesticide_classification_type");
					
				}
				else
				{
					if($this->db->insert("pesticide_classification_master",$pesticide_classification))
						return TRUE;
					else
						return FALSE;
				}
			}
		
		}
		
	public function pesticide_update_classification_type_select($id)
		{
		$result=$this->db->get_where('pesticide_classification_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function pesticide_classification_type_update($name,$id)
		{
			$pesticide_classification_type_id=array("pesticide_classification_name"=>$_POST['pesticide_classification_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('pesticide_classification_master',$pesticide_classification_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_agro_other/pesticide_classification_type");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Cultivation Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_agro_other/pesticide_classification_type");
					
				}
				else
				{
					$result=$this->db->update('pesticide_classification_master',$name,$id);
					if($result)
					return TRUE;
					else
					return FALSE;
				}
			}
		
		}
	public function pesticide_delete_classification_type($pesticide_classification_id,$status)
		{
			$result=$this->db->update('pesticide_classification_master',$status,$pesticide_classification_id);
					if($result)
						return TRUE;
					else
						return FALSE;
			
		}
	public function select_pesticide_classification_trash_type($status)
		{
		$result=$this->db->get_where("pesticide_classification_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	public function pesticide_trash_classification_type_delete($id)
		{
			$result=$this->db->delete('pesticide_classification_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function pesticide_trash_classification_type_backup($id,$status)
		{
			$result=$this->db->update('pesticide_classification_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	
	//tools engine data.................
		
	public function select_tools_engine_type($status)
		{
		$result=$this->db->get_where('tools_engine_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function insert_tools_engine_type_data($tools_engine)
		{
			$tools_engine_type_id=array("tools_engine_name"=>$_POST['tools_engine_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('tools_engine_master',$tools_engine_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_agro_other/tools_engine_type");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Engine Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_agro_other/tools_engine_type");
					
				}
				else
				{
					if($this->db->insert("tools_engine_master",$tools_engine))
						return TRUE;
					else
						return FALSE;
				}
			}
			
		
		}
		
	public function tools_update_engine_type_select($id)
		{
		$result=$this->db->get_where('tools_engine_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function tools_engine_type_update($name,$id)
		{
			$tools_engine_type_id=array("tools_engine_name"=>$_POST['tools_engine_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('tools_engine_master',$tools_engine_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_agro_other/tools_engine_type");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Engine Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_agro_other/tools_engine_type");
					
				}
				else
				{
					$result=$this->db->update('tools_engine_master',$name,$id);
					if($result)
					return TRUE;
					else
					return FALSE;
				}
			}
		
		}
	public function tools_delete_engine_type($tools_engine_id,$status)
		{
			
			$result=$this->db->update('tools_engine_master',$status,$tools_engine_id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function select_tools_engine_trash_type($status)
		{
		$result=$this->db->get_where("tools_engine_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	public function tools_trash_engine_type_delete($id)
		{
			$result=$this->db->delete('tools_engine_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function tools_trash_engine_type_backup($id,$status)
		{
			$result=$this->db->update('tools_engine_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}	
		
	public function select_tools_add_type($status)
		{
		$result=$this->db->get_where('tools_type_master',$status);
		
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_tools_add_detail_type($status)
		{
		$result=$this->db->get_where('tools_detail_type_master',$status);
		
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
public function insert_tools_detail_type_data($tools_detail_type)
		{
			$tools_detailtype_id=array("tools_type_id"=>$_POST["tools_type_id"],"tools_detail_type_name"=>$_POST['tools_detail_type_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$this->db->where($tools_detailtype_id);
			$select=$this->db->get('tools_detail_type_master');
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_agro_other/admin_tools_add_detail_type");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Tools Detail Type Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_agro_other/admin_tools_add_detail_type");
					
				}
				else
				{
							
		if($this->db->insert("tools_detail_type_master",$tools_detail_type))
			return TRUE;
		else
			return FALSE;
				}
			}
		
	
		}
	public function select_tools_detalitype_data($data)
		{
			$result=$this->db->get_where("tools_detail_type_master",$data);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function tools_detailtype_update($data,$id)
		{
			$tools_detailtype_id=array("tools_type_id"=>$_POST["tools_type_id"],"tools_detail_type_name"=>$_POST['tools_detailtype_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$this->db->where($tools_detailtype_id);
			$select=$this->db->get('tools_detail_type_master');
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_agro_other/admin_tools_add_detail_type");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Tools Detail Type Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_agro_other/admin_tools_add_detail_type");
					
				}
				else
				{
					$result=$this->db->update('tools_detail_type_master',$data,$id);
					if($result)
					return TRUE;
					else
					return FALSE;
				}
			}
		
		}
	public function tools_delete_detailtype($tools_detailtype_id,$status)
		{
			$result=$this->db->update('tools_detail_type_master',$status,$tools_detailtype_id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function select_tools_detailtype_trash_type($status)
		{
		$result=$this->db->get_where("tools_detail_type_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	public function tools_trash_detailtype_delete($id)
		{
			$result=$this->db->delete('tools_detail_type_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}	
		
	public function tools_trash_detailtype_backup($id,$status)
		{
			$result=$this->db->update('tools_detail_type_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
		
		
	//tools fuel data.................
		
	public function select_tools_fuel_type($status)
		{
		$result=$this->db->get_where('tools_fuel_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function insert_tools_fuel_type_data($tools_fuel)
		{
			$tools_fuel_type_id=array("tools_fuel_name"=>$_POST['tools_fuel_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('tools_fuel_master',$tools_fuel_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_agro_other/tools_fuel_type");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Fuel Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_agro_other/tools_fuel_type");
					
				}
				else
				{
					if($this->db->insert("tools_fuel_master",$tools_fuel))
						return TRUE;
					else
						return FALSE;
				}
			}
			
		
		}
		
	public function tools_update_fuel_type_select($id)
		{
		$result=$this->db->get_where('tools_fuel_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function tools_fuel_type_update($name,$id)
		{
			$tools_fuel_type_id=array("tools_fuel_name"=>$_POST['tools_fuel_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('tools_fuel_master',$tools_fuel_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_agro_other/tools_fuel_type");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Fuel Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_agro_other/tools_fuel_type");
					
				}
				else
				{
					$result=$this->db->update('tools_fuel_master',$name,$id);
					if($result)
					return TRUE;
					else
					return FALSE;
				}
			}
		
		}
	public function tools_delete_fuel_type($tools_fuel_id,$status)
		{
			
			$result=$this->db->update('tools_fuel_master',$status,$tools_fuel_id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function select_tools_fuel_trash_type($status)
		{
		$result=$this->db->get_where("tools_fuel_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	public function tools_trash_fuel_type_delete($id)
		{
			$result=$this->db->delete('tools_fuel_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function tools_trash_fuel_type_backup($id,$status)
		{
			$result=$this->db->update('tools_fuel_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}	
		
		
	//tools drive data.................
		
	public function select_tools_drive_type($status)
		{
		$result=$this->db->get_where('tools_drive_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function insert_tools_drive_type_data($tools_drive)
		{
			$tools_drive_type_id=array("tools_drive_name"=>$_POST['tools_drive_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('tools_drive_master',$tools_drive_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_agro_other/tools_drive_type");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Drive Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_agro_other/tools_drive_type");
					
				}
				else
				{
					if($this->db->insert("tools_drive_master",$tools_drive))
						return TRUE;
					else
						return FALSE;
				}
			}
			
		
		}
		
	public function tools_update_drive_type_select($id)
		{
		$result=$this->db->get_where('tools_drive_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function tools_drive_type_update($name,$id)
		{
			$tools_drive_type_id=array("tools_drive_name"=>$_POST['tools_drive_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('tools_drive_master',$tools_drive_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_agro_other/tools_drive_type");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","drive Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_agro_other/tools_drive_type");
					
				}
				else
				{
					$result=$this->db->update('tools_drive_master',$name,$id);
					if($result)
					return TRUE;
					else
					return FALSE;
				}
			}
		
		}
	public function tools_delete_drive_type($tools_drive_id,$status)
		{
			
			$result=$this->db->update('tools_drive_master',$status,$tools_drive_id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function select_tools_drive_trash_type($status)
		{
		$result=$this->db->get_where("tools_drive_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	public function tools_trash_drive_type_delete($id)
		{
			$result=$this->db->delete('tools_drive_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function tools_trash_drive_type_backup($id,$status)
		{
			$result=$this->db->update('tools_drive_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}	
		
		
		
		
	//tools color data.................
		
	public function select_tools_color_type($status)
		{
		$result=$this->db->get_where('color_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function insert_tools_color_type_data($tools_color)
		{
			$tools_color_type_id=array("color_name"=>$_POST['tools_color_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('color_master',$tools_color_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_agro_other/tools_color_type");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Color Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_agro_other/tools_color_type");
					
				}
				else
				{
					if($this->db->insert("color_master",$tools_color))
						return TRUE;
					else
						return FALSE;
				}
			}
			
		
		}
		
	public function tools_update_color_type_select($id)
		{
		$result=$this->db->get_where('color_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function tools_color_type_update($name,$id)
		{
			$tools_color_type_id=array("color_name"=>$_POST['tools_color_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('color_master',$tools_color_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_agro_other/tools_color_type");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Color Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_agro_other/tools_color_type");
					
				}
				else
				{
					$result=$this->db->update('color_master',$name,$id);
					if($result)
					return TRUE;
					else
					return FALSE;
				}
			}
		
		}
	public function tools_delete_color_type($tools_color_id,$status)
		{
			
			$result=$this->db->update('color_master',$status,$tools_color_id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function select_tools_color_trash_type($status)
		{
		$result=$this->db->get_where("color_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	public function tools_trash_color_type_delete($id)
		{
			$result=$this->db->delete('color_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function tools_trash_color_type_backup($id,$status)
		{
			$result=$this->db->update('color_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}	
		
		
	
}
