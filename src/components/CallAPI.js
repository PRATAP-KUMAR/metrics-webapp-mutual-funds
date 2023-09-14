import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FcPrevious, FcNext } from 'react-icons/fc';
import { FaPiggyBank } from 'react-icons/fa';
import { getIndividualDataAction } from '../redux/individual/individual';
import Header from './Header';
import './style.css';

const CallAPI = (props) => {
  const obj = props;
  const { id } = obj;
  const individualData = useSelector((state) => state.getIndividualDataReducer);
  const dispatch = useDispatch();

  const onBackClick = () => {
    const container = document.getElementById('on-back-click');
    container.remove();
  };

  useEffect(() => {
    dispatch(getIndividualDataAction(id));
  }, [dispatch, id]);

  if (individualData.data.length === 0) {
    return (
      <h2 className="loading">
        Fetching Data... please wait
        If it is taking more than 9 seconds
        please click back button on the browser
      </h2>
    );
  }

  return (
    <>
      <Header
        bkArrow={(
          <NavLink
            to="/"
            onClick={onBackClick}
          >
            <FcPrevious fontSize={30} />
          </NavLink>
        )}
        frArrow={(
          <NavLink
            to="/funding/details"
          >
            <FcNext fontSize={30} />
          </NavLink>
        )}
      />
      <section>
        <div className="banner">
          <div>
            <FaPiggyBank fontSize={200} color="#054ea1" />
          </div>
          <div className="card-mp-banner">
            Available Historical Data:
            <br />
            {individualData.data.length}
            {' '}
            Rows
          </div>
        </div>
        <div className="stats">
          <div>
            SCHEME CODE -&nbsp;
            {individualData.meta.scheme_code}
            &nbsp;DETAILS
          </div>
          <div className="card-mp">
            Fund House:&nbsp;
            {individualData.meta.fund_house}
          </div>
          <div className="card-mp">
            Scheme Name:&nbsp;
            {individualData.meta.scheme_name}
          </div>
          <div className="card-mp">
            Scheme Type:&nbsp;
            {individualData.meta.scheme_type}
          </div>
          <div className="card-mp">
            Scheme Category:&nbsp;
            {individualData.meta.scheme_category}
          </div>
        </div>
      </section>
    </>
  );
};

export default CallAPI;
