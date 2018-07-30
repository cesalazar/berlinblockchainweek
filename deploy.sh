#!/usr/bin/env sh

# abort on errors
set -e

# build
# vuepress build
npm run build

# navigate into the build output directory
cd .vuepress/dist

# include the custom domain for the GitHub Page
cp ../.github_config/CNAME .

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:cesalazar/berlinblockchainweek.git master:gh-pages

cd -
