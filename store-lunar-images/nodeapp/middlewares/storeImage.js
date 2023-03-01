const multer = require('multer');

module.exports.image = {
    storage: function(){
        const storage = multer.diskStorage({
            destination: function(req, file, cb){
                cb(null, 'public/images/');
            },
            filename: function(req, file, cb){
                cb(null, file.originalname);
            }
        })

        return storage;
    },
    allowedImage: function(req, file, cb){
        // acceptable image types
        if(!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)){
            req.fileValidationError = 'Only image files are accepted!';
            
            return cb(new Error('Only image files are accepted!'), false);
        }

        cb(null, true);
    }
}