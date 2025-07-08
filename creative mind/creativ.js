
  let slider = document.querySelector('.slider')
  let sliderlist = slider.querySelector('.list')
  let thumbnail = document.querySelector('.thumbnail')
  let thumbnailitems = thumbnail.querySelectorAll('.items')
  
  
  thumbnail.appendChild(thumbnailitems[0])
 function next(){
      moveSlider('next')
  }


  function prev(){
    moveSlider('prev')
}
  
 
  
  
  function moveSlider(direction){
      let slideritems = slider.querySelectorAll('.items')
      let thumbnailitems =document.querySelectorAll('.thumbnail .items')
      
     if(direction === 'next'){
      sliderlist.appendChild(slideritems[0])
      thumbnail.appendChild(thumbnailitems[0])
      slider.classList.add('next')
     }
     else{
      sliderlist.prepend(slideritems[slideritems.length - 1])
      thumbnail.prepend(thumbnailitems[thumbnailitems.length - 1])
      slider.classList.add('prev')
     }
  }


  
  slider.addEventListener('animationend',function(direction){
    if (direction === 'next'){
      slider.classList.remove('next')
    }
    else{
      slider.classList.remove('prev')
    }
  },{once:true})
  