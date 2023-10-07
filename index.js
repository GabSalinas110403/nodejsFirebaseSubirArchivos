var express=require("express");
var cors=require("cors");
var path=require("path");
var rutas=require("./rutas/usuariosRutas");
var rutaspr=require("./rutas/productoRutas");
var rutasUsuariosApis=require("./rutas/usuariosRutasApis");
var rutasProductosApis=require("./rutas/productoRutasApis");


var app=express();
app.set("view engine", "ejs");
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use("/",express.static(path.join(__dirname,"/web")));
app.use("/",rutas);
app.use("/",rutaspr);
app.use("/",rutasUsuariosApis);
app.use("/",rutasProductosApis);


var port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port);
}); 