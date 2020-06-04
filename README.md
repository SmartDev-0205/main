# Prolocalize Portal

# Instalation
First install ionic:
https://ionicframework.com/docs/intro/cli
```
npm install -g @ionic/cli
```

Then install the npm requirements:
```
npm i --save
```

Then install AWS-amplify:
https://docs.amplify.aws/cli/start/install
```
npm install -g @aws-amplify/cli
```

Configure the AWS-amplify project. 
```
amplify init
```
1. There is no need to sign into the account, just press continue.
2. Chose `ap-southeast-1` region
3. Use the following credentials:
```
Username: prolocalize
Access key:
AKIAYTCIMGMH6YWXLNBD
Secret:
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
````

Pull the AWS-amplify architecture:
```
amplify pull
```

If amplify is successfully installed, we can launch the app
with:
```
ionic serve
```
