document.addEventListener("DOMContentLoaded",function () { 
    $(".loading").css('display','none');
  });
   $(document).ready(function() {
        $('#fullpage').fullpage({
            anchors:['page1','page2','page3','page4','page5','page6','page7','page8'],
            // sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6','#fb7b35'],
            // loopBottom: true,
            // loopTop: true,
            loopHorizontal: true,
            continuousVertical: true, 
            licenseKey:'OPEN-SOURCE-GPLV3-LICENSE',
            verticalCentered:true,
            navigation:false,
            afterLoad:function(anchors,index){
                // var t = origin.eq();
                // console.log(t);
                switch(index){
                    case 1:
                        move('.title').scale(1.2).delay(0).end();//move获取元素不能含多个选择器，否则报错
                      break;
                    case 2:
                        move('.sub-title').set("left","0").delay(0).end();
                      break;
                    case 3:
                      break;
                    case 4:
                      break;
                    case 5:
                      break;
                    case 6:
                      break;
                    case 7:
                      break;
                    case 8:
                        move('.end-title').scale(0.9).delay(0).end();
                        move('.slogen').scale(1.1).delay(500).end();
                      break;
                }
            },

            onLeave:function(link,index){
                switch(index){
                    case 1:
                        move('.title').scale(1).end();
                      break;
                    case 2:
                        move('.sub-title').set("left","22rem").end();
                    break;
                    case 3:
                      break;
                    case 4:
                      break;
                    case 5:
                      break;
                    case 6:
                      break;
                    case 7:
                      break;
                    case 8:
                        move('.end-title').scale(1).end();
                        move('.slogen').scale(1).end();
                    break;
                }
            },

            afterRender:function(){},
        });

        $('#bg_music_btn').click(function(){
            var player = $("#player")[0]; /*jquery对象转换成js对象*/
            if (player.paused){ /*如果已经暂停*/
                player.play(); /*播放*/
               $(".Rotation").css('animation-play-state','running');
            }else {
                player.pause();/*暂停*/
                 $(".Rotation").css('animation-play-state','paused');
            }
          });

        function playMusic() {
           
        }
    
    });