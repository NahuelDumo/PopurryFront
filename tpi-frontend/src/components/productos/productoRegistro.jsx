import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function MisionesRegistro({
                                           AccionABMC,
                                           Item,
                                           Grabar,
                                           Volver,
                                         }) {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid, isSubmitted },
  } = useForm({ defaultValues: Item });

  const [camposDeshabilitados, setCamposDeshabilitados] = useState(false);

  useEffect(() => {
    setCamposDeshabilitados(AccionABMC === "M");
  }, [AccionABMC]);

  const onSubmit = (data) => {
    Grabar(data);
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container-fluid">
          <fieldset>
            {/* Nombre Producto */}
            <div className="row">
              <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="nombre">
                  Nombre<span className="text-danger">*</span>:
                </label>
              </div>
              <div className="col-sm-8 col-md-6">
                <input
                    type="text"
                    {...register("nombre", {
                      required: "Nombre es requerido",
                      minLength: {
                        value: 3,
                        message: "El Nombre debe tener al menos 3 caracteres",
                      },
                      maxLength: {
                        value: 60,
                        message: "El Nombre debe tener como máximo 60 caracteres",
                      },
                    })}
                    autoFocus
                    className={`form-control ${
                        errors?.nombre ? "is-invalid" : ""
                    }`}
                    disabled={camposDeshabilitados}
                />
                {errors?.nombre && touchedFields.nombre && (
                    <div className="invalid-feedback">
                      {errors?.nombre?.message}
                    </div>
                )}
              </div>
            </div>

            {/* Precio */}
            <div className="row">
              <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="precio">
                  Precio<span className="text-danger">*</span>:
                </label>
              </div>
              <div className="col-sm-8 col-md-6">
                <input
                    type="number"
                    step="0.1"
                    {...register("precio", {
                      required: "Precio es requerido",
                      min: {
                        value: 1,
                        message: "El Precio debe ser mayor a 0",
                      },
                    })}
                    className={`form-control ${errors?.precio ? "is-invalid" : ""}`}

                />
                <div className="invalid-feedback">{errors?.precio?.message}</div>
              </div>
            </div>
            {/* Stock */}
            <div className="row">
              <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="stock">
                  Stock<span className="text-danger">*</span>:
                </label>
              </div>
              <div className="col-sm-8 col-md-6">
                <input
                    type="number"
                    step="1"
                    {...register("stock", {
                      required: "Stock es requerido",
                      min: {
                        value: 1,
                        message: "El Stock debe ser mayor a 0",
                      },
                    })}
                    className={`form-control ${errors?.stock ? "is-invalid" : ""}`}

                />
                <div className="invalid-feedback">{errors?.stock?.message}</div>
              </div>
            </div>
            {/* Precio de Lista*/}
            <div className="row">
              <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="precioDeLista">
                  Precio de Lista<span className="text-danger">*</span>:
                </label>
              </div>
              <div className="col-sm-8 col-md-6">
                <input
                    type="number"
                    step="0.1"
                    {...register("precioDeLista", {
                      required: "Precio de lista es requerido",
                      min: {
                        value: 1,
                        message: "El Precio de Lista debe ser mayor a 0",
                      },
                    })}
                    className={`form-control ${errors?.precioDeLista ? "is-invalid" : ""}`}

                />
                <div className="invalid-feedback">{errors?.precioDeLista?.message}</div>
              </div>
            </div>

            {/* Tipo Producto */}
            <div className="row">
              <div className="col-sm-4 col-md-3 offset-md-1">
                <label className="col-form-label" htmlFor="tipo">
                  Tipo Producto<span className="text-danger">*</span>:
                </label>
              </div>
              <div className="col-sm-8 col-md-6">
                <select
                    {...register("tipo")}
                    className="form-control"
                    disabled={camposDeshabilitados}
                >
                  <option value={""}></option>
                  <option value={"Elementos de Limpieza"}>
                    Elementos de Limpieza
                  </option>
                  <option value={"Bebidas"}>Bebidas</option>
                  <option value={"Golosinas y galletas"}>
                    Golosinas y galletas
                  </option>
      
                  <option value={"Comida"}>Comida (te/cafe/jugos)</option>
                  <option value={"Aromaterapia y Esencias"}>Aromaterapia y Esencias</option>
                  <option value={"Articulos Varios"}>Articulos Varios</option>
                  <option value={"Mascotas"}>Mascotas</option>
                  <option value={"Cotillon"}>Cotillon</option>
                  <option value={"Articulos de piscina"}>Artículos de piscina</option>
                </select>
              </div>
            </div>
          </fieldset>

          {/* Botones Grabar, Cancelar/Volver' */}
          <hr />
          <div className="row justify-content-center">
            <div className="col text-center botones">
              {AccionABMC !== "C" && (
                  <button type="submit" className="btn btn-primary">
                    <i className="fa fa-check"></i> Grabar
                  </button>
              )}
              <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => Volver()}
              >
                <i className="fa fa-undo"></i>
                {AccionABMC === "C" ? " Volver" : " Cancelar"}
              </button>
            </div>
          </div>

          {/* texto: Revisar los datos ingresados... */}
          {!isValid && isSubmitted && (
              <div className="row alert alert-danger mensajesAlert">
                <i className="fa fa-exclamation-sign"></i>
                Revisar los datos ingresados...
              </div>
          )}
        </div>
      </form>
  );
}
