<?php
  $react_dist = './dist/ra/';
  $dynamic_css = $dynamic_js = [];
  $entry_point = isset($entry_point) ? $entry_point : null;

  if(!empty($entry_point)) {
    /* Get file contents */
    $react_assets = file_get_contents('react-assets.json');
    /* Decode as Array */
    $react_assets = json_decode($react_assets, true);

    /* Get common css/js */
    $common_css = @$react_assets['commons']['css'];
    $dynamic_css[] = $common_css;
    $common_js = @$react_assets['commons']['js'];
    $dynamic_js[] = $common_js;

    /* Get Chunk files */
    $chunk_files = @$react_assets[$entry_point];

    array_push($dynamic_css, $chunk_files['css']);
    $dynamic_css = array_filter($dynamic_css);
    array_push($dynamic_js, $chunk_files['js']);
    $dynamic_js = array_filter($dynamic_js);
  }