#!/bin/bash
# Remove the lock file and node_modules directory then reinstall dependencies
rm -rf node_modules package-lock.json
npm install
