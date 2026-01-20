<template>
  <section class="contact contact-minimal sub-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="contact-info-section">
            <h2 class="text-u ls1 d-rotate wow mb-30">
              <span class="rotate-text">
                Let&apos;s make your <br />
                brand
                <span class="fw-200">brilliant!</span>
              </span>
            </h2>
            <p class="contact-description">
              If you would like to work with us or just want to get in touch,
              we'd love to hear from you!
            </p>
            
            <div class="contact-details mt-50">
              <div class="detail-item mb-40">
                <h6 class="mb-15">Address</h6>
                <p>Ibanda, Q. Nyalukemba, Avenue de la Residence</p>
              </div>
              
              <div class="detail-item mb-40">
                <h6 class="mb-15">Email</h6>
                <p>contact@sighteddesign.com</p>
              </div>
              
              <div class="detail-item">
                <h6 class="mb-15">Phone</h6>
                <div class="phone fz-24 fw-600">
                  <a href="tel:+243992304444">+243 992 304 444</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="contact-form-wrapper">
            <div class="sec-head mb-40">
              <h3 class="text-u ls1">
                Send a <span class="fw-200">message</span>
              </h3>
            </div>
            <form id="contact-form" method="post" action="contact.php">
              <div class="messages"></div>

              <div class="controls">
                <div class="form-group mb-25">
                  <input
                    id="form_name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div class="form-group mb-25">
                  <input
                    id="form_email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div class="form-group mb-25">
                  <input
                    id="form_subject"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />
                </div>

                <div class="form-group mb-30">
                  <textarea
                    id="form_message"
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="butn butn-full butn-bord radius-30"
                >
                  <span class="text">Send Message</span>
                </button>
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

<style scoped>
/* Import Montserrat Font */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

/* Modern Contact Page Styling */
.contact-minimal {
  padding-top: 60px !important;
  padding-bottom: 60px !important;
  position: relative;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
}

/* Contact Info Section (Left) */
.contact-info-section {
  padding-right: 40px;
  animation: slideInUp 0.6s ease-out;
  font-family: 'Montserrat', sans-serif;
}

.contact-info-section h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #1d1d1d;
  line-height: 1.3;
  margin-bottom: 20px;
  text-shadow: none;
  font-family: 'Montserrat', sans-serif;
}

.contact-description {
  font-size: 1.05rem;
  color: #444444;
  line-height: 1.8;
  margin-bottom: 40px;
  font-weight: 400;
  letter-spacing: 0.3px;
  font-family: 'Montserrat', sans-serif;
}

/* Contact Details */
.contact-details {
  animation: slideInUp 0.6s ease-out 0.1s backwards;
  font-family: 'Montserrat', sans-serif;
}

.detail-item {
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  padding: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  border-left: 3px solid transparent;
  font-family: 'Montserrat', sans-serif;
}

.detail-item:hover {
  background: rgba(85, 85, 85, 0.1);
  border-left-color: #555555;
  transform: translateX(8px);
}

.detail-item h6 {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1d1d1d;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
  font-family: 'Montserrat', sans-serif;
}

.detail-item p {
  font-size: 1rem;
  color: #555555;
  font-weight: 400;
  line-height: 1.6;
  font-family: 'Montserrat', sans-serif;
}

.phone a {
  position: relative;
  color: #555555;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: inline-block;
}

.phone a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #555555, #666666);
  transition: width 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.phone a:hover::after {
  width: 100%;
}

/* Contact Form Wrapper (Right) */
.contact-form-wrapper {
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  font-family: 'Montserrat', sans-serif;
}

.contact-form-wrapper::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(85, 85, 85, 0.1) 0%, transparent 70%);
  pointer-events: none;
  animation: float 6s ease-in-out infinite;
}

.contact-form-wrapper:hover {
  border-color: rgba(85, 85, 85, 0.4);
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 12px 48px rgba(85, 85, 85, 0.2);
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(20px, -20px);
  }
}

/* Form Section */
.contact-form-wrapper .sec-head {
  position: relative;
  z-index: 2;
  font-family: 'Montserrat', sans-serif;
}

.contact-form-wrapper h3 {
  color: #1d1d1d;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
}

/* Form Inputs */
.controls {
  position: relative;
  z-index: 2;
  font-family: 'Montserrat', sans-serif;
}

input[type="text"],
input[type="email"],
textarea {
  background: rgba(255, 255, 255, 0.8) !important;
  border: 1px solid rgba(0, 0, 0, 0.15) !important;
  border-radius: 8px !important;
  color: #333333 !important;
  padding: 13px 16px !important;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
  font-family: 'Montserrat', sans-serif !important;
  font-size: 0.95rem;
  font-weight: 400;
}

input[type="text"]::placeholder,
input[type="email"]::placeholder,
textarea::placeholder {
  color: rgba(0, 0, 0, 0.4) !important;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif !important;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  background: rgba(255, 255, 255, 0.95) !important;
  border-color: rgba(85, 85, 85, 0.7) !important;
  box-shadow: 0 0 25px rgba(85, 85, 85, 0.25) !important;
  outline: none !important;
  color: #1d1d1d !important;
}

/* Form Group */
.form-group {
  position: relative;
  font-family: 'Montserrat', sans-serif;
}

/* Button Styling */
.butn {
  position: relative;
  overflow: hidden;
.butn {
  position: relative;
  overflow: hidden;
  border-radius: 8px !important;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background: linear-gradient(135deg, #555555, #666666) !important;
  border: none !important;
  color: white !important;
  padding: 14px 32px !important;
  font-size: 1rem;
  width: 100%;
  font-family: 'Montserrat', sans-serif !important;
}

.butn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
  z-index: 1;
}

.butn:hover::before {
  width: 300px;
  height: 300px;
}

  font-family: 'Montserrat', sans-serif;
.butn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(85, 85, 85, 0.4);
}

.butn .text {
  position: relative;
  z-index: 2;
}

/* Responsive Design */
@media (max-width: 992px) {
  .contact-info-section {
    padding-right: 0;
    margin-bottom: 50px;
    padding-bottom: 50px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .contact-form-wrapper {
    padding: 30px;
  }
}

@media (max-width: 768px) {
  .contact-minimal {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }

  .contact-info-section h2 {
    font-size: 1.5rem;
  }

  .contact-description {
    font-size: 0.95rem;
  }

  .contact-form-wrapper {
    padding: 25px;
    border-radius: 12px;
  }

  .contact-form-wrapper::before {
    width: 300px;
    height: 300px;
    top: -30%;
    right: -30%;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    padding: 11px 14px !important;
    font-size: 0.9rem;
  }

  .butn {
    padding: 12px 24px !important;
    font-size: 0.95rem;
  }

  .detail-item {
    padding: 15px;
    margin-bottom: 20px;
  }
}

}

/* Smooth Scroll Enhancement */
html {
  scroll-behavior: smooth;
}
</style>
