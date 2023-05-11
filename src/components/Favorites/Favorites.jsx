import Card from "../Card/Card";
import { connect } from "react-redux";
import style from './Favorites.module.css'
//rompe todo ver aca ===== ya se arreglo pero nose si esta bien

const Favorites= ({myFavorites})=>{
  //  aca llega state lo desestructuro a myFavorite
    return (
        <div className={style.contenedor}>
            { myFavorites?.map(({id,name,species,image,onClose})=>{
            return(
            <Card
            key={id}
            id={id}
            name= {name}
            species={species}
            image={image}
            onClose={onClose}
            />
            )
        })
            }
        </div>
    )

}
//state siempre viene del cielo osea por q si
const mapStateToProps = (state)=>{
    return {
         myFavorites: state.myFavorites
    }
};

export default connect(mapStateToProps, null)(Favorites);