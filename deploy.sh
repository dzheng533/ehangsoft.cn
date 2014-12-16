#!/bin/bash
server_root=$NODE_HOME

function print_log(){
  echo "******$1******"
}

function error_exit(){
  print_log "$1"
  exit 1
}

cp -r "./" "$server_root"
