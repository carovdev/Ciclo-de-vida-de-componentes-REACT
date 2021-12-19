import React, {Component} from "react";
import Tablerow from './TableRow'

class Table extends Component {

    constructor(){
        super();
        this.state = ({
            movies : []
        })
    }



    render(){
        return(
            <div className="container bg-white">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Título</th>
                        <th scope="col">Duración</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Género</th>
                        <th scope="col">Premios</th>
                    </tr>
                </thead>
                 <tbody>
                   {this.state.movies.map((movie,index) => {
                        return(
                            <Tablerow
                            key={movie.title + index}
                            title={movie.title}
                            length={movie.length}
                            rating={movie.rating}
                            genero={movie.genre}
                            awards={movie.awards}                            
            
            
                            />
            
                        )
                    })} 
                 </tbody>

            </table>

        </div>
        )
    }

    async componentDidMount() {
        await this.apiCall('http://localhost:3001/api/movies',this.getMovies)
        console.log(this.state);
    }


    async apiCall(url,handerl){
        try {
            let response = await fetch(url)
            let result = await response.json()
            handerl(result)
        } catch (error) {
            console.log(error);
        }
    }

    getMovies = info =>{
        this.setState(
            {
                movies : info.data
            }
        )
    }
}

export default Table;