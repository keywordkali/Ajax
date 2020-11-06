
      

//below is creating the table dynamically
const baseurl = "http://localhost:8080/api";
const getAll =() => {
    $.getJSON(`${baseurl}/users/`)
    .done(res => {
        console.log(res);
        display(res);
    });
}
const display = (Users) => {
    let tbody = $("tbody");
    tbody.empty();
    for(let u of Users){
     let tr = $("<tr></tr>");
     let tdid= $(`<td>${u.id}</td>`);
     tr.append(tdid);
     let tun=$(`<td>${u.userName}</td>`);
     tr.append(tun);
     let tp=$(`<td>${u.password}</td>`);
     tr.append(tp);
     let tf=$(`<td>${u.firstName}</td>`);
     tr.append(tf);
     let tl=$(`<td>${u.lastName}</td>`);
     tr.append(tl);
     let tpn=$(`<td>${u.phoneNumber}</td>`);
     tr.append(tpn);
     let te=$(`<td>${u.email}</td>`);
     tr.append(te);
     let tisr=$(`<td>${u.reviewer}</td>`);
     tr.append(tisr);
     let tisa=$(`<td>${u.admin}</td>`);
     tr.append(tisa);
     tbody.append(tr);
       
    }
}
getAll();