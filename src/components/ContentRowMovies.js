import React from "react";
import propTypes from "prop-types";

const contentRowMovies = ({title,color,amount,icon}) =>{
    return(
     

						<div className="col-md-4 mb-4">
							<div className={`card border-left-${color} shadow h-100 py-2`}>
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>{title}</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">{amount}</div>
										</div>
										<div className="col-auto">
											<i className={`fas ${icon} fa-2x text-gray-300`}></i>
										</div>
									</div>
								</div>
							</div>
						</div>

					
	
    )
}

contentRowMovies.propTypes = {
	title: propTypes.string.isRequired,
	color : propTypes.string.isRequired,
	amount : propTypes.number.isRequired,
	icon : propTypes.string.isRequired
}

contentRowMovies.defaultProps ={
	title : 'Debe pasar un titulo',
	color : 'danger',
	amount : 'Debe pasar un numero',
	icon : 'fas fa-exclamation-triangle'
}

export default contentRowMovies;