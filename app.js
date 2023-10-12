const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDNE_CLASS = "hidden";
const USERNAME = "username";

// 1. onLoginSubmit 구현
function onLoginSubmit(event){
    // submit 기본 기능 실행 막기
    event.preventDefault();
    // value 변수에 저장
    const username = loginInput.value;
    // 로컬 저장소에 이름 저장
    localStorage.setItem("username",username);
    // 로그인 폼 숨기기
    loginForm.classList.add(HIDDNE_CLASS);
    paintGreeting(username);
}
// 2. paintGreeting 구현
function paintGreeting(username){
    greeting.classList.remove(HIDDNE_CLASS);
    greeting.innerText = `Hello! ${username}`;
}

// 3. 로그인 폼, greeting 페이지 출력 구현
const savedUsername = localStorage.getItem("username");

// 로컬 저장소에 이름이 저장되어 있지 않으면
if (savedUsername == null){
    // 로그인 폼을 보여주고 greeting은 안보여야 한다
    loginForm.classList.remove(HIDDNE_CLASS);
    loginForm.addEventListener('submit',onLoginSubmit);
} else {
    // greeting을 보여주자
    greeting.classList.remove(HIDDNE_CLASS);
    paintGreeting(savedUsername);

}