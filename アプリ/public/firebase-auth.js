// Firebaseの初期化
// コンソールの内容をそのままコピペ
var firebaseConfig = {
    apiKey: "AIzaSyAJE5mVkywuz4rUZ-YEJ8UttI5cg8hLzUA",
    authDomain: "login-9b604.firebaseapp.com",
    databaseURL: "https://login-9b604.firebaseio.com",
    projectId: "login-9b604",
    storageBucket: "login-9b604.appspot.com",
    messagingSenderId: "30782715117",
    appId: "1:30782715117:web:cc7729757d4310c47dc8e4",
    measurementId: "G-KZR3T7D9CD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    // アカウント登録
    function signUp() {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
    
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(result) {
          console.log(result);
          document.getElementById('log').innerText = 'サインアップが成功しました';
          window.location.href = '../seikou/index.html'; 
          
        }).catch(function(error) {
          console.log('signup error')
          var errorCode = error.code;
          var errorMessage = error.message;
          document.getElementById('log').innerText = 'サインアップが失敗しました: ' + errorCode + ', ' + errorMessage;
        });
    }
    
    // ログイン
    function signIn() {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
    
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(result) {
          document.getElementById('log').innerText = 'サインインが成功しました';
          window.location.href = 'calender/index.html'; 

        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          document.getElementById('log').innerText = 'サインインが失敗しました。: ' + errorCode + ', ' + errorMessage;
        });
    }
    
    // ログアウト
    function signOut() {
      firebase.auth().signOut().then(function() {
        document.getElementById('log').innerText = 'サインアウト成功';
      }).catch(function(error) {
        console.log(error);
        document.getElementById('log').innerText = 'サインアウト失敗';
      });
    }
    
    // ログイン確認
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // ログイン認証済
        console.log('auth user', user);
        document.getElementById('state').innerText = 'ログイン済(email: ' + user.email + ')';
      } else {
        // No user is signed in.
        document.getElementById('state').innerText = '未ログイン';
      }
    });