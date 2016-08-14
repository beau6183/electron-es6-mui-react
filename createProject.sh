#!/bin/sh
if [ "$1" == "" ]; then
  echo "You must specify a project name"
  exit 1
fi
git clone https://github.com/beau6183/electron-es6-mui-react.git "$1"
cd "$1"
rm -rf .git
git init
git add -A
git commit -m"Initial commit"
npm i
echo "run npm start"