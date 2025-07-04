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
        ><a href="https://www.facebook.com/profile.php?id=61571407392167&mibextid=wwXIfr&rdid=eSiZlJlx5zLZSRn5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15iQoT7ZXt%2F%3Fmibextid%3DwwXIfr#"
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
                    <li
                                        ><a
                                            href="https://www.sportinnovation.fr/Evenements/Resultats/7052"
                                            >Résultats 2025</a
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
                            >Comment se rendre à l'île d'Arz ?</a
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
                        ><a
                            href="https://www.nextrun.fr/course/inscriptions-avis/sport/3838/tour-de-l-ile-d-arz/2025#:~:text=Rendez%2Dvous%20le%20samedi%2017,%C3%A0%2010h30%20pour%2010%20kilom%C3%A8tres%20!&text=L'association%20COURIR%20A%20L'ILE%20D'ARZ."
                            >Lien vers l'inscription</a
                        ></li
                    >
                    <li
                        ><a href="./bourse-dossards.html"
                            >Lien vers la bourse aux dossards</a
                        ></li
                        >
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
                    <a href="https://www.facebook.com/profile.php?id=61571407392167&mibextid=wwXIfr&rdid=eSiZlJlx5zLZSRn5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15iQoT7ZXt%2F%3Fmibextid%3DwwXIfr#"
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
            </li>
        </ul>
    </nav>
</div>`
})

//Chargement du contenu du footer pour toutes les pages
// document.addEventListener('DOMContentLoaded', function () {
//     const footer = document.querySelector('footer')
//     footer.innerHTML = `<div>
//     <a href="#"
//         ><i
//             class="fa-brands fa-facebook"
//             style="color: #ffffff"
//         ></i
//     ></a>
//     <a href="https://www.instagram.com/tourdeliledarz/"
//         ><i
//             class="fa-brands fa-instagram"
//             style="color: #ffffff"
//         ></i
//     ></a>
// </div>
// <p>contact : pierre.briot.pb@gmail.com</p>
// <p class="copyright">© 2025 Tous droits réservés</p>`
// })

//Option 2 footer avec partenaire
document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('footer')
    footer.innerHTML = `
    <div class="footer-content">
        <div class="footer-column">
            <h3>Partenaire principal</h3>
            <a href="https://www.gba-avocats.com/" target="_blank" rel="noopener noreferrer">
                <img src="./assets/Logo-GBA-Blanc.png" alt="Logo GBA">
            </a>
        </div>

        <div class="footer-column">
            <h3>Nos réseaux sociaux</h3>
            <div class="footer-social">
                <a href="https://www.instagram.com/tourdeliledarz/" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61571407392167&mibextid=wwXIfr&rdid=eSiZlJlx5zLZSRn5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15iQoT7ZXt%2F%3Fmibextid%3DwwXIfr#" target="_blank">
                    <i class="fa-brands fa-facebook"></i>
                </a>
            </div>
        </div>

        <div class="footer-column">
            <h3>Contact</h3>
            <p>course@iledarz.org</p>
        </div>
    </div>

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

//Gestion de la lightbox
document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0
    const images = document.querySelectorAll('.gallery img')
    const lightbox = document.getElementById('lightbox')
    const lightboxImg = document.getElementById('lightbox-img')
    const closeBtn = document.querySelector('.close-btn')
    const nextBtn = document.querySelector('.next-btn')
    const prevBtn = document.querySelector('.prev-btn')

    if (images.length === 0) {
        console.error('Aucune image trouvée dans .gallery !')
        return
    }

    // Ouvrir la lightbox au clic sur une image
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index
            updateLightbox()
            lightbox.classList.add('active')
        })
    })

    // Mettre à jour l'image affichée
    function updateLightbox() {
        lightboxImg.src = images[currentIndex].src
    }

    // Changer d'image
    function changeImage(direction) {
        currentIndex =
            (currentIndex + direction + images.length) % images.length
        updateLightbox()
    }

    // Fermer la lightbox
    function closeLightbox() {
        lightbox.classList.remove('active')
    }

    // Événements pour naviguer
    nextBtn.addEventListener('click', () => changeImage(1))
    prevBtn.addEventListener('click', () => changeImage(-1))
    closeBtn.addEventListener('click', closeLightbox)

    // Navigation au clavier
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'ArrowRight') changeImage(1)
            if (e.key === 'ArrowLeft') changeImage(-1)
            if (e.key === 'Escape') closeLightbox()
        }
    })
})
