		var numbers = [2, 4, 6, 8, 10];

		// 추가한 부분
		numbers.push(sumArr(numbers));

		showArray(numbers);

		function showArray(arr) {
			var str = "<table><tr>";
			for (var i=0; i<arr.length; i++) {
				str += "<td>" + arr[i] + "</td>";
			}
			str += "</tr></table>";
			document.write(str);
		}

		// 추가한 함수
		function sumArr(arr){
			let sum = 0;
			for(let i=0; i<arr.length; i++){
				sum += arr[i]
			}
			return sum
		}
