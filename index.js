const odd=document.getElementsByClassName("child");
let perform=()=>
{
for( let i=0;i<odd.length;i++)
{
    if(i%2!=0)
    {
        odd[i].setAttribute('style','background-color:lime','color:white');
        odd[i].style.color="white";
    }
}
odd[0].setAttribute('style','background-color:blue')
odd[8].setAttribute('style','background-color:green')
odd[odd.length-1].setAttribute('style','background-color:palevioletred')
odd[0].style.color="white";
odd[8].style.color="white";
odd[odd.length-1].style.color="white";
}
document.getElementById("btn").addEventListener("click",perform);