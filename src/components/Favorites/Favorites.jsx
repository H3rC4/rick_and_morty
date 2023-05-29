import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";//importar para despacharnlas actions
import style from './Favorites.module.css'
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {//  aca llega state lo desestructuro a myFavorite

    const [axu, setAux] = useState(false);
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(!axu);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }



    return (
        <div className={style.contenedor}>
            <div className={style.filter} >
                <select onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="B">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>

                </select>
            </div>
            <div className={style.cards}>
            {myFavorites?.map(({ id, name, species, image, onClose, gender }) => {
                return (
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        species={species}
                        gender={gender}
                        image={image}
                        onClose={onClose}
                    />
                )
            })
            }
            </div>
        </div>
    )

}
//state siempre viene del cielo osea por q si
const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
};

export default connect(mapStateToProps, null)(Favorites);