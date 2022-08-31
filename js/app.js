//Header
const headerURL = 'templates/header.html'
let navBarLink;
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
    setActiveLink();
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

document.addEventListener('DOMContentLoaded', () => {
    carouselTitle[0].click()
})

carouselTitle.forEach(title => {
    title.addEventListener('click', e => {
        try {
            if (e.target.parentElement.children[2].classList.contains('hide')) {
                e.target.parentElement.children[2].classList.remove('hide')
                e.target.children[1].innerHTML = expandArrow;
            } else {
                e.target.parentElement.children[2].classList.add('hide')
                e.target.children[1].innerHTML = collapseArrow;

            }
        } catch (error) {
            e.target.parentElement.click()
        }

    })
});

//Set active link

//active-link


function setActiveLink() {
    const navBarLink = document.querySelectorAll('a.navbar-link')
    const headTitle = document.querySelectorAll('title');
    console.log(headTitle[0].textContent.split(' | ')[1]);

    console.log(navBarLink)

    navBarLink.forEach(link => {
        if (headTitle[0].textContent.split(' | ')[1] == link.textContent) {
            link.classList.add('active-link')
        }
    })
}


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