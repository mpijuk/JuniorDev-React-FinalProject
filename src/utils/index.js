export const navigationItems = [
    { label: 'About us', path: '/' },
    { label: 'Animals', path: '/animals' },
    { label: 'Donations', path: '/donations' },
    { label: 'News', path: '/news' },
    { label: 'Add New', path: '/addNew' },
];

export const location = {
    address: "Ul. Ruđera Boškovića 32, 21000, Split",
    lat: 43.511440,
    lng: 16.469340,
}

export const requestFormat = (data) => (
    {
        species: data.species,
        name: data.name,
        age: data.age,
        description: data.description,
        picturePath: data.picturePath,
        lastExamination: data.lastExamination,
        chipped: data.chipped,
        adopted: data.adopted
    }
);