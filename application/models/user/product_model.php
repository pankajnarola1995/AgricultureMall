<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Product_model extends CI_Model {

	 public function __construct()
        {
                // Call the CI_Model constructor
                parent::__construct();
				$this->load->model("product_model");
        }
	public function insert_product($data)
		{
		if($this->db->insert("product_master",$data))
		return true;
		else
		return false;
		}
	public function insert_category($data)
		{
		$this->db->insert("tool_type_master",$data);
		}
	public function select_catagory()
		{
		if($row=$this->db->get("tool_type_master"))
		return $row->result();
		}
	public function select_subcatagory()
		{
		if($row=$this->db->get("subcategory_master"))
		return $row->result();
		}
	public function insert_subcategory($data)
		{
		$this->db->insert("tool_subtype_master",$data);
		
		}
	public function insert_image($data)
		{
		if($this->db->insert("image",$data))
		return TRUE;
		else
		return FALSE;
		}
		
//.............SEED...............

		
	public function select_seed()
		{
		//$ee=$this->db->get("admin_login");
		//echo "<pre>";print_r($ee);die();
		
		if($data=$this->db->query("select * from seed_detail_master as sd INNER JOIN image_master as i on sd.seed_detail_id = i.seed_detail_id where sd.status='0' group by i.seed_detail_id "))
		//$data=$this->db->get("seed_detail_master");
		return $data->result_array();
		else
		return FALSE;
		}
		
	public function view_seed_type_detail($id)
		{
		if($data=$this->db->query("select * from seed_detail_master as sd ,image_master as i where sd.seed_detail_id = i.seed_detail_id  and sd.seed_type_id='$id' and sd.status=0 group by i.seed_detail_id"))
		return $data->result_array();
		else
		return FALSE;
		}
		
		public function view_seed_detail($id)
		{
		if($data=$this->db->query("select * from seed_detail_master as sd ,image_master as i where sd.seed_detail_id = i.seed_detail_id  and sd.seed_detail_id='$id' and sd.status=0 group by i.seed_detail_id"))
		return $data->result_array();
		else
		return FALSE;
		}
	public function view_seed_subtype_detail($id)
		{
		if($data=$this->db->query("select * from seed_detail_master as sd , seed_subtype_master as sbt,image_master as i where sd.seed_detail_id = i.seed_detail_id  and sd.seed_subtype_id = sbt.seed_subtype_id and sbt.seed_subtype_id='$id' and sd.status=0 group by i.seed_detail_id and sd.status=0 "))
		return $data->result_array();
		else
		return FALSE;
		}
	public function view_seed_submenu_detail($id)
		{
		if($data=$this->db->query("select * from seed_detail_master as sd , seed_subtype_master as sbt, seed_submenu_master as sbm,image_master as i where sd.seed_detail_id = i.seed_detail_id  and sd.seed_subtype_id = sbt.seed_subtype_id and sd.seed_submenu_id = sbm.seed_submenu_id and sbm.seed_submenu_id='$id' and sd.status=0 group by i.seed_detail_id"))
		return $data->result_array();
		else
		return FALSE;
		}
		
	public function more_seed_product_view($id)
		{
		if($data=$this->db->query("select * from seed_detail_master as sd  ,image_master as i where sd.seed_detail_id = i.seed_detail_id and  sd.seed_detail_id='$id' and status=0 group by i.seed_detail_id" ))
		return $data->result_array();
		else
		return FALSE;
		}
		public function view_seed_image_detail($id)
		{
		if($data=$this->db->query("select * from image_master where seed_detail_id = '$id' " ))
		return $data->result_array();
		else
		return FALSE;
		}
		
	public function view_cultivation_detail()
		{
			$status=array("status"=>0);
		if($data=$this->db->get_where("seed_cultivation_master",$status))
		return $data->result_array();
		else
		return FALSE;
		}
	public function select_origin_country()
		{
			$status=array("status"=>0);
		if($data=$this->db->get_where("country_master",$status))
		return $data->result_array();
		else
		return FALSE;
		}
		

//..............FERTILIZER..........




	
	public function select_fertilizer()
		{
		//$ee=$this->db->get("admin_login");
		//echo "<pre>";print_r($ee);die();
		
		if($data=$this->db->query("select * from fertilizer_detail_master as sd INNER JOIN image_master as i on sd.fertilizer_detail_id = i.fertilizer_detail_id where sd.status='0' group by i.fertilizer_detail_id"))
		//$data=$this->db->get("fertilizer_detail_master");
		return $data->result_array();
		else
		return FALSE;
		}
		
	public function view_fertilizer_type_detail($id)
		{
		if($data=$this->db->query("select * from fertilizer_detail_master as sd ,image_master as i where sd.fertilizer_detail_id = i.fertilizer_detail_id  and sd.fertilizer_type_id='$id' and sd.status=0 group by i.fertilizer_detail_id"))
		return $data->result_array();
		else
		return FALSE;
		}
		public function view_fertilizer_detail($id)
		{
		if($data=$this->db->query("select * from fertilizer_detail_master as sd ,image_master as i where sd.fertilizer_detail_id = i.fertilizer_detail_id  and sd.fertilizer_detail_id='$id' and sd.status=0 group by i.fertilizer_detail_id"))
		return $data->result_array();
		else
		return FALSE;
		}
	public function view_fertilizer_subtype_detail($id)
		{
		if($data=$this->db->query("select * from fertilizer_detail_master as sd , fertilizer_subtype_master as sbt,image_master as i where sd.fertilizer_detail_id = i.fertilizer_detail_id  and sd.fertilizer_subtype_id = sbt.fertilizer_subtype_id and sbt.fertilizer_subtype_id='$id' and sd.status=0 group by i.fertilizer_detail_id"))
		return $data->result_array();
		else
		return FALSE;
		}
	public function view_fertilizer_submenu_detail($id)
		{
		if($data=$this->db->query("select * from fertilizer_detail_master as sd , fertilizer_subtype_master as sbt, fertilizer_submenu_master as sbm,image_master as i where sd.fertilizer_detail_id = i.fertilizer_detail_id  and sd.fertilizer_subtype_id = sbt.fertilizer_subtype_id and sd.fertilizer_submenu_id = sbm.fertilizer_submenu_id and sbm.fertilizer_submenu_id='$id' and sd.status=0 group by i.fertilizer_detail_id"))
		return $data->result_array();
		else
		return FALSE;
		}
		
	public function more_fertilizer_product_view($id)
		{
		if($data=$this->db->query("select * from fertilizer_detail_master as sd  ,image_master as i where sd.fertilizer_detail_id = i.fertilizer_detail_id and  sd.fertilizer_detail_id='$id' and status=0 group by i.fertilizer_detail_id" ))
		return $data->result_array();
		else
		return FALSE;
		}
	public function view_fertilizer_image_detail($id)
		{
		if($data=$this->db->query("select * from image_master where fertilizer_detail_id = '$id' " ))
		return $data->result_array();
		else
		return FALSE;
		}
		
	public function view_classification_detail()
		{
			$status=array("status"=>0);
		if($data=$this->db->get_where("fertilizer_classification_master",$status))
		return $data->result_array();
		else
		return FALSE;
		}
	public function view_appearance_detail()
		{
				$status=array("status"=>0);
		if($data=$this->db->get_where("fertilizer_appearance_master",$status))
		return $data->result_array();
		else
		return FALSE;
		}
	/*public function view_cultivation_detail()
		{
			$status=array("status"=>0);
		if($data=$this->db->get_where("fertilizer_cultivation_master",$status))
		return $data->result_array();
		else
		return FALSE;
		}
	public function select_origin_country()
		{
			$status=array("status"=>0);
		if($data=$this->db->get_where("country_master",$status))
		return $data->result_array();
		else
		return FALSE;
		}
		*/
		

//..............tools..........




	
	public function select_tools()
		{
		//$ee=$this->db->get("admin_login");
		//echo "<pre>";print_r($ee);die();
		
		if($data=$this->db->query("select * from tools_detail_master as sd INNER JOIN image_master as i on sd.tools_detail_id = i.tools_detail_id where sd.status='0' group by i.tools_detail_id"))
		//$data=$this->db->get("tools_detail_master");
		return $data->result_array();
		else
		return FALSE;
		}
		
	public function view_tools_type_detail($id)
		{
		if($data=$this->db->query("select * from tools_detail_master as sd ,image_master as i where sd.tools_detail_id = i.tools_detail_id  and sd.tools_type_id='$id' and sd.status=0 group by i.tools_detail_id"))
		return $data->result_array();
		else
		return FALSE;
		}
		public function view_tools_detail($id)
		{
		if($data=$this->db->query("select * from tools_detail_master as sd ,image_master as i where sd.tools_detail_id = i.tools_detail_id  and sd.tools_detail_id='$id' and sd.status=0 group by i.tools_detail_id"))
		return $data->result_array();
		else
		return FALSE;
		}
	public function view_tools_subtype_detail($id)
		{
		if($data=$this->db->query("select * from tools_detail_master as sd , tools_subtype_master as sbt,image_master as i where sd.tools_detail_id = i.tools_detail_id  and sd.tools_subtype_id = sbt.tools_subtype_id and sbt.tools_subtype_id='$id' and sd.status=0 group by i.tools_detail_id"))
		return $data->result_array();
		else
		return FALSE;
		}
	public function view_tools_submenu_detail($id)
		{
		if($data=$this->db->query("select * from tools_detail_master as sd , tools_subtype_master as sbt, tools_submenu_master as sbm,image_master as i where sd.tools_detail_id = i.tools_detail_id  and sd.tools_subtype_id = sbt.tools_subtype_id and sd.tools_submenu_id = sbm.tools_submenu_id and sbm.tools_submenu_id='$id' and sd.status=0 group by i.tools_detail_id"))
		return $data->result_array();
		else
		return FALSE;
		}
		
	public function more_tools_product_view($id)
		{
		if($data=$this->db->query("select * from tools_detail_master as sd  ,image_master as i where sd.tools_detail_id = i.tools_detail_id and  sd.tools_detail_id='$id' and status=0 group by i.tools_detail_id" ))
		return $data->result_array();
		else
		return FALSE;
		}
	public function view_tools_image_detail($id)
		{
		if($data=$this->db->query("select * from image_master where tools_detail_id = '$id' " ))
		return $data->result_array();
		else
		return FALSE;
		}
	public function select_tools_detail_type()
		{
			$status=array("status"=>0);
		if($data=$this->db->get_where("tools_detail_type_master",$status))
		return $data->result_array();
		else
		return FALSE;
		}
	/*public function view_classification_detail2()
		{
			$status=array("status"=>0);
		if($data=$this->db->get_where("tools_classification_master",$status))
		return $data->result_array();
		else
		return FALSE;
		}
	public function view_appearance_detail2()
		{
				$status=array("status"=>0);
		if($data=$this->db->get_where("tools_appearance_master",$status))
		return $data->result_array();
		else
		return FALSE;
		}*/
	/*public function select_origin_country()
		{
			$status=array("status"=>0);
		if($data=$this->db->get_where("country_master",$status))
		return $data->result_array();
		else
		return FALSE;
		}*/
	public function select_color()
		{
			$status=array("status"=>0);
		if($data=$this->db->get_where("color_master",$status))
		return $data->result_array();
		else
		return FALSE;
		}
	public function select_fuel()
		{
			$status=array("status"=>0);
		if($data=$this->db->get_where("tools_fuel_master",$status))
		return $data->result_array();
		else
		return FALSE;
		}
	public function select_drive()
		{
			$status=array("status"=>0);
		if($data=$this->db->get_where("tools_drive_master",$status))
		return $data->result_array();
		else
		return FALSE;
		}	
	public function select_engine()
		{
			$status=array("status"=>0);
		if($data=$this->db->get_where("tools_engine_master",$status))
		return $data->result_array();
		else
		return FALSE;
		}	
	


//..............pesticide..........




	
	public function select_pesticide()
		{
		//$ee=$this->db->get("admin_login");
		//echo "<pre>";print_r($ee);die();
		
		if($data=$this->db->query("select * from pesticide_detail_master as sd INNER JOIN image_master as i on sd.pesticide_detail_id = i.pesticide_detail_id where sd.status='0' group by i.pesticide_detail_id"))
		//$data=$this->db->get("pesticide_detail_master");
		return $data->result_array();
		else
		return FALSE;
		}
		
	public function view_pesticide_type_detail($id)
		{
		if($data=$this->db->query("select * from pesticide_detail_master as sd ,image_master as i where sd.pesticide_detail_id = i.pesticide_detail_id  and sd.pesticide_type_id='$id' and sd.status=0 group by i.pesticide_detail_id"))
		return $data->result_array();
		else
		return FALSE;
		}
		
		public function view_pesticide_detail($id)
		{
		if($data=$this->db->query("select * from pesticide_detail_master as sd ,image_master as i where sd.pesticide_detail_id = i.pesticide_detail_id  and sd.pesticide_detail_id='$id' and sd.status=0 group by i.pesticide_detail_id"))
		return $data->result_array();
		else
		return FALSE;
		}
	public function view_pesticide_subtype_detail($id)
		{
		if($data=$this->db->query("select * from pesticide_detail_master as sd , pesticide_subtype_master as sbt,image_master as i where sd.pesticide_detail_id = i.pesticide_detail_id  and sd.pesticide_subtype_id = sbt.pesticide_subtype_id and sbt.pesticide_subtype_id='$id' and sd.status=0 group by i.pesticide_detail_id"))
		return $data->result_array();
		else
		return FALSE;
		}
	public function view_pesticide_submenu_detail($id)
		{
		if($data=$this->db->query("select * from pesticide_detail_master as sd , pesticide_subtype_master as sbt, pesticide_submenu_master as sbm,image_master as i where sd.pesticide_detail_id = i.pesticide_detail_id  and sd.pesticide_subtype_id = sbt.pesticide_subtype_id and sd.pesticide_submenu_id = sbm.pesticide_submenu_id and sbm.pesticide_submenu_id='$id' and sd.status=0 group by i.pesticide_detail_id"))
		return $data->result_array();
		else
		return FALSE;
		}
		
	public function more_pesticide_product_view($id)
		{
		if($data=$this->db->query("select * from pesticide_detail_master as sd  ,image_master as i where sd.pesticide_detail_id = i.pesticide_detail_id and  sd.pesticide_detail_id='$id' and status=0 group by i.pesticide_detail_id" ))
		return $data->result_array();
		else
		return FALSE;
		}
	public function view_pesticide_image_detail($id)
		{
		if($data=$this->db->query("select * from image_master where pesticide_detail_id = '$id' " ))
		return $data->result_array();
		else
		return FALSE;
		}
		
	public function view_classification_detail3()
		{
			$status=array("status"=>0);
		if($data=$this->db->get_where("pesticide_classification_master",$status))
		return $data->result_array();
		else
		return FALSE;
		}
	public function view_appearance_detail3()
		{
				$status=array("status"=>0);
		if($data=$this->db->get_where("pesticide_appearance_master",$status))
		return $data->result_array();
		else
		return FALSE;
		}
	/*public function view_cultivation_detail()
		{
			$status=array("status"=>0);
		if($data=$this->db->get_where("pesticide_cultivation_master",$status))
		return $data->result_array();
		else
		return FALSE;
		}*/
	
		
		
	
		
		
		
	
		
		
	
	public function add_product_cart($data)
		{
		//$ee=$this->db->get("admin_login");
		//echo "<pre>";print_r($data);die();
		
		if($data=$this->db->insert("cart",$data))
		//$data=$this->db->get("seed_detail_master");
		return TRUE;
		else
		return FALSE;
		}
	public function seed_view($id)
		{
		//$ee=$this->db->get("admin_login");
		//echo "<pre>";print_r($id);die();
		
		if($data=$this->db->query("select s.seller_id,s.seed_detail_name,s.seed_price,s.seed_min_order,s.item_weight,i.image_name from seed_detail_master as s,image_master as i where s.seed_detail_id='$id'  and s.seed_detail_id=i.seed_detail_id  and s.status=0 group by i.seed_detail_id"))
		//$data=$this->db->get("seed_detail_master");
		return $data->result_array();
		else
		return FALSE;
		}
	public function fertilizer_view($id)
		{
		//$ee=$this->db->get("admin_login");
		//echo "<pre>";print_r($id);die();
		
		if($data=$this->db->query("select s.seller_id,s.fertilizer_detail_name,s.fertilizer_price,s.fertilizer_min_order,s.model_no,i.image_name from fertilizer_detail_master as s,image_master as i where s.fertilizer_detail_id='$id'  and s.fertilizer_detail_id=i.fertilizer_detail_id and s.status=0 group by i.fertilizer_detail_id"))
		//$data=$this->db->get("seed_detail_master");
		return $data->result_array();
		else
		return FALSE;
		}
	public function tools_view($id)
		{
		//$ee=$this->db->get("admin_login");
		//echo "<pre>";print_r($id);die();
		
		if($data=$this->db->query("select s.seller_id,s.tools_detail_name,s.tools_price,s.tools_uses,i.image_name from tools_detail_master as s,image_master as i where s.tools_detail_id='$id'  and s.tools_detail_id=i.tools_detail_id and s.status=0 group by i.tools_detail_id"))
		//$data=$this->db->get("seed_detail_master");
		return $data->result_array();
		else
		return FALSE;
		}
	public function pesticide_view($id)
		{
		//$ee=$this->db->get("admin_login");
		//echo "<pre>";print_r($id);die();
		
		if($data=$this->db->query("select s.seller_id,s.pesticide_detail_name,s.pesticide_price,s.pesticide_min_order,s.pesticide_weight,i.image_name  from pesticide_detail_master as s,image_master as i where s.pesticide_detail_id='$id'  and s.pesticide_detail_id=i.pesticide_detail_id and s.status=0 group by i.pesticide_detail_id"))
		//$data=$this->db->get("seed_detail_master");
		return $data->result_array();
		else
		return FALSE;
		}
		
	public function image($id)
		{
		//$ee=$this->db->get("admin_login");
		//echo "<pre>";print_r($id);die();
		
		if($data=$this->db->query("select * from seed_detail_master as s,image_master as i where s.seed_detail_id='$id'  and s.seed_detail_id=i.seed_detail_id  group by i.seed_detail_id"))
		//$data=$this->db->get("seed_detail_master");
		return $data->result_array();
		else
		return FALSE;
		}
		
	
		
	public function select_userdata()
		{
		//$ee=$this->db->get("admin_login");
		//echo "<pre>";print_r($id);die();
		$id=$this->session->userdata('user_login_id');
		if($data=$this->db->query("select * from user_registration where user_id='$id' and status=0"))//$data=$this->db->get("seed_detail_master");
		return $data->result_array();
		else
		return FALSE;
		}
		
	public function credit_card($data)
		{	//print_r($data);die;
			if($this->db->insert("payment_master",$data))
			//$data=$this->db->get("seed_detail_master");
			return TRUE;
			else
			return FALSE;
		}
		
		
	public function order_data($data2)
		{	//print_r($data2);die;
			if($this->db->insert("order_master",$data2))
			//$data=$this->db->get("seed_detail_master");
			return TRUE;
			else
			return FALSE;
		}
	public function place_order($data)
		{
		//$ee=$this->db->get("admin_login");
		//echo "<pre>";print_r($data);die();
		
		
			
		if($data=$this->db->insert("cart",$data))
		//$data=$this->db->get("seed_detail_master");
		return TRUE;
		else
		return FALSE;
		}
	public function order_book_data($data)
		{
		//$ee=$this->db->get("admin_login");
		//echo "<pre>";print_r($data);die();
		
		
			
		if($this->db->insert("order_book_master",$data))
		//$data=$this->db->get("seed_detail_master");
		return TRUE;
		else
		return FALSE;
		}
		public function order_detail()
		{
		
		$user=$this->session->userdata('user_login_id');
			
		if($data=$this->db->query("	SELECT * 
FROM order_book_master AS ob, order_master AS o
WHERE ob.order_id = o.order_id and ob.user_id='$user' and ob.status='0'" ))
		//$data=$this->db->get("seed_detail_master");
		return $data->result_array();
		else
		return FALSE;
		}
	public function select_product_data($id)
		{
		
		$user=$this->session->userdata('user_login_id');
			
		if($data=$this->db->query("select s.seller_id,s.seed_detail_name,s.seed_price,s.seed_min_order,i.image_name from seed_detail_master as s,image_master as i where s.seed_detail_id='$id'  and s.seed_detail_id=i.seed_detail_id  and s.status=0 group by i.seed_detail_id"))
		//$data=$this->db->get("seed_detail_master");
		return $data->result_array();
		else
		return FALSE;
		}
		
		public function select_product_fertilizer_data($id)
		{
		
		$user=$this->session->userdata('user_login_id');
			
	if($data=$this->db->query("select s.seller_id,s.fertilizer_detail_name,s.fertilizer_price,s.fertilizer_min_order,s.model_no,i.image_name from fertilizer_detail_master as s,image_master as i where s.fertilizer_detail_id='$id'  and s.fertilizer_detail_id=i.fertilizer_detail_id and s.status=0 group by i.fertilizer_detail_id"))
		//$data=$this->db->get("seed_detail_master");
		return $data->result_array();
		else
		return FALSE;
		}
	public function select_product_tools_data($id)
		{
		
		$user=$this->session->userdata('user_login_id');
			
		if($data=$this->db->query("select s.seller_id,s.tools_detail_name,s.tools_price,i.image_name from tools_detail_master as s,image_master as i where s.tools_detail_id='$id'  and s.tools_detail_id=i.tools_detail_id and s.status=0 group by i.tools_detail_id"))
		//$data=$this->db->get("seed_detail_master");
		return $data->result_array();
		else
		return FALSE;
		}
		public function select_product_pesticide_data($id)
		{
		
		$user=$this->session->userdata('user_login_id');
			
		if($data=$this->db->query("select s.seller_id,s.pesticide_detail_name,s.pesticide_price,s.pesticide_min_order,s.pesticide_weight,i.image_name  from pesticide_detail_master as s,image_master as i where s.pesticide_detail_id='$id'  and s.pesticide_detail_id=i.pesticide_detail_id and s.status=0 group by i.pesticide_detail_id"))
		//$data=$this->db->get("seed_detail_master");
		return $data->result_array();
		else
		return FALSE;
		}
		public function track_order($id)
		{
			//$status=array("status"=>0); order_book_id='$id'
			$id2=$this->session->userdata("user_login_id");
		
		$resque =$this->db->query(" select * from order_book_master  where  user_id='$id2' and order_book_id='$id' and status='0'");
		if($resque)
			return $resque->result_array();
		else
				return FALSE;
		}
	public function cancel_order($id,$id2)
		{
			//$status=array("status"=>0);
			//$id=$this->session->userdata("seller_login_id");
		//die;
		$resque =$this->db->query(" update order_book_master set status='1' ,reason_of_cancel='$id2' where order_book_id='$id' ");
		if($resque)
			return TRUE;
		else
				return FALSE;
		}
	public function cancel_order_view()
		{
		//$ee=$this->db->get("admin_login");
		//echo "<pre>";print_r($data);die();
		
		$user=$this->session->userdata('user_login_id');
			
		if($data=$this->db->query("	SELECT * 
FROM order_book_master AS ob, order_master AS o
WHERE ob.order_id = o.order_id and ob.user_id='$user' and ob.status='1'" ))
		//$data=$this->db->get("seed_detail_master");
		return $data->result_array();
		else
		return FALSE;
		}	
	public function replace_order($id)
		{
			//$status=array("status"=>0);
			//$id=$this->session->userdata("seller_login_id");
		//die;
		$resque =$this->db->query(" update order_book_master set status='0' where order_book_id='$id' ");
		if($resque)
			return TRUE;
		else
				return FALSE;
		}
		
		
				
	
}
