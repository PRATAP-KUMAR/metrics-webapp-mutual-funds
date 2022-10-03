import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RiFundsBoxFill } from 'react-icons/ri';
import { GrFormNextLink } from 'react-icons/gr';
import { getDataAction } from '../redux/imf/imf';
import getExternalFunction from '../externalFunction';
import Header from './Header';

const HomePage = ({ handleId }) => {
  const imfData = useSelector((state) => state.imfReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (imfData.length === 0) {
      dispatch(getDataAction());
    }
  }, [dispatch, imfData.length]);

  return (
    <section>
      <Header />
      <div className="banner">
        <div className="row-1">
          <div>
            <RiFundsBoxFill fontSize={200} color="#054ea1" />
          </div>
          <div className="text-banner">
            FUNDING GROUPS:
            <br />
            {imfData.length}
          </div>
        </div>
        <div className="row-2">
          <input id="input" className="search-box" name="input" type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="stats">
        TOTAL STATS
      </div>
      <div className="container">
        {
          getExternalFunction(imfData, 50)

            .map((item) => (
              <NavLink
                to="/funding"
                onClick={handleId}
                key={item.schemeCode}
              >
                <div className="card" id={item.schemeCode}>
                  <div className="next-arrow">
                    <GrFormNextLink fontSize={50} />
                  </div>
                  <div className="text">
                    {item.schemeName}
                  </div>
                  <div className="subtext">
                    {item.schemeCode}
                  </div>
                </div>
              </NavLink>
            ))
        }
      </div>
    </section>
  );
};

HomePage.propTypes = {
  handleId: PropTypes.func.isRequired,
};

export default HomePage;
