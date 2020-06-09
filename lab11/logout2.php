<?php
session_start();
unset($_SESSION['Username']);
echo "<script>window.location.href='lab11-exercise2.php'</script>";