let inputfeild=document.getElementById("todo");
let list=document.getElementById("listspace");

function getinputvalue(){
    var paragraph=document.createElement("p");
    paragraph.innerText = inputfeild.value;
    paragraph.style.fontSize="20px";
    list.appendChild(paragraph);
    inputfeild.value='';
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick',function(){
        list.removeChild(paragraph);
    })
}


