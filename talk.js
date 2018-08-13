$(function () {
  $("#talkapi_request").on('click',function(){

    if($("#talk_input").val() === ""){
      $("#message").append('<div class="bot_message_text"><div class="bot"><p>何か入力してね</p></div><img src="bot.png" class="bot_img rounded-circle"></div>');
      return;
    }

    var query = $("#talk_input").val(); //入力したテキスト情報
    // 一番下までスクロールする
    $('#message_box').animate({scrollTop: $('#message_box')[0].scrollHeight}, 'fast');
    console.log(query);
    $("#message").append('<div class="user_message_text"><img src="user.png" class="user_img rounded-circle"><div class="user"><p>' + query + '</p></div></div>');

    $.ajax({
      method: 'post',
      url: 'https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk',
      data:{
        'apikey': 'DZZEIBcUiwztv20fUuYfJo1wCyH2jzaU',
        'query': query
      }
    }).done(response => {
      console.log(response);
      console.log(response.status);
      //var reply = response.results[0].reply;
      if(response.status === 2000){
        $("#message").append('<div class="bot_message_text"><div class="bot"><p>すみません、わかりません</p></div><img src="bot.png" class="bot_img rounded-circle"></div>');
        console.log('fail');
        return;
      }

      console.log(response.results[0].reply);
      $("#message").append('<div class="bot_message_text"><div class="bot"><p>' + response.results[0].reply + '</p></div><img src="bot.png" class="bot_img rounded-circle"></div>');
      // 一番下までスクロールする
      $('#message_box').animate({scrollTop: $('#message_box')[0].scrollHeight}, 'fast');
    })
  });

});
