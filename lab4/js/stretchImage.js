var cutImage=(function ()
{
	return function ()
	{
		const container = document.getElementsByClassName('imgContainer')[0];
		const standardWidth = container.clientWidth;
		const standardHeight = container.clientHeight;
		const imgList = document.getElementsByClassName('contImg');
		for (let i = 0; i < imgList.length; i++)
		{
			if ((imgList[i].clientWidth/standardWidth) !== (imgList[i].clientHeight/standardHeight))
			{
				if ((imgList[i].clientWidth/standardWidth) < (imgList[i].clientHeight/standardHeight))
				{
					imgList[i].style.height = (standardHeight + "px");
					imgList[i].style.width = "auto";
					imgList[i].style.left=(0.5*(standardWidth-imgList[i].clientWidth)+"px");
					imgList[i].style.top="0";
				}
				else
				{
					imgList[i].style.width = (standardWidth + "px");
					imgList[i].style.height = "auto";
					imgList[i].style.top=(0.5*(standardHeight-imgList[i].clientHeight)+"px");
					imgList[i].style.left="0";
				}
			}
			else
			{
				imgList[i].style.height = (standardHeight + "px");
				imgList[i].style.width = (standardWidth + "px");
			}
		}
	}
})();

/*var changeTableWidth=(function ()
{
	return function ()
	{
		var tdArray=document.getElementsByTagName("td");
		var tdWidth=document.getElementById("content").clientWidth*0.3;
		for (let i = 0; i < tdArray.length ; i++)
		{
			tdArray[i].style.width=tdWidth+"px";
		}
		document.getElementsByTagName("button")[0].style.width=tdWidth+"px";
	}
})();*/

window.onload = function ()
{
	cutImage();
	//changeTableWidth();
};

window.onresize=function ()
{
	cutImage();
	//changeTableWidth();
};

/*
for (let i = 0; i < document.getElementsByClassName('contImg').length; i++)
{
	document.getElementsByClassName('contImg')[i].addEventListener("change",cutImage());
}*/
