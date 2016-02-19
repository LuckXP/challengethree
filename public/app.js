console.log('YOU BETTER MAKE SURE YOU CAN SEE THIS IN YOUR CONSOLE....')

var addProduct = function(event){
  event.preventDefault();

  var name = $('#name').val();
  var inStock = $('#SOMETHING').val();


  var product = {};


    $.ajax({
      url: '/api/products',
      method: 'POST',
      data: product
    }).done(function(data){

      console.log('I posted a product!', data);

      //BONUS: Update the products table without 
      // refreshing the page...


    })


};

$('#addProduct').on('click', addProduct);