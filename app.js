addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY > 80) {
    document.getElementById("_1").style.filter = `blur(${scrollY / 100}px)`;
  } else {
    document.getElementById("_1").style.filter = "blur(0px)";
  }
  if (scrollY > 1080) {
    document.getElementById("_2").style.filter = `blur(${scrollY / 400}px)`;
  } else {
    document.getElementById("_2").style.filter = "blur(0px)";
  }
  if (scrollY > 1970) {
    document.getElementById("_3").style.filter = `blur(${scrollY / 900}px)`;
  } else {
    document.getElementById("_3").style.filter = "blur(0px)";
  }
  if (scrollY > 2770) {
    document.getElementById("_4").style.filter = `blur(${scrollY / 1700}px)`;
  } else {
    document.getElementById("_4").style.filter = "blur(0px)";
  }
});
