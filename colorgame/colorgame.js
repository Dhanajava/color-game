var color= Generaterandom(6);
  var squares=document.querySelectorAll(".square");
  var pickedcolor=pickcolor();
  var colordisplay=document.querySelector(".colordis");
  var messagedisplay=document.querySelector('.message');
  var easybtn=document.querySelector(".easybutton");
  var hardbtn=document.querySelector(".hardbutton");
  var reset=document.querySelector(".reset");
  colordisplay.textContent=pickedcolor; 
  for(var i=0;i<squares.length;i++){
  squares[i].style.background=color[i];
 
  reset.addEventListener("click" , function(){
    color=Generaterandom(6);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for( var i=0;i<squares.length;i++){
     squares[i].style.background=color[i]; 
    }
  });
 
  easybtn.addEventListener("click" , function(){
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    color=Generaterandom(3);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for( var i=0;i<squares.length;i++){
      if(color[i]){
      squares[i].style.background=color[i];
    } else{
      squares[i].style.display="none";
    }
  }
  });

  hardbtn.addEventListener("click" , function(){
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    color=Generaterandom(6);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for( var i=0;i<squares.length;i++){
      squares[i].style.background=color[i];
      squares[i].style.display='block';
    }
  });


  squares[i].addEventListener('click',function(){
      var clickedcolor=this.style.background;
      console.log(clickedcolor);
      if(clickedcolor==pickedcolor){
        messagedisplay.textContent='CORRECT';
        changecolor(clickedcolor);
        document.getElementById("top").style.background=`${clickedcolor}`;
        // setTimeout( () => location.reload() , 1000);
      }else{
         this.style.background='#232323';
         messagedisplay.textContent='TRY AGAIN';
       
      }
  });
 }
 
 function changecolor(colors){
  for(var i=0;i<squares.length;i++){
    squares[i].style.background=colors;
 }
}
function pickcolor(){
  var random=Math.floor(Math.random()*color.length);
  return color[random];
}

function Generaterandom(num){
  var arr=[];
  for(var i=0;i<num;i++){
   arr.push(Randomcolor())
  }
  return arr;
}
function Randomcolor(){
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
  return  `rgb(${r}, ${g}, ${b})`
  
}
