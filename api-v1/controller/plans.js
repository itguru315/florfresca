var mongoose    = require('mongoose'),
    Plans      = require('../model/plan'),
    Flowers      = require('../model/flower'),
    Sizes      = require('../model/size');

module.exports  = {
  	all : function(req,res){
    	Plans.find(req.query).exec( function (e,d){
        if(e){
          console.log(e);
          res.status(501).json({error:'501',msg:'Error interno del servidor'});
        }else{
          res.status(200).json(d);
        }
      });
  	},
  	get: function(req,res){
  		Plans.findById(req.params.id, function (e,d){
        if(e){
          res.status(400).json({error:'400',msg:'Error interno del servidor'});
        }else{
          res.status(200).json(d);
        }
    	});
  	},
  	post: function(req,res){
      res.status(401).json({error:'401',msg:'Lo sentimos, error 401 No autorizado'});
      // Plans.create(req.body,function (e,d){
      //   if(e){
      //     res.status(400).json({error:'501',msg:'Error interno del servidor'});
      //   }else{
      //     res.status(201).json(d);
      //   }
      // });
  	},
  	put: function(req,res){
      Plans.findByIdAndUpdate(req.params.id, req.body , function (e, d){
              if(e){
                res.status(400).json({error:'501',msg:'Error interno del servidor'});
              }else{
                console.log(d);
                res.status(200).json(d);
              }
      });
  	}
  	/*delete: function(req,res){
  		Slides.findById("5a80c8b66b35a0040058253e").remove(function (e,d){
        if(e){
          res.status(400).json({error:'501',msg:'Error interno del servidor'});
        }else{
          if(d){
            res.status(200).json(d);
          }else{
            res.status(404).json({error:'501',msg:'Error No hay un recurso'});
          }
        }
      });
  	}*/
};