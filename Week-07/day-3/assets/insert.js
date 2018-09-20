window.onload = () => {
  const host = 'http://localhost:3030/api/';
  const http = new XMLHttpRequest();
  const bookParent = document.querySelector('#tbody');
  http.open('GET', `${host}booknames`, true);


  http.onload = () => {
    if (http.status === 200 || http.status === 304) {
      const books = JSON.parse(http.response).result
      books.forEach(book => {
        const row = document.createElement('tr');
        row.classList.add('jumbotron');
        for (let i = 0; i < 5.; i++) {
          const column = document.createElement('td');
          column.innerHTML = Object.values(book)[i];

          row.appendChild(column);
          bookParent.appendChild(row);
        }
      });
    }
  }
  http.send();
}
