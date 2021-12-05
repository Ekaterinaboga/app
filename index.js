const span = document.querySelector('.number')
const btnPrev = document.querySelector('.prev')
const btnNext = document.querySelector('.next')
const sliders = document.querySelector('.sliders')
const dots = document.querySelector('.dots')
let index = 4;
span.innerHTML = index;

dots.onclick = function (event){

     if(event.target.className === 'dot'){

         const child = sliders.children[index]
         child.classList.remove('show')

         index = parseInt(event.target.innerHTML);
         span.innerHTML = index;

         const child1 = sliders.children[index]
         child1.classList.add('show')

     }




    // console.log(event.target.innerHTML)
    // console.log(event.target.className)
}

btnPrev.onclick = function (){
    const childBefore = sliders.children[index];
    childBefore.classList.remove('show');

    if(index === 0){
        index = 10;
    }else {
        index--;
    }
        const childAfter = sliders.children[index];
        childAfter.classList.add('show');

        span.innerHTML = index;

}

btnNext.onclick = function (){
    const child1 = sliders.children[index]
    child1.classList.remove('show')
    if(index === 10) {
        index = 0;
    }else {
        index++;
    }
    const child = sliders.children[index];
    child.classList.add('show');


    span.innerHTML = index;
}
