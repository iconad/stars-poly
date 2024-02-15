// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {
  // wait until images, links, fonts, stylesheets, and js is loaded
  window.addEventListener(
    "load",
    function (e) {
      // Init AOS
      AOS.init();

      // GSAP Config
      gsap.config({
        nullTargetWarn: false,
      });

      // Regist GSAP Plugins
      gsap.registerPlugin(
        ScrollTrigger,
        ScrollSmoother,
        SplitText,
        ScrollToPlugin
      );

      // Scroll Smoother
      const $wrapper = document.getElementById("main-wrapper");
      const $content = document.getElementById("main-content");

      const $smoother = ScrollSmoother.create({
        wrapper: $wrapper,
        content: $content,
        smooth: 1.5,
        effects: false,
        smoothTouch: 0,
        preventDefault: true,
        normalizeScroll: { allowNestedScroll: true },
        ignoreMobileResize: true,
        onUpdate: (self) => {},
      });

      $smoother.effects(".parallax", { speed: "auto" });

      /* ###################################### */
      /* ######## JS Animations Start ######## */
      /* #################################### */



      var accordionToggles = document.querySelectorAll('.accordion');

      accordionToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(event) {
          event.preventDefault();
          var accordionBody = this.parentElement.nextElementSibling;
          var isActive = accordionBody.classList.contains('active');
    
          // If the accordion is already open, close it by removing 'active' class
          if (isActive) {
            accordionBody.style.maxHeight = null;
            accordionBody.classList.remove('active');
          } else {
            // If it's closed, we must set a specific max-height for the transition to work
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
            accordionBody.classList.add('active');
          }
    
          var svgIcons = this.querySelectorAll('svg');
          svgIcons.forEach(function(svg) {
            svg.classList.toggle('hidden');
          });
        });
      });




      // Get the navbar and burger icon
        const navbar = document.querySelector('.main-navbar');
        const navbBurger = document.getElementById('navbBurger');

        console.log('navbBurger');

        // Add a click event listener to the burger icon
        navbBurger.addEventListener('click', function () {
          // Toggle the class to change the height
          navbar.classList.toggle('h-24');
        });



      // Animated Counter on scroll
      document.addEventListener("DOMContentLoaded", function() {
        // You can change this class to specify which elements are going to behave as counters.
        var elements = document.querySelectorAll(".scroll-counter")

        elements.forEach(function(item) {
          // Add new attributes to the elements with the '.scroll-counter' HTML class
          item.counterAlreadyFired = false
          item.counterSpeed = item.getAttribute("data-counter-time") / 45
          item.counterTarget = +item.innerHTML
          item.counterCount = 0
          item.counterStep = item.counterTarget / item.counterSpeed

          item.updateCounter = function() {
            item.counterCount = item.counterCount + item.counterStep
            item.innerHTML = Math.ceil(item.counterCount).toLocaleString()
            item.classList.add('animate')

            if (item.counterCount < item.counterTarget) {
              setTimeout(item.updateCounter, item.counterSpeed)
            } else {
              item.innerHTML = item.counterTarget.toLocaleString()
            }
          }
        })


        // Marquee effect
        let black = '#0A0A0A';
        let offWhite = '#EDEEE9';

        // saveStyles is used because GSAP writes inline CSS for styling.
        // If we resize our browser, we want the styling of each viewport-based animation to be saved.

        ScrollTrigger.matchMedia({
          
          // the mobile animations are the same as the desktop, except the font colors are different
          // the scrub is delayed by 1s with relation to the scrollbar (scrub: 1)
          // the animation starts a bit earlier
          "(max-width: 768px)": function() {
            
            let mobileTL = gsap.timeline({
              scrollTrigger: {
                trigger: ".marquee",
                start: "+20% bottom",
                scrub: 1,
              }
            });

            mobileTL.to(".first", {duration: 1, xPercent: -200, color: offWhite})
          },
          
          // The tablet and desktop animations have a delay of 7s on scrubs (scrub: 2).
          "(min-width: 769px)": function() {

            let desktopTL = gsap.timeline({
              scrollTrigger: {
                trigger: ".marquee",
                start: "+40% bottom",
                scrub: true,
              }
            });

            desktopTL.to(".first", {duration: 2, xPercent: -150})
          }
        });

        

      // Function to determine if an element is visible in the web page
      var isElementVisible = function isElementVisible(el) {
        var scroll = window.scrollY || window.pageYOffset
        var boundsTop = el.getBoundingClientRect().top + 100 + scroll
        var viewport = {
          top: scroll,
          bottom: scroll + window.innerHeight,
        }
        var bounds = {
          top: boundsTop,
          bottom: boundsTop + el.clientHeight,
        }
        return (
          (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
          (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
        )
      }

      // Funciton that will get fired uppon scrolling
      var handleScroll = function handleScroll() {
        elements.forEach(function(item, id) {
          if (true === item.counterAlreadyFired) return
          if (!isElementVisible(item)) return
          item.updateCounter()
          item.counterAlreadyFired = true
        })
      }

      // Fire the function on scroll
      window.addEventListener("scroll", handleScroll)
    })




      const clientsSwiper = new Swiper(".swiper-clients", {
        // Optional parameters
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2.5,
          },
          1000: {
            slidesPerView: 4.5,
          },
          1300: {
            slidesPerView: 5,
          }
        },
        spaceBetween: 20,
        mousewheel: true,
        keyboard: true,
        dragging: true,
        autolay: true,
        loop: true,
        delay: 1000,
      });



      const productsSwiper = new Swiper(".swiper-products", {
        // Optional parameters
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        },
        mousewheel: true,
        keyboard: true,
        dragging: true,
        autolay: true,
        loop: true,
        delay: 1000,
        
      });


      //get element by class "next-product-slide" and add event listener click 
      let nextSlide = document.querySelector(".next-product-slide")
      
      if(nextSlide) {

        nextSlide.addEventListener("click", () => {
          productsSwiper.slideNext();
        })
        document.querySelector(".prev-product-slide").addEventListener("click", () => {
          productsSwiper.slidePrev();
        })

      }



      
      



      /* #################################### */
      /* ######## JS Animations End ######## */
      /* ################################## */
    },
    false
  );
});
