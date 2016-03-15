#!/bin/bash

KODOKOJO_UI_VERSION="0.1.0"

docker build --no-cache -t="kodokojo/kodokojo-ui:builder" docker/builder/
docker run -v $(pwd):/src -v $(pwd)/docker/delivery/:/target -e "KODOKOJO_UI_VERSION=0.1.0" kodokojo/kodokojo-ui:builder
cd docker/delivery
mkdir static
tar zxvf kodokojo-ui-${KODOKOJO_UI_VERSION}.tar.gz -C static
cd ../..
docker build --no-cache -t="kodokojo/kodokojo-ui" docker/delivery