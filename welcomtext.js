const welcome = (number, groupname) => {
    return `Hola @${number}. Bienvenido al grupo mejor grupo ${groupname} lee las reglas para no tener malos entendidos.`
}
exports.welcome = welcome

const bye = (number) => {
    return `Adios joto @${number}. para la proxima limpiate bien la cola👋`
}
exports.bye = bye
