	<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_pesticide_model extends CI_Model 
{
		//select pesticide type.................
		
	public function select_pesticide_type($status)
		{
		$result=$this->db->get_where('pesticide_type_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_pesticide_trash_type($status)
		{
		$result=$this->db->get_where("pesticide_type_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}	
		
	public function insert_pesticide_type_data($pesticide_data)
		{
			$Peaticide_type_id=array("pesticide_type_name"=>$_POST['pesticide_type_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('pesticide_type_master',$Peaticide_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_pesticide");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Pesticide Type Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_pesticide");
					
				}
				else
				{
					if($this->db->insert("pesticide_type_master",$pesticide_data))
						return TRUE;
					else
						return FALSE;
				}
			}
			
		
		}
	public function pesticide_delete_type($pesticide_type_id,$status)
		{
			$result=$this->db->update('pesticide_type_master',$status,$pesticide_type_id);
			$data=$this->db->get_where("pesticide_subtype_master",$pesticide_type_id);
			if($data->num_rows()!=0)
			{
					$result1=$this->db->update("pesticide_subtype_master",$status,$pesticide_type_id);
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
	public function pesticide_update_type_select($id)
		{
		$result=$this->db->get_where('pesticide_type_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function pesticide_type_update($name,$id)
		{
			$Peaticide_type_id=array("pesticide_type_name"=>$_POST['pesticide_type_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('pesticide_type_master',$Peaticide_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_pesticide");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Pesticide Type Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_pesticide");
					
				}
				else
				{
					$result=$this->db->update('pesticide_type_master',$name,$id);
					if($result)
					return TRUE;
					else
					return FALSE;
				}
			}
		
		}
	public function pesticide_trash_type_backup($id,$status)
		{
			$result=$this->db->update('pesticide_type_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function pesticide_trash_type_delete($id)
		{
			$result=$this->db->delete('pesticide_type_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	//pesticide sub type data..........
	public function select_pesticide_subtype($status)
		{
		$result=$this->db->get_where('pesticide_subtype_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function insert_pesticide_subtype_data($pesticide_subdata)
		{
			$pesticide_subtype_id=array("pesticide_subtype_name"=>$_POST['pesticide_subtype_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('pesticide_subtype_master',$pesticide_subtype_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_pesticide/admin_pesticide_add_subtype");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Pesticide SubType Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_pesticide/admin_pesticide_add_subtype");
					
				}
				else
				{
					if($this->db->insert("pesticide_subtype_master",$pesticide_subdata))
						return TRUE;
					else
						return FALSE;
				}
			}
			
		
		}		
	public function select_pesticide_subtype_data($data)
		{
			$result=$this->db->get_where("pesticide_subtype_master",$data);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function pesticide_delete_subtype($pesticide_subtype_id,$status)
		{
			$result=$this->db->update('pesticide_subtype_master',$status,$pesticide_subtype_id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function pesticide_trash_subtype_delete($id)
		{
			$result=$this->db->delete('pesticide_subtype_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}	
	public function pesticide_trash_subtype_backup($id,$status)
		{
			$result=$this->db->update('pesticide_subtype_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function pesticide_update_subtype_select($id)
		{
		$result=$this->db->get_where('pesticide_subtype_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function pesticide_subtype_update($data,$id)
		{
			$pesticide_subtype_id=array("pesticide_subtype_name"=>$_POST['pesticide_subtype_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('pesticide_subtype_master',$pesticide_subtype_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_pesticide/admin_pesticide_add_subtype");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Pesticide SubType Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_pesticide/admin_pesticide_add_subtype");
					
				}
				else
				{
					$result=$this->db->update('pesticide_subtype_master',$data,$id);
					if($result)
					return TRUE;
					else
					return FALSE;
				}
			}
		
		}
		
	//pesticide sub menu type data..........
	public function select_pesticide_submenu($status)
		{
		$result=$this->db->get_where('pesticide_submenu_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
		
	public function select_pesticide_sub_type($data)
		{
			$result=$this->db->get_where("pesticide_subtype_master",$data);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function select_pesticide_submenu_data($data)
		{
			$result=$this->db->get_where("pesticide_submenu_master",$data);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function insert_pesticide_submenu_data($pesticide_menudata)
		{
			
		if($this->db->insert("pesticide_submenu_master",$pesticide_menudata))
			return TRUE;
		else
			return FALSE;
		}
		public function select_pesticide_submenu_data_type($data)
		{
			$result=$this->db->query("select * from pesticide_type_master type,pesticide_subtype_master subtype,pesticide_submenu_master submenu where type.pesticide_type_id=subtype.pesticide_type_id and subtype.pesticide_subtype_id=submenu.pesticide_subtype_id and type.pesticide_type_id='$data'");
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
		public function select_pesticide_subtype_menu_data($id)
		{
		$result=$this->db->query("select * from pesticide_type_master type,pesticide_subtype_master subtype,pesticide_submenu_master submenu where type.pesticide_type_id=subtype.pesticide_type_id and subtype.pesticide_subtype_id=submenu.pesticide_subtype_id and subtype.pesticide_subtype_id='$id'");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_pesticide_submenu_trash($status)
		{
		$result=$this->db->get_where('pesticide_submenu_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function pesticide_delete_submenu($pesticide_submenu_id,$status)
		{
			$result=$this->db->update('pesticide_submenu_master',$status,$pesticide_submenu_id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function pesticide_trash_submenu_backup($id,$status)
		{
			$result=$this->db->update('pesticide_submenu_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function pesticide_trash_submenu_delete($id)
		{
			$result=$this->db->delete('pesticide_submenu_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function pesticide_update_submenu_select($id)
		{
		$result=$this->db->get_where('pesticide_submenu_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}	
		public function select_pesticide_subtype_data_menu($id)
		{
		$result=$this->db->query("select subtype.*,type.* from pesticide_type_master type,pesticide_subtype_master subtype,pesticide_submenu_master submenu where type.pesticide_type_id=subtype.pesticide_type_id and subtype.pesticide_subtype_id=submenu.pesticide_subtype_id and submenu.pesticide_submenu_id='$id'");
		if($result)
		return $result->result_array();
		else
		return;
		}
	public function select_pesticide_subtype_menu($id)
		{
			
		$id1=array("pesticide_type_id"=>$id);
		$result=$this->db->get_where('pesticide_subtype_master',$id1);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function pesticide_submenu_update($data,$id)
		{
		$result=$this->db->update('pesticide_submenu_master',$data,$id);
		if($result)
		return TRUE;
		else
		return FALSE;
		}

	
}
