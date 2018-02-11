<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Seller_tools_model extends CI_Model 
{

	
		public function seller_tools_insert($data)
		{
		if($this->db->insert("tools_detail_master",$data))
			return TRUE;
		else
			return FALSE;
		}
		public function seller_tools_update($data,$id)
		{
			$this->db->where($id);
			$up=$this->db->update('tools_detail_master',$data);
		if($up)
			return TRUE;
		else
			return FALSE;
		}
	public function update_tools_image($img)
		{
			
			
			$this->db->set($img);
			$this->db->where($img);
			$im=$this->db->update('image_master');
		if($im)
			return TRUE;
		else
			return FALSE;
		}
		
		public function insert_tools_image($img)
		{
		if($this->db->insert("image_master",$img))
			return TRUE;
		else
			return FALSE;
		}
		public function delete_tools_image($img)
		{
		if($this->db->delete("image_master",$img))
			return TRUE;
		else
			return FALSE;
		}
	public function select_tools_type()
		{
			$status=array("status"=>0);
			$result=$this->db->get_where("tools_type_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	
	public function select_tools_detail()
		{
			$status=array("status"=>0,"seller_id"=>$this->session->userdata("seller_login_id"));
			$result=$this->db->get_where("tools_detail_master",$status);
			
		if($result)
			return $result->result_array() ;
		else
			return FALSE;
		}
	public function select_tools_detail_trash()
		{
			$status=array("status"=>1,"seller_id"=>$this->session->userdata("seller_login_id"));
			$result=$this->db->get_where("tools_detail_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	public function tools_trash_backup($id,$status)
		{
			$result=$this->db->update('tools_detail_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function tools_trash_delete($id)
		{
			$result=$this->db->delete('tools_detail_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	
	public function select_tools_detail_type($data)
		{
			$id=$this->session->userdata("seller_login_id");
		$result=$this->db->query("select * from tools_type_master tools_type,tools_subtype_master tools_subtype,tools_detail_master tools_detail where tools_type.tools_type_id=tools_subtype.tools_type_id and tools_subtype.tools_subtype_id=tools_detail.tools_subtype_id and tools_type.tools_type_id='$data' and tools_detail.status='0' and tools_detail.seller_id='$id'");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_tools_detail_type1($data)
		{
			$id=$this->session->userdata("seller_login_id");
			$result=$this->db->query("select * from tools_type_master tools_type,tools_subtype_master tools_subtype,tools_detail_master tools_detail where tools_type.tools_type_id=tools_subtype.tools_type_id and tools_subtype.tools_subtype_id=tools_detail.tools_subtype_id and tools_subtype.tools_subtype_id='$data' and tools_detail.status='0' and tools_detail.seller_id='$id'");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	/*public function select_tools_submenu_toolstype($data)
		{
		$result=$this->db->query("select * from tools_type_master tools_type,tools_subtype_master tools_subtype,tools_submenu_master tools_submenu where tools_type.tools_type_id=tools_subtype.tools_type_id and tools_subtype.tools_subtype_id=tools_submenu.tools_subtype_id  and tools_type.tools_type_id='$data' and tools_type.status='0' ");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}*/
	/*public function select_tools_submenu_toolstype1($data)
		{
			
		$result=$this->db->query("select * from tools_type_master tools_type,tools_subtype_master tools_subtype,tools_submenu_master tools_submenu where tools_type.tools_type_id=tools_subtype.tools_type_id and tools_subtype.tools_subtype_id=tools_submenu.tools_subtype_id  and tools_subtype.tools_subtype_id='$data' and tools_subtype.status='0'");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}*/
		public function select_tools_type_data12($id)
		{
		$result=$this->db->query("select tools_type.*,tools_subtype.* from tools_type_master tools_type,tools_subtype_master tools_subtype where tools_type.tools_type_id=tools_subtype.tools_type_id  and tools_subtype.tools_subtype_id='$id' and tools_subtype.status='0'");
		if($result)
		return $result->result_array();
		else
		return;
		}
	public function select_tools_type_data($id)
		{
		$result=$this->db->query("select * from tools_type_master where tools_type_id='$id'");
		if($result)
		return $result->result_array();
		else
		return;
		}
	public function select_origin_country2()
		{
			$status=array("status"=>0);
		$result=$this->db->get_where('country_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_tools_sub_type($data)
		{
			$result=$this->db->get_where("tools_subtype_master",$data);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function select_image($data)
		{
			$result=$this->db->get_where("image_master",$data);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function select_image_detail($data)
		{
			$result=$this->db->get_where("image_master",$data);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function update_image($id,$data)
		{
			$result=$this->db->update("image_master",$data,$id);
		if($result)
			return ;
		else
			return FALSE;
		}
	public function select_seller_image($id)
		{
		$result=$this->db->get_where("image_master",$id);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
		public function select_origin_country()
		{
			$status=array("status"=>0);
			$result=$this->db->get_where("country_master",$status);
			
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
		
	public function tools_back($id,$status)
		{
			$result=$this->db->update('tools_detail_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function update_tools_data_select($id)
		{
			$result=$this->db->get_where("tools_detail_master",$id);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
		public function select_power_type()
		{
				$status=array('status'=>0);
			$result=$this->db->get_where('tools_powertype_master',$status);
		//	print_r($result);die();
			if($result)
			return $result->result_array();
			else
			return FALSE;
		}
		public function select_drive()
		{
				$status=array('status'=>0);
			$result=$this->db->get_where('tools_drive_master',$status);
		//	print_r($result);die();
			if($result)
			return $result->result_array();
			else
			return FALSE;
		}public function select_color()
		{
				$status=array('status'=>0);
			$result=$this->db->get_where('color_master',$status);
		//	print_r($result);die();
			if($result)
			return $result->result_array();
			else
			return FALSE;
		}public function select_engine_type()
		{
				$status=array('status'=>0);
			$result=$this->db->get_where('tools_engine_master',$status);
		//	print_r($result);die();
			if($result)
			return $result->result_array();
			else
			return FALSE;
		}public function select_fuel()
		{
				$status=array('status'=>0);
			$result=$this->db->get_where('tools_fuel_master',$status);
		//	print_r($result);die();
			if($result)
			return $result->result_array();
			else
			return FALSE;
		}
		
		
	public function select_tools_type_detail()
	{
		$status=array('status'=>0);
		$result=$this->db->get_where('tools_detail_type_master',$status);
	//	print_r($result);die();
		if($result)
		return $result->result_array();
		else
		return FALSE;
	}
	
		

	
}
