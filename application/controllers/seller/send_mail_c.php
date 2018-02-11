<?php


class Send_mail_c extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
		$this->load->library('email');
		
    }
	
	function send_mail_data()
	{
		$mail = $_POST['mail'];
		$pass=random_string("alnum",8);
			$sms = "Your Password IS :-'$pass'";
			$sms .= ". Thanks.   ";
			$sms .= "Link TO www.google.co.in";
			$sub = "ForGot Your Password ";
			$chkmail = $this->send_email($mail,$sub,$sms);
						if($chkmail === true)
						{
							echo "Mail Send successfully..";
						}
						else
						{
							echo "Mail Not send..";
						}
	}
	
	function send_email($to="",$sub="",$sms="")
	{
		$config['protocol']    = 'smtp';
        $config['smtp_host']    = 'ssl://smtp.gmail.com';
        $config['smtp_port']    = '465';
        $config['smtp_timeout'] = '60';
        $config['smtp_user']    = '';
        $config['smtp_pass']    = '';
        $config['charset']    = 'utf-8';
        $config['newline']    = "\r\n";
        $config['mailtype'] = 'text'; // or html
        $config['validation'] = TRUE; // bool whether to validate email or not      

        $this->email->initialize($config);

        $this->email->from('info@YourEmail.com', 'Example');
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
	
	function index()
	{
		$this->load->view("send_mail_v");
		
    }
}

?>
