{
	let captchaText = document.getElementById("captchaText");
	let captchaInput = document.getElementById("captchaInput");
	let signUpForm = document.getElementById("signUpForm");
	let ans = 0;
	let password = document.getElementById("password");
	let rePassword = document.getElementById("rePassword");
	let wrongPwText=document.getElementById("wrongPw");
	let wrongPwStr="两次输入的密码不一样！";

	function shiftCaptchaText()
	{
		let a = Math.floor(50.0 * Math.random());
		let b = Math.floor(a * Math.random());
		let c = Math.floor(2.0 * Math.random());
		switch (c)
		{
			case 0:
				captchaText.innerHTML = ("" + a + " + " + b + " = ");
				ans = a + b;
				break;
			case 1:
				captchaText.innerHTML = ("" + a + " - " + b + " = ");
				ans = a - b;
				break;
		}
	}

	function passwordCheck()
	{
		if (password.value === rePassword.value)
		{
			wrongPwText.innerHTML="";
		}
		else
		{
			wrongPwText.innerHTML=wrongPwStr;
		}
	}

	function submitForm()
	{
		if (password.value === rePassword.value)
		{
			let input = -1;
			try
			{
				input = parseInt(captchaInput.value);
			} catch (e)
			{
				alert("验证答案错误！");
			}
			if (input === ans)
			{
				signUpForm.submit();
			}
			else
			{
				alert("验证答案错误！");
			}
		}
		else
		{
			alert(wrongPwStr);
		}
	}
}