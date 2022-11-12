$(function() {
    
    var request; 
    var $current; 
    var cache = {}; 
    var $frame = $('.photo-box'); 
    var $thumbs = $('.thumbnail-anchor'); 

    function crossfade($img) { // New image as parameter
        if ($current) { // If image showing
            $current.stop().fadeOut('slow'); // Stop animation & fade out
        }
        $img.css({ // Set CSS margins for new img
            marginLeft: -$img.width() / 2, // Neg margin 1/2 image width
            marginTop: -$img.height() / 2 // Neg margin 1/2 image height
        });
        $img.stop().fadeTo('slow', 1); // Stop animation & fade in
        $current = $img; // New image is current one
    }

    $(document).on('click', '.thumbnail-anchor', function customPhotoViewer(e) { // Click on thumb
        var $img; // Local var called $img
        var src = this.href; // Store path to image
        var request = src; // Store latest image
        e.preventDefault(); // Stop default link behavior
        $thumbs.removeClass('active'); // Remove active from thumbs
        $(this).addClass('active'); // Add active to clicked one
        $frame.removeClass("default-text");
        if (cache.hasOwnProperty(src)) { // If cache contains this img
            if (cache[src].isLoading === false) { // and it's not loading
                crossfade(cache[src].$img); // Call crossfade() function
            }
        } else { // Otherwise it is not in the cache
            $img = $('<img/>'); // Store empty <img/> in $img
            cache[src] = { // Store this image in cache
                $img: $img, 
                isLoading: true 
            };

            
            $img.on('load', function () { 
                $(this).hide(); 
                
                $frame.removeClass('is-loading').append($img);
                cache[src].isLoading = false; 
                
                if (request === src) {
                    crossfade($(this)); 
                } 
            });
            $frame.addClass('is-loading'); 
            $img.attr({ 
                'src': src, 
                'alt': this.title || ''  
            });
        }
    });

});