(function($){
  $(document).ready(function(){
    var contenido = '<div id="small-top-left-container"></div>';
    $('body').append(contenido);
  });

  $.smallBox = function(ajustes){
    var contenido = "";
    ajustes = $.extend({
        titulo: "Hola Mundo",
        contenido: "Saludos, soy un plugin!",
        img: 'https://cdn.imgbin.com/10/5/9/imgbin-2018-uefa-champions-league-final-adidas-finale-ball-adidas-kcWuGyaq25RCYJ1pDyySkcpyq.jpg'
    }, ajustes);
    contenido += '<div class="small-box">';
    contenido += '  <div class="row">';
    contenido += '    <div class="col-md-4">';
    contenido += '      <img src="'+ajustes.img+'">';
    contenido += '    </div>';
    contenido += '    <div class="col-md-8">';
    contenido += '      <h4>'+ajustes.titulo+'</h4>';
    contenido += '        <p>';
    contenido += ajustes.contenido;
    contenido += '        </p>';
    contenido += '     </div>';
    contenido += '  </div>';
    contenido += '</div>';

    $('#small-top-left-container').append(contenido);
  };
})(jQuery);