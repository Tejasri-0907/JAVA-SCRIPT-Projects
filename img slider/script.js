let imgs =['a1.jpeg','alzheimer.jpg','a2.jpeg','a3.jpeg']

let image = document.getElementById('image')
let imgIndex = 1;
let leftarrow = document.querySelector('.left')
let rightarrow = document.querySelector('.right')

leftarrow.onclick = function(){
  imgIndex-=1
  if(imgIndex==0){
    leftarrow.style.display = 'none'
  }
  else{
    leftarrow.style.display = 'block'
  }
  image.style.animationPlayState = 'running'
  setTimeout(()=>{
    image.style.animationPlayState = 'paused'
    image.setAttribute('src','images/'+imgs[imgIndex])
  },1000)
  if(imgIndex<imgs.length-1){
    rightarrowtarrow.style.display = 'block'
  }
}

rightarrowtarrow.onclick = function(){
  imgIndex+=1
  if(imgIndex==imgs.length-1){
    rightarrow.style.display = 'none'
  }
  else{
    rightarrow.style.display = 'block'
  }
  image.style.animationPlayState = 'running'
  setTimeout(()=>{
    image.style.animationPlayState = 'paused'
    image.setAttribute('src','images/'+imgs[imgIndex])
  },1000)
  if(imgIndex>1){
    leftarrow.style.display = 'block'
  }
}