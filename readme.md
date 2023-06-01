## SETTING UP ENVIRONMENT

### Using Webstorm IDE
In this case, i use Webstrom IDE so the Environment of Express js would be easy.
* New Project > choose `Express` > (Make sure __node__ has been installed in your local)
* Let other option be default :
* Express-generator = `npx --package express-generator express`
* View Engine = `Pug` (Jade)
* Stylesheet Engine = `Plain CSS`
* Create

Wait until all packages had been installed, then the express js env has been finished

### Installing TensorFlow.js for Node :
```
npm install @tensorflow/tfjs-node
or
yarn add @tensorflow/tfjs-node
```
Troubleshoot for Windows (error saat instalasi diatas) :
* Install Visual C++ build environment manually [Download here](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools)
* Choose __Desktop development with C++" workload__  

## AUTHENTICATION USER
Login Logout and who's inside me are using session in tables SQL
3 Main file 
* controllers/Authentication.js
* routes/AuthenticationRoute.js
* app.js (to use create table session)

### Session User
this session user is using to keep the session-cookie of user when the server is being restart, but the user is not logout
- Depedency : 
`npm install connect-session-sequelize`
- import the packages in to the main app `import SequelizeStore from "connect-session-sequelize";`
- Create variables in main app, with `SequelizeStore(session.Store)`
- Create table session in DB using `store.sync();`
- after table create, you can disable the function above
- done
