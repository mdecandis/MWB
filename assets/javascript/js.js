$(document).ready(function () {
  $(".mobile-menu").on("click", function () {
    $(".mobile-modal").removeClass("hide");
  });

  $(".close-menu").on("click", function () {
    $(".mobile-modal").addClass("hide");
  });

  $(".mobile-modal .links a").on("click", function () {
    $(".mobile-modal").addClass("hide");
  });

  const swiper = new Swiper(".swiper", {
    loop: true,
    centeredSlides: true,

    // Pagination dots
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows (if you still want them)
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Responsive breakpoints
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  (function () {
    var d = document,
      accordionToggles = d.querySelectorAll(".js-accordionTrigger"),
      setAria,
      setAccordionAria,
      switchAccordion,
      touchSupported = "ontouchstart" in window,
      pointerSupported = "pointerdown" in window;

    skipClickDelay = function (e) {
      e.preventDefault();
      e.target.click();
    };

    setAriaAttr = function (el, ariaType, newProperty) {
      el.setAttribute(ariaType, newProperty);
    };
    setAccordionAria = function (el1, el2, expanded) {
      switch (expanded) {
        case "true":
          setAriaAttr(el1, "aria-expanded", "true");
          setAriaAttr(el2, "aria-hidden", "false");
          break;
        case "false":
          setAriaAttr(el1, "aria-expanded", "false");
          setAriaAttr(el2, "aria-hidden", "true");
          break;
        default:
          break;
      }
    };
    //function
    switchAccordion = function (e) {
      console.log("triggered");
      e.preventDefault();
      var thisAnswer = e.target.parentNode.nextElementSibling;
      var thisQuestion = e.target;
      if (thisAnswer.classList.contains("is-collapsed")) {
        setAccordionAria(thisQuestion, thisAnswer, "true");
      } else {
        setAccordionAria(thisQuestion, thisAnswer, "false");
      }
      thisQuestion.classList.toggle("is-collapsed");
      thisQuestion.classList.toggle("is-expanded");
      thisAnswer.classList.toggle("is-collapsed");
      thisAnswer.classList.toggle("is-expanded");

      thisAnswer.classList.toggle("animateIn");
    };
    for (var i = 0, len = accordionToggles.length; i < len; i++) {
      if (touchSupported) {
        accordionToggles[i].addEventListener(
          "touchstart",
          skipClickDelay,
          false
        );
      }
      if (pointerSupported) {
        accordionToggles[i].addEventListener(
          "pointerdown",
          skipClickDelay,
          false
        );
      }
      accordionToggles[i].addEventListener("click", switchAccordion, false);
    }
  })();
});
