# angular-c360-sample

Sample Angular application using [angular-c360](https://github.com/D3Automation/angular-c360)

### Prerequisities

* An existing design in [Autodesk Configurator 360](https://configurator360.autodesk.com/Design)
 * Must be set to **_Unrestricted viewing_**
 * [C360 Embedding Options](https://configurator360.autodesk.com/Dashboard/Options/Embedding)
   * Must select "Allow these authorized sites to embed configuration pages of my designs" option
    * Must include **http://127.0.0.1:5000** as an authorized site for embedding
* Node.js and NPM must be installed.  If this is unfamiliar to you and you are running Windows, there are a couple of options:
 * Install using [Chocolatey](https://chocolatey.org/) (if you are not familiar with Chocolatey, the next option may be simpler)
   ```
   choco install nodejs
   ```
   
 * Install by downloading from the [Node.js website](https://nodejs.org/en/download/)
   * Browse to the [website](https://nodejs.org/en/download/) 
    * Download the **Windows Installer**
     * Run the downloaded .msi file
     * Click **Next** through the default options and then click **Finish** to install

* If you have just installed Node.js in the previous step, **restart your computer before continuing**
* Bower must be installed.  Run the following from the command line (**Node.js must already be installed**):

  ```
  npm install bower -g
  ```
   
### Installing

Install npm packages by running this command **from the root folder of the project**:
  ```
  npm install
  ```

Install bower packages by running this command **from the root folder of the project**:
  ```
  bower install
  ```

Set your design key within _app\app.config.js_.  The design key is the unique identifier for your design within C360 (i.e. all text to the right of the "https://configurator360.autodesk.com/" text in your C360 design URL).
  ```javascript
    app.config(['c360ContextProvider', function (c360ContextProvider) {
        c360ContextProvider.setDesignKey('SET DESIGN KEY HERE');
    }]);
  ```

## Running the Application
Run this command **from the root folder of the project** to start the local web server and automatically launch the browser:

  ```
  npm start
  ```
This will start both a web server ([lite-server](https://github.com/johnpapa/lite-server)) and a task runner ([gulp](http://gulpjs.com/)), both in watch mode, and then automatically browse to the application.  The browser will then automatically refresh whenever a change is saved to any html/js/css/scss file in the project.  To stop the web server, type CTRL+C in the command window.

*Note that if you already have a C360 session active in the same browser as the application, then the application web page will display the message "An Error Has Occurred". To clear the error, close the both the previous session tab and the web application tab and then manually browse to http://127.0.0.1:5000.*

## Authors

* [D3 Automation](http://d3tech.net/solutions/automation/)

See also the list of [contributors](https://github.com/D3Automation/angular-c360-sample/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
