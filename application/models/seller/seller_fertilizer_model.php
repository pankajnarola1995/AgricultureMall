<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Seller_fertilizer_model extends CI_Model 
{

	
		public function seller_fertilizer_insert($data)
		{
		if($this->db->insert("fertilizer_detail_master",$data))
			return TRUE;
		else
			return FALSE;
		}
		public function seller_fertilizer_update($data,$id)
		{
			$this->db->where($id);
			$up=$this->db->update('fertilizer_detail_master',$data);
		if($up)
			return TRUE;
		else
			return FALSE;
		}
	public function update_fertilizer_image($img)
		{
			
			
			$this->db->set($img);
			$this->db->where($img);
			$im=$this->db->update('image_master');
		if($im)
			return TRUE;
		else
			return FALSE;
		}
		
		public function insert_fertilizer_image($img)
		{
		if($this->db->insert("image_master",$img))
			return TRUE;
		else
			return FALSE;
		}
		public function delete_fertilizer_image($img)
		{
		if($this->db->delete("image_master",$img))
			return TRUE;
		else
			return FALSE;
		}
	public function select_fertilizer_type()
		{
			$status=array("status"=>0);
			$result=$this->db->get_where("fertilizer_type_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	
	public function select_fertilizer_detail()
		{
			$status=array("status"=>0,"seller_id"=>$this->session->userdata("seller_login_id"));
			$result=$this->db->get_where("fertilizer_detail_master",$status);
			
		if($result)
			return $result->result_array() ;
		else
			return FALSE;
		}
	public function select_fertilizer_detail_trash()
		{
			$status=array("status"=>1,"seller_id"=>$this->session->userdata("seller_login_id"));
			$result=$this->db->get_where("fertilizer_detail_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	public function fertilizer_trash_backup($id,$status)
		{
			$result=$this->db->update('fertilizer_detail_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function fertilizer_trash_delete($id)
		{
			$result=$this->db->delete('fertilizer_detail_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function select_fertilizer_classification_type()
		{
			$status=array("status"=>0);
		$result=$this->db->get_where('fertilizer_classification_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_fertilizer_appearance_type()
		{
			$status=array("status"=>0);
		$result=$this->db->get_where('fertilizer_appearance_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_fertilizer_detail_type($data)
		{
			$id=$this->session->userdata("seller_login_id");
		$result=$this->db->query("select * from fertilizer_type_master fertilizer_type,fertilizer_subtype_master fertilizer_subtype,fertilizer_detail_master fertilizer_detail where fertilizer_type.fertilizer_type_id=fertilizer_subtype.fertilizer_type_id and fertilizer_subtype.fertilizer_subtype_id=fertilizer_detail.fertilizer_subtype_id and fertilizer_type.fertilizer_type_id='$data' and fertilizer_detail.status='0' and fertilizer_detail.seller_id='$id'");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_fertilizer_detail_type11($data)
		{
			$id=$this->session->userdata("seller_login_id");
		$result=$this->db->query("select * from fertilizer_type_master fertilizer_type,fertilizer_subtype_master fertilizer_subtype,fertilizer_submenu_master fertilizer_submenu ,fertilizer_detail_master fertilizer_detail where fertilizer_type.fertilizer_type_id=fertilizer_subtype.fertilizer_type_id and fertilizer_subtype.fertilizer_subtype_id=fertilizer_submenu.fertilizer_subtype_id and fertilizer_submenu.fertilizer_submenu_id=fertilizer_detail.fertilizer_submenu_id and fertilizer_submenu.fertilizer_submenu_id='$data' and fertilizer_submenu.status='0'  and fertilizer_detail.seller_id='$id'");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_fertilizer_detail_type1($data)
		{
			$id=$this->session->userdata("seller_login_id");
			$result=$this->db->query("select * from fertilizer_type_master fertilizer_type,fertilizer_subtype_master fertilizer_subtype,fertilizer_detail_master fertilizer_detail where fertilizer_type.fertilizer_type_id=fertilizer_subtype.fertilizer_type_id and fertilizer_subtype.fertilizer_subtype_id=fertilizer_detail.fertilizer_subtype_id and fertilizer_subtype.fertilizer_subtype_id='$data' and fertilizer_detail.status='0' and fertilizer_detail.seller_id='$id'");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_fertilizer_submenu_fertilizertype($data)
		{
		$result=$this->db->query("select * from fertilizer_type_master fertilizer_type,fertilizer_subtype_master fertilizer_subtype,fertilizer_submenu_master fertilizer_submenu where fertilizer_type.fertilizer_type_id=fertilizer_subtype.fertilizer_type_id and fertilizer_subtype.fertilizer_subtype_id=fertilizer_submenu.fertilizer_subtype_id  and fertilizer_type.fertilizer_type_id='$data' and fertilizer_type.status='0' ");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_fertilizer_submenu_fertilizertype1($data)
		{
			
		$result=$this->db->query("select * from fertilizer_type_master fertilizer_type,fertilizer_subtype_master fertilizer_subtype,fertilizer_submenu_master fertilizer_submenu where fertilizer_type.fertilizer_type_id=fertilizer_subtype.fertilizer_type_id and fertilizer_subtype.fertilizer_subtype_id=fertilizer_submenu.fertilizer_subtype_id  and fertilizer_subtype.fertilizer_subtype_id='$data' and fertilizer_subtype.status='0'");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
		public function select_fertilizer_type_data12($id)
		{
		$result=$this->db->query("select fertilizer_type.*,fertilizer_subtype.* from fertilizer_type_master fertilizer_type,fertilizer_subtype_master fertilizer_subtype where fertilizer_type.fertilizer_type_id=fertilizer_subtype.fertilizer_type_id  and fertilizer_subtype.fertilizer_subtype_id='$id' and fertilizer_subtype.status='0'");
		if($result)
		return $result->result_array();
		else
		return;
		}
	public function select_fertilizer_type_data($id)
		{
		$result=$this->db->query("select * from fertilizer_type_master where fertilizer_type_id='$id'");
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
	public function select_fertilizer_sub_type($data)
		{
			$result=$this->db->get_where("fertilizer_subtype_master",$data);
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
	public function select_fertilizer_submenu_type($data)
		{
			$result=$this->db->get_where("fertilizer_submenu_master",$data);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function select_classification_type()
		{
			$status=array("status"=>0);
			$result=$this->db->get_where("fertilizer_classification_master",$status);
			
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function select_appearance_type()
		{
			$status=array("status"=>0);
			$result=$this->db->get_where("fertilizer_appearance_master",$status);
			
		if($result->num_rows()!=0)
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
		
	public function fertilizer_back($id,$status)
		{
			$result=$this->db->update('fertilizer_detail_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function update_fertilizer_data_select($id)
		{
			$result=$this->db->get_where("fertilizer_detail_master",$id);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
		

	
}
