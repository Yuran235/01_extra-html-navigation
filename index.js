document.addEventListener("DOMContentLoaded", function () {
  // Удаляем ссылки в формате [число], которые не обрамлены тегом <sup></sup>
  document.body.innerHTML = document.body.innerHTML.replace(
    /(?<!<sup>)\[\d+\](?!<\/sup>)/g,
    ""
  );
});

// Получаем таблицу по ID
const table = document.getElementById("Table1");

// Функция для подсчета суммы значений в третьем и четвертом столбцах
function calculateSums() {
  let sumColumn3 = 0;
  let sumColumn4 = 0;

  // Перебираем строки таблицы в <tbody>
  const rows = table
    .getElementsByTagName("tbody")[0]
    .getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    // Получаем значение ячейки в третьем столбце и суммируем его
    const cellValue3 = rows[i].getElementsByTagName("td")[2].innerText;
    sumColumn3 += parseInt(cellValue3.replace(/\s+/g, "")); // Убираем пробелы

    // Получаем значение ячейки в четвертом столбце и суммируем его
    const cellValue4 = rows[i].getElementsByTagName("td")[3].innerText;
    sumColumn4 += parseFloat(cellValue4.replace(",", ".")); // Заменяем запятую на точку
  }

  // Общие значения
  const totalPopulation = 6906560000; // Общее количество людей
  const totalPercentage = 100; // Общее количество процентов

  // Вычисляем разницу для строки 6
  const differenceColumn3 = totalPopulation - sumColumn3;
  const differenceColumn4 = totalPercentage - sumColumn4;

  // Выводим значения в ячейки <tfoot>
  document.getElementById("sumCell").innerText =
    differenceColumn3.toLocaleString("ru-RU");
  document.getElementById("percentSumCell").innerText = differenceColumn4
    .toFixed(1)
    .replace(".", ","); // Форматируем с запятой
}

// Вызываем функцию для вычисления суммы
calculateSums();
