const tjdb = require('tjdb');
const fs = require('fs');

window.onload = () => {
    let db;
    let createBtn = document.getElementById("createBtn");
    let createDB = document.getElementById("createDB");

    createDB.style.display = "none";

    createBtn.addEventListener("click", () => {
        console.log(createDB.style.display);
        createDB = document.getElementById("createDB");
        if(createDB.style.display === "none") {
            createDB.style.display = "block";
        } else {
            createDB.style.display = "none";
        }
    });

    createDB.addEventListener("submit", (e) => {
        e.preventDefault();
        let name = document.getElementById("dbName").value;
        let path = document.getElementById("path").files[0].path;

        name += ".tjdb";

        if(fs.existsSync(path + `/${name}`)) {
            alert("DB File already exists");
            throw new Error("DB File already exists");
            return;
        }

        try {
            db = new tjdb(path + `/${name}`);
        } catch (e) {
            alert("An Error Occured");
            throw new Error();
            return;
        }
        
        alert("DB Sucessfully Created");
        document.getElementById("activeDB").innerHTML = name;
        document.getElementById("act").style.color = "lightgreen";
    });
}