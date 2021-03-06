# angular-c360-sample

Live Demo: https://d3automation.github.io/angular-c360-sample

This is a sample [Angular 1](https://angularjs.org/) application using [angular-c360](https://github.com/D3Automation/angular-c360).  Its purpose is to demonstrate how to create a basic Angular-based web application to use as a front end for a Configurator 360 model.  The application contains a single view ([app/model/model.html](app/model/model.html)) that shows all properties from the root level of the model, as well as the graphics viewer.  Within [model.html](app/model/model.html), there is also some commented-out html to show how to display single properties rather than the entire list.

Using the concepts shown in this application, along with a basic understanding of html/js/css and [Angular 1](https://angularjs.org/), it is possible to build more complex web applications to interact with Configurator 360.  Additional views can be created to allow interacting with properties on any part in the model.  Buttons can be added to execute actions on the model (e.g. downloading drawings).  Your entire C360 model is available to you as a javascript object graph with javascript properties for each of your model properties and javascript functions for each of your model actions.

_**NOTE:** An Angular2 version of the library is also available: https://github.com/D3Automation/angular2-c360_

### Prerequisities

* [git](https://git-scm.com) must be installed (it is used by Bower).  If this is unfamiliar to you and you are running Windows, there are a couple of options:
 * Install using [Chocolatey](https://chocolatey.org/) (if you are not familiar with Chocolatey, the next option may be simpler)
   ```
   choco install git
   ```
   
 * Install by following the [instructions from the git website](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git#Installing-on-Windows)
* [Node.js and NPM](https://nodejs.org) must be installed.  If this is unfamiliar to you and you are running Windows, there are a couple of options:
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

## Running the Application
Run this command **from the root folder of the project** to start the local web server and automatically launch the browser:

  ```
  npm start
  ```
This will start both a web server ([lite-server](https://github.com/johnpapa/lite-server)) and a task runner ([gulp](http://gulpjs.com/)), both in watch mode, and then automatically browse to the application.  The browser will then automatically refresh whenever a change is saved to any html/js/css/scss file in the project.  To stop the web server, type CTRL+C in the command window.

*Note that if you already have a C360 session active in the same browser as the application, then the application web page will display the message "An Error Has Occurred". To clear the error, close the both the previous session tab and the web application tab and then manually browse to http://127.0.0.1:5000.*

## Next Steps
Once you have the application running, you will probably want to configure it to use your own design rather than the sample provided.  In order to do this, the following is needed:
* An existing design in [Autodesk Configurator 360](https://configurator360.autodesk.com/Design)
 * Must be set to **_Unrestricted viewing_**
 * [C360 Embedding Options](https://configurator360.autodesk.com/Dashboard/Options/Embedding)
   * Must select "Allow these authorized sites to embed configuration pages of my designs" option
    * Must include **http://127.0.0.1:5000** as an authorized site for embedding
 * [C360 Auto-update Options](https://configurator360.autodesk.com/Dashboard/Options/AutoUpdateSetup)
   * Must select either "Let user choose" or "Always on" for the "Auto-update" setting

After your design has been created and configured as stated above, you will need to set your design key within _app\app.config.js_.  The design key is the unique identifier for your design within C360 (i.e. all text to the right of the "https://configurator360.autodesk.com/" text in your C360 design URL).  In the following code, you will need to replace the _575458448649916390/2gn1dj1tslb4_ key with your own:
  ```javascript
    app.config(['c360ContextProvider', function (c360ContextProvider) {
        c360ContextProvider.setDesignKey('575458448649916390/2gn1dj1tslb4');
    }]);
  ```

## Authors

* [D3 Automation](http://d3tech.net/solutions/automation/)

See also the list of [contributors](https://github.com/D3Automation/angular-c360-sample/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
