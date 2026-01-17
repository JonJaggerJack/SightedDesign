<template>
  <section class="related-articles section-padding sub-bg">
    <div class="container">
      <div class="sec-head mb-80">
        <h2 class="fz-40 fw-600">Related <span class="fw-200">Articles</span></h2>
      </div>
      <div class="row">
        <div class="col-lg-4 mb-40">
          <div class="article-card main-bg">
            <div class="article-image mb-20">
              <img
                src="/light/assets/imgs/blog/b/1.jpg"
                alt="Article"
                class="w-100"
              />
            </div>
            <div class="article-meta fz-12 opacity-7 mb-15">
              August 7, 2022
            </div>
            <h4 class="mb-15">
              <a href="/light/blog-details" class="hover-this">
                <span class="hover-anim">Utilizing mobile technology in the field</span>
              </a>
            </h4>
            <a href="/light/blog-details" class="go-more fz-14">
              <span class="text">Read more</span>
              <span class="icon ti-arrow-top-right"></span>
            </a>
          </div>
        </div>
        <div class="col-lg-4 mb-40">
          <div class="article-card main-bg">
            <div class="article-image mb-20">
              <img
                src="/light/assets/imgs/blog/b/3.jpg"
                alt="Article"
                class="w-100"
              />
            </div>
            <div class="article-meta fz-12 opacity-7 mb-15">
              August 6, 2022
            </div>
            <h4 class="mb-15">
              <a href="/light/blog-details" class="hover-this">
                <span class="hover-anim">Business meeting 2023 in San Francisco</span>
              </a>
            </h4>
            <a href="/light/blog-details" class="go-more fz-14">
              <span class="text">Read more</span>
              <span class="icon ti-arrow-top-right"></span>
            </a>
          </div>
        </div>
        <div class="col-lg-4 mb-40">
          <div class="article-card main-bg">
            <div class="article-image mb-20">
              <img
                src="/light/assets/imgs/blog/b/2.jpg"
                alt="Article"
                class="w-100"
              />
            </div>
            <div class="article-meta fz-12 opacity-7 mb-15">
              August 5, 2022
            </div>
            <h4 class="mb-15">
              <a href="/light/blog-details" class="hover-this">
                <span class="hover-anim">Working from home? Let's get started</span>
              </a>
            </h4>
            <a href="/light/blog-details" class="go-more fz-14">
              <span class="text">Read more</span>
              <span class="icon ti-arrow-top-right"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.related-articles {
  padding: 80px 0;
}

.article-card {
  padding: 30px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.article-card:hover {
  transform: translateY(-10px);
}

.article-image {
  border-radius: 8px;
  overflow: hidden;
}

.article-card h4 {
  color: #ffffff;
  font-size: 18px;
  line-height: 1.4;
}

.article-card a {
  color: #ffffff;
  text-decoration: none;
}

.article-meta {
  text-transform: uppercase;
  letter-spacing: 1px;
}

.go-more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.go-more .text {
  color: #ffffff;
}

.go-more .icon {
  transition: all 0.3s ease;
}

.go-more:hover .icon {
  transform: translate(3px, -3px);
}
</style>
