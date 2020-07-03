export const findModule=(modulos, moduleName)=>{
    var validator=modulos.find(modulo=>modulo.nombreModulo === moduleName);

        if( typeof validator === 'undefined'){
            return false;
        }else{
            return true;
        }
}