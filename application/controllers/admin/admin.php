<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {
	
	 public function __construct()
       {	
	   		parent::__construct();
			$this->load->model("admin/admin_model");
			date_default_timezone_set("Asia/Kolkata");
        }
	public function index()
	{
		$this->load->view("admin/adminlogin");
			}
	public function admin_index()
	{
		$allow_status=array("allow_status"=>0);
		$seller_data['seller_allow']=$this->admin_model->select_seller_data($allow_status);
		$seller_data['city']=$this->admin_model->select_city();
		$this->load->view('admin/admin_index',$seller_data);

	}
	public function check_email_exist()
	{
		$id=array("email_id"=>$_POST["email_id"]);
		$cnt=$this->admin_model->check_email($id);
		if($cnt!=0)
		{
			echo "Email Already Exist Enter Diffrent Email Id";
		}
		else
		{
		}
		
	}
	public function admin_inbox()
	{
		$allow_status=array("allow_status"=>1);
		$seller_data['seller_msg']=$this->admin_model->select_seller_data($allow_status);
		$message=array("reciver_id"=>"Bha7871","status"=>0);
		$seller_data['seller_message']=$this->admin_model->select_seller_message($message);
		$this->load->view('admin/admin_inbox',$seller_data);

	}
	public function admin_inbox_send()
	{
		$allow_status=array("allow_status"=>1);
		$seller_data['seller_msg']=$this->admin_model->select_seller_data($allow_status);
		$message=array("sender_id"=>"Bha7871","status"=>0);
		$seller_data['seller_message']=$this->admin_model->select_seller_message($message);
		$this->load->view('admin/admin_inbox_send',$seller_data);

	}
	public function admin_inbox_trash()
	{
		$allow_status=array("allow_status"=>1);
		$seller_data['seller_msg']=$this->admin_model->select_seller_data($allow_status);
		$message="Bha7871";
		$seller_data['seller_message']=$this->admin_model->select_seller_message1($message);
		//print_r($seller_data['seller_message']);
		//die();
		//echo "<pre>";
		//print_r($seller_data['seller_message']);
		//die();
		$this->load->view('admin/admin_inbox_trash',$seller_data);

	}
	public function send_message()
	{
		$data=array("chat_id"=>random_string('alnum', 8),"sender_id"=>"Bha7871","reciver_id"=>$_POST["seller_id"],"message"=>$_POST["message"],"subject"=>$_POST["subject"],"date"=>date("M d"),"time"=>date("h:i"));
		//echo "<pre>";
		//print_r($data);
		//die();
		if($this->admin_model->message($data))
		{
			$this->session->set_flashdata("admin_message","Message Send.......");
			redirect(base_url().'admin/admin/admin_inbox');
		}
		//$this->load->view('admin/admin_inbox',$seller_data);

	}
	public function admin_message($id)
	{
		$chat_id=array("chat_id"=>$id);
		$result=$this->db->get_where("admin_chat_master",$chat_id);
		$chat_data["chat"]=$result->result_array();
		$allow_status=array("allow_status"=>1);
		$chat_data['seller_msg']=$this->admin_model->select_seller_data($allow_status);
		$this->load->view('admin/admin_message',$chat_data);
	}
	public function admin_msg_replay()
	{
		$data=array("chat_id"=>random_string('alnum', 8),"sender_id"=>Bha7871,"reciver_id"=>$_POST["seller_id1"],"message"=>$_POST["message1"],"subject"=>$_POST["subject1"],"date"=>date("M d"),"time"=>date("h:i"));
		//echo "<pre>";
	//print_r($data);
		//die();
		if($this->admin_model->message($data))
		{
			$this->session->set_flashdata("admin_message","Message Send.......");
			redirect(base_url().'admin/admin/admin_inbox');
		}
		//$this->load->view('admin/admin_inbox',$seller_data);

	}
	public function admin_delete_message()
	{
		
		$del= count($_POST['msg_delete']);
	//	echo "$del";
		//die();
			for($i=0;$i<$del;$i++)
					{
							
							$chat_id=array("chat_id"=>$_POST['msg_delete'][$i]);
							$status=array("status"=>1);
							//print_r($chat_id);
							//die();
							$delete=$this->admin_model->delete_msg($chat_id,$status);
							
					}
				if($delete)
							{
								$this->session->set_flashdata("admin_message","Message Delete Success......");
									redirect(base_url().'admin/admin/admin_inbox');
							}
							else
							{
								$this->session->set_flashdata("admin_message","Sorry ! Message Delete Error");
									redirect(base_url().'admin/admin/admin_inbox');
								
							}
		
		
	}
	public function admin_delete_trash_message()
	{
		if(isset($_POST["deletemsg"]))
		{		
		$del= count($_POST['msg_delete']);
	//	echo "$del";
		//die();
			for($i=0;$i<$del;$i++)
					{
							
							$chat_id=array("chat_id"=>$_POST['msg_delete'][$i]);
							$delete=$this->admin_model->delete_trash_msg($chat_id);
							
					}
				if($delete)
							{
								$this->session->set_flashdata("admin_message","Message Delete Success......");
									redirect(base_url().'admin/admin/admin_inbox_trash');
							}
							else
							{
								$this->session->set_flashdata("admin_message","Sorry ! Message Delete Error");
									redirect(base_url().'admin/admin/admin_inbox_trash');
								
							}
		}
		else if(isset($_POST["backmsg"]))
		{
			$del= count($_POST['msg_delete']);
	//	echo "$del";
		//die();
			for($i=0;$i<$del;$i++)
					{
							
							$chat_id=array("chat_id"=>$_POST['msg_delete'][$i]);
							$status=array("status"=>0);
							//print_r($chat_id);
							//die();
							$delete=$this->admin_model->delete_msg($chat_id,$status);
							
					}
				if($delete)
							{
								$this->session->set_flashdata("admin_message","Message Backup Success......");
									redirect(base_url().'admin/admin/admin_inbox_trash');
							}
							else
							{
								$this->session->set_flashdata("admin_message","Sorry ! Message Backup Error");
									redirect(base_url().'admin/admin/admin_inbox_trash');
								
							}
		}
		
		
		
	}
	public function admin_send_delete_message()
	{
		
		$del= count($_POST['msg_delete']);
	//	echo "$del";
		//die();
			for($i=0;$i<$del;$i++)
					{
							
							$chat_id=array("chat_id"=>$_POST['msg_delete'][$i]);
							$status=array("status"=>1);
							//print_r($chat_id);
							//die();
							$delete=$this->admin_model->delete_msg($chat_id,$status);
							
					}
				if($delete)
							{
								$this->session->set_flashdata("admin_message","Message Delete Success......");
									redirect(base_url().'admin/admin/admin_inbox_send');
							}
							else
							{
								$this->session->set_flashdata("admin_message","Sorry ! Message Delete Error");
									redirect(base_url().'admin/admin/admin_inbox_send');
								
							}
		
		
	}
	public function logout()
	{
		if($this->session->userdata("admin_login")!="")
		{
		$this->session->unset_userdata('admin_login');
		$this->session->set_flashdata("admin_Logout","Wow ! Logout Success..........");
		redirect(base_url().'admin/admin');
		}
	}
	public function admin_login_chk()
	{
		
		$this->form_validation->set_rules('email','','required|valid_email');
		$this->form_validation->set_rules('login_password','','required');
		if($this->form_validation->run()== TRUE)
			{
			$admin_login=array("email_id"=>$_POST['email'],"password"=>$_POST['login_password']);
			$id=$_POST['email'];
			$pass=$_POST['login_password'];
			$admin_chk=$this->admin_model->admin_login_data($id,$pass);
			//echo "<pre>";
			//print_r($admin_chk);
			//die();
			$cnt=count($admin_chk);
			if($cnt!=0)
			{
				
				
				$this->session->set_userdata("admin_login",$_POST['email']);
				/*echo $this->session->userdata("seller_login_id");*/
				$this->session->set_flashdata("admin_Login","Wow ! Login Success..........");
				redirect(base_url().'admin/admin/admin_index');
			}
			else
			{
				$this->session->set_flashdata("admin_allow","user dose not exist");
				redirect(base_url().'admin/admin');
			}
		}
		else
		{	
	//echo "else";die();
			$this->session->set_flashdata("admin_login1","Enter Valid Data");
			//redirect(base_url().'admin/admin');
			$this->load->view('admin/adminlogin');	
			}
		
	}
	public function admin_allow_seller($seller_id)
	{
		$seller_id=array("seller_id"=>$seller_id);
		$allow_status=array("allow_status"=>1);
		if($this->admin_model->allow_seller($seller_id,$allow_status))
		{
			$this->session->set_flashdata("admin_allow_seller","You allow Seller Success......");
				redirect(base_url().'admin/admin');
		}
		else
		{
			$this->session->set_flashdata("admin_allow_seller","Sorry ! You not Allow Seller Try Again Later");
				redirect(base_url().'admin/admin');
			
		}
		
	}
	public function admin_block_seller($seller_id)
	{
		$seller_id=array("seller_id"=>$seller_id);
		$allow_status=array("allow_status"=>2);
		if($this->admin_model->allow_seller($seller_id,$allow_status))
		{
			$this->session->set_flashdata("admin_block_seller","You Block Seller Success......");
				redirect(base_url().'admin/admin');
		}
		else
		{
			$this->session->set_flashdata("admin_block_seller","Sorry ! You not Block Seller Try Again Later");
				redirect(base_url().'admin/admin');
			
		}
		
	}

	public function seller_profile()
	{
		$allow_status=array("allow_status"=>1);
		$seller_data["city_data"]=$this->admin_model->select_city();
		$seller_data['seller_data']=$this->admin_model->select_seller_data($allow_status);
		$seller_data['seller_image']=$this->admin_model->select_seller_image();
		$cnt=count($seller_data['seller_data']);
		//echo "<pre>";
		//print_r($seller_data['seller_data']);
		//die();
		if($cnt!=0)
		{
			$this->load->view('admin/seller_profile',$seller_data);
		}
		else
		{
			$this->load->view('admin/seller_profile');
		}
		//print_r($seller_data['seller_allow'][0]['seller_id']);
		//die();
		
	}
	
	public function seller_profile_search()
	{
			
		
		$id=$_GET["search"];
		$seller_data["city_data"]=$this->admin_model->select_city();
		$seller_data['seller_data']=$this->admin_model->select_seller_data_search($id);
		$seller_data['seller_image']=$this->admin_model->select_seller_image();
		$cnt=count($seller_data['seller_data']);
		//echo "<pre>";
		//print_r($seller_data['seller_data']);
		//die();
		if($cnt!=0)
		{
			$this->load->view('admin/seller_profile',$seller_data);
		}
		else
		{
			$this->load->view('admin/seller_profile');
		}
		//print_r($seller_data['seller_allow'][0]['seller_id']);
		//die();
		
	}
	
		public function user_profile()
	{
		$allow_status=array("status"=>0);
		$user_data["city_data"]=$this->admin_model->select_city();
		$user_data['user_data']=$this->admin_model->select_user_data($allow_status);
		$user_data['user_image']=$this->admin_model->select_seller_image();
		$cnt=count($user_data['user_data']);
		//echo "<pre>";
		//print_r($seller_data['seller_data']);
		//die();
		if($cnt!=0)
		{
			$this->load->view('admin/user_profile',$user_data);
		}
		else
		{
			$this->load->view('admin/user_profile');
		}
		//print_r($seller_data['seller_allow'][0]['seller_id']);
		//die();
		
	}
	
	public function user_profile_search()
	{
			
		
		$id=$_GET["search"];
		$user_data["city_data"]=$this->admin_model->select_city();
		$user_data['user_data']=$this->admin_model->select_user_data_search($id);
		$user_data["user_image"]=$this->admin_model->select_seller_image();
		$cnt=count($seller_data['user_data']);
		//echo "<pre>";
		//print_r($seller_data['seller_data']);
		//die();
		if($cnt!=0)
		{
			$this->load->view('admin/user_profile',$user_data);
		}
		else
		{
			$this->load->view('admin/user_profile');
		}
		//print_r($seller_data['seller_allow'][0]['seller_id']);
		//die();
		
	}
	
}
