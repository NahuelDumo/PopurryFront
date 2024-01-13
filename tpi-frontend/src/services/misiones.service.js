import axios from "axios";
import config from "bootstrap/js/src/util/config";

const urlResource = "http://localhost:8081/api/productos";

async function Buscar(Nombre, Tipo, Precio) {
  if (Nombre !== "") {
    return BuscarPorNombre(Nombre)}
  if (Tipo !== ""){
    return BuscarPorTipo(Tipo)
  }
  if (Precio !== 0){
    return BuscarPorPrecio(Precio)
  }
  const resp = await axios.get(urlResource + "/");
  return resp.data;
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
