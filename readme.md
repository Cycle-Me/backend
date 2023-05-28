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
