#!/usr/bin/env bash


rm -rf resources
mkdir resources
cd resources
wget http://kyoto.let.vu.nl/~postma/dfn/lexicon/annotation/v2.zip
unzip v2.zip
cd .. 

rm -rf data 
mkdir data 

# copy annotations
mkdir data/v2
cp resources/tool_input/annotations/*json data/v2/

# copy images
rm -rf public/v2
mkdir public/v2
cp resources/tool_input/images/*svg public/v2/
cp res/the_end.svg public/v2
