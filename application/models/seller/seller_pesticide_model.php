<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Seller_pesticide_model extends CI_Model 
{

	
		public function seller_pesticide_insert($data)
		{
		if($this->db->insert("pesticide_detail_master",$data))
			return TRUE;
		else
			return FALSE;
		}
		public function seller_pesticide_update($data,$id)
		{
			$this->db->where($id);
			$up=$this->db->update('pesticide_detail_master',$data);
		if($up)
			return TRUE;
		else
			return FALSE;
		}
	public function update_pesticide_image($img)
		{
			
			
			$this->db->set($img);
			$this->db->where($img);
			$im=$this->db->update('image_master');
		if($im)
			return TRUE;
		else
			return FALSE;
		}
		
		public function insert_pesticide_image($img)
		{
		if($this->db->insert("image_master",$img))
			return TRUE;
		else
			return FALSE;
		}
		public function delete_pesticide_image($img)
		{
		if($this->db->delete("image_master",$img))
			return TRUE;
		else
			return FALSE;
		}
	public function select_pesticide_type()
		{
			$status=array("status"=>0);
			$result=$this->db->get_where("pesticide_type_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	public function select_classification_type()
		{
			$status=array("status"=>0);
			$result=$this->db->get_where("pesticide_classification_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	public function select_appearance_type()
		{
			$status=array("status"=>0);
			$result=$this->db->get_where("pesticide_appearance_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	
	public function select_pesticide_detail()
		{
			$status=array("status"=>0,"seller_id"=>$this->session->userdata("seller_login_id"));
			$result=$this->db->get_where("pesticide_detail_master",$status);
			
		if($result)
			return $result->result_array() ;
		else
			return FALSE;
		}
	public function select_pesticide_detail_trash()
		{
			$status=array("status"=>1,"seller_id"=>$this->session->userdata("seller_login_id"));
			$result=$this->db->get_where("pesticide_detail_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	public function pesticide_trash_backup($id,$status)
		{
			$result=$this->db->update('pesticide_detail_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function pesticide_trash_delete($id)
		{
			$result=$this->db->delete('pesticide_detail_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	
	public function select_pesticide_detail_type($data)
		{
			$id=$this->session->userdata("seller_login_id");
		$result=$this->db->query("select * from pesticide_type_master pesticide_type,pesticide_subtype_master pesticide_subtype,pesticide_detail_master pesticide_detail where pesticide_type.pesticide_type_id=pesticide_subtype.pesticide_type_id and pesticide_subtype.pesticide_subtype_id=pesticide_detail.pesticide_subtype_id and pesticide_type.pesticide_type_id='$data' and pesticide_detail.status='0' and pesticide_detail.seller_id='$id'");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_pesticide_detail_type1($data)
		{
			$id=$this->session->userdata("seller_login_id");
			$result=$this->db->query("select * from pesticide_type_master pesticide_type,pesticide_subtype_master pesticide_subtype,pesticide_detail_master pesticide_detail where pesticide_type.pesticide_type_id=pesticide_subtype.pesticide_type_id and pesticide_subtype.pesticide_subtype_id=pesticide_detail.pesticide_subtype_id and pesticide_subtype.pesticide_subtype_id='$data' and pesticide_detail.status='0' and pesticide_detail.seller_id='$id'");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	/*public function select_pesticide_submenu_pesticidetype($data)
		{
		$result=$this->db->query("select * from pesticide_type_master pesticide_type,pesticide_subtype_master pesticide_subtype,pesticide_submenu_master pesticide_submenu where pesticide_type.pesticide_type_id=pesticide_subtype.pesticide_type_id and pesticide_subtype.pesticide_subtype_id=pesticide_submenu.pesticide_subtype_id  and pesticide_type.pesticide_type_id='$data' and pesticide_type.status='0' ");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}*/
	/*public function select_pesticide_submenu_pesticidetype1($data)
		{
			
		$result=$this->db->query("select * from pesticide_type_master pesticide_type,pesticide_subtype_master pesticide_subtype,pesticide_submenu_master pesticide_submenu where pesticide_type.pesticide_type_id=pesticide_subtype.pesticide_type_id and pesticide_subtype.pesticide_subtype_id=pesticide_submenu.pesticide_subtype_id  and pesticide_subtype.pesticide_subtype_id='$data' and pesticide_subtype.status='0'");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}*/
		public function select_pesticide_type_data12($id)
		{
		$result=$this->db->query("select pesticide_type.*,pesticide_subtype.* from pesticide_type_master pesticide_type,pesticide_subtype_master pesticide_subtype where pesticide_type.pesticide_type_id=pesticide_subtype.pesticide_type_id  and pesticide_subtype.pesticide_subtype_id='$id' and pesticide_subtype.status='0'");
		if($result)
		return $result->result_array();
		else
		return;
		}
	public function select_pesticide_type_data($id)
		{
		$result=$this->db->query("select * from pesticide_type_master where pesticide_type_id='$id'");
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
	public function select_pesticide_sub_type($data)
		{
			$result=$this->db->get_where("pesticide_subtype_master",$data);
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
		
	public function pesticide_back($id,$status)
		{
			$result=$this->db->update('pesticide_detail_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function update_pesticide_data_select($id)
		{
			$result=$this->db->get_where("pesticide_detail_master",$id);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
		public function select_power_type()
		{
				$status=array('status'=>0);
			$result=$this->db->get_where('pesticide_powertype_master',$status);
		//	print_r($result);die();
			if($result)
			return $result->result_array();
			else
			return FALSE;
		}
		public function select_drive()
		{
				$status=array('status'=>0);
			$result=$this->db->get_where('pesticide_drive_master',$status);
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
			$result=$this->db->get_where('pesticide_engine_master',$status);
		//	print_r($result);die();
			if($result)
			return $result->result_array();
			else
			return FALSE;
		}public function select_fuel()
		{
				$status=array('status'=>0);
			$result=$this->db->get_where('pesticide_fuel_master',$status);
		//	print_r($result);die();
			if($result)
			return $result->result_array();
			else
			return FALSE;
		}
		
		
	public function select_pesticide_type_detail()
	{
		$status=array('status'=>0);
		$result=$this->db->get_where('pesticide_detail_type_master',$status);
	//	print_r($result);die();
		if($result)
		return $result->result_array();
		else
		return FALSE;
	}
	
		

	
}
