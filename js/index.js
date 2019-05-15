// JavaScript Document
var tabs=document.getElementsByClassName('tab-head-div');
var divs=document.getElementsByClassName('tab-body-div');
for (var i=0;i<tabs.length;++i){
	tabs[i].onmouseover=function(){
		for (var i=0;i<divs.length;++i){
			if(tabs[i]==this){
				divs[i].classList.add('current');
				tabs[i].classList.add('current');
				}else{ divs[i].classList.remove('current');
						tabs[i].classList.remove('current');
				}
			}
		};
	}