// (function () {
// 	var oList = document.querySelectorAll('.list h2'),
// 		oHide = document.querySelectorAll('.hide'),
// 		oIcon = document.querySelectorAll('.list i'),
// 		lastIndex = 0;
// 	for(var i=0;i<oList.length;i++){
// 		oList[i].index = i;//自定义属性
// 		oList[i].isClick = false;
// 		// oList[i].initHeight = oHide[i].clientHeight;
// 		oList[i].initHeight = (oHide[i].getElementsByTagName("h5")[0].style.height)*oHide[i].getElementsByTagName("h5").length;
// 		oHide[i].style.height = '0';
// 		oList[i].onclick = function () {
// 			if(this.isClick){
// 				oHide[this.index].style.height = '0';
// 				oIcon[this.index].className = '';
// 				oList[this.index].className = '';
// 				oList[this.index].isClick = false;
// 			}
// 			else{
// 				oHide[lastIndex].style.height = '0';
// 				oIcon[lastIndex].className = '';
// 				oList[lastIndex].className = '';
// 				oHide[this.index].style.height = '220px';
// 				oIcon[this.index].className = 'on';
// 				oList[this.index].className = 'on';
// 				oList[lastIndex].isClick = false;
// 				oList[this.index].isClick = true;
// 				lastIndex = this.index;
// 			}
// 		}
// 	}
// })();
function showHiddenCont(left_singleMenu)
{
	left_singleMenu.style.backgroundColor="#fff";
	left_singleMenu.getElementsByClassName("left_singleContent").style.display="block";
}