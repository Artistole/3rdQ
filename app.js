var textarea = document.querySelector("#txt");
var increase = document.querySelector("#increase");
var decrease = document.querySelector("#decrease");

increase.addEventListener('click', increment);
decrease.addEventListener('click', decrement);

function increment()
{
    var fsize = window.getComputedStyle(textarea,null).getPropertyValue('font-size');   //used window.getComp.. to get the initial font size from
     fsize = parseInt(fsize);                                                           //the user itself. used parse to get it in a number format
     fsize = fsize + 2;                                                                 // and added+2 to increase the size by 2px every time
    textarea.style.fontSize = fsize+'px'    //here basically we are applying style to the text field from JS itself using style.fontSize. + for concatenation 
}

function decrement()
{
    var fsize = window.getComputedStyle(textarea,null).getPropertyValue('font-size');
     fsize = parseInt(fsize);
     fsize = fsize - 2;
    textarea.style.fontSize = fsize+'px'
}