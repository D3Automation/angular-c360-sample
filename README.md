# angular-c360-sample
Sample Angular application using angular-c360

## How to run:
* Clone this repository
* Install npm (if not already installed)
  * If running Windows, see the "Node and NPM on Windows" section of [this post from John Papa](http://www.johnpapa.net/get-up-and-running-with-node-and-visual-studio/)
* Install npm packages by running this command from the root folder of the project:

  ```
  npm install
  ```
* Install bower packages by running this command from the root folder of the project:

  ```
  bower install
  ```
* Set your design key within app\app.config.js (the design key is the unique identifier for your design within C360)

  ```javascript
    app.config(['c360ContextProvider', function (c360ContextProvider) {
        c360ContextProvider.setDesignKey('SET DESIGN KEY HERE');
    }]);
  ```
* Start the local web server and launch the brower by running this command from the root folder of the proejct:

  ```
  npm start
  ```
