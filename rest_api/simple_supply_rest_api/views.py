import asyncio,logging
from typing import Dict
# from concurrent.futures import ProcessPoolExecutor

# import aiohttp_jinja2
from aiohttp import web
from aiohttp.web import json_response
# from .worker import predict
# from .utils import Config
from .fileUploader import ObjectUploader

import logging,os

LOGGER = logging.getLogger(__name__)
class SiteHandler:
    def __init__(self ) -> None: #conf: Config, executor: ProcessPoolExecutor
        # self._conf = conf
        # self._executor = executor
        self._loop = asyncio.get_event_loop()

        self.fileuploader=ObjectUploader()

    # @aiohttp_jinja2.template('index.html')
    # async def index(self, request: web.Request) -> Dict[str, str]:
    #     return {}

    async def uploader(self, request: web.Request) -> web.Response:

        try:
            form = await request.post()
            # file = request.files['file']
            file=form['file'].file
            raw_data = file.read()

            file = form['file'].file
            LOGGER.info(" file:  {}".format(file.__dir__()))


            # file.seek(0, os.SEEK_END)
            # file_length = file.tell()
            # LOGGER.info(" file_length ", file_length)

            # size = len(file)
            # LOGGER.info(" size: {}".format( size))

            # LOGGER.info(" >>>dna raw data", raw_data[0:10])
            LOGGER.info(" >>>dna raw data {}".format( raw_data))
            # LOGGER.info(' >>>dna raw data || %s', raw_data)
            bucket_name="i-dna"
            object_name="dna-file"
            # length=len(raw_data)

            LOGGER.info('>>>>> upload started')
            etag=self.fileuploader.put_object(bucket_name, object_name, file, None,
                       content_type='application/octet-stream',
                       metadata=None, sse=None, progress=None)

            LOGGER.info('>>>>> upload stopped.. {}'.format(etag))
            # executor = request.app['executor']
            # r = self._loop.run_in_executor
            # raw_data = await r(executor, predict, raw_data)
            # raw_data = predict(raw_data)
            headers = {'Content-Type': 'application/json'}
            #return web.Response(body=raw_data, headers=headers)

            return json_response({'result': 'SUCCESS'})

        except Exception as e:
            print(e)
            LOGGER.info('Exception upload {}'.format(e))


