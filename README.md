# Интерактивное приложение по вселенной Рика и Морти

Приложение создано на базе React с использованием React Router v6, TypeScript и Mantine. Реализует архитектуру feature-sliced design, динамическую маршрутизацию, приватные маршруты и функциональность бесконечной прокрутки.

## Используемые технологии

-   **React**
-   **React Router v6**
-   **TypeScript**
-   **CSS**
-   **Mantine UI**
-   **React Suspense и Lazy Loading**
-   **Error Boundary**
-   **Feature-Sliced Design (FSD)**

## Функциональность

-   Динамическая маршрутизация.
-   Приватные маршруты для страниц категорий (персонажи, локации, эпизоды) и детализированных страниц (карточки элементов).
-   Авторизация через форму входа. Неавторизованные пользователи перенаправляются на страницу входа.
-   Бесконечная прокрутка (Infinity Scroll) для всех категорий (персонажи, локации, эпизоды) с динамической подгрузкой данных.
-   Обработка ошибок через Error Boundary: приложение продолжает работать, даже если в контенте произошла ошибка.
-   Lazy Loading для всех страниц приложения с отображением загрузочного индикатора.
-   Использование компонентов и стилей Mantine для улучшения UI/UX.
-   Архитектура feature-sliced для структурирования кода.

## 🚀 Установка и запуск

1. Склонируйте репозиторий:

    ```bash
    git clone git@github.com:AnastasiyaGuryanova/rick-and-morty-app.git

    ```

2. Перейдите в папку проекта:

    ```bash
    cd rick-and-morty-app
    ```

3. Установите зависимости:

    ```bash
    npm install
    ```

4. Запустите проект в режиме разработки:

    ```bash
    npm run dev
    ```

## Особенности реализации

1. **Mantine UI**:

    - Использование компонентов Mantine для разработки современных и удобных интерфейсов.
    - Гибкая настройка тем и стилей.

2. **Feature-Sliced Design**:

    - Код организован по слоям и модулям в соответствии с принципами feature-sliced architecture.
    - Упрощает поддержку и масштабирование проекта.

3. **React Suspense и Lazy Loading**:

    - Все страницы приложения подгружаются лениво для оптимизации производительности.
    - При загрузке страницы отображается индикатор загрузки.

4. **Error Boundary**:

    - Ошибки в содержимом приложения не прерывают его работу.
    - Обработчик ошибок отображает соответствующее сообщение, сохраняя работоспособность навигации.

5. **Infinity Scroll**:
    - Бесконечная прокрутка реализована для всех категорий (персонажи, локации, эпизоды).
    - Данные подгружаются по мере скроллинга, используя API с параметром `page`.

## ⚠️ Примечание

-   Для просмотра страниц категорий и деталей элементов требуется авторизация. Неавторизованные пользователи будут перенаправлены на страницу входа.
