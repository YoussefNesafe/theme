## Introduction
This project runs on TailwindCSS, Snowpack and a 
bunch of other JS libraries that make work easier. 
Please make sure you have these dependencies locally 
installed before running the project:-

To install the required dependencies, run the following 
command:
```
npm install
``` 

## Uploading files to the server

 ```
rsync * root@192.248.190.73:/var/www/html/biz4d/ -avP
 ```
 
 ## Running dev server
 This project uses Snowpack to process and run a development 
 server. To launch the server, execute the following command:-
 ```
 npx snowpack dev
 ```
