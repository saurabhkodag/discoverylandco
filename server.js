// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const serveStatic = require('serve-static')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')



const app = express()



app.use('/',serveStatic(path.join(__dirname,'/dist')))


const port = process.env.PORT || 8080

app.listen(port)