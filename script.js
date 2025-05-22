// hero slider
var swiper1 = new Swiper('.swiper1',{
    slidesPerView: 1,
    spaceBetween: 10,
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop:true,
    autoplay:{
        delay: 3000,

    },

});

//counter
document.addEventListener('DOMContentLoaded', function() {
    // Select all counter items
    const counters = document.querySelectorAll('.counter-item h2');
    const speed = 200; // The lower the speed, the faster the counter

    // Function to start the counter animation
    const startCounter = (counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;

            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    };

    // Create an intersection observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start the counter animation when element is in view
                startCounter(entry.target);
                // Stop observing the element once it's in view
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    // Observe each counter item
    counters.forEach(counter => {
        observer.observe(counter);
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Attach event listener to all 'Know More' buttons
    document.querySelectorAll('.custom-btn').forEach(button => { // Change here
        button.addEventListener('click', function() {
            // Get the data attributes from the clicked button
            const imgSrc = this.getAttribute('data-img');
            const title = this.getAttribute('data-title');
            
            // Update the modal content
            document.getElementById('productModalImage').src = imgSrc;
            document.getElementById('productModalLabel').textContent = title;
        });
    });
});

AOS.init({
    once: true // Animation happens only once, no fade out on scroll back
  });
  

// navbar
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let currentSection = '';
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 100) { // Adjust the offset value
        currentSection = section.getAttribute('id');
      }
    });
  
    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
  

  

  