<template>
  <section class="about-crev section-padding position-re">
    <div class="container">
      <div class="row lg-marg">
        <div class="col-lg-6">
          <div class="left-block mt-100 md-mb50">
            <div class="d-flex align-items-center">
              <div>
                <div class="info">
                  <!-- <h6>
                    Sam <br />
                    Peterson
                  </h6> -->
                  <!-- <p class="nowrap">Ceo Manager</p> -->
                </div>
              </div>
              <div>
                <div class="img fit-img">
                  <img src="/light/assets/imgs/intro/5.JPEG" alt="" />
                </div>
              </div>
            </div>
            <div class="mz-shap">
              <svg
                height="100%"
                viewBox="0 0 610 547"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M116.134 529.548C116.134 538.642 123.506 546.015 132.6 546.015H211.63C211.635 546.015 211.638 546.011 211.638 546.007V546.007C211.638 546.003 211.642 545.999 211.646 545.999H592.691C601.786 545.999 609.158 538.627 609.158 529.533L609.157 251.366C609.157 242.272 601.785 234.899 592.691 234.899H401.097C392.003 234.899 384.631 227.527 384.631 218.433V112.465C384.631 103.371 377.259 95.999 368.164 95.999H214.466C205.372 95.999 198 88.6268 198 79.5327V16.4662C198 7.37219 190.628 0 181.534 0H88.4662C79.3722 0 72 7.37219 72 16.4662V104.534C72 113.628 79.3722 121 88.4662 121H166.917C176.011 121 183.383 128.372 183.383 137.466V273.565C183.383 282.659 176.011 290.031 166.917 290.031H116.134H116.134H16.5634C7.46936 290.031 0.0971666 297.403 0.0971666 306.497V445.923C0.0971666 455.017 7.46935 462.39 16.5634 462.39H99.6677C108.762 462.39 116.134 469.762 116.134 478.856V529.548Z"
                  fill="#1d1d1d"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="content full-width">
            <div class="sec-head mb-30">
              <h6 class="sub-title mb-15 main-color">About Us</h6>
              <h2>Your Imaging Resource - Professional Creative Services</h2>
            </div>
            <div class="row justify-content-end">
              <div class="col-lg-11">
                <div class="text">
                  <p>
                    At Sighted Design, we believe beauty can be seen in all things. We're dedicated to capturing your most important moments and transforming your creative vision into stunning reality. From photography to videography, infographics to UI/UX design, we bring passion and expertise to every project.
                  </p>
                </div>
                <div class="mt-50">
                  <NuxtLink to="/light/about" class="btn-link">
                    <span>Read More</span>
                    <svg class="icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l14 0"></path>
                      <path d="M13 18l6 -6"></path>
                      <path d="M13 6l6 6"></path>
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="line-overlay opacity-7">
      <svg
        viewBox="0 0 1728 1101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
          style="stroke-dasharray: 3246.53, 0"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import isInView from '@/common/isInView';

function handleShowProgressValues() {
  isInView({
    selector: '.skill-progress .progres',
    isElements: true,
    callback: (element) => {
      element.style.width = element.getAttribute('data-value');
    },
  });
}

onMounted(() => {
  window.addEventListener('scroll', handleShowProgressValues);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleShowProgressValues);
});
</script>

<style scoped>
.btn-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #555555;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border-bottom: 2px solid #555555;
  padding-bottom: 0.25rem;
}

.btn-link:hover {
  color: #1d1d1d;
  border-bottom-color: #1d1d1d;
  transform: translateX(4px);
}

.btn-link svg {
  transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.btn-link:hover svg {
  transform: translateX(2px);
}
</style>
