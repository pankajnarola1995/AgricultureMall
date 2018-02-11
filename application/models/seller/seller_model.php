<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Seller_model extends CI_Model 
{
		//seller login check.................
		
	public function seller_login_data($myusername,$mypassword)
		{
		$result=$this->db->query("SELECT sg.password,sg.seller_name,sg.seller_id,sg.email_id,sg.allow_status FROM seller_login sl,seller_registration sg WHERE sl.seller_id=sg.seller_id and md5(sl.email_id)=md5('$myusername') and md5(sl.password)=md5('$mypassword')");
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function update_image($id,$data)
		{
			$result=$this->db->update("image_master",$data,$id);
		if($result)
			return true;
		else
			return FALSE;
		}
	public function seller_edit_profile($id,$data)
		{
			$result=$this->db->update("seller_registration",$data,$id);
		if($result)
			return true;
		else
			return FALSE;
		}
	public function seller_registration_insert($seller_regi_data,$seller_profile,$seller_login_data)
		{
		if($this->db->insert('seller_registration',$seller_regi_data) and $this->db->insert('seller_login',$seller_login_data) and $this->db->insert('image_master',$seller_profile))
		return TRUE;
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
		public function select_seller_data($allow_status)
		{
		$result=$this->db->get_where("seller_registration",$allow_status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	public function select_seller_message($id)
		{
		$result=$this->db->get_where("seller_chat_master",$id);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}
	public function select_seller_message1($id)
		{
			//$this->db->where($id);
			//$this->db->or_where($id1);
		$result=$this->db->query("select * from seller_chat_master where reciver_id='$id' and status=1 ");
		$result1=$this->db->query("select * from seller_chat_master where sender_id='$id'  and status=1 ");
		//print_r($result);
		//die();
		if($result && $result1)
			return array($result->result_array(),$result1->result_array());
		else
			return FALSE;
		}
	public function seller_question($email)
	{
	$resque =$this->db->get_where("seller_registration",$email);
	if($resque)
		return $resque->result_array();
	else
			return FALSE;
	}
public function security_question($email)
	{
		/*print_r($email);die();*/
//$que = $this->db->query("select security_question from seller_registration where email_id='$email' ");
		$que = $this->db->get_where("seller_registration",$email);
		if($que)
		 return  $que->result_array();
		 else
		 return false;
	}
public function seller_check_question($answer,$security)
	{
		
	$res=$this->db->query("SELECT * FROM seller_registration WHERE md5(security_answer)=md5('$answer') and md5(security_question)=md5('$security')");
	if($res)
			return $res->result_array();
	else
			return FALSE;
				
	}
	public function check_password($password,$seller_id)
		{
		$result=$this->db->query("SELECT * FROM seller_registration WHERE md5(seller_id)=md5('$seller_id') and md5(password)=md5('$password')");
		//echo "SELECT * FROM seller_registration WHERE md5(seller_id)=md5('$seller_id') and md5(password)=md5('$password')";
		//die();
		if($result)
			return $result->num_rows();									
		else
			return FALSE;
		}	
public function seller_newpassword($pass)
	{
		
//$que = $this->db->query("select security_question from seller_registration where email_id='$email' ");
		//$this->db->set('password'==$pass);
		$id = array("email_id"=>$this->session->userdata['email_id']);
		
		//print_r($id);
		//print_r($pass);
		//die();
		
	
		$que=$this->db->update("seller_registration",$pass,$id);
		
		$que1=$this->db->update("seller_login",$pass,$id);
		
		//$this->db->where('email_id'==$id);
		
		//$que = $this->db->update("seller_registration");
		if($que and $que1)
		 return  true;
		 else
		 return FALSE;
	}
	public function seller_changepassword($pass)
	{
		
//$que = $this->db->query("select security_question from seller_registration where email_id='$email' ");
		//$this->db->set('password'==$pass);
		$id = array("email_id"=>$this->session->userdata['email']);
		
		//print_r($id);
		//print_r($pass);
		//die();
		
	
		$que=$this->db->update("seller_registration",$pass,$id);
		
		$que1=$this->db->update("seller_login",$pass,$id);
		
		//$this->db->where('email_id'==$id);
		
		//$que = $this->db->update("seller_registration");
		if($que and $que1)
		 return  true;
		 else
		 return FALSE;
	}
	public function message($data)
		{
		$result=$this->db->insert("seller_chat_master",$data) and $this->db->insert("admin_chat_master",$data);
		if($result)
			return true;
		else
			return FALSE;
		}
	public function delete_msg($chat_id,$status)
		{
		if($this->db->update("seller_chat_master",$status,$chat_id))
			return TRUE;
		else
			return FALSE;
		}	
		
	public function delete_trash_msg($chat_id)
		{
		if($this->db->delete("seller_chat_master",$chat_id))
			return TRUE;
		else
			return FALSE;
		}
		
		public function select_order_data()
		{
			//$status=array("status"=>0);
			$id=$this->session->userdata("seller_login_id");
		
		$resque =$this->db->query(" select * from order_book_master where seller_id='$id' ");
		if($resque)
			return $resque->result_array();
		else
				return FALSE;
		}
	public function order_status($id,$id2)
		{
			//$status=array("status"=>0);
			//$id=$this->session->userdata("seller_login_id");
		
		$resque =$this->db->query("update order_book_master set order_status='$id' where order_book_id='$id2' ");
		if($resque)
			return TRUE;
		else
				return FALSE;
		}
	public function track_order()
		{
			//$status=array("status"=>0); order_book_id='$id'
			$id=$this->session->userdata("user_login_id");
		
		$resque =$this->db->query(" select * from order_book_master  where  user_id='$id'");
		if($resque)
			return $resque->result_array();
		else
				return FALSE;
		}
	

	
}
