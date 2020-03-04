FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD password  
ENV MYSQL_DATABASE vacations_schema  
ENV MYSQL_USER root  
ENV MYSQL_PASSWORD 3306

ADD setup.sql /docker-entrypoint-initdb.d

