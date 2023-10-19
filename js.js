// //№311 1
// let day = new Date();
// console.log(day.getDate());
// //№311 2

// let month = new Date();
// console.log(month.getMonth() + 1);
// //№311 3

// let year = new Date();
// console.log(year.getFullYear());
// //№312 1

// function addZero(num) {
//     if (num >= 0 && num <= 9) {
//         return '0' + num;
//     } else {
//         return num;
//     }
// }

// let date = new Date();

// let day = addZero(date.getDate());
// let month = addZero(date.getMonth() + 1);
// let year = date.getFullYear();
// let hours = addZero(date.getHours());
// let minutes = addZero(date.getMinutes());
// let seconds = addZero(date.getSeconds());

// console.log(`${hours}:${minutes}:${seconds} ${day}.${month}.${year}`);

// //№313 1
// let date = '2023-10-19';
// let arr = date.split('-')
// let [year, month, day] = arr;

// console.log(`${day}.${month}.${year}`);
// //№314 1

// let day = new Date();


// console.log(date.getDay());
// //№314 2
// let date = new Date();
// let dayWeek = date.getDay();

// if (dayWeek === 0 || dayWeek === 6) {
//     console.log('выходной');
// } 
// else {
//     console.log('рабочий');
// }
// //№314 3
// let date = new Date();
// let currentDay = date.getDay();
// let daysUntilSunday = 6 - currentDay; // 0 - воскресенье, 6 - суббота

// console.log(`дней до воскресенья ${daysUntilSunday}`);
// //№315 1
// let months = [
//     'янв', 'фев', 'мар', 'апр', 'май', 'июн',
//     'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];

// let date = new Date();
// let month = date.getMonth();

// console.log(months[month]);
// //№316 1
// let date = new Date(2004, 8, 12); 
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day]);
// //№317 1
// let date = new Date(2025, 0, 1);
// console.log(date.getTime());
// //№318 1
// let date1 = new Date(1988, 2, 1); 
// let date2 = new Date(2000, 0, 10); 
// let difference = date2 - date1;
// difference = difference / (1000 * 60 * 60 * 24); // перевод в дни

// console.log(difference);
// //№318 2
// let date1 = new Date(2004, 8, 12);
// let date2 = new Date();

// let yearsDifference = date2.getFullYear() - date1.getFullYear();
// let monthsDifference = yearsDifference * 12 + (date2.getMonth() - date1.getMonth());

// console.log(monthsDifference);
// //№319 1
// let date1 = new Date(2000, 8, 1); 
// let date2 = new Date(2010, 1, 15);
// let difference = date2 - date1;

// console.log(difference);
// //№319 2
// let date1 = new Date(2000, 8, 1); 
// let date2 = new Date(2010, 1, 15);
// let difference = date2 - date1;
// let daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

// console.log(daysDifference);
// //№319 3
// let date1 = new Date(2000, 8, 1); 
// let date2 = new Date(2010, 1, 15);
// let difference = date2 - date1;
// let monthsDifference = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));

// console.log(daysDifference);
// //№319 4
// let date1 = new Date(2000, 8, 1); 
// let date2 = new Date(2010, 1, 15);
// let yearsDifference = date2.getFullYear() - date1.getFullYear();

// console.log(yearsDifference);
// //№321 1
// function lastDay(year, month) {
//     let date = new Date(year, month, 0);
//     return date.getDate();
// }
// //№321 2
// let date = lastDay(2025, 4)
// console.log(date);
// //№322 1
// function isLeap(year) {
//     let feb29 = new Date(year, 1, 29);
//     return feb29.getDate() === 29;
// }
// //№323 1
// function checkDate(year, month, day) {
//     let date = new Date(year, month, day);
//     return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
// }
// //№324 1
// let date = new Date(2023, 11, 31);
// let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
// let dayWeek = date.getDay(); 

// console.log(days[dayWeek]);
// //№325 2
// let date = new Date();
// let lastMonth = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
// let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
// let lastMonthDayWeek = lastMonth.getDay();

// console.log(days[lastMonthDayWeek]);
// //№326 1
// let date = new Date(); 
// let nextYear = date.getFullYear() + 1;
// let nextYearDate = new Date(nextYear, 11, 31);
// let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
// let dayWeek = nextYearDate.getDay(); 

// console.log(days[dayWeek]);
// //№326 2
// let date = new Date();
// let nextYear = today.getFullYear() + 1;
// let sameDateNextYear = new Date(nextYear, date.getMonth(), date.getDate());
// let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']; 
// let dayWeekNextYear = sameDateNextYear.getDay();

// console.log(days[dayWeekNextYear]);
// //№326 3
// let date = new Date();
// let lastYear = today.getFullYear() - 1;
// let sameDateLastYear = new Date(lastYear, date.getMonth(), date.getDate());
// let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']; 
// let dayWeekLastYear = sameDateLastYear.getDay();

// console.log(days[dayWeekLastYear]);
// //№327 1
// let date = new Date();
// let startOfYear = new Date(date.getFullYear(), 0, 1);
// let september10 = new Date(date.getFullYear(), 8, 10); 
// let difference = september10 - startOfYear;
// let daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

// console.log(daysDifference);
// //№327 2
// let date = new Date();
// let twentyOfMonth = new Date(date.getFullYear(), date.getMonth(), 20);
// let tenthOfNextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 10);
// let difference = tenthOfNextMonth - twentyOfMonth;
// let daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

// console.log(daysDifference);
// //№328 1
// let now = new Date();
// let yesterdayNoon = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0, 0);
// let difference = now - yesterdayNoon;
// let hoursDifference = Math.floor(difference / (1000 * 60 * 60));

// console.log(hoursDifference);
// //№329 1
// let now = new Date();
// let dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// let difference = now - dayStart;
// let hoursDifference = Math.floor(difference / (1000 * 60 * 60));

// console.log(hoursDifference);
// //№330 1
// let now = new Date();
// let dayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
// let difference = dayEnd - now;
// let remaining = Math.floor(difference / (1000 * 60 * 60));

// console.log(remaining);
// //№331 1
// let count = 0;
// for (let year = 2000; year <= new Date().getFullYear(); year++) {
//   let date = new Date(year, 0, 1);
//   let dayWeek = date.getDay();
//   if (dayWeek === 0 || dayWeek === 6) {
//     count += 1;
//   }
// }

// console.log(count);
// //№332 1
// let now = new Date();
// let dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// let difference = now - dayStart;
// let passed = Math.floor(difference / 1000);

// console.log(passed);
// //№332 2
// let now = new Date();
// let dayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
// let difference = dayEnd - now;
// let remaining = Math.floor(difference / 1000);

// console.log(remaining);

// //№332 3
// let date = new Date();
// let nextYear = date.getFullYear() + 1;
// let newYear = new Date(nextYear, 0, 1);
// let difference = newYear - date;
// let remaining = Math.floor(difference / (1000 * 60 * 60 * 24));

// console.log(remaining);

// //№332 4
// let count = 0;
// for (let month = 0; month < 12; month++) {
//   let date = new Date(new Date().getFullYear(), month, 13);
//   if (date.getDay() === 5) {
//     count += 1;
//   }
// }

// console.log(count);
// //№332 5
// let date = new Date();
// let threeMonthsAgo = new Date(date.getFullYear(), date.getMonth() - 3, date.getDate());
// let yearThreeMonthsAgo = threeMonthsAgo.getFullYear();

// console.log(yearThreeMonthsAgo);
// //№332 6
// let date = new Date();
// let lastDayMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
// let dayWeek = lastDayMonth.getDay();

// console.log(dayWeek);
// //№332 7
// function isLeap(year) {
//     let feb29 = new Date(year, 1, 29);
//     return feb29.getDate() === 29;
// }
// //№332 8
// function isLeap(year) {
//     let feb29 = new Date(year, 1, 29);
//     return feb29.getDate() === 29;
//   }

// let date = new Date();
// let year = date.getFullYear();
// while (true) {
//     year--;
//     if (isLeap(year)) {
//         console.log(`предыдущий високосный год: ${year}`);
//         break;
//     }
// }
// //№332 9
// function isLeap(year) {
//     let feb29 = new Date(year, 1, 29);
//     return feb29.getDate() === 29;
//   }

// let date = new Date();
// let year = date.getFullYear();
// while (true) {
//     year++;
//     if (isLeap(year)) {
//         console.log(`следующий високосный год: ${year}`);
//         break;
//     }
// }

// //№333
// let date1 = new Date('2020-11-31');
// let date2 = new Date('2020-12-01');

// if (date1 > date2) {
//   console.log("первая дата больше.");
// } 
// else {
//     console.log("первая дата меньше.");
// }
// //№334
// let date1 = new Date('2023-09-21');
// let date2 = new Date('2023-09-23');

// if (date1 > date2) {
//     console.log("первая дата больше.");
//   } 
//   else {
//       console.log("первая дата меньше.");
//   }
// //№335
// function zodiac(month, day) {
//     if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
//       return "Овен";
//     } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
//       return "Телец";
//     } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
//       return "Близнецы";
//     } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
//       return "Рак";
//     } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
//       return "Лев";
//     } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
//       return "Дева";
//     } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
//       return "Весы";
//     } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
//       return "Скорпион";
//     } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
//       return "Стрелец";
//     } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
//       return "Козерог";
//     } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
//       return "Водолей";
//     } else {
//       return "Рыбы";
//     }
//   }

// let month = 0;
// let day = 1;
// console.log(zodiac(month, day));
// //№336 1
// let now = new Date(); // Текущий момент времени
// let noon = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0); // Полдень текущего дня

// if (now > noon) {
//   console.log("полдень был");
// } else {
//   console.log("полдень не был");
// }
// //№336 2
// let now = new Date(); // Текущий момент времени
// let day15 = new Date(now.getFullYear(), now.getMonth(), 15); // 15 число текущего месяца

// if (now > day15) {
//   console.log("половина месяца прошла");
// } 
// else {
//   console.log("половина месяца не прошла");
// }


