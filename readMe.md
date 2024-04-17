# Crypto Dashboard

Crypto Dashboard is a web application that allows users to explore and manage information about cryptocurrencies.

## Overview

This project is a small single-page web application developed as part of the SBA 308A assessment. It utilizes advanced JavaScript tools and features to interact with an external API, providing users with real-time data about cryptocurrencies.

## Features

- **Search**: Users can search for cryptocurrencies by name or symbol.
- **Pagination**: Navigate through multiple pages of cryptocurrency data.
- **Save Coins**: Save favorite cryptocurrencies for quick access.
- **View Coin Information**: Detailed information about a specific cryptocurrency.
- **Responsive Design**: Designed to work seamlessly on various screen sizes.

## Technologies Used

- HTML
- CSS
- JavaScript (ES6+)
- Fetch API

## Getting Started
To run this application locally or contribute to its development, follow the steps below:

1. **Clone the Repository**: 

2. **Navigate to the Project Directory**:

3. **Open the Project in a Code Editor**:
Use your preferred code editor (e.g., Visual Studio Code, Atom) to open the project files.

4. **Open `index.html` in a Web Browser**:
Once the project is opened in your code editor, locate the `index.html` file in the project directory and open it in a web browser.

5. **Start Exploring**:
You can now explore the Crypto Dashboard application locally in your web browser.

## Requirements

1. **Use of External API (20%)**: The Fetch API is used in the `functions.js` file to communicate with the CoinGecko API and retrieve cryptocurrency data.

2. **User Interaction with API (15%)**: User interaction with the API is implemented in the `script.js` file. The search feature allows users to interact with the API through GET requests to retrieve associated data.

3. **User Data Manipulation (15%)**: Data manipulation within the API is enabled through the use of POST requests in the `postFunctions.js` file. Users can save and delete favorite cryptocurrencies.

4. **Promises and async/await (15%)**: Promises and async/await syntax are used appropriately throughout the codebase, such as in the `functions.js` file when fetching data asynchronously from the API.

5. **Modular Code Organization (3%)**: The JavaScript code is organized into multiple module files (`functions.js`, `auxFunct.js`, `postFunctions.js`) and functions and data are imported/exported across files as necessary.

6. **JavaScript Event Loop Handling (5%)**: The program runs as expected without any undesired behavior caused by misunderstanding of the JavaScript event loop. Asynchronous operations are handled appropriately, ensuring API calls are processed in the correct order.

7. **Engaging User Experience (5%)**: The user experience is enhanced through HTML and CSS styling, providing an intuitive and visually appealing interface.

8. **Error Handling (10%)**: The program runs without errors. Non-functional components are commented out and blockers are explained in the codebase. (See postFunctions.js)

9. **Git Repository Management (5%)**: Frequent commits are made to the git repository, ensuring version control and collaboration.

10. **README File (2%)**: This README file provides a comprehensive description of the application, including setup instructions, features, and technologies used.

11. **Creativity and Presentation (5%)**: The application displays creativity and effort in its design, presentation, and user experience.

## External API

This project interacts with an external API to fetch real-time data about cryptocurrencies. The data from this API populates the content and features of the application.

## Credits

- Powered by [CoinGecko](https://www.coingecko.com/) API.
- Icons provided by [Font Awesome](https://fontawesome.com/).

## Contribution Guidelines

If you'd like to contribute to this project, please follow these guidelines:

- Fork the repository.
- Create a new branch (`git checkout -b feature/your-feature-name`).
- Make your changes.
- Commit your changes (`git commit -am 'Add new feature'`).
- Push to the branch (`git push origin feature/your-feature-name`).
- Create a new Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

---

&copy; 2024 Crypto Dashboard. All rights reserved.
