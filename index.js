$( '#navbar .navbar-nav a' ).on('click', 
function () {
$( '#navbar .navbar-nav' ).find( 'li.active' )
.removeClass( 'active' );
$( this ).parent( 'li' ).addClass( 'active' );
});



$(window).on('load', function(){
    setTimeout(function(){
        $('.box-2').addClass('box-2-muncul');
    },900);
});


$(window).scroll(function(){
    
    const wScroll = $(this).scrollTop();
   

    // PARALLAX - Produk

    if(wScroll > $('.isi-produk').offset().top - 250 ){
        $('.isi-produk .cover-produk').each(function(i){
            setTimeout(function(){
                $('.cover-produk').eq(i).addClass('cover-produk-muncul');  
            },500 * i+1);
        });  


    }
});

