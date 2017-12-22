function record() {
  var data = "date:         " + document.getElementById("date").value + "\n";
  data += "type :         " + document.getElementById("type").value + "\n";
  data += "isMoney :      " + document.getElementById("isMoney").value + "\n";
  data += "amount :       " + document.getElementById("amount").value + "\n";
  data += "contributor :  " + document.getElementById("contributor").value + "\n";
  data += "id :           " + document.getElementById("id").value + "\n";
  data += "list_id :      " + document.getElementById("list_id").value + "\n";
  data += "error :        " + document.getElementById("error").value + "\n";
  // alert(data);
  console.log(document.getElementById("date").value, document.getElementById("type").value,
    document.getElementById("isMoney").value=="金錢", document.getElementById("amount").value, document.getElementById("contributor").value,
    document.getElementById("id").value, document.getElementById("list_id").value, document.getElementById("error").value=="1");
  contract.record.sendTransaction(document.getElementById("date").value, document.getElementById("type").value,
    document.getElementById("isMoney").value=="金錢", document.getElementById("amount").value, document.getElementById("contributor").value,
    document.getElementById("id").value, document.getElementById("list_id").value, document.getElementById("error").value=="1", function(err, res){
      if(err) {
        console.error(err);
      } else {
        console.log(res);
        window.open("https://ropsten.etherscan.io/tx/" + res);
      }
    });
}