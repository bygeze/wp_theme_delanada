<?php get_header(); ?>

<div class="container">
    <h1>Mis trabajos</h1>

    <?php 
    // Consulta para mostrar los Tracks (CPT 'track')
    $args = array(
        'post_type' => 'track', // El Custom Post Type que registramos
        'posts_per_page' => 10, // Número de canciones a mostrar
    );
    $tracks_query = new WP_Query($args);
    
    if ($tracks_query->have_posts()) : ?>
        <div class="track-list">
            <?php while ($tracks_query->have_posts()) : $tracks_query->the_post(); ?>
                <div class="track">
                    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    
                    <!-- Mostrar imagen destacada (thumbnail) -->
                    <div class="track-thumbnail">
                        <?php 
                        if (has_post_thumbnail()) {
                            the_post_thumbnail('full'); // Or change 'medium' to another size if needed
                        } else {
                            echo 'No thumbnail available'; // This is a fallback message
                        }
                        ?>
                    </div>
                    
                    <p>Artista: <?php echo esc_html(get_post_meta(get_the_ID(), 'track_artist', true)); ?></p>
                    <p>Año: <?php echo esc_html(get_post_meta(get_the_ID(), 'track_year', true)); ?></p>
                    <p>
                        <a href="<?php echo esc_url(get_post_meta(get_the_ID(), 'track_youtube', true)); ?>" target="_blank">Ver en YouTube</a> |
                        <a href="<?php echo esc_url(get_post_meta(get_the_ID(), 'track_spotify', true)); ?>" target="_blank">Escuchar en Spotify</a>
                    </p>
                </div>
            <?php endwhile; ?>
        </div>
        <div class="pagination">
            <?php the_posts_navigation(); ?>
        </div>
    <?php else : ?>
        <p>No se encontraron canciones.</p>
    <?php endif; wp_reset_postdata(); ?>
</div>

<?php get_footer(); ?>
