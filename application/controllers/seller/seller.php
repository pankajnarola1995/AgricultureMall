<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Seller extends CI_Controller {
	
	 public function __construct()
       {	
	   		parent::__construct();
			$this->load->model("seller/seller_model");
			date_default_timezone_set("Asia/Kolkata");
        }
	public function index()
	{
		$this->load->view('seller/sellerlogin');
	}
	public function change_password()
	{
		$this->load->view('seller/seller_change_password');
	}
	public function seller_profile()
	{
		$id=array("seller_id"=>$this->session->userdata("seller_login_id"));
				$seller_pic=$this->seller_model->select_seller_image($id);
				/*echo "<pre>";
				print_r($seller_pic);
				die();*/
				$this->session->set_userdata("seller_pic",$seller_pic[0]['image_name']);
		$data=$this->db->get_where("seller_registration",$id);
		$status=array("status"=>0);
		$data1=$this->db->get_where("city_master",$status);
		$seller_data["seller_data"]=$data->result_array();
		$seller_data["city_data"]=$data1->result_array();
		
		$this->load->view('seller/seller_profile',$seller_data);
	}
	public function seller_updateprofile()
	{
		$id=array("seller_id"=>$this->session->userdata("seller_login_id"));
		$seller_pic=$this->seller_model->select_seller_image($id);
				/*echo "<pre>";
				print_r($seller_pic);
				die();*/
				$this->session->set_userdata("seller_pic",$seller_pic[0]['image_name']);
		$data=$this->db->get_where("seller_registration",$id);
		$status=array("status"=>0);
		$data1=$this->db->get_where("city_master",$status);
		$seller_data["seller_data"]=$data->result_array();
		$seller_data["city_data"]=$data1->result_array();
		
		$this->load->view('seller/seller_profile_update',$seller_data);
	}
	public function seller_edit_profile()
	{
		$id=array("seller_id"=>$this->session->userdata("seller_login_id"));
		$data=array("city"=>$_POST["city"],"gender"=>$_POST["gender"],"company_name"=>$_POST["company_name"],"address"=>$_POST["address"]);
		if($this->seller_model->seller_edit_profile($id,$data))
					{
						$this->session->set_flashdata("edit_profile","Profile Updated.......");
						redirect(base_url().'seller/seller/seller_profile');
					}
		
		else
		{
			
			$this->session->set_flashdata("seller_edit_error","Error On Edit Profile.......");
						redirect(base_url().'seller/seller/seller_updateprofile');
		}
	}
	public function logout()
	{
		if($this->session->userdata("seller_login_id")!="")
		{
		$this->session->unset_userdata('seller_login_id');
		$this->session->unset_userdata('email_id');
		$this->session->set_flashdata("seller_Logout","Wow ! Logout Success..........");
		redirect(base_url().'seller/seller');
		}
	}
	public function seller_login_chk()
	{
		
		$this->form_validation->set_rules('email','','required|valid_email');
		$this->form_validation->set_rules('login_password','','required');
		if($this->form_validation->run()== TRUE)
		{
			
			//$seller_login=array("email_id"=>$_POST['email'],"password"=>$_POST['login_password']);
			$id=$_POST['email'];
			$pass=$_POST['login_password'];
			$seller_chk=$this->seller_model->seller_login_data($id,$pass);
			$cnt=count($seller_chk);
			//print_r($seller_chk);
			//die();
			if($cnt!=0 && $seller_chk[0]['allow_status']==1)
			{
				
				$this->session->set_userdata("seller_login_id",$seller_chk[0]['seller_id']);
				$this->session->set_userdata("seller_password",$seller_chk[0]['password']);
				$this->session->set_userdata("email_id",$seller_chk[0]['email_id']);
				$this->session->set_userdata("seller_name",$seller_chk[0]['seller_name']);
				///echo $this->session->userdata("seller_name");
				//die();
				$id=array("seller_id"=>$this->session->userdata("seller_login_id"));	
				$seller_pic=$this->seller_model->select_seller_image($id);
				/*echo "<pre>";
				print_r($seller_pic);
				die();*/
				$this->session->set_userdata("seller_pic",$seller_pic[0]['image_name']);
				$this->session->set_flashdata("seller_Login","Wow ! Login Success..........");
				redirect(base_url().'seller/seller_seed');
			}
			else if($cnt!=0 && $seller_chk[0]['allow_status']==0)
			{
				$this->session->set_flashdata("seller_allow","You Can Not Sell Product Please Verified From Admin");
				redirect(base_url().'seller/seller');
			}
			else
			{
				$this->session->set_flashdata("seller_allow","User dose not exist");
			redirect(base_url().'seller/seller');
			}
		}
		else
		{
			$this->session->set_flashdata("seller_login","user dose not exist");
			$this->load->view('seller/sellerlogin');		
		}
		
	}
	public function seller_profile_update()
	{
		//echo "xfdd";
		//die();
		$id=array("seller_id"=>$_POST["seller_id"]);
		//$name=array("image_name"=>$_POST["seed_images"]);
		//echo "<pre>";
		//print_r($_POST["old_seed_images_id"]);
		//die();
		if($_FILES['images']['name']!="")
		{
		$config['upload_path']= 'image/user/';
		$config['allowed_types']= 'gif|jpg|png';
		$this->upload->initialize($config);
		$seller_profile="";	
		if ($this->upload->do_upload('images'))
								{
								$fname =$_FILES['images']['name'];
								$name=array("image_name"=>$fname);
								//$seller_profile=array("image_id"=>random_string('alnum', 8),"seller_id"=>$seller_id,"image_name"=>$fname);
								$select_data["image_update"]=$this->seller_model->update_image($id,$name);
								unlink("image/user/".$_POST["old_images_id"]);
								}
		}
		redirect(base_url().'seller/seller_seed');
		
	}	
public function seller_profile_update_seller()
	{
		//echo "xfdd";
		//die();
		$id=array("seller_id"=>$_POST["seller_id"]);
		//$name=array("image_name"=>$_POST["seed_images"]);
		//echo "<pre>";
		//print_r($_POST["old_seed_images_id"]);
		//die();
		if($_FILES['images']['name']!="")
		{
		$config['upload_path']= 'image/user/';
		$config['allowed_types']= 'gif|jpg|png';
		$this->upload->initialize($config);
		$seller_profile="";	
		if ($this->upload->do_upload('images'))
								{
								$fname =$_FILES['images']['name'];
								$name=array("image_name"=>$fname);
								//$seller_profile=array("image_id"=>random_string('alnum', 8),"seller_id"=>$seller_id,"image_name"=>$fname);
								$select_data["image_update"]=$this->seller_model->update_image($id,$name);
								unlink("image/user/".$_POST["old_images_id"]);
								}
		}
		redirect(base_url().'seller/seller/seller_profile');
		
	}	
public function seller_profile_edit_seller()
	{
		//echo "xfdd";
		//die();
		$id=array("seller_id"=>$_POST["seller_id"]);
		//$name=array("image_name"=>$_POST["seed_images"]);
		//echo "<pre>";
		//print_r($_POST["old_seed_images_id"]);
		//die();
		if($_FILES['images']['name']!="")
		{
		$config['upload_path']= 'image/user/';
		$config['allowed_types']= 'gif|jpg|png';
		$this->upload->initialize($config);
		$seller_profile="";	
		if ($this->upload->do_upload('images'))
								{
								$fname =$_FILES['images']['name'];
								$name=array("image_name"=>$fname);
								//$seller_profile=array("image_id"=>random_string('alnum', 8),"seller_id"=>$seller_id,"image_name"=>$fname);
								$select_data["image_update"]=$this->seller_model->update_image($id,$name);
								unlink("image/user/".$_POST["old_images_id"]);
								}
		}
		redirect(base_url().'seller/seller/seller_updateprofile');
		
	}	
	public function seller_signup()
	{
		$status=array("status"=>"0");
		$result=$this->db->get_where("country_master",$status);
		$select_city["country"]=$result->result_array();
		$this->load->view('seller/seller_registration',$select_city);
	}
	public function seller_message($id)
	{
		$chat_id=array("chat_id"=>$id);
		$result=$this->db->get_where("seller_chat_master",$chat_id);
		$chat_data["chat"]=$result->result_array();
		$allow_status=array("allow_status"=>1);
		$chat_data['seller_msg']=$this->seller_model->select_seller_data($allow_status);
		$this->load->view('seller/seller_message',$chat_data);
	}
	public function seller_registration()
	{
		$this->form_validation->set_rules('email','','is_unique[seller_registration.email_id]');
		if($this->form_validation->run()== TRUE)
		{
		$seller_id=random_string('alnum', 8);
		$seller_login_id=random_string('alnum', 8);
		$seller_name=$_POST['first_name']." ".$_POST['last_name'];
		$seller_regi_data=array("seller_id"=>$seller_id,"email_id"=>$_POST['email_id'],"password"=>$_POST['password'],"seller_name"=>$seller_name,"address"=>$_POST['address'],"city"=>$_POST['city_id'],"gender"=>$_POST['gender'],"company_name"=>$_POST['company_name'],"mobile_number"=>$_POST['mobile_number'],"security_question"=>$_POST["security_question"],"security_answer"=>$_POST["security_answer"],"allow_status"=>0);
		$seller_login_data=array("seller_login_id"=>$seller_login_id,"seller_id"=>$seller_id,"email_id"=>$_POST['email_id'],"password"=>$_POST['password'],"allow_status"=>0);
		$config['upload_path']= 'image/user';
		$config['allowed_types']= 'gif|jpg|png';
		$this->upload->initialize($config);
		$seller_profile="";	
		if ($this->upload->do_upload('profile'))
								{
								$fname =$_FILES['profile']['name'];
								$seller_profile=array("image_id"=>random_string('alnum', 8),"seller_id"=>$seller_id,"image_name"=>$fname);
								}
								else
								{
								$seller_profile=array("image_id"=>random_string('alnum', 8),"seller_id"=>$seller_id,"image_name"=>"user.png");
								}
		if($this->seller_model->seller_registration_insert($seller_regi_data,$seller_profile,$seller_login_data))
					{
						$this->session->set_flashdata("seller_registration","registration success.......");
						$this->load->view('seller/sellerlogin');
					}
		}
		else
		{
			
			$this->load->view('seller/seller_registration');
		}
	}
	public function seller_inbox()
	{
		$allow_status=array("allow_status"=>1);
		$seller_data['seller_msg']=$this->seller_model->select_seller_data($allow_status);
		$message=array("reciver_id"=>$this->session->userdata("seller_login_id"),"status"=>0);
		$seller_data['seller_message']=$this->seller_model->select_seller_message($message);
		$this->load->view('seller/seller_inbox',$seller_data);

	}
	public function seller_inbox_send()
	{
		$allow_status=array("allow_status"=>1);
		$seller_data['seller_msg']=$this->seller_model->select_seller_data($allow_status);
		$message=array("sender_id"=>$this->session->userdata("seller_login_id"),"status"=>0);
		$seller_data['seller_message']=$this->seller_model->select_seller_message($message);
		$this->load->view('seller/seller_inbox_send',$seller_data);

	}
	public function seller_inbox_trash()
	{
		$allow_status=array("allow_status"=>1);
		$seller_data['seller_msg']=$this->seller_model->select_seller_data($allow_status);
		$message=$this->session->userdata("seller_login_id");
		$seller_data['seller_message']=$this->seller_model->select_seller_message1($message);
		//print_r(count($seller_data['seller_message']));
		//die();
		$this->load->view('seller/seller_inbox_trash',$seller_data);

	}		
	public function send_message()
	{
		$data=array("chat_id"=>random_string('alnum', 8),"sender_id"=>$this->session->userdata("seller_login_id"),"reciver_id"=>$_POST["seller_id"],"message"=>$_POST["message"],"subject"=>$_POST["subject"],"date"=>date("M d"),"time"=>date("h:i"));
		//echo "<pre>";
		//print_r($data);
		//die();
		if($this->seller_model->message($data))
		{
			$this->session->set_flashdata("seller_message","Message Send.......");
			redirect(base_url().'seller/seller/seller_inbox');
		}
		//$this->load->view('admin/admin_inbox',$seller_data);

	}
	public function seller_msg_replay()
	{
		$data=array("chat_id"=>random_string('alnum', 8),"sender_id"=>$this->session->userdata("seller_login_id"),"reciver_id"=>$_POST["seller_id1"],"message"=>$_POST["message1"],"subject"=>$_POST["subject1"],"date"=>date("M d"),"time"=>date("h:i"));
		//echo "<pre>";
	//print_r($data);
		//die();
		if($this->seller_model->message($data))
		{
			$this->session->set_flashdata("seller_message","Message Send.......");
			redirect(base_url().'seller/seller/seller_inbox');
		}
		//$this->load->view('admin/admin_inbox',$seller_data);

	}
	public function seller_security_email()
	{		
			$this->load->view('seller/seller_security_email');
	}
	public function seller_security_question_load()
	{		//$que['email']=$question;
		$question["question"]=$this->session->userdata('security_question');
		if($question["question"]==null)
		{
					$this->session->set_flashdata("email_error","User Doesnot Exist.......");
					redirect(base_url()."seller/seller/seller_security_email");
		}
		else
		
				$this->load->view('seller/seller_security',$question);
	}
	public function seller_delete_message()
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
							$delete=$this->seller_model->delete_msg($chat_id,$status);
							
					}
				if($delete)
							{
								$this->session->set_flashdata("seller_message","Message Delete Success......");
									redirect(base_url().'seller/seller/seller_inbox');
							}
							else
							{
								$this->session->set_flashdata("seller_message_error","Sorry ! Message Delete Error");
									redirect(base_url().'seller/seller/seller_inbox');
								
							}
		
		
	}
	public function seller_delete_trash_message()
	{
		if(isset($_POST["deletemsg"]))
		{		
		$del= count($_POST['msg_delete']);
	//	echo "$del";
		//die();
			for($i=0;$i<$del;$i++)
					{
							
							$chat_id=array("chat_id"=>$_POST['msg_delete'][$i]);
							$delete=$this->seller_model->delete_trash_msg($chat_id);
							
					}
				if($delete)
							{
								$this->session->set_flashdata("seller_message","Message Delete Success......");
									redirect(base_url().'seller/seller/seller_inbox_trash');
							}
							else
							{
								$this->session->set_flashdata("seller_message_error","Sorry ! Message Delete Error");
									redirect(base_url().'seller/seller/seller_inbox_trash');
								
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
							$delete=$this->seller_model->delete_msg($chat_id,$status);
							
					}
				if($delete)
							{
								$this->session->set_flashdata("seller_message","Message Backup Success......");
									redirect(base_url().'seller/seller/seller_inbox_trash');
							}
							else
							{
								$this->session->set_flashdata("seller_message_error","Sorry ! Message Backup Error");
									redirect(base_url().'seller/seller/seller_inbox_trash');
								
							}
		}
		
		
		
	}
	public function seller_send_delete_message()
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
							$delete=$this->seller_model->delete_msg($chat_id,$status);
							
					}
				if($delete)
							{
								$this->session->set_flashdata("seller_message","Message Delete Success......");
									redirect(base_url().'seller/seller/seller_inbox_send');
							}
							else
							{
								$this->session->set_flashdata("seller_message_error","Sorry ! Message Delete Error");
									redirect(base_url().'seller/seller/seller_inbox_send');
								
							}
		
		
	}
	public function seller_security_question()
	{		$email = array("email_id"=>$_POST['email_id'],"allow_status"=>"1");
			//print_r($email);
			//die();
			
				
		$que = $this->seller_model->security_question($email);
			
			if($que)
			{	
				
				//print_r($que[0]["security_question"]);
				//die();
				$this->session->set_userdata('email',$_POST['email_id']);
				$this->session->set_userdata('security_question',$que[0]["security_question"]);
				redirect(base_url()."seller/seller/seller_security_question_load");
			}
			else
			{
				
				$this->session->set_flashdata("email_error","Email Not Verify Please Enter Valid Email Id.......");
				redirect(base_url()."seller/seller/seller_security_email");
			}
	}
	public function seller_seller_confirm_code()
	{		
	$this->load->view('seller/seller_confirm_code');
	}
public function confirm_code()
	{
		if(isset($_POST["resend"]))
		{
			$mail =$this->session->userdata('email');
		//echo $mail;
		//die();
		$pass=random_string("numeric",6);
		$this->session->set_userdata("conform_code",$pass);
			$sms = "Your Confirmation Code IS :-'$pass'";
			$sms .= ". Thanks.   ";
			$sub = "ForGot Your Password ";
			$chkmail = $this->send_email($mail,$sub,$sms);
						if($chkmail === true)
						{
							$this->load->view('seller/seller_confirm_code');
						}
						else
						{
							$this->session->set_flashdata("email_error","Email varification Code Not Send Error!!!.......");
							redirect(base_url()."seller/seller/seller_seller_confirm_code");
						}
			
		}
		else
		{
			$code=$_POST['code'];
			if(trim($code)==trim($this->session->userdata("conform_code")))
			{
				$this->load->view('seller/seller_new_password');
				
			}
			else
			{
				$this->session->set_flashdata("email_error","Email varification Code Not Verifiy!!!.......");
				redirect(base_url()."seller/seller/seller_seller_confirm_code");
			}
		}
	}

public function seller_newpassword()
	{
		$answer=$_POST['security_answer'];
		$security =$_POST['security_q'];
	 	$ans = $this->seller_model->seller_check_question($answer,$security);
		if($ans)
			{
				
		$mail =$this->session->userdata('email');
		//echo $mail;
		//die();
		$pass=random_string("numeric",6);
		$this->session->set_userdata("conform_code",$pass);
			$sms = "Your Confirmation Code IS :-'$pass'";
			$sms .= ". Thanks.   ";
			$sub = "ForGot Your Password ";
			$chkmail = $this->send_email($mail,$sub,$sms);
						if($chkmail === true)
						{
							$this->load->view('seller/seller_confirm_code');
						}
						else
						{
							$this->session->set_flashdata("email_error","Email varification Error!!!.......");
							$email = array("email_id"=>$this->session->userdata('email'));
							$que= $this->seller_model->security_question($email);
							redirect(base_url()."seller/seller/seller_security_question_load",$que);
						}
			
			}
		else
			{
				
			$this->session->set_flashdata("email_error","your answer wrong!!!.......");
			$email = array("email_id"=>$this->session->userdata('email'));
			$que= $this->seller_model->security_question($email);
			redirect(base_url()."seller/seller/seller_security_question_load",$que);
			}
	}
	function send_email($to="",$sub="",$sms="")
	{
		$config['protocol']    = 'smtp';
        $config['smtp_host']    = 'ssl://smtp.gmail.com';
        $config['smtp_port']    = '465';
        $config['smtp_timeout'] = '300';
        $config['smtp_user']    = 'agromall.info@gmail.com';
        $config['smtp_pass']    = 'agromallbha';
        $config['charset']    = 'utf-8';
        $config['newline']    = "\r\n";
        $config['mailtype'] = 'text'; // or html
        $config['validation'] = TRUE; // bool whether to validate email or not      

        $this->email->initialize($config);

        $this->email->from('agromall.info.com', 'Agromall');
        $this->email->to($to); 

        $this->email->subject($sub);
        $this->email->message($sms);  
		//$this->email->attach('file/Acknowledgment.pdf'); // attach file
		//$this->email->attach('/path/to/file1.png'); // attach file
    	//$this->email->attach('/path/to/file2.pdf');

if($this->email->send())
			{
				return true;
			}
			else
			{
				return false;
			}
	
	}
	public function newpassword()
	{
		//print_r($this->session->userdata('email'));die();
		$newpassword1 = array("password"=>$_POST['new_password']);
		
		if($this->seller_model->seller_newpassword($newpassword1))
		{
			$this->session->set_flashdata("email_success","Your Password Change Seccess.......");
			//echo "dfghj";
			//die();
			redirect(base_url().'seller/seller');
		}
		else
		{
			$this->session->set_flashdata("email_error","Your Password Change Error.......");
			redirect(base_url().'seller/seller');
		}
		
		
	}
	public function changepassword()
	{
		//echo "sss";
		//die();
		//print_r($this->session->userdata('email'));die();
		$newpassword = array("password"=>$_POST['new_password']);
		
		if($this->seller_model->seller_newpassword($newpassword))
		{
			$this->session->set_flashdata("seller_seed_add","Your Password Change Seccess.......");
			//echo "dfghj";
			//die();
			redirect(base_url().'seller/seller_seed');
		}
		else
		{
			$this->session->set_flashdata("seller_seed_image_error","Your Password Change Error.......");
			redirect(base_url().'seller/seller_seed');
		}
		
		
	}
public function check_password()
	{
		$password=$_POST['old_pass'];
		$seller_id=$this->session->userdata("seller_login_id");
		$cnt=$this->seller_model->check_password($password,$seller_id);
		if($cnt!=0)
		{
			
			
		}
		else
		{
			echo "Password Wrong";
			
		}
		
	}
	
	public function seller_order()
	{
		//$data=array("status"=>0,"seller_id"=>$this->session->userdata("seller_login_id"));
		$seller_data['seller_order']=$this->seller_model->select_order_data();
		//$message=array("reciver_id"=>$this->session->userdata("seller_login_id"),"status"=>0);
		//$seller_data['seller_message']=$this->seller_model->select_seller_message($message);
		//	echo "<pre>";print_r($seller_data);die;
		
		$this->load->view('seller/seller_order',$seller_data);

	}
	public function order_status()
	{//print_r($_POST);die;
		
		$id=$_POST['status'];
		$id2=$_POST['book_id'];
		//echo $id;//"<pre>";print_r($id);
		//die;
		/*
		$data1=explode("%20",$id);
		$arr=$data1[0];
		$arr2=$data1[1];*/
		
		$data=$this->seller_model->order_status($id,$id2);
		//$message=array("reciver_id"=>$this->session->userdata("seller_login_id"),"status"=>0);
		//$seller_data['seller_message']=$this->seller_model->select_seller_message($message);
		//echo "<pre>";print_r($data);die;
		if($data=1)
		{
			redirect('seller/seller/seller_order');
		
		}
		else
		{
			$this->session->set_flashdata("order_status","Something Wrong in Status Please Try Again.......");
			
		redirect('seller/seller/seller_order');
		}
	}
	
	
	
}
