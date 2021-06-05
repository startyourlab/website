#!/bin/bash
docker build . -t startyourlab/website   || exit
docker run -p 3000:3000 startyourlab/website:latest
