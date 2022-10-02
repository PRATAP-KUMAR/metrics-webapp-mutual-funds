import { NavLink } from 'react-router-dom';
import { GrFormPreviousLink } from 'react-icons/gr';
import { useSelector } from 'react-redux';

const DetailsPage = () => {
  const individualData = useSelector((state) => state.getIndividualDataReducer);

  return (
    <>
      <header className="header">
        <NavLink to="/funding"><GrFormPreviousLink fontSize={50} /></NavLink>
        <div className="text">full details date and nav</div>
      </header>

      {
        individualData.data.map((item) => (
          <div id={item.date} key={item.date} className="card">
            <div className="text">
              {item.date}
              <br />
              {item.nav}
            </div>
          </div>
        ))
      }
    </>
  );
};

export default DetailsPage;
