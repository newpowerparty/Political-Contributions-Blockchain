if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("https://api.myetherapi.com/rop"));
}
var contractAddress = "0x152c9c6bb10df4800c85cd2517c36e48d7368aef";
var contract = web3.eth.contract([{"constant":false,"inputs":[{"name":"date","type":"uint32"},{"name":"accounts","type":"string"},{"name":"money","type":"bool"},{"name":"amount","type":"uint64"},{"name":"object","type":"string"},{"name":"uniformNumbers","type":"string"},{"name":"receipt","type":"string"},{"name":"abnormal","type":"bool"}],"name":"record","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"date","type":"uint32"},{"indexed":false,"name":"accounts","type":"string"},{"indexed":false,"name":"money","type":"bool"},{"indexed":false,"name":"amount","type":"uint64"},{"indexed":false,"name":"object","type":"string"},{"indexed":false,"name":"uniformNumbers","type":"string"},{"indexed":false,"name":"receipt","type":"string"},{"indexed":false,"name":"abnormal","type":"bool"}],"name":"Record","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}])
  .at(contractAddress);

// Easier for debugging
function defaultCallback(err, res) {
  if(err) {
    console.error(err);
  } else {
    console.log(res);
  }
}
