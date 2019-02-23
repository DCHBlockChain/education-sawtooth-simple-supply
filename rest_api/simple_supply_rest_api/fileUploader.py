# Import Minio library.
from minio import Minio
from minio.error import (ResponseError, BucketAlreadyOwnedByYou,
                         BucketAlreadyExists)

# Initialize minioClient with an endpoint and access/secret keys.
minioClient = Minio('127.0.0.1:9000',
                    access_key='POTKQ9EF35VUUF56JIUW',
                    secret_key='o6UhcpCDTQaiD9bcNXbFMlaSgXUGGdazx9+AMyPJ',
                    secure=False)

# Make a bucket with the make_bucket API call.
try:
       minioClient.make_bucket("dnadata2", location="us-east-1")
except BucketAlreadyOwnedByYou as err:
       pass
except BucketAlreadyExists as err:
       pass
except ResponseError as err:
       raise
else:
        # Put an object 'pumaserver_debug.log' with contents from 'pumaserver_debug.log'.
        try:
               minioClient.fput_object('dnadata2', 'mydata.txt', '/tmp/1.txt')
        except ResponseError as err:
               print(err)
print("done")