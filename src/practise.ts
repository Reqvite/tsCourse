// let age: number;
// age = 50;
// let name1: string;
// name1 = "Max";
// let toggle: boolean;
// toggle = true;
// let empty: null;
// empty = null;
// let notInitialize: undefined;
// notInitialize = undefined;
// let callback = (a: number): number => {
//   return 100 + a;
// };

// let some: unknown;
// some = "Text";

// let str: string;

// if (typeof some === "string") {
//   str = some;
// }

// let person: [string, number];
// person = ["Max", 21];

// // Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).

// enum Status {
//   Loading,
//   Ready,
// }

// const page = {
//   status: Status.Ready,
// };
// if (page.status === Status.Loading) {
//   console.log("Страница загружается");
// }
// if (page.status === Status.Ready) {
//   console.log("Страница загружена");
// }
// // Сделайте переменную, которая может принимать или строку или число.

// let unionType: string | number;
// unionType = "d";
// unionType = 3;
// // Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
// let literalType: "enable" | "disable";
// literalType = "enable";
// literalType = "disable";
// // Укажите типы для следующих функций
// function showMessage(message: string): void {
//   console.log(message);
// }

// function calc(num1: number, num2: number) {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error("Error");
// }

// type Page = {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: "open" | "close";
//   details?: {
//     createAt: Date;
//     updateAt: Date;
//   };
// };

// const page1:Page = {
//   title: "The awesome page",
//   likes: 100,
//   accounts: ["Max", "Anton", "Nikita"],
//   status: "open",
//   details: {
//     createAt: new Date,
//     updateAt: new Date,
//   },
// };

// const page2: Page = {
//   title: "Python or Js",
//   likes: 5,
//   accounts: ["Alex"],
//   status: "close",
// };

/////////////////////////classTS
// Давайте построим дом.

// Создайте абстрактный класс House в нем должны быть следующая логика

// свойство door, она может быть либо закрыта, либо открыта.
// свойство key - объект класса Key.
// конструктор принимает аргумент класса Key и сохраняет его в свойство key.
// метод comeIn, который добавляет объект класса Person в свойство tenants и это срабатывает только если door открыта.
// абстрактный метод openDoor принимает аргумент класса Key
// Создайте класс MyHouse который реализует класс House

// создаем метод openDoor, так как он принимает ключ, сверяем сохраненный ключ в свойстве key равен ли он ключу из аргумента, если да, открываем дверь.
// Создайте объект Key

// есть только свойство signature
// во время создания объекта генерирует случайное число и сохраняет его в signature
// метод getSignature возвращает случайное число из signature
// Создайте объект Person

// конструктор принимает ключ класса Key и сохраняет его в свойство key
// метод getKey возвращает key
// Сделайте так, чтобы жилец попал домой.
// class Key {
//   private signature: number;

//   constructor() {
//     this.signature = Math.random();
//   }

//   getSignature(): number {
//     return this.signature;
//   }
// }

// class Person {
//   constructor(private key: Key) {}
//   getKey(): Key {
//     return this.key;
//   }
// }

// abstract class House {
//   protected door = false;
//   private tenants: Person[] = [];
//   constructor(protected key: Key) {}
//   comeIn(person: Person): void {
//     if (!this.door) {
//       throw new Error("Door is close");
//     }

//     this.tenants.push(person);
//     console.log("Person inside");
//   }

//   abstract openDoor(key: Key): boolean;
// }

// class MyHouse extends House {
//   openDoor(key: Key) {
//     if (key.getSignature() !== this.key.getSignature()) {
//       throw new Error("Key to another door");
//     }
//     return (this.door = true);
//   }
// }

// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

////////////////////

// Создать класс "Студент" с полями "имя", "фамилия" и "средний балл". Добавить метод для получения полного имени студента.
// class Student {
//   constructor(
//     protected name: string,
//     protected surName: string,
//     protected mark: number
//   ) {}

//   getStudent(): string {
//     return `${this.name} ${this.surName} mark: ${this.mark}`;
//   }
// }

// const student = new Student("lol", "lolovich", 88);

// console.log(student.getStudent());

// Создать абстрактный класс "Продукт" с методом для получения цены.
// Создать классы "Книга", "Фильм" и "Музыкальный альбом", которые наследуются от "Продукта" и реализуют метод получения цены.
// Создать экземпляры классов "Книга", "Фильм" и "Музыкальный альбом" и вывести в консоль их цену.

// abstract class Product {
//   abstract getPrice(): number;
// }

// class Book extends Product {
//   constructor(protected price: number) {
//     super();
//     this.price = price;
//   }

//   getPrice(): number {
//     return this.price;
//   }
// }

// class MusicAlbum extends Product {
//   constructor(protected price: number) {
//     super();
//     this.price = price;
//   }

//   getPrice(): number {
//     return this.price;
//   }
// }

// class Film extends Product {
//   constructor(protected price: number) {
//     super();
//     this.price = price;
//   }

//   getPrice(): number {
//     return this.price;
//   }
// }

// const book = new Book(100);
// const musicAlbum = new MusicAlbum(44);
// const film = new Film(22);

// console.log(book.getPrice());

// Давайте создадим систему управления фитнес-центром:

// Создайте класс Gym, в нем должны быть следующие характеристики:
// Свойство trainers - массив объектов Trainer.
// Метод assignTrainer - который принимает объект Client и идентификатор тренера, и назначает тренера с указанным идентификатором клиенту.
// Метод unassignTrainer - который принимает объект Client и отменяет назначение тренера этому клиенту.
// Создайте класс Trainer, в нем должны быть следующие характеристики:
// Свойство id - идентификатор тренера.
// Свойство clients - массив объектов Client.
// Создайте класс Client, в нем должны быть следующие характеристики:
// Свойство name - имя клиента.
// Свойство trainer - объект Trainer (может быть null, если тренер не назначен).
// Свойство membershipStartDate - дата начала абонемента.
// Свойство membershipEndDate - дата окончания абонеме

// class Trainer {
//   clients: Client[];

//   constructor(public id: number) {
//     this.id = id;
//     this.clients = [];
//   }
// }

// class Client {
//   trainer: Trainer | null;

//   constructor(
//     public name: string,
//     public membershipStartDate: Date,
//     public membershipEndDate: Date
//   ) {
//     this.name = name;
//     this.trainer = null;
//     this.membershipStartDate = membershipStartDate;
//     this.membershipEndDate = membershipEndDate;
//   }
// }

// class Gym {
//   trainers: Trainer[];

//   constructor() {
//     this.trainers = [];
//   }

//   assignTrainer(client: Client, trainerId: number) {
//     const newTrainer = this.trainers.find(
//       (trainer) => trainer.id === trainerId
//     );

//     if (newTrainer) {
//       client.trainer = newTrainer;
//       newTrainer.clients.push(client);
//     }
//   }

//   unassignTrainer(client: Client) {
//     const trainer = client.trainer;
//     if (trainer) {
//       client.trainer = null;
//       const index = trainer.clients.indexOf(client);
//       trainer.clients.splice(index, 1);
//     }
//   }
// }

// const gym = new Gym();

// const trainer1 = new Trainer(1);
// const trainer2 = new Trainer(2);

// gym.trainers.push(trainer1, trainer2);

// const client1 = new Client("lol", new Date(), new Date());
// const client2 = new Client("Jane", new Date(), new Date());
// const client3 = new Client("Jane", new Date(), new Date());

// gym.assignTrainer(client1, 1);
// gym.assignTrainer(client2, 2);
// gym.assignTrainer(client3, 1);
// gym.unassignTrainer(client2);

// console.log(gym);
// console.log(trainer1);
// console.log(trainer2);
// console.log(client2);

// Create a class called "Bank" with the following characteristics:

// Property "customers" which is an array of Customer objects.
// Method "addCustomer" which takes a Customer object and adds it to the "customers" array.
// Method "findCustomer" which takes a name as an argument and returns the Customer object with that name. If no Customer is found, return "Customer not found."
// Method "removeCustomer" which takes a name as an argument and removes the Customer object with that name from the "customers" array.
// Create a class called "Customer" with the following characteristics:

// Property "name" which is a string.
// Property "balance" which is a number.
// Method "deposit" which takes a number as an argument and adds it to the "balance".
// Method "withdraw" which takes a number as an argument and subtracts it from the "balance".

// class Customer {
//   balance: number;
//   constructor(public name: string) {
//     this.name = name;
//     this.balance = 0;
//   }

//   deposit(anyNumber: number): void {
//     this.balance += anyNumber;
//   }
//   withdraw(anyNumber: number): void {
//     if (this.balance < anyNumber) {
//       console.log("Not enougth money");
//       return;
//     }
//     this.balance -= anyNumber;
//   }
// }

// class Bank {
//   customers: Customer[];

//   constructor() {
//     this.customers = [];
//   }
// }

// const bank = new Bank();
// const customer1 = new Customer("lol");
// const customer2 = new Customer("lol2");
// const customer3 = new Customer("lol2");

// bank.customers.push(customer1, customer2, customer3);
// customer1.deposit(1000);
// customer1.withdraw(999);
// customer1.withdraw(2);

// Реализуйте классы "Объект недвижимости", "Квартира", "Дом" и "Земельный участок" с использованием TypeScript.

// Объект недвижимости должен иметь следующие свойства:

// адрес (строка)
// площадь (число)
// тип (строка, одно из "квартира", "дом", "земельный участок")
// Квартира должна наследовать все свойства объекта недвижимости и иметь дополнительные следующие свойства:

// количество комнат (целое число)
// этаж (целое число)
// Дом должен наследовать все свойства объекта недвижимости и иметь дополнительные следующие свойства:

// количество этажей (целое число)
// наличие гаража (логическое значение)
// Земельный участок должен наследовать все свойства объекта недвижимости и иметь дополнительное следующее свойство:

// возможность

// abstract class RealEstate {
//   constructor(
//     protected addres: string,
//     protected square: number,
//     protected type: string
//   ) {
//     this.addres = addres;
//     this.square = square;
//     this.type = type;
//   }
// }

// class Apartment extends RealEstate {
//   constructor(
//     protected rooms: number,
//     protected level: number,
//     addres: string,
//     square: number,
//     type: string
//   ) {
//     super(addres, square, type);
//     this.rooms = rooms;
//     this.level = level;
//   }
// }

// const apartment = new Apartment(3, 2, "rewrwerrew 22", 333, "apartment");

// console.log(apartment);

// Создайте класс BankAccount со следующими свойствами:
// баланс (количество)
// владелец (строка)
// транзакции (массив объектов, представляющих каждую транзакцию, выполненную на счете)
// Создайте класс SavingsAccount, который расширяет класс BankAccount со следующими дополнительными свойствами:
// процентная ставка (число)
// Класс BankAccount должен иметь следующие методы:
// депозит(сумма: число): добавляет сумму к балансу и создает объект транзакции со следующими свойствами:
// тип: "депозит"
// сумма: сумма депозита
// date: текущая дата и время
// remove(amount: number): вычитает сумму из баланса и создает объект транзакции со следующими свойствами:
// тип: "вывод"
// сумма: снятая сумма
// date: текущая дата и время
// getBalance(): возвращает текущий баланс счета.
// Класс SavingsAccount должен иметь метод addInterest(), добавляющий проценты к балансу на основе процентной ставки.

// Создайте экземпляр SavingsAccount и продемонстрируйте его использование, внося, снимая и добавляя проценты к счету, а также регистрируя баланс, транзакции и информацию о владельце.

// interface ITransaction {
//   type: "deposit" | "withdraw";
//   amount: number;
//   date: Date;
//   balance: number;
// }

// class BankAccount {
//   protected transactions: ITransaction[];
//   constructor(protected balance: number, protected owner: string) {
//     this.balance = 0;
//     this.transactions = [];
//   }
// }

// class SavingsAccount extends BankAccount {
//   constructor(protected interestRate: number, balance: number, owner: string) {
//     super(balance, owner);
//     this.interestRate = interestRate;
//   }

//   deposit(amount: number) {
//     this.balance += amount;
//     this.addInterest(amount);
//     const newTransaction: ITransaction = {
//       type: "deposit",
//       amount,
//       date: new Date(),
//       balance: this.balance,
//     };
//     this.transactions.push(newTransaction);
//   }
//   withdraw(amount: number) {
//     if (this.balance < amount) {
//       console.log("Not enougth money");
//       return;
//     }
//     this.balance -= amount;
//     this.addInterest(amount);
//     const newTransaction: ITransaction = {
//       type: "withdraw",
//       amount,
//       date: new Date(),
//       balance: this.balance,
//     };
//     this.transactions.push(newTransaction);
//   }

//   getBalance() {
//     console.log(this.balance);
//     console.log(this.transactions);
//     return this.balance;
//   }

//   addInterest(amount: number) {
//     this.balance += (amount / 100) * this.interestRate;
//   }
// }

// const savingsAccount1 = new SavingsAccount(10, 0, "Drake");

// savingsAccount1.deposit(22);
// savingsAccount1.deposit(22);
// savingsAccount1.deposit(22);
// savingsAccount1.deposit(22);
// savingsAccount1.deposit(33);
// savingsAccount1.withdraw(140);
// savingsAccount1.withdraw(100);
// savingsAccount1.deposit(140000000);
// savingsAccount1.getBalance();
// console.log(savingsAccount1);

// Есть функция которая возвращает Promise, он возвращает массив строк и чисел, опишите правильно тип.

// function getPromise(): Promise<Array<string | number>> {
//   return new Promise((resolve) => {
//     resolve(["Text", 50]);
//   });
// }

// getPromise().then((data) => {
//   console.log(data);
// });

// У вас есть следующий тип данных

// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number;
// };

// // Есть функция, она принимает два аргумента, в один попадает name и color в другую часть position и weight. Нужно явно указать, что эти поля из AllType. И сама функция возвращает AllType. Воспользуйтесь Pick.

// function compare(
//   top: Pick<AllType, "name" | "color">,
//   bottom: Pick<AllType, "position" | "weight">
// ): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }

// Укажите дженерики для функции объединения объектов.

// function merge<T extends object, U extends object>(objA: T, objB: U): object {
//   return Object.assign(objA, objB);
// }

// // У вас есть следующие классы
// // Только добавляя дженерики для классов и интерфейс уберите ошибку.

// interface IProps {
//   title: string;
// }

// class Component<T> {
//   constructor(public props: T) {}
// }

// class Page extends Component<IProps> {
//   pageInfo() {
//     console.log(this.props.title);
//   }
// }

//READ ONLY DECORATOR
// function readonly(target: any, propertyKey: string) {
//   Object.defineProperty(target, propertyKey, {
//     writable: false,
//   });
// }

// class Example {
//   @readonly
//   message = "Hello, world!";
// }

// const example = new Example();
// example.message = "Goodbye, world!";
