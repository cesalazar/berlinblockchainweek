#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd .vuepress/dist

# copy the .vuepress/.github directory, which only contains files related to
# the gh-pages branch (GitHub Page)
cp -r ../.github .

# move the CNAME record into the root of the dist directory
mv .github/CNAME .

# create a 'dummy' git repository and commit all the files to later force-push
# into the gh-pages branch
git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:cesalazar/berlinblockchainweek.git master:gh-pages

exit 0
