import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import { FaPiggyBank } from 'react-icons/fa';
import { getIndividualDataAction } from '../redux/individual/individual';
import Header from './Header';
import './style.css';

const CallAPI = ({ id }) => {
  const individualData = useSelector((state) => state.getIndividualDataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIndividualDataAction(id));
  }, [dispatch, id]);

  return (
    <>
      <section>
        <header className="header">
          <NavLink to="/"><GrFormPreviousLink fontSize={50} /></NavLink>
          <Header />
          <NavLink to="/funding/details"><GrFormNextLink fontSize={50} /></NavLink>
        </header>
        <div className="banner-mp">
          <div>
            <FaPiggyBank fontSize={200} />
          </div>
          <div className="text-banner">
            Viewing Details for Scheme Code:
            <br />
            {individualData.meta.scheme_code}
            <br />
            <br />
            Available Data:
            <br />
            {individualData.data.length}
            <br />
            <br />
            Click Next Button On Top for Details
          </div>
        </div>
        <div key={individualData.meta.scheme_code} className="card-mp">
          <div className="text">
            FUND_HOUSE:
            <br />
            {individualData.meta.fund_house}
          </div>
        </div>
        <div key={individualData.meta.scheme_code} className="card-mp">
          <div className="text">
            Scheme_Name:
            <br />
            {individualData.meta.scheme_name}
          </div>
        </div>
        <div key={individualData.meta.scheme_code} className="card-mp">
          <div className="text">
            Scheme_Category:
            <br />
            {individualData.meta.scheme_category}
          </div>
        </div>
      </section>
    </>
  );
};

CallAPI.propTypes = { id: PropTypes.string.isRequired };

export default CallAPI;
