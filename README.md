
# Task Manager with Expo App

In this project, I use **Expo** to run the React Native application. I chose expo for this project because the implementation period is very short, and only to showcase a simple and not too complex react native application so that it can be tried directly.


If we want to create an application that is very complex and with a long timeline, I highly recommend using **React Native cli**.
That will be more extensible in the long run, and we can easily use native modules like java and swift directly. With that, we can flexibly use various libraries or code directly without having many limitation like in **Expo**. 
## Libraries and Technologies Used in The Project

The libraries and tools I chose are based on the number of users and are still supported by updates with the latest version to date. In this way, our application will be able to be developed further and have guidelines if our application has an error or other problems.

 - [**TypeScript**](https://reactnative.dev/docs/typescript) : TypeScript keeps our code more consistent and traceable. New React Native projects target TypeScript by default, but also support JavaScript and Flow.
 - [**Redux Toolkit**](https://redux-toolkit.js.org/introduction/getting-started) : A highly recommended and frequently used tool for state management in React Native. It can be complexly used to store data and state that is used globally.
 - [**Redux Persist**](https://github.com/rt2zz/redux-persist) : State management tool that allows the state in a Redux store to persist across browser and app sessions, improving user experience by pre-loading the store with persistent data. We can save the Redux store in persistent storage, such as local storage like **AsyncStorage**. Therefore, even after close the application, the site state will be preserved. Redux Persist also includes methods that allow us to customize the state that gets persisted and rehydrated, all with an easily understandable API.
 - [**AsyncStorage**](https://react-native-async-storage.github.io/async-storage/docs/install/) : Serves as a data storage system in React Native apps. It allows you to persist data offline, making it useful for scenarios where you need to store information locally. Very popular community package that is still supported for development that is used to replace react native's AsyncStorage..
 - [**React Navigation**](https://reactnavigation.org/docs/getting-started/) : Unlike expo router which only works for expo app only React Navigation is Powerful library that helps we manage routing and navigation in our Expo and React Native apps. it's very popular and still supported for the latest updates. 

## Application Structures

I usually use **Atomic Design** methodology that involves breaking down complex systems into smaller, more manageable parts. In the context of React, components serve as the building blocks of an application. By applying Atomic Design principles, we can create a hierarchy of components that makes it easier to manage and reuse code

Here are some divisions of atomic design :

- **Atoms**: These are the basic building blocks of matter, such as buttons, input fields, or form labels. They are not useful on their own.
- **Molecules**: Molecules group atoms together to create more complex functionality. For example, combining a button, input, and form label.
- **Organisms**: Organisms are combinations of molecules that form distinct sections of an interface (e.g., a navigation bar).
- **Templates**: Templates consist mostly of groups of organisms and represent a complete page design.
- **Pages**: Pages are ecosystems that display different template renders. Multiple ecosystems can exist within a single application.

In summary, Atomic Design helps maintain consistency, modularity, and scalability in React applications. By breaking down UI elements into smaller pieces, we can create reusable components that enhance code readability and maintainability. 


## Setup Applicariom

Several things that need to be prepared include :

- *Node JS more than or equal to  **v20***
- ***(optional)** IOS or Android Emulator like Xcode and Android Studio Emulator*
- ***(optional)** Expo application for IOS or Android (if we dont have emulator)*

> [!WARNING]  
> For now, it still cannot be run on the web because there are some libraries that do not support animation on the web.


## Installation

We can install project with npm or yarn, first open terminal and run :

```bash

  # clone repository
  git clone https://github.com/mahmadakbar/expoRNSimpleToDo

  # intall the project
  cd expoRNSimpleToDo
  npm install
  # or
  yarn install

  # run the project
  npm run start
  # or
  yarn start

```

select the method that will be used to run the application :
- Scan barcode in terminal if you use expo apllication in android or IOS device.
- Press *"a"* if you use emulator on your computer.
- Wait a minutes untli installation compeate and the application can be used in your device.
    
## Features

- Add Todo
- Edit Todo
- Delete Todo
- Mark Todo if finished or not
- Filter Todo by search and button

