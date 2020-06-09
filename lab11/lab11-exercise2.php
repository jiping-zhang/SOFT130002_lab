<?php
require_once 'config.php';
session_start();
?>
<html lang="en">
<head>

    <!-- Latest compiled and minified Bootstrap Core CSS -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>Exercise 11-1 | Using Cookies</title>
</head>

<body>
<header>
</header>


<?php
function getLoginForm()
{
    return "
<form action='lab11-exercise2.php' method='post' role='form'>
<div class ='form-group'>
  <label for='username'>Username</label>
  <input type='text' name='username' class='form-control'/>
</div>
<div class ='form-group'>
  <label for='pword'>Password</label>
  <input type='password' name='pword' class='form-control'/>
</div>
<input type='submit' value='Login' class='form-control' />

</form>";
}
function getContent()
{
    return "
   
    <p>this is some content</p>
    <br/>
    <a href='logout2.php'>log out</a> 
    ";
}

function validLogin($username,$password)
{
    $link=mysqli_connect(DBHOST,DBUSER,DBPASS);
    $link->select_db(DBNAME);
    $link->set_charset("utf8");

    $query="select * from credentials where Username = '$username' and Password = '$password';";
    $result=$link->query($query);
    $link->close();
    return($result->fetch_row()!=null);
}

?>
<div class="container theme-showcase" role="main">
    <div class="jumbotron">
        <h1>
            <?php
            // require_once("config.php");
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                if(validLogin($_POST['username'],$_POST['pword'])){
                    // add 1 day to the current time for expiry time
                    $expiryTime = time()+60*60*24;
                    $_SESSION['Username']=$_POST['username'];
                }
                else{
                    echo "login unsuccessful";
                }
            }
            if(isset($_SESSION['Username'])){
                echo "Welcome ".$_SESSION['Username'];
            }
            else{
                echo "No Post detected";
            }
            ?>

        </h1>
    </div>
    <?php
    if (!isset($_SESSION['Username'])){
        echo getLoginForm();
    }
    else{
        echo getContent();
    }
    ?>
</div>
</body>
</html>

