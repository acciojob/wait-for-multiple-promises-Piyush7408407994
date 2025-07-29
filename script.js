const output = document.getElementById("output");


function createPromise(index) {
  const delay = (Math.random() * 2 + 1);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ index, time: delay });
    }, delay * 1000);
  });
}


const start = performance.now();


const promises = [
  createPromise(1),
  createPromise(2),
  createPromise(3)
];


Promise.all(promises).then(results => {
  const end = performance.now();
  const totalTime = ((end - start) / 1000).toFixed(3); 

  
  output.innerHTML = "";

 
  results.forEach((result) => {
    const row = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    td1.textContent = `Promise ${result.index}`;
    td2.textContent = result.time.toFixed(3);

    row.appendChild(td1);
    row.appendChild(td2);
    output.appendChild(row);
  });

 
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>${totalTime}</strong></td>
  `;
  output.appendChild(totalRow);
});
