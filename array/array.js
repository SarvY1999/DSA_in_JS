let data = [9, 45, 2, 8, 45, 23, 7, 78, 0, 11, 41, 77];

//traversing
for (i = 0; i < data.length; i++) {
    document.write(`Position: ${i} : Element ${data[i]}<br>`);
}

//Access Element
function getElement() {
    let ele = document.getElementById('element').value

    if (ele <= data.length && typeof parseInt(ele) === 'number' && ele >= 0) {
        alert(data[ele]);
    } else {
        alert("Enter a Valid Number");
    }
}


// Insert Element
//You can use Spilce() Function.
function insert() {
    let data = [60, 30, 10, 50, 89];
    let newEl = document.getElementById("new element").value
    newEl = parseInt(newEl);
    let pos = document.getElementById("position").value


    for (let i = data.length - 1; i >= 0; i--) {
        if (i >= pos) {
            data[i + 1] = data[i];  //inserting element to next postion
            if (i == pos) {
                data[i] = newEl;
            }
        }
    }
    console.log(data);
}


// Delete Element
function deleteEle() {
    let data = [10, 20, 30, 40, 50, 60];
    let position = document.getElementById("del_position").value
    position = parseInt(position);
    for (let i = position; i < data.length - 1; i++) {
        data[i] = data[i + 1];
    }
    data.length = data.length - 1;
    console.log(data)
}
