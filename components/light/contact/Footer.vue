<template>
  <footer class="modern-footer pt-40">
    <div class="footer-container">
      <div class="container ontop">
        <div class="text-center pt-2 pb-2 sub-bg mt-2">
          <p class="fz-14">
            © 2026 Sighteddesign
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  gsap.set('.footer-container', { yPercent: -50 });
  const uncover = gsap.timeline({ paused: true });
  uncover.to('.footer-container', { yPercent: 0, ease: 'none' });

  ScrollTrigger.create({
    trigger: 'main',
    start: 'bottom bottom',
    end: '+=50%',
    animation: uncover,
    scrub: true,
  });
});
</script>

<style scoped>
.fz-14 {
  color: #ffffff !important;
}
</style>
