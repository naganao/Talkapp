$(function () {
  $("#talkapi_request").on('click',function(){

    if($("#talk_input").val() === ""){
      $("#message").append('<div class="bot_message_text"><div class="bot"><p>何か入力してね</p></div></div>');
      return;
    }

    var query = $("#talk_input").val(); //入力したテキスト情報
    console.log(query);
    $("#message").append('<div class="user_message_text"><div class="user"><p>' + query + '</p></div></div>');
    $.ajax({
      method: 'post',
      url: 'https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk',
      data:{
        'apikey': 'DZZEIBcUiwztv20fUuYfJo1wCyH2jzaU',
        'query': query
      }
    }).done(response => {
      console.log(response);
      //var reply = response.results[0].reply;
      console.log(response.results[0].reply);
      $("#talk_reply").text(response.results[0].reply);
      $("#message").append('<div class="bot_message_text"><div class="bot"><p>' + response.results[0].reply + '</p></div></div>');
    })
  });

});
