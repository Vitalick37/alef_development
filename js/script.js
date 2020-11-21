
// JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP
function testWebP(callback) {

    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
  // fixed menu*******************************************************
  $(document).ready(function () {

    let navPos, winPos, navHeight;

    function refreshVar() {
      navPos = $('.header').offset().top;
      navHeight = $('.header').outerHeight(true);
    }

    refreshVar();
    $(window).resize(refreshVar);


    $(window).scroll(function () {
      winPos = $(window).scrollTop();


      if (winPos > navPos) {
        $('.header').addClass('fixed shadow');

      } else {
        $('.header').removeClass('fixed shadow');

      }
    });
  });
window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let sortButton = document.querySelectorAll('.sort-button');
    let sortArrow = document.querySelectorAll('.sort__arrow');



    document.querySelector('.sort').addEventListener('click', function(e) {
        let target = e.target
        if (target && target.classList.contains('sort-button') || target && target.classList.contains('sort__arrow')) {
            for (let i = 0; i < sortButton.length; i++) {
                if (target == sortButton[i] || target == sortArrow[i]) {
                    sortArrow[i].classList.toggle('_active');
                    break;
                }
            }
        }

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////



let sortPrice = document.querySelector('.sort__price');

sortPrice.addEventListener('click', () => {
    sortPrice.classList.toggle('_property');
    if (sortPrice.classList.contains('_property')) {
        sortList('data-price');
    } else {
        sortListDesc('data-price');
    }
    
})

let sortAge = document.querySelector('.sort__age');

sortAge.addEventListener('click', () => {
    sortPrice.classList.toggle('_property');
    if (sortPrice.classList.contains('_property')) {
        sortList('data-age');
    } else {
        sortListDesc('data-age');
    }
   
})

    
    function sortList(sortType) {
        let items = document.querySelector('.cards__wrapper');
        for (let i = 0; i < items.children.length - 1; i++) {
            for (let j = i; j < items.children.length; j++) {
                if (+items.children[i].getAttribute(sortType) > +items.children[j].getAttribute(sortType)) {
                    console.log(1);
                    let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                    insertAfter(replacedNode, items.children[i]);
                }
            }
        }
    }
    
    function sortListDesc(sortType) {
        let items = document.querySelector('.cards__wrapper');
        for (let i = 0; i < items.children.length - 1; i++) {
            for (let j = i; j < items.children.length; j++) {
                if (+items.children[i].getAttribute(sortType) < +items.children[j].getAttribute(sortType)) {
                    console.log(1);
                    let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                    insertAfter(replacedNode, items.children[i]);
                }
            }
        }
    }
    
    
    function insertAfter(elem, refElem) {
        return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    }



});
$(document).ready(function() {
	
	//CHECKBOX
	$.each($('.checkbox'), function(index, val) {
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.checkbox', function(event) {
		if($(this).hasClass('active')){
			$(this).find('input').prop('checked',false);
		}else{
			$(this).find('input').prop('checked',true);
		}
		$(this).toggleClass('active');
		
		return false;
    });
});
  // скролл

    'use strict';

  let scrollElem = document.querySelector('.pageup');

  window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 480 || document.documentElement.scrollTop > 480) {

          scrollElem.style.display = "flex";
      } else {
          scrollElem.style.display = "none";
      }
  })

  let timeOut;

  function goUp() {
      let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
      if (top > 0) {
          window.scrollBy(0, -100);
          timeOut = setTimeout('goUp()', 20);
      } else clearTimeout(timeOut);
  }

  scrollElem.addEventListener('click', goUp);


window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let cardSelected = document.querySelectorAll('.card__selected'),
        cardSelectedAdd = document.querySelectorAll('.card__selected-add'),
        cardSelectedClose = document.querySelectorAll('.card__selected-close');

    cardSelected.forEach((item, i) => item.addEventListener('click', () => {
        cardSelectedAdd[i].classList.toggle('show');
    }));
    cardSelectedClose.forEach((item, i) => item.addEventListener('click', () => {
        if (cardSelectedAdd[i].classList.contains('show')) {
            cardSelectedAdd[i].classList.remove('show');
        }
    }));


});
