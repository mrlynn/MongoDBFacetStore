MongoDB FacetStore
=======================

MongoDBFacetStore is a ficticious ecommerce solution designed solely for the purpose of demonstrating MongoDB's aggregation framework - specifically the facet features associated with the framework.



Prerequisites
-------------

- [MongoDB](https://www.mongodb.org/downloads) - must have 3.4
- [Node.js 6.0+](http://nodejs.org)
- Command Line Tools
 - <img src="http://deluge-torrent.org/images/apple-logo.gif" height="17">&nbsp;**Mac OS X:** [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9+**: `xcode-select --install`)
 - <img src="http://dc942d419843af05523b-ff74ae13537a01be6cfec5927837dcfe.r14.cf1.rackcdn.com/wp-content/uploads/windows-8-50x50.jpg" height="17">&nbsp;**Windows:** [Visual Studio](https://www.visualstudio.com/products/visual-studio-community-vs)
 - <img src="https://lh5.googleusercontent.com/-2YS1ceHWyys/AAAAAAAAAAI/AAAAAAAAAAc/0LCb_tsTvmU/s46-c-k/photo.jpg" height="17">&nbsp;**Ubuntu** / <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_Linux_Mint.png" height="17">&nbsp;**Linux Mint:** `sudo apt-get install build-essential`
 - <img src="http://i1-news.softpedia-static.com/images/extra/LINUX/small/slw218news1.png" height="17">&nbsp;**Fedora**: `sudo dnf groupinstall "Development Tools"`
 - <img src="https://en.opensuse.org/images/b/be/Logo-geeko_head.png" height="17">&nbsp;**OpenSUSE:** `sudo zypper install --type pattern devel_basis`

First Time with Node?  Start Here
----------------------------------
Setup
-----
Perform the following steps to set up the Spark environment:

- Create a directory on your Mac for the Facet training
- Download MongoDB 3.4 (or later.) and install it.
`https://www.mongodb.com/download-center/enterprise/releases/development`

- Run the updated or new mongodb server version
	`mongod --logpath=/Users/yourid/yourdir/mongodb.log --dbpath=/Users/yourid/yourdir/yourdatapath --fork`
	
- Install NodeJS

`brew install node`

- Clone the following repository into this directory:

`https://github.com/mrlynn/MongoDBFacetStore.git`

- Change into the MongoDBFacetStore directory
	
`cd MongoDBFacetStore`

- Install all dependent modules leveraged by the FacetStore Software 

`npm install`

Now that you have nodejs and npm installed, you can begin to load some dummy data associated with the demo store.  I have prepared several nodejs scripts that can be used to generate data for your demo.

`sh load-data.sh`

This will call several nodejs scripts which remove data from the database and then load dummy data into the products collection and the category collection.

At this point you should have everything you need in order to run the FacetStore.  To run the application, you can type the following “node app.js”... or if you wish to continue to work on the application and have it automatically restart - you can install nodemon and run “npm run dev”

`node app.js`

`npm install --savedev nodemon; npm run dev`

You will then have a running application.  You can then open a browser and go to the url: 

`http://localhost:3000`

Changing the MongoDB Port or Database
=====================================
The app looks for a file in the root directory named .env.example.  This file contains a number of settings to make the app connect to various services.  The top two configurations are related to the MongoDB instance you wish to use.

```
MONGODB_URI=mongodb://localhost:27017/hackathon
MONGOLAB_URI=mongodb://localhost:27017/hackathon

SESSION_SECRET=Your Session Secret goes here

MAILGUN_USER=postmaster@sandbox697fcddc09814c6b83718b9fd5d4e5dc.mailgun.org
MAILGUN_PASSWORD=29eldds1uri6

SENDGRID_USER=hslogin
SENDGRID_PASSWORD=hspassword00

NYT_KEY=9548be6f3a64163d23e1539f067fcabd:5:68537648

LASTFM_KEY=c8c0ea1c4a6b199b3429722512fbd17f
LASTFM_SECRET=is cb7857b8fba83f819ea46ca13681fe71
```

Notice the first two lines:  MONGODB_URI=mongodb://localhost:27017/hackathon


License
-------

The MIT License (MIT)

Copyright (c) 2014-2016 Michael Lynn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
