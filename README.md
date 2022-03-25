# Personal Finance Tracker

Project to create application using react.

## Description

The app is to help users track their investments.

### Technical Used

What technologies you used that helped you build this project.

- React
- CSS
- HTML
- Javascript

### User Stories

User must be able to:

- Search for an individual stock with stock symbol
- Generate top 30 most active stocks
- Sort the most active stocks respectively
- Add stocks to portfolio
- Remove stocks from portfolio
- Have the portfolio saved in their browser local storage so they can view the same portfolio after moving away and back.

---

## Planning and Development Process

Planned to implement basic functionality of searching for individual stock and mapping out the most active stocks at first.

Taking it step by step for the portfolio page, made sure that I can add one stock with calculations, before trying to add more stocks with previous state function. Then implemented the remove functionality.

CSS was implemented after functionality works for a better user experience.

Added the filter functionality afterwards as additional stretch goals.

### Problem-Solving Strategy

Faced problems with either rendering the page too many times or not rendering at all. Used useEffect and conditonal rendering to solve the problems.

Googled and asked others for help when get stucked for too long.

### Unsolved problems

The portfolio page did not load the first time when it is on netlify. Had to refresh for it to work properly.

The current price is not updated in real time so it does not reflect the correct calculations when price changes daily.

## APIs Used

- API from https://site.financialmodelingprep.com/

Used this API as it can help to search for individual stock.
Needed the search to get details of stocks and add to portfolio.
