<template>
  <div style="padding: 60px 0; border-top: 1px solid rgba(0,0,0,.2); border-bottom: 1px solid rgba(0,0,0,.2);"></div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

const swiperOptions = {
  speed: 600,
  loop: true,

  breakpoints: {
    // when window width is >= 640px
    640: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    // when window width is >= 768px
    600: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
    },
    // when window width is >= 1200px
    1200: {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 40,
      centeredSlides: false,
    },
  },
};
</script>
