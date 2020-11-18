let array = [];
let e = "<hr/>";
function add_element_to_array() {
    array.push(document.getElementById("txtValue").value);
    for (let i = 0; i < array.length; i++) {
        e += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;
    e = "<hr/>";
    document.getElementById("txtValue ").value = '';
}

function deleteItem () {
    array.pop();
    for (let i = 0; i < array.length; i++) {
        e += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;
    e = "<hr/>";
}

function reverseArray () {
    let reverseA = [];
    for (i=array.length-1;i>=0;i--){
        reverseA.push(array[i]);
    }
    for (j = 0; j<reverseA.length;j++){
        e+= 'Element ' + j + ' = ' + reverseA[j] + '<br>';
    }
    document.getElementById("result").innerHTML = e;
    e = "<hr/>";
    array = reverseA;
}