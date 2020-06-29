export const getModuloType = "getModulos";


export const getModulos = (modulosParam) => ({
    type: getModuloType,
    modulos: modulosParam
});
