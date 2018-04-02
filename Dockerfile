FROM node:9.6.1

# set working directory
RUN mkdir /home/node/app && \
    chown node /home/node/app
WORKDIR /home/node/app
USER node

COPY --chown=node . /home/node/app
RUN chmod u+x /home/node/app/docker-entrypoint.sh

# add `/home/node/app/node_modules/.bin` to $PATH
ENV PATH=$PATH:/home/node/.npm-global/bin:/home/node/app/node_modules/.bin
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

# install and cache app dependencies
COPY package.json /home/node/app/package.json
COPY package-lock.json /home/node/app/package-lock.json
RUN npm install && \
    npm install -g @angular/cli@1.7.3

# start app

CMD /bin/bash /home/node/app/docker-entrypoint.sh