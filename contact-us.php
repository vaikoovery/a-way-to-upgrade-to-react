<?php
  require('includes/common.php');
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Non React Contact Us Page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php
    include('includes/head.php')
  ?>
</head>
<body>
  <?php
    include('includes/header.php')
  ?>
  <div class="container">
    <div class="row">
      <div class="col-xs-6 col-xs-offset-3">
        <form action="" method="post">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name" />
          </div>
          <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" class="form-control" id="email" />
          </div>
          <div class="form-group">
            <label for="phone">Phone:</label>
            <input type="tel" class="form-control" id="phone" />
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </div>
    </div>
  </div>
  <?php
    include('includes/footer.php')
  ?>
</body>
</html>
