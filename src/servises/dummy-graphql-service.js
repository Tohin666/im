export default class graphqlService {

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


    processList = [
        {
            "id": "4a09a9ae-33ae-469d-8c04-c42a576af6fc",
            "name": "Рассмотрение кредитной заявки 401",
            "numberOfExecutions": 687662,
            "averageLeadTime": 51613920,
            "averageActiveTime": 39828930,
            "employeesInvolvedProcess": 769,
            "numberOfScenarios": 217,
            "start": 989119399,
            "end": 1354305118,
            "loading": 1374863806
        }
    ]

    getProcessList() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.processList);
            }, 700)
        });
    }
}