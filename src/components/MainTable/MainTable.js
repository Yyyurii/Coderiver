import './MainTable.scss';
import MainTableRow from '../MainTableRow';
import useUsers from '../../services/users';
import { useState, useEffect } from 'react';

const MainTable = () => {
  
  const { getUsers } = useUsers();

  return (
    <div className="main-table table">
      <div className="table__header header">
        <div className="header__item">
          <span>User details</span>
        </div>
        <div className="header__item">
          <span>Company name</span>
        </div>
        <div className="header__item">
          <span>Email</span>
        </div>
        <div className="header__item">
          <span>Distance</span>
        </div>
      </div>

      <MainTableRow />
    </div>
  );
};

export default MainTable;