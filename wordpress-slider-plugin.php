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

/**
 * Determines whether a $post or a string contains a specific block type,
 * including blocks that are included in reusable blocks.
 *
 * @author Jb Audras – @audrasjb on socials.
 *
 * @param string                  $block_name Full Block type to look for.
 * @param int|string|WP_Post|null $post Optional. Post content, post ID, or post object. Defaults to global $post.
 * @return bool Whether the post content contains the specified block.
 */
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
			wp_enqueue_style( 'splide-css', 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css', array(), '4.1.4', 'all' );
			wp_enqueue_script( 'splide-js', 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', array(), '4.1.4', true );
			
			//TODO: This should be in block.json - didn't work
			wp_enqueue_script( 'wp-slider-plugin-js',  plugins_url() . '/WordPress-Slider-Plugin/assets/front.js', array('splide-js'), time(), true );
		}
	}
);