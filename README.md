# Dutch FrameNet Annotation

The goal of this tool is to enable annotation for Dutch FrameNet.

## Install npm
Please install [npm](https://www.npmjs.com/get-npm).

## Install node.js
Please install node.js

On Mac, one possibility is to run:

```bash
npm install node@13.10.1
```

On Ubuntu, [this](https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/) is an option:
```
sudo apt-get install nodejs
```

Please check your version.
```bash
node -v
```
Make sure you have at least major version 8.


## Install packages
```
npm install
```
This should install the packages from *package.json*.

## Download resources

```
bash install.sh
```

## How to use
Run

```
node server.js v2
```

Point your Google Chrome browser towards *http://localhost:8080/*.
The application has not been validated on other browsers.
For example, the images do not show correctly using Firefox.
When you've completed the annotation process, i.e., an image of **the end** is shown.

### What if I make a mistake
The command line shows the made annotation.
Please write down the identifier and the correct annotation values.

## Output
The output is found in **data/v1/annotations.json**.
