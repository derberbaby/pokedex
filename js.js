
$(document).ready(function() {
  for (var i = 1; i <= 151; i++) {
    var img = '<img id="'+i+'" src="http://pokeapi.co/media/img/'+i+'.png">';
    console.log(img);
    $('#pokedex').append(img);
    }

  $(document).on('click','img',function() {
    var pokemon = $(this).attr('id')
    var pokeimg = $(this).attr('src')

    $.get('http://pokeapi.co/api/v2/pokemon/'+pokemon+'/',function(data){
      console.log(data);
      $('#info').html('<h3>'+data.name+'</h3><img src="'+pokeimg+'">')

      var types = '<strong>Types:</strong> ';
      for(var k=0; k<data.types.length; k++) {
        if(k == data.types.length-1) {
          types+=data.types[k].type.name;
        }else {
          types+=data.types[k].type.name+', ';
        }
      }

      $('#info').append('<p>'+types+'</p>')
      $('#info').append('<p><strong>Height:</strong> '+data.height/10+'m</p>')
      console.log(data.height);
      $('#info').append('<p><strong>Weight:</strong> '+data.weight/10+'kg</p>')

    })
  })

  })
