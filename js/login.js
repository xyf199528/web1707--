var big = document.getElementById('close');
var small = document.getElementById('close1');
var login = document.getElementById('login');
var forget = document.getElementById('forget');
var email = document.getElementById('Email');
var denglu = document.querySelector("#denglu");
var a = document.querySelector("#a1");
var Error = document.querySelector("#error");
var oImg = document.querySelector("#img")
big.onclick = function () {
	login.style.transform = "translateY(-600px)";
	a.className = '';
	preventDefault();
}
forget.onclick = function () {
	email.style.opacity = '1';
	email.style.transform = "translateY(0px)"
}
small.onclick = function () {
	email.style.opacity = '0';
	email.style.transform = "translateY(-500px)"
}
denglu.onclick = function () {
	a.className = 'a1';
	login.style.display = 'block';
}
var oUsername = document.querySelector('input[name=username]');
var oPassword = document.querySelector('input[name=password]');
var oBtn = document.querySelector('input[name=btn]');
oBtn.onclick = function () {
	//js校验
	//直接调用登录的接口
	myajax.post('http://h6.duchengjiu.top/shop/api_user.php', {
		status: 'login',
		username: oUsername.value,
		password: oPassword.value
	}, function (error, responseText) {
		var json = JSON.parse(responseText);
		console.log(json);
		localStorage.token = json.data.token;
		localStorage.username = json.data.username;
		console.log(localStorage.token);
		console.log(localStorage.username);
		if (localStorage.token) {
			alert("登录成功");
			a.style.display = "none";
			denglu.style.display = "none";
			oImg.style.display = "block";
		}
	});
}
inner.onblur = function () {
	if (!/^\w{3,20}/.test(this.value)) {
		inner.style.backgroundColor = '#FFCCCC';
		Error.style.display = 'block';
	} else {
		inner.style.backgroundColor = 'white';
		Error.style.display = 'none';
	}
}
pass.onblur = function () {
	if (!/^\w{6,20}/.test(this.value)) {
		pass.style.backgroundColor = '#FFCCCC';
		Error.style.display = 'block';
	} else {
		pass.style.backgroundColor = 'white';
		Error.style.display = 'none';
	}
}
oImg.onclick = function () {
	location.href = "shopping cart.html";
}
if (!localStorage.token) {
	denglu.style.display = "block";
	oImg.style.display = "none";
}