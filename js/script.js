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

  function updateDetail(index) {
    const currentItem = owl.find(".owl-item").eq(index).find(".item");

    const title = currentItem.data("title");
    const desc = currentItem.data("desc");

    $("#projectTitle").text(title);
    $("#projectDesc").text(desc);
  }

  // saat pertama load
  owl.on("initialized.owl.carousel", function (event) {
    updateDetail(event.item.index);
  });

  // saat slide berubah
  owl.on("changed.owl.carousel", function (event) {
    updateDetail(event.item.index);
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