let data = [10, 50, 90, 30, 40];
let list = document.getElementById("list_holder");

//to display array
for (let i = 0; i < data.length; i++) {
    list.append(` ${data[i]}, `);
}


function searchEle() {
    let item = document.getElementById('value').value;
    item = parseInt(item);
    for (let i = 0; i < data.length; i++) {
        if (data[i] === item) {
            document.write(`data is found at position ${i + 1}`)
        }
    }
}

