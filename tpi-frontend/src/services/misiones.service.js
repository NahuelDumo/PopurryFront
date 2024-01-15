import axios from "axios";

const urlResource = "https://kiosco-popurri.koyeb.app/api/productos";

async function Buscar(Nombre, Tipo, Precio) {
  let list;
  if (Nombre !== "") {
    list = await BuscarPorNombre(Nombre);
    if (Tipo !== "") {
      let list2 = list.filter(item => item.tipo === Tipo);
      if (Precio !== ""){
         return list2.filter(item => item.precio >= Precio)
        }
    }

    else if (Precio !== 0) {
      return list.filter(item => item.precio >= Precio);
    }
    return list

  } else if (Tipo !== "") {
    list = await BuscarPorTipo(Tipo);
    if (Precio !== 0) {
      return list.filter(item => item.precio === Precio);
    }
    return list

  } else if (Precio !== 0) {
    return BuscarPorPrecio(Precio);

  } else {
    const resp = await axios.get(urlResource + "/");
    return resp.data
  }

}


async function BuscarPorNombre(Nombre) {
  const resp = await axios.get(urlResource + "/-",  {params: {nombre: Nombre }} );
  return resp.data;
}

async function BuscarPorTipo(tipo) {
  const resp = await axios.get(urlResource + "/Tipo",  {params: {tipo: tipo }} );
  return resp.data;
}

async function BuscarPorPrecio(Precio) {
  const resp = await axios.get(urlResource,  {params: {precio: Precio }} );
  return resp.data;
}

async function Grabar(item, Accion) {
  if (Accion === "M") {
    await axios.put(urlResource, item);
  } else {
    await axios.post(urlResource , item);
  }
}
async function Delete(Nombre) {
  await axios.delete(urlResource + "/Eliminar",  {params: {nom: Nombre }} );
}


export const misionesServices = {
  Buscar,
  BuscarPorNombre,
  Grabar,
  Delete
};
