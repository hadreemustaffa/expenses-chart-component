const chartContainers = document.querySelectorAll('.chart__bar-container');
const total = document.querySelectorAll('.chart__bar-total');
const day = document.querySelectorAll('.chart__bar-day');
const daysBlock = document.querySelectorAll('.chart__bar-block');
const totalPerDay = document.querySelectorAll('.chart__bar-total');

let amountArr = [];
let totalPerWeek = 0;

async function getData() {
  const response = await fetch('data.json');
  const data = await response.json();
  return data;
}

getData().then((data) => {
  data.map((data, i) => {
    amountArr.push(data.amount);
    day[i].innerHTML = data.day;
    totalPerDay[i].innerHTML = `$${data.amount}`;
  });

  const maxAmount = `${Math.max(...amountArr)}`;

  totalPerDay.forEach((day) => {
    if (day.innerHTML == `$${maxAmount}`) {
      day.parentElement.classList.add('max');
    }
  });

  daysBlock.forEach((block, i) => {
    let percentage;
    percentage = `${(amountArr[i] / maxAmount) * 100}%`;
    block.style.height = `${percentage}`;
  });
});
