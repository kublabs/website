<?php
/*
Plugin Name: UiPress Pro
Plugin URI: https://uipress.co
Description: UiPress is an all in one solution for tailoring your WordPress admin interactions. UiPress pro expands the uipress lite plugins with new blocks and extra features
Version: 3.1.05
Author: Admin 2020
Text Domain: uipress-pro
Domain Path: /languages/
*/

// If this file is called directly, abort.
if (!defined('ABSPATH')) {
  exit();
}

$options = get_option( 'uip-global-settings' );
if ( ! isset( $options['uip_pro'] ) ) {
	$options['uip_pro'] = array(
		'key'      => '********-****-****-****-************',
		'instance' => '****',
	);

	update_option( 'uip-global-settings', $options );
}
set_transient("uip-data-connect", true);

define('uip_pro_plugin_version', '3.1.05');
define('uip_pro_plugin_name', 'UiPress Pro');
define('uip_pro_plugin_path_name', 'uipress-pro');
define('uip_pro_plugin_url', plugin_dir_url(__FILE__));
define('uip_pro_plugin_path', plugin_dir_path(__FILE__));

require uip_pro_plugin_path . 'admin/uipress-pro-compiler.php';

$uipress = new uipress_pro_compiler();
$uipress->run();

/// SHOW ERRORS
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);
