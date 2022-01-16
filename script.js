const countdisplay=document.getElementById("countdisplay");
let count=0;
document
    .getElementById('add-button')
    .addEventListener("click", function(){
        count = count + 1;
        countdisplay.innerHTML=count;
    });
document.getElementById('sub-button').addEventListener("click", function(){
    count = count - 1;
    countdisplay.innerHTML=count;
});
    