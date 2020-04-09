function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5yaN0Eq0lj4":
        Script1();
        break;
      case "6ilYMbvX3hC":
        Script2();
        break;
      case "62IbBh0EKyY":
        Script3();
        break;
      case "6rNXD5c1CWp":
        Script4();
        break;
      case "5im1mG8xg0i":
        Script5();
        break;
      case "6lefr7mj6QA":
        Script6();
        break;
      case "5WF87AGP2KX":
        Script7();
        break;
      case "6Q5i6mUYB56":
        Script8();
        break;
      case "6FiqKtXvCby":
        Script9();
        break;
      case "6IkAlSAKb2h":
        Script10();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script8()
{
  $("#tab-customlink").show();
}

function Script9()
{
  $("#tab-customlink").show();
}

function Script10()
{
  window.print();
}

