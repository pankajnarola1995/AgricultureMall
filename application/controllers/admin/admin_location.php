<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_location extends CI_Controller {
	
	 public function __construct()
       {	
	   		parent::__construct();
			$this->load->model("admin/admin_location_model");
        }
		//country type........................
	public function index()
	{
		$status=array("status"=>0);
		$country["country_data"]=$this->admin_location_model->select_country($status);
		$this->load->view('admin/admin_country_add',$country);
	}
	public function insert_country()
	{
		$country_data=array("country_id"=>random_string('alnum', 8),"country_name"=>$_POST['country_name']);
		if($this->admin_location_model->insert_country_data($country_data))
		{
			$this->session->set_flashdata("admin_location_add","Country Insert Success..........");
					redirect(base_url()."admin/admin_location");
		}
		else
		{
		$this->session->set_flashdata("admin_location_add_error","Something Wrong In Insert Country Please Try Again..........");
					redirect(base_url()."admin/admin_location");
		}
	}
	public function admin_country_trash()
	{
		$status=array("status"=>1);
		$country["select_country"]=$this->admin_location_model->select_country_trash($status);
		
		$this->load->view('admin/admin_country_trash',$country);
	}
	public function select_delete_country($type_id)
	{
		//$country_id=array("country_id"=>$type_id);
		//$status=array("status"=>1);
		if($this->admin_location_model->country_delete($type_id))
		{
			$this->session->set_flashdata("admin_location_add","Country Delete Success..........");
			redirect(base_url()."admin/admin_location");
		}
		else
		{
			$this->session->set_flashdata("admin_location_add_error","Something Wrong On Delete Country ..........");
			redirect(base_url()."admin/admin_location");
		}
	}
	public function select_update_country($type_id)
	{
		$country_id=array("country_id"=>$type_id);
		$select_country_update['update_country']=$this->admin_location_model->country_update_select($country_id);
		$this->load->view('admin/admin_country_update',$select_country_update);
			
	}
	public function update_country()
	{
		$id=array("country_id"=>$_POST['country_id']);
		$name=array("country_name"=>$_POST['country_name']);
		if($this->admin_location_model->country_update($name,$id))
		{
			$this->session->set_flashdata("admin_location_add","Country Update Success..........");
			redirect(base_url()."admin/admin_location");
		}
		else
		{
			$this->session->set_flashdata("admin_location_add_error","Something Wrong On Country Update..........");
			redirect(base_url()."admin/admin_location");
			
		}
		
	}
	public function admin_country_trash_backup($country_id)
	{
		$id=array("country_id"=>$country_id);
		$status=array("status"=>0);
		if($this->admin_location_model->country_trash_backup($id,$status))
		{
			$this->session->set_flashdata("admin_location_add","Country Back Up Success..........");
			redirect(base_url()."admin/admin_location/admin_country_trash");
		}
		else
		{
			$this->session->set_flashdata("admin_location_add_error","Something Wrong On Country Backup..........");
			redirect(base_url()."admin/admin_location/admin_country_trash");
			
		}
		
	}
	public function admin_country_trash_delete($country_id)
	{
		$id=array("country_id"=>$country_id);
		if($this->admin_location_model->country_trash_delete($id))
		{
			$this->session->set_flashdata("admin_location_add","Country Delete Success..........");
			redirect(base_url()."admin/admin_location/admin_country_trash");
		}
		else
		{
			$this->session->set_flashdata("admin_location_add_error","Something Wrong On Country Delete..........");
			redirect(base_url()."admin/admin_location/admin_country_trash");
			
		}
		
	}
	//state type....................
	public function admin_state_add()
	{
		$status=array("status"=>0);
		$country["country_data"]=$this->admin_location_model->select_country($status);
		$country["state_data"]=$this->admin_location_model->select_state($status);
		$country["state_data1"]="";
		$this->load->view('admin/admin_state_add',$country);
	}
	public function select_country_data($id)
	{
		$data=array("country_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_data["country_data"]=$this->admin_location_model->select_country($status);
		$select_data['state_data']=$this->admin_location_model->select_state_data($data);
		$select_data["state_data1"]=array("country_id"=>$id);
		if($select_data)
		{
				$this->load->view('admin/admin_state_add',$select_data);
		}
	}

	public function insert_state()
	{
		$seed_data=array("state_id"=>random_string('alnum', 8),"country_id"=>$_POST['country_id'],"state_name"=>$_POST['state_name']);
		if($this->admin_location_model->insert_state_data($seed_data))
		{
			$this->session->set_flashdata("admin_location_add","State Insert Success..........");
					redirect(base_url()."admin/admin_location/admin_state_add");
		}
		else
		{
		$this->session->set_flashdata("admin_location_add_error","Something Wrong In Insert Seed Sub Type Please Try Again..........");
					redirect(base_url()."admin/admin_location/admin_state_add");
		}
	}
	public function admin_state_trash()
	{
		$status_id=array("status"=>1);
		$country["state_data"]=$this->admin_location_model->select_state($status_id);
		$this->load->view('admin/admin_state_trash',$country);
		
	}
	public function select_delete_state($state_id)
	{
		//$state_id=array("state_id"=>$subtype_id);
		//$status=array("status"=>1);
		if($this->admin_location_model->state_delete($state_id))
		{
			$this->session->set_flashdata("admin_location_add","State Delete Success..........");
			redirect(base_url()."admin/admin_location/admin_state_add");
		}
		else
		{
			$this->session->set_flashdata("admin_location_add_error","Something Wrong On Delete State..........");
			redirect(base_url()."admin/admin_location/admin_state_add");
		}
	}
	public function admin_state_trash_delete($state_id)
	{
		$id=array("state_id"=>$state_id);
		if($this->admin_location_model->state_trash_delete($id))
		{
			$this->session->set_flashdata("admin_location_add","State Delete Success..........");
			redirect(base_url()."admin/admin_location/admin_state_trash");
		}
		else
		{
			$this->session->set_flashdata("admin_location_add_error","Something Wrong On State Delete..........");
			redirect(base_url()."admin/admin_location/admin_state_trash");
			
		}
		
	}
	public function admin_state_trash_backup($state_id)
	{
		//$id=array("state_id"=>$state_id);
		//$status=array("status"=>0);
		if($this->admin_location_model->state_trash_backup($state_id))
		{
			$this->session->set_flashdata("admin_location_add","State Back Up Success..........");
			redirect(base_url()."admin/admin_location/admin_state_trash");
		}
		else
		{
			$this->session->set_flashdata("admin_location_add_error","Something Wrong On State Backup..........");
			redirect(base_url()."admin/admin_location/admin_state_trash");
			
		}
		
	}
	public function select_update_state($state_id)
	{
		$state_id=array("state_id"=>$state_id);
		$status=array("status"=>0);
		$select_state_update["country_data"]=$this->admin_location_model->select_country($status);
		$select_state_update['update_state_select']=$this->admin_location_model->state_update_select($state_id);
		
		$this->load->view('admin/admin_state_update',$select_state_update);
			
	}
	public function update_state()
	{
		if(isset($_POST["Back"]))
		{
			redirect(base_url()."admin/admin_seed");
		}
		else
		{
		$stateid=array("state_id"=>$_POST['state_id']);
		$data=array("state_name"=>$_POST['state_name'],"country_id"=>$_POST['country_id']);
	
		if($this->admin_location_model->state_update($data,$stateid))
		{
			$this->session->set_flashdata("admin_location_add","State Update Success..........");
			redirect(base_url()."admin/admin_location/admin_state_add");
		}
		else
		{
			$this->session->set_flashdata("admin_location_add_error","Something Wrong On State Update..........");
			redirect(base_url()."admin/admin_location/admin_state_add");
			
		}
		}
	}
	
		
	//city type....................
	public function admin_city_add()
	{
		$status=array("status"=>0);
		$location_type["country_data"]=$this->admin_location_model->select_country($status);
		$location_type["state_data"]=$this->admin_location_model->select_state($status);
		$location_type["city_data"]=$this->admin_location_model->select_city($status);
		$location_type["select"]="";
		$location_type['select1']="";
		$this->load->view('admin/admin_city_add',$location_type);
	}
	
	public function select_city_country()
	{
		$data=array("country_id"=>$_POST['country_id']);
		if($this->admin_location_model->select_state_type($data))
		{
				$select_data=$this->admin_location_model->select_state_type($data);
				$cnt=count($select_data);
				echo "<select tabindex='1' id='state_id' name='state_id' class='dropdown-menu' role='menu'>";
				echo "<option value='Select here..'>Select State..</option>";
			for($i=0;$i<$cnt;$i++)
				{
			?><option value="<?php echo $select_data[$i]['state_id']?> "><?php echo $select_data[$i]['state_name']?></option>
			<?php
			}
													
			echo "</select>";	
		}
		else
		{
			echo "<select tabindex='1' id='state_id' name='state_id' class='dropdown-menu' role='menu'>";
				echo "<option value='Select here..'>Select State..</option>";
				echo "</select>";	
		}
	}
	
	
	public function select_state_data_city($id)
	{
		$data=array("country_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_data["country_data"]=$this->admin_location_model->select_country($status);
		$select_data['state_data']=$this->admin_location_model->select_state_type($data);
		$select_data['city_data']=$this->admin_location_model->select_city_data_type($id);
		$select_data['select']=$this->admin_location_model->select_location_type_data($id);
		$select_data['select1']="";
		//echo "<pre>";
		//print_r($select_data['select']);
		//die();
		if($select_data)
		{
			$this->load->view('admin/admin_city_add',$select_data);
		}
	}
	
	public function select_state_data_city_data($id)
	{
		$data=array("state_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_data["country_data"]=$this->admin_location_model->select_country($status);
		$select_data['state_data']=$this->admin_location_model->select_state_type($status);
		$select_data['city_data']=$this->admin_location_model->select_city_data_type1($id);
		$select_data['select']="";
		$select_data['select1']=$this->admin_location_model->select_location_type_data12($id);;
		//echo "<pre>";
		//print_r($select_data['select']);
		//die();
		if($select_data)
		{
			$this->load->view('admin/admin_city_add',$select_data);
		}
	}
	public function insert_city()
	{
		$seed_data=array("city_id"=>random_string('alnum',8),"state_id"=>$_POST['state_id'],"city_name"=>$_POST['city_name']);
		//print_r($seed_data);
		//die();
		if($this->admin_location_model->insert_city_data($seed_data))
		{
			$this->session->set_flashdata("admin_location_add","City Insert Success..........");
					redirect(base_url()."admin/admin_location/admin_city_add");
		}
		else
		{
		$this->session->set_flashdata("admin_location_add_error","Something Wrong In Insert City Please Try Again..........");
		
		
					redirect(base_url()."admin/admin_location/admin_city_add");
		}
	}
	public function select_city_data($id)
	{
	     $id_data=explode("%20",$id);
		$data1=array("country_id"=>$id_data[1],"status"=>0);
		$status=array("status"=>0);
		$select_data["country_data"]=$this->admin_location_model->select_country($status);
		$select_data["state_data"]=$this->admin_location_model->select_state_type($data1);
		$select_data['city_data']=$this->admin_location_model->select_city_data_type1($id_data[0]);
		$select_data['select']=$this->admin_location_model->select_location_type_data1($id_data[0]);
		$select_data['select1']=$this->admin_location_model->select_location_type_data12($id_data[0]);
		/*echo "<pre>";
		print_r($select_data);
		die();*/
				$this->load->view('admin/admin_city_add',$select_data);
		
	}
	public function admin_city_trash()
	{
		$status_id=array("status"=>1);
		$city["city_data"]=$this->admin_location_model->select_city_trash($status_id);
		//echo "<pre>";
		//print_r($seed_type["seed_data_submenu"]);
		//die();
		$this->load->view('admin/admin_city_trash',$city);
		
	}
	public function select_delete_city($city_id)
	{
		$city_id=array("city_id"=>$city_id);
		$status=array("status"=>1);
		//echo "<pre>";
		//print_r($city_id);
		//die();
		if($this->admin_location_model->city_delete($city_id,$status))
		{
			$this->session->set_flashdata("admin_location_add","City Delete Success..........");
			redirect(base_url()."admin/admin_location/admin_city_add");
		}
		else
		{
			$this->session->set_flashdata("admin_location_add_error","Something Wrong On Delete City..........");
			redirect(base_url()."admin/admin_location/admin_city_add");
		}
	}
	
	public function admin_city_trash_backup($city_id)
	{
		$id=array("city_id"=>$city_id);
		$status=array("status"=>0);
		//echo "<pre>";
		//print_r($id);
		//die();
		if($this->admin_location_model->city_trash_backup($id,$status))
		{
			$this->session->set_flashdata("admin_location_add","City Back Up Success..........");
			redirect(base_url()."admin/admin_location/admin_city_trash");
		}
		else
		{
			$this->session->set_flashdata("admin_location_add_error","Something Wrong On City Backup..........");
			redirect(base_url()."admin/admin_location/admin_city_trash");
			
		}
		
	}
	public function admin_city_trash_delete($city_id)
	{
		$id=array("city_id"=>$city_id);
		if($this->admin_location_model->city_trash_delete($id))
		{
			$this->session->set_flashdata("admin_location_add","City Delete Success..........");
			redirect(base_url()."admin/admin_location/admin_city_trash");
		}
		else
		{
			$this->session->set_flashdata("admin_location_add_error","Something Wrong On City Delete..........");
			redirect(base_url()."admin/admin_location/admin_city_trash");
			
		}
		
	}
	public function select_update_city($id)
	{
		$city_id=array("city_id"=>$id);
		$status=array("status"=>0);
		$select_update["country_data"]=$this->admin_location_model->select_country($status);
		$select_update['select']=$this->admin_location_model->select_state_data_city($id);
		//echo "<pre>";
		//print_r($select_update['select']);
		//die();
		$select_update["state_data"]=$this->admin_location_model->select_state_city($select_update['select'][0]['country_id']);	
		$select_update['update_city_select']=$this->admin_location_model->update_city_select($city_id);	
		$this->load->view('admin/admin_city_update',$select_update);
			
	}
	public function update_city()
	{
		$subid=array("city_id"=>$_POST['city_id']);
		$data=array("city_name"=>$_POST['city_name'],"state_id"=>$_POST['state_id']);
	
		if($this->admin_location_model->city_update($data,$subid))
		{
			$this->session->set_flashdata("admin_location_add","City Update Success..........");
			redirect(base_url()."admin/admin_location/admin_city_add");
		}
		else
		{
			$this->session->set_flashdata("admin_location_add_error","Something Wrong On City Update..........");
			redirect(base_url()."admin/admin_location/admin_city_add");
			
		}
		
		
	}
	
	//area type....................
	public function admin_area_add()
	{
		$status=array("status"=>0);
		$location_type["country_data"]=$this->admin_location_model->select_country($status);
		$location_type["state_data"]=$this->admin_location_model->select_state($status);
		$location_type["city_data"]=$this->admin_location_model->select_city($status);
		$location_type["area_data"]=$this->admin_location_model->select_area($status);
		$location_type["select"]="";
		$location_type['select1']="";
		$location_type['select2']="";
		$this->load->view('admin/admin_area_add',$location_type);
	}
	public function select_city_state()
	{
		$data=array("state_id"=>$_POST['state_id']);
		if($this->admin_location_model->select_city_type($data))
		{
				$select_data=$this->admin_location_model->select_city_type($data);
				$cnt=count($select_data);
				echo "<select tabindex='1' id='city_id' name='city_id' class='dropdown-menu' role='menu'>";
				echo "<option value='Select here..'>Select City..</option>";
			for($i=0;$i<$cnt;$i++)
				{
			?><option value="<?php echo $select_data[$i]['city_id']?> "><?php echo $select_data[$i]['city_name']?></option>
			<?php
			}
													
			echo "</select>";	
		}
		else
		{
			echo "<select tabindex='1' id='city_id' name='city_id' class='dropdown-menu' role='menu'>";
				echo "<option value='Select here..'>Select State..</option>";
				echo "</select>";	
		}
	}
	
	public function insert_area()
	{
		$seed_data=array("area_id"=>random_string('alnum',8),"city_id"=>$_POST['city_id'],"area_name"=>$_POST['area_name']);
		//print_r($seed_data);
		//die();
		if($this->admin_location_model->insert_area_data($seed_data))
		{
			$this->session->set_flashdata("admin_location_add","Area Insert Success..........");
					redirect(base_url()."admin/admin_location/admin_area_add");
		}
		else
		{
		$this->session->set_flashdata("admin_location_add_error","Something Wrong In Insert Area Please Try Again..........");
		
		
					redirect(base_url()."admin/admin_location/admin_area_add");
		}
	}
public function select_state_data_area($id)
	{
		$data=array("country_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_data["country_data"]=$this->admin_location_model->select_country($status);
		$select_data["state_data"]=$this->admin_location_model->select_state_type($data);
		$select_data['city_data']=$this->admin_location_model->select_city_data_type($id);
		$select_data["area_data"]=$this->admin_location_model->select_state_data_city($id);
		if($select_data)
		{
				$this->load->view('admin/admin_area_add',$select_data);
		}
	}
	public function select_state_data_city_area($id)
	{
		$data=array("country_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_data["country_data"]=$this->admin_location_model->select_country($status);
		$select_data['state_data']=$this->admin_location_model->select_state_type($data);
		$select_data['city_data']=$this->admin_location_model->select_city_data_type($id);
		$select_data['area_data']=$this->admin_location_model->select_area_type($id);
		$select_data['select']=$this->admin_location_model->select_location_type_data($id);
		$select_data['select1']="";
		$select_data['select2']="";
		//echo "<pre>";
		//print_r($select_data['select']);
		//die();
		if($select_data)
		{
			$this->load->view('admin/admin_area_add',$select_data);
		}
	}
	
	public function select_city_data_area($id)
	{
	     $id_data=explode("%20",$id);
		$data1=array("country_id"=>$id_data[1],"status"=>0);
		$status=array("status"=>0);
		$select_data["country_data"]=$this->admin_location_model->select_country($status);
		$select_data["state_data"]=$this->admin_location_model->select_state_type($data1);
		$select_data['city_data']=$this->admin_location_model->select_city_data_type1($id_data[0]);
		$select_data['area_data']=$this->admin_location_model->select_area_type_data($id_data[0]);
		$select_data['select']=$this->admin_location_model->select_location_type_data1($id_data[0]);
		$select_data['select1']=$this->admin_location_model->select_location_type_data12($id_data[0]);
		$select_data['select2']="";
		/*echo "<pre>";
		print_r($select_data);
		die();*/
				$this->load->view('admin/admin_area_add',$select_data);
		
	}
	
	public function select_city_data_area_type_all($id)
	{
	     $id_data=explode("%20",$id);
		$data1=array("country_id"=>$id_data[1],"status"=>0);
		$status=array("status"=>0);
		$select_data["country_data"]=$this->admin_location_model->select_country($status);
		$select_data["state_data"]=$this->admin_location_model->select_state_type($data1);
		$select_data['city_data']=$this->admin_location_model->select_city_data_type1($id_data[2]);
		$select_data['area_data']=$this->admin_location_model->select_area_data_type_data($id_data[0]);
		$select_data['select']=$this->admin_location_model->select_location_type_data1($id_data[2]);
		$select_data['select1']=$this->admin_location_model->select_location_type_data12($id_data[2]);
		$select_data['select2']=$this->admin_location_model->select_area_data_type_data($id_data[0]);
		//echo "<pre>";
		//print_r($select_data['area_data']);
		//die();
				$this->load->view('admin/admin_area_add',$select_data);
		
	}
	public function select_city_data_area_data($id)
	{
	     $id_data=explode("%20",$id);
		$data1=array("country_id"=>$id_data[1],"status"=>0);
		$status=array("status"=>0);
		$select_data["country_data"]=$this->admin_location_model->select_country($status);
		$select_data["state_data"]=$this->admin_location_model->select_state_type($data1);
		$select_data['city_data']=$this->admin_location_model->select_city_data_type1111111($id_data[1]);
		$select_data['area_data']=$this->admin_location_model->select_area_data_type_data($id_data[0]);
		$select_data['select']=$this->admin_location_model->select_location_type_data1111($id_data[1]);
		$select_data['select1']="";
		$select_data['select2']=$this->admin_location_model->select_location_type_data123($id_data[0]);
		//echo "<pre>";
		//print_r($select_data['area_data']);
		//die();
				$this->load->view('admin/admin_area_add',$select_data);
		
	}
	public function select_state_country_area($id)
	{
		$data1=array("state_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_data["country_data"]=$this->admin_location_model->select_country($status);
		$select_data["state_data"]=$this->admin_location_model->select_state_type($status);
		$select_data['city_data']=$this->admin_location_model->select_city_data_type1($id);
		$select_data['area_data']=$this->admin_location_model->select_area_type_data($id);
		$select_data['select']="";
		$select_data['select1']=$this->admin_location_model->select_location_type_data12($id);
		$select_data['select2']="";
		//echo "<pre>";
		//print_r($select_data['area_data']);
		//die();
				$this->load->view('admin/admin_area_add',$select_data);
		
	}
	public function select_state_country_area1($id)
	{
		$id_data=explode("%20",$id);
		$data1=array("state_id"=>$id_data[1],"status"=>0);
		$status=array("status"=>0);
		$select_data["country_data"]=$this->admin_location_model->select_country($status);
		$select_data["state_data"]=$this->admin_location_model->select_state_type($status);
		$select_data['city_data']=$this->admin_location_model->select_city_data_type1($id_data[1]);
		$select_data['area_data']=$this->admin_location_model->select_area_data_type_data($id_data[1]);
		$select_data['select']="";
		$select_data['select1']=$this->admin_location_model->select_location_type_data12($id_data[1]);
		$select_data['select2']=$this->admin_location_model->select_location_type_data123($id_data[0]);
		//echo "<pre>";
		//print_r($select_data['area_data']);
		//die();
				$this->load->view('admin/admin_area_add',$select_data);
		
	}
	public function select_state_country_area12($id)
	{
		$data1=array("city_id"=>$id,"status"=>0);
		$status=array("status"=>0);
		$select_data["country_data"]=$this->admin_location_model->select_country($status);
		$select_data["state_data"]=$this->admin_location_model->select_state_type($status);
		$select_data['city_data']=$this->admin_location_model->select_city($status);
		$select_data['area_data']=$this->admin_location_model->select_area_data_type_data($id);
		$select_data['select']="";
		$select_data['select1']="";
		$select_data['select2']=$this->admin_location_model->select_location_type_data123($id);
		//echo "<pre>";
		//print_r($select_data['city_data']);
		//die();
				$this->load->view('admin/admin_area_add',$select_data);
		
	}
	public function select_delete_area($area_id)
	{
		$area_id=array("area_id"=>$area_id);
		$status=array("status"=>1);
		//echo "<pre>";
		//print_r($city_id);
		//die();
		if($this->admin_location_model->area_delete($area_id,$status))
		{
			$this->session->set_flashdata("admin_location_add","Area Delete Success..........");
			redirect(base_url()."admin/admin_location/admin_area_add");
		}
		else
		{
			$this->session->set_flashdata("admin_location_add_error","Something Wrong On Delete Area..........");
			redirect(base_url()."admin/admin_location/admin_area_add");
		}
	}
	public function admin_area_trash()
	{
		$status_id=array("status"=>1);
		$area["area_data"]=$this->admin_location_model->select_area_trash($status_id);
		//echo "<pre>";
		//print_r($seed_type["seed_data_submenu"]);
		//die();
		$this->load->view('admin/admin_area_trash',$area);
		
	}
	public function admin_area_trash_delete($area_id)
	{
		$id=array("area_id"=>$area_id);
		if($this->admin_location_model->area_trash_delete($id))
		{
			$this->session->set_flashdata("admin_location_add","Area Delete Success..........");
			redirect(base_url()."admin/admin_location/admin_area_trash");
		}
		else
		{
			$this->session->set_flashdata("admin_location_add_error","Something Wrong On Area Delete..........");
			redirect(base_url()."admin/admin_location/admin_area_trash");
			
		}
		
	}
	public function admin_area_trash_backup($id)
	{
		$id=array("area_id"=>$id);
		$status=array("status"=>0);
		//echo "<pre>";
		//print_r($id);
		//die();
		if($this->admin_location_model->area_trash_backup($id,$status))
		{
			$this->session->set_flashdata("admin_location_add","Area Back Up Success..........");
			redirect(base_url()."admin/admin_location/admin_area_trash");
		}
		else
		{
			$this->session->set_flashdata("admin_location_add_error","Something Wrong On Area Backup..........");
			redirect(base_url()."admin/admin_location/admin_area_trash");
			
		}
		
	}
	public function select_update_area($id)
	{
		$area_id=array("area_id"=>$id);
		$status=array("status"=>0);
		$select_update["country_data"]=$this->admin_location_model->select_country($status);
		$select_update['select']=$this->admin_location_model->select_state_data_city_area($id);
		//echo "<pre>";
		//print_r($select_update['select']);
		//die();
		$select_update["state_data"]=$this->admin_location_model->select_state_city($select_update['select'][0]['country_id']);	
		
		$select_update['city_select']=$this->admin_location_model->update_city_select_area($select_update["select"][0]["state_id"]);	
		$this->load->view('admin/admin_area_update',$select_update);
			
	}
	public function update_area()
	{
		//die();
		$subid=array("area_id"=>$_POST['area_id']);
		$data=array("area_name"=>$_POST['area_name'],"city_id"=>$_POST['city_id']);
	
		if($this->admin_location_model->area_update($data,$subid))
		{
			$this->session->set_flashdata("admin_location_add","Area Update Success..........");
			redirect(base_url()."admin/admin_location/admin_area_add");
		}
		else
		{
			$this->session->set_flashdata("admin_location_add_error","Something Wrong On Area Update..........");
			redirect(base_url()."admin/admin_location/admin_area_add");
			
		}

		
	}
}
