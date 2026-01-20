<template>
  <section class="contact section-padding sub-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="sec-head md-mb80">
            <h2 class="text-u ls1 d-rotate wow">
              <span class="rotate-text">
                Let&apos;s make your <br />
                brand
                <span class="fw-200">brilliant!</span>
              </span>
            </h2>
            <p class="mt-20 mb-20">
              If you would like to work with us or just want to get in touch,
              we'd love to hear from you!
            </p>
            <div class="row justify-content-center">
              <div class="col-md-4">
                <div class="morinfo mt-30">
                  <h6 class="mb-15">Address</h6>
                  <p>Ibanda, Q. Nyalukemba, Avenue de la Residence</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="morinfo mt-30">
                  <h6 class="mb-15">Email</h6>
                  <p>contact@sighteddesign.com</p>
                </div>
              </div>
            </div>
            <div class="phone fz-30 fw-600 mt-30 underline main-color">
              <a href="#0">+243 992 304 444</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 offset-lg-2 valign">
          <div class="full-width">
            <div class="sec-head mb-50 text-center">
              <h3 class="text-u ls1">
                Send a <span class="fw-200">message</span>
              </h3>
            </div>
            <form id="contact-form" method="post" action="contact.php">
              <div class="messages"></div>

              <div class="controls row">
                <div class="col-lg-6">
                  <div class="form-group mb-30">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group mb-30">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group mb-30">
                    <input
                      id="form_subject"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div class="mt-30">
                    <button
                      type="submit"
                      class="butn butn-full butn-bord radius-30"
                    >
                      <span class="text">Let&apos;s Talk</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const messages = ref('');
const sending = ref(false);

onMounted(() => {
  // Form handling logic can go here
});
</script>
