// app.post('/bookCreate',async(req,res)=>{
//     const bookDetail = req.body;
//     const result = await bookCollection.insertOne(bookDetail);
//     res.send(result)
// })
// app.get('/bookDetail', async (req,res)=>{
//     const bookDetail = await bookCollection.find().toArray();
//     res.send(bookDetail);
// })
// app.delete('/deleteBook/:id',async(req,res)=>{
//     const id = req.params.id;
//     const query = {_id: ObjectId(id)};
//     const result = await bookCollection.deleteOne(query);
//     res.send(result)
// })