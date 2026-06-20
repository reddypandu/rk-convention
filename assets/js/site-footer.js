const footerScript = document.currentScript;

footerScript.insertAdjacentHTML(
  "beforebegin",
  `
  <footer id="footer" class="bg-dark text-white pt-12 md:pt-20 pb-8 md:pb-10 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
        <div class="text-center sm:text-left">
          <div class="flex items-center justify-center sm:justify-start gap-4 mb-6">
            <div class="w-14 h-14 md:w-20 md:h-20 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br flex items-center justify-center">
              <a href="index.html" aria-label="RK Convention home">
                <img src="assets/images/logo.png" alt="RK Convention A/C Logo - Premium Event Venue Hyderabad" class="w-full h-full object-cover" />
              </a>
            </div>
          </div>
          <p class="text-white/60 text-xs md:text-sm leading-relaxed mb-6">
            Perfect venue for every occasion. Two floors fully air-conditioned
            with a 12-passenger lift and cellar parking. Book now for weddings,
            events and celebrations in Hyderabad.
          </p>
          <div class="flex justify-center sm:justify-start gap-3">
            <a href="https://www.facebook.com/share/16R2AtnVok/" target="_blank" rel="noopener noreferrer"
              class="w-10 h-10 md:w-11 md:h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300 transform hover:scale-110"
              aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/rkconventionac" target="_blank" rel="noopener noreferrer"
              class="w-10 h-10 md:w-11 md:h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/rk-convention/about/" target="_blank" rel="noopener noreferrer"
              class="w-10 h-10 md:w-11 md:h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://maps.app.goo.gl/7tBrqPCJorqUHRQS7" target="_blank" rel="noopener noreferrer"
              class="w-10 h-10 md:w-11 md:h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300 transform hover:scale-110"
              aria-label="Google Maps"><i class="fas fa-map-marker-alt"></i></a>
          </div>
        </div>

        <div class="text-center sm:text-left">
          <h4 class="font-serif text-base md:text-lg mb-4 md:mb-6 text-secondary">Event Services</h4>
          <ul class="space-y-2 md:space-y-3 text-white/60 text-xs md:text-sm">
            <li><a href="weddings-reception.html" class="hover:text-secondary transition-colors">Weddings & Receptions</a></li>
            <li><a href="engagement-ceremonies.html" class="hover:text-secondary transition-colors">Engagement Ceremonies</a></li>
            <li><a href="birthday-anniversaries.html" class="hover:text-secondary transition-colors">Birthdays & Anniversaries</a></li>
            <li><a href="cultural-religious-events.html" class="hover:text-secondary transition-colors">Cultural & Religious Events</a></li>
            <li><a href="gallery.html" class="hover:text-secondary transition-colors">Event Gallery</a></li>
          </ul>
        </div>

        <div class="text-center sm:text-left">
          <h4 class="font-serif text-base md:text-lg mb-4 md:mb-6 text-secondary">Quick Links</h4>
          <ul class="space-y-2 md:space-y-3 text-white/60 text-xs md:text-sm">
            <li><a href="index.html" class="hover:text-secondary transition-colors">Home</a></li>
            <li><a href="about.html" class="hover:text-secondary transition-colors">About Us</a></li>
            <li><a href="booking.html" class="hover:text-secondary transition-colors">Book an Event</a></li>
            <li><a href="contact.html" class="hover:text-secondary transition-colors">Contact Us</a></li>
            <li><a href="terms-and-conditions.html" class="hover:text-secondary transition-colors">Terms & Conditions</a></li>
            <li><a href="privacy-policy.html" class="hover:text-secondary transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div class="text-center sm:text-left">
          <h4 class="font-serif text-base md:text-lg mb-4 md:mb-6 text-secondary">Contact Us</h4>
          <ul class="space-y-3 md:space-y-4 text-white/60 text-xs md:text-sm">
            <li class="flex items-center justify-center sm:justify-start gap-4 group">
              <div class="w-8 h-8 md:w-10 md:h-10 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary transition-colors">
                <i class="fas fa-phone text-secondary group-hover:text-primary"></i>
              </div>
              <a href="tel:+918977646303" class="group-hover:text-white transition-colors">8977646303</a>
            </li>
            <li class="flex items-center justify-center sm:justify-start gap-4 group">
              <div class="w-8 h-8 md:w-10 md:h-10 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary transition-colors">
                <i class="fas fa-envelope text-secondary group-hover:text-primary"></i>
              </div>
              <a href="mailto:rkconvention0@gmail.com" class="group-hover:text-white transition-colors">rkconvention0@gmail.com</a>
            </li>
            <li class="flex items-start justify-center sm:justify-start gap-4 group">
              <div class="w-8 h-8 md:w-10 md:h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                <i class="fas fa-map-marker-alt text-secondary group-hover:text-primary"></i>
              </div>
              <span class="group-hover:text-white transition-colors text-center sm:text-left">
                Beside ZB Garden Function Hall,<br />Ramnagar, Hyderabad - 500020, TS
              </span>
            </li>
            <li class="flex items-center justify-center sm:justify-start gap-4 group">
              <div class="w-8 h-8 md:w-10 md:h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                <i class="fas fa-clock text-secondary group-hover:text-primary"></i>
              </div>
              <span class="group-hover:text-white transition-colors">10 AM - 8 PM (Daily)</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-white/40 text-xs md:text-sm text-center md:text-left">
          <a href="https://www.edonesolution.com/" target="_blank" rel="noopener noreferrer">© 2026 <a href="https://sarstechno.com/">SARS Technologies</a>. All rights reserved.</a>
        </p>
        <button type="button" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
          class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-secondary to-lightgold text-primary rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 transform hover:scale-110"
          aria-label="Back to top">
          <i class="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  </footer>
`,
);
