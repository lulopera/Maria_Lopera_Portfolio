<?php
// TODO: Take care the form submission
// ini_set('display_errors',0);
// It returns proper info in JSON

header('Access-Control-Allow-Origin:*');
header('Content-Type: applications/json;charset=UTF-8');
$results = [];
$visitor_name = '';
$visitor_lname = '';
$visitor_email = '';
$visitor_topic = '';
$visitor_message= '';



// 1. Check the submission out -> Validate the data
// $_POST['firstname]

if(isset($_POST['firstname'])) {
    $visitor_name = filter_var($_POST['firstname'], FILTER_SANITIZE_STRING);

}

if(isset($_POST['lastname'])) {
    $visitor_lname = filter_var($_POST['lastname'], FILTER_SANITIZE_STRING);
}

if(isset($_POST['email'])) {
    $visitor_email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
}

if(isset($_POST['info'])) {
    $visitor_topic = filter_var($_POST['info'], FILTER_SANITIZE_STRING);
}


if(isset($_POST['message'])) {
    $visitor_message = filter_var(htmlspecialchars($_POST['message']), FILTER_SANITIZE_STRING);
}

$results['name'] = $visitor_name;
$results['lastname'] = $visitor_lname;
$results['email'] = $visitor_email;
$results['message'] = $visitor_message;
$results['info'] = $visitor_topic;



// 2. Prepare the email
$email_recipient = 'info@marialopera.ca';
$email_user = 'noreply@marialopera.ca';
$email_subject = 'Inquiry from Portfolio site';
$email_message = sprintf('Name: %s, Lastname: %s,  Email: %s, Info: %s,  Message: %s', $visitor_name, $visitor_lname, $visitor_email, $visitor_topic, $visitor_message);

//  make sure you run the code in PHP 7.4 +
// Otherwise, you will need to make $email_headers as string
$email_headers = sprintf('Reply-To: %s, From: %s', $visitor_email, $email_user);
// $email_headers = array(
//     // Best practice, but it may need you to have a mail set up in noreply@yourdomain.ca
    // 'From' => 'noreply@marialopera.ca',
//     'Reply-To' => $visitor_email
//     // You can still use it, if above is too much work
//     'From' => $visitor_email
// );



// here goes the code to redirect emails depending on the topic chosen by user in dropdown menu ----->
$visitor = $_POST['info'];
switch ($visitor) {
    case 'Message':
        $email_recipient = 'info@marialopera.ca';
        $email_subject = "General Message";
        break;
    case 'Web':
        $email_recipient = 'web@marialopera.ca';
        $email_subject = "Quote for Web Development";
        break;
    case 'Animation':
        $email_recipient =  'animation@marialopera.ca';
        $email_subject = "Quote for Animation";
        break;
}

// 3. Send out email

$email_result = mail($email_recipient, $email_subject, $email_message, $email_headers);


// if Firstname, Lastname or email in the form are not submitted, the email is not going to be sent. Dropdown menu and message can go empty.
if(empty($visitor_name) || empty($visitor_lname) || empty($visitor_email) ) {
    $results['message'] = sprintf('I am sorry but the email did not go through. Try again!');
} else {
    $results['message'] = sprintf('Thank you for contacting me, %s. You will got a reply within 24 hours.', $visitor_name);
}


echo json_encode($results);


// // here goes the reCAPTCHA php code, I chose recaptcha v 2.0, checkbox option ---->

if(count($_POST)>0)  
    
    if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response']))
    {
        // this is the secret key for recaptcha ----->
      $secret = '6LfbP1gdAAAAAEiEEtyAGW_SI5I-cET66LTYpXOB';
      $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
      $responseData = json_decode($verifyResponse);

}


