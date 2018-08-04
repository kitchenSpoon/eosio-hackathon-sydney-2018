#!/bin/bash
set -eux

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
docker ps -a |  awk '{print $1}' | xargs docker rm -f || true
docker volume ls | awk '{print $2}' | xargs docker volume rm || true
sudo rm -rf ${SCRIPT_DIR}/../data/*
