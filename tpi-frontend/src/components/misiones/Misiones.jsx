import React, { useState, useEffect } from "react";
import MisionesBuscar from "./MisionesBuscar";
import MisionesListado from "./MisionesListado";
import MisionesRegistro from "./MisionesRegistro";
import { misionesServices } from "../../services/misiones.service";

function Misiones() {
  const TituloAccionABMC = {
    A: "(Agregar)",
    B: "(Eliminar)",
    M: "(Modificar)",
    C: "(Consultar)",
    L: "(Listado)",
  };
  const [AccionABMC, setAccionABMC] = useState("L");

  const [nombre, setnombre] = useState("");
  const [tipo, settipo] = useState("");
  const [precio, setprecio] = useState(0);

  const [Items, setItems] = useState(null);
  const [Item, setItem] = useState(null);

  useEffect(() => {
    console.log(Items);
  }, [Items]);

  async function Buscar() {
    const data = await misionesServices.Buscar(nombre, tipo, precio);
    setItems(data);
  }


  function Modificar(item) {
    setAccionABMC("M")
    setItem(item)

  }

  function Eliminar(item) {
    // Preguntar al usuario antes de eliminar
    const confirmacion = window.confirm(
        `¿Estás seguro de que deseas eliminar el producto ${item.nombre}?`
    );

    if (confirmacion) {
      // Eliminar el producto y recargar la lista
      misionesServices.Delete(item.nombre)
          .then(() => {
            alert("Registro eliminado correctamente.");
            Buscar(); // Recargar la lista después de eliminar
          })
          .catch((error) => {
            alert(error?.response?.data?.message ?? error.toString());
          });
    }
  }


  function Agregar() {
    setAccionABMC("A");
    setItem({
      nombre: null,
      tipo: null,
      precio: 0,
    });
  }

  async function Grabar(item) {
    try {
      await misionesServices.Grabar(item, AccionABMC);
    } catch (error) {
      alert(error?.response?.data?.message ?? error.toString());
      return;
    }
    await Buscar();
    Volver();

    setTimeout(() => {
      alert(
          "Registro " +
          (AccionABMC === "A" ? "agregado" : "modificado") +
          " correctamente."
      );
    }, 0);
  }

  function Volver() {
    setAccionABMC("L");
  }

  return (
      <div>
        <div className="tituloPagina">
          Productos <small>{TituloAccionABMC[AccionABMC]}</small>
        </div>

        {AccionABMC === "L" && (
            <MisionesBuscar
                nombre={nombre}
                setnombre={setnombre}
                tipo={tipo}
                settipo={settipo}
                precio={precio}
                setprecio={setprecio}
                Buscar={Buscar}
                Agregar={Agregar}
            />
        )}

        {AccionABMC === "L" && Items?.length > 0 && (
            <MisionesListado
                {...{
                  Items,
                  Modificar,
                  Eliminar,
                  Buscar,
                }}
            />
        )}

        {AccionABMC === "L" && Items?.length === 0 && (
            <div className="alert alert-info mensajesAlert">
              <i className="fa fa-exclamation-sign"></i>
              No se encontraron registros...
            </div>
        )}

        {AccionABMC !== "L" && (
            <MisionesRegistro
                {...{ AccionABMC, Item, Grabar, Volver }}
            />
        )}
      </div>
  );
}

export { Misiones };
