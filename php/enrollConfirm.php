<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, origin");
require('fpdf/html_table.php');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$email = $_POST['userInfo']['email'];
$firstName = $_POST['userInfo']['firstName'];
$lastName = $_POST['userInfo']['lastName']; 
$eventTitle = $_POST['eventInfo']['title'];
$eventPrice = ($_POST['eventInfo']['price'] !== 0) ? $_POST['eventInfo']['price']." Euro" : "Free";
$eventDate = substr($_POST['eventInfo']['date'],8,2).'/'.substr($_POST['eventInfo']['date'],5,2).'/'.substr($_POST['eventInfo']['date'],0,4);
$eventPlace = $_POST['eventInfo']['place'];
$eventTime = $_POST['eventInfo']['time'];
$lastDatePayment = substr($_POST['eventInfo']['lastdate_payment'],8,10).'/'.substr($_POST['eventInfo']['lastdate_payment'],5,2).'/'.substr($_POST['eventInfo']['lastdate_payment'],0,4);
$bankName = "ABC DEF XYZ Bank";
$accountName = "Chubby Kitchen";
$accountCode = "FI25 1234 5678 9012 34";
$refNumber = substr($_POST['userId'],0,10).' - '.substr($_POST['eventId'],0,10);

$pdf=new PDF();
$pdf->AddPage();
$pdf->SetFont('Arial','',14);

$html='<table border="0"> 
<tr>
<td colspan="2" height="30"><b>To:</b></td>
</tr>
<tr>
<td colspan="2" height="10"></td>
</tr> 
<tr>
<td colspan="2" height="30">'.$firstName.', '.$lastName.'</td>
</tr>
<tr>
<td colspan="2" height="30">'.$email.'</td>
</tr>
<tr>
<td colspan="2" height="200">
</td>
</tr>
<tr>
<td colspan="2" height="200">
<h1><b>Your Invoice</b></h1>
</td>
</tr>
<tr>
<td width="200" height="80">Event</td>
<td width="200" height="80"><b>'.$eventTitle.'</b></td>
</tr>
<tr>
<td width="200" height="80">Time</td>
<td width="200" height="80"><b>'.$eventTime.'</b></td>
</tr>
<tr>
<td width="200" height="80">Date</td>
<td width="200" height="80"><b>'.$eventDate.'</b></td>
</tr>
<tr>
<td width="200" height="80">Room</td>
<td width="200" height="80"><b>'.$eventPlace.'</b></td>
</tr>
<tr>
<td width="200" height="80">Price</td>
<td width="200" height="80"><b>'.$eventPrice.'</b></td>
</tr>
<tr>
<td width="200" height="80">Payment before </td>
<td width="200" height="80"><b>'.$lastDatePayment.'</b></td>
</tr>
</table>';

$isPaid = '<table border="0">
<tr>
<td colspan="2" height="200">
<h1><b>Payment account information</b></h1>
</td>
</tr>
<tr>
<td width="300" height="50" bgcolor="#EFEFEF">Bank name</td>
<td width="400" height="50" bgcolor="#EFEFEF">'.$bankName.'</td>
</tr>
<tr>
<td width="300" height="50" bgcolor="#EFEFEF">Account holder name</td>
<td width="400" height="50" bgcolor="#EFEFEF">'.$accountName.'</td>
</tr>
<tr>
<td width="300" height="50" bgcolor="#EFEFEF">Account No.</td>
<td width="400" height="50" bgcolor="#EFEFEF"><b>'.$accountCode.'</b></td>
</tr>
<tr>
<td width="300" height="50" bgcolor="#EFEFEF">Ref No.</td>
<td width="400" height="50" bgcolor="#EFEFEF"><b>'.$refNumber.'</b></td>
</tr>
</table>';

$ending ='<table border="0">
<tr>
<td colspan="2" height="200"></td>
</tr>
<tr>
<td width="600" height="50"><b>Thank you for your enrollment!</b></td>
</tr>
<tr>
<td width="600" height="80"><i>Chubby Kitchen team.</i></td>
</tr>
</table>';

$pdf->WriteHTML($html);
if($_POST['eventInfo']['price'] !== 0) {
  $pdf->WriteHTML($isPaid);
}
$pdf->WriteHTML($ending);
$pdf->Output();
$pdfdoc = $pdf->Output("", "S"); //output as a file
$filename = "Invoice.pdf"; //give file name for our pdf file
$attachment = chunk_split(base64_encode($pdfdoc)); //attach pdf file with base 64 encode

$separator = md5(time());
$eol = PHP_EOL;

// $headers = "MIME-Version: 1.0\r\n";
// $headers.= "Content-type: multipart/mixed; charset=UTF-8\r\n";
// $headers = "From: no-reply@chubbykitchen.com ";
$to      = $email;
$subject = 'Thank you for your enrolment';
$message = "Hello ".$firstName.", <br /><br />";
$message .= "You have been successfully enroll to our event <b>".$eventTitle."</b><br />";
$message .= "The attachment below contains more information on your enrollment. Please read it carefully.<br /><br />".$eol;
$message .= "Thank you for coming with us. <br />";
$message .= "Sincerely, <br /><br />";
$message .= "Chubby Kitchen team.<br />";

$headers  = "From: Chubby Kitchen <no-reply@chubbykitchen.com> \r\n";
$headers .= "MIME-Version: 1.0".$eol; 
$headers .= "Content-Type: multipart/mixed; boundary=\"".$separator."\"";
// $headers .= "Content-Type: text/plain; boundary=\"".$separator."\"";

// no more headers after this, we start the body! //

$body = "--".$separator.$eol;
$body .= "Content-Transfer-Encoding: 7bit".$eol;

// message
$body .= "--".$separator.$eol;
$body .= "Content-Type: text/html; charset=\"iso-8859-1\"".$eol;
$body .= "Content-Transfer-Encoding: 8bit".$eol.$eol;
$body .= $message.$eol;

// attachment
$body .= "--".$separator.$eol;
$body .= "Content-Type: application/octet-stream; name=\"".$filename."\"".$eol; 
$body .= "Content-Transfer-Encoding: base64".$eol;
$body .= "Content-Disposition: attachment".$eol.$eol;
$body .= $attachment.$eol;
$body .= "--".$separator."--";

mail($to, $subject, $body, $headers);
?>
