#!/usr/bin/env bash


rm -rf resources
mkdir resources
cd resources
wget http://kyoto.let.vu.nl/~postma/dfn/lexicon/tool_input.zip
unzip tool_input.zip
cd .. 

rm -rf data 
mkdir data 

# copy annotations
mkdir data/v1
cp resources/tool_input/annotations/*json data/v1/

# copy images
rm -rf public/v1
mkdir public/v1
cp resources/tool_input/images/*svg public/v1/
cp res/the_end.svg public/v1
