<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	 public function __construct()
       {
              // Call the CI_Model constructor
              parent::__construct();
			$this->load->model("user/home_model");
        }
	public function index()
	{
		$select_data_manu= $this->loaddata();
		//echo "<pre>";
		//print_r($select_data_manu);die();
		$select_data_manu['seed_data']=$this->home_model->select_seed();
		$select_data_manu['fertilizer_data']=$this->home_model->select_fertilizer();
		$select_data_manu['tools_data']=$this->home_model->select_tools();
		$select_data_manu['pesticide_data']=$this->home_model->select_pesticide();
		$this->load->view('user/index',$select_data_manu);
	}
	public function login()
	{
		$select_data_manu= $this->loaddata();
		$this->load->view('user/login',$select_data_manu);
	}
	public function signup()
	{
		$select_data_manu= $this->loaddata();
		$this->load->view('user/signup',$select_data_manu);
	}
	public function credit()
	{
		
		$this->load->view('user/credit_payment');
	}
	public function debit()
	{
		
		$this->load->view('user/debit_payment');
	}
	public function payment()
	{
		
		$this->load->view('user/payment');
	}
	public function net_banking()
	{
		
		$this->load->view('user/net_banking');
	}
	
	public function loaddata()
	{
		$select_data_manu['seed_type_data']=$this->home_model->select_seedtype_data();
		$select_data_manu['seed_subtype_data']=$this->home_model->select_seedsubtype_data();
		$select_data_manu['seed_submenu_data']=$this->home_model->select_seedsubmanu_data();
		$select_data_manu['fertilizer_type_data']=$this->home_model->select_fertilizertype_data();
		$select_data_manu['fertilizer_subtype_data']=$this->home_model->select_fertilizersubtype_data();
		$select_data_manu['fertilizer_submenu_data']=$this->home_model->select_fertilizersubmanu_data();
		$select_data_manu['tools_type_data']=$this->home_model->select_tooltype_data();
		$select_data_manu['tools_subtype_data']=$this->home_model->select_toolsubtype_data();
		$select_data_manu['pesticide_type_data']=$this->home_model->select_pesticidetype_data();
		$select_data_manu['pesticide_subtype_data']=$this->home_model->select_pesticidesubtype_data();
		$select_data_manu['partsid']=$this->home_model->selectparts();
		/*echo "<pre>";
		print_r($select_data_manu['partsid']['seed']);
		die();*/
		$status=array("status"=>0);
		$select_data_manu["country_data"]=$this->home_model->select_country($status);
		return $select_data_manu;
	}
	public function signup_user()
	{
		$name=$_POST["fname"]." ".$_POST["lname"];
		$user_id=random_string('alnum', 8);
		$data=array("user_id"=>$user_id,"email_id"=>$_POST['email'],"mobile_number"=>$_POST['mobile_number'],"password"=>$_POST['password'],"name"=>$name,"gender"=>$_POST['gender'],"address"=>$_POST['address'],"dob"=>$_POST['date'],"city"=>$_POST['city_id']);
		$config['upload_path']= 'image/user';
		$config['allowed_types']= 'gif|jpg|png';
		$this->upload->initialize($config);
		$seller_profile="";	
		if ($this->upload->do_upload('profile'))
								{
								$fname =$_FILES['profile']['name'];
								$user_profile=array("image_id"=>random_string('alnum', 8),"user_id"=>$user_id,"image_name"=>$fname);
								}
								else
								{
								$user_profile=array("image_id"=>random_string('alnum', 8),"user_id"=>$user_id,"image_name"=>"user.png");
								}
		if($this->home_model->add_user($data,$user_profile))
		{
			$this->session->set_flashdata("user_add","User Registration Success..........");
				redirect(base_url()."home/login");
		}else
		{
			$this->session->set_flashdata("user_add_error","User Registration Error...........");
				redirect(base_url()."home/signup");
		}
	}
public function user_login_chk()
	{
	
		$this->form_validation->set_rules('email','','required|valid_email');
		$this->form_validation->set_rules('password','','required');
		if($this->form_validation->run()== TRUE)
		{
			
			//$seller_login=array("email_id"=>$_POST['email'],"password"=>$_POST['login_password']);
			$id=$_POST['email'];
			$pass=$_POST['password'];
			$user_chk=$this->home_model->user_login_data($id,$pass);
			$cnt=count($user_chk);
			//print_r($seller_chk);
			//die();
			if($cnt!=0 && $user_chk[0]['status']==0)
			{
				
				$this->session->set_userdata("user_login_id",$user_chk[0]['user_id']);
				$this->session->set_userdata("user_password",$user_chk[0]['password']);
				$this->session->set_userdata("email_id",$user_chk[0]['email_id']);
				$this->session->set_userdata("user_name",$user_chk[0]['name']);
				///echo $this->session->userdata("seller_name");
				//die();
				$id=array("user_id"=>$this->session->userdata("user_login_id"));	
				//$user_pic=$this->home_model->select_user_image($id);
				/*echo "<pre>";
				print_r($seller_pic);
				die();*/
				//$this->session->set_userdata("user_pic",$user_pic[0]['image_name']);
				if(isset($_SESSION['cart']))
				{
					$this->session->set_flashdata("user_Login","Wow ! Login Success..........");
					redirect(base_url().'user/product/place_order');
				}
				else
				{
					$this->session->set_flashdata("user_Login","Wow ! Login Success..........");
				redirect(base_url().'home');
				}
				
			}
			else
			{
				$this->session->set_flashdata("user_allow","User dose not exist");
			redirect(base_url().'home/login');
			}
		}
		else
		{
			$this->session->set_flashdata("user_login","User dose not exist");
			$this->load->view('user/login');		
		}
		
	}
	public function logout()
	{
		if($this->session->userdata("user_login_id")!="")
		{
		$this->session->unset_userdata('user_login_id');
		//session_destroy()
		$this->session->set_flashdata("user_Logout","Wow ! Logout Success..........");
		redirect(base_url().'home');
		}
	}
	public function profile()
	{
		$id=array("user_id"=>$this->session->userdata("user_login_id"));
		$user_pic=$this->home_model->select_user_image($id);
				/*echo "<pre>";
				print_r($user_pic);
				die();
*/					$status=array("status"=>0);
		$data1=$this->db->get_where("city_master",$status);
		$user_data["city_data"]=$data1->result_array();
				$this->session->set_userdata("user_pic",$user_pic[0]['image_name']);
		$user_data["user_data"]=$this->home_model->user_data($id);
		$this->load->view("user/profile",$user_data);
	}
	public function user_updateprofile()
	{
		$id=array("user_id"=>$this->session->userdata("user_login_id"));
		$user_pic=$this->home_model->select_user_image($id);
				/*echo "<pre>";
				print_r($seller_pic);
				die();*/
					$status=array("status"=>0);
		$data1=$this->db->get_where("city_master",$status);
		$user_data["city_data"]=$data1->result_array();
				$this->session->set_userdata("user_pic",$user_pic[0]['image_name']);
		$user_data["user_data"]=$this->home_model->user_data($id);
		$this->load->view("user/profile_update",$user_data);
	}
public function contact()
	{
		$this->load->view("user/contact");
	}
	
	public function parts()
	{	
		if(isset($_GET['part']) && $_GET['part'] !="" )
		{
			
			$id=$_GET['part'];
			if(!$data['partsd']=$this->home_model->selectpid($id))
			{
				$data['partsnot']="This Parts Not Available...!";
				
			}
		
		}
		else
		{
			$data['partsd']=$this->home_model->selectparts();
		}
		
		
	
		
		$data['partsid']=$this->home_model->selectparts();
		echo "<pre>";
		print_r($data['partsid']);
		die();
		$data['typed']=$this->home_model->selectparts();
		$this->load->view('user/index',$data);
	}
	public function security_email()
	{		
			$this->load->view('user/security_email');
	}
	
	public function security_question()
	{		$email = array("email_id"=>$_POST['email_id'],"status"=>"0");
			//print_r($email);
			//die();
			
				
		$que = $this->home_model->security_question($email);
			
			if($que)
			{	
				
				//print_r($que[0]["security_question"]);
				//die();
				$this->session->set_userdata('email',$_POST['email_id']);
				$this->session->set_userdata('security_question',$que[0]["security_question"]);
				redirect(base_url()."home/newpassword");
			}
			else
			{
				
				$this->session->set_flashdata("email_error","Email Not Verify Please Enter Valid Email Id.......");
				redirect(base_url()."home/security_email");
			}
	}
	public function newpassword()
	{
		//echo $mail;
		//die();
		$mail =$this->session->userdata('email');
		$pass=random_string("numeric",6);
		$this->session->set_userdata("conform_code",$pass);
			$sms = "Your Confirmation Code IS :-'$pass'";
			$sms .= ". Thanks.   ";
			$sub = "ForGot Your Password ";
			$chkmail = $this->send_email($mail,$sub,$sms);
						if($chkmail === true)
						{
							$this->load->view('user/confirm_code');
						}
						else
						{
							$this->session->set_flashdata("email_error","Email varification Error!!!.......");
							//$email = array("email_id"=>$this->session->userdata('email'));
							//$que= $this->seller_model->security_question($email);
							redirect(base_url()."home/security_email");
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
	
	public function user_confirm_code()
	{		
	$this->load->view('user/confirm_code');
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
							$this->load->view('user/confirm_code');
						}
						else
						{
							$this->session->set_flashdata("email_error","Email varification Code Not Send Error!!!.......");
							redirect(base_url()."home/user_confirm_code");
						}
			
		}
		else
		{
			$code=$_POST['code'];
			//echo($_POST['code']);
			//echo $this->session->userdata("conform_code");
			
			//die();
			if(trim($code)==trim($this->session->userdata("conform_code")))
			{
				$this->load->view('user/new_password');
				
			}
			else
			{
				$this->session->set_flashdata("email_error","Email varification Code Not Verifiy!!!.......");
				redirect(base_url()."home/user_confirm_code");
			}
		}
	}
public function set_newpassword()
	{
		//print_r($this->session->userdata('email'));die();
		$newpassword1 = array("password"=>$_POST['new_password']);
		//print_r($newpassword1);
		//die();
		
		if($this->home_model->user_newpassword($newpassword1))
		{
			$this->session->set_flashdata("email_success","Your Password Change Seccess.......");
			//echo "dfghj";
			//die();
			redirect(base_url().'home/login');
		}
		else
		{
			$this->session->set_flashdata("email_error","Your Password Change Error.......");
			redirect(base_url().'home/login');
		}
		
		
	}
	
	public function change_password()
	{
		$this->load->view('user/change_password');
	}
	public function check_password()
	{
		$password=$_POST['old_pass'];
		$user_id=$this->session->userdata("user_login_id");
		$cnt=$this->home_model->check_password($password,$user_id);
		if($cnt!=0)
		{
			
			
		}
		else
		{
			echo "Password Wrong";
			
		}
		
	}
	
public function changepassword()
	{
		//echo "sss";
		//die();
		//print_r($this->session->userdata('email'));die();
		$newpassword = array("password"=>$_POST['new_password']);
		
		if($this->home_model->user_newpassword($newpassword))
		{
			$this->session->set_flashdata("user_Login","Your Password Change Seccess.......");
			//echo "dfghj";
			//die();
			redirect(base_url().'home');
		}
		else
		{
			$this->session->set_flashdata("email_error","Your Password Change Error.......");
			redirect(base_url().'home/change_password');
		}
		
		
	}
	public function user_profile_update_image()
	{
		//echo "xfdd";
		//die();
		$id=array("user_id"=>$_POST["user_id"]);
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
								$select_data["image_update"]=$this->home_model->update_image($id,$name);
								if($_POST["old_images_id"]!="user.png")
								{
									unlink("image/user/".$_POST["old_images_id"]);
								}
								else
								{
								
								}
								}
		}
		redirect(base_url().'home/profile');
		
	}	
	
	public function user_edit_profile()
	{
		$id=array("user_id"=>$this->session->userdata("user_login_id"));
		$data=array("city"=>$_POST["city"],"gender"=>$_POST["gender"],"dob"=>$_POST["dob"],"address"=>$_POST["address"]);
		if($this->home_model->user_edit_profile($id,$data))
					{
						$this->session->set_flashdata("email_success","Profile Updated.......");
						redirect(base_url().'home/profile');
					}
		
		else
		{
			
			$this->session->set_flashdata("email_error","Error On Edit Profile.......");
						redirect(base_url().'home/user_updateprofile');
		}
	}
	
}
