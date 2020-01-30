
function first(){
$.ajax({
      url: 'https://api.luniverse.io/tx/v1.1/transactions/FINALVOTE',
      type: 'POST',
      crossDomain: true,
      dataType: 'json',
      headers: {
        'api-key': Config.dapp.apiKey,
      },
      data:{
          "from":userkey,
          "inputs":{
            "candidate":"0"
          }
      },
      success: function (data) {
        alert(`후보자 투표를 완료했습니다`)
        $.ajax({
          url: 'https://api.luniverse.io/tx/v1.1/transactions/Rewarding',
          type: 'POST',
          crossDomain: true,
          dataType: 'json',
          headers: {
            'api-key': Config.dapp.apiKey,
          },
          data:{
              "inputs":{
                "receiverAddress":userkey,
                "valueAmount":"1"
              }
          },
          success: function (data) {
            alert(`토큰발급했습니다`)
    
            $('.overlay').hide()
          },
          error: function (data) {
            alert('토큰을 발급하지 못했습니다')
            $('.overlay').hide()
          }
        });
    },
      error: function (data) {
        alert('후보자 투표에 실패했습니다')
        $('.overlay').hide()
      }
    });
}
function second(){
$.ajax({
      url: 'https://api.luniverse.io/tx/v1.1/transactions/FINALVOTE',
      type: 'POST',
      crossDomain: true,
      dataType: 'json',
      headers: {
        'api-key': Config.dapp.apiKey,
      },
      data:{
          "from":userkey,
          "inputs":{
            "candidate":"1"
          }
      },
      success: function (data) {
        alert(`후보자 투표를 완료했습니다`)
        $.ajax({
          url: 'https://api.luniverse.io/tx/v1.1/transactions/Rewarding',
          type: 'POST',
          crossDomain: true,
          dataType: 'json',
          headers: {
            'api-key': Config.dapp.apiKey,
          },
          data:{
              "inputs":{
                "receiverAddress":userkey,
                "valueAmount":"1"
              }
          },
          success: function (data) {
            alert(`토큰발급했습니다`)
    
            $('.overlay').hide()
          },
          error: function (data) {
            alert('토큰을 발급하지 못했습니다')
            $('.overlay').hide()
          }
        });
  
        $('.overlay').hide()
      },
      error: function (data) {
        alert('후보자 투표에 실패했습니다')
        $('.overlay').hide()
      }
    });
}
function firstresult(){
  $.ajax({
    url: 'https://api.luniverse.io/tx/v1.1/transactions/FINALRESULT',
    type: 'POST',
    crossDomain: true,
    dataType: 'json',
    headers: {
      'api-key': Config.dapp.apiKey,
    },
    data:{
        "from":"0x354ba6b584faf0e8e596c879ae9401f52a0a728c",
        "inputs":{
          "candidate":"0"
        }
    },
    success: function (data) {
      alert(`후보자 투표결과입니다`)
      $('.overlay').hide()
    },
    error: function (data) {
      alert('후보자 투표 결과 불러오기에 실패했습니다')
      $('.overlay').hide()
    }
  });
}

function secondresult(){
  $.ajax({
    url: 'https://api.luniverse.io/tx/v1.1/transactions/FINALRESULT',
    type: 'POST',
    crossDomain: true,
    dataType: 'json',
    headers: {
      'api-key': Config.dapp.apiKey,
    },
    data:{
        "from":"0x354ba6b584faf0e8e596c879ae9401f52a0a728c",
        "inputs":{
          "candidate":"1"
        }
    },
    success: function (data) {
      alert(`후보자 투표 결과입니다`)
      $('.overlay').hide()
    },
    error: function (data) {
      alert('후보자 투표 결과 불러오기에 실패했습니다')
      $('.overlay').hide()
    }
  });
}