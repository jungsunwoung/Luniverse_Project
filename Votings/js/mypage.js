function check(value) {
  $.ajax({
    url: 'https://api.luniverse.io/tx/v1.1/wallets/'+value+'/VO/VR/balance',
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    headers: {
      'api-key': Config.dapp.apiKey,
    },
    success: function (data) {
      alert(`지갑 조회 결과입니다`)
      var myToken=data.data.balance
      var tokenPoint=document.getElementById("spt")
      var newone=document.createElement("new")
      newone.innerHTML=myToken
      tokenPoint.appendChild(newone)
      alert(data.data.balance)
      $('.overlay').hide()
    },
    error: function (data) {
      alert('지갑조회에 실패했습니다')
      $('.overlay').hide()
    }
  });
}