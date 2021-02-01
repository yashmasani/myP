import express from 'express'
import devBundle from './devBundle'
import path from 'path'
import index from './../index'


const curr_dir = process.cwd()
const app = express()

//devBundle.compile(app)
app.use('/dist',express.static(path.join(curr_dir,'dist')))
app.use('/',(req,res) =>{
  res.status(200).send(index())
})

let port = process.env.PORT || 8080
app.listen(port,function onStart(err){
  if(err){
    console.log(err)
  }
  console.log(`Listening to ${port}`)
})
