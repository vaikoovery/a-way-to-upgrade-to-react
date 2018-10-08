<footer class="text-center">
  &copy; My Website
</footer>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<?php
  foreach($dynamic_js as $js) {
?>
    <script src="<?= $react_dist, $js ?>"></script>
<?php
  }
?>