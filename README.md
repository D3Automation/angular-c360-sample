# angular-c360-sample

Sample Angular application using angular-c360

### Prerequisities

* An existing design in [Autodesk Configurator 360](https://configurator360.autodesk.com/Design)
 * Must be set to **_Unrestricted viewing_**
 * Must be configured to allow embedding
 * Must include **http://127.0.0.1:5000** as an authorized site for embedding
* Node and NPM must be installed
  * If running Windows, see the "Node and NPM on Windows" section of [this post from John Papa](http://www.johnpapa.net/get-up-and-running-with-node-and-visual-studio/)

### Installing

Install npm packages by running this command from the root folder of the project:
  ```
  npm install
  ```

Install bower packages by running this command from the root folder of the project:
  ```
  bower install
  ```

Set your design key within app\app.config.js (the design key is the unique identifier for your design within C360)
  ```javascript
    app.config(['c360ContextProvider', function (c360ContextProvider) {
        c360ContextProvider.setDesignKey('SET DESIGN KEY HERE');
    }]);
  ```

## Running the Application
Start the local web server and launch the brower by running this command from the root folder of the proejct:

  ```
  npm start
  ```

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
