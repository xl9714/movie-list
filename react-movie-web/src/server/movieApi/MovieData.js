// import react, {Component} from "react";

// class MovieData extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [],
//             isLoaded: false,
//         }
//     }

//     componentDidMount() {
//         fetch('https://api.themoviedb.org/3/movie/550?api_key=41531a7abe30304f919a4843d4b37ee0')
//             .then(res => res.json())
//             .then(json => {
//                 this.setState({
//                     isLoaded: true,
//                     items: json.items,
//                 })
//             });
//     }

//     render() {

//         var { isLoaded, items } = this.state;

//         if (!isLoaded) {
//             return <div>Loading...</div>;
//         }

//         return (
//             <div className="MovieData">
//                 <ul>
//                     {items.map(item => (
//                         <li key={item.id}>
//                             {item.original_title}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }

// export default MovieData;