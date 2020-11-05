const forController = {};

forController.list= (req,res)=>{ 

    res.render('registro')

   
};

forController.add = (req, res)=>{
    const user = req.body;
    
    req.getConnection((err, conn)=>{
        
        const query = 'INSERT INTO datos SET ?';
        conn.query(query,[user],(error, data)=>{
            
            console.log(data);
            res.redirect('/'); 
        })

    });

};

module.exports= forController;