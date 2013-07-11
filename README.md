# HackDay #01
## Node, Kippt API & Heroku Mashup

### Introduction

We currently share many resources within the Web Development team, either through Email or other means.
There are potentially better ways to do this, such as making use of social bookmarking services like Kippt, Delicious or Pocket.
During the first AKQA Hack Day we'd like to attempt to create an internal link-sharing service leveraging the Kippt API. The idea is to contribute to the AKQA Web Development list internally, then build a service that can aggregate and mail the links out on a weekly basis with the eNewsletter grouping togeather content by hastags. e.g #javascript, #java, #css3 etc.

## The Task
Create a Node.js Application which sits on Heroku. The application spins up once a week, collects the latest content from our [AKQA Development List](https://kippt.com/AKQA/akqa-web-development) via the [Kippt API](http://developers.kippt.com/), sorts into groups, creates the eNewsletter and emails out over the SMTP server (Mandrill / Maill chimp plugin for Heroku)

#### Bonus Task
If we have capacity we could also publish a web page version or pull them in to the AKQA Dev Blog and auto tweet the link out.



### Confirmed Attendees

* Abid Din
* Owain Llewellyn
* Andrew Smith
* Den O'dell
* Tom Maton
* Robin Weston
* Scott van Looy (provided he can find a flight)
* Nacho Gil
* Christopher Marsh
* Martin Shaw

#### Tentative Attendees (depending on date)

* James Lelyveld

## Tech Stack

* HTML5
* CSS3
* JS
* Node

### Installation
To get the required dependencies for the hack day project simply run:

```
npm install
```

## Related Documentation

### [New Kippt API Documentation](http://developers.kippt.com/)

## Platform

### [Heroku](https://www.heroku.com/)
Agile deployment for Ruby, Node.js, Clojure, Java, Python, and Scala. Get up and running in minutes, and deploy instantly with git. Focus 100% on your code, and never think about servers, instances, or VMs again.
Libraries

## Libraries

### [Express JS](http://expressjs.com/)
Express is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications.

### [Simplesmtp](https://github.com/andris9/simplesmtp)
This is a module to easily create custom SMTP servers and clients - use SMTP as a first class protocol in Node.JS!

### [MailParser](https://github.com/andris9/mailparser)
MailParser is an asynchronous and non-blocking parser for node.js to parse mime encoded e-mail messages. Handles even large attachments with ease - attachments can be parsed in chunks and streamed if needed.

### [Mandrill](https://github.com/kai5263499/mandrill-node)
mandrill-node is a node.js module for interfacing with MailChimp's Mandrill API

[Documentation](http://help.mandrill.com/forums)

### [Node - Kippt](https://npmjs.org/package/node-kippt)
A wrapper for the kippt.com API

### [Mocha](http://visionmedia.github.io/mocha/)
Javascript Unit testing framework


## Tools

### [Github](https://github.com/)
Online project hosting using Git. Includes source-code browser, in-line editing, wikis, and ticketing. Free for public open-source code.
Hack Day Kippt Repo (https://github.com/owain-llewellyn-akqa/hackday01-kippt)

### [Sass](http://sass-lang.com/)
Sass makes CSS fun again. Sass is an extension of CSS3, adding nested rules, variables, mixins,selector inheritance, and more. It’s translated to well-formatted, standard CSS using the command line tool or a web-framework plugin.

