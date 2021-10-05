# Quick App Template: Marketplace

## 1. About This Project

This project is a quick app template to create a retail marketplace.

<img height="500" src="./images/ecommerce_quickapp.gif" alt="Example of quick app for ecommerce" />

<!--
Check how it would look like on your browser (a preview):
<img height="300" src="./images/qrcode.png" alt="QR Code to the running example" />
-->

## 2. File structure


```
├── build               # Result of the compiling process 
├── dist                # Example of the final package produced (RPK).
├── sign                # Stores the RPK package signature module.
│   ├── debug           # Debugging environment certificate/private key file
│   └── release         # Stable environment certificate/private key file
└── src
│   ├── assets          # Common resources (images/styles/font...)
│   │   ├──images       # png/jpg/svg and other public image resources
│   │   └──styles       # less/css/sass resources
│   │   └──js           # javaScript resources
│   │   └──data         # Simulation data (substitute these for real APIs)
│   │   └──iconfont     # Icon fonts
│   ├── helper          # Tools for project customization
│   │   ├──apis         # The storage is related to the background request interface (encapsulated).
│   │   ├──ajax.js      # encapsulates fetch APIs provided by the system.
│   │   └──utils        # Stores the tool class methods encapsulated by the project.
│   ├── pages           # Stores project page-level code
│   ├── app.ux          # Main application code
│   ├── manifest.json   # Metadata and configuration of the quick app
│   └── components      # The app components
└── package.json        # Modules and configuration information required by the project
```

## 3. How to use

### 3.1 Debugging Quick Application Development Tools (Recommended)

You are advised to download the Quick Application Development Tool (https://www.quickapp.cn/docCenter/IDEPublicity) to perform code scanning debugging, USB debugging, web preview, and syntax prompting. For details, see (https://doc.quickapp.cn/tutorial/ide/overview.html).

### 3.2 Command Line Debugging
```bash
cd quick-app-shop
npm install

npm start #Recommendation

# Or run the following command:
npm server & npm watch

# Or run the following command on one terminal tab:
npm server
# Plus run the following command on another terminal tab:
npm watch

```

Use an Android mobile phone to download and install the [Quick App Debugger] (https://www.quickapp.cn/docCenter/post/69). Open the app and scan the QR code generated by the preceding command to view the effect. For more information, see [Quick Application Environment Setup] (https://nice.lovejade.cn/zh/article/develop-quick-app-experience-notes.html# Environment Setup).


## 4. Some Details:

- **More elegant processing of data requests**: A `Promise` is used to encapsulate the system built-in request `@system.fetch` and throw the request to the global system. In this way, the chain invocation can be simplified using  `finally` .

- **Built-in style processing scheme**: Quick Apps support `less` and `sass` stylesheet pre-compilation. Some `less` built-in variables are used, as well as mixed methods to enable style editing, reuse, and modification.

- **Common encapsulation methods**: In the `helper/utils` path, there are some common methods (e.g., for date and string manipulation) that are encapsulated separately and exposed to `global.$utils`. This offers better maintenance, facilitating use, and improving development efficiency. Of course, you can add, delete, or expand as needed.

- **Simplify the process of starting development**: Use [Concurrently](https://github.com/kimmobrunfeldt/concurrently) plug-in so you can run `npm start` to start an agile development.

- **Use a command script for adding a new page**: To create a new page, run the `npm run gen YourPageName` command. You can also customize the template */command/gen/template.ux* as required.

- **Integrates [Prettier](https://prettier.io/) & [Eslint](https://eslint.org/)**: Unify team code specifications and styles (such as `js`, `less`, and `css`) while detecting potential problems in code to promote high-quality code writing and improve work efficiency (especially for team development).

- **New file listening command**: The [onchange](https://github.com/Qard/onchange) dependency is introduced to monitor file changes. During development, you can run the `npm run prettier-watch` command to format the modified `*.ux` and `*.js` files, which greatly improves the compilation efficiency.

- **Optimize local development port settings**: The default port of Quick App is 12306. You can customize the port, but the user experience is not user-friendly. Optimize the usage of the local development address port by referring to the `creat-react-app` setting. If the specified port (default port: '8080') is occupied, the system searches for a new available port (for example, 8081/8082/...) in ascending order.

- **QR code for opening the debugging home page**: Run the `npm start` command to start the HTTP debugging server and display the address on the command line terminal. Use the quick app debugger on your mobile phone to scan the code to download and run the rpk package. When the terminal accumulates more information streams, it is inconvenient to scan the code. Therefore, a QR code is added to open the debugging home page in the browser. To disable this function, set `autoOpenBrowser` to `false` in the `command/server.js` file.

## 5. Built-in commands

| Command | Description |
| --- | --- | 
| `npm start` | Start services (server) and monitoring (watch) |
| `npm run server`| Enable the service (server) | 
| `npm run watch` | Enable monitoring (watch) | 
| `npm run build`| Compiling and packaging the project as a `rpk` distribution |
| `npm run release`| Generate the `rpk` package and sign it |


## 6. Acknowledgments

- [Shopping Cart icon](https://thenounproject.com/search/?q=cart&i=4292928) by Adrian Adam from the Noun Project.