const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// prjects
$(document).ready(function () {
  const owl = $("#projectCarousel");

  owl.owlCarousel({
    items: 3,
    margin: 20,
    loop: true,
    center: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
    },
  });

  function updateDetail(el) {
    const title = $(el).data("title");
    const desc = $(el).data("desc");

    $("#projectTitle").text(title);
    $("#projectDesc").text(desc);
  }

  // pertama kali load
  const firstItem = $("#projectCarousel .owl-item.active.center .item");
  updateDetail(firstItem);

  // saat slide berubah
  owl.on("changed.owl.carousel", function (event) {
    const current = $(".owl-item.active.center .item");
    updateDetail(current);
  });
});


// carousel owl untuk achievement
$(document).ready(function () {

  $("#achievementCarousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    center: true,
    dots: false,
    navText: ["‹", "›"], // panah kiri kanan
    autoplay: true,
    autoplayTimeout: 4000
  });

});