1. Проинсталировать Angular-CLI (https://github.com/angular/angular-cli) 
   и/или AngularConsole (https://angularconsole.com)
    - Просмотреть CLI QuickStart https://angular.io/docs/ts/latest/cli-quickstart.html
    - Просмотреть Style Guide https://angular.io/guide/styleguide
    - Просмотреть СLI Commands https://angular.io/cli
2. Создайте проект (ng new shop) и загрузите его на гитхаб без каких-либо дополнительных папок.
   В package.json для команды start добавьте флаг -o, чтобы при запуске проекта открывался браузер

3. Создайте бренч Task1 для первого задания.

4. Создайте компонент ProductComponent. Используйте его в AppComponent.
3. Добавьте несколько простых свойств для компонента ProductComponent и несколько свойств в виде массива. Выведите их в темплейт:
    - name: string
    - description: string
    - price: number
    - category: enum (Создайте enum с несколькими категориями) https://www.typescriptlang.org/docs/handbook/enums.html
    - isAvailable: boolean
    - ...

5. Добавьте кнопку Buy. Реализуйте обработчик события клик onBuy(), который выводит в консоль сообщение о покупке товара.
   Попробуйте реализовать функционал по добавлению товара в корзину (optional).

6. Создайте сервис ProductsService, который будет возвращать товары. Модель товара опишите интерфейсом и классом, который реализует данный интерфейс.
   Создайте компонент ProductListComponent. Используйте в нем сервис ProductsService, отобразите данные на станице c помощью директивы *ngFor.


7. Создайте компонент (ng g c cart) и используйте его в AppComponent темплейте. Компонент должен отображать список купленых товаров. 
Организуйте список в виде отдельного сервиса - CartService.  Используйте директиву *ngIf + else для отображения корзины (CartComponent), если она не пустая.
Если корзина пустая отображать другой альтернативный блок с сообщением о пустой корзине.

8. Реализуйте любую дополнительную функциональность.

9. Создайте файл changelog.md в корне проекта и описывайте в нем то, что реализовали.
