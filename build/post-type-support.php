<?php
  function add_theme_support_post_formats() {
    add_theme_support('post-formats', array( 'aside', 'gallery' ));
  }
  add_action( 'after_setup_theme', 'add_theme_support_post_formats' );

  function add_post_formats_to_post(){
    add_post_type_support( 'post', 'post-formats' );
    register_taxonomy_for_object_type( 'post_format', 'post' );
  }
  add_action( 'init', 'add_post_formats_to_post' );
?>