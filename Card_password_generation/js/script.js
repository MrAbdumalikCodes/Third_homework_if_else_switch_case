let cardNumber = prompt('Enter your card number !')
if(+cardNumber.length == 16){
    console.log('Carefully your pin!');
}else{
    console.log('Invalid number! Enter your again!');
}