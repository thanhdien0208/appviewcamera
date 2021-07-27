var settingsmenu = document.querySelector(".settings-menu");
var lightBtn = document.getElementById("light-btn");

lightBtn.onclick = function(){
    lightBtn.classList.toggle("light-btn-on");
    document.body.classList.toggle("light-theme")

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light"){
    lightBtn.classList.remove("light-btn-on");
    document.body.classList.remove("light-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    lightBtn.classList.add("light-btn-on");
    document.body.classList.add("light-theme");
}
else{
    localStorage.setItem("theme", "light");
}

//khai báo biến slideIndex đại diện cho slide hiện tại
  var slideIndex;
  // KHai bào hàm hiển thị slide
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("alarm-images-slide");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
 
      slides[slideIndex].style.display = "block";  
      dots[slideIndex].className += " active";
      //chuyển đến slide tiếp theo
      slideIndex++;
      //nếu đang ở slide cuối cùng thì chuyển về slide đầu
      if (slideIndex > slides.length - 1) {
        slideIndex = 0
      }    
      //tự động chuyển đổi slide sau 5s
      setTimeout(showSlides, 8000);
  }
  //mặc định hiển thị slide đầu tiên 
  showSlides(slideIndex = 0);
 
 
  function currentSlide(n) {
    showSlides(slideIndex = n);
}
  

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");

}

var videoElement = document.getElementById("myVideo");
if(videoElement.canPlayType('application/vnd.Apple.mpegurl') === "probably" || videoElement.canPlayType('application/vnd.Apple.mpegurl') === "maybe"){
    //Actions like playing the .m3u8 content
}
else{
    //Actions like playing another video type
}
