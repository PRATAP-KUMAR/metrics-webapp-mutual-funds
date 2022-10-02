import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import { RiFundsBoxFill } from 'react-icons/ri';
import { getIndividualDataAction } from '../redux/individual/individual';
import Header from './Header';
import './style.css';

const CallAPI = ({ id }) => {
  const individualData = useSelector((state) => state.getIndividualDataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIndividualDataAction(id));
  });

  return (
    <>
      <section>
        <header className="header">
          <NavLink to="/"><GrFormPreviousLink fontSize={50} /></NavLink>
          <Header />
          {individualData.meta.scheme_code}
          <NavLink to="/funding/details"><GrFormNextLink fontSize={50} /></NavLink>
        </header>
        <div className="banner">
          <div>
            <RiFundsBoxFill fontSize={200} />
          </div>
          <div className="text-banner">
            Viewing Details for Scheme Code:
            <br />
            {individualData.meta.scheme_code}
            Available Data:
            <br />
            {individualData.data.length}
          </div>
        </div>
        <div key={individualData.meta.scheme_code} className="card">
          <div className="text">
            {individualData.meta.fund_house}
            FUND_HOUSE
          </div>
        </div>
        <div key={individualData.meta.scheme_code} className="card">
          <div className="text">
            {individualData.meta.scheme_code}
            SCHEME_NAME
          </div>
        </div>
        <div key={individualData.meta.scheme_code} className="card">
          <div className="text">
            {individualData.meta.scheme_type}
            SCHEME_TYPE
          </div>
        </div>
      </section>
    </>
  );
};

CallAPI.propTypes = { id: PropTypes.string.isRequired };

export default CallAPI;
