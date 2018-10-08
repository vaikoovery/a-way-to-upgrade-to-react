<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
<?php
  foreach($dynamic_css as $css) {
?>
    <link rel="stylesheet" href="<?= $react_dist, $css ?>" />
<?php
  }
?>
