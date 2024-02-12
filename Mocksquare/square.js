//ax2+bx+c=0
function square(a, b, c) {
  let disc = b * b - 4 * a * c;
  if (disc < 0) {
    console.log(`Дискриминант меньше нуля, корней нет`);
    return "корней нет";
  } else if (disc == 0) {
    x = (-b / 2) * a;
    console.log(`Дискриминант равен нулю, корень уравнениа ${x}`);
    return x
  } else {
    let x1 = ((-b + Math.sqrt(disc)) / 2) * a;
    let x2 = ((-b - Math.sqrt(disc)) / 2) * a;
    console.log(`Дискриминант больше нуля, имеем 2 корня ${x1}, ${x2}`);
    return [x1, x2];
  }
}
module.exports = square;
square(1, -3, -4);
square(9, 6, 1);
square(9, 6, 2);
