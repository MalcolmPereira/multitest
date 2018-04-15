#! /bin/sh

exec api/run.sh &
exec web/run.sh
