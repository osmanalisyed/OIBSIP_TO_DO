var btn = document.querySelector('#btnContainer > button');
var input = document.getElementById('textBox');
var list = document.getElementById('list');

btn.addEventListener('mousedown', function (){
    var inputValue = input.value;
    if(inputValue === "" && inputValue === undefined && inputValue ===null){
        alert("Please Enter a Text");
    }
    else{
        var newList = document.createElement('li');
        var textNode = newList.appendChild(document.createTextNode(inputValue));
        list.appendChild(newList);
    }
});
btn.addEventListener('mouseup', function(){
    input.value = '';
})
document.body.addEventListener('keydown',function(evt){
    var keyCode = evt.keyCode;
    var inputValue = input.value;
    if(keyCode === 13)
    {
        if(inputValue === "" && inputValue === undefined && inputValue ===null  ){
            alert("Please Enter a Text");
        }
        else{
            var newList = document.createElement('li');
            var textNode = newList.appendChild(document.createTextNode(inputValue));
            list.appendChild(newList);
        }
    }
});
document.body.addEventListener('keyup', function(evt){
    var keyCode = evt.keyCode;
    if(keyCode === 13){
    input.value = '';
    }
})