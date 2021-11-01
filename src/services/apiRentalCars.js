export const lookupCars = (params) => {
    const availabeCars = [
        {
            model: "Edge",
            brand: "Ford",
            type: "SUV",
            capacity: "5",
            year: 2016,
            img:"./images/ford-edge.jpeg"
        },
        {
            model: "Fusion",
            brand: "Ford",
            type: "Compact",
            capacity: "5",
            year: 2020,
            img:"./images/ford-fusion.jpeg"
        },
        {
            model: "A6",
            brand: "Audi",
            type: "Compact",
            capacity: "5",
            year: 2020,
            img:"./images/audi-a6.jpeg"
        }
    ]
    return availabeCars
}

export default { lookupCars };