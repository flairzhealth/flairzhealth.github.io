document.getElementById("prev").addEventListener("click", function () {
  document.getElementById("slider").scrollLeft -= 200;
});

document.getElementById("next").addEventListener("click", function () {
  document.getElementById("slider").scrollLeft += 200;
});
