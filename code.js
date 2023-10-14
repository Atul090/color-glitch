console.log("Atul Deep Singh")

//generate a random color
const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let intervalId;
const startChanging=function(){
    //setinterval
    if(!intervalId){
        intervalId=setInterval(()=>{
            document.body.style.background=randomColor();
        },1000)
    }
};
const endChanging=function(){
    clearInterval(intervalId);
    intervalId=null;
};
document.querySelector('#start').addEventListener('click',startChanging);
document.querySelector('#end').addEventListener('click',endChanging);