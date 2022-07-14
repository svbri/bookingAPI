export const postProduct = async (urlBase, endpoint, nuevoProducto, setSuccessProduct) => {
    let token = localStorage.getItem('jwt');
    
    const options = {
        method: 'POST',
        body: JSON.stringify(nuevoProducto),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    /* const urlBaseLocal = 'http://localhost:8080'; */
  
    try {
        const response = await fetch(`${urlBase}/${endpoint}`, options);
        
        if(response.status === 200){
            const data = await response.json();
            console.log(data);
            setSuccessProduct(true);

            // await postImagen()
            
        } else {
            setSuccessProduct(false);

            console.log("Lamentablemente el producto no ha podido crearse. Por favor intente más tarde")
        }
        
    } catch (error) {
        console.warn(error)
    };
};


/* {
    "name": "Hermitage Hotel",
    "description": "Esta propiedad está a 6 minutos caminando de la playa. El Hotel Nevada ofrece alojamiento de 3 estrellas con decoración característica alpina a 200 metros del lago Nahuel Huapi. Cuenta con WiFi gratis. /Todas las habitaciones del Nevada están insonorizadas y disponen de TV vía satélite, radio, artículos de aseo exclusivos y secador de pelo. ",
    "address": "Av. San Martín 536",
    "latitude": -41.1343742,
    "longitude": -71.3075128,
    "checkinStart": "09:00:00",
    "checkinEnd": "15:00:00",
    "houseRules": "Check-out: 10:00 /No se permiten fiestas /No fumar",
    "healthAndSafety": "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus /Detector de humo /Depósito de seguridad",
    "cancellationPolicy": "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.",
    "category": {
        "id": 1
    },
    "characteristics": [
        {
            "id": 1
        }
    ],
    "city": {
        "id": 3
    },
    "images": [],
    "bookings": [],
    "user": {
        "id": 1
    }


} */
