document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 500) {
    document.getElementById("top-navbar").style.backgroundColor = "black";
  }
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      document.getElementById("top-navbar").style.backgroundColor = "black";
      // document.getElementById("top-navbar").style.borderRadius = "50px";
      // document.getElementById("top-navbar").style.margin = "20px 60px";
    } else {
      document.body.style.paddingTop = "0";
      document.getElementById("top-navbar").style.backgroundColor =
        "transparent";
    }
  });
});
