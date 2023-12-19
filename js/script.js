
var sitelist;


if (localStorage.getItem("site") == null) {
    sitelist = [] ;
}
else{
    sitelist = JSON.parse(localStorage.getItem("site"));
    show(sitelist);
}

function restore() {

if (validatename() && validateurl()) {
    
var site = {
    name : document.getElementById("sitename").value ,
    url : document.getElementById("url").value,
}
sitelist.push(site);

localStorage.setItem("site",JSON.stringify(sitelist));

show(sitelist);
cleardata();
}

else{
document.getElementById("alert").classList.remove("d-none");
}

}

function show(sitelist) {
    
var cartona = ``;

    for (var i = 0; i < sitelist.length; i++) {
cartona += `<tr>
<td>${i+1}</td>
<td>${sitelist[i].name}</td>
<td><a target="blank" href="${sitelist[i].url}"><button class="btn btn-warning">Visit</button></a></td>
<td><button onclick="deletesite(${i})" class="btn btn-danger">Delete</button></td>
</tr>`;
    }

document.getElementById("overhere").innerHTML = cartona;

}

function cleardata() {
    document.getElementById("sitename").value = "";
    document.getElementById("url").value = "";
}

function deletesite(index) {
    sitelist.splice(index,1);
    localStorage.setItem("site",JSON.stringify(sitelist));
    show(sitelist);
}


function validatename() {
    var regex = /^[A-Z][a-z0-9]{3,}$/;
    if(regex.test(sitename.value)){
        document.getElementById("sitename").classList.remove("is-invalid");
        document.getElementById("sitename").classList.add("is-valid");
        return true;
    }
    else{
        document.getElementById("sitename").classList.remove("is-valid");
        document.getElementById("sitename").classList.add("is-invalid");
        return false;
    }

}


function validateurl() {
    var regex = /^(www\.)[a-z0-9]{3,}(\.com)$/i;
    if(regex.test(url.value)){
        document.getElementById("url").classList.remove("is-invalid");
        document.getElementById("url").classList.add("is-valid");
        return true;
    }
    else{
        document.getElementById("url").classList.remove("is-valid");
        document.getElementById("url").classList.add("is-invalid");
        return false;
    }

}