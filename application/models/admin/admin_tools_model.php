	<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_tools_model extends CI_Model 
{
		//select tools type.................
		
	public function select_tools_type($status)
		{
		$result=$this->db->get_where('tools_type_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_tools_trash_type($status)
		{
		$result=$this->db->get_where("tools_type_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}	
		
	public function insert_tools_type_data($tools_data)
		{
			$tools_type_name=array("tools_type_name"=>$_POST['tools_type_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('tools_type_master',$tools_type_name);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_tools");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Seed SubType Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_tools");
					
				}
				else
				{
					if($this->db->insert("tools_type_master",$tools_data))
						return TRUE;
					else
						return FALSE;
				}
			}
			
		
		}
	public function tools_delete_type($tools_type_id,$status)
		{
			$result=$this->db->update("tools_type_master",$status,$tools_type_id);
			$data=$this->db->get_where("tools_subtype_master",$tools_type_id);
			if($data->num_rows()!=0)
			{
					$result1=$this->db->update("tools_subtype_master",$status,$tools_type_id);
					if($result and $result1)
						return TRUE;
					else
						return FALSE;
			}
			else
			{
				if($result)
					return TRUE;
				else
					return FALSE;
				
			}
		}
	public function tools_update_type_select($id)
		{
		$result=$this->db->get_where('tools_type_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function tools_type_update($name,$id)
		{
			$tools_type_id=array("tools_type_name"=>$_POST['tools_type_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('tools_type_master',$tools_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_tools");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Seed SubType Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_tools");
					
				}
				else
				{
						$result=$this->db->update('tools_type_master',$name,$id);
						if($result)
						return TRUE;
						else
						return FALSE;
				}
			}
		
		}
	public function tools_trash_type_backup($id,$status)
		{
			$result=$this->db->update("tools_type_master",$status,$id);
			$data=$this->db->get_where("tools_subtype_master",$id);
			if($data->num_rows()!=0)
			{
					$result1=$this->db->update("tools_subtype_master",$status,$id);
					if($result and $result1)
						return TRUE;
					else
						return FALSE;
			}
			else
			{
				if($result)
					return TRUE;
				else
					return FALSE;
				
			}
		}
	public function tools_trash_type_delete($id)
		{
			$result=$this->db->delete('tools_type_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	//tools sub type data..........
	public function select_tools_subtype($status)
		{
		$result=$this->db->get_where('tools_subtype_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function insert_tools_subtype_data($tools_subdata)
		{
			
			$tools_subtype_id=array("tools_subtype_name"=>$_POST['tools_subtype_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('tools_subtype_master',$tools_subtype_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_tools/admin_tools_add_subtype");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Seed Submenu Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_tools/admin_tools_add_subtype");
					
				}
				else
				{
					if($this->db->insert("tools_subtype_master",$tools_subdata))
						return TRUE;
					else
						return FALSE;
				}
			}
		
		}		
	public function select_tools_subtype_data($data)
		{
			$result=$this->db->get_where("tools_subtype_master",$data);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function tools_delete_subtype($tools_subtype_id,$status)
		{
			$result=$this->db->update('tools_subtype_master',$status,$tools_subtype_id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function tools_trash_subtype_delete($id)
		{
			$result=$this->db->delete('tools_subtype_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}	
	public function tools_trash_subtype_backup($id,$status)
		{
			$result=$this->db->update('tools_subtype_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function tools_update_subtype_select($id)
		{
		$result=$this->db->get_where('tools_subtype_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function tools_subtype_update($data,$id)
		{
			$tools_subtype_id=array("tools_subtype_name"=>$_POST['tools_subtype_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('tools_subtype_master',$tools_subtype_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_tools/admin_tools_add_subtype");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Tools Subtype Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_tools/admin_tools_add_subtype");
					
				}
				else
				{
					$result=$this->db->update('tools_subtype_master',$data,$id);
					if($result)
					return TRUE;
					else
					return FALSE;
				}
			}
		
		}

	
}
