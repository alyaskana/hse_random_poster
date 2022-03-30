export const generateMeshCSS = (schema) => {
  let ob = []

  schema.forEach(point => {
    const { position, color } = point;
    let ret = 'radial-gradient(at';

    position.forEach(positionItem => {
      ret += ` ${positionItem}%`
    });

    ret += ', ' + color + ' 0px, transparent 50%)'
    ob.push(ret)
  });

  return ob.join(',')
}