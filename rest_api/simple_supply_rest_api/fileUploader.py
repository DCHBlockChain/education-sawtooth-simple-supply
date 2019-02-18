# Import Minio library.
from minio import Minio
from minio.error import (ResponseError, BucketAlreadyOwnedByYou,
                         BucketAlreadyExists)


class ObjectUploader(object):
    def __init__(self):
        self.minioClient=self.getMinioClient()
    @staticmethod
    def getMinioClient(url='192.168.128.136:9000', access_key='POTKQ9EF35VUUF56JIUW', scret_key='o6UhcpCDTQaiD9bcNXbFMlaSgXUGGdazx9+AMyPJ'):
        try:
            # Initialize minioClient with an endpoint and access/secret keys.
            minioClient = Minio(url,
                                access_key=access_key,
                                secret_key=scret_key,
                                secure=False)
            return minioClient
        except Exception as e:
            print(e)

    # Make a bucket with the make_bucket API call.

    def uploadFile(self, bucketname='dna', filename='mydata.txt', path='/Users/george/mc/'):
        try:

                if not self.minioClient.bucket_exists(bucketname):
                    self.minioClient.make_bucket(bucketname, location="us-east-1")

        except BucketAlreadyOwnedByYou as err:
               print(err)
        except BucketAlreadyExists as err:
               print(err)
        except ResponseError as err:
               print(err)
        else:
                # Put an object 'pumaserver_debug.log' with contents from 'pumaserver_debug.log'.
                try:
                       obj_etag=self.minioClient.fput_object(bucketname, filename, path+filename)
                       print("obj",obj_etag)
                       # print(obj.bucket_name,
                       #       obj.object_name.encode('utf-8'),
                       #       obj.last_modified,
                       #       obj.etag,
                       #       obj.size,
                       #       obj.content_type)
                       return obj_etag
                except ResponseError as err:
                       print(err)


    def listObj(self, bucketname,prefix=None):
        objects = self.minioClient.list_objects(bucketname, prefix=prefix,
                                           recursive=True)
        for obj in objects:
            print("e-teg:",obj.etag )
            print(obj.bucket_name,
                  obj.object_name.encode('utf-8'),
                  obj.last_modified,
                  obj.etag,
                  obj.size,
                  obj.content_type)

    def findObj(self,minioClient,etag):
        pass
    def put_object(self,bucket_name, object_name, data, length,
                   content_type='application/octet-stream',
                   metadata=None, sse=None, progress=None):
        self.minioClient.put_object(bucket_name,object_name,data,length)
        """
        Add a new object to the cloud storage server.
    
        NOTE: Maximum object size supported by this API is 5TiB.
    
        Examples:
         file_stat = os.stat('hello.txt')
         with open('hello.txt', 'rb') as data:
             minio.put_object('foo', 'bar', data, file_stat.st_size, 'text/plain')
         """

def test():
    svc=ObjectUploader()
    minioClient=svc.getMinioClient()
    buckername="e-health2"

    svc.uploadFile(buckername,'mydata.txt')
    svc.listObj(buckername)

    print("done")

# test()