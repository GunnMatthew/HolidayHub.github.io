document.addEventListener('DOMContentLoaded', function () {
    const navContainer = document.querySelector('.setNav');
    const headerHeight = document.querySelector('.setHeader').offsetHeight;
    const startPixelFromTop = 70; // Adjust this value as needed
  
    // Creates Snowflake
    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      navContainer.appendChild(snowflake);
  
      // Defines where the snowfall starts
      const initialX = Math.random() * navContainer.clientWidth;
      snowflake.style.left = `${initialX}px`;
  
      // Set initial top position
      snowflake.style.top = `${startPixelFromTop}px`;
  
      // Set animation duration
      const duration = Math.random() * 5 + 5; // between 5s and 10s
  
      // Apply animation using transition
      snowflake.style.transition = `transform ${duration}s linear`;
      snowflake.style.transform = `translateY(${navContainer.clientHeight}px)`;
  
      // Removes snowflake after animation
      snowflake.addEventListener('transitionend', function () {
        snowflake.remove();
      });
    }
  
    // Sets intervals for snowflake creation
    setInterval(createSnowflake, 750);
  });
  