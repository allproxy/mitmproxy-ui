<h1 align="center" style="border-bottom: none;">MITM Proxy UI</h1>

MITM debugging proxy UI to view and modify the HTTP and HTTPS (SSL) traffic between your machine and the Internet.  Also supports reverse proxy protocols: HTTP, HTTPS, MongoDB, Redis, MySQL and gRPC.

![image](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white)
![image](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![image](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)

![Alt text](image.png)

### Try AllProxy Online

To try a `readonly` demo:
* Click [Try it out](https://allproxy.ddns.net/mitmproxy)
* On the left side panel click the `Restore Session` button
* From the Restore Session Modal click `Restore` to restore a sample session

### Install

> Clone repo and run: **npm install && npm start**

> Open `MITM Proxy` in browser;
>    * [localhost:8888/mitmproxy](http://localhost:8888/mitmproxy)

### Updating

The MITM Proxy uses the [allproxy](https://github.com/allproxy/allproxy) package.

To update the `allproxy` npm package run:
> **npm update**

### HTTPS Proxy
MITM Proxy is a man-in-the-middle server that captures the traffic between your application and web server.   You can inspect the complete HTTP request and response.
![Alt text](image-1.png)

### Advanced Filtering
Use advanced filter criteria to find what you're looking for.   Use complex boolean expressions to match the protocol, payload, URL, headers, and just about any part of the request or response message.
![Alt text](image-2.png)

### Breakpoints
Set breakpoints to stop the HTTP request and optionally modify it before sending it to the web server.
![Alt text](image-3.png)

### Modify and Resend Requests
Modify and resend any captured HTTP requests.
![Alt text](image-4.png)

### Reverse Proxy
Resource proxy protocols include: MongoDb, Redis, MySQL, qGRPC, HTTP, HTTPS and TCP.
![Alt text](image-5.png)

### Integrated Online Help
The Help modal helps you configure and use the application.
![Alt text](image-6.png)

![image](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![image](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)
![image](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![image](https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white)

## License

This code is licensed under the [MIT License](https://opensource.org/licenses/MIT).

![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![image](	https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![image](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
