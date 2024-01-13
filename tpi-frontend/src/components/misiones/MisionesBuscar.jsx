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
                          <option value={"Gaseosas"}>Gaseosas</option>
                          <option value={"Golosinas y galletas"}>Golosinas y galletas</option>
                          <option value={"Perfumes"}>Perfumes</option>
                          <option value={"Comida"}>Comida (te/café/jugos)</option>
                      </select>
                  </div>
              </div>
            <div className="col-sm-4 col-md-2">
              <label className="col-form-label">Precio:</label>
            </div>
              <div className="col-sm-8 col-md-4">
                  <input
                      type="float"
                      className="form-control"
                      onChange={(e) => setprecio(parseFloat(e.target.value) || 0)}
                      value={precio}
                  />
              </div>

          </div>



          <hr />

          {/* Botones */}
          <div className="row">
            <div className="col text-center botones">
              <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    const resultados = Buscar();
                    if (resultados.length === 0) {
                      mostrarMensaje("No se encontraron resultados.");
                    }
                  }}
              >
                <i className="fa fa-search"> </i> Buscar
              </button>
              <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => Agregar()}
              >
                <i className="fa fa-plus"> </i> Agregar
              </button>
            </div>
          </div>
        </div>
      </form>
  );
}
