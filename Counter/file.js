let counter = 0;
function count(){
    counter++;
    document.querySelector('h2').innerHTML= counter;
}
let r = 0;
function reset(){
    document.querySelector('h2').innerHTML = 0;
    counter = 0;
}
