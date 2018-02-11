<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home_model extends CI_Model {
public function select_seedtype_data()
	{
		$manu=$this->db->query("select * from seed_type_master where status=0 ORDER BY seed_type_name ASC");
		return $manu->result();
	}
public function select_seedsubtype_data()
	{
		$manu=$this->db->query("select * from seed_subtype_master  where status=0 ORDER BY seed_subtype_name ASC");
		return $manu->result();
	}
public function select_seedsubmanu_data()
	{
		$manu=$this->db->query("select * from seed_submenu_master  where status=0 ORDER BY seed_submenu_name ASC");
		
		return $manu->result();
	}
	public function select_fertilizersubmanu_data()
	{
		$manu=$this->db->query("select * from fertilizer_submenu_master  where status=0 ORDER BY fertilizer_submenu_name ASC");
		
		return $manu->result();
	}
public function select_fertilizertype_data()
	{
		$manu=$this->db->query("select * from fertilizer_type_master  where status=0 ORDER BY fertilizer_type_name ASC");
		return $manu->result();
	}
public function select_fertilizersubtype_data()
	{
		$manu=$this->db->query("select * from fertilizer_subtype_master  where status=0 ORDER BY fertilizer_subtype_name ASC");
		return $manu->result();
	}
public function select_tooltype_data()
	{
		$manu=$this->db->query("select * from tools_type_master  where status=0 ORDER BY tools_type_name ASC");
		return $manu->result();
	}
public function select_toolsubtype_data()
	{
		$manu=$this->db->query("select * from tools_subtype_master  where status=0 ORDER BY tools_subtype_name ASC");
		return $manu->result();
	}
public function select_pesticidetype_data()
	{
		$manu=$this->db->query("select * from pesticide_type_master  where status=0 ORDER BY pesticide_type_name ASC");
		return $manu->result();
	}
public function select_pesticidesubtype_data()
	{
		$manu=$this->db->query("select * from pesticide_subtype_master  where status=0 ORDER BY pesticide_subtype_name ASC");
		return $manu->result();
	}
public function select_country($status)
	{
	$result=$this->db->get_where('country_master',$status);
	if($result)
	return $result->result_array();
	else
	return FALSE;
	}
	
public function user_data($id)
	{
	$result=$this->db->get_where('user_registration',$id);
	if($result)
	return $result->result_array();
	else
	return FALSE;
	}
	
public function select_user_image($id)
		{
		$result=$this->db->get_where("image_master",$id);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}

public function add_user($data,$user_profile)
	{
	
	if($this->db->insert('user_registration',$data) and $this->db->insert('image_master',$user_profile))
	return true;
	else
	return FALSE;
	}
public function user_login_data($myusername,$mypassword)
	{
	$result=$this->db->query("SELECT * FROM  user_registration  WHERE  md5(email_id)=md5('$myusername') and md5(password)=md5('$mypassword')");
	if($result)
	return $result->result_array();
	else
	return FALSE;
	}
	public function selectpid($id)
	{
		
		if(is_numeric($id))
		{
			
				
			$sql=$this->db->query("select * from tools_detail_master,seed_detail_master,fertilizer_detail_master,pesticide_detail_master like '$id'");		
			
			return $sql->result();
		}
		else
		{
			
				$sqllike = array();
				
				if($id != "")
				{
					
					$sqllike['tools_detail_name'] = $id;
					$sql=$this->db->query("select * from tools_detail_master,seed_detail_master,fertilizer_detail_master,pesticide_detail_master like '$id'");	
			return $sql->result();
					
				}
		
			
			
		}
		
	}
	public function selectparts()
	{	
		//$this->db->select('*');
		//$this->db->from('tools_detail_master',);
		//$this->db->join('pesticide_detail master as p');
		
		$sql=$this->db->query("select * from fertilizer_detail_master where status=0");
		$sql1=$this->db->query("select * from seed_detail_master where status=0");
			$sql3=$this->db->query("select * from tools_detail_master where status=0");
			$sql4=$this->db->query("select * from pesticide_detail_master where status=0");
		
		
		if($sql)
		{
			return array("fertilizer"=>$sql->result_array(),"seed"=>$sql1->result_array(),"tools"=>$sql3->result_array(),"pesticide"=>$sql4->result_array());
			
 			
		}
		
	}
	public function security_question($email)
	{
		/*print_r($email);die();*/
//$que = $this->db->query("select security_question from seller_registration where email_id='$email' ");
		$que = $this->db->get_where("user_registration",$email);
		if($que)
		 return  $que->result_array();
		 else
		 return false;
	}
	
	public function user_newpassword($pass)
	{
		
//$que = $this->db->query("select security_question from seller_registration where email_id='$email' ");
		//$this->db->set('password'==$pass);
		
		$id = array("email_id"=>$this->session->userdata['email']);
	    $que=$this->db->update("user_registration",$pass,$id);
		if($que)
		 return  true;
		 else
		 return FALSE;
	}
	public function check_password($password,$user_id)
		{
		$result=$this->db->query("SELECT * FROM user_registration WHERE md5(user_id)=md5('$user_id') and md5(password)=md5('$password')");
		//echo "SELECT * FROM seller_registration WHERE md5(seller_id)=md5('$seller_id') and md5(password)=md5('$password')";
		//die();
		if($result)
			return $result->num_rows();									
		else
			return FALSE;
		}
		
			
	public function select_seed()
		{
		//$ee=$this->db->get("admin_login");
		//echo "<pre>";print_r($ee);die();
		
		if($data=$this->db->query("select * from seed_detail_master as sd INNER JOIN image_master as i on sd.seed_detail_id = i.seed_detail_id and sd.status=0 group by i.seed_detail_id limit 1"))
		//$data=$this->db->get("seed_detail_master");
		return $data->result_array();
		else
		return FALSE;
		}
	public function select_fertilizer()
		{
		//$ee=$this->db->get("admin_login");
		//echo "<pre>";print_r($ee);die();
		
		if($data=$this->db->query("select * from fertilizer_detail_master as sd INNER JOIN image_master as i on sd.fertilizer_detail_id = i.fertilizer_detail_id and sd.status=0 group by i.fertilizer_detail_id limit 1"))
		//$data=$this->db->get("seed_detail_master");
		return $data->result_array();
		else
		return FALSE;
		}
	public function select_tools()
		{
		//$ee=$this->db->get("admin_login");
		//echo "<pre>";print_r($ee);die();
		
		if($data=$this->db->query("select * from tools_detail_master as sd INNER JOIN image_master as i on sd.tools_detail_id = i.tools_detail_id and sd.status=0 group by i.tools_detail_id limit 1"))
		//$data=$this->db->get("seed_detail_master");
		return $data->result_array();
		else
		return FALSE;
		}
	public function select_pesticide()
		{
		//$ee=$this->db->get("admin_login");
		//echo "<pre>";print_r($ee);die();
		
		if($data=$this->db->query("select * from pesticide_detail_master as sd INNER JOIN image_master as i on sd.pesticide_detail_id = i.pesticide_detail_id and sd.status=0 group by i.pesticide_detail_id limit 1"))
		//$data=$this->db->get("seed_detail_master");
		return $data->result_array();
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
		
	public function user_edit_profile($id,$data)
		{
			$result=$this->db->update("user_registration",$data,$id);
		if($result)
			return true;
		else
			return FALSE;
		}

}
