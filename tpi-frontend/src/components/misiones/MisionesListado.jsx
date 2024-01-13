import React from "react";

function MisionesListado({Items, Modificar, Eliminar}) {
  return (

      <div className="table-responsive">
        <table className="table table-hover table-sm table-bordered table-striped">
          <thead>
          <tr>
            <th className="text-center">Nombre</th>
            <th className="text-center">Tipo</th>
            <th className="text-center">Precio</th>
            <th className="text-center">Acciones</th>
          </tr>
          </thead>
          <tbody>
          {Items &&
              Items.map((Item) => (
                  <tr key={Item.nombre}>
                      <td className="text-end">{Item.nombre}</td>
                      <td className="text-end">{Item.tipo}</td>
                      <td className="text-end">{Item.precio}</td>
                      <td className="text-center text-nowrap">

                      <button
                          className="btn btn-sm btn-outline-primary"
                          title="Modificar"
                          onClick={() => Modificar(Item)}
                      >
                        <i className="fa fa-pencil"></i> Editar
                      </button>
                      <button
                          className="btn btn-sm btn-outline-danger"
                          title="Eliminar"
                          onClick={() => Eliminar(Item)}
                      >
                        <i className="fa fa-trash"></i> Eliminar
                      </button>
                    </td>
                  </tr>
              ))}
          </tbody>
        </table>
      </div>
  );
}
export default MisionesListado;