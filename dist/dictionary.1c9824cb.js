const input = document.querySelector(".input");
const list = document.querySelector(".inputlist");
const Word = document.querySelector(".word");
const definition = document.querySelector(".definition");
// Following code I learned form this website  https://codepen.io/yoyo/pen/LYPmvPo
const dictionaryJson = "https://raw.githubusercontent.com/adambom/dictionary/master/dictionary.json";
function searchDict(e) {
    e.preventDefault();
    fetch(dictionaryJson).then(function(response) {
        return response.json();
    }).then(function(data) {
        e.preventDefault;
        let word = input.value;
        console.log(input.value);
        let searchKeyword = word.toUpperCase();
        Object.keys(data).forEach(function(key) {
            if (key === searchKeyword) {
                Word.innerHTML = searchKeyword;
                if (searchKeyword === data[key]) definition.innerHTML = "Not found";
                else definition.innerHTML = data[key];
                console.log(data[key]);
            }
        });
    });
}
list.addEventListener("submit", searchDict);

//# sourceMappingURL=dictionary.1c9824cb.js.map
