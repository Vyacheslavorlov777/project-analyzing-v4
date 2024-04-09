export default (fixtures) => {
  const filt = fixtures.trim().split('\n').slice(1);
  const data = filt.map((item) => item.replace('\r', '').split(','));

  // Task number 1.
  console.log(`Количество автомобилей: ${data.length}`);

  // Task number 2.
  const mileages = data.map((el) => el[4]);
  const averageMileage = mileages
    .reduce((acc, el) => {
      // eslint-disable-next-line
      acc += Number(el);
      return acc;
    }, 0);
  console.log(`Средний пробег: ${averageMileage / mileages.length}`);

  // Task number 3.
  const mostPrice = data
    .map((el) => el[7])
    .reduce((acc, el) => {
      if (el > acc) {
        // eslint-disable-next-line
        acc = el;
      }
      return acc;
    }, 0);
  console.log(`Стоимость самой дорогой машины: ${mostPrice}`);

  // Task number 4.
  const oldedAuto = data
    .reduce((acc, el) => (Number(el[2]) < Number(acc[2]) ? el : acc));
  console.log(`Самый старый автомобиль: ${oldedAuto[0]} ${oldedAuto[1]}`);

  // Task number 5.
  const result = Object.entries(data
    .reduce((acc, el) => {
      if (Object.hasOwn(acc, el[8])) {
        acc[el[8]] += 1;
      } else {
        acc[el[8]] = 1;
      }
      return acc;
    }, {})).map((el) => `${el[0]}: ${el[1]}`).join(', ');
  console.log(`Все цвета: ${result}`);
};
