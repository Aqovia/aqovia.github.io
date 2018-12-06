# aqovia
Static web site using Gulp, Nunjucks and LESS.

**DO NOT EDIT OR ADD FILES* OUTSIDE THE SOURCE FOLDER (_src) AS THEY WILL BE DELETED DURING THE (MANUAL) BUILDING PROCESS**

*Except for the following folder (gulp file-tasks) and files (.gitignore, CNAME, README.md, gulpfile.js, package.json, sitemap.xml)

The site is a static site using the template engine Nunjucks.
The site is built via a gulp process and it is using LESS to preprocess CSS.

On your local machine, after pulling a branch:
* run “npm install” to install dependencies
* run “gulp” to clean and build the site
* run “gulp serve” to run a testing site that will refresh with every changes (or so)

HTML content is in the folder _src/html
New pages should be added to _src/html/pages
New templates should be added to _src/html/templates

If you need to add new images, place them to _src/img

If you need to add new presentation files, such as PDF, add them to _src/resources

If you need to add new scripts, place them to _src/js

If you need to add new LESS partials, add them to _scr/less
