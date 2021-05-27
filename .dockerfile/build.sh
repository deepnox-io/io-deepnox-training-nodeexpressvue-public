#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )/"
eval $(cat $DIR.env)
DATETIME=$(date +%Y%m%d-%H%M)
DOCKER_IMAGE_FULLNAME="${DOCKER_REPOSITORY_NAME}/${DOCKER_IMAGE_PREFIX}${DOCKER_IMAGE_NAME}"
DOCKER_IMAGE_TAG="${DATETIME}"

if [ "$1" != "only-push" ]; then
docker build -t ${DOCKER_IMAGE_FULLNAME}:${DOCKER_IMAGE_TAG} . \
  && docker tag ${DOCKER_IMAGE_FULLNAME}:${DOCKER_IMAGE_TAG} ${DOCKER_IMAGE_FULLNAME}:latest 
fi

if [ "$1" == "push" ] || [ "$1" == "only-push" ]; then
  docker push ${DOCKER_IMAGE_FULLNAME}:${DOCKER_IMAGE_TAG} \
  && docker push ${DOCKER_IMAGE_FULLNAME}:latest
fi
