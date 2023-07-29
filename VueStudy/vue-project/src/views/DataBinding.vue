<template>
    <h1>Hello, {{ title }}</h1>
    <div v-html="htmlString"></div>
    <div>
        <input type="text" v-model="valueModel" />
    </div>
    <div>
        <input type="number" v-model.number="numberModel" />
    </div>
    <div>
        <textarea v-model="message"></textarea>
    </div>
    <div>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="062">광주</option>
            <option value="064">제주</option>
        </select>
    </div>
    <div>
        <label><input type="checkbox" v-model="checked"> {{ checked }} </label>
    </div>
    <div>
        <label><input type="checkbox" value = "서울" v-model="checkedList"> 서울 </label>
        <label><input type="checkbox" value = "광주" v-model="checkedList"> 광주 </label>
        <label><input type="checkbox" value = "제주" v-model="checkedList"> 제주 </label>
        <br>
        <span> 체크한 지역 : {{ checkedList }}</span>
    </div>
    <div>
        <label><input type="radio" v-bind:value="radioValue1" v-model="picked"> 서울 </label>
        <label><input type="radio" v-bind:value="radioValue2" v-model="picked"> 광주 </label>
        <label><input type="radio" v-bind:value="radioValue3" v-model="picked"> 제주 </label>
    </div>
    <div>
        <img v-bind:src="imgSrc" />
    </div>
    <div>
        <input type="text" v-model="textValue" />
        <button type="button" v-bind:disaabled="textValue==''">Click</button>
    </div>
    <div class="container" v-bind:class="{'active' : isActive, 'text-red' : hasError}"> Class Binding </div>
    <div class="container" v-bind:class="[activeClass, errorClass]"> Class Binding2 </div>
    <div v-bind:style="styleObject"> 인라인 스타일 바인딩 </div>
    <div v-bind:style="[baseStyle, addStyle]"> 인라인 스타일 바인딩2 </div>
    
</template>
<script>
export default {
    data() {
        return {
            title : 'World!!!',
            htmlString: '<p style="color:red">HTML 바인딩으로 글자 색 빨갛게</p>',
            valueModel : '사용자에게 텍스트 입력받기',
            numberModel : 10,
            message : "여러 줄을 입력하는 textarea는 {{텍스트 바인딩}} 아님. 얘도 v-model",
            city : "064",
            checked : true,
            checkedList : [],
            picked : '',
            radioValue1 : '서울',
            radioValue2 : '광주',
            radioValue3 : '제주',
            imgSrc : "https://kr.vuejs.org/images/logo.png",
            // textValue가 비어있는 경우 버튼 비활성화
            textValue : "",
            // t,f 일 때 : container active text-red
            // t,t 일 때 : container active
            isActive : true,
            hasError : false,
           // 배열을 사용하면 t/f 사용 불가 
            activeClass : 'active',
            errorClass : 'text-red',
            styleObject : {
                color : 'blue',
                fontSize : '30px'
            },
            baseStyle : 'background-color:lightgray;width:100%;height:100px;',
            addStyle : 'color:green;fond-weight:bold;'
        }
    }
}
</script>
<style scoped>
    container {
        width : 100%;
        height : 200px;
    }
    .active {
        background-color: yellow;
        font-weight:bold;
    }
    .text-red{
        color : red;
    }
</style>
