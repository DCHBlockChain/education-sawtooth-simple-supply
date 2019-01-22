bin/run-test


Command '['docker-compose', '-p', 'latest', '-f', '/Users/ghu/chain/education-sawtooth-simple-supply/tests/simple_supply_tests/unit-tests.yaml', 'up', '--abort-on-container-exit']' 

docker-compose -p latest -f /Users/ghu/chain/education-sawtooth-simple-supply/tests/simple_supply_tests/unit-tests.yaml up --abort-on-container-exit

 SELECT record_id FROM records
        WHERE (
SELECT max(block_num) FROM blocks
) >= start_block_num
        AND (
SELECT max(block_num) FROM blocks
) < end_block_num;

SELECT public_key, name, timestamp FROM agents
        WHERE (
SELECT max(block_num) FROM blocks
) >= start_block_num
        AND (
SELECT max(block_num) FROM blocks
) < end_block_num;


# Sawtooth Simple Supply
Starting sawtooth-validator     ... done
Starting simple-supply-adminer  ... done
Starting simple-supply-postgres ... done
Starting simple-supply-shell    ... done
Starting sawtooth-rest-api      ... done
Starting sawtooth-settings-tp   ... done
Recreating simple-supply-tp         ... done
Recreating simple-supply-subscriber ... done
Recreating simple-supply-rest-api   ... done
Recreating curator-app              ... done



docker container restart market-rest-api

CONTAINER ID        IMAGE                                  COMMAND                   CREATED             STATUS              PORTS                              NAMES
3bc436378cca        simple-supply-curator-app              "httpd-foreground"        6 days ago          Up 8 minutes        0.0.0.0:8040->80/tcp               curator-app
1fa429ba1e48        sawtooth-simple-supply-tp              "bash -c '\n  apt-get…"   6 days ago          Up 8 minutes                                           simple-supply-tp
faba86a87183        sawtooth-simple-supply-subscriber      "bash -c '\n  apt-get…"   6 days ago          Up 8 minutes                                           simple-supply-subscriber
18e88c811412        sawtooth-simple-supply-rest-api        "bash -c '\n  apt-get…"   6 days ago          Up 8 minutes        0.0.0.0:8000->8000/tcp             simple-supply-rest-api
defb91cb324d        hyperledger/sawtooth-settings-tp:1.0   "settings-tp -vv -C …"    4 weeks ago         Up 8 minutes        4004/tcp                           sawtooth-settings-tp
744160ac90e8        hyperledger/sawtooth-rest-api:1.0      "sawtooth-rest-api -…"    4 weeks ago         Up 8 minutes        4004/tcp, 0.0.0.0:8008->8008/tcp   sawtooth-rest-api
aa7061e3833b        postgres:alpine                        "docker-entrypoint.s…"    4 weeks ago         Up 8 minutes        0.0.0.0:5432->5432/tcp             simple-supply-postgres
d8b07e46206d        sawtooth-simple-supply-shell           "bash -c '\n  simple-…"   4 weeks ago         Up 8 minutes                                           simple-supply-shell
975b411e1eb6        adminer                                "entrypoint.sh docke…"    4 weeks ago         Up 8 minutes        0.0.0.0:8080->8080/tcp             simple-supply-adminer
3422725c8a2d        hyperledger/sawtooth-validator:1.0     "bash -c '\n  if [ ! …"   4 weeks ago         Up 8 minutes        0.0.0.0:4004->4004/tcp             sawtooth-validator


DB:
The compose file includes a container for PostgreSQL Adminer, which is a tool you can use to view data in the
reporting database.
1. In a browser, go to http://localhost:8080.
2. Use the following settings:
● System : PostgreSQL
● Server : postgres
● Username : sawtooth
● Password : sawtooth
● Database : simple-supply


CONTAINER ID        IMAGE                                  COMMAND                   CREATED              STATUS              PORTS                              NAMES
3bc436378cca        simple-supply-curator-app              "httpd-foreground"        About a minute ago   Up About a minute   0.0.0.0:8040->80/tcp               curator-app
1fa429ba1e48        sawtooth-simple-supply-tp              "bash -c '\n  apt-get…"   About a minute ago   Up About a minute                                      simple-supply-tp
faba86a87183        sawtooth-simple-supply-subscriber      "bash -c '\n  apt-get…"   About a minute ago   Up About a minute                                      simple-supply-subscriber
18e88c811412        sawtooth-simple-supply-rest-api        "bash -c '\n  apt-get…"   About a minute ago   Up About a minute   0.0.0.0:8000->8000/tcp             simple-supply-rest-api
defb91cb324d        hyperledger/sawtooth-settings-tp:1.0   "settings-tp -vv -C …"    3 weeks ago          Up About a minute   4004/tcp                           sawtooth-settings-tp
744160ac90e8        hyperledger/sawtooth-rest-api:1.0      "sawtooth-rest-api -…"    3 weeks ago          Up About a minute   4004/tcp, 0.0.0.0:8008->8008/tcp   sawtooth-rest-api
aa7061e3833b        postgres:alpine                        "docker-entrypoint.s…"    3 weeks ago          Up About a minute   0.0.0.0:5432->5432/tcp             simple-supply-postgres
d8b07e46206d        sawtooth-simple-supply-shell           "bash -c '\n  simple-…"   3 weeks ago          Up About a minute                                      simple-supply-shell
975b411e1eb6        adminer                                "entrypoint.sh docke…"    3 weeks ago          Up About a minute   0.0.0.0:8080->8080/tcp             simple-supply-adminer
3422725c8a2d        hyperledger/sawtooth-validator:1.0     "bash -c '\n  if [ ! …"   3 weeks ago          Up About a minute   0.0.0.0:4004->4004/tcp             sawtooth-validator


Sawtooth Simple Supply is a basic example of a distributed supply-chain
application. It provides asset transfer with location tracking, which allows
users to transfer assets and track them as they move through a supply chain.

Sawtooth Simple Supply is built on Hyperledger Sawtooth, an enterprise
blockchain platform. To learn more about Hyperledger Sawtooth, see the
[sawtooth-core repository](https://github.com/hyperledger/sawtooth-core) and the
[Hyperledger Sawtooth documentation](https://sawtooth.hyperledger.org/docs/).

The Simple Supply components in this repository include:

- A transaction processor that handles the Simple Supply transaction logic

- A custom REST API that provides HTTP/JSON endpoints for querying blockchain
  data, creates batches and transactions, and manages user information

- An event subscriber that parses blockchain events and stores data in a local,
  off-chain reporting database

- A simple client web app, Curator, that uses Simple Supply to track artwork
  loans between museums, galleries, and private owners

## Usage


Clone the Simple Supply repository, then make sure that you have the `docker`
and `docker-compose` commands installed on your machine.

To run the application, navigate to the project's root directory, then use
this command:

```bash
docker-compose up
```

This command starts all Simple Supply components in separate containers.

The available HTTP endpoints are:
- Client: **http://localhost:8040**
- Simple Supply REST API: **http://localhost:8000**
- PostgreSQL Adminer: **http://localhost:8080**
- Sawtooth REST API: **http://localhost:8008**

## License

The Sawtooth Simple Supply software and course material in the
[course_modules](course_modules) subdirectory is licensed under a
Creative Commons Attribution 4.0 International License.  You may obtain a copy
of the license at: http://creativecommons.org/licenses/by/4.0/.
