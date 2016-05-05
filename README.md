# angular-c360-sample

Sample Angular application using [angular-c360](https://github.com/D3Automation/angular-c360)

### Prerequisities

* The existing design in [Autodesk Configurator 360](https://configurator360.autodesk.com/Design) must be set to **_Unrestricted viewing_**
* [C360 Embedding Options](https://configurator360.autodesk.com/Design)
 * Must select "Allow these authorized sites to embed configuration pages of my designs" option
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

Set your design key within app\app.config.js.  The design key is the unique identifier for your design within C360 (i.e. all text to the right of the "https://configurator360.autodesk.com/" text in your C360 design URL).
  ```javascript
    app.config(['c360ContextProvider', function (c360ContextProvider) {
        c360ContextProvider.setDesignKey('SET DESIGN KEY HERE');
    }]);
  ```

## Running the Application
Start the local web server and launch the brower by running this command from the root folder of the project:

  ```
  npm start
  ```
This will start both a web server ([lite-server](https://github.com/johnpapa/lite-server)) and a task runner ([gulp](http://gulpjs.com/)), both in watch mode, and then automatically browse to the application.  The browser will then automatically refresh whenever a change is saved to any html/js/css/scss file in the project.  To stop the web server, type CTRL+C in the command window.

*Note that if you already have a C360 session active in the same browser as the application, then the application web page will display the message "An Error Has Occurred".  Close the other session and refresh the browser to clear the error.*

## Authors

* [D3 Technologies](http://www.d3tech.net/)

See also the list of [contributors](https://github.com/D3Automation/angular-c360-sample/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
