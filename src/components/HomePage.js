import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RiFundsBoxFill } from 'react-icons/ri';
import { FcNext } from 'react-icons/fc';
import { getDataAction } from '../redux/imf/imf';
import getExternalFunction from '../externalFunction';
import Header from './Header';

const HomePage = ({ handleId }) => {
  const imfData = useSelector((state) => state.imfReducer);
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const handleInputChange = (e) => setValue(e.target.value);

  useEffect(() => {
    if (imfData.length === 0) {
      dispatch(getDataAction());
    }
  }, [dispatch, imfData.length]);

  if (imfData.length === 0) {
    return (
      <h1 className="loading">
        INDIAN MUTUAL FUNDS
        <br />
        PAGE IS LOADING...
        <br />
        PLEASE WAIT
      </h1>
    );
  }

  return (
    <section>
      <Header />
      <div className="banner">
        <div className="logo">
          <RiFundsBoxFill fontSize={200} color="#054ea1" />
        </div>
        <div className="text-banner">
          FUNDING GROUPS:
          <br />
          {imfData.length}
        </div>
      </div>
      <div className="search-bar">
        <input
          id="input"
          className="search-box"
          name="input"
          type="text"
          placeholder="Search By Typing Funding Company Name..."
          onChange={handleInputChange}
        />
      </div>
      <div className="stats">
        TOTAL STATS
      </div>
      <div className="container">
        {
          getExternalFunction(imfData, 500)
            .filter((item) => item.schemeName.toLowerCase().includes(value.toLowerCase()))
            .map((item) => (
              <NavLink
                to="/funding"
                onClick={handleId}
                key={`${item.schemeName + item.schemeCode}`}
              >
                <div className="card">
                  <div className="next-arrow">
                    <FcNext fontSize={30} />
                  </div>
                  <div className="card-group1" id={item.schemeCode}>
                    <div className="text">
                      {item.schemeName}
                    </div>
                    <div className="subtext">
                      {item.schemeCode}
                    </div>
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
