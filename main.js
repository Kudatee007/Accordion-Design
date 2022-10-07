const accord = Array.from(document.getElementsByClassName('content-container'))



accord.forEach((item)=>{
      item.addEventListener('click', ()=>{
           if(accord[0] === item){
            item.classList.toggle('active')
            accord[1].classList.remove('active')
            accord[2].classList.remove('active')
           }
          else if(accord[1] === item){
            item.classList.toggle('active')
            accord[0].classList.remove('active')
            accord[2].classList.remove('active')
           }else if(accord[2] === item){
            item.classList.toggle('active')
            accord[1].classList.remove('active')
            accord[0].classList.remove('active')
           }
      })

})


