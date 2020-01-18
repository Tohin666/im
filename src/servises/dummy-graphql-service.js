
export default class dummyGraphqlServise {
    data = [
        {
            id: 1,
            firstName: 'Борис',
            lastName: 'Годунов',
            email: 'qwerty@yandex.ru',
            password: 'password',
            role: 'Администратор'
        },
        {
            id: 2,
            firstName: 'Вася',
            lastName: 'Пупкин',
            email: 'vasya@yandex.ru',
            password: 'password',
            role: 'Администратор'
        }
    ];
    getUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data);
            }, 700)
        });
    }
}