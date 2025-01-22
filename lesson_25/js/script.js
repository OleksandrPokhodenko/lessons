// Строгий режим
"use strict"

/*
Задача №1
Дано в html: три елементи з класом item.
При кліку на кожен з елментів додати клас active,
при повторному кліку прибрати клас 
*/

function changeClass(e){
    if(e.target.closest('.item')) {
        let el = e.target
        el.classList.toggle('active')
    }
}

const mainElement = document.querySelector('.page')
mainElement.addEventListener('click', changeClass)

/*
Задача №2
Дано в css/scss: body прозорий
При повному завантаженню сторінки додати клас до body який прибирає прозорість.
*/

const bodyEl = document.body

window.onload = () => {
    bodyEl.classList.add('visible')
}

/*
Задача №3
Дано в html: header main footer
При наведенні курсору на header змінювати колір фону у footer.
Коли курсор йде з header повертати початковий фон для footer.
*/

const headerEl = document.querySelector('.header')

headerEl.addEventListener('mouseenter', () => {
    const footerEl = document.querySelector('.footer')
    footerEl.style.backgroundColor = 'rgb(121, 121, 208)'
})
headerEl.addEventListener('mouseleave', () => {
    const footerEl = document.querySelector('.footer')
    footerEl.style.backgroundColor = 'rgb(77, 77, 155)'
})

/*
Задача №4
Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.
*/

const el = document.querySelector('.number-item')
let condition = true

function changeNumber(el, atrOne, atrTwo){
    let number = parseFloat(el.getAttribute(atrOne))
    let time = parseFloat(el.getAttribute(atrTwo))
    let i = 0
    if(condition){
        let timer = setInterval(() => {
            condition = false
            el.innerText = ++i
            if(i === number) {
                clearInterval(timer)}
            },time)
        }
    }

    function windowScroll(el, atrOne, atrTwo){
        if(el.getBoundingClientRect().top - window.innerHeight <= 0){
        changeNumber(el, atrOne, atrTwo)
        }
    }

    window.addEventListener('scroll', () => {
        windowScroll(el, 'data-number', 'data-time')
    }
)
