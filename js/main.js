/******************** Navbar ******************** */
let list = document.getElementById("list");
let btn = document.querySelector(".bar");

btn.addEventListener("click", () => {
  list.classList.toggle("active");
});

/******************** Create Tabs ******************** */
let tabLinks = document.querySelectorAll(".tabs li");
let tabContents = document.querySelectorAll(".all-menu >.boxs");

tabLinks.forEach((tabLink) => {
  tabLink.addEventListener("click", () => {
    let tabId = tabLink.getAttribute("data-tab");
    tabLinks.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabLink.classList.add("active");
    document.getElementById(tabId).classList.add("active");
  });
});

/******************** popup video ******************** */
$("#play-video").on("click", function (e) {
  e.preventDefault();
  $("#video-overlay").addClass("open");
  $("#video-overlay").append(
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/3iJNe0Huw3g?si=pVLkFCFtSlqalykb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  );
});

$(".video-overlay, .video-overlay-close").on("click", function (e) {
  e.preventDefault();
  close_video();
});

$(document).keyup(function (e) {
  if (e.keyCode === 27) {
    close_video();
  }
});

function close_video() {
  $(".video-overlay.open").removeClass("open").find("iframe").remove();
}

/******************** Owl Carousel ******************** */
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    mouseDrag: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

/******************** Counter ******************** */
let nums = document.querySelectorAll(".card .count");
let section = document.querySelector(".counter");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 400) {
    if (!started) {
      nums.forEach((num) => count(num));
    }
    started = true;
  }
};


function count(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}


/******************** Scroll To Top ******************** */
let scroll = document.querySelector(".top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scroll.classList.add("show");
  } else {
    scroll.classList.remove("show");
  }
});

scroll.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


