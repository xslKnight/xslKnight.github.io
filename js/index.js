//背景音乐播放
$('#bg_music').click(musicCtrl=()=>{
	let audio=$('#mp3Btn');//jQuery对象 
    var au=audio.get(0); //DOM对象 
	// event.stopPropagation();
	if(au.paused)//如果当前是暂停状态
	{
		$('#bg_music').html('暂停');
		au.play();
		// return;
	}else{
		$('#bg_music').html('播放');
	    au.pause();
	}
	
});
//视频播放

  $('#v_btn').click(()=>{
  	$('#video_btn').css('display','block');
    $('#shadow').css('display','block');
    $('#video_area').html('<video src="video/01.mp4" controls width="100%" height="100%"  autoPlay >对不起，您的浏览器不支持HTML5视频播放</video>');
  });

 $('#video_shut').click(()=>{
 	$('video').get(0).pause();
 	// console.log("test");
 	$('#video_btn').css('display','none');
 	$('#shadow').css('display','none');
});

 //文字存储

 $('#allData').ready(()=>{refreshData();});

 let refreshData=()=>{
 	let allData=$('#allData');
 	let len=window.localStorage.length;
 	// console.log("refreshData");
 	if(len==0){
 		allData.html('你还啥都没有写呢！');
 	}else{
 		allData.html('<tr><th>你说的那些</th><th>不要了</th></tr>');
 		for(let i=0;i<len;i++){
 			let tr=$('<tr>');
 			let name=window.localStorage.key(i);
 			tr.html('<td>'+window.localStorage.getItem(name)+'</td><td><button id="del_btn">移除</button>');
 			allData.append(tr);
 		}
 	}
 };
 //添加数据
 $('#submit_btn').click(addData=()=>{
 	let len=window.localStorage.length;
 	let n=len+1;
 	let test=$('#comment');
 	let value=test.val();
 	window.localStorage.setItem(n,value);
 	test.val('');
 	refreshData();
 });
//删除数据
 $('#del_btn').click(delData=()=>{
 	console.log("used");
 	// let tr=$('tr');
 	// for(let i=0;i<tr.length;i++){
 	// 	let elem=tr[i];
 	// 	console.log(elem);
 	// }
 	// let name = window.localStorage.key(n);
 	// window.localStorage.removeItem(name);
 	// refreshData();
 });

 // function delData(n){
 // 	let name = window.localStorage.key(n);
 // 	localStorage.removeItem(name);
 // 	refreshData();
 // }

//删除所有数据
 $('#clear_all').click(clear_all=()=>{
 	window.localStorage.clear();
 	refreshData();
 });
 //回到顶部
 $(document).ready(()=>{
    showScroll();
    function showScroll() {
        $(window).scroll(()=>{
            var scrollValue = $(window).scrollTop();
            scrollValue > 100 ? $('.toTop').fadeIn() : $('.toTop').fadeOut();
        });
    }
});
$('.toTop').click(()=>{
	$("html,body").animate({scrollTop:0}, 500);
});
//输入测试
//name test
$('#name').focus(()=>{
	$('#name').val('');
});
$('#name').blur(()=>{
	let getPos=$('#name');
	if(getPos.val('')){
		getPos.val('你的名字？');
	}
});
//email test
$('#email').focus(()=>{
	$('#email').val('');
});
$('#email').blur(()=>{
	let getPos=$('#email');
	if(getPos.val('')){
		getPos.val('Email');
	}
});
//telephone test
$('#telephone').focus(()=>{
	$('#telephone').val('');
});
$('#telephone').blur(()=>{
	let getPos=$('#telephone');
	if(getPos.val('')){
		getPos.val('Telephone');
	}
});
//subject test
$('#subject').focus(()=>{
	$('#subject').val('');
});
$('#subject').blur(()=>{
	let getPos=$('#subject');
	if(getPos.val('')){
		getPos.val('Subject');
	}
});
//message test
$('#message').focus(()=>{
	$('#message').val('');
});
$('#message').blur(()=>{
	let getPos = $('#message');
	if(getPos.val('')){
		getPos.val('既然来了，就留下点什么吧！');
	}
});