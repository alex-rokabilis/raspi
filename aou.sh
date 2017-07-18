#!/bin/bash

while true; do 

git_out=$(git pull);
# echo $git_out;

if [ "$git_out" != "Already up-to-date." ]
then
    killall node;
    exit;
fi

 done;