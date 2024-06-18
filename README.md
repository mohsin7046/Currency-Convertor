# Currency Converter

A simple and efficient Currency Converter application built with Vite, React, and Tailwind CSS. This project also demonstrates the usage of props and integrates an API for currency conversion.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API Integration](#api-integration)
- [Props](#props)
- [Contributing](#contributing)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/currency-converter.git
    cd currency-converter
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

## Usage

To use the Currency Converter, follow these steps:

1. Open your browser and navigate to .
2. Select the currencies you want to convert from and to.
3. Enter the amount you want to convert.
4. View the converted amount.

## Features

- **Real-time Currency Conversion**: Convert currencies in real-time using the latest exchange rates.
- **Responsive Design**: Built with Tailwind CSS to ensure a responsive and visually appealing design.
- **Fast and Efficient**: Leveraging Vite for fast development and React for efficient rendering.
- **Props Utilization**: Demonstrates the use of React props for component communication.

## API Integration

This project integrates with a currency conversion API to fetch the latest exchange rates. To set up the API:

1. Obtain an API key from a currency conversion service (e.g., ExchangeRate-API, Open Exchange Rates).
2. Use the API key in your React components to fetch the latest exchange rates.

## Props

Props are used extensively in this project to pass data between components. Here’s an example of how props are used:

```jsx
function CurrencyConverter({ rates, baseCurrency, targetCurrency }) {
  // Component logic and rendering
}
```

# Technologies
### This project uses the following technologies:

- Vite
- React
- Tailwind CSS

# Contributing
### Contributions are welcome! If you have any ideas, suggestions, or bug reports, feel free to open an issue or submit a pull request.

# Contact
### If you have any questions or feedback, feel free to reach out:

- Email: datardimohsinali@gmail.com