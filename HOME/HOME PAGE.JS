let locations = [
    'Sydney',
    'Auburn',
    'Burwood',
    'Parramatta',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
const searchbutton = document.getElementById("searchbutton");

searchbutton.onclick = function() {
    text = inputBox.value.toUpperCase();
    location.href = "../" + text + "/" + text + " PAGE.HTML";
}

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = locations.filter((keyword)=>{
        return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}

