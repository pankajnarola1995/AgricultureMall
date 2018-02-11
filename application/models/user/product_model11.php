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
		

	
}
