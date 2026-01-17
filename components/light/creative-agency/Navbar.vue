<template>
  <nav class="navbar navbar-expand-lg bord blur">
    <div class="container">
      <a class="logo icon-img-100" href="#">
        <!-- <img src="/light/assets/imgs/logo-light.png" alt="logo" /> -->
        <span class="logo-text">SIGHTEDDESIGN</span>
      </a>

      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link"
              href="/"
            >
              <span class="rolling-text">Home</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="/light/portfolio-gallery"
            >
              <span class="rolling-text">Gallery</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="/light/showcase-half-slider"
            >
              <span class="rolling-text">Creative Slider</span>
            </a>
          </li>
          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">About Us</span>
            </a>
            <ul class="dropdown-menu">
              <li class="dropdown-item">
                <a href="/light/page-about">
                  About Us
                </a>
              </li>
              <li class="dropdown-item">
                <a href="/light/page-services">
                  Services
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/light/page-team"> Our Team </a>
              </li>
              <li>
                <a class="dropdown-item" href="/light/page-team-single">
                  Team Details
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="/light/blog-list"
            >
              <span class="rolling-text">Blogs</span>
            </a>
          </li>
          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item"
          >
            <a class="nav-link" href="/light/page-contact">
              <span class="rolling-text">Contact Us</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="topnav">
        <div @click="toggleMenu" class="menu-icon cursor-pointer">
          <span class="icon ti-align-right"></span>
        </div>
      </div>
    </div>
  </nav>

  <div :class="`hamenu ${isOpen && 'open'}`">
    <div class="logo icon-img-100">
      <!-- <img src="/light/assets/imgs/logo-light.png" alt="" /> -->
      <span class="logo-text">SIGHTEDDESIGN</span>
    </div>
    <div @click="closeMenu" class="close-menu cursor-pointer ti-close"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <div class="menu-text">
            <div class="text">
              <h2>Menu</h2>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="menu-links">
            <ul class="main-menu rest">
              <li>
                <div class="o-hidden">
                  <a href="/" class="link cursor-pointer dmenu">
                    <span class="fill-text" data-text="Home"> Home </span>
                  </a>
                </div>
              </li>
              <li>
                <div class="o-hidden">
                  <a href="/light/portfolio-gallery" class="link cursor-pointer dmenu">
                    <span class="fill-text" data-text="Gallery"> Gallery </span>
                  </a>
                </div>
              </li>
              <li>
                <div class="o-hidden">
                  <a href="/light/showcase-half-slider" class="link cursor-pointer dmenu">
                    <span class="fill-text" data-text="Creative Slider"> Creative Slider </span>
                  </a>
                </div>
              </li>
              <li
                @click="toggleSubMenu"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
              >
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu">
                    <span class="fill-text" data-text="About Us"> About Us </span>
                    <i></i>
                  </div>
                </div>
                <div class="sub-menu no-bord">
                  <ul>
                    <li>
                      <a href="/light/page-about" class="sub-link">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/light/page-services" class="sub-link">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="/light/page-team" class="sub-link">
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a href="/light/page-team-single" class="sub-link">
                        Team Details
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="o-hidden">
                  <a href="/light/blog-list" class="link cursor-pointer dmenu">
                    <span class="fill-text" data-text="Blogs"> Blogs </span>
                  </a>
                </div>
              </li>
              <li>
                <div class="o-hidden">
                  <a href="/light/page-contact" class="link cursor-pointer dmenu">
                    <span class="fill-text" data-text="Contact Us"> Contact Us </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="cont-info">
            <div class="item mb-50">
              <h6 class="sub-title mb-15 opacity-7">Address</h6>
              <h5>
                Ibanda, Q. Nyalukemba <br />
                Avenue de la Residence
              </h5>
            </div>
            <div class="item mb-50">
              <h6 class="sub-title mb-15 opacity-7">Social Media</h6>
              <ul class="rest social-text">
                <li class="mb-10">
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">Facebook</span>
                  </a>
                </li>
                <li class="mb-10">
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">Twitter</span>
                  </a>
                </li>
                <li class="mb-10">
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="item mb-40">
              <h6 class="sub-title mb-15 opacity-7">Contact Us</h6>
              <h5>
                <a href="#0">contact@sighteddesign.com</a>
              </h5>
              <h5 class="underline mt-10">
                <a href="#0">+243 992 304 444</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue';
import { ref } from 'vue';

function handleScroll() {
  const bodyScroll = window.scrollY;
  const navbar = document.querySelector('.navbar');

  if (bodyScroll > 300) navbar.classList.add('nav-scroll');
  else navbar.classList.remove('nav-scroll');
}

function handleDropdownMouseMove(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
}

function handleDropdownMouseLeave(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
}

function handleDropdownSideMouseMove(event) {
  event.currentTarget.querySelector('.dropdown-side').classList.add('show');
}

function handleDropdownSideMouseLeave(event) {
  event.currentTarget.querySelector('.dropdown-side').classList.remove('show');
}

function toggleSearch() {
  let form = document.querySelector('.navbar .search-form');
  let closeBtn = document.querySelector('.search-form .close-search');

  form.classList.toggle('open');
  if (form.classList.contains('open')) closeBtn.style.display = 'block';
  else closeBtn.style.display = 'none';
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const isOpen = ref(false);
function toggleMenu() {
  const hamenu = document.querySelector('.hamenu');
  isOpen.value = !isOpen.value;
  setTimeout(() => {
    isOpen.value == false
      ? (hamenu.style.left = '-100%')
      : (hamenu.style.left = '0');
  }, 300);
}

function closeMenu() {
  const hamenu = document.querySelector('.hamenu');

  isOpen.value = false;
  setTimeout(() => {
    hamenu.style.left = '-100%';
  }, 300);
}

function handleMouseEnter(event) {
  document.querySelectorAll('ul.main-menu li').forEach((item) => {
    item.classList.add('hoverd');
  });
  event.currentTarget.classList.remove('hoverd');
}

function handleMouseLeave() {
  document
    .querySelectorAll('ul.main-menu li')
    .forEach((item) => item.classList.remove('hoverd'));
}
function toggleSubMenu(event) {
  const subMenu = event.currentTarget.querySelector('.sub-menu');
  const SubMenu2 = event.currentTarget.querySelector('.sub-menu2');
  if (subMenu) {
    if (subMenu.classList.contains('sub-open') && SubMenu2 == null) {
      document.querySelectorAll('.sub-menu').forEach((item) => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
        item.previousElementSibling.children[0].classList.remove('dopen');
      });
      subMenu.classList.remove('sub-open');
      subMenu.style.maxHeight = '0';
      subMenu.previousElementSibling.children[0].classList.remove('dopen');
    } else if (!subMenu.classList.contains('sub-open')) {
      if (SubMenu2 == null) {
        document.querySelectorAll('.sub-menu').forEach((item) => {
          item.classList.remove('sub-open');
          item.style.maxHeight = '0';
          item.previousElementSibling.children[0].classList.remove('dopen');
        });

        subMenu.classList.add('sub-open');
        subMenu.style.maxHeight = '450px';
        subMenu.previousElementSibling.children[0].classList.add('dopen');
      } else {
        subMenu.classList.add('sub-open');
        subMenu.style.maxHeight = '450px';
        subMenu.previousElementSibling.children[0].classList.add('dopen');
      }
    }
  }
}
function toggleSubMenu2(event) {
  const SubMenu2 = event.currentTarget.querySelector('.sub-menu2');
  if (SubMenu2) {
    if (SubMenu2.classList.contains('sub-open')) {
      event.currentTarget.querySelectorAll('.sub-menu2').forEach((item) => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
        item.previousElementSibling.children[0].classList.remove('dopen');
      });
      SubMenu2.classList.remove('sub-open');
      SubMenu2.style.maxHeight = '0';
      SubMenu2.previousElementSibling.children[0].classList.remove('dopen');
    } else if (!SubMenu2.classList.contains('sub-open')) {
      event.currentTarget.querySelectorAll('.sub-menu2').forEach((item) => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
        item.previousElementSibling.children[0].classList.remove('dopen');
      });
      SubMenu2.classList.add('sub-open');
      SubMenu2.style.maxHeight = '450px';
      SubMenu2.previousElementSibling.children[0].classList.add('dopen');
    }
  }
}
</script>

<style scoped>
/* Texte blanc pour le navbar header normal */
.navbar .navbar-nav .nav-link {
  color: #ffffff !important;
}

.navbar .navbar-nav .nav-link:hover {
  color: #f0f0f0 !important;
}

.navbar .navbar-nav .dropdown-menu {
  background-color: rgba(255, 255, 255, 0.1) !important;
  border: none !important;
  backdrop-filter: blur(10px) !important;
}

.navbar .navbar-nav .dropdown-menu .dropdown-item {
  color: #ffffff !important;
}

.navbar .navbar-nav .dropdown-menu .dropdown-item a {
  color: #ffffff !important;
}

.navbar .navbar-nav .dropdown-menu .dropdown-item a:hover {
  color: #ffffff !important;
}

.navbar .dropdown-menu {
  color: #ffffff !important;
}

.navbar .dropdown-menu .dropdown-item {
  color: #ffffff !important;
}

.navbar .dropdown-menu .dropdown-item a {
  color: #ffffff !important;
}

.navbar .navbar-nav .dropdown-menu .dropdown-item:hover {
  background-color: #333333;
  color: #ffffff;
}

/* Bouton hamburger blanc */
.menu-icon .icon {
  color: #ffffff !important;
  font-size: 24px;
}

.menu-icon:hover .icon {
  color: #f0f0f0 !important;
}

/* Sticky menu - Texte noir */
.navbar.nav-scroll .navbar-nav .nav-link {
  color: #000000 !important;
}

.navbar.nav-scroll .navbar-nav .nav-link:hover {
  color: #333333 !important;
}

.navbar.nav-scroll .navbar-nav .dropdown-menu {
  background-color: rgba(26, 26, 26, 0.1) !important;
  border-color: #333333 !important;
  backdrop-filter: blur(10px) !important;
}

.navbar.nav-scroll .navbar-nav .dropdown-menu .dropdown-item {
  color: #000000 !important;
  background-color: transparent !important;
}

.navbar.nav-scroll .navbar-nav .dropdown-menu .dropdown-item a {
  color: #000000 !important;
}

.navbar.nav-scroll .navbar-nav .dropdown-menu .dropdown-item:hover,
.navbar.nav-scroll .navbar-nav .dropdown-menu .dropdown-item:active {
  background-color: #e8e8e8 !important;
  color: #000000 !important;
}

.navbar.nav-scroll .navbar-nav .dropdown-menu .dropdown-item:hover a {
  color: #000000 !important;
}

.navbar.nav-scroll .menu-icon .icon {
  color: #000000 !important;
}

.navbar.nav-scroll .menu-icon:hover .icon {
  color: #333333 !important;
}

/* Logo Text Styling */
.logo .logo-text {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #ffffff;
  text-decoration: none;
  display: block;
  line-height: 1;
}

.navbar.nav-scroll .logo .logo-text {
  color: #000000;
}

.hamenu .logo .logo-text {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #1a1a1a;
}
</style>
