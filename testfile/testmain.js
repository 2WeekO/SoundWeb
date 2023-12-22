const slides = document.querySelector('.slides');
const slideImg = document.querySelectorAll('.slides li');
let currentIdx = 0;
const slideCount = slideImg.length;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slideWidth = 400;
const slideMargin = 100;

slideCount.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num){
    slides.style.left = -num * 500 + 'px';
    currentIdx = num;
}

prev.addEventListener('click',function(){
    if(currentIdx !==0) {
        moveSlide(currentIdx-1);
    }
});

next.addEventListener('click', function () { /* 마지막 슬라이드로 표시 됐을때는 다음 버튼 눌러도 아무런 반응 없게 하기 위해 currentIdx !==slideCount - 1 일때만 moveSlide 함수 불러옴 */ if (currentIdx !== slideCount - 1) { moveSlide(currentIdx + 1); } });


