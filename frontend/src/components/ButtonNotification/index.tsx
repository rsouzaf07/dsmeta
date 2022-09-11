import axios from 'axios';
import icon from '../../assets/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';


type Props = {
    saleId : number
}

let sendNotification = (id : number) => {
    axios(`${BASE_URL}/sales/${id}/notification`).then(response => {
        console.log("SUCESSO!")
    });
}


function ButtonNotification( {saleId} : Props) {

    return (
        <div onClick= {() => sendNotification(saleId)} className="dsmeta-red-btn">
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default ButtonNotification