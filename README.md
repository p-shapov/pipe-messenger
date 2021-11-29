# Chrome extension for Tg-CRM
Chrome extension for transferring data from messengers to CRM systems. You can check the extension by building it and 
adding by `chrome://extensions/ -> Load unpacked` and there you should select  your `build` folder.

Hosting on heroku like a simple web-application: https://chrome-extension-integrator.herokuapp.com/.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the dependencies required for the project into the `node_modules` folder.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint`

Launches eslint to check the code according to the airbnb rules and other basic rules. There is a `:fix` postscript for automatic error correction.

### `npm run deploy`

Deploy the project to heroku. The variables `HEROKU_API_KEY` and HOSTING_APP_NAME must be specified and app on heroku with this name must be created for this command to execute correctly.

---

# Technologies

- React
- Redux
- Material UI
- Axios
- ESLint
- TypeScript

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
