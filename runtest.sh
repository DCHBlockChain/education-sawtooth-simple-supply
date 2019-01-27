#!/bin/bash

. ~/venv3/bin/activate

DATE_WITH_TIME=`date "+%Y%m%d-%H%M%S"`

./bin/run-tests > 'TestLog_'$DATE_WITH_TIME'.md'