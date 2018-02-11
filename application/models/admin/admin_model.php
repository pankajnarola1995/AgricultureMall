<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_model extends CI_Model 
{
	public function admin_login_data($myusername,$mypassword)
		{
		//$this->db->where($data);
		$result=$this->db->query("SELECT * FROM admin_login WHERE md5(email_id)=md5('$myusername') and md5(password)=md5('$mypassword')");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
//select seller data for allowd a seeling...............

public function select_user_data_search($id)
		{
			$sqllike["user_name"]=$id;
			$status["status"]="0";
		$this->db->select('*');
			$this->db->from('user_registration');
			//$this->db->where('T.typeid = P.typeid');
			$this->db->where($status);
			$this->db->like($sqllike);				
			$sql=$this->db->get();
			return $sql->result_array();
		}
		
	public function select_user_data($allow_status)
		{
		$result=$this->db->get_where("user_registration",$allow_status);
		if($result)
			return $result->result_array();									
		else
			return FALSE;
		}
		
public function select_seller_data_search($id)
		{
			$sqllike["seller_name"]=$id;
			$status["allow_status"]="1";
		$this->db->select('*');
			$this->db->from('seller_registration');
			//$this->db->where('T.typeid = P.typeid');
			$this->db->where($status);
			$this->db->like($sqllike);				
			$sql=$this->db->get();
			return $sql->result_array();
		}
		
	public function select_seller_data($allow_status)
		{
		$result=$this->db->get_where("seller_registration",$allow_status);
		if($result)
			return $result->result_array();									
		else
			return FALSE;
		}
	public function select_city()
		{
			$status=array("status"=>"0");
		$result=$this->db->get_where("city_master",$status);
		if($result)
			return $result->result_array();									
		else
			return FALSE;
		}
	public function check_email($id)
		{
		$result=$this->db->get_where("seller_registration",$id);
		if($result)
			return $result->num_rows();									
		else
			return FALSE;
		}
	public function message($data)
		{
		$result=$this->db->insert("admin_chat_master",$data) and $this->db->insert("seller_chat_master",$data);;
		if($result)
			return true;
		else
			return FALSE;
		}
	public function select_seller_message($id)
		{
		$result=$this->db->get_where("admin_chat_master",$id);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	public function select_seller_message1($id)
		{
			//$this->db->where($id);
			//$this->db->or_where($id1);
		$result=$this->db->query("select * from admin_chat_master where reciver_id='$id' and status=1 ");
		$result1=$this->db->query("select * from admin_chat_master where sender_id='$id'  and status=1 ");
		//print_r($result);
		//die();
		if($result && $result1)
			return array($result->result_array(),$result1->result_array());
		else
			return FALSE;
		}
	public function select_seller_image()
		{
		$result=$this->db->get("image_master");
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	
	public function allow_seller($seller_id,$allow_status)
		{
		if($this->db->update("seller_registration",$allow_status,$seller_id) and $this->db->update("seller_login",$allow_status,$seller_id))
			return TRUE;
		else
			return FALSE;
		}
	//select seller data for Block from a seeling...............	
	
	public function block_seller($seller_id,$allow_status)
		{
		if($this->db->update("seller_registration",$allow_status,$seller_id) and $this->db->update("seller_login",$allow_status,$seller_id))
			return TRUE;
		else
			return FALSE;
		}
	public function delete_msg($chat_id,$status)
		{
		if($this->db->update("admin_chat_master",$status,$chat_id))
			return TRUE;
		else
			return FALSE;
		}	
		
	public function delete_trash_msg($chat_id)
		{
		if($this->db->delete("admin_chat_master",$chat_id))
			return TRUE;
		else
			return FALSE;
		}		

	
}
