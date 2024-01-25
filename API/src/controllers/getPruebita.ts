
const getPruebita = async() => {
    const pruebita = await pruebitaRepository.find();
    if (!pruebita) {
        throw new Error('Pruebita not found');
    }
    return pruebita;
}

export default getPruebita;