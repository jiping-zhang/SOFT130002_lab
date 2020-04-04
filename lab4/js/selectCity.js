var setCity=(function()
{
	var provinceForm=document.getElementById("provinceForm");
	var cityForm=document.getElementById("cityForm");
	cities = new Object();
	cities['Shanghai']=['Yangpu district','Minghang district','Pudong new district'];
	cities['Beijing']=['Haiding district'];
	cities['Jiangsu']=['Suzhou', 'Wuxi', 'Nanjing','Changzhou','Nantong'];
	cities['Zhejiang']=['Hangzhou','Ninbo','Wenzhou'];
	cities['Guangdong']=['Guangzhou','Shenzhen','Foshan','Dongguan'];
	return function ()
	{
		var provinceValue=provinceForm.value;
		var i;
		cityForm.length=1;
		if(provinceValue=='0') return;
		if(typeof(cities[provinceValue])=='undefined') return;
		for(i=0; i<cities[provinceValue].length; i++)
		{
			cityForm.options[i+1] = new Option();
			cityForm.options[i+1].text = cities[provinceValue][i];
			cityForm.options[i+1].value = cities[provinceValue][i];
		}
	}
})();
window.onload=function ()
{
	setCity();
	shiftCaptchaText();
};