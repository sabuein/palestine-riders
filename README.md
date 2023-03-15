# palestine-riders

- Runtime environment: Node [16.18.1][node] (LTS)
- Package manager: npm [9.6.1][npm]
- Web application framework: Express [4.18.2][express]

## Scripts

```bash
# Start Express
npm run api
```

## SQL

```sql
CREATE DATABASE palestine_riders;
USE palestine_riders;
CREATE TABLE riders (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50) NOT NULL, email VARCHAR(50), PRIMARY KEY (id));
SHOW TABLES;
DESCRIBE riders;
INSERT INTO riders VALUES (1, "Salaheddin AbuEin", "sabuein@gmail.com");
SELECT * FROM riders;
CREATE USER "riders"@"localhost" IDENTIFIED BY "myPassword";
GRANT ALL PRIVILEGES ON palestine_riders.* TO "riders"@"localhost";
\q
```

### Resources

- Express routing ([Basic][basic], [Routing][routing], [API][api])
- MariaDB Knowledge Base ([Promise API][mariapromise], [Callback API][mariacallback])

[node]: https://nodejs.org/en/blog/release/v16.18.1 "Node.js"
[npm]: https://www.npmjs.com/package/npm/v/9.6.1 "npm - a JavaScript package manager"
[express]: https://github.com/expressjs/express/releases/tag/4.18.2 "Release 4.18.2 · expressjs/express"
[api]: https://expressjs.com/en/4x/api.html#router "Express 4.x - API Reference"
[basic]: https://expressjs.com/en/starter/basic-routing.html "Express basic routing"
[routing]: https://expressjs.com/en/guide/routing.html "Express routing"
[mariapromise]: https://mariadb.com/kb/en/connector-nodejs-promise-api/ "Connector/Node.js Promise API - MariaDB Knowledge Base"
[mariacallback]: https://mariadb.com/kb/en/connector-nodejs-callback-api/ "Connector/Node.js Callback API - MariaDB Knowledge Base"