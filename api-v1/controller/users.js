require('../model/user');

var mongoose   = require('mongoose'), 
    tokener     = require('../service/tokener'),
    User       = mongoose.model('users');

module.exports  = {
  	all : function(req,res){
    	User.find(req.query , function (e,d){
        if(e){
          res.status(501).json({message:'loError interno del servidor'});
        }else{
          res.status(200).json(d);
        }
    	}).sort(req.query);
  	},
  	get: function(req,res){
      var filter = {correo:1,nombre:1,apellido:1,telefono:1,celular:1,tipo_doc:1,documento:1,tarjeta:1}
  		User.findById(req.params.id, filter, function (e,d){
        if(e){
          res.status(400).json({message:'Error interno del servidor'});
        }else{
          res.status(200).json(d);
        }
    	});
  	},
  	post: function(req,res){
      User.create(req.body,function (e,d){
        if(e){
          console.log(e);
          res.status(400).json({message:'Los sentimos,Error 500 interno del servidor contactar al equipo de soporte'});
        }else{
          res.status(201).json(d);
        }
      });
  	},
  	put: function(req,res){
      User.update({ _id: req.params }, req.body , function (e, d){
              if(e){
                res.status(400).json({message:'Error interno del servidor'});
              }else{
                res.status(200).json(d);
              }
      });
  	},
  	delete: function(req,res){
  		User.findById("5a80c8b66b35a0040058253e").remove(function (e,d){
        if(e){
          res.status(400).json({message:'Error interno del servidor'});
        }else{
          if(d){
            res.status(200).json(d);
          }else{
            res.status(404).json({message:'Error No hay un recurso'});
          }
        }
      });
  	}
};