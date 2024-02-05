const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b;
    debugger; //посчитана только сумма. Но еще не подсчитано будет ли бонус
    sum > 50 ? (bonus = 50) : (bonus = sum);
    debugger; //проверка будет ли предоставлен бонус (если сумма больше 50)
    return bonus;
    };
    calculateBonus (27,35);