const total = require('./total');

describe("Тестирование функции NDS", () => {
  let shopList;
  let fn;

  beforeEach(() => {
    shopList = [500, 750, 2500, 5000];
    fn = jest.fn(x => x * 1.2);
    total(shopList, fn);
  });

  test("Вызов функции NDS", () => {
    expect(fn).toBeCalled();
  });

  test("Проверка количества вызовов NDS", () => {
    expect(fn).toBeCalledTimes(4);
  });

  test("Проверим работу функции NDS = fn", () => {
    expect(fn.mock.results[0].value).toBe(600);
    expect(fn.mock.results[1].value).toBe(900);
    expect(fn.mock.results[2].value).toBe(3000);
    expect(fn.mock.results[3].value).toBe(6000);
  });

  test("Мокаем значения", () => {
    fn.mockReturnValueOnce("один");
    fn.mockReturnValueOnce("два");
    fn.mockReturnValueOnce("тотал");
    fn.mockReturnValueOnce("тотал");

    expect(fn()).toBe("один");
    expect(fn()).toBe("два");
    expect(fn()).toBe("тотал");
    expect(fn()).toBe("тотал");
  });
});
