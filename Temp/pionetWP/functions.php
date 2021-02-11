<?php

add_theme_support( 'post-thumbnails' );

add_action('wp_enqueue_scripts', 'pionet_scripts');

function pionet_scripts(){
    wp_enqueue_style('pionetWP-style', get_stylesheet_uri());
    wp_enqueue_style('pionetWP-style-main', get_template_directory_uri() . '/assets/style/main.css');
    wp_enqueue_script('pionetWP-script', get_template_directory_uri() . '/assets/js/main.js', array(), null, true);
}

?>