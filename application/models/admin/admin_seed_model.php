	<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_seed_model extends CI_Model 
{
		//select seed type.................
		
	public function select_seed_type($status)
		{
		$result=$this->db->get_where('seed_type_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_seed_trash_type($status)
		{
		$result=$this->db->get_where("seed_type_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}	
		
	public function insert_seed_type_data($seed_data)
		{
			$seed_type_id=array("seed_type_name"=>$_POST['seed_type_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('seed_type_master',$seed_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_seed");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_add_error","Seed Type Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_seed");
					
				}
				else
				{
					if($this->db->insert("seed_type_master",$seed_data))
					return TRUE;
				else
					return FALSE;
				}
			}
				
		}
		
			
	public function seed_delete_type($type_id)
		{
			$seed_type_id=array("seed_type_id"=>$type_id);
			$status=array("status"=>1);
			
			$result=$this->db->update('seed_type_master',$status,$seed_type_id);
			$seed_type_id1=array("seed_type_id"=>$type_id,"status"=>0);
			$this->db->where($seed_type_id1);
			$select=$this->db->get_where('seed_subtype_master');
			//echo "<pre>";//print_r($select->result_array());//die();
			$i=1;
			$cnt=count($select->result_array());
			if($cnt!=0)
			{
				$result1=$this->db->update('seed_subtype_master',$status,$seed_type_id);
				//echo "<pre>";	//print_r($select);	//die();//$cnt=count($select->result_array());//echo $cnt;
				//die();
				$i=1;
				foreach($select->result_array() as $result)
				{
					$seed_subtype_id=array("seed_subtype_id"=>$result['seed_subtype_id'],"status"=>0);
					$this->db->where($seed_subtype_id);
					$select1=$this->db->get_where('seed_submenu_master');
						$cnt1=count($select1->result_array());
						if($cnt1!=0)
						{
							$result2=$this->db->update("seed_submenu_master",$status,$seed_subtype_id);
							if($result and $result1 and $result2)
									$i=1;
								else
									$i=0;
						}
				}
				if($i==1)
						return TRUE;
					else
						return FALSE;
			}
			else
			{
					if($i==1)
						return TRUE;
					else
						return FALSE;
			}
			
		}
	public function seed_update_type_select($id)
		{
		$result=$this->db->get_where('seed_type_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function seed_type_update($name,$id)
		{
			$seed_type_id=array("seed_type_name"=>$_POST['seed_type_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('seed_type_master',$seed_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_seed");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Seed Type Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_seed");
					
				}
				else
				{
					$result=$this->db->update('seed_type_master',$name,$id);
					if($result)
					return TRUE;
					else
					return FALSE;
				}
			}
		
		}
	public function seed_trash_type_backup($type_id)
		{
			$seed_type_id=array("seed_type_id"=>$type_id);
			$status=array("status"=>0);
			$result=$this->db->update('seed_type_master',$status,$seed_type_id);
			
					if($result)
						return TRUE;
					else
						return FALSE;
			
		}
	public function seed_trash_type_delete($id)
		{
			$result=$this->db->delete('seed_type_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	//seed sub type data..........
	public function select_seed_subtype($status)
		{
		$result=$this->db->get_where('seed_subtype_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function insert_seed_subtype_data($seed_subdata)
		{
			
		$seed_subtype_id=array("seed_subtype_name"=>$_POST['seed_subtype_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('seed_subtype_master',$seed_subtype_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_seed/admin_seed_add_subtype");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Seed SubType Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_seed/admin_seed_add_subtype");
					
				}
				else
				{
					if($this->db->insert("seed_subtype_master",$seed_subdata))
					return TRUE;
				else
					return FALSE;
				}
			}
		}		
	public function select_seed_subtype_data($data)
		{
			$result=$this->db->get_where("seed_subtype_master",$data);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function seed_delete_subtype($seed_subtype_id,$status)
		{
			$result=$this->db->update("seed_subtype_master",$status,$seed_subtype_id);
			$data=$this->db->get_where("seed_submenu_master",$seed_subtype_id);
			if($data->num_rows()!=0)
			{
					$result1=$this->db->update("seed_submenu_master",$status,$seed_subtype_id);
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
	public function seed_trash_subtype_delete($id)
		{
			$result=$this->db->delete('seed_subtype_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}	
	public function seed_trash_subtype_backup($id,$status)
		{
			$result=$this->db->update("seed_subtype_master",$status,$id);
			
				if($result)
					return TRUE;
				else
					return FALSE;
				
			
		}
	public function seed_update_subtype_select($id)
		{
		$result=$this->db->get_where('seed_subtype_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function seed_subtype_update($data,$id)
		{
			$seed_subtype_id=array("seed_subtype_name"=>$_POST['seed_subtype_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('seed_subtype_master',$seed_subtype_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_seed/admin_seed_add_subtype");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Seed SubType Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_seed/admin_seed_add_subtype");
					
				}
				else
				{
						$result=$this->db->update('seed_subtype_master',$data,$id);
						if($result)
						return TRUE;
						else
						return FALSE;
				}
			}
		
		}
		
	//seed sub menu type data..........
	public function select_seed_submenu($status)
		{
		$result=$this->db->get_where('seed_submenu_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
		
	public function select_seed_sub_type($data)
		{
			$result=$this->db->get_where("seed_subtype_master",$data);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function select_seed_submenu_data($data)
		{
			$result=$this->db->get_where("seed_submenu_master",$data);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function insert_seed_submenu_data($seed_menudata)
		{
			
			$seed_submenu_id=array("seed_submenu_name"=>$_POST['seed_submenu_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('seed_submenu_master',$seed_submenu_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_seed/admin_seed_add_submenu");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Seed Submenu Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_seed/admin_seed_add_submenu");
					
				}
				else
				{
					if($this->db->insert("seed_submenu_master",$seed_menudata))
					return TRUE;
				else
					return FALSE;
				}
			}
		}
		public function select_seed_submenu_data_type($data)
		{
			$result=$this->db->query("select * from seed_type_master type,seed_subtype_master subtype,seed_submenu_master submenu where type.seed_type_id=subtype.seed_type_id and subtype.seed_subtype_id=submenu.seed_subtype_id and type.seed_type_id='$data' and type.status='0'" );
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function select_seed_submenu_data_type1($data)
		{
			$result=$this->db->query("select * from seed_type_master type,seed_subtype_master subtype,seed_submenu_master submenu where type.seed_type_id=subtype.seed_type_id and subtype.seed_subtype_id=submenu.seed_subtype_id and subtype.seed_subtype_id='$data' and subtype.status='0'" );
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
		public function select_seed_subtype_menu_data($id)
		{
		$result=$this->db->query("select * from seed_type_master type,seed_subtype_master subtype,seed_submenu_master submenu where type.seed_type_id=subtype.seed_type_id and subtype.seed_subtype_id=submenu.seed_subtype_id and subtype.seed_subtype_id='$id'");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_seed_submenu_trash($status)
		{
		$result=$this->db->get_where('seed_submenu_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_seed_data_subtype_type($id)
		{
		$result=$this->db->query("select * from seed_type_master type,seed_subtype_master subtype,seed_submenu_master submenu where type.seed_type_id=subtype.seed_type_id and subtype.seed_subtype_id=submenu.seed_subtype_id and subtype.seed_subtype_id='$id' and subtype.status='0'");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_seed_data_type($status)
		{
		$result=$this->db->get_where('seed_type_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_seed_data_subtype($status)
		{
		$result=$this->db->get_where('seed_subtype_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function seed_delete_submenu($seed_submenu_id,$status)
		{
			$result=$this->db->update('seed_submenu_master',$status,$seed_submenu_id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function seed_trash_submenu_backup($id,$status)
		{
			$result=$this->db->update('seed_submenu_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function seed_trash_submenu_delete($id)
		{
			$result=$this->db->delete('seed_submenu_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function seed_update_submenu_select($id)
		{
		$result=$this->db->get_where('seed_submenu_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}	
		public function select_seed_subtype_data_menu($id)
		{
		$result=$this->db->query("select subtype.*,type.* from seed_type_master type,seed_subtype_master subtype,seed_submenu_master submenu where type.seed_type_id=subtype.seed_type_id and subtype.seed_subtype_id=submenu.seed_subtype_id and submenu.seed_submenu_id='$id'");
		if($result)
		return $result->result_array();
		else
		return;
		}
	public function select_seed_subtype_menu($id)
		{
			
		$id1=array("seed_type_id"=>$id);
		$result=$this->db->get_where('seed_subtype_master',$id1);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function seed_submenu_update($data,$id)
		{
			$seed_submenu_id=array("seed_submenu_name"=>$_POST['seed_submenu_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('seed_submenu_master',$seed_submenu_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_seed/admin_seed_add_submenu");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Seed Submenu Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_seed/admin_seed_add_submenu");
					
				}
				else
				{
					$result=$this->db->update('seed_submenu_master',$data,$id);
					if($result)
					return TRUE;
					else
					return FALSE;
				}
			}
		
		}

	
}
