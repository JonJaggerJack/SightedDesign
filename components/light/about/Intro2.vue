<template>
  <section class="page-intro-cerv section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 rest">
          <div class="cont">
            <div class="mb-40">
              <h2 class="fz-100 numb-font">1.</h2>
            </div>
            <h4>Our Mission</h4>
            <div class="text mt-30">
              <p>
                Logo design, Poster and banners design, Wedding photography and videography, Website design and development, and production of short films.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 rest">
          <div class="cont">
            <div class="mb-40">
              <h2 class="fz-100 numb-font">2.</h2>
            </div>
            <h4>Our Vision</h4>
            <div class="text mt-30">
              <p>
                To become a regional reference in the creative field by inspiring young people to go beyond their imaginations and earning their living through their talent.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 rest">
          <div class="cont">
            <div class="mb-40">
              <h2 class="fz-100 numb-font">3.</h2>
            </div>
            <h4>Why Us?</h4>
            <div class="text mt-30">
              <p>
                Since 2015, we've worked with over a hundred organizations throughout the country, Africa and the world, delivering creative excellence in every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});
</script>
