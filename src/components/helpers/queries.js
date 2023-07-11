// llamar la variable de entorno
const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_productos = import.meta.env.VITE_API_PRODUCTO;


/*GET devuelven una lista de elementos, puede devolver un elemento.
POST permiten agregar elementos.
PUT / PATCH permiten modificar elementos.
DELETE  permiten eliminar un elementos.*/


export const login= async (usuario)=>{
    try{
        const respuesta = await fetch(URL_usuario,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });
        const usuarioLogueado = await respuesta.json();
        return usuarioLogueado
    }catch(error){
        console.log(error)
    }
}

export const obtenerProductos = async () => {
  try {
    const respuesta = await fetch(URL_productos);
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerUnProducto = async (_id) => {
  try {
    const respuesta = await fetch(URL_productos + "/" + _id);
    const producto = await respuesta.json();
    return producto;
  } catch (error) {
    console.log(error);
  }
};

export const crearProducto = async (producto) => {
  try {
    const respuesta = await fetch(URL_productos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
export const borrarProducto = async (id) => {
  try {
    const respuesta = await fetch(URL_productos + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarProducto = async (producto, id) => {
  try {
    const respuesta = await fetch(URL_productos + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
