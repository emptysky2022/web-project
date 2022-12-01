 // 공백, 글자길이 체크 함수
 const checkBlank = function(elem, msg, a, b) {
    if(elem.value.length == 0) {
        document.getElementById(msg).innerHTML = "<p style='color: red;'>비었음.</p>";
        elem.focus();
    } else if (!(elem.value.length > a && elem.value.length < b)) {
        document.getElementById(msg).innerHTML = "<p style='color: red;'>글자길이 다름.</p>";
        elem.focus();
    } else {
        document.getElementById(msg).innerHTML = "<p style='color: green;'>적합한 양식입니다.</p>";
    }
}

// 비번재확인용 함수
function check_pw(elem, msg) {
    if(elem.value == document.getElementById("pw").value) {
        document.getElementById(msg).innerHTML = "<p style='color: green;'>비밀번호와 일치합니다.</p>"
    } else {
        document.getElementById(msg).innerHTML = "<p style='color: red;'>비밀번호와 일치하지 않습니다.</p>"
        elem.focus();
    }
}

// 생년월일 null확인용 함수
function check_birth(elem, msg) {
    if(elem.value == null) {
        document.getElementById(msg).innerHTML = "<p style='color: red'>생년월일을 선택해주세요.</p>"
    } else {
        document.getElementById(msg).innerHTML = "";
    }
} 

// 정규식 : 최소 8 자, 하나 이상의 문자, 하나의 숫자 및 하나의 특수 문자 정규식
function check_exp(elem, msg) {
    const exp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(elem.value.match(exp)) {
        document.getElementById(msg).innerHTML = "<p style='color: green;'>규칙에 맞는 비밀번호 입니다.</p>"
    } else {
        document.getElementById(msg).innerHTML = "<p style='color: red;'>문자, 숫자, 특수 문자가 포함된 최소 8글자여야 합니다.</p>";
        elem.focus();
    }
}

console.log(document.getElementById("birthday"));
//  document.getElementById("msgBirth").innerHTML = document.getElementById("birthday").value;

// onblur="checkBlank(this, 'msgPw', 7, 31)"