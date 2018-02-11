	<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_fertilizer_model extends CI_Model 
{
		//select fertilizer type.................
		
	public function select_fertilizer_type($status)
		{
		$result=$this->db->get_where('fertilizer_type_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_fertilizer_trash_type($status)
		{
		$result=$this->db->get_where("fertilizer_type_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}	
		
	public function insert_fertilizer_type_data($fertilizer_data)
		{
			$fertilizer_type_id=array("fertilizer_type_name"=>$_POST['fertilizer_type_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('fertilizer_type_master',$fertilizer_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_fertilizer");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Fertilizer Type Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_fertilizer");
					
				}
				else
				{
					if($this->db->insert("fertilizer_type_master",$fertilizer_data))
						return TRUE;
					else
						return FALSE;
				}
			}
			
		
		}
	public function fertilizer_delete_type($type_id)
		{

			$fertilizer_type_id=array("fertilizer_type_id"=>$type_id);
			$status=array("status"=>1);
			
			$result=$this->db->update('fertilizer_type_master',$status,$fertilizer_type_id);
			$fertilizer_type_id1=array("fertilizer_type_id"=>$type_id,"status"=>0);
			$this->db->where($fertilizer_type_id1);
			$select=$this->db->get_where('fertilizer_subtype_master');
			//echo "<pre>";//print_r($select->result_array());//die();
			$i=1;
			$cnt=count($select->result_array());
			if($cnt!=0)
			{
				$result1=$this->db->update('fertilizer_subtype_master',$status,$fertilizer_type_id);
				//echo "<pre>";	//print_r($select);	//die();//$cnt=count($select->result_array());//echo $cnt;
				//die();
				$i=1;
				foreach($select->result_array() as $result)
				{
					$seed_subtype_id=array("fertilizer_subtype_id"=>$result['fertilizer_subtype_id'],"status"=>0);
					$this->db->where($fertilizer_subtype_id);
					$select1=$this->db->get_where('fertilizer_submenu_master');
						$cnt1=count($select->result_array());
						if($cnt1!=0)
						{
							$result2=$this->db->update("fertilizer_submenu_master",$status,$fertilizer_subtype_id);
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
	public function fertilizer_update_type_select($id)
		{
		$result=$this->db->get_where('fertilizer_type_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function fertilizer_type_update($name,$id)
		{
			$fertilizer_type_id=array("fertilizer_type_name"=>$_POST['fertilizer_type_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('fertilizer_type_master',$fertilizer_type_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_fertilizer");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Fertilizer Type Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_fertilizer");
					
				}
				else
				{
					$result=$this->db->update('fertilizer_type_master',$name,$id);
					if($result)
					return TRUE;
					else
					return FALSE;
				}
			}
		
		}
	public function fertilizer_trash_type_backup($type_id)
		{
			$fertilizer_type_id=array("fertilizer_type_id"=>$type_id);
			$status=array("status"=>0);
			$result=$this->db->update('fertilizer_type_master',$status,$fertilizer_type_id);
			$fertilizer_type_id1=array("fertilizer_type_id"=>$type_id,"status"=>0);
			$this->db->where($fertilizer_type_id1);
			$select=$this->db->get_where('fertilizer_subtype_master');
			//echo "<pre>";//print_r($select->result_array());//die();
			$i=1;
			$cnt=count($select->result_array());
			if($cnt!=0)
			{
				$result1=$this->db->update('fertilizer_subtype_master',$status,$fertilizer_type_id);
				//echo "<pre>";	//print_r($select);	//die();//$cnt=count($select->result_array());//echo $cnt;
				//die();
				$i=1;
				foreach($select->result_array() as $result)
				{
					$fertilizer_subtype_id=array("fertilizer_subtype_id"=>$result['fertilizer_subtype_id'],"status"=>0);
					$this->db->where($seed_subtype_id);
					$select1=$this->db->get_where('fertilizer_submenu_master');
						$cnt1=count($select->result_array());
						if($cnt1!=0)
						{
							$result2=$this->db->update("fertilizer_submenu_master",$status,$fertilizer_subtype_id);
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
	public function fertilizer_trash_type_delete($id)
		{
			$result=$this->db->delete('fertilizer_type_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	//fertilizer sub type data..........
	public function select_fertilizer_subtype($status)
		{
		$result=$this->db->get_where('fertilizer_subtype_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function insert_fertilizer_subtype_data($fertilizer_subdata)
		{
				$fertilizer_subtype_id=array("fertilizer_subtype_name"=>$_POST['fertilizer_subtype_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('fertilizer_subtype_master',$fertilizer_subtype_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_subtype");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Fertilizer SubType Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_subtype");
					
				}
				else
				{
					if($this->db->insert("fertilizer_subtype_master",$fertilizer_subdata))
						return TRUE;
					else
						return FALSE;
				}
			}
			
		
		}		
	public function select_fertilizer_subtype_data($data)
		{
			$result=$this->db->get_where("fertilizer_subtype_master",$data);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function fertilizer_delete_subtype($fertilizer_subtype_id,$status)
		{
	
			$result=$this->db->update("fertilizer_subtype_master",$status,$fertilizer_subtype_id);
			$data=$this->db->get_where("fertilizer_submenu_master",$fertilizer_subtype_id);
			if($data->num_rows()!=0)
			{
					$result1=$this->db->update("fertilizer_submenu_master",$status,$fertilizer_subtype_id);
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
	public function fertilizer_trash_subtype_delete($id)
		{
			$result=$this->db->delete('fertilizer_subtype_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}	
	public function fertilizer_trash_subtype_backup($id,$status)
		{
				$result=$this->db->update("fertilizer_subtype_master",$status,$fertilizer_subtype_id);
			$data=$this->db->get_where("fertilizer_submenu_master",$fertilizer_subtype_id);
			if($data->num_rows()!=0)
			{
					$result1=$this->db->update("fertilizer_submenu_master",$status,$fertilizer_subtype_id);
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
	public function fertilizer_update_subtype_select($id)
		{
		$result=$this->db->get_where('fertilizer_subtype_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function fertilizer_subtype_update($data,$id)
		{
				$fertilizer_subtype_id=array("fertilizer_subtype_name"=>$_POST['fertilizer_subtype_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('fertilizer_subtype_master',$fertilizer_subtype_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_subtype");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Fertilizer SubType Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_subtype");
					
				}
				else
				{
					$result=$this->db->update('fertilizer_subtype_master',$data,$id);
					if($result)
					return TRUE;
					else
					return FALSE;
				}
			}
		
		}
		
	//fertilizer sub menu type data..........
	public function select_fertilizer_submenu($status)
		{
		$result=$this->db->get_where('fertilizer_submenu_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
		
	public function select_fertilizer_sub_type($data)
		{
			$result=$this->db->get_where("fertilizer_subtype_master",$data);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function select_fertilizer_submenu_data($data)
		{
			$result=$this->db->get_where("fertilizer_submenu_master",$data);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
		public function select_fertilzer_submenu_data_type1($data)
		{
			$result=$this->db->query("select * from fertilzer_type_master type,fertilzer_subtype_master subtype,fertilzer_submenu_master submenu where type.fertilzer_type_id=subtype.fertilzer_type_id and subtype.fertilzer_subtype_id=submenu.fertilzer_subtype_id and subtype.fertilzer_subtype_id='$data' and subtype.status='0'" );
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
		public function select_fertilzer_data_subtype_type($id)
		{
		$result=$this->db->query("select * from fertilzer_type_master type,fertilzer_subtype_master subtype,fertilzer_submenu_master submenu where type.fertilzer_type_id=subtype.fertilzer_type_id and subtype.fertilzer_subtype_id=submenu.fertilzer_subtype_id and subtype.fertilzer_subtype_id='$id' and subtype.status='0'");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
		public function select_fertilizer_submenu_data_type1($data)
		{
			$result=$this->db->query("select * from fertilizer_type_master type,fertilizer_subtype_master subtype,fertilizer_submenu_master submenu where type.fertilizer_type_id=subtype.fertilizer_type_id and subtype.fertilizer_subtype_id=submenu.fertilizer_subtype_id and subtype.fertilizer_subtype_id='$data' and subtype.status='0'" );
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function select_fertilizer_data_subtype($status)
		{
		$result=$this->db->get_where('fertilizer_subtype_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function insert_fertilizer_submenu_data($fertilizer_menudata)
		{
			
			$fertilizer_submenu_id=array("fertilizer_submenu_name"=>$_POST['fertilizer_submenu_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('fertilizer_submenu_master',$fertilizer_submenu_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_submenu");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Fertilizer Submenu Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_submenu");
					
				}
				else
				{
					if($this->db->insert("fertilizer_submenu_master",$fertilizer_menudata))
						return TRUE;
					else
						return FALSE;
				}
			}
		
		}
			public function select_fertilizer_data_type($status)
		{
		$result=$this->db->get_where('fertilizer_type_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
		public function select_fertilizer_submenu_data_type($data)
		{
			$result=$this->db->query("select * from fertilizer_type_master type,fertilizer_subtype_master subtype,fertilizer_submenu_master submenu where type.fertilizer_type_id=subtype.fertilizer_type_id and subtype.fertilizer_subtype_id=submenu.fertilizer_subtype_id and type.fertilizer_type_id='$data'");
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
		public function select_fertilizer_subtype_menu_data($id)
		{
		$result=$this->db->query("select * from fertilizer_type_master type,fertilizer_subtype_master subtype,fertilizer_submenu_master submenu where type.fertilizer_type_id=subtype.fertilizer_type_id and subtype.fertilizer_subtype_id=submenu.fertilizer_subtype_id and subtype.fertilizer_subtype_id='$id'");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_fertilizer_submenu_trash($status)
		{
		$result=$this->db->get_where('fertilizer_submenu_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function fertilizer_delete_submenu($fertilizer_submenu_id,$status)
		{
			$result=$this->db->update('fertilizer_submenu_master',$status,$fertilizer_submenu_id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function fertilizer_trash_submenu_backup($id,$status)
		{
			$result=$this->db->update('fertilizer_submenu_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function fertilizer_trash_submenu_delete($id)
		{
			$result=$this->db->delete('fertilizer_submenu_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function fertilizer_update_submenu_select($id)
		{
		$result=$this->db->get_where('fertilizer_submenu_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}	
		public function select_fertilizer_subtype_data_menu($id)
		{
		$result=$this->db->query("select subtype.*,type.* from fertilizer_type_master type,fertilizer_subtype_master subtype,fertilizer_submenu_master submenu where type.fertilizer_type_id=subtype.fertilizer_type_id and subtype.fertilizer_subtype_id=submenu.fertilizer_subtype_id and submenu.fertilizer_submenu_id='$id'");
		if($result)
		return $result->result_array();
		else
		return;
		}
	public function select_fertilizer_subtype_menu($id)
		{
			
		$id1=array("fertilizer_type_id"=>$id);
		$result=$this->db->get_where('fertilizer_subtype_master',$id1);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function fertilizer_submenu_update($data,$id)
		{
			$fertilizer_submenu_id=array("fertilizer_submenu_name"=>$_POST['fertilizer_submenu_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('fertilizer_submenu_master',$fertilizer_submenu_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_submenu");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Seed Submenu Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_fertilizer/admin_fertilizer_add_submenu");
					
				}
				else
				{
					$result=$this->db->update('fertilizer_submenu_master',$data,$id);
					if($result)
					return TRUE;
					else
					return FALSE;
				}
			}
		
		}

	
}
