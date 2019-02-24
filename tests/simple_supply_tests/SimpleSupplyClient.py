from sawtooth_cli.rest_client import RestClient
from simple_supply_rest_api import transaction_creation
from sawtooth_rest_api.protobuf import batch_pb2


from makekey import make_key

BATCH_KEY = make_key()

class SimpleSupplyClient(object):

    def __init__(self, url):
        self._client = RestClient(base_url="http://{}".format(url))

    def create_agent(self, key, email, name, timestamp):
        batch = transaction_creation.make_create_agent_transaction(
            transaction_signer=key,
            batch_signer=BATCH_KEY,
            email=email,
            name=name,
            timestamp=timestamp)
        batch_id = batch.header_signature
        batch_list = batch_pb2.BatchList(batches=[batch])
        self._client.send_batches(batch_list)
        return self._client.get_statuses([batch_id], wait=10)

    def create_record(self, key, latitude, longitude, record_id, timestamp):
        batch = transaction_creation.make_create_record_transaction(
            transaction_signer=key,
            batch_signer=BATCH_KEY,
            latitude=latitude,
            longitude=longitude,
            record_id=record_id,
            timestamp=timestamp)
        batch_id = batch.header_signature
        batch_list = batch_pb2.BatchList(batches=[batch])
        self._client.send_batches(batch_list)
        return self._client.get_statuses([batch_id], wait=10)

    def transfer_record(self, key, receiving_agent, record_id, timestamp):
        batch = transaction_creation.make_transfer_record_transaction(
            transaction_signer=key,
            batch_signer=BATCH_KEY,
            receiving_agent=receiving_agent,
            record_id=record_id,
            timestamp=timestamp)
        batch_id = batch.header_signature
        batch_list = batch_pb2.BatchList(batches=[batch])
        self._client.send_batches(batch_list)
        return self._client.get_statuses([batch_id], wait=10)

    def update_record(self, key, latitude, longitude, record_id, timestamp):
        batch = transaction_creation.make_update_record_transaction(
            transaction_signer=key,
            batch_signer=BATCH_KEY,
            latitude=latitude,
            longitude=longitude,
            record_id=record_id,
            timestamp=timestamp)
        batch_id = batch.header_signature
        batch_list = batch_pb2.BatchList(batches=[batch])
        self._client.send_batches(batch_list)
        return self._client.get_statuses([batch_id], wait=10)