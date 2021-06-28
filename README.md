This project is a technical exercise for GoDaddy.

# Solution

The boilerplate used is redux-toolkit plus Typescript with addition of styled components and Cypress for automated testing. As there is no interaction in the app apart from navigating from list of repositories to a single repository view, I've decided to add only automated tests with Cypress. Unit tests would have been useful if there was any kind of data manipulation in reducers which we don't have at this stage. I've also decided to use redux-toolkit even though application is very simple, because every demo or POC should be created with potential to quick scaleup. Redux-toolkit reduces a lot of clutter of previous incarnations of Redux and allows to spin up features of any complexity.

# Screenshots

**List of repos**

<img width="1434" alt="Screen Shot 2021-06-26 at 21 38 18" src="https://user-images.githubusercontent.com/25592564/123525361-f019f100-d6c7-11eb-80fb-83ecd5e78482.png">

**Single Repo View**

<img width="1426" alt="Screen Shot 2021-06-26 at 21 38 26" src="https://user-images.githubusercontent.com/25592564/123525365-fe680d00-d6c7-11eb-9abd-c77379e07810.png">

# Runnning demo

Run `yarn start` from project directory.

# Running automated tests

Run `yarn test` from project directory. Ensure that you have demo running in another tab.
