<?php
/**
* Plugin Name: WordPress Slider Plugin
* Version: 0.1
* Author: Szymon Polaczy
**/

add_action( 'init', 'rudr_register_in_php' );

function rudr_register_in_php() {
	register_block_type( __DIR__ );
}