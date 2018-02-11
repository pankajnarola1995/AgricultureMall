<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Seller_seed_model extends CI_Model 
{

	
		public function seller_seed_insert($data)
		{
		if($this->db->insert("seed_detail_master",$data))
			return TRUE;
		else
			return FALSE;
		}
		public function seller_seed_update($data,$id)
		{
			$this->db->where($id);
			$up=$this->db->update('seed_detail_master',$data);
		if($up)
			return TRUE;
		else
			return FALSE;
		}
	public function update_seed_image($img)
		{
			
			
			$this->db->set($img);
			$this->db->where($img);
			$im=$this->db->update('image_master');
		if($im)
			return TRUE;
		else
			return FALSE;
		}
		
		public function insert_seed_image($img)
		{
		if($this->db->insert("image_master",$img))
			return TRUE;
		else
			return FALSE;
		}
		public function delete_seed_image($img)
		{
		if($this->db->delete("image_master",$img))
			return TRUE;
		else
			return FALSE;
		}
	public function select_seed_type()
		{
			$status=array("status"=>0);
			$result=$this->db->get_where("seed_type_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	
	public function select_seed_detail()
		{
			$status=array("status"=>0,"seller_id"=>$this->session->userdata("seller_login_id"));
			$result=$this->db->get_where("seed_detail_master",$status);
			
		if($result)
			return $result->result_array() ;
		else
			return FALSE;
		}
	public function select_seed_detail_trash()
		{
			$status=array("status"=>1,"seller_id"=>$this->session->userdata("seller_login_id"));
			$result=$this->db->get_where("seed_detail_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	public function seed_trash_backup($id,$status)
		{
			$result=$this->db->update('seed_detail_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function seed_trash_delete($id)
		{
			$result=$this->db->delete('seed_detail_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function select_seed_cultivation_type()
		{
			$status=array("status"=>0);
		$result=$this->db->get_where('seed_cultivation_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_seed_detail_type($data)
		{
			$id=$this->session->userdata("seller_login_id");
		$result=$this->db->query("select * from seed_type_master seed_type,seed_subtype_master seed_subtype,seed_detail_master seed_detail where seed_type.seed_type_id=seed_subtype.seed_type_id and seed_subtype.seed_subtype_id=seed_detail.seed_subtype_id and seed_type.seed_type_id='$data' and seed_detail.status='0' and seed_detail.seller_id='$id'");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_seed_detail_type11($data)
		{
			$id=$this->session->userdata("seller_login_id");
		$result=$this->db->query("select * from seed_type_master seed_type,seed_subtype_master seed_subtype,seed_submenu_master seed_submenu ,seed_detail_master seed_detail where seed_type.seed_type_id=seed_subtype.seed_type_id and seed_subtype.seed_subtype_id=seed_submenu.seed_subtype_id and seed_submenu.seed_submenu_id=seed_detail.seed_submenu_id and seed_submenu.seed_submenu_id='$data' and seed_detail.status='0'  and seed_detail.seller_id='$id'");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_seed_detail_type1($data)
		{
			$id=$this->session->userdata("seller_login_id");
			$result=$this->db->query("select * from seed_type_master seed_type,seed_subtype_master seed_subtype,seed_detail_master seed_detail where seed_type.seed_type_id=seed_subtype.seed_type_id and seed_subtype.seed_subtype_id=seed_detail.seed_subtype_id and seed_subtype.seed_subtype_id='$data' and seed_detail.status='0' and seed_detail.seller_id='$id'");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_seed_submenu_seedtype($data)
		{
		$result=$this->db->query("select * from seed_type_master seed_type,seed_subtype_master seed_subtype,seed_submenu_master seed_submenu where seed_type.seed_type_id=seed_subtype.seed_type_id and seed_subtype.seed_subtype_id=seed_submenu.seed_subtype_id  and seed_type.seed_type_id='$data' and seed_type.status='0' ");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_seed_submenu_seedtype1($data)
		{
			
		$result=$this->db->query("select * from seed_type_master seed_type,seed_subtype_master seed_subtype,seed_submenu_master seed_submenu where seed_type.seed_type_id=seed_subtype.seed_type_id and seed_subtype.seed_subtype_id=seed_submenu.seed_subtype_id  and seed_subtype.seed_subtype_id='$data' and seed_subtype.status='0'");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
		public function select_seed_type_data12($id)
		{
		$result=$this->db->query("select seed_type.*,seed_subtype.* from seed_type_master seed_type,seed_subtype_master seed_subtype where seed_type.seed_type_id=seed_subtype.seed_type_id  and seed_subtype.seed_subtype_id='$id' and seed_subtype.status='0'");
		if($result)
		return $result->result_array();
		else
		return;
		}
	public function select_seed_type_data($id)
		{
		$result=$this->db->query("select * from seed_type_master where seed_type_id='$id'");
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
	public function select_seed_sub_type($data)
		{
			$result=$this->db->get_where("seed_subtype_master",$data);
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
	public function select_seed_submenu_type($data)
		{
			$result=$this->db->get_where("seed_submenu_master",$data);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function select_cultivation_type()
		{
			$status=array("status"=>0);
			$result=$this->db->get_where("seed_cultivation_master",$status);
			
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
		
	public function seed_back($id,$status)
		{
			$result=$this->db->update('seed_detail_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function update_seed_data_select($id)
		{
			$result=$this->db->get_where("seed_detail_master",$id);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
		

	
}
