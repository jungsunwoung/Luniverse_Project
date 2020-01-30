var myToken;
function generate_wallet(value) {
    $.ajax({
      url: 'https://api.luniverse.io/tx/v1.1/wallets',
      type: 'POST',
      crossDomain: true,
      dataType: 'json',
      headers: {
        'api-key': Config.dapp.apiKey,
      },
      data:{
          'walletType':"LUNIVERSE",
          "userKey":userkey
      },
      success: function (data) {
        alert(`지갑생성에 성공하였습니다`)
        var myAddress=data.data.address
        var addressPoint=document.getElementById("addressPoint")
        var newone=document.createElement("new")
        newone.innerHTML=myAddress
        addressPoint.appendChild(newone)
        alert(data.data.address)
        $('.overlay').hide()
      },
      error: function (data) {
        alert('지갑생성에 실패했습니다')
        $('.overlay').hide()
      }
    });
}
function vault_click(){
    $.ajax({
        url: 'https://api.luniverse.io/tx/v1.1/auth/token',
        type: 'POST',
        crossDomain: true,
        dataType: 'json',
        headers: {
          'api-key': Config.dapp.apiKey,
        },
        data:{
            "userKey":userkey
        },
        success: function (data) {
          alert(`valut service`)
          myToken=data.data.token
          var vaultPoint=document.getElementById("vaultPoint")
          var newone=document.createElement("new")
          newone.innerHTML=myToken
          vaultPoint.appendChild(newone)
         
        },
        error: function (data) {
          alert('vault service failed')
          $('.overlay').hide()
        }
      });
    }
function keep_click(){
    
    alert(myToken);
    $.ajax({
        url: 'https://api.luniverse.io/tx/v1.1/vaults',
        type: 'POST',
        crossDomain: true,
        dataType: 'json',
        headers: {
          'Authorization':myToken
        },
        data:{
            "encrypted":"keystore"
        },
        success: function (data) {
          alert(`Success`)
          alert(data.data.adderss)
          $('.overlay').hide()
        },
        error: function (data) {
          alert('vault service failed')
          $('.overlay').hide()
        }
      });
}