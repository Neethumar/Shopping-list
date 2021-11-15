function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status==200) {
        var response = JSON.parse(this.responseText);
        var grolist=response.list;
        var body = document.getElementById("tBody");
        var trow="";
  
        for (var i = 0; i < grolist.length; i++) {
          var trow = `<tr>
          <th scope="row">${grolist[i].sNo}</th>
          <td>${grolist[i].iNam}</td>
          <td>${grolist[i].qnty}</td>
          <td>${grolist[i].unit}</td>
          <td>${grolist[i].dept}</td>
          <td>${grolist[i].note}</td>
          <td><input class="check" type="checkbox"></td>
          </tr>`;
  
          body.innerHTML += trow;
        }
        
      }
      
    };
  
    xhttp.open("GET", "./list.json", true);
    xhttp.send();
  }
  
  window.addEventListener("load", ajax);