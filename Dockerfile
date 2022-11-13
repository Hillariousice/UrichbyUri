FROM node
WORKDIR /app
COPY . .
RUN yarn 
RUN yarn tsc
EXPOSE 3010
CMD [ "yarn", "start" ]












