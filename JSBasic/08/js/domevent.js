    var pic = document.querySelector('#pic');
    
    pic.addEventListener("mouseover", changePic, false);
    pic.addEventListener("mouseout", originPic);

		function changePic() {			
			pic.src = "images/boy.png";
    }
    function originPic() {
      pic.src = "images/girl.png";
    }
    