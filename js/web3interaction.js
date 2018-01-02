if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

//check for metamask
if(!web3.currentProvider.isMetaMask){
  $('#metaMask').css({'display':'block'})
  // var metaUrl = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en'
  // alert('this website is best used with MetaMask '+metaUrl)
}



  web3.eth.getAccounts(function(e, r){
    console.log(r)
    $('#ethAccountID').html(r)
    web3.eth.getBalance(r.toString(),function(e, r){
      console.log(e)
      console.log(r.toNumber())
      $('#currentBalance').html(web3.fromWei(r.toNumber()))

    })
  })

var CrowdSailContract = web3.eth.contract([ { "constant": false, "inputs": [], "name": "checkGoalReached", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "deadline", "outputs": [ { "name": "", "type": "uint256", "value": "1517480506" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "beneficiary", "outputs": [ { "name": "", "type": "address", "value": "0x775261767bef742a7ebaa25e919846280f36c011" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "tokenReward", "outputs": [ { "name": "", "type": "address", "value": "0x4ffb0ed1a85ef0cae1dca8be76d88fce6ce0eb67" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "fundingGoal", "outputs": [ { "name": "", "type": "uint256", "value": "4.2e+21" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "amountRaised", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "price", "outputs": [ { "name": "", "type": "uint256", "value": "1000000000000000000" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "safeWithdrawal", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "ifSuccessfulSendTo", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "if Successful Send To", "template": "elements_input_address", "value": "0x4ffB0eD1A85Ef0cae1DcA8be76D88fcE6CE0Eb67" }, { "name": "fundingGoalInEthers", "type": "uint256", "index": 1, "typeShort": "uint", "bits": "256", "displayName": "funding Goal In Ethers", "template": "elements_input_uint", "value": "4200" }, { "name": "durationInMinutes", "type": "uint256", "index": 2, "typeShort": "uint", "bits": "256", "displayName": "duration In Minutes", "template": "elements_input_uint", "value": "45000" }, { "name": "etherCostOfEachToken", "type": "uint256", "index": 3, "typeShort": "uint", "bits": "256", "displayName": "ether Cost Of Each Token", "template": "elements_input_uint", "value": "1" }, { "name": "addressOfTokenUsedAsReward", "type": "address", "index": 4, "typeShort": "address", "bits": "", "displayName": "address Of Token Used As Reward", "template": "elements_input_address", "value": "" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "recipient", "type": "address" }, { "indexed": false, "name": "totalAmountRaised", "type": "uint256" } ], "name": "GoalReached", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "backer", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "isContribution", "type": "bool" } ], "name": "FundTransfer", "type": "event" } ])
var CrowdSail = CrowdSailContract.at('0xE127b7F65113E7faf59049de70f0a9C21B249B30');

var SeaShellTokenContract = web3.eth.contract([ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string", "value": "Sea Shell" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256", "value": "100" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_value", "type": "uint256" } ], "name": "burn", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "burnFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string", "value": "🐚" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_extraData", "type": "bytes" } ], "name": "approveAndCall", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [ { "name": "initialSupply", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "initial Supply", "template": "elements_input_uint", "value": "100" }, { "name": "_decimals", "type": "uint8", "index": 1, "typeShort": "uint", "bits": "8", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;decimals", "template": "elements_input_uint", "value": "0" }, { "name": "tokenName", "type": "string", "index": 2, "typeShort": "string", "bits": "", "displayName": "token Name", "template": "elements_input_string", "value": "Sea Shell" }, { "name": "tokenSymbol", "type": "string", "index": 3, "typeShort": "string", "bits": "", "displayName": "token Symbol", "template": "elements_input_string", "value": "🐚" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Burn", "type": "event" } ]);
var SeaShellToken = SeaShellTokenContract.at('0x4ffB0eD1A85Ef0cae1DcA8be76D88fcE6CE0Eb67');

var DemocraseaContract = web3.eth.contract([ { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "proposals", "outputs": [ { "name": "recipient", "type": "address" }, { "name": "amount", "type": "uint256" }, { "name": "description", "type": "string" }, { "name": "votingDeadline", "type": "uint256" }, { "name": "executed", "type": "bool" }, { "name": "proposalPassed", "type": "bool" }, { "name": "numberOfVotes", "type": "uint256" }, { "name": "proposalHash", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "proposalNumber", "type": "uint256" }, { "name": "transactionBytecode", "type": "bytes" } ], "name": "executeProposal", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "sharesTokenAddress", "outputs": [ { "name": "", "type": "address", "value": "0x4ffb0ed1a85ef0cae1dca8be76d88fce6ce0eb67" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "numProposals", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "sharesAddress", "type": "address" }, { "name": "minimumSharesToPassAVote", "type": "uint256" }, { "name": "minutesForDebate", "type": "uint256" } ], "name": "changeVotingRules", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "debatingPeriodInMinutes", "outputs": [ { "name": "", "type": "uint256", "value": "1337" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "minimumQuorum", "outputs": [ { "name": "", "type": "uint256", "value": "10" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0x038343bfaf1f35b01d91513c8472764d55474045" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_token", "type": "address" }, { "name": "_extraData", "type": "bytes" } ], "name": "receiveApproval", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "beneficiary", "type": "address" }, { "name": "weiAmount", "type": "uint256" }, { "name": "jobDescription", "type": "string" }, { "name": "transactionBytecode", "type": "bytes" } ], "name": "newProposal", "outputs": [ { "name": "proposalID", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "beneficiary", "type": "address" }, { "name": "etherAmount", "type": "uint256" }, { "name": "jobDescription", "type": "string" }, { "name": "transactionBytecode", "type": "bytes" } ], "name": "newProposalInEther", "outputs": [ { "name": "proposalID", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "proposalNumber", "type": "uint256" }, { "name": "supportsProposal", "type": "bool" } ], "name": "vote", "outputs": [ { "name": "voteID", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "proposalNumber", "type": "uint256" }, { "name": "beneficiary", "type": "address" }, { "name": "weiAmount", "type": "uint256" }, { "name": "transactionBytecode", "type": "bytes" } ], "name": "checkProposalCode", "outputs": [ { "name": "codeChecksOut", "type": "bool", "value": false } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "sharesAddress", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "shares Address", "template": "elements_input_address" }, { "name": "minimumSharesToPassAVote", "type": "uint256", "index": 1, "typeShort": "uint", "bits": "256", "displayName": "minimum Shares To Pass A Vote", "template": "elements_input_uint" }, { "name": "minutesForDebate", "type": "uint256", "index": 2, "typeShort": "uint", "bits": "256", "displayName": "minutes For Debate", "template": "elements_input_uint" } ], "payable": true, "stateMutability": "payable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "proposalID", "type": "uint256" }, { "indexed": false, "name": "recipient", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "description", "type": "string" } ], "name": "ProposalAdded", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "proposalID", "type": "uint256" }, { "indexed": false, "name": "position", "type": "bool" }, { "indexed": false, "name": "voter", "type": "address" } ], "name": "Voted", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "proposalID", "type": "uint256" }, { "indexed": false, "name": "result", "type": "uint256" }, { "indexed": false, "name": "quorum", "type": "uint256" }, { "indexed": false, "name": "active", "type": "bool" } ], "name": "ProposalTallied", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "newMinimumQuorum", "type": "uint256" }, { "indexed": false, "name": "newDebatingPeriodInMinutes", "type": "uint256" }, { "indexed": false, "name": "newSharesTokenAddress", "type": "address" } ], "name": "ChangeOfRules", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "sender", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "receivedEther", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "_from", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }, { "indexed": false, "name": "_token", "type": "address" }, { "indexed": false, "name": "_extraData", "type": "bytes" } ], "name": "receivedTokens", "type": "event" } ]);
var Democrasea = DemocraseaContract.at('0x775261767Bef742a7Ebaa25E919846280f36C011')

//html span ids tokenAddress  democracyAddress   crowdsaleAddress
$('#tokenAddress').html(SeaShellToken.address)
$('#democracyAddress').html(Democrasea.address)
$('#crowdsaleAddress').html(CrowdSail.address)
SeaShellToken.symbol(function(e, r){
  console.log(e)
  console.log(r)
  $('#token_symbol').text(r)
})

//token eevent
var shellTransferEvent = SeaShellToken.Transfer({}, 'latest')
shellTransferEvent.watch(function(error, result){
  if(error){
    console.log(error)
  }else if(result){
    console.log(result)

  }
})


//crowdsail events
var crowdSailFundTransferEvent = CrowdSail.FundTransfer()
crowdSailFundTransferEvent.watch(function(error, result){
  if(error){
    console.log(error)
  }else if(result){
    console.log(result)

  }
})


//setup event watching from Democracy
var proposalAddedEvent = Democrasea.ProposalAdded({}, 'latest')

   proposalAddedEvent.watch(function(error, result){
      if (!error){
        console.log(result)
          if (result.blockHash != $('#insTrans').html())
            $("#loader").hide();
          
          $('#insTrans').html('Block hash: '+result.blockHash)
          $("#loader").hide();
          $("#instructor").html(web3.toAscii(result.args.fname) + ' ' + web3.toAscii(result.args.lname) + ' (' + result.args.age + ' years old)');
          updateCount()
        } else {
            $("#loader").hide();
            console.log(error);
        }
    });

// event ProposalAdded(uint proposalID, address recipient, uint amount, string description);
// event Voted(uint proposalID, bool position, address voter);
// event ProposalTallied(uint proposalID, uint result, uint quorum, bool active);
// event ChangeOfRules(uint newMinimumQuorum, uint newDebatingPeriodInMinutes, address newSharesTokenAddress);

$('#sendEtherInLethalAmount').on('input', function(e){
  let value = e.target.value
  let wei = web3.toWei(value)
  $('#WeiView').html(wei)
})
$('#sendEtherBtn').on('click', function(){
  sendEther($('#sendEtherInLethalAmount').val())
})
function sendEther(amount){
  console.log(amount)
  web3.eth.sendTransaction({
    from:web3.eth.coinbase,
    to:CrowdSail.address,
    value:web3.toWei(amount, "ether")
  }, function(e, r){
    if(e){
      toastr.warning(e, 'Failed to send Ether')
      console.log(e)

    }else if(r){
      toastr.success(r, 'Successfully send ether')
      console.log(r)
    }
    $('#sendEtherInLethalAmount').val('')
    $('#WeiView').html('')


  }
  )


}





function handleBasicCallback(e, r, options){
  //TODO
  // console.log('options are and opbject? '+options)
  // console.log(options)
  for (let k in options){
    // console.log(k +' '+options[k])
    $('#'+k).html(options[k])
  }
  if(e){
    // console.log('error: '+e)
    console.log(e)

  }else if(r){
    console.log(r)
    // console.log('peer count = '+r)

  }else{
    console.log('error getting peer count')
  }
}

// function(e, r){
// console.log(e)
// console.log(r)
// }

web3.net.getPeerCount(function(e, r){
  handleBasicCallback(e, r, {peerCount:r})
})

$('#web3APIVersion').html(web3.version.api)

web3.version.getNetwork(function(e, r){
    handleBasicCallback(e, r, {web3versionNetwork:r})

})

web3.version.getEthereum(function(e, r){    //parse the returned hexedecimal
    handleBasicCallback(e, r, {web3EthereumVersion:parseInt(r, 16)})
})




$('#web3ConnectionStatus').html(web3.isConnected())



web3.net.getListening(function(e, r){
  handleBasicCallback(e, r, {webisListening:r})

})



var ethFunction = web3.eth
for(let k in ethFunction){
  // console.log(k)
  var option = "<option value='"+k+"'>"+k+"</option>"
  $('#ethFunctions').append(option)
}


//see latest block and time since last block
var newestBlockTimer;
var blockTimerStart=0;
var currentBlockID;
$('#timeSinceLastBlock').html(blockTimerStart);
initLatestBlockTimer()
function initLatestBlockTimer(){
  newestBlockTimer = setInterval(function(){
    web3.eth.getBlockNumber(function(e, r){
      console.log(e)
      console.log(r)
      if(r==$('#currentBlockID').html()){
        console.log(r)
        console.log($('#timeSinceLastBlock').html())
        console.log('its the same, increment the clock')
        $('#timeSinceLastBlock').html(blockTimerStart);
        blockTimerStart++
      }else{
        console.log(r)
        console.log($('#timeSinceLastBlock').html())
        console.log('its new, update latest block and reset the clock')
        $('#currentBlockID').html(r)
        clearInterval(newestBlockTimer)
        blockTimerStart=0
        initLatestBlockTimer()

      }
      })

  }, 1000)
}








// $('#web3versionNetwork').html(web3.version.network)


// var peerCount = web3.net.getPeerCount(function(e, r){
//   if(e){
//     console.log('error: '+e)
//     console.log(e)

//   }else if(r){
//     console.log(r)
//     console.log('peer count = '+r)

//   }else{
//     console.log('error getting peer count')
//   }
// })