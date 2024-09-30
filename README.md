# Responsive UI with React

This project showcases a responsive user interface featuring auto-switching tabs and a progress bar that syncs with a timer.


The project Template can be used to build bigger projects

## Live Application URL

### https://github.com/merinpkurian/ui-developer-test.git
This URL has the application deployed in

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```
## Live Application URL

The Application is deployed in https://github.com/merinpkurian/ui-developer-test.git

Click on the link to see the application

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Application design

#### Components

1. Tab Component : This component displays Auto-Switch Mechanism : Tab components that switch automatically
every 5 seconds. Also allowing manual tab switching by user interaction, with the auto-switch timer resetting to provide a full 5-second interval before switching again.Highlight the active tab and ensure a smooth transition
between tabs.

2. Timer Component : This component incorporate a timer running from 14:00 to 14:59.

3.ProgressbarComponent : This component  Sync a progress bar with the timer, filling from 0% to 100% as time advances from 14:00
to 14:59.It is a child component of timer component.



