<?php
/**
 * Plugin Name: TWD No Man's Land Call Tracker
 * Plugin URI: https://github.com/fienen/TWD-No-Man-s-Land-Tracker
 * Description: 
 * Version: 1.0
 * Author: Michael Fienen
 * Author URI: https://fienen.com
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Dependencies
 */
require_once plugin_dir_path( __FILE__ ) . 'src/post-types.php';

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
