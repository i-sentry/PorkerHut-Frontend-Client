const data = [
    {
        category: {
            id: 1,
            slug: "pork",
            name: "Pork",
            subCategory: [
                {
                    id: 1,
                    slug: "head",
                    name: "Head",
                },
                {
                    id: 2,
                    slug: "intestine",
                    name: "Intestine",
                },
                {
                    id: 3,
                    slug: "pork-shoulder",
                    name: "Pork Shoulder",
                },
                {
                    id: 4,
                    slug: "lap",
                    name: "Lap",
                },
            ],
        },
    },
    {
        category: {
            id: 2,
            slug: "feeds",
            name: "Feeds",
            subCategory: [
                {
                    id: 1,
                    slug: "creep-feed",
                    name: "Creep Feed",
                },
                {
                    id: 2,
                    slug: "weaner-feed",
                    name: "Weaner Feed",
                },
                {
                    id: 3,
                    slug: "sow-feed",
                    name: "Sow Feed",
                },
                {
                    id: 4,
                    slug: "grower-feed",
                    name: "Growers Feed",
                },
                {
                    id: 5,
                    slug: "lactating-feed",
                    name: "Lactating Feed",
                },
                {
                    id: 6,
                    slug: "finisher-feed",
                    name: "Finisher Feed",
                },
            ],
        },
    },
    {
        category: {
            id: 3,
            slug: "livestocks",
            name: "Livestocks",
            subCategory: [
                {
                    id: 1,
                    slug: "duroc",
                    name: "Duroc (PH)",
                },
                {
                    id: 2,
                    slug: "land-race",
                    name: "Land Race",
                },
                {
                    id: 3,
                    slug: "large-white",
                    name: "Large White(PH)",
                },
                {
                    id: 4,
                    slug: "hampshire",
                    name: "Hampshire",
                },
                {
                    id: 5,
                    slug: "lactating-feed",
                    name: "Lactating Feed",
                },
                {
                    id: 6,
                    slug: "finisher-feed",
                    name: "Finisher Feed",
                },
            ],
        },
    },
];

export default data;




// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link, useHistory, useLocation } from 'react-router-dom';
// const Home = () => {
//     const navigate = useNavigate();
//     const handleNavigation = () => {
//         const category = 'books';
//         const subcategory = 'fiction';
//         navigate(`/your-url?category=${category}&subcategory=${subcategory}`);
//     };
//     return (
//         <div>
//             <h1>Home Page</h1>
//             <button onClick={handleNavigation}>Go to Page</button>
//         </div>
//     );
// };
// const PageWithParams = () => {
//     const location = useLocation();
//     const queryParams = new URLSearchParams(location.search);
//     const category = queryParams.get('category');
//     const subcategory = queryParams.get('subcategory');
//     return (
//         <div>
//             <h1>Page with Query Parameters</h1>
//             <p>Category: {category}</p>
//             <p>Subcategory: {subcategory}</p>
//         </div>
//     );
// };
// const App = () => {
//     return (
//         <Router>
//             <div>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                     </ul>
//                 </nav>
//                 <Switch>
//                     <Route path="/" exact component={Home} />
//                     <Route path="/your-url" component={PageWithParams} />
//                 </Switch>
//             </div>
//         </Router>
//     );
// };
// export default App;