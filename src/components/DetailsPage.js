import { NavLink } from 'react-router-dom';
import { FcPrevious } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import { FaPiggyBank } from 'react-icons/fa';
import Header from './Header';

const DetailsPage = () => {
  const individualData = useSelector((state) => state.getIndividualDataReducer);

  return (
    <>
      <header className="header">
        <NavLink to="/funding"><FcPrevious fontSize={30} /></NavLink>
        <Header />
      </header>
      <div className="banner">
        <div>
          <FaPiggyBank fontSize={200} color="#054ea1" />
        </div>
        <div className="text-banner">
          Showing Statistics:
          <br />
          {individualData.data.length}
        </div>
      </div>
      <table className="table">
        <tr>
          <th>Date</th>
          <th>Net Asset Value</th>
        </tr>
        {
          individualData.data.map((item) => (
            <tr key={individualData.meta.scheme_code}>
              <td>{item.date}</td>
              <td>{item.nav}</td>
            </tr>
          ))
        }
      </table>
    </>
  );
};

export default DetailsPage;
