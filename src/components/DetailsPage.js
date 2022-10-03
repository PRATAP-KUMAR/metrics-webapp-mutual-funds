import { NavLink } from 'react-router-dom';
import { GrFormPreviousLink } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { FaPiggyBank } from 'react-icons/fa';
import Header from './Header';

const DetailsPage = () => {
  const individualData = useSelector((state) => state.getIndividualDataReducer);

  return (
    <>
      <header className="header">
        <NavLink to="/funding"><GrFormPreviousLink fontSize={50} /></NavLink>
        <Header />
      </header>
      <div className="banner-mp">
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
          <th>Nav</th>
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
