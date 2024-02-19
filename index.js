const chartContainers = document.querySelectorAll('.chart__bar-container');

let totalSpendings = 0;
fetch('data.json')
  .then((response) => response.json())
  .then((data) => getData(data))
  .catch((error) => console.log('Error:', error));

function getData(data) {
  chartContainers.forEach((container, index) => {
    const day = container.querySelector('.chart__bar-day');
    const daysBlock = container.querySelector('.chart__bar-block');
    const totalPerDay = container.querySelector('.chart__bar-total');

    day.innerHTML = data[index].day;
    totalPerDay.innerHTML = '$' + data[index].amount;

    totalSpendings += data[index].amount;
  });

  console.log(totalSpendings);
}
