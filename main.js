let isInt = true
let n = +(prompt('Введіть стартове число')); //Отримайте у користувача число(N) від якого ми будемо складати. Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!
while (n % 1 !== 0) { //Відбувається  перевірка чи числа є цілими і чи взагалі дані являються числами, порядком чи залишається остача при ділені на 1
    isInt = false;
    n = +prompt('Погано! Cтартове значення має бути числом')
}
let m = +(prompt('Введіть фінальне число')); //Отримайте у користувача число(M) до якого ми будемо складати (включно). Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!
while (m % 1 !== 0) { //Відбувається  перевірка чи числа є цілими і чи взагалі дані являються числами, порядком чи залишається остача при ділені на 1
    isInt = false;
    m = +prompt('Погано! Фінальне значення має бути числом')

    while (n >= m) {
        m = +prompt('Погано! Фінальне число повинне бути більшим за стартове.Введіть число!')
    }
}

let answer = confirm('Бажаєте пропускати парні числа?'); //Отримайте у користувача булевий параметр(true/false), який підкаже нам чи потрібно пропускати парні числа. TRUE – потрібно, FALSE – не потрібно. Використовуйте функцію confirm
let sum = 0
if (answer == true) { // Дане розгалуденя перевіряє чи корислувач аідтвердив свій вибір н користь відкидання парних чисел
    for (let i = n; i <= m; i++) { //Напишіть цикл, який буде складати числа від раніше отриманих N и M
        if (i % 2 != 0) { //Тут іде перевірка чи число є непарни
            sum += i; //і тоді числа додаються, якщо число парне пропуск до наступної ітерації
        }
    }
    document.write(`Cума не парних числ в діапазоні = ${sum}`);
} else { //Якщо користувач відхилив пропозицію
    for (let i = n; i <= m; i++) {
        sum += i // то всі числа в діапазоні додаються
    }
    document.write(`Cума усіх числ в діапазоні = ${sum}`);
}