<html>
<head>
    <title>Exercise 1</title>
</head>
<body>
<h1>Regular HTML section (outside &lt;?php ... ?&gt; tags)</h1>
<p>You can type regular HTML here and it will show up</p>

<h1>PHP section (inside &lt;?php ... ?&gt; tags)</h1>
<?php
//this is a php comment IN tags (will not appear)

/*echo "This was output using PHP";
echo "<br>"; */

//notice we must echo tags in php.

$date = date("l ,M dS, Y H:i:s ");
echo "This page was generated: " . $date . "<hr/>";

$remainingDays=365-(int)date("z")+(int)date("L");
echo "There are ". $remainingDays . " days left in the year";

?>
</body>
</html>