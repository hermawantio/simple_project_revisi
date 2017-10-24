<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Welcome to CodeIgniter</title>
  <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/sweetalert.css'); ?>">
  <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/component.min.css'); ?>">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Comic+Sans+MS">
  <style>
    .btn{
      width: 100px;
      height:100px
    }
    .text-bold{
      font-size: x-large;
      font-weight: bold;
      color: #fff;
    }
    h2{
      text-align: center;
    }
    .sa-icon.sa-custom{
      width: 100px;
      height: 100px;
    }
    .reload{ 
      text-align: center;
      margin-bottom: 20px; 
    }
    a.reload{
      color:red;
      text-decoration: underline;
    }
    marquee.style_marquee{
      margin-left: 30%;
      margin-right: 30%;
      color: #001fff;
      margin-bottom: -15px;
      font-family: "Comic Sans MS", "Comic Sans", cursive;
    }
  </style>
</head>
<body>

<marquee class="style_marquee" behavior="scroll" direction="left"><h3> SIMPLE GAME BINGO !!!</h3> </marquee>
<div class="reload"><a class="reload" onclick="reload()">Reload Game</a></div> 
<div class="container" align="center"></div>


<script type="text/javascript" src="<?php echo base_url('assets/js/jquery.js') ?>"></script>
<script type="text/javascript" src="<?php echo base_url('assets/js/core.js') ?>"></script>
<script type="text/javascript" src="<?php echo base_url('assets/js/sweetalert.min.js') ?>"></script>
</body>
</html>