let c1 = "Pending";
let c2 = "Resolved";
let c3 = "";
let c4 = "";
let count = 102;

// 1. User Register karne ke liye
function register() {
  let name = document.getElementById("n").value;
  let email = document.getElementById("e").value;
  let pass = document.getElementById("p").value;

  if (name == "" || email == "" || pass == "") {
    alert("Please fill all details");
  } else {
    alert("Registration Successful " + name);
  }
}

// 2. Nayi Complaint Submit karne ke liye
function submitComp() {
  let title = document.getElementById("t").value;
  let dept = document.getElementById("d").value;

  if (title == "" || dept == "") {
    alert("Please enter title and department");
  } else {
    count = count + 1;

    if (count == 103) {
      c3 = "Pending";
      document.getElementById("row3").style.display = "table-row";
      document.getElementById("newid1").innerHTML = "CMP103";
      document.getElementById("newtitle1").innerHTML = title;
      document.getElementById("newdept1").innerHTML = dept;
      document.getElementById("newstatus1").innerHTML = "Pending";
      document.getElementById("newstatus1").style.color = "red";
      document.getElementById("showid").innerHTML = "Complaint Submitted! ID: CMP103";
    } 
    
    if (count == 104) {
      c4 = "Pending";
      document.getElementById("row4").style.display = "table-row";
      document.getElementById("newid2").innerHTML = "CMP104";
      document.getElementById("newtitle2").innerHTML = title;
      document.getElementById("newdept2").innerHTML = dept;
      document.getElementById("newstatus2").innerHTML = "Pending";
      document.getElementById("newstatus2").style.color = "red";
      document.getElementById("showid").innerHTML = "Complaint Submitted! ID: CMP104";
    }
  }
}

// 3. Admin Solve Buttons (Status ko Resolved aur Button ko Done karne ke liye)
function done1() {
  c1 = "Resolved";
  document.getElementById("s1").innerHTML = "Resolved";
  document.getElementById("s1").style.color = "green";
  document.getElementById("b1").innerHTML = "Done";
}

function done3() {
  c3 = "Resolved";
  document.getElementById("newstatus1").innerHTML = "Resolved";
  document.getElementById("newstatus1").style.color = "green";
  document.getElementById("b3").innerHTML = "Done";
}

function done4() {
  c4 = "Resolved";
  document.getElementById("newstatus2").innerHTML = "Resolved";
  document.getElementById("newstatus2").style.color = "green";
  document.getElementById("b4").innerHTML = "Done";
}

// 4. ID se Status Search karne ke liye
function find() {
  let id = document.getElementById("search").value;

  if (id == "CMP101") {
    document.getElementById("statusout").innerHTML = "Status: " + c1;
  } else if (id == "CMP102") {
    document.getElementById("statusout").innerHTML = "Status: " + c2;
  } else if (id == "CMP103") {
    document.getElementById("statusout").innerHTML = "Status: " + c3;
  } else if (id == "CMP104") {
    document.getElementById("statusout").innerHTML = "Status: " + c4;
  } else {
    document.getElementById("statusout").innerHTML = "ID not found";
  }
}