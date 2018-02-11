<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_location_model extends CI_Model 
{
		//select country.................
		
	public function select_country($status)
		{
		$result=$this->db->get_where('country_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function select_country_trash($status)
		{
		$result=$this->db->get_where("country_master",$status);
		if($result)
			return $result->result_array();
		else
			return FALSE;
		}	
		
	public function insert_country_data($country_data)
		{
			$country_id=array("country_name"=>$_POST['country_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('country_master',$country_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_location");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Country Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_location");
					
				}
				else
				{
					if($this->db->insert("country_master",$country_data))
						return TRUE;
					else
						return FALSE;
				}
			}
			
		
		}
	public function country_delete($country)
		{
			$country_id=array("country_id"=>$country);
			$status=array("status"=>1);
			$result=$this->db->update('country_master',$status,$country_id);
			$country_id1=array("country_id"=>$country,"status"=>0);
			$this->db->where($country_id1);
			$select=$this->db->get_where('state_master');
			//echo "<pre>";//print_r($select->result_array());//die();
			$i=1;
			$cnt=count($select->result_array());
			if($cnt!=0)
			{
				$result1=$this->db->update('state_master',$status,$country_id);
				//echo "<pre>";	print_r($select->result_array());	die();//$cnt=count($select->result_array());//echo $cnt;
				//die();
				$i=1;
				foreach($select->result_array() as $state)
				{
					$state_id=array("state_id"=>$state['state_id'],"status"=>0);
					$state_id1=array("state_id"=>$state['state_id']);
					$this->db->where($state_id);
					$select1=$this->db->get_where('city_master');
					
						$cnt1=count($select1->result_array());
						
						if($cnt1!=0)
						{
							$result2=$this->db->update("city_master",$status,$state_id1);
							foreach($select1->result_array() as $city)
								{
									$city_id=array("city_id"=>$city['city_id'],"status"=>0);
									$city_id1=array("city_id"=>$city['city_id']);
									$this->db->where($city_id);
									$select2=$this->db->get_where('area_master');
										$cnt1=count($select2->result_array());
										if($cnt1!=0)
										{
											$result3=$this->db->update("area_master",$status,$city_id1);
											if($result and $result1 and $result2  and $result3)
													$i=1;
												else
													$i=0;
										}
								}
						}
				}
				if($i==1)
						return TRUE;
					else
						return FALSE;
			}
			else
			{
					if($i==1)
						return TRUE;
					else
						return FALSE;
			}
		}
	public function country_update_select($id)
		{
		$result=$this->db->get_where('country_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function country_update($name,$id)
		{
			$country_id=array("country_name"=>$_POST['country_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('country_master',$country_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_location");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Country Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_location");
					
				}
				else
				{
						$result=$this->db->update('country_master',$name,$id);
						if($result)
						return TRUE;
						else
						return FALSE;
				}
			}
			
	
		}
	public function country_trash_backup($id,$status)
		{
			$result=$this->db->update('country_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function country_trash_delete($id)
		{
			$result=$this->db->delete('country_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	
	//seed state data..........
	public function select_state($status)
		{
		$result=$this->db->get_where('state_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function insert_state_data($state_data)
		{
			
			$state_id=array("state_name"=>$_POST['state_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('state_master',$state_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_location/admin_state_add");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","State Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_location/admin_state_add");
					
				}
				else
				{
					if($this->db->insert("state_master",$state_data))
						return TRUE;
					else
						return FALSE;
				}
			}
		
		
		}		
	public function select_state_data($data)
		{
			$result=$this->db->get_where("state_master",$data);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function state_delete($state)
		{
			
			$state_id=array("state_id"=>$state);
			$status=array("status"=>1);
			$result=$this->db->update('state_master',$status,$state_id);
			$state_id1=array("state_id"=>$state,"status"=>0);
			$this->db->where($state_id1);
			$select=$this->db->get_where('city_master');
			//echo "<pre>";//print_r($select->result_array());//die();
			$i=1;
			$cnt=count($select->result_array());
			if($cnt!=0)
			{
				$result1=$this->db->update('city_master',$status,$state_id);
				//echo "<pre>";	//print_r($select);	//die();//$cnt=count($select->result_array());//echo $cnt;
				//die();
				$i=1;
				foreach($select->result_array() as $result)
				{
					$city_id=array("city_id"=>$result['city_id'],"status"=>0);
					$this->db->where($city_id);
					$select1=$this->db->get_where('area_master');
						$cnt1=count($select1->result_array());
						if($cnt1!=0)
						{
							$result2=$this->db->update("area_master",$status,$city_id);
							if($result and $result1 and $result2)
									$i=1;
								else
									$i=0;
						}
				}
				if($i==1)
						return TRUE;
					else
						return FALSE;
			}
			else
			{
					if($i==1)
						return TRUE;
					else
						return FALSE;
			}
		}
	public function state_trash_delete($id)
		{
			$result=$this->db->delete('state_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}	
	public function state_trash_backup($state)
		{
			$state_id=array("state_id"=>$state);
			$status=array("status"=>0);
			$result=$this->db->update('state_master',$status,$state_id);
			if($result)
						return TRUE;
					else
						return FALSE;
		}
	public function state_update_select($id)
		{
		$result=$this->db->get_where('state_master',$id);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function state_update($data,$id)
		{
			$state_id=array("state_name"=>$_POST['state_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('state_master',$state_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_location/admin_state_add");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","State Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_location/admin_state_add");
					
				}
				else
				{
					$result=$this->db->update('state_master',$data,$id);
					if($result)
					return TRUE;
					else
					return FALSE;
				}
			}
		
		}
		
	
	//seed city data..........
	public function select_city($status)
		{
		$result=$this->db->get_where('city_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
		
	public function select_state_type($data)
		{
			$result=$this->db->get_where("state_master",$data);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function select_location_type_data($id)
		{
		$result=$this->db->query("select * from country_master where country_id='$id'");
		if($result)
		return $result->result_array();
		else
		return;
		}
	public function select_location_type_data1($id)
		{
		$result=$this->db->query("select country.*,state.* from country_master country,state_master state where country.country_id=state.country_id  and state.state_id='$id' and state.status='0'");
		if($result)
		return $result->result_array();
		else
		return;
		}
	public function select_location_type_data1111($id)
		{
		$result=$this->db->query("select country.*,state.* from country_master country,state_master state where country.country_id=state.country_id  and country.country_id='$id' and country.status='0'");
		if($result)
		return $result->result_array();
		else
		return;
		}
		public function select_location_type_data12($id)
		{
		$result=$this->db->query("select country.*,state.* from country_master country,state_master state where country.country_id=state.country_id  and state.state_id='$id' and state.status='0'");
		if($result)
		return $result->result_array();
		else
		return;
		}
	public function select_seed_submenu_data($data)
		{
			$result=$this->db->get_where("seed_submenu_master",$data);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function insert_city_data($citydata)
		{
			$city_id=array("city_name"=>$_POST['city_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('city_master',$city_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_location/admin_city_add");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","City Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_location/admin_city_add");
					
				}
				else
				{
					if($this->db->insert("city_master",$citydata))
						return TRUE;
					else
						return FALSE;
				}
			}
			
		
		}
		public function select_city_data_type($data)
		{
			$result=$this->db->query("select * from country_master country,state_master state,city_master city where country.country_id=state.country_id and state.state_id=city.state_id and country.country_id='$data' and country.status='0'");
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
		public function select_city_data_type1($data)
		{
			$result=$this->db->query("select city.* from country_master country,state_master state,city_master city where country.country_id=state.country_id and state.state_id=city.state_id and state.state_id='$data' and state.status='0'");
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function select_city_data_type1111111($data)
		{
			$result=$this->db->query("select city.* from country_master country,state_master state,city_master city where country.country_id=state.country_id and state.state_id=city.state_id and country.country_id='$data' and country.status='0'");
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function select_city_trash($status)
		{
		$result=$this->db->get_where('city_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function city_delete($city_id,$status)
		{
			$result=$this->db->update('city_master',$status,$city_id);
			$data=$this->db->get_where("area_master",$city_id);
			if($data->num_rows()!=0)
			{
					$result1=$this->db->update("area_master",$status,$city_id);
					if($result and $result1)
						return TRUE;
					else
						return FALSE;
			}
			else
			{
				if($result)
					return TRUE;
				else
					return FALSE;
				
			}
		}
	public function city_trash_backup($id,$status)
		{
			$result=$this->db->update('city_master',$status,$id);
				if($result)
					return TRUE;
				else
					return FALSE;
				
		}
	public function city_trash_delete($id)
		{
			$result=$this->db->delete('city_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function update_city_select($id)
		{
			$result=$this->db->get_where('city_master',$id);
					if($result)
					return $result->result_array();
					else
					return FALSE;
		
		}	
		public function select_state_data_city($id)
		{
		$result=$this->db->query("select state.*,country.* from country_master country,state_master state,city_master city where country.country_id=state.country_id and state.state_id=city.state_id and city.city_id='$id' and city.status='0'");
		if($result)
		return $result->result_array();
		else
		return;
		}
	public function select_state_city($id)
		{
			
		$id1=array("country_id"=>$id);
		$result=$this->db->get_where('state_master',$id1);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function city_update($data,$id)
		{
			$city_id=array("city_name"=>$_POST['city_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('city_master',$city_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_location/admin_city_add");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","City Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_location/admin_city_add");
					
				}
				else
				{
					$result=$this->db->update('city_master',$data,$id);
					if($result)
					return TRUE;
					else
					return FALSE;
				}
			}
		
		}
	//seed area data..........
	public function select_area($status)
		{
		$result=$this->db->get_where('area_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}	
	public function select_city_type($data)
		{
			$result=$this->db->get_where("city_master",$data);
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function insert_area_data($areadata)
		{
			$area_id=array("area_name"=>$_POST['area_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('area_master',$area_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_location/admin_area_add");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Area Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_location/admin_area_add");
					
				}
				else
				{
					if($this->db->insert("area_master",$areadata))
						return TRUE;
					else
						return FALSE;
				}
			}
			
			
		
		}
	public function select_area_new_country($id)
		{
		$result=$this->db->query("select state.*,country.* from country_master country,state_master state,city_master city where country.country_id=state.country_id and state.state_id=city.state_id and city.city_id='$id' and city.status='0' ");
		if($result)
		return $result->result_array();
		else
		return;
		}
	public function select_area_type($data)
		{
			$result=$this->db->query("select * from country_master country,state_master state,city_master city,area_master area where country.country_id=state.country_id and state.state_id=city.state_id and city.city_id=area.city_id and country.country_id='$data' and country.status='0'");
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function select_area_type_data($data)
		{
			$result=$this->db->query("select * from country_master country,state_master state,city_master city,area_master area where country.country_id=state.country_id and state.state_id=city.state_id and city.city_id=area.city_id and state.state_id='$data' and state.status='0'");
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
		public function select_area_data_type_data($data)
		{
			$result=$this->db->query("select * from country_master country,state_master state,city_master city,area_master area where country.country_id=state.country_id and state.state_id=city.state_id and city.city_id=area.city_id and city.city_id='$data' and city.status='0'");
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function select_location_type_data123($id)
		{
	$result=$this->db->query("select state.*,country.*,city.* from country_master country,state_master state,city_master city,area_master area where country.country_id=state.country_id and state.state_id=city.state_id and city.city_id=area.city_id and city.city_id='$id' and city.status='0'");
		if($result)
		return $result->result_array();
		else
		return;
		}
		public function select_area_type_data_data($data)
		{
			$result=$this->db->query("select * from country_master country,state_master state,city_master city,area_master area where country.country_id=state.country_id and state.state_id=city.state_id and city.city_id=area.city_id and city.city_id='$data' and city.status='0'");
		if($result->num_rows()!=0)
			return $result->result_array();
		else
			return FALSE;
		}
	public function area_delete($area_id,$status)
		{
			$result=$this->db->update('area_master',$status,$area_id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function select_area_trash($status)
		{
		$result=$this->db->get_where('area_master',$status);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
public function area_trash_delete($id)
		{
			$result=$this->db->delete('area_master',$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function area_trash_backup($id,$status)
		{
			$result=$this->db->update('area_master',$status,$id);
			if($result)
				return TRUE;
			else
				return FALSE;
		}
	public function select_state_data_city_area($id)
		{
		$result=$this->db->query("select * from country_master country,state_master state,city_master city,area_master area where country.country_id=state.country_id and state.state_id=city.state_id and city.city_id=area.city_id and area.area_id='$id' and area.status='0'");
		if($result)
		return $result->result_array();
		else
		return;
		}
	public function update_city_select_area($id)
		{
			$data=array("state_id"=>$id);
		$result=$this->db->get_where('city_master',$data);
		if($result)
		return $result->result_array();
		else
		return FALSE;
		}
	public function area_update($data,$id)
		{
			$area_id=array("area_name"=>$_POST['area_name']);
			//$this->db->where($seed_type_id1);
			//print_r($seed_type_id);
			//die();
			$select=$this->db->get_where('area_master',$area_id);
			$select1=$select->result_array();
			//print_r($select1);
			//die();
			if($select1[0]["status"]==1)
			{
				$this->session->set_flashdata("admin_seed_type_add_error_trash","Record Already in Trash Restore It..........");
				redirect(base_url()."admin/admin_location/admin_area_add");
				
			}
			else
			{
				if(count($select1)!=0)
				{
					$this->session->set_flashdata("admin_seed_type_add_error_trash","Area Name Is Exist Enter Diffrent Name.........");
					redirect(base_url()."admin/admin_location/admin_area_add");
					
				}
				else
				{
						$result=$this->db->update('area_master',$data,$id);
						if($result)
						return TRUE;
						else
						return FALSE;
				}
			}
	
		}	
}
