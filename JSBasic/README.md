출처 : Do it! 자바스크립트 입문

<br/>

# 8장 DOM

### 8-1 문서 객체 모델(DOM) 이란?
- 돔 DOM (Document Object Model 문서 객체 모델)
  - 정의 : (웹 문서의 모든 요소를 자바스크립트를 이용하여 조작할 수 있도록) 객체를 사용해 문서를 해석하는 방법
- DOM 트리
  - 태그 : 요소(Element) 노드
  - 태그가 품고 있는 텍스트 : 텍스트(Text) 노드
  - 태그의 속성 : 속성(Attribute) 노드
  - 주석 : 주석(Comment) 노드

<br/>

### 8-2 DOM **요소**에 접근하기
- CSS의 선택자(Selector)를 사용해서 접근
- getElementById()
- getElementsByClassName()
  - 반환 : HTMLCollection
- getElementsByTagName()
  - id, class 선택자가 없을 땐 태그 이름으로
  - 반환 : HTMLCollection 객체 반환
- querySelector(), querySelectorAll()
  - id(#), class(.), 태그 이름 모두 사용 가능
  - querySelectorAll() : NodeList 반환
  - 둘 이상의 선택자 사용 가능 : 인덱스로는 한계 있을 때, 자식선택자(>) 사용하면 좋아

<br/>

### 8-3 DOM 요소의 **속성**에 접근하기
- getAttribute(), setAttribute()
  - getAttribute(속성) : 속성에 접근
  - setAttribute(속성, 값) : 접근한 속성의 값 없다면 추가, 있다면 수정
- setAttribute() 함수 대신, 속성 상용 가능

<br/>

### 8-4 DOM에서 이벤트 처리하기
- addEventListener()
  - 이벤트가 발생한 요소에 이벤트 처리기를 연결해 주는 함수
  - 한 요소에 여러 이벤트 동시에 처리 가능
  - 특정 요소 뿐만 아니라 Document객체, Window객체 등 어디서든 사용 가능
  - ```
    // 가져온 웹 요소를 변수에 담고
    변수.addEventListener(이벤트 유형, 함수, 캡쳐 여부)
    ```
    - 처리할 이벤트 유형 : 예) "click", "mouseover"
    - 함수 : 이벤트가 발생했을 때 실행할 명령, 함수
    - 캡쳐 여부 : 이벤트를 캡처링하는지 여부를 지정 가능
      - false 버블링 : 기본값. 즉, 생략하면 false
        - 이벤트 버블링 : DOM의 자식 노드에서 부모 노드로 이벤트가 전달되는 것
        - true 캡처링 : DOM의 부모 노드에서 자식 노드로 이벤트가 전달되는 것

<br/>

### 8-5 웹 요소 내용과 스타일 가져와서 수정하기
- DOM으로 CSS 속성에 접근, 수정
  - 스타일 속성에 접근 : .style.CSS속성
  - 하이픈(-)이 포함된 속성은 낙타기법으로 표기 : 예) backgroundColor, borderRadius
  - cf. 토글 적용 팁
    ```
        var isㅇㅇㅇ = false;
        
        // 원하는 위치에 토글 처리
        if(isㅇㅇㅇ){
            // 토글 on 일 때, 실행
        }
        else{
            // 토글 off 일 때, 실행
        }
        // 토글 스위치
        isㅇㅇㅇ = !isㅇㅇㅇ;

    ```

<br/>

### 8-6 DOM에 요소 추가하기
- createElement("태그") : 요소 노드 생성
- createTextNode("텍스트") : 텍스트 노드 생성
- 노드.value = "값" : 구체적인 값 추가
- 부모노드.appendChild(자식노드) : 텍스트/요소 노드를 요소 노드의 자식 노드로 연결!
- createAttribute("속성") : 속성 노드 생성
- 요소노드.setAttribute**Node**(속성노드) : 속성노드를 요소 노드에 연결 (반환값은 null)
- 요소노드.setAttribute(속성노드, 값) : 속성노드를 생성하고, 값을 넣고, 요소 노드에 연결
- 로직 : DOM 구조를 그려보고 -> 추가하려는 노드들 파악 -> 생성 & 연결
 
<br/>
<br/>

### 8-7 추가한 노드 순서 바꾸거나 삭제하기
- hasChildNodes() 함수 : 자식 노드 있다면 true, 없다면 false 반환
- childNodes 속성 : (모든) 자식 노드 (태그와 태그 사이의 줄바꿈도 빈 텍스트 노드인 자식 노드로 인식)
- children 속성 : 자식 노드 중 요소 노드에만 접근. 텍스트 노드 x ,주석 노드 x
- 부모노드.insertBefore(추가할 노드, 기준 노드) : 기준 노드 앞에 원하는 노드 추가
- 부모노드.removeChild(자식 노드) : 부모 노드에서 자식 노드를 삭제
  - 노드는 스스로 자신을 삭제할 수 없음 => 부모 노드에 접근해서 자식노드를 삭제해야 함
- parentNode 속성 : 현재 노드의 부모 요소 노드
- 로직
  - 원하는 위치에 노드 추가 : 부모노드.children 속성으로 자식노드들 위치 파악 -> 부모노드.insertBefore(추가할 노드, 기준 노드)로 원하는 위치에 추가
  - 요소 삭제 : 해당요소.parentNode로 부모요소 찾기 -> 부모요소.removeChild(해당요소)로 요소 삭제
    - 주의) 삭제 이벤트를 처리할 요소와 실제 삭제할 요소를 헷갈리면 안돼
    - 예) 삭제 버튼 c 의 부모 b를 삭제하려면

<br/>
<br/>
<br/>

# 9장 폼

- 폼(Form) : 사용자가 정보를 입력할 수 있게 만들어 놓은 웹 요소
  - 예) 아이디, 비밀번호 입력. 주소지, 전화변호 입력
  - 사용자가 폼 요소에 입력한 내용을 가져오기, 수정하기, 형식에 맞는지 확인하기 => 자바스크립트로 처리

<br/>

### 9-1 폼 요소에 접근하는 여러 가지 방법
- id, class 값으로 접근 : queryselector
- name 값으로 접근
  - 폼 요소에서 사용하는 name값은 주로 id값과 같게 지정
  - 폼의 name값, 폼 요소의 name값까지 계층을 따라 지정
    ```
    // 방법1
    document.폼의name값.폼요소의name값

    // 방법2
    documnent.forms["폼의name값"].elements["폼요소의name값"]

    // 방법3 (사용도 낮음. 폼 요소에 id, class, name 속성이 없을 때 사용)
    // i번째 폼의 j번째 요소
    document.forms[i].elements[j].value

    ```
- 텍스트 필드의 값 가져오기 : .value

<br/>

### 9-2 폼 요소에서 입력값 검증하기
- 폼 밸리데이션 (Form Validation, 입력값 검증)
  - 값이 입력되었는지
  - 입력된 값이 정해진 조건에 맞는지 등
- change 이벤트
  - 목록이나 체크 상태 등이 변경되었을 때 이벤트 발생
  - \<input>, \<select>, \<textarea> 태그에서 사용
  - 텍스트 필드에 입력을 마치고 그 필드를 빠져나올 때 발생
- select() 함수, focus() 함수
  - select() 함수 : 텍스트 필드에 입력한 내용을 선택 (드래그)
  - focus() 함수 : 해당 택스트 필드로 커서 이동
- HTML5 \<input>태그 자체에서 폼을 검증하기 위한 여러 속성 有
  - 예) autocomplete, autofocus, placeholder, required 등

<br/>

### 9-3 다양한 폼 요소 다루기
- 선택 목록 (\<select>, \<option>)
  - 선택 목록의 옵션 항목이 배열 형태로 저장 : HTMLOptionCollection 객체
    ```
    // options 속성 사용하여 option 항목에 접근
    document.폼의name값.선택목록의name값.options

    // i번째 옵션이 화면에 표시하는 내용 : innerText
    document.폼의name값.선택목록의name값.options[i].innerText

    // i번째 옵션 선택 시 서버에 넘어가는 값 : value
    document.폼의name값.선택목록의name값.options[i].value
    ```
  - selectedIndex : 사용자가 선택한 옵션의 인덱스 값 저장 (미선택 시 기본값 0)
    ```
    var 선택목록 = document.폼의name값.선택목록의name값;

    // 사용자가 선택한 옵션 항목 찾기
    선택목록.options[선택목록.selectedIndex]
    ```
- 라디오 버튼 (\<input type="radio">), 체크 상자(\<input type="checkbox">)
  - 라디오 버튼 : 여러 항목 중 하나만 선택 가능 => name값을 1개 사용 가능
  - 체크 상자 : 여러 개 선택 가능 => name값 서로 다름, 혹은 배열로 지정
  - ```
    // 라디오 버튼 (RadioNodeList 객체)
    document.폼의name값.라디오버튼의name값

    // 체크 상자
    document.폼의name값.체크상자의name값
    ```
  - 라디오 버튼에 접근하면 같은 name 값을 가진 요소가 배열 형태로 저장 : RadioNodeList 객체
    - value : 선택한 버튼의 value값 저장 (기본값 "")
- checked 속성 : 선택하면 true, 기본값 false

<br/>
<br/>
<br/>

# 10장 브라우저 객체 모델

- 브라우저 객체 모델
  - 브라우저를 객체로 관리
- Window 객체
  - 자바스크립트 객체 중 최상위이자 기본이 되는 객체
- Navigator 객체
  - 현재 웹 문서에 접속한 사용자가 어떤 브라우저를 사용했는지, 모바일로 접속했는지 등을 알 수 있게 해줌
  - 렌더링 엔진의 이름을 보고 웹 브라우저 종류를 구별
  - userAgent 속성 이용
- History 객체
  - '뒤로', '앞으로' 또는 주소 표시줄에 입력해서 돌아다녔던 사이트 주소가 저장되어 있음
- Location 객체
  - 현재 문서의 URL 주소 정보 → 이 정보를 편집하여 현재 브라우저 창에 열릴 사이트나 문서를 지정
- Scrren 객체
  - 사용자의 화면 정보, 크기를 알아낼 때 사용

<br/>
<br/>

---

<br/>
<br/>

23.07 완