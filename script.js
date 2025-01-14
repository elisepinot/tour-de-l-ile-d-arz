//Homepage : animation de la date au chargement de la page
function wordflick() {
    const words = ['17 mai 2025']
    let i = 0
    const speed = 100
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

//Chargement du contenu du header pour toutes les pages autres que la page d'accueil
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header-other-pages')

    header.innerHTML = ` <div class="top-bar-homepage">
    <div class="top-bar-logo-container"
        ><a href="index.html" class="logo-top-bar"
            ><img src="./assets/logo2.png" alt="logo" /></a
    ></div>
    <div class="menu-burger"
        ><i class="fa-solid fa-bars"></i><p>MENU</p></div
    >
    <div class="social-icons"
        ><a href="#"
            ><i
                class="fa-brands fa-facebook"
                style="color: #ffffff"
            ></i
        ></a>
        <a href="https://www.instagram.com/tourdeliledarz/"
            ><i
                class="fa-brands fa-instagram"
                style="color: #ffffff"
            ></i></a></div
></div>
<div class="header-banner">
    <button class="close-menu"><i class="fa-solid fa-xmark" style="color: #ffffff"></i
    ></button>

    <div class="header-banner-logo-container"
        ><a href="index.html" class="logo2"
            ><img src="./assets/logo2.png" alt="logo" /></a
    ></div>
    <nav class="nav-other-pages">
        <ul>
            <li class="dropdown-menu clickable">
                <a class="dropdown-menu-title" href="#"
                    >L'Evénement</a
                >
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
            <li class="dropdown-menu clickable">
                <a class="dropdown-menu-title" href="#"
                    >Informations pratiques</a
                >
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
            <li class="dropdown-menu clickable">
                <a class="dropdown-menu-title" href="#"
                    >S'inscrire</a
                >
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
            <li class="dropdown-menu clickable">
                <a class="dropdown-menu-title" href="#"
                    >Galerie</a
                >
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
</div>`
})

//Chargement du contenu du footer pour toutes les pages
document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('footer')
    footer.innerHTML = `<div>
    <a href="#"
        ><i
            class="fa-brands fa-facebook"
            style="color: #ffffff"
        ></i
    ></a>
    <a href="https://www.instagram.com/tourdeliledarz/"
        ><i
            class="fa-brands fa-instagram"
            style="color: #ffffff"
        ></i
    ></a>
</div>
<p>contact : course@iledarz.org</p>
<p class="copyright">© 2025 Tous droits réservés</p>`
})

document.addEventListener('DOMContentLoaded', function () {
    const menuBurger = document.querySelector('.menu-burger')
    const nav = document.getElementsByTagName('nav')[0]
    const closeMenu = document.querySelector('.close-menu')

    menuBurger.addEventListener('click', function () {
        nav.style.display = 'flex'
        closeMenu.style.display = 'block'
    })

    closeMenu.addEventListener('click', function () {
        nav.style.display = 'none'
        closeMenu.style.display = 'none'
    })

    function navVisibility() {
        if (window.innerWidth >= 1080 && nav.style.display === 'none') {
            // Si l'écran est de 1080px ou plus et le bouton close-menu n'est pas affiché,
            // alors affiche la nav
            nav.style.display = 'flex'
        }
    }

    window.addEventListener('resize', navVisibility)

    // const clickableItems = document.querySelectorAll('.clickable')
    // const submenus = document.querySelectorAll('.dropdown-menu-content')

    // clickableItems.forEach((item) => {
    //     item.addEventListener('click', function (event) {
    //         const submenu = this.querySelector('.dropdown-menu-content')
    //         toggleSubMenu(submenu)
    //         event.stopPropagation() // Évite la propagation de l'événement aux éléments parents
    //     })
    // })

    // function toggleSubMenu(submenu) {
    //     // Fermez tous les sous-menus
    //     // submenus.forEach((item) => {
    //     //     if (item !== submenu) {
    //     //         item.style.display = 'none'
    //     //     }
    //     // })

    //     // Toggle l'affichage du sous-menu actuel
    //     if (submenu.style.display === 'flex') {
    //         submenu.style.display = 'none'
    //     } else {
    //         submenu.style.display = 'flex'
    //     }
    // }
})

//Gestion de l'ouverture du menu-burger et des sous-menus
document.addEventListener('DOMContentLoaded', function () {
    let activeSubmenu = null

    const clickableItems = document.querySelectorAll('.clickable')

    clickableItems.forEach((item) => {
        item.addEventListener('click', function (event) {
            const submenu = this.querySelector('.dropdown-menu-content')

            if (activeSubmenu === submenu) {
                // Si le sous-menu est déjà actif, le masquer
                submenu.style.display = 'none'
                activeSubmenu = null
            } else {
                // Fermez le sous-menu actif s'il y en a un
                if (activeSubmenu) {
                    activeSubmenu.style.display = 'none'
                }

                // Afficher le sous-menu cliqué
                submenu.style.display = 'flex'
                activeSubmenu = submenu
            }

            // Empêche la propagation du clic pour éviter la fermeture immédiate du sous-menu
            event.stopPropagation()
        })
    })

    // Ajoute un gestionnaire d'événements pour fermer les sous-menus lors du clic n'importe où sur la page
    document.addEventListener('click', function () {
        if (activeSubmenu) {
            activeSubmenu.style.display = 'none'
            activeSubmenu = null
        }
    })

    // Empêche la fermeture du sous-menu lors du clic à l'intérieur du menu
    document
        .querySelector('.nav-homepage')
        .addEventListener('click', function (event) {
            event.stopPropagation()
        })
})
