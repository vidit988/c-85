canvas=document.getElementById('canvas1')
cpx=canvas.getContext('2d')



roverwidth=60
roverheight=50
roverx=10
rovery=10



var img=['1000ML0044631260305223E03_DXXX.jpg','1000MR0044631180503678E01_DXXX.jpg','1000MR0044631200503680E0C_DXXX.jpg','FLB_486265257EDR_F0481570FHAZ00323M_.jpg']
var num=Math.floor(Math.random()*4 )
console.log(num);



function rover(){
imagetag1=new Image()
imagetag2=new Image()
imagetag2.src=img[num]
imagetag2.onload=funct2
imagetag1.src='rover.png'
imagetag1.onload=funct
}
//<img src='rover.png' onload='funct'>
//<img src='mars.jpg' onload='funct2'>
function funct(){
cpx.drawImage(imagetag1,roverx,rovery,roverwidth,roverheight)

}
function funct2(){
cpx.drawImage(imagetag2,0,0,canvas.width,canvas.height)
}
window.addEventListener('keydown',keydown1)
function keydown1(event){
  console.log(event.keyCode)  
  if (event.keyCode==38){
    console.log('uparrow')
    upkey()

  }
  if (event.keyCode==40){
    console.log('downarrow')
    downy()
  }
  if (event.keyCode==37){
    console.log('leftarrow')
    leftkey()
  }
  if (event.keyCode==39){
    console.log('rightarrow')
    rightkey()
  }
}
function upkey(){
  
  
  if(rovery>0){
 rovery=rovery-5
funct2()
funct()
}}
function downy(){
if(rovery<canvas.height-100){
  rovery=rovery+5
  funct2()
  funct()
}

 

}
function leftkey(){
  if(roverx>0){
    roverx=roverx-5
    funct2()
    funct()
  }
}
  function rightkey(){
if(roverx<canvas.width-100){
  roverx=roverx+5
  funct2()
  funct()

}
  }
 
