/* Clergy Hub — shared interactivity for every page. */
document.addEventListener("DOMContentLoaded", function () {
  
  /* ---------------------------------------------------------------- */
  /* Navbar: transparent at top (home), solid everywhere else         */
  /* ---------------------------------------------------------------- */
  var navbar = document.querySelector(".navbar");
  var hasHero = document.querySelector(".hero") !== null;

  if (navbar) {
    if (hasHero) {
      // Homepage behavior: transparent until scrolled
      var updateNav = function () {
        if (window.scrollY > 40) {
          navbar.classList.add("is-scrolled");
        } else {
          navbar.classList.remove("is-scrolled");
        }
      };
      
      // Initialize the navbar state on page load
      updateNav();
      
      // Listen for scroll events
      window.addEventListener("scroll", updateNav, { passive: true });
    } else {
      // Sub-page behavior: solid immediately on load
      navbar.classList.add("is-scrolled");
    }
  }

  /* ---------------------------------------------------------------- */
  /* Mobile menu toggle                                               */
  /* ---------------------------------------------------------------- */
  var navToggle = document.querySelector(".nav-toggle");
  var mobileMenu = document.querySelector(".mobile-menu");
  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("is-open");
      var expanded = mobileMenu.classList.contains("is-open");
      navToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
      });
    });
  }

  /* ---------------------------------------------------------------- */
  /* Contact modal                                                    */
  /* ---------------------------------------------------------------- */
  var modal = document.getElementById("contactModal");
  var openTriggers = document.querySelectorAll("[data-open-contact]");
  var closeTriggers = document.querySelectorAll("[data-close-contact]");

  function openModal() {
    if (!modal) return;
    modal.classList.add("is-open");
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    document.body.classList.remove("modal-open");
  }

  openTriggers.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      
      // New Logic: Check for a preset message attribute and populate the textarea
      var presetMessage = btn.getAttribute("data-demo-message");
      var messageInput = document.getElementById("message");
      
      if (presetMessage && messageInput) {
        messageInput.value = presetMessage;
      }
      
      openModal();
    });
  });
  
  closeTriggers.forEach(function (btn) {
    btn.addEventListener("click", closeModal);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  /* ---------------------------------------------------------------- */
  /* Contact form submit (no backend — swaps in a confirmation state) */
  /* ---------------------------------------------------------------- */
  var contactForm = document.getElementById("contactForm");
  var contactSuccess = document.getElementById("contactSuccess");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      contactForm.classList.add("is-hidden");
      if (contactSuccess) contactSuccess.classList.add("is-visible");
    });
  }

  /* ---------------------------------------------------------------- */
  /* Newsletter form (no backend — placeholder submit handler)        */
  /* ---------------------------------------------------------------- */
  document.querySelectorAll(".newsletter-form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector("input[type='email']");
      if (input) {
        input.value = "";
        input.placeholder = "Thanks — you're on the list!";
      }
    });
  });

  /* ---------------------------------------------------------------- */
  /* Hero Text Dodge Effect                                           */
  /* ---------------------------------------------------------------- */
  var heroSection = document.querySelector('.hero');
  var dodgeElements = document.querySelectorAll('.dodge-element');

  if (heroSection && dodgeElements.length > 0) {
    heroSection.addEventListener('mousemove', function(e) {
      var mouseX = e.clientX;
      var mouseY = e.clientY;

      dodgeElements.forEach(function(el) {
        var rect = el.getBoundingClientRect();
        
        // Find the exact center coordinates of the text element
        var elCenterX = rect.left + rect.width / 2;
        var elCenterY = rect.top + rect.height / 2;

        // Calculate the distance between the cursor and the element's center
        var distX = mouseX - elCenterX;
        var distY = mouseY - elCenterY;
        var distance = Math.sqrt(distX * distX + distY * distY);

        // The radius (in pixels) around the text that will trigger the dodge
        var triggerDistance = 250; 

        if (distance < triggerDistance) {
          // The closer the mouse, the harder the text pushes away
          var pushForce = (triggerDistance - distance) * 0.3; 
          var angle = Math.atan2(distY, distX);
          
          // Calculate the push trajectory (opposite to the mouse approach angle)
          var pushX = -Math.cos(angle) * pushForce;
          var pushY = -Math.sin(angle) * pushForce;

          el.style.transform = "translate(" + pushX + "px, " + pushY + "px)";
        } else {
          // Snap back to original position if the cursor is outside the trigger zone
          el.style.transform = "translate(0px, 0px)";
        }
      });
    });

    // Reset the text completely when the mouse leaves the hero section
    heroSection.addEventListener('mouseleave', function() {
      dodgeElements.forEach(function(el) {
        el.style.transform = "translate(0px, 0px)";
      });
    });
  }
});