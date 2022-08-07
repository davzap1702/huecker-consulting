//Header
const headerURL = 'templates/header.html'
fetch(headerURL)
    .then(res => res.text())
    .then(data => fetchHeader(data));

function fetchHeader(data) {
    document.body.insertAdjacentHTML('afterbegin', data)
    const hamMenu = document.querySelector('#hamburger-menu')
    if (hamMenu) {
        hamMenu.addEventListener('click', () => {
            document.querySelector('.header_nav').classList.toggle('hide')
        })
    }
}
const footerURL = 'templates/footer.html'
fetch(footerURL)
    .then(res => res.text())
    .then(data => fetchFooter(data))

function fetchFooter(data) {
    document.body.insertAdjacentHTML('beforeend', data)
}

//Carousel functionality
const expandArrow = '<i class="fa-solid fa-angle-up"></i>';
const collapseArrow = '<i class="fa-solid fa-angle-down"></i>';
const carouselTitle = document.querySelectorAll('.faq__accordion-wrapper--title');

carouselTitle.forEach( title => {
    title.addEventListener('click', e => {
try {
    if(e.target.parentElement.children[2].classList.contains('hide')){
        e.target.parentElement.children[2].classList.remove('hide')
    }else{
        e.target.parentElement.children[2].classList.add('hide')
    }
} catch (error) {
    e.target.parentElement.click()
}
        
    })
})


// const arrowButtons = document.querySelectorAll('.faq__accordion-wrapper--title > span');
// const expandArrow = '<i class="fa-solid fa-angle-up"></i>';
// const collapseArrow = '<i class="fa-solid fa-angle-down"></i>';
// arrowButtons.forEach(button => {
//     button.addEventListener('click', e => {
//         if (e.target.parentElement.parentElement.parentElement.children[2].classList.contains('hide')) {
//             e.target.parentElement.parentElement.parentElement.children[2].classList.remove('hide')
//         } else {
//             e.target.parentElement.parentElement.parentElement.children[2].classList.add('hide')
//         }
//         if (e.target.parentElement.innerHTML == expandArrow) {
//             e.target.parentElement.innerHTML = collapseArrow
//         } else {
//             e.target.parentElement.innerHTML = expandArrow
//         }
//     })
// })