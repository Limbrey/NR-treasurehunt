function markForm1() {
    var OverallMark = 0;
    OverallMark += parseInt(document.getElementById("bughunt1").value);
    OverallMark += parseInt(document.getElementById("bughunt2").value);
    OverallMark += parseInt(document.getElementById("bughunt3").value);
    if (document.getElementById("bughunt4").value.match("gparker")) OverallMark++;
    OverallMark += parseInt(document.getElementById("bughunt5").value);
    if (OverallMark>0) OverallMark = OverallMark * 100 / 5;
    document.getElementById("bughunt_grade").innerHTML = 'Bug Hunt: ' + OverallMark + '%';
  }

  function markForm2() {
    var OverallMark = 0;
    OverallMark += parseInt(document.getElementById("deliv1").value);
    OverallMark += parseInt(document.getElementById("deliv2").value);
    var Q3Mark = 0;
    if (document.getElementById("deliv3").checked) Q3Mark += parseInt(document.getElementById("deliv3").value);
    if (document.getElementById("deliv4").checked) Q3Mark += parseInt(document.getElementById("deliv4").value);
    if (document.getElementById("deliv5").checked) Q3Mark += parseInt(document.getElementById("deliv5").value);
    if (document.getElementById("deliv6").checked) Q3Mark += parseInt(document.getElementById("deliv6").value);
    if (document.getElementById("deliv7").checked) Q3Mark += parseInt(document.getElementById("deliv7").value);
    if (document.getElementById("deliv8").checked) Q3Mark += parseInt(document.getElementById("deliv8").value);
    if (document.getElementById("deliv9").checked) Q3Mark += parseInt(document.getElementById("deliv9").value);
    if (document.getElementById("deliv10").checked) Q3Mark += parseInt(document.getElementById("deliv10").value);
    if (Q3Mark == 3) OverallMark ++;
    if (OverallMark>0) OverallMark = Math.floor(OverallMark * 100 / 3);
    document.getElementById("delivery_grade").innerHTML = 'Special Delivery: ' + OverallMark + '%';
  }


  function markForm3() {
    var OverallMark = 0;
    // https://synthetics.newrelic.com/accounts/1324566/monitors/17c6a896-6063-48e3-88e9-4499d6542540/results/95a5cdee-a891-4918-94bd-32071d3f9f3a?view=timeline
    if (document.getElementById("curve1").value.match("synthetics.newrelic.com") && document.getElementById("curve1").value.match("results")) OverallMark++;
    OverallMark += parseInt(document.getElementById("curve2").value);
    OverallMark += parseInt(document.getElementById("curve3").value);
    if (OverallMark>0) OverallMark = Math.floor(OverallMark * 100 / 3);
    document.getElementById("curve_grade").innerHTML = 'Ahead of the Curve: ' + OverallMark + '%';
  }


  function markForm4() {
    var OverallMark = 0;
    if (parseInt(document.getElementById("tying1").value)==6) OverallMark++;
    OverallMark += parseInt(document.getElementById("tying2").value);
    var Q3Mark = 0;
    if (document.getElementById("tying3").checked) Q3Mark += parseInt(document.getElementById("tying3").value);    
    if (document.getElementById("tying4").checked) Q3Mark += parseInt(document.getElementById("tying4").value);
    if (document.getElementById("tying5").checked) Q3Mark += parseInt(document.getElementById("tying5").value);
    if (document.getElementById("tying6").checked) Q3Mark += parseInt(document.getElementById("tying6").value);
    if (document.getElementById("tying7").checked) Q3Mark += parseInt(document.getElementById("tying7").value);
    if (document.getElementById("tying8").checked) Q3Mark += parseInt(document.getElementById("tying8").value);
    if (document.getElementById("tying9").checked) Q3Mark += parseInt(document.getElementById("tying9").value);
    if (Q3Mark == 2) OverallMark ++;    
    if (OverallMark>0) OverallMark = Math.floor(OverallMark * 100 / 3);
    document.getElementById("tying_grade").innerHTML = 'Tying it Together: ' + OverallMark + '%';
  }