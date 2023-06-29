# PunkBeers

Front-end application which enables beer research from API data. It was made as an assignment for a recruitment process.


## Project status (June 2023)

While the most important functionalities of the website work, it still would benefit from minor code optimizations.

## Installation
You will need [Node.js](https://nodejs.org/en) installed to run this app locally.

Clone the repository with HTTPS or SSH, for example:
```
git clone https://github.com/ddmuzyk/punkbeers.git
```

Install dependencies and start the server:

```
cd punkbeers
npm install
npm start
```

## Tech

* React.js
* CSS3
* React Router

## About

This application uses [Punk API](https://punkapi.com/documentation/v2) data to display information about beers.

Pagination feature provides a smooth user experience, making sure the data is loading fast (with 9 beers per page) and also not burdening the server.

Each beer card has a details button at the bottom, which takes the user to the page associated with the requested beer.