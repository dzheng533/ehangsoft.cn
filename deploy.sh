#!/bin/bash

server_root=$NODE_HOME

function print_log(){
  echo "$1"
}

function errot_exit(){
  print_log "$1"
  exit 1
}

print_log "Start Deploy"
cp -r "./" "$server_root"
print_log "Deploy Sucessful."
