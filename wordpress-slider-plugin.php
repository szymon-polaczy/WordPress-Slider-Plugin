<?php
/**
* Plugin Name: WordPress Slider Plugin
* Version: 0.1
* Author: Szymon Polaczy
**/

/*
/**
 * Determines whether a $post or a string contains a specific block type,
 * including blocks that are included in reusable blocks.
 *
 * @author Jb Audras – @audrasjb on socials.
 *
 * @param string                  $block_name Full Block type to look for.
 * @param int|string|WP_Post|null $post Optional. Post content, post ID, or post object. Defaults to global $post.
 * @return bool Whether the post content contains the specified block.
 * 
function has_block_including_reusables( $block_name, $post = false ) {

	if ( ! has_blocks( $post ) ) {
		return false;
	}

	$post = ( ! $post ) ? get_the_ID() : $post;

	if ( $post ) {

		// This is for regular blocks
		if ( has_block( $block_name, $post ) ) {
			return true;
		}

		// This is for reusable blocks
		if ( has_block( 'block', $post ) ) {

			$content = get_post_field( 'post_content', $post );
			$blocks = parse_blocks( $content );

			if ( ! is_array( $blocks ) || empty( $blocks ) ) {
				return false;
			}

			if ( false === strpos( $block_name, '/' ) ) {
				$block_name = 'core/' . $block_name;
			}

			foreach ( $blocks as $block ) {
				if ( $block['blockName'] === 'core/block' && ! empty( $block['attrs']['ref'] ) ) {
					if ( has_block( $block_name, $block['attrs']['ref'] ) ) {
					   return true;
					}
				}
			}
		}
	}
	return false;
}

add_action(
	'wp_enqueue_scripts',
	function() {
		if ( has_block_including_reusables( 'goo/slider' ) ) {
			wp_enqueue_style( 'goo-slider-splide-css', 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css', array(), '4.1.4', 'all' );
			wp_enqueue_script( 'goo-slider-splide-js', 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', array(), '4.1.4', true );
			wp_enqueue_script( 'goo-slider-plugin-js',  plugins_url() . '/WordPress-Slider-Plugin/assets/front.js', array('goo-slider-splide-js'), time(), true );
		}
	}
);*/

/**
 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
 * based on the registered block metadata. Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function create_goo_blocks() {
	wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
}
add_action( 'init', 'create_goo_blocks' );