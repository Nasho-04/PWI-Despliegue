const DATA = [
    {
        id: 1,
        nombre: 'Gallardo',
        img: 'gallardo.jpeg',
        telefono: '+54 9 11 1234 5678',
        descripcion: {
            content: '9/12/18 ETERNO',
            fecha: '16 de marzo de 2023'
        },
        mensajes: [
            {
                author: 'Gallardo',
                content: 'Hola? Por qué me llamaste?',
                fecha: 'ayer a 15:34',
                estado: 'visto',
                id: 1
            },
            {
                author: 'Yo',
                content: 'Volvé a river muñeco, te necesitamos',
                fecha: 'ayer a 15:35',
                estado: 'visto',
                id: 2
            },
            {
                author: 'Gallardo',
                content: 'Ya no puedo, se terminó mi ciclo en el club',
                fecha: 'ayer a 15:36',
                estado: 'visto',
                id: 3
            },
            {
                author: 'Yo',
                content: 'Volvé o me mato, no me importa',
                fecha: 'ayer a 15:37',
                estado: 'entregado',
                id: 4
            },
        ]
    },
    {
        id: 2,
        nombre: 'Messi',
        img: 'messi.jpeg',
        telefono: '+54 9 11 2345 6789',
        descripcion: {
            content: 'El mejor de todo el mundo',
            fecha: '19 de diciembre de 2022'
        },
        mensajes: [
            {
                author: 'Messi',
                content: 'Hola capo, venis mañana al asado?',
                fecha: 'ayer a 15:34',
                estado: 'visto',
                id: 1
            },
            {
                author: 'Yo',
                content: 'Obvio Messi, te amo',
                fecha: 'ayer a 15:35',
                estado: 'visto',
                id: 2
            },
            {
                author: 'Messi',
                content: 'Traé hielo para el fernet',
                fecha: 'hoy a 15:36',
                estado: 'visto',
                id: 3
            },
        ]
    },
    {
        id: 3,
        nombre: 'Abuela',
        img: 'abuela.jpeg',
        telefono: '+54 9 11 3456 7890',
        descripcion: {
            content: 'Las mejores comidas de la ciudad',
            fecha: '8 de abril de 2024'
        },
        mensajes: [
            {
                author: 'Abuela',
                content: 'Hola, soy la abuela, comiste hoy?',
                fecha: 'hoy a 14:21',
                estado: 'visto',
                id: 1
            },
            {
                author: 'Yo',
                content: 'No abue, estás para unas milas con puré?',
                fecha: 'hoy a 14:25',
                estado: 'entregado',
                id: 2
            }
        ]
    },
]

export default DATA