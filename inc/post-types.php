<?php
// Register Radio Call Custom Post Type
function fienen_cpt_calls() {

	$labels = array(
		'name'                  => _x( 'Radio Calls', 'Post Type General Name', 'fienen' ),
		'singular_name'         => _x( 'Radio Call', 'Post Type Singular Name', 'fienen' ),
		'menu_name'             => __( 'Radio Calls', 'fienen' ),
		'name_admin_bar'        => __( 'Radio Call', 'fienen' ),
		'archives'              => __( 'Call Archives', 'fienen' ),
		'attributes'            => __( 'Call Attributes', 'fienen' ),
		'parent_item_colon'     => __( 'Parent Call:', 'fienen' ),
		'all_items'             => __( 'All Calls', 'fienen' ),
		'add_new_item'          => __( 'Add New Call', 'fienen' ),
		'add_new'               => __( 'Add New', 'fienen' ),
		'new_item'              => __( 'New Call', 'fienen' ),
		'edit_item'             => __( 'Edit Call', 'fienen' ),
		'update_item'           => __( 'Update Call', 'fienen' ),
		'view_item'             => __( 'View Call', 'fienen' ),
		'view_items'            => __( 'View Calls', 'fienen' ),
		'search_items'          => __( 'Search Call', 'fienen' ),
		'not_found'             => __( 'Not found', 'fienen' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'fienen' ),
		'featured_image'        => __( 'Featured Image', 'fienen' ),
		'set_featured_image'    => __( 'Set featured image', 'fienen' ),
		'remove_featured_image' => __( 'Remove featured image', 'fienen' ),
		'use_featured_image'    => __( 'Use as featured image', 'fienen' ),
		'insert_into_item'      => __( 'Insert into call', 'fienen' ),
		'uploaded_to_this_item' => __( 'Uploaded to this call', 'fienen' ),
		'items_list'            => __( 'Calls list', 'fienen' ),
		'items_list_navigation' => __( 'Calls list navigation', 'fienen' ),
		'filter_items_list'     => __( 'Filter calls list', 'fienen' ),
	);
	$args = array(
		'label'                 => __( 'Radio Call', 'fienen' ),
		'description'           => __( 'Radio call results', 'fienen' ),
		'labels'                => $labels,
		'supports'              => array( 'custom-fields' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-phone',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => false,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'rewrite'               => false,
		'capability_type'       => 'post',
		'show_in_rest'          => true,
	);
	register_post_type( 'calls', $args );

}
add_action( 'init', 'fienen_cpt_calls', 0 );