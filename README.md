# 🏦 SimpleSampleBE

This project is aimed to be a Sample BE

## Prerequisites

1. Node.js version 12.18 or later. [Download Node.js](https://nodejs.org/en/)

## 🏗 Building & Running

Install dependencies

```bash
npm install
```
Run
```bash
npm start
```

Test it with the command:
```bash
curl --request POST \
  --url http://localhost:8000/test \
  --header 'content-type: application/json' \
  --data '{"msg": "testing"}'
```

You should see a json like this:
```bash
{"code":"success","payload":[{"msg":"testing","id":"bb4fe478-2e8d-4871-adb6-260a8f884d26","createDate":"2022-03-10T11:13:25.840Z"}]}
```