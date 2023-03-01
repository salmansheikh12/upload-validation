const db = require('../database');

module.exports = {
    storeImage:function(input, callback){
        const sql = 'select * from LunarImage where img = ?';
        db.query(sql, input.img, function(err, data, fields){
            if(err){
                throw err;
            }

            if(data.length > 1){
                const msg = input.img + " exists in the database already.";
            }
            else{
                const sql = 'insert into LunarImageV2 set ?';
                db.query(sql, input, function(err, data){
                    if(err){
                        throw err;
                    }
                });
                const msg = input.img + " has uploaded successfully";
            }
            return callback(msg);
        })
    }
}