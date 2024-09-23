//scrolling into the selected section

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default link behavior
      const target = document.querySelector(this.getAttribute('href')); // Get the target element
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth' // Smooth scroll
        });
      }
    });
  });

  document.getElementById('logo').addEventListener('click',function(){
    document.getElementById('hero').scrollIntoView({
      behavior: 'smooth'
    });
  });

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  //animating text while loading the section ....>
// Function to check if an element is fully in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to check if an element has passed out of the viewport (either top or bottom)
function isOutOfViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.bottom < 0 || 
      rect.top > (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to handle revealing and resetting elements on scroll
function handleScroll() {
  const headings = document.querySelectorAll('#destinations h3'); // Select all h3 elements in #destinations
  headings.forEach((h3) => {
      if (isInViewport(h3)) {
          h3.classList.add('reveal'); // Add the reveal class when in view
      } else if (isOutOfViewport(h3)) {
          h3.classList.remove('reveal'); // Remove the reveal class when out of view (resets the animation)
      }
  });
}

// Listen for scroll events and trigger the reveal or reset
window.addEventListener('scroll', handleScroll);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
