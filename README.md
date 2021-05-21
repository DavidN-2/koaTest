## End to end test using webdriverIO 7 with Cucumber

#### Pre-requisites

1.Node: `14.15.1` as specified in the `.node-version` file. The framework is compatible with any Node version 12 or higher, but it has been fixed to the latest one

2.Chrome installed.

#### Setup nodenv when several node versions are installed in the machine

Install Homebrew (https://brew.sh) if you don’t have it already.
Launch this command in your terminal:

```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Once you have Homebrew installed and working, you can proceed to install nodenv (https://github.com/nodenv/nodenv), a version manager for node. This tool allows you to manage multiple versions of node installed in your machine

```
\$ brew install nodenv
```

Before trying anything else, you should add in you .bash_profile or .zshrc (or whatever profile config file for you shell) the following line (brew suggests this as optional, but it's actually required):

```
# nodenv setup
export PATH="$HOME/.nodenv/bin:$PATH"
eval "$(nodenv init -)"
```

To do it open a different terminal and launch:

```
vi .bash_profile or vi .zshrc, depending of your terminal type
```

Note: if you are using a special shell (like zsh) you might need to add some special config to your shell profile. In nodenv’s Github page, you can check those special scenarios.

So, now that you have nodenv installed, the first thing would be installing a node version. This is how you do it:

```
\$ nodenv install 14.15.1
```

Now check that the node version in the koa path is the expected doing:

```
\$ node -v
```

The response should be that the installed version is the expected 14.15.1

#### Setup Scripts

- Clone the repository into a folder
- Go inside the folder and run following command from terminal/command prompt

```
npm install
```

#### Run Scripts

- To run the test in local:

```
npm run e2etests:local
```

#### Reports

- To generate the report, install the Allure command-line tool running this command:

```
npm install -g allure-commandline --save-dev
```

- When the test is executed, the report is generated running the next command:

```
allure generate test-results/ --clean  && allure open
```

- One scenario will pass, and the other one will fail to show the failure screenshot on the reporter.
- The report is automatically opened in a new tab
- A screenshot is taken when a step is failing. To see the screenshot open the failed test case in the suite section and click on the failed step. The execution details will be shown and the last step is takeScreenshot. Unfold this step to see the screenshot
