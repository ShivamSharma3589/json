
let Container = document.getElementById('container');

function born(val) {
    let child = document.createElement('h2');
    child.innerHTML = val;
    Container.appendChild(child);
}


fetch("list.JSON")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            born(data[i]);

        }
    });
