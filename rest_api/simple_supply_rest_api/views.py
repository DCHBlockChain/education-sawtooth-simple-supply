import asyncio,logging
from typing import Dict
# from concurrent.futures import ProcessPoolExecutor

# import aiohttp_jinja2
from aiohttp import web
from aiohttp.web import json_response
# from .worker import predict
# from .utils import Config

LOGGER = logging.getLogger(__name__)
class SiteHandler:
    def __init__(self ) -> None: #conf: Config, executor: ProcessPoolExecutor
        # self._conf = conf
        # self._executor = executor
        self._loop = asyncio.get_event_loop()

    # @aiohttp_jinja2.template('index.html')
    # async def index(self, request: web.Request) -> Dict[str, str]:
    #     return {}

    async def uploader(self, request: web.Request) -> web.Response:
        form = await request.post()
        raw_data = form['file'].file.read()

        print(" >>>dna raw data", raw_data)
        LOGGER.info(" >>>dna raw data", raw_data)
        LOGGER.info(' >>>dna raw data || %s', raw_data)
        # executor = request.app['executor']
        # r = self._loop.run_in_executor
        # raw_data = await r(executor, predict, raw_data)
        # raw_data = predict(raw_data)
        headers = {'Content-Type': 'application/json'}
        #return web.Response(body=raw_data, headers=headers)

        return json_response({'result': 'SUCCESS'})
