!function(e){var r={};function n(i){if(r[i])return r[i].exports;var c=r[i]={i:i,l:!1,exports:{}};return e[i].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=r,n.d=function(e,r,i){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var c in e)n.d(i,c,function(r){return e[r]}.bind(null,c));return i},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=0)}([function(e,r){addPulsar1=async()=>{window.getOfflineSigner&&window.keplr||alert("Please install keplr extension"),window.keplr.experimentalSuggestChain({chainId:"pulsar-1",chainName:"Secret Pulsar",rpc:"https://rpc.pulsar.stakeordie.com",rest:"https://api.pulsar.stakeordie.com",bip44:{coinType:118},coinType:118,stakeCurrency:{coinDenom:"SCRT",coinMinimalDenom:"uscrt",coinDecimals:6},bech32Config:{bech32PrefixAccAddr:"secret",bech32PrefixAccPub:"secretpub",bech32PrefixValAddr:"secretvaloper",bech32PrefixValPub:"secretvaloperpub",bech32PrefixConsAddr:"secretvalcons",bech32PrefixConsPub:"secretvalconspub"},currencies:[{coinDenom:"SCRT",coinMinimalDenom:"uscrt",coinDecimals:6}],feeCurrencies:[{coinDenom:"SCRT",coinMinimalDenom:"uscrt",coinDecimals:6}],gasPriceStep:{low:.1,average:.25,high:.4},features:["secretwasm","ibc-transfer"]})},addPulsar1CLI=async()=>{window.getOfflineSigner&&window.keplr||alert("Please install keplr extension"),window.keplr.experimentalSuggestChain({chainId:"pulsar-1",chainName:"Secret Pulsar",rpc:"https://rpc.pulsar.stakeordie.com",rest:"https://api.pulsar.stakeordie.com",bip44:{coinType:529},coinType:529,stakeCurrency:{coinDenom:"SCRT",coinMinimalDenom:"uscrt",coinDecimals:6},bech32Config:{bech32PrefixAccAddr:"secret",bech32PrefixAccPub:"secretpub",bech32PrefixValAddr:"secretvaloper",bech32PrefixValPub:"secretvaloperpub",bech32PrefixConsAddr:"secretvalcons",bech32PrefixConsPub:"secretvalconspub"},currencies:[{coinDenom:"SCRT",coinMinimalDenom:"uscrt",coinDecimals:6}],feeCurrencies:[{coinDenom:"SCRT",coinMinimalDenom:"uscrt",coinDecimals:6}],gasPriceStep:{low:.1,average:.25,high:.4},features:["secretwasm","ibc-transfer"]})},addSanford=async()=>{window.getOfflineSigner&&window.keplr||alert("Please install keplr extension"),window.keplr.experimentalSuggestChain({chainId:"SanfordNetwork",chainName:"IDEP Sanford",rpc:"http://idep.trivium.network:26657",rest:"http://idep.trivium.network:31317",bip44:{coinType:118},coinType:118,stakeCurrency:{coinDenom:"IDEP",coinMinimalDenom:"idep",coinDecimals:8},bech32Config:{bech32PrefixAccAddr:"idep",bech32PrefixAccPub:"ideppub",bech32PrefixValAddr:"idepvaloper",bech32PrefixValPub:"idepvaloperpub",bech32PrefixConsAddr:"idepvalcons",bech32PrefixConsPub:"idepvalconspub"},currencies:[{coinDenom:"IDEP",coinMinimalDenom:"idep",coinDecimals:8}],feeCurrencies:[{coinDenom:"IDEP",coinMinimalDenom:"idep",coinDecimals:8}],gasPriceStep:{low:0,average:0,high:.1},features:["no-legacy-stdTx","ibc-transfer"]})}}]);