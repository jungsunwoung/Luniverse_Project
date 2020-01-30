var Const = {
    luniverse: {
      endpoint: {
        transactionAction: function(actionName) {
          return `https://cbt-api.luniverse.io/tx/v1.0/transactions/${actionName}`;
        },
        balanceOf: function(walletAddress, mtSymbol, stSymbol) {
          return `https://api.luniverse.io/tx/v1.1/wallets/bridge${walletAddress}/${mtSymbol}/${stSymbol}/balance`;
        }
      }
    }
  };
  