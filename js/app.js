window.addEventListener('DOMContentLoaded', () => {
    console.log('Contenido cargado')
})

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