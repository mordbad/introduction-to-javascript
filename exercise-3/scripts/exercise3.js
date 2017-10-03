alert('hi there');
//test
var info = document.querySelector('body');
(function(){
  var name = "Haakon";
  var age = 28;
  var array = ["hamburger","guacamole","taco"];


  var thingiverse = [   fifthelement = {  name: 'The fifth element',
                                          credits:{
                                            director: 'miyasaki',
                                            star: 'Bruce Willis'
                                          }
                                        },
                        goldeneye = {name: 'Goldeneye',
                                      credits:{
                                        director: 'Bruce Willis',
                                        star:'Pierce Brosnan'
                                      }
                                    },
                        thematrix = {name: 'The Matrix',
                                      credits:{
                                        director:'Wazowski brothers',
                                        star:'Keanu Reeves'
                                      }
                                    }
                      ];
  var all = {name,age,array,thingiverse};


  console.log(thingiverse);
  presentMyself(all);

})();

function presentMyself(input){
  var output ='';
  info.innerHTML="Test"
  var template = "Hello, my name is" + input.name +". Im "+ input.age +" years old and my favorite" +
   "movies are "+input.thingiverse[input.thingiverse.length-1].name+" {LEAST-liked-move} which is directed by {director} and stars {star},"+

   "{medium-liked-movie} which is directed by {director} and stars {star},"+
   " and {MOST-liked-movie} which is directed by {director} and stars {star}."
  info.innerHTML=template;


}
