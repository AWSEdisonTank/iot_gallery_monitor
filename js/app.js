
var nvGUM = window.navigator.getUserMedia = ( navigator.getUserMedia || navigator.mozGetUserMedia);

var webCameraInfo ={
	init:function(){
	},
	video:function(){
		
	}
}

var onload_func = function (){
	webCameraInfo.init();
}
document.addEventListener('DOMContentLoaded', onload_func, false);

