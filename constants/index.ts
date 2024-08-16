export const manufacturers = [
  { name: "Acura", modelUrl: "acura" },
  { name: "Alfa Romeo", modelUrl: "alfa-romeo" },
  { name: "Aston Martin", modelUrl: "aston-martin" },
  { name: "Audi", modelUrl: "audi" },
  { name: "Bentley", modelUrl: "bentley" },
  { name: "BMW", modelUrl: "bmw" },
  { name: "Buick", modelUrl: "buick" },
  { name: "Cadillac", modelUrl: "cadillac" },
  { name: "Chevrolet", modelUrl: "chevrolet" },
  { name: "Chrysler", modelUrl: "chrysler" },
  { name: "Citroen", modelUrl: "citroen" },
  { name: "Dodge", modelUrl: "dodge" },
  { name: "Ferrari", modelUrl: "ferrari" },
  { name: "Fiat", modelUrl: "fiat" },
  { name: "Ford", modelUrl: "ford" },
  { name: "GMC", modelUrl: "gmc" },
  { name: "Honda", modelUrl: "honda" },
  { name: "Hyundai", modelUrl: "hyundai" },
  { name: "Infiniti", modelUrl: "infiniti" },
  { name: "Jaguar", modelUrl: "jaguar" },
  { name: "Jeep", modelUrl: "jeep" },
  { name: "Kia", modelUrl: "kia" },
  { name: "Lamborghini", modelUrl: "lamborghini" },
  { name: "Land Rover", modelUrl: "land-rover" },
  { name: "Lexus", modelUrl: "lexus" },
  { name: "Lincoln", modelUrl: "lincoln" },
  { name: "Maserati", modelUrl: "maserati" },
  { name: "Mazda", modelUrl: "mazda" },
  { name: "McLaren", modelUrl: "mclaren" },
  { name: "Mercedes-Benz", modelUrl: "mercedes-benz" },
  { name: "MINI", modelUrl: "mini" },
  { name: "Mitsubishi", modelUrl: "mitsubishi" },
  { name: "Nissan", modelUrl: "nissan" },
  { name: "Porsche", modelUrl: "porsche" },
  { name: "Ram", modelUrl: "ram" },
  { name: "Rolls-Royce", modelUrl: "rolls-royce" },
  { name: "Subaru", modelUrl: "subaru" },
  { name: "Tesla", modelUrl: "tesla" },
  { name: "Toyota", modelUrl: "toyota" },
  { name: "Volkswagen", modelUrl: "volkswagen" },
  { name: "Volvo", modelUrl: "volvo" }
];

export const yearsOfProduction = [
  { title: "Year", value: "" },
  { title: "2015", value: "2015" },
  { title: "2016", value: "2016" },
  { title: "2017", value: "2017" },
  { title: "2018", value: "2018" },
  { title: "2019", value: "2019" },
  { title: "2020", value: "2020" },
  { title: "2021", value: "2021" },
  { title: "2022", value: "2022" },
  { title: "2023", value: "2023" },
];

export const fuels = [
  {
    title: "Fuel",
    value: "",
  },
  {
    title: "Gas",
    value: "Gas",
  },
  {
    title: "Electricity",
    value: "Electricity",
  },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];


export const carDefaultValues = {
  make: "",
  model: "",
  year: "",
  category: "",
  seats: "",
  rentalCostPerDay: "",
  city_MPG: "",
  highway_MPG: "",
  combination_MPG: "",
  fuelType: "",
  drive: "",
  cylinders: "",
  displacement: "",
  transmission: "",
  picturePath: "",
  available_till: new Date(),
  // rentEndDateTime: z.date(),
  // isFree: false,
  // url: '',

}


export const carCategories = [
  { name: "Sedan", categoryNameUrl: "sedan" },
  { name: "Hatchback", categoryNameUrl: "hatchback" },
  { name: "SUV", categoryNameUrl: "suv" },
  { name: "Crossover", categoryNameUrl: "crossover" },
  { name: "Coupe", categoryNameUrl: "coupe" },
  { name: "Convertible", categoryNameUrl: "convertible" },
  { name: "Minivan", categoryNameUrl: "minivan" },
  { name: "Pickup Truck", categoryNameUrl: "pickup-truck" },
  { name: "Station Wagon", categoryNameUrl: "station-wagon" },
  { name: "Sports Car", categoryNameUrl: "sports-car" },
  { name: "Luxury Car", categoryNameUrl: "luxury-car" },
  { name: "Electric Vehicle", categoryNameUrl: "electric-vehicle" },
  { name: "Hybrid Vehicle", categoryNameUrl: "hybrid-vehicle" },
  { name: "Diesel Car", categoryNameUrl: "diesel-car" },
  { name: "Microcar", categoryNameUrl: "microcar" },
  { name: "Roadster", categoryNameUrl: "roadster" },
  { name: "Off-Road Vehicle", categoryNameUrl: "off-road-vehicle" },
  { name: "Compact Car", categoryNameUrl: "compact-car" },
  { name: "Mid-Size Car", categoryNameUrl: "mid-size-car" },
  { name: "Full-Size Car", categoryNameUrl: "full-size-car" }
];

export const categoryDisplayItems = [
  {
    id: "sports",
    name: "SPORTS",
    description: "Sports cars from famous brands like Lamborghini, Ferrari and more...",
    imagePath: "https://utfs.io/f/4978bce0-eb6a-4bfb-8996-f6da9085b0bc-k99n8h.jpg",
    url: "http://localhost:5002/category/sports",
  },

  {
    id: "luxury",
    name: "LUXURY",
    description: "Luxury cars from famous brands like Rolls-Royce & Maserati and more...",
    imagePath: "https://utfs.io/f/bf345729-6d1c-4f4f-96d7-ae86b5dee133-k99n8i.jpg",
    url: "http://localhost:5002/category/luxury",
  },

  {
    id: "suv",
    name: "SUV",
    description: "Luxury SUVs ranging from Mercedes G-wagons, Lamborghini Urus & many more...",
    imagePath: "https://utfs.io/f/e4ab7799-3fb3-4f0f-849a-bc7ab587a3e7-k99n8j.jpg",
    url: "http://localhost:5002/category/suv",
  },

  {
    id: "convertible",
    name: "CONVERTIBLE",
    description: "Exclusive convertible cars collection.",
    imagePath: "https://utfs.io/f/7723bf66-f840-4164-b4cd-6113a29a8b5d-k99n8k.jpg",
    url: "http://localhost:5002/category/convertible",
  },

  {
    id: "economy",
    name: "ECONOMY",
    description: "Browse our huge & brand new Economy cars fleet.",
    imagePath: "https://utfs.io/f/b1c02f35-5207-4d92-9a61-5d31efb97672-k99n8l.jpg",
    url: "http://localhost:5002/category/economy",
  },

  {
    id: "all-cars",
    name: "All Cars",
    description: "Browse our all the cars...",
    imagePath: "https://utfs.io/f/41899ae6-19bc-4561-b5ef-281f4bf2a153-k99n8m.jpg",
    url: "http://localhost:5002/category/all",
  },
]