/* ============================================
   WAAREE ENERGIES LIMITED - JAVASCRIPT
   INTERACTIVITY AND FORM VALIDATION
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  // Initialize components
  initNavigation();
  initFormValidation();
  initSmoothScroll();
  initScrollAnimations();
});

/* ============================================
   NAVIGATION - HAMBURGER MENU
   ============================================ */

function initNavigation() {
  const hamburger = document.querySelector('.hamburger-menu');
  const navbar = document.querySelector('.navbar-nav');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navbar.classList.toggle('active');
    });
  }

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (hamburger) {
        hamburger.classList.remove('active');
        navbar.classList.remove('active');
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (event) {
    if (hamburger && !hamburger.contains(event.target) && !navbar.contains(event.target)) {
      hamburger.classList.remove('active');
      navbar.classList.remove('active');
    }
  });
}

/* ============================================
   SMOOTH SCROLLING
   ============================================ */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ============================================
   CONTACT FORM VALIDATION
   ============================================ */

function initFormValidation() {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Clear previous errors
      clearFormErrors();

      // Get form values
      const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        company: document.getElementById('company').value.trim(),
        subject: document.getElementById('subject').value.trim(),
        message: document.getElementById('message').value.trim()
      };

      // Validate form
      const errors = validateForm(formData);

      if (Object.keys(errors).length === 0) {
        // Form is valid - show success message
        showSuccessMessage();
        contactForm.reset();
      } else {
        // Display errors
        displayFormErrors(errors);
      }
    });
  }
}

function validateForm(data) {
  const errors = {};

  // Name validation
  if (!data.name) {
    errors.name = 'Name is required';
  } else if (data.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation
  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation
  if (!data.phone) {
    errors.phone = 'Phone number is required';
  } else if (!isValidPhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  // Company validation
  if (!data.company) {
    errors.company = 'Company name is required';
  }

  // Subject validation
  if (!data.subject) {
    errors.subject = 'Subject is required';
  } else if (data.subject.length < 5) {
    errors.subject = 'Subject must be at least 5 characters';
  }

  // Message validation
  if (!data.message) {
    errors.message = 'Message is required';
  } else if (data.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  const digitsOnly = phone.replace(/\D/g, '');
  return phoneRegex.test(phone) && digitsOnly.length >= 10;
}

function displayFormErrors(errors) {
  Object.keys(errors).forEach(field => {
    const input = document.getElementById(field);
    if (input) {
      input.classList.add('is-invalid');

      // Create or update error message
      let errorElement = input.nextElementSibling;
      if (!errorElement || !errorElement.classList.contains('form-error')) {
        errorElement = document.createElement('div');
        errorElement.className = 'form-error';
        input.parentNode.insertBefore(errorElement, input.nextSibling);
      }
      errorElement.textContent = errors[field];
    }
  });
}

function clearFormErrors() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.querySelectorAll('.form-control').forEach(input => {
      input.classList.remove('is-invalid');
    });
    form.querySelectorAll('.form-error').forEach(error => {
      error.remove();
    });
  }
}

function showSuccessMessage() {
  const form = document.getElementById('contactForm');
  if (form) {
    let successMsg = document.getElementById('successMessage');

    if (!successMsg) {
      successMsg = document.createElement('div');
      successMsg.id = 'successMessage';
      successMsg.className = 'alert alert-success alert-dismissible fade show';
      successMsg.role = 'alert';
      successMsg.innerHTML = `
        <strong>Success!</strong> Your message has been sent successfully. We will get back to you soon.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      `;
      form.parentNode.insertBefore(successMsg, form);
    } else {
      successMsg.classList.add('show');
      successMsg.style.display = 'block';
    }

    // Auto-hide after 5 seconds
    setTimeout(() => {
      successMsg.remove();
    }, 5000);
  }
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

function initScrollAnimations() {
  // Add fade-in animation to cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all cards
  document.querySelectorAll('.feature-card, .product-card, .stats-card, .testimonial').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

/* ============================================
   NEWSLETTER SUBSCRIPTION
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  const newsletterForm = document.getElementById('newsletterForm');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = this.querySelector('input[type="email"]').value;

      if (isValidEmail(email)) {
        // Show success message
        const input = this.querySelector('input[type="email"]');
        input.value = '';
        input.placeholder = 'Thank you for subscribing!';
        input.style.borderColor = '#28a745';

        setTimeout(() => {
          input.placeholder = 'Enter your email address';
          input.style.borderColor = '';
        }, 3000);
      }
    });
  }
});

/* ============================================
   ACTIVE LINK HIGHLIGHTING
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  const currentLocation = location.pathname;
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Determine current file name (works for file:// and http paths)
  const currentFile = (location.pathname.split('/').pop() || 'index.html');

  navLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkFile = href.split('/').pop();
    if (linkFile === currentFile || (currentFile === '' && linkFile === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Also highlight dropdown parent if a dropdown item matches current file
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  dropdownItems.forEach(item => {
    const href = item.getAttribute('href') || '';
    const itemFile = href.split('/').pop();
    if (itemFile === currentFile) {
      // find the closest dropdown-toggle and mark active
      const dropdown = item.closest('.nav-item.dropdown');
      if (dropdown) {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) toggle.classList.add('active');
      }
    }
  });
});

const dropdownLinks = document.querySelectorAll('.dropdown-toggle-simple');

dropdownLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const parent = this.closest('.has-dropdown');
    const dropdown = parent.querySelector('.simple-dropdown');

    parent.classList.toggle('open');
    dropdown.style.display =
      dropdown.style.display === 'block' ? 'none' : 'block';
  });
});
