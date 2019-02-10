

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


 SELECT public_key, name, timestamp FROM agents
        WHERE public_key='02bca540f57fb0514b98baf8973ad401f9ce2ec4b3de611a2ffc134b877bcbbc87'
        AND (
SELECT max(block_num) FROM blocks
) >= start_block_num
        AND (
SELECT max(block_num) FROM blocks
) < end_block_num;


  SELECT record_id FROM records
        WHERE (
SELECT max(block_num) FROM blocks
) >= start_block_num
        AND (
SELECT max(block_num) FROM blocks
) < end_block_num;


 SELECT record_id FROM records
        WHERE (
SELECT max(block_num) FROM blocks
) >= start_block_num
        AND (
SELECT max(block_num) FROM blocks
) < end_block_num;


  INSERT INTO auth (
            public_key,
            encrypted_private_key,
            hashed_password
        )
        VALUES ('02bca540f57fb0514b98baf8973ad401f9ce2ec4b3de611a2ffc134b877bcbbc87', '65e2827d7ea55d160126a0c3fa0fc5a5524ce59c83a211b48d3b4688b6fa0355f2f0c10d5cc737ebd2a8611d319529e159d14ded872dc97f2a08084e8fe3cc38', '243262243132245955566d7a49767a38306c4d4f6c67584f697a7a49756e776d477a666e77495370696d38627258504a6c584f332e35417735474361');


 SELECT t.oid, typarray
        FROM pg_type t JOIN pg_namespace ns
            ON typnamespace = ns.oid
        WHERE typname = 'hstore';


  SELECT public_key, name, timestamp FROM agents
        WHERE (
SELECT max(block_num) FROM blocks
) >= start_block_num
        AND (
SELECT max(block_num) FROM blocks
) < end_block_num;



  INSERT INTO auth (
            public_key,
            encrypted_private_key,
            hashed_password
        )
        VALUES ('02bca540f57fb0514b98baf8973ad401f9ce2ec4b3de611a2ffc134b877bcbbc87', '65e2827d7ea55d160126a0c3fa0fc5a5524ce59c83a211b48d3b4688b6fa0355f2f0c10d5cc737ebd2a8611d319529e159d14ded872dc97f2a08084e8fe3cc38', '243262243132245955566d7a49767a38306c4d4f6c67584f697a7a49756e776d477a666e77495370696d38627258504a6c584f332e35417735474361');



  SELECT public_key, name, timestamp FROM agents
        WHERE public_key='02bca540f57fb0514b98baf8973ad401f9ce2ec4b3de611a2ffc134b877bcbbc87'
        AND (
SELECT max(block_num) FROM blocks
) >= start_block_num
        AND (
SELECT max(block_num) FROM blocks
) < end_block_num;



  SELECT record_id FROM records
        WHERE (
SELECT max(block_num) FROM blocks
) >= start_block_num
        AND (
SELECT max(block_num) FROM blocks
) < end_block_num;


   SELECT t.oid, typarray
        FROM pg_type t JOIN pg_namespace ns
            ON typnamespace = ns.oid
        WHERE typname = 'hstore';



 SELECT record_id FROM records
        WHERE (
SELECT max(block_num) FROM blocks
) >= start_block_num
        AND (
SELECT max(block_num) FROM blocks
) < end_block_num;



Initializing subscriber...
Connecting to database
Successfully connected to database
Creating table: blocks
Creating table: auth
Creating table: records
Creating table: record_locations
Creating table: record_owners
Creating table: agents
Disconnecting from database
Starting subscriber...
Connecting to database
Successfully connected to database
Connecting to validator: tcp://validator:4004
Using selector: ZMQSelector



--test


Creating latest_validator_1       ... done
Creating simple-supply-shell-test ... done
Creating simple-supply-tp-test    ... done
Creating latest_rest-api_1        ... done
Creating latest_unit-tests_1      ... done
Creating latest_settings-tp_1     ... done


--validator

validator_1            | [2019-01-21 00:42:20.148 DEBUG    threadpool] Creating thread pool executor Component
validator_1            | [2019-01-21 00:42:20.148 DEBUG    threadpool] Creating thread pool executor Network
validator_1            | [2019-01-21 00:42:20.148 DEBUG    threadpool] Creating thread pool executor Client
validator_1            | [2019-01-21 00:42:20.148 DEBUG    threadpool] Creating thread pool executor Signature
validator_1            | [2019-01-21 00:42:20.149 DEBUG    threadpool] Creating thread pool executor FutureCallback
validator_1            | [2019-01-21 00:42:20.149 DEBUG    threadpool] Creating thread pool executor FutureCallback
validator_1            | [2019-01-21 00:42:20.151 DEBUG    threadpool] Creating thread pool executor Waiting
validator_1            | [2019-01-21 00:42:20.151 DEBUG    threadpool] Creating thread pool executor Executing
validator_1            | [2019-01-21 00:42:20.152 DEBUG    threadpool] Creating thread pool executor Instrumented
validator_1            | [2019-01-21 00:42:20.154 DEBUG    selector_events] Using selector: ZMQSelector
validator_1            | [2019-01-21 00:42:20.155 INFO     interconnect] Listening on tcp://eth0:4004
