import ButtonNotification from "../ButtonNotification";

import "./styles.css";

function SalesCard() {
  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-tile">Vendas</h2>
      <div>
        <div className="dsmeta-input-date-container">
          <input className="dsmeta-input-date" type="text" />
        </div>
        <div className="dsmeta-input-date-container">
          <input className="dsmeta-input-date" type="text" />
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
