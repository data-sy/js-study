
		// 감춰진 상태에서 시작하니까 초깃값 false
		var isOpen = false;
		var bigPic = document.querySelector("#cup");  
		var smallPics = document.querySelectorAll(".small");  

		for(i=0; i<smallPics.length; i++) {
			smallPics[i].addEventListener("click", function() {
				newPic = this.src;
				bigPic.setAttribute("src", newPic);
			});
		}

		var view = document.querySelector("#view");
		var detail = document.querySelector("#detail");

		view.addEventListener("click", showDetail);

		function showDetail(){
			if (isOpen){
				detail.style.display = "none";
				// view.textContent = "상세 설명 보기";
				view.innerText = "상세 설명 보기";
			} else {
				detail.style.display = "block";
				view.textContent = "상세 설명 닫기";
			}
			isOpen = !isOpen
		}
