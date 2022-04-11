import React, {useContext} from 'react'
import { MyContext, ColorContext } from './MyContext'

const ContentData = () => {
	const data = useContext(MyContext)
	const color = useContext(ColorContext)
	return (
		<div className="collapse" id="collapseExample">
		<div className="card card-body">
			<ul className="list-group list-group-flush" style={{color:color}}>
				<li className="list-group-item"><strong>Nom : </strong>{data.name}</li>
				<li className="list-group-item"><strong>Age : </strong>{data.age}</li>
				<li className="list-group-item"><strong>Couleur : </strong>{color}</li>
			</ul>
		</div>

	</div>

	)
}

export default ContentData;