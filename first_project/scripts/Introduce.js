
var pagename =  "";

function submenuover(value){
    value.style.color = "white";
    value.style.backgroundColor = "#2C2B2F";
    value.style.borderBottom = "2px solid #FFFF00";
}

function submenuleave(value){
    if (pagename != value.id)
    {
        value.style.backgroundColor = "white";
        value.style.color = "gray";
        value.style.border = "none";
        value.style.borderBottom = "none";
    }
}

function foo(value){
    pagename = value;
    document.getElementById(value).style.color = "white";
    document.getElementById(value).style.backgroundColor = "#2C2B2F";
    document.getElementById(value).style.borderBottom = "2px solid #FFFF00";
}