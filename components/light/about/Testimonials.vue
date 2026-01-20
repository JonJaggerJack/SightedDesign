<template>
  <section class="testimonials-modern">
    <div class="container">
      <div class="row mb-60">
        <div class="col-lg-12">
          <div class="sec-head text-center">
            <h6 class="sub-title main-color mb-15">Testimonials</h6>
            <h3 class="fw-600 testimonial-title">What Our Clients <span class="fw-200">Say?</span></h3>
            <p class="testimonial-subtitle">Hear from the organizations we've had the privilege to work with</p>
          </div>
        </div>
      </div>
      
      <div class="row">
        <div class="col-lg-12">
          <div
            class="testim-swiper-modern"
            data-carousel="swiper"
            data-loop="true"
            data-space="30"
          >
            <Swiper
              id="content-carousel-container-unq-testim"
              class="swiper-container"
              data-swiper="container"
              v-bind="swiperOptions"
            >
              <SwiperSlide v-for="(item, i) in data.slice(0, 3)" :key="i">
                <div class="testimonial-card">
                  <div class="testimonial-content">
                    <div class="star-rating">
                      <span v-for="n in 5" :key="n" class="star">★</span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="50"
                      viewBox="0 0 256.721 208.227"
                      class="quote-icon"
                    >
                      <path
                        data-name="Path"
                        d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                        transform="translate(121.55 640.568)"
                        fill="none"
                        stroke="#555555"
                        stroke-width="1"
                        opacity="0.3"
                      ></path>
                    </svg>
                    <p class="testimonial-text">{{ item.desc }}</p>
                    <div class="testimonial-author">
                      <div class="author-img">
                        <img :src="item.img" :alt="item.name" />
                      </div>
                      <div class="author-info">
                        <h5 class="author-name">{{ item.name }}</h5>
                        <span class="author-title">{{ item.subName }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="swiper-arrow-control control-modern">
            <div class="swiper-button-prev modern-btn">
              <span class="ti-arrow-left"></span>
            </div>
            <div class="swiper-button-next modern-btn">
              <span class="ti-arrow-right"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '@/data/testimonials.json';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
const swiperOptions = {
  modules: [Navigation],
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-arrow-control swiper-button-next',
    prevEl: '.swiper-arrow-control swiper-button-prev',
  },
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

.testimonials-modern {
  position: relative;
  padding: 80px 0;
  background: linear-gradient(135deg, rgba(29, 29, 29, 0.02) 0%, rgba(85, 85, 85, 0.02) 100%);
}

.sec-head {
  animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) backwards;
}

.testimonial-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1d1d1d;
  margin-bottom: 0.5rem;
}

.testimonial-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  color: #666666;
  font-weight: 400;
  margin-top: 1rem;
}

.mb-60 {
  margin-bottom: 3rem;
}

.testim-swiper-modern {
  position: relative;
}

.testimonial-card {
  height: 100%;
  animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) backwards;
}

.testimonial-content {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(85, 85, 85, 0.1);
  border-radius: 16px;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.testimonial-content::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(85, 85, 85, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.testimonial-card:hover .testimonial-content {
  transform: translateY(-8px);
  border-color: rgba(85, 85, 85, 0.2);
  box-shadow: 0 20px 60px rgba(85, 85, 85, 0.1);
  background: rgba(255, 255, 255, 0.95);
}

.testimonial-card:hover .testimonial-content::before {
  opacity: 1;
}

.star-rating {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.star {
  font-size: 1.2rem;
  color: #555555;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.testimonial-card:hover .star {
  color: #1d1d1d;
  transform: scale(1.1);
}

.quote-icon {
  margin-bottom: 1rem;
  transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.testimonial-card:hover .quote-icon {
  transform: scale(1.1);
}

.testimonial-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  color: #444444;
  margin: 1.5rem 0;
  font-weight: 400;
  flex-grow: 1;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(85, 85, 85, 0.1);
  margin-top: 1.5rem;
}

.author-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.author-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #1d1d1d;
  margin: 0;
}

.author-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  color: #555555;
  font-weight: 500;
  margin-top: 0.25rem;
}

.control-modern {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2.5rem;
  position: relative !important;
}

.modern-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(85, 85, 85, 0.2);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  color: #1d1d1d;
  font-size: 1.2rem;
}

.modern-btn:hover {
  background: rgba(85, 85, 85, 0.1);
  border-color: rgba(85, 85, 85, 0.3);
  transform: scale(1.1);
  box-shadow: 0 10px 30px rgba(85, 85, 85, 0.1);
}

/* div.swiper-wrapper - Swiper container styling */
/* .swiper-wrapper {
  display: flex;
  transition-timing-function: linear;
  position: relative;
} */

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .testimonial-title {
    font-size: 1.8rem;
  }

  .testimonial-subtitle {
    font-size: 1rem;
  }

  .testimonial-content {
    padding: 1.5rem;
  }

  .control-modern {
    gap: 0.5rem;
  }

  .modern-btn {
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }
}
</style>
