contract.Record({}, {fromBlock: 0, toBlock: 'latest'}).get(function(err, res) {
  console.log(res);
  var all_data = [];
  for(var i in res) {
    var cur = res[i].args;
    all_data.push([cur.date.toString(), cur.accounts, cur.date.money?"金錢":"",
      cur.amount.toString(), cur.object, cur.uniformNumbers, cur.receipt, cur.abnormal?"是":""]);
  }
  console.log(all_data);
  randerPage(all_data);
});

function randerPage(all_data) {
  // var all_data = [[ "1051230" , "營利事業捐贈收入" , "金錢" , "6000" , "優泊股份有限公司" , "42781323" , "10510176500057200000" , "" ]];
  var now_p = 0;
  
  var parameters = location.search.substring(1).split("&");
  var t = [];
  var temp = parameters[0].split("=");
  t[0] = unescape(temp[1]);
  temp = parameters[1].split("=");
  t[1] = unescape(temp[1]);
  temp = parameters[2].split("=");
  t[2] = unescape(temp[1]);
  temp = parameters[3].split("=");
  t[3] = unescape(temp[1]);
  temp = parameters[4].split("=");
  t[4] = unescape(temp[1]);
  temp = parameters[5].split("=");
  t[5] = unescape(temp[1]);
  temp = parameters[6].split("=");
  t[6] = unescape(temp[1]);
  temp = parameters[7].split("=");
  t[7] = unescape(temp[1]);
  
  filt( t , all_data );
  
  function filt( t ) {
    var fdate = t[0];
    var ftype = t[1];
    var fisMoney = t[2];
    var famount = t[3];
    var fcontributor = t[4];
    var fid = t[5];
    var flist_id = t[6];
    var ferror = t[7];
    //f-xx = filters : "*" or "" means get all
    
    //get data from blockchain and initial all_data and length( length of all_data )
    
    update();
    document.getElementById("prev").style.display = "none";
    if( !( all_data.length > (now_p + 1) * 10 ) ) document.getElementById("next").style.display = "none";
  }
  
  function update()
  {
    for(var i = 1; i <= Math.min(10 , all_data.length - now_p * 10); i++)
    {
      for(var j = 1; j <= 8; j++)
      {
        document.getElementById("t"+i+j).innerHTML = all_data[now_p*10+i-1][j-1];
      }
    }
    
    for(var i = Math.min(10 , all_data.length - now_p * 10) + 1; i <= 10; i++)
    {
      for(var j = 1; j <= 8; j++)
      {
        document.getElementById("t"+i+j).style.display = 'none';
      }
    }
  }
  
  function prev()
  {
    now_p--;
    
    if( now_p == 0 ) document.getElementById("prev").style.display = "none";
    else document.getElementById("prev").style.display = "initial";
    
    if( !( all_data.length > (now_p + 1) * 10 ) ) document.getElementById("next").style.display = "none";
    else document.getElementById("next").style.display = "initial";
    
    update();
  }
  
  function next()
  {
    now_p++;
    
    if( now_p == 0 ) document.getElementById("prev").style.display = "none";
    else document.getElementById("prev").style.display = "initial";
    
    if( !( all_data.length > (now_p + 1) * 10 ) ) document.getElementById("next").style.display = "none";
    else document.getElementById("next").style.display = "initial";
    
    update();
  }
}
