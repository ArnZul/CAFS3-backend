// alert("Java script has loaded...");

function getPosts(url) {
  return fetch(url).then((response) => response.json());
  //.then((data) => {console.log(data);});
}

function fillTable(data) {
  let table = document.getElementById("table");
  data.forEach((element) => {
    let newRow = document.createElement("tr");
    for (const key in element) {
      if (Object.hasOwnProperty.call(element, key)) {
        const item = element[key];
        let newTd = document.createElement("td");
        newTd.textContent = item;
        newRow.append(newTd);
      }
    }
    table.append(newRow);
  });
}

getPosts("https://jsonplaceholder.typicode.com/posts").then((data) => {
  fillTable(data);
});
