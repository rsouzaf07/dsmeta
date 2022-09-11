import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ButtonNotification from "../ButtonNotification";

import "./styles.css";

function SalesCard() {
    const max = new Date();
    const min = new Date(new Date().setDate(new Date().getDate() - 365));

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    useEffect (() => {
      axios.get("http://localhost:8080/sales")
      .then(response => {
        console.log(response.data);
      })  
    }, []);

    return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-tile">Vendas</h2>
      <div>
        <div className="dsmeta-input-date-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="dsmeta-input-date"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-input-date-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="dsmeta-input-date"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992px">ID</th>
              <th className="show576px">Data</th>
              <th>Vendedor</th>
              <th className="show992px">Visitas</th>
              <th className="show992px">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show992px">#341</td>
              <td className="show576px">05/10/2022</td>
              <td>Anakin</td>
              <td className="show992px">15</td>
              <td className="show992px">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <ButtonNotification />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992px">#345</td>
              <td className="show576px">11/08/2022</td>
              <td>Julio</td>
              <td className="show992px">19</td>
              <td className="show992px">17</td>
              <td>R$ 91251.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <ButtonNotification />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992px">#346</td>
              <td className="show576px">09/09/2022</td>
              <td>Marcos</td>
              <td className="show992px">16</td>
              <td className="show992px">14</td>
              <td>R$ 64552.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <ButtonNotification />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesCard;
