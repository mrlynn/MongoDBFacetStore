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
```https://www.mongodb.com/download-center/enterprise/releases/development```

- Run the updated or new mongodb server version
	```mongod --logpath=/Users/yourid/yourdir/mongodb.log --dbpath=/Users/yourid/yourdir/yourdatapath --fork```
	
- Install NodeJS

```brew install node```

- Clone the following repository into this directory:

```https://github.com/mrlynn/MongoDBFacetStore.git```

- Change into the MongoDBFacetStore directory
	
```cd MongoDBFacetStore```

- Install all dependent modules leveraged by the FacetStore Software 

```npm install```

Now that you have nodejs and npm installed, you can begin to load some dummy data associated with the demo store.  I have prepared several nodejs scripts that can be used to generate data for your demo.

```sh load-data.sh```

This will call several nodejs scripts which remove data from the database and then load dummy data into the products collection and the category collection.

At this point you should have everything you need in order to run the FacetStore.  To run the application, you can type the following “node app.js”... or if you wish to continue to work on the application and have it automatically restart - you can install nodemon and run “npm run dev”

```node app.js```

```npm install --savedev nodemon; npm run dev```

You will then have a running application.  You can then open a browser and go to the url: 

```http://localhost:3000```

Contributing
------------

If something is unclear, confusing, or needs to be refactored, please let me know.
Pull requests are always welcome, but due to the opinionated nature of this
project, I cannot accept every pull request. Please open an issue before
submitting a pull request. This project uses
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with a
few minor exceptions. If you are submitting a pull request that involves
Jade templates, please make sure you are using *spaces*, not tabs.

License
-------

The MIT License (MIT)

Copyright (c) 2014-2016 Sahat Yalkabov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
