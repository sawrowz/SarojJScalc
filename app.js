let input = document.getElementById("inp");
let num = document.querySelectorAll(".num");
let op = document.querySelectorAll(".op");
let equal = document.getElementById("eql");
let clear = document.getElementById("clear");
let backspace = document.getElementById("backspace");


clear.addEventListener("click",()=>{
input.value = "";
});

num.forEach((element)=>{
    element.addEventListener("click", ()=>{
        input.value += element.value;
    })
})

op.forEach((element)=>{
    element.addEventListener("click", ()=>{
        input.value += element.value;
    });
});

backspace.addEventListener("click", ()=>{
    let inp_value = input.value;
    
    if(inp_value.length > 0)
    {
        input.value = inp_value.slice(0, -1);
    }
});

equal.addEventListener("click",()=>{
try {

        input.value = eval(input.value);
    } 
    catch(e)
    {
        input.value = "Error";
    }
})