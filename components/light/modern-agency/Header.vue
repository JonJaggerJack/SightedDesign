<template>
  <header class="slider slider-prlx">
    <div class="swiper-container parallax-slider">
      <Swiper
        ref="swiperRef"
        class="swiper-container parallax-slider"
        v-bind="swiperOptions"
      >
        <SwiperSlide>
          <div
            class="bg-img valign"
            data-background="/light/assets/imgs/header/full/1.jpg"
            data-overlay-dark="4"
          >
            <div class="container">
              <div class="caption text-center">
                <h2 class="mb-30" data-swiper-parallax="-2000">Capture the Moment</h2>

                <h1>
                  <span data-swiper-parallax="-1000">Your Imaging Resource</span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="bg-img valign"
            data-background="/light/assets/imgs/header/full/3.jpg"
            data-overlay-dark="4"
          >
            <div class="container">
              <div class="caption text-center">
                <h2 class="mb-30" data-swiper-parallax="-2000">
                  Photography, Videography
                </h2>
                <h1>
                  <span data-swiper-parallax="-1000">& Creative Design</span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="bg-img valign"
            data-background="/light/assets/imgs/header/full/4.jpg"
            data-overlay-dark="4"
          >
            <div class="container">
              <div class="caption text-center">
                <h2 class="mb-30" data-swiper-parallax="-2000">Transform Your Vision</h2>
                <h1>
                  <span data-swiper-parallax="-1000">Into Stunning Reality</span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="swiper-pagination"></div>
  </header>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Parallax, Autoplay } from 'swiper';
import { onMounted, ref } from 'vue';
//= Common Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

const swiperRef = ref(null);

// Initialize background images when component is mounted
onMounted(() => {
  loadBackgroudImages();
});

const swiperOptions = {
  modules: [Parallax, Pagination, Autoplay],
  spaceBetween: 30,
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  observer: true,
  observeParents: true,
};
</script>
