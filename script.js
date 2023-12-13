// const dropdowns = document.querySelectorAll('.dropdown-menu-content')

// dropdowns.forEach((dropdown) => {
//     dropdown.addEventListener('hover', (event) => {
//         event.preventDefault()
//         dropdown.classList.toggle('menu-open')
//     })
// })

const words = ['27 avril 2024']
let i = 0
const speed = 100

function wordflick() {
    const banner = document.querySelector('.banner')
    const text = words[0]
    let index = 0

    function animateText() {
        banner.textContent = text.slice(0, index)
        index++
        if (index <= text.length) {
            setTimeout(animateText, speed)
        } else {
            // Une fois tous les caractères affichés, le texte reste statique
            banner.textContent = text
        }
    }

    animateText()
}

document.addEventListener('DOMContentLoaded', function () {
    wordflick()
})

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header-other-pages')

    header.innerHTML = `
    <div class="header-banner">
        <div class="header-banner-logo-container-other-pages"
            ><a href="../../index.html" id="logo"
                ><img src="../../assets/logo2.png" alt="logo" /></a
        ></div>

        <nav id="nav" class="nav-other-pages">
        <ul>
        <li class="dropdown-menu">
            <a href="#">L'Evénement</a>
            <ul class="dropdown-menu-content">
                <li
                    ><a href="./presentation-course.html"
                        >Présentation de la course</a
                    ></li
                >
                <li
                    ><a href="./presentation-ile-d-arz.html"
                        >Présentation de l'Île d'Arz</a
                    ></li
                >
                <li
                    ><a href="./nos-engagements.html"
                        >Nos engagements</a
                    ></li
                >
                <li
                    ><a href="./sponsors-partenaires.html"
                        >Nos sponsors et partenaires</a
                    ></li
                >
            </ul>
        </li>
        <li class="dropdown-menu">
            <a href="#">Informations pratiques</a>
            <ul class="dropdown-menu-content">
                <li
                    ><a href="./comment-venir.html"
                        >Comment venir ?</a
                    ></li
                >
                <li
                    ><a href="./transfert-sacs.html"
                        >Transfert des sacs du départ à
                        l'arrivée</a
                    ></li
                >
                <li
                    ><a href="./restauration-buvette.html"
                        >Restauration buvette sur place</a
                    ></li
                >
                <li
                    ><a href="./devenez-benevoles.html"
                        >Devenez bénévole !</a
                    ></li
                >
            </ul>
        </li>
        <li class="dropdown-menu">
            <a href="#">S'inscrire</a>
            <ul class="dropdown-menu-content">
                <li
                    ><a href="#"
                        >Lien vers l'inscription</a
                    ></li
                >
                <li><a href="#">Lien vers la bourse</a></li>
                <li
                    ><a href="#"
                        >Lien vers la vérification
                        d'inscription</a
                    ></li
                >
            </ul>
        </li>
        <li class="dropdown-menu">
            <a href="#">Galerie</a>
            <ul class="dropdown-menu-content">
                <li><a href="./photos.html">Photos</a></li>
                <li><a href="./videos.html">Vidéos</a></li>
                <li><a href="./presse.html">Presse</a></li>
            </ul>
        </li>
        <li class="dropdown-menu">
            <div>
                <a href="#"
                    ><i
                        class="fa-brands fa-facebook"
                        style="color: #ffffff"
                    ></i
                ></a>
                <a href="#"
                    ><i
                        class="fa-brands fa-instagram"
                        style="color: #ffffff"
                    ></i
                ></a>
            </div>
        </li>
    </ul>
        </nav>
    </div>

    `
})

document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('footer')
    footer.innerHTML = `<div>
    <a href="#"
        ><i
            class="fa-brands fa-facebook"
            style="color: #ffffff"
        ></i
    ></a>
    <a href="#"
        ><i
            class="fa-brands fa-instagram"
            style="color: #ffffff"
        ></i
    ></a>
</div>
<p>© 2024 Tous droits réservés</p>`
})
