#!/bin/bash

# set backend api
echo "export const environment = {
        production: true,
        backendApi: 'http://${BACKEND_HOSTNAME}:${BACKEND_PORT}'
      };" > ./src/environments/environment.prod.ts

# run app using generated config
ng serve --prod --host "$SERVER_ADDRESS"
