import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RiFundsBoxFill } from 'react-icons/ri';
import { GrFormNextLink } from 'react-icons/gr';
import { getDataAction } from '../redux/imf/imf';
import Header from './Header';

import './style.css';

const HomePage = ({ handleId }) => {
  const imfData = useSelector((state) => state.imfReducer);
  const dispatch = useDispatch();

  const [page, setPage] = useState(10);

  const handlePage = (e) => setPage((e.target.id) * 6);

  useEffect(() => {
    if (imfData.length === 0) {
      dispatch(getDataAction());
    }
  }, [dispatch, imfData.length]);

  return (
    <section>
      <Header />
      <div className="banner">
        <div>
          <RiFundsBoxFill fontSize={200} />
        </div>
        <div className="text-banner">
          Total Funding Groups are:
          <br />
          {imfData.length}
        </div>
      </div>
      <div className="container">
        {
          imfData.filter((e, i) => {
            if (i >= (page - 6) && i < page) {
              return e;
            }
            return '';
          })
            .map((item) => (
              <NavLink
                to="/funding"
                onClick={handleId}
                key={item.schemeCode}
              >
                <div id={item.schemeCode} className="card">
                  <div className="text">
                    {item.schemeName}
                  </div>
                  <div className="details" id={item.schemeCode}>
                    <GrFormNextLink fontSize={50} />
                  </div>
                </div>
              </NavLink>
            ))
        }
      </div>
      <button id="1" type="button" onClick={handlePage}>
        1
      </button>
      <button id="2" type="button" onClick={handlePage}>
        2
      </button>
    </section>
  );
};

HomePage.propTypes = {
  handleId: PropTypes.func.isRequired,
};

export default HomePage;
