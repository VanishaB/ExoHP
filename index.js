 $.get("http://hp-api.herokuapp.com/api/characters")
.then (function(data){
 data.forEach(function(charactere){
console.log("name :" + data[0].name)
     $("#students").append('<div> <ul class="list-group">  <li class="list-group-item active">'+charactere.name+' Maison :'+charactere.house+'</li></ul></div>');
});
 });

