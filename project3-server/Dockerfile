FROM node:latest

# absulote path to conatiner
WORKDIR /usr/webapp

# first copy only package.json
# if content been changed only then run npm i
COPY ./package.json ./

RUN npm install

#copy all files from current directory to workdir path 
COPY ./ ./

CMD ["./wait-for-it.sh", "localhost:3306", "--", "node", "index.js"]
