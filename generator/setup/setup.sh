#!/bin/bash

echo "Awesome you are few steps away from your initial project setup"

read -p "Enter project name : " n1
read -p "Repository URL : " n2
read -p "Author : " n3

json -I -f package.json -e "this.name='$n1'"
json -I -f package.json -e "this.repository.url='$n2'"
json -I -f package.json -e "this.author='$n3'"

mv "$PWD" "${PWD%/*}/$n1"

rm -rf .git/