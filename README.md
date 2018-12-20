# ETLBox LogViewer
A React app for viewing logs generated of ETLBox

## ETLBox

This project is a User Interface for logs produced by ETLBox. [See also the ETLBox homepage for more details](http://etlbox.net).

## Prerequisites

In order to use the ETLBox LogViewer, you need to have ETLBox logging tables created within your database. Check in your database if you find the tables etl.LoadProcess and etl.Log

Also you should be familiar with the basic concepts of ETLBox, and [how to produce log entries in the log tables](http://etlbox.net/articles/overview_logging.html).

## Screenshots

<img src="https://github.com/roadrunnerlenny/etlbox/blob/master/docs/images/logviewer_screen1.png" />
<img src="https://github.com/roadrunnerlenny/etlbox/blob/master/docs/images/logviewer_screen2.png" />

## Using the LogViewer

Currently, the project is in Beta - there is no installation routine or nuget package available. If you want to use the LogViewer, 
you need to clone the repo and open the solution. I recommend to use the latest Visual Studio (2017 or higher). 
You should be able to start the solution and a browser should pop up displaying demo data.

### Technical background

The .NET Core ASP - Application (.NET Core 2.1) is using ASP.NET Core and React - also Bootstrap, Redux and D3 is incorporated. Therefore, you will find a ClientApp written in React/Javascript/HTML5 in the folder ClientAPP containing the jsx-sources and Client logic. 
The rest of the projects contains the ASP.NET Core web service logic. The setup here is very basic, but necessary to have a REST-API available to get the log data extracted from the database.

### Changing the webservice

The ClientApp in the current version of Log Viewer connects to demo controllers. The `DemoLogController` and `DemoProcessControlloer` will always return a fixed set of data for demo purposes. If you want to connect the web services to your real-life ETLBox logging tables, you need to change the thunks.js in the store folder.
They will contain a fetch from the DemoController:
`fetch('api/DemoLog/GetStaticDemoLog/${lpk}.json')`
You need to change this to the Webservice or ASP.NET Controller which are connected to your database.

Additionally, you need to have controllers in place that return the JSON data. You will find examples for this in the demo controller as well. Likely you will need to copy these and create your own webservices returning the json data needed for the ClientApp. Make sure you use the `GetLogAsJSONTask` or `GetLoadProcessAsJSONTask` once you connected to your database containing the log tables. They will transform your tables into the right JSON format.  


