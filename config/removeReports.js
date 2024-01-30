const fs = require("fs");
const path=require('path').resolve('./')

const removeDir = function(path){
    if(fs.existsSync(path)){
        const files = fs.readdirSync(path)
        if(files.length >0){
            files.forEach(function(filename){
                if(fs.statSync(path+ "/"+filename).isDirectory()){
                    removeDir(path+"/"+filename)
                }else{
                    fs.unlinkSync(path+"/"+filename)
                }
            })
        }else{

        }
    }else{
        console.log("Ruta del reporte no encontrado")
    }
}
removeDir(path+"/test-results/reports")