

     var array = [4 , 4, 5, 12];
     var numero =  9;
     var  multiplicar = array.reduce(function( nume1 , arry2){
  
     var result =  nume1 * arry2;
  
 return result;
  
 })
 document.write(numero * multiplicar);

   describe('Ejercicio 1', function(){
    it('Prueba de [4,4,5,12] y 9 ', function(){
      assert.equal(8640, multiplicar[4,4,5,12], 9);
       }
    });