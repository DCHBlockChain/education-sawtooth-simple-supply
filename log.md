simple-supply-subscriber    | Starting subscriber...
simple-supply-subscriber    | Connecting to database
simple-supply-subscriber    | Successfully connected to database
simple-supply-subscriber    | Connecting to validator: tcp://validator:4004
simple-supply-subscriber    | Using selector: ZMQSelector
simple-supply-subscriber    | Subscribing to state delta events
sawtooth-validator          | [2019-01-14 01:01:22.343 DEBUG    broadcaster] Added Subscriber 1cfff003eea7eda6e5fd56b2e130e5456e9d0135662def0cb12de537c06c23b291f05f8ad8c235022ed533ace652d9e54189ace41ccac6d072220e96210a78b1 for [<sawtooth_validator.server.events.subscription.EventSubscription object at 0x7c71a4c1e9b0>, <sawtooth_validator.server.events.subscription.EventSubscription object at 0x7c71a4c1e9e8>]
sawtooth-validator          | [2019-01-14 01:01:22.344 DEBUG    broadcaster] Catching up Subscriber 1cfff003eea7eda6e5fd56b2e130e5456e9d0135662def0cb12de537c06c23b291f05f8ad8c235022ed533ace652d9e54189ace41ccac6d072220e96210a78b1 from 0000000000000000
sawtooth-validator          | [2019-01-14 01:01:22.345 WARNING  broadcaster] Transaction id 5bf77e1e25 not found in receipt store  while looking up events for block id a1ae58a4cb
simple-supply-subscriber    | Successfully subscribed to state delta events
simple-supply-subscriber    | Handling deltas for block: a1ae58a4cbb6525f2503e4c7f80cc252cf0e8924382b372f5eaef8262b6e537521a941f78b395b7a0e3a779d78d7e19387bb7a43da129dca870df7a26110f22d
sawtooth-validator          | [2019-01-14 01:01:23.549 INFO     processor_handlers] registered transaction processor: connection_id=2f34446bedee3eaa2f6063da5267c2e6bba04c21f1c5cdead9ecce7eb389bf86d3a32486549c659ad9b5ac0690ed0d2e767b99a1c1e9fbf942866176f34a788c, family=simple_supply, version=0.1, namespaces=['212bd8']
simple-supply-tp            | [2019-01-14 01:01:23.551 INFO     core] register attempt: OK
curator-app                 | 172.21.0.1 - - [14/Jan/2019:01:03:03 +0000] "GET /dist/bundle.js HTTP/1.1" 200 607146
sawtooth-validator          | [2019-01-14 01:03:23.086 INFO     publisher] Claimed Block: 6e09e6601171b22b88e67d405fc7a4d221ca6bf990b188280eb76af384a7507d24a15f954dd6d0e93539cd013e0b87ff90a46195ae7ee103f2928fad6ac93edb (block_num:1, state:5655f27ae95ef5a523efad3042f24c4f27f1910c1783c8c34b995bc7ee578788, previous_block_id:a1ae58a4cbb6525f2503e4c7f80cc252cf0e8924382b372f5eaef8262b6e537521a941f78b395b7a0e3a779d78d7e19387bb7a43da129dca870df7a26110f22d)
sawtooth-validator          | [2019-01-14 01:03:23.087 INFO     publisher] Block publishing is suspended until new chain head arrives.
sawtooth-validator          | [2019-01-14 01:03:23.088 DEBUG    chain] Block received: 6e09e6601171b22b88e67d405fc7a4d221ca6bf990b188280eb76af384a7507d24a15f954dd6d0e93539cd013e0b87ff90a46195ae7ee103f2928fad6ac93edb (block_num:1, state:5655f27ae95ef5a523efad3042f24c4f27f1910c1783c8c34b995bc7ee578788, previous_block_id:a1ae58a4cbb6525f2503e4c7f80cc252cf0e8924382b372f5eaef8262b6e537521a941f78b395b7a0e3a779d78d7e19387bb7a43da129dca870df7a26110f22d)
sawtooth-validator          | [2019-01-14 01:03:23.089 INFO     block_validator] Starting block validation of : 6e09e6601171b22b88e67d405fc7a4d221ca6bf990b188280eb76af384a7507d24a15f954dd6d0e93539cd013e0b87ff90a46195ae7ee103f2928fad6ac93edb (block_num:1, state:5655f27ae95ef5a523efad3042f24c4f27f1910c1783c8c34b995bc7ee578788, previous_block_id:a1ae58a4cbb6525f2503e4c7f80cc252cf0e8924382b372f5eaef8262b6e537521a941f78b395b7a0e3a779d78d7e19387bb7a43da129dca870df7a26110f22d)
sawtooth-validator          | [2019-01-14 01:03:23.101 INFO     block_validator] Comparing current chain head 'a1ae58a4cbb6525f2503e4c7f80cc252cf0e8924382b372f5eaef8262b6e537521a941f78b395b7a0e3a779d78d7e19387bb7a43da129dca870df7a26110f22d (block_num:0, state:c711538ad47aa8691fa5c26cbb55d99219bac67b641ee31b139a72ad2a7c4f82, previous_block_id:0000000000000000)' against new block 'a1ae58a4cbb6525f2503e4c7f80cc252cf0e8924382b372f5eaef8262b6e537521a941f78b395b7a0e3a779d78d7e19387bb7a43da129dca870df7a26110f22d (block_num:0, state:c711538ad47aa8691fa5c26cbb55d99219bac67b641ee31b139a72ad2a7c4f82, previous_block_id:0000000000000000)'
sawtooth-validator          | [2019-01-14 01:03:23.102 INFO     block_validator] Fork comparison at height 1 is between - and 6e09e660
sawtooth-validator          | [2019-01-14 01:03:23.102 INFO     dev_mode_consensus] Choose new fork 6e09e660: New fork head switches consensus to DevMode
sawtooth-validator          | [2019-01-14 01:03:23.103 INFO     chain] Chain head updated to: 6e09e6601171b22b88e67d405fc7a4d221ca6bf990b188280eb76af384a7507d24a15f954dd6d0e93539cd013e0b87ff90a46195ae7ee103f2928fad6ac93edb (block_num:1, state:5655f27ae95ef5a523efad3042f24c4f27f1910c1783c8c34b995bc7ee578788, previous_block_id:a1ae58a4cbb6525f2503e4c7f80cc252cf0e8924382b372f5eaef8262b6e537521a941f78b395b7a0e3a779d78d7e19387bb7a43da129dca870df7a26110f22d)
sawtooth-validator          | [2019-01-14 01:03:23.104 INFO     publisher] Now building on top of block: 6e09e6601171b22b88e67d405fc7a4d221ca6bf990b188280eb76af384a7507d24a15f954dd6d0e93539cd013e0b87ff90a46195ae7ee103f2928fad6ac93edb (block_num:1, state:5655f27ae95ef5a523efad3042f24c4f27f1910c1783c8c34b995bc7ee578788, previous_block_id:a1ae58a4cbb6525f2503e4c7f80cc252cf0e8924382b372f5eaef8262b6e537521a941f78b395b7a0e3a779d78d7e19387bb7a43da129dca870df7a26110f22d)
sawtooth-validator          | [2019-01-14 01:03:23.105 DEBUG    chain] Verify descendant blocks: 6e09e6601171b22b88e67d405fc7a4d221ca6bf990b188280eb76af384a7507d24a15f954dd6d0e93539cd013e0b87ff90a46195ae7ee103f2928fad6ac93edb (block_num:1, state:5655f27ae95ef5a523efad3042f24c4f27f1910c1783c8c34b995bc7ee578788, previous_block_id:a1ae58a4cbb6525f2503e4c7f80cc252cf0e8924382b372f5eaef8262b6e537521a941f78b395b7a0e3a779d78d7e19387bb7a43da129dca870df7a26110f22d) ([])
sawtooth-validator          | [2019-01-14 01:03:23.106 DEBUG    broadcaster] Broadcasting events: [event_type: "sawtooth/block-commit"
sawtooth-validator          | attributes {
sawtooth-validator          |   key: "block_id"
sawtooth-validator          |   value: "6e09e6601171b22b88e67d405fc7a4d221ca6bf990b188280eb76af384a7507d24a15f954dd6d0e93539cd013e0b87ff90a46195ae7ee103f2928fad6ac93edb"
sawtooth-validator          | }
sawtooth-validator          | attributes {
sawtooth-validator          |   key: "block_num"
sawtooth-validator          |   value: "1"
sawtooth-validator          | }
sawtooth-validator          | attributes {
sawtooth-validator          |   key: "state_root_hash"
sawtooth-validator          |   value: "5655f27ae95ef5a523efad3042f24c4f27f1910c1783c8c34b995bc7ee578788"
sawtooth-validator          | }
sawtooth-validator          | attributes {
sawtooth-validator          |   key: "previous_block_id"
sawtooth-validator          |   value: "a1ae58a4cbb6525f2503e4c7f80cc252cf0e8924382b372f5eaef8262b6e537521a941f78b395b7a0e3a779d78d7e19387bb7a43da129dca870df7a26110f22d"
sawtooth-validator          | }
sawtooth-validator          | , event_type: "sawtooth/state-delta"
sawtooth-validator          | attributes {
sawtooth-validator          |   key: "address"
sawtooth-validator          |   value: "212bd800d63ad9f4fdcb4b9067053879d19ab3b37c24a09f60b0506cf5315fdd0592ae"
sawtooth-validator          | }
sawtooth-validator          | data: "\n\254\001\nF212bd800d63ad9f4fdcb4b9067053879d19ab3b37c24a09f60b0506cf5315fdd0592ae\022`\n^\nB02bca540f57fb0514b98baf8973ad401f9ce2ec4b3de611a2ffc134b877bcbbc87\022\022bochuxt7@gmail.com\030\333\277\357\341\005\030\001"
sawtooth-validator          | ]
sawtooth-validator          | [2019-01-14 01:03:23.108 INFO     block_validator] Finished block validation of: 6e09e6601171b22b88e67d405fc7a4d221ca6bf990b188280eb76af384a7507d24a15f954dd6d0e93539cd013e0b87ff90a46195ae7ee103f2928fad6ac93edb (block_num:1, state:5655f27ae95ef5a523efad3042f24c4f27f1910c1783c8c34b995bc7ee578788, previous_block_id:a1ae58a4cbb6525f2503e4c7f80cc252cf0e8924382b372f5eaef8262b6e537521a941f78b395b7a0e3a779d78d7e19387bb7a43da129dca870df7a26110f22d)
simple-supply-subscriber    | Handling deltas for block: 6e09e6601171b22b88e67d405fc7a4d221ca6bf990b188280eb76af384a7507d24a15f954dd6d0e93539cd013e0b87ff90a46195ae7ee103f2928fad6ac93edb
simple-supply-rest-api      | [2019-01-14 01:03:23.349 INFO     cursor] 
simple-supply-rest-api      |         INSERT INTO auth (
simple-supply-rest-api      |             public_key,
simple-supply-rest-api      |             encrypted_private_key,
simple-supply-rest-api      |             hashed_password
simple-supply-rest-api      |         )
simple-supply-rest-api      |         VALUES ('02bca540f57fb0514b98baf8973ad401f9ce2ec4b3de611a2ffc134b877bcbbc87', '65e2827d7ea55d160126a0c3fa0fc5a5524ce59c83a211b48d3b4688b6fa0355f2f0c10d5cc737ebd2a8611d319529e159d14ded872dc97f2a08084e8fe3cc38', '243262243132245955566d7a49767a38306c4d4f6c67584f697a7a49756e776d477a666e77495370696d38627258504a6c584f332e35417735474361');
simple-supply-rest-api      |         
simple-supply-rest-api      | [2019-01-14 01:03:23.350 INFO     cursor] None
curator-app                 | 172.21.0.1 - - [14/Jan/2019:01:03:22 +0000] "POST /api/agents HTTP/1.1" 200 286
simple-supply-rest-api      | [2019-01-14 01:03:23.359 INFO     helpers] POST /agents HTTP/1.1: 200 status, 444 size, in 0.385218 s
simple-supply-rest-api      | [2019-01-14 01:03:25.953 INFO     cursor] 
simple-supply-rest-api      |         SELECT record_id FROM records
simple-supply-rest-api      |         WHERE (
simple-supply-rest-api      | SELECT max(block_num) FROM blocks
simple-supply-rest-api      | ) >= start_block_num
simple-supply-rest-api      |         AND (
simple-supply-rest-api      | SELECT max(block_num) FROM blocks
simple-supply-rest-api      | ) < end_block_num;
simple-supply-rest-api      |         
simple-supply-rest-api      | [2019-01-14 01:03:25.953 INFO     cursor] None
curator-app                 | 172.21.0.1 - - [14/Jan/2019:01:03:25 +0000] "GET /api/records HTTP/1.1" 200 2
simple-supply-rest-api      | [2019-01-14 01:03:25.963 INFO     helpers] GET /records HTTP/1.1: 200 status, 158 size, in 0.010219 s
simple-supply-rest-api      | [2019-01-14 01:03:27.453 INFO     cursor] 
simple-supply-rest-api      |         SELECT record_id FROM records
simple-supply-rest-api      |         WHERE (
simple-supply-rest-api      | SELECT max(block_num) FROM blocks
simple-supply-rest-api      | ) >= start_block_num
simple-supply-rest-api      |         AND (
simple-supply-rest-api      | SELECT max(block_num) FROM blocks
simple-supply-rest-api      | ) < end_block_num;
simple-supply-rest-api      |         
simple-supply-rest-api      | [2019-01-14 01:03:27.454 INFO     cursor] None
simple-supply-rest-api      | [2019-01-14 01:03:27.458 INFO     helpers] GET /records HTTP/1.1: 200 status, 158 size, in 0.005308 s
curator-app                 | 172.21.0.1 - - [14/Jan/2019:01:03:27 +0000] "GET /api/records HTTP/1.1" 200 2
simple-supply-rest-api      | [2019-01-14 01:03:27.955 INFO     cursor] 
simple-supply-rest-api      |         SELECT public_key, name, timestamp FROM agents
simple-supply-rest-api      |         WHERE (
simple-supply-rest-api      | SELECT max(block_num) FROM blocks
simple-supply-rest-api      | ) >= start_block_num
simple-supply-rest-api      |         AND (
simple-supply-rest-api      | SELECT max(block_num) FROM blocks
simple-supply-rest-api      | ) < end_block_num;
simple-supply-rest-api      |         
simple-supply-rest-api      | [2019-01-14 01:03:27.955 INFO     cursor] None
curator-app                 | 172.21.0.1 - - [14/Jan/2019:01:03:27 +0000] "GET /api/agents HTTP/1.1" 200 141
simple-supply-rest-api      | [2019-01-14 01:03:27.961 INFO     helpers] GET /agents HTTP/1.1: 200 status, 299 size, in 0.006663 s
simple-supply-rest-api      | [2019-01-14 01:03:29.475 INFO     cursor] 
simple-supply-rest-api      |         SELECT record_id FROM records
simple-supply-rest-api      |         WHERE (
simple-supply-rest-api      | SELECT max(block_num) FROM blocks
simple-supply-rest-api      | ) >= start_block_num
simple-supply-rest-api      |         AND (
simple-supply-rest-api      | SELECT max(block_num) FROM blocks
simple-supply-rest-api      | ) < end_block_num;
simple-supply-rest-api      |         
simple-supply-rest-api      | [2019-01-14 01:03:29.475 INFO     cursor] None
curator-app                 | 172.21.0.1 - - [14/Jan/2019:01:03:29 +0000] "GET /api/records HTTP/1.1" 200 2
simple-supply-rest-api      | [2019-01-14 01:03:29.480 INFO     helpers] GET /records HTTP/1.1: 200 status, 158 size, in 0.005323 s
simple-supply-rest-api      | [2019-01-14 01:03:32.114 INFO     cursor] 
simple-supply-rest-api      |         SELECT public_key, name, timestamp FROM agents
simple-supply-rest-api      |         WHERE public_key='02bca540f57fb0514b98baf8973ad401f9ce2ec4b3de611a2ffc134b877bcbbc87'
simple-supply-rest-api      |         AND (
simple-supply-rest-api      | SELECT max(block_num) FROM blocks
simple-supply-rest-api      | ) >= start_block_num
simple-supply-rest-api      |         AND (
simple-supply-rest-api      | SELECT max(block_num) FROM blocks
simple-supply-rest-api      | ) < end_block_num;
simple-supply-rest-api      |         
simple-supply-rest-api      | [2019-01-14 01:03:32.115 INFO     cursor] None
curator-app                 | 172.21.0.1 - - [14/Jan/2019:01:03:32 +0000] "GET /api/agents/02bca540f57fb0514b98baf8973ad401f9ce2ec4b3de611a2ffc134b877bcbbc87 HTTP/1.1" 200 139
simple-supply-rest-api      | [2019-01-14 01:03:32.120 INFO     helpers] GET /agents/02bca540f57fb0514b98baf8973ad401f9ce2ec4b3de611a2ffc134b877bcbbc87 HTTP/1.1: 200 status, 297 size, in 0.006995 s
simple-supply-rest-api      | [2019-01-14 01:03:47.231 INFO     cursor] 
simple-supply-rest-api      |         SELECT public_key, name, timestamp FROM agents
simple-supply-rest-api      |         WHERE (
simple-supply-rest-api      | SELECT max(block_num) FROM blocks
simple-supply-rest-api      | ) >= start_block_num
simple-supply-rest-api      |         AND (
simple-supply-rest-api      | SELECT max(block_num) FROM blocks
simple-supply-rest-api      | ) < end_block_num;
simple-supply-rest-api      |         
simple-supply-rest-api      | [2019-01-14 01:03:47.231 INFO     cursor] None
curator-app                 | 172.21.0.1 - - [14/Jan/2019:01:03:47 +0000] "GET /api/agents HTTP/1.1" 200 141
simple-supply-rest-api      | [2019-01-14 01:03:47.233 INFO     helpers] GET /agents HTTP/1.1: 200 status, 299 size, in 0.002483 s
simple-supply-rest-api      | [2019-01-14 01:03:47.877 INFO     cursor] 
simple-supply-rest-api      |         SELECT record_id FROM records
simple-supply-rest-api      |         WHERE (
simple-supply-rest-api      | SELECT max(block_num) FROM blocks
simple-supply-rest-api      | ) >= start_block_num
simple-supply-rest-api      |         AND (
simple-supply-rest-api      | SELECT max(block_num) FROM blocks
simple-supply-rest-api      | ) < end_block_num;
simple-supply-rest-api      |         
simple-supply-rest-api      | [2019-01-14 01:03:47.877 INFO     cursor] None
simple-supply-rest-api      | [2019-01-14 01:03:47.879 INFO     helpers] GET /records HTTP/1.1: 200 status, 158 size, in 0.002671 s
curator-app                 | 172.21.0.1 - - [14/Jan/2019:01:03:47 +0000] "GET /api/records HTTP/1.1" 200 2
simple-supply-rest-api      | [2019-01-14 01:11:46.405 INFO     cursor] 
simple-supply-rest-api      |         SELECT public_key, name, timestamp FROM agents
simple-supply-rest-api      |         WHERE (
simple-supply-rest-api      | SELECT max(block_num) FROM blocks
simple-supply-rest-api      | ) >= start_block_num
simple-supply-rest-api      |         AND (
simple-supply-rest-api      | SELECT max(block_num) FROM blocks
simple-supply-rest-api      | ) < end_block_num;
simple-supply-rest-api      |         
simple-supply-rest-api      | [2019-01-14 01:11:46.405 INFO     cursor] None
curator-app                 | 172.21.0.1 - - [14/Jan/2019:01:11:46 +0000] "GET /api/agents HTTP/1.1" 200 141
simple-supply-rest-api      | [2019-01-14 01:11:46.406 INFO     helpers] GET /agents HTTP/1.1: 200 status, 299 size, in 0.001418 s
simple-supply-rest-api      | [2019-01-14 01:11:46.945 INFO     cursor] 
simple-supply-rest-api      |         SELECT record_id FROM records
simple-supply-rest-api      |         WHERE (
simple-supply-rest-api      | SELECT max(block_num) FROM blocks
simple-supply-rest-api      | ) >= start_block_num
simple-supply-rest-api      |         AND (
simple-supply-rest-api      | SELECT max(block_num) FROM blocks
simple-supply-rest-api      | ) < end_block_num;
simple-supply-rest-api      |         
simple-supply-rest-api      | [2019-01-14 01:11:46.945 INFO     cursor] None
curator-app                 | 172.21.0.1 - - [14/Jan/2019:01:11:46 +0000] "GET /api/records HTTP/1.1" 200 2
simple-supply-rest-api      | [2019-01-14 01:11:46.949 INFO     helpers] GET /records HTTP/1.1: 200 status, 158 size, in 0.006002 s
