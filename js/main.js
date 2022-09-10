window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector('.loader');
  setTimeout(function () {
    loader.style.opacity = 0;
    setTimeout(function () {
      loader.style.display = 'none';
    }, 1500)
  }, 2000)



  // novbar uzgaruvchilar
  let nextClick = document.querySelector('.next'),
    bars = document.querySelector('.click__left'),
    bar = document.querySelector('.click__left--end-list'),
    exitClick = document.querySelector('.icons--x'),
    extli = document.querySelector('.extLi'),
    clear = document.querySelector('.icons--xxx'),
    inputClear = document.querySelector('.input__clear'),
    // sorch 
    sorch = document.querySelector('.sorch--x'),
    poisk = document.querySelector('.poisk'),
    poiskExt = document.querySelector('.icons--xx'),
    globalSorch = document.querySelector('.sorch');


  nextClick.addEventListener('click', function () {
    bars.style.cssText = 'display: flex; animation-name: anime; ';
    bar.style.display = 'block';
    // console.log(1)
  })
  exitClick.addEventListener('click', function () {
    bars.style.cssText = 'display: none; ';
  })
  extli.addEventListener('click', function (event) {
    bars.style.cssText = 'display: none; ';
  })




  //sorch next ext
  poisk.addEventListener('click', () => {
    globalSorch.style.top = '0'
  })
  poiskExt.addEventListener('click', () => {
    globalSorch.style.top = '-525px'
  })
  //sorch > inputga
  clear.addEventListener('click', () => {
    inputClear.value = ''
    clear.style.display = 'none'
    sorch.style.display = 'block'
  })

  inputClear.addEventListener('click', () => {
    sorch.style.display = 'none'
    clear.style.display = 'block'
  })
  // shoop minu
  let shopping = document.querySelector('.shopping'),
    shoppingX = document.querySelector('.shopping-x'),
    beskit = document.querySelector('.beskit'),
    beskitExt = document.querySelector('.beskit__nav--icon');

  shoppingX.addEventListener('click', () => {
    beskit.style.cssText = 'transform: translateX(0);'
  })
  shopping.addEventListener('click', () => {
    beskit.style.cssText = 'transform: translateX(0);'
  })
  beskitExt.addEventListener('click', () => {
    beskit.style.cssText = 'transform: translateX(500px);'

  })

  //  ====================== slider corusel

  const slider = document.querySelector('.slider__corusel--sled'),
    leftArrow = document.querySelector('.left'),
    rightArrow = document.querySelector('.right'),
    indicatorParents = document.querySelector('.slider__controls ul')

  let sectionIndex = 0;

  leftArrow.addEventListener('click', () => {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 3;
    document.querySelector('.slider__controls .selectid').classList.remove('selectid')
    indicatorParents.children[sectionIndex].classList.add('selectid')
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)'
  })


  rightArrow.addEventListener('click', () => {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 0;
    document.querySelector('.slider__controls .selectid').classList.remove('selectid')
    indicatorParents.children[sectionIndex].classList.add('selectid')
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)'
  })

  document.querySelectorAll('.slider__controls li').forEach(function (indicator, ind) {
    indicator.addEventListener('click', () => {
      sectionIndex = ind;
      document.querySelector('.slider__controls .selectid').classList.remove('selectid')

      indicator.classList.add('selectid');
      slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)'

    })
  })


})

//================================ scroll animation
window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".scroll__animation");

  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

//================================ phone bars
let phoneBars = document.querySelector('.phone__bar'),
  phone = document.querySelector('.phone'),
  phoneX = document.querySelector('.icons--xxxxx');

phoneBars.addEventListener('click', () => {
  phone.style.display = 'flex';
})
phoneX.addEventListener('click', () => {
  phone.style.display = 'none'
})


//=========================------------ info index uchun
//====== malumotlar (info)


const tabs = document.querySelectorAll('.tabs_a'),
  tabContent = document.querySelectorAll('.box-right-foot'),
  headerParents = document.querySelector(".box-right-tabs-list");

function hideTabContent() {
  tabContent.forEach((item) => {
    item.style.display = 'none';
  });
  tabs.forEach((item) => {
    item.classList.remove('tabs__active');
  });
}

function showTabContent(i = 0) {
  tabContent[i].style.display = 'block';
  tabs[i].classList.add('tabs__active');
}

hideTabContent();
showTabContent();

headerParents.addEventListener('click', (event) => {
  const target = event.target;
  if (target && target.classList.contains('tabs_a')) {
    tabs.forEach((item, i) => {
      if (target == item) {
        hideTabContent();
        showTabContent(i);
      }
    })
  }
});

const minus = document.querySelector('.amount__actions--icon-minus'),
  plus = document.querySelector('.amount__actions--icon-plus'),
  input = document.querySelector('.num'),
  sum = document.querySelector('.sum');

let a = 1;
let b = sum.innerText;

plus.addEventListener('click', () => {
  a++;
  a = (a < 10) ? '0' + a : a;
  input.innerText = a;
});
console.log(b)
minus.addEventListener('click', () => {
  if (a > 1) {
    a--;
    a = (a < 10) ? '0' + a : a;
    input.innerText = a;
  }
})