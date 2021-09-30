#!/bin/sh
npx concurrently "npx livereload -d ." "npx http-server"
