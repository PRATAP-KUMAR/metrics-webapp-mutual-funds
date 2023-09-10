import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiFundsBoxFill } from 'react-icons/ri';
import { FcNext } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
import { debounce } from 'lodash';
import Header from './Header';
import { getDataAction } from '../redux/imf/imf';

const HomePage = (props) => {
  const obj = props;
  const { handleId } = obj;
  const imfData = useSelector((state) => state.imfReducer);
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  // const [array, setArray] = useState(imfData.slice(0, 100));

  const handleInputChange = debounce((e) => {
    setValue(e.target.value);
  }, 1000);

  useEffect(() => {
    if (imfData.length === 0) {
      dispatch(getDataAction());
    }

    // if (value !== '') {
    //   setArray(imfData.slice(0, 2000));
    // }

    // return () => {
    //   setArray(imfData.slice(0, 100));
    // };
  }, [dispatch, imfData, value, imfData.length]);

  if (imfData.length === 0) {
    return (
      <h1 className="loading">
        INDIAN MUTUAL FUNDS
        PAGE IS LOADING...
        PLEASE WAIT
      </h1>
    );
  }

  return (
    <>
      <Header />
      <section>
        <div className="banner">
          <div className="logo">
            <RiFundsBoxFill fontSize={200} color="#054ea1" />
          </div>
          <div className="text-banner">
            FUNDING GROUPS FETCHED:
            <p>
              {imfData.length}
            </p>
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
            imfData
              .filter((item) => item.schemeName.toLowerCase().startsWith(value.toLowerCase()))
              .map((item) => (
                <NavLink
                  to="/funding"
                  onClick={handleId}
                  id={item.schemeCode}
                  key={item.schemeName + item.schemeCode}
                  className="nav-link-card"
                >
                  <FcNext fontSize={50} />
                  <p>{item.schemeName}</p>
                  <p>{item.schemeCode}</p>
                </NavLink>
              ))
          }
        </div>
      </section>
    </>
  );
};

export default HomePage;
