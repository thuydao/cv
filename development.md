Development


Step1: Install the gh-pages package as a “dev-dependency” of the app
npm install gh-pages — save-dev

Step2: Add homepage property to package.json file
Open package.json and add
“homepage”: “http://{Github-username}.github.io/{Github-repo-name}"
Step3: Deploy scripts under package.json file

In the existing scripts property, add a predeploy property and a deploy property, each having the values shown below:
“scripts”: {
//…
“predeploy”: “npm run build”,
“deploy”: “gh-pages -d build”
}

The predeploy command helps to bundle the react app while the deploy command fires up the bundled file.
Step4: Create a remote GitHub repository
(Skip this step if your remote GitHub repository is already initialized)
Initialize: git init
Add it as remote: git remote add origin your-github-repository-url.git

Step5: Now deploy it to GitHub Pages
npm run deploy

Step6: Update your repository code (optional)
Commit and push your updated code commit to GitHub
git add .
git commit -m “Your commit message”
git push origin master
That’s it! You have successfully deployed your app to the website URL defined in Step2 of this Deployment section.
