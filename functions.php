<?php
// Evitar el acceso directo al archivo
if (!defined('ABSPATH')) {
    exit;
}

// Soporte para imágenes destacadas
add_theme_support('post-thumbnails');

// Soporte para títulos dinámicos
add_theme_support('title-tag');

// Registrar menú de navegación
function mi_tema_menus() {
    register_nav_menus(array(
        'primary' => 'Menú Principal',
    ));
}
add_action('after_setup_theme', 'mi_tema_menus');

// Encolar estilos y scripts
function mi_tema_scripts() {
    // Estilos
    wp_enqueue_style('mi-tema-estilos', get_stylesheet_uri());
    
    // Scripts (si es necesario)
    // wp_enqueue_script('mi-tema-script', get_template_directory_uri() . '/js/mi-script.js', array(), false, true);
}
add_action('wp_enqueue_scripts', 'mi_tema_scripts');