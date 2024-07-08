/*const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const userApiFromRouter = require('./routes/userRoutes');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { recompileSchema } = require('./model/userSchema');

const app = express();
const port = 3001;

const url="mongodb+srv://bhanuseelam1311:gE0uLGjaUSwBg8AY@cluster0.9dmstkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());

mongoose.connect(url)
  .then(() => {
    console.log('DB Connected');
  })
  .catch((err) => {
    console.error('DB Connection Error:', err);
  });

const server = new ApolloServer({ typeDefs, resolvers });
app.use('/users',userApiFromRouter)//add router
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
  app.listen(port, () => {
    console.log(`Server LIVE AT ${port}`);
  });
}

startServer();
*/


const express = require('express');
const mongoose = require('mongoose');
const {ApolloServer,gql} = require('apollo-server-express');
const typeDefs = require('./schema');
const cors = require('cors'); // Import CORS
const resolvers = require('./resolvers');
const userApiFromRouter = require('./routes/userRoutes')
const app = express();
const port = 3001
const url="mongodb+srv://bhanuseelam1311:gE0uLGjaUSwBg8AY@cluster0.9dmstkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// CORS middleware
app.use(cors());
app.use(express.json())//parsing
mongoose.connect(url,{useNewUrlParser:true,
useUnifiedTopology:true}).then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)});
const server = new ApolloServer({typeDefs,resolvers});
app.use('/users',userApiFromRouter); //api
async function StartServer(){
 await server.start();
 server.applyMiddleware({app});//run my express code
 app.listen(port,()=>{
 console.log('server live 3001');
 })
}
StartServer();
