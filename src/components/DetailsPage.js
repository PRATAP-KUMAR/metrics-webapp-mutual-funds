import { NavLink } from 'react-router-dom';
import { GrFormPreviousLink } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getIndividualDataAction } from '../redux/individual/individual';

const DetailsPage = ({ id }) => {
  const individualData = useSelector((state) => state.getIndividualDataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIndividualDataAction(id));
  });

  return (
    <>
      <header className="header">
        <NavLink to="/funding"><GrFormPreviousLink fontSize={50} /></NavLink>
        {individualData.meta.scheme_code}
      </header>
      <div className="details-page">
        <h1>Details Page</h1>
      </div>
    </>
  );
};

DetailsPage.propTypes = { id: PropTypes.string.isRequired };

export default DetailsPage;
