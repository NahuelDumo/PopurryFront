import React from "react";

export default function MisionesBuscar({
 nombre, setnombre, tipo, settipo, precio, setprecio, Buscar, Agregar,}) {
  const mostrarMensaje = (mensaje) => {
    // Lógica para mostrar la notificación al usuario (puede ser un toast, alerta, etc.)
    alert(mensaje);
  };

  return (
    <form name="FormBusqueda" onSubmit={(e) => e.preventDefault()}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-md-2">
            <label className="col-form-label">Nombre:</label>
          </div>
          <div className="col-sm-8 col-md-4">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setnombre(e.target.value)}
              value={nombre}
              autoFocus
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-md-2">
            <label className="col-form-label">Tipo Producto:</label>
          </div>
          <div className="col-sm-8 col-md-4">
            <select
              className="form-control"
              onChange={(e) => settipo(e.target.value)}
              value={tipo}
            >
              <option value={""}>Todos</option>
              <option value={"Elementos de Limpieza"}>Elementos de Limpieza</option>
              <option value={"Bebidas"}>Bebidas</option>
              <option value={"Golosinas y galletas"}>Golosinas y galletas</option>
              <option value={"Comida"}>Comida (te/café/jugos)</option>
              <option value={"Aromaterapia y Esencias"}>Aromaterapia y Esencias</option>
              <option value={"Articulos Varios"}>Articulos Varios</option>
              <option value={"Mascotas"}>Mascotas</option>
              <option value={"Cotillon"}>Cotillon</option>
              <option value={"Articulos de piscina"}>Artículos de piscina</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-4 col-md-2">
            <label className="col-form-label">Precio:</label>
          </div>
          <div className="col-sm-8 col-md-4">
            <input
              type="number"
              step="0.01"
              className="form-control"
              onChange={(e) => setprecio(parseFloat(e.target.value) || 0)}
              value={precio}
            />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col text-center">
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={() => {
                const resultados = Buscar();
                if (resultados.length === 0) {
                  mostrarMensaje("No se encontraron resultados.");
                }
              }}
            >
              <i className="fa fa-search"></i> Buscar
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => Agregar()}
            >
              <i className="fa fa-plus"></i> Agregar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
  
}
