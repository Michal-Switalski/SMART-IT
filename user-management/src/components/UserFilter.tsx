import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../features/userSlice';

const UserFilter: React.FC = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilter({ [name]: value }));
  };

  return (
    <div className="user-filter">
      <input
        type="text"
        name="name"
        placeholder="Filter by name"
        onChange={handleFilterChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Filter by username"
        onChange={handleFilterChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Filter by email"
        onChange={handleFilterChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Filter by phone"
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default UserFilter;
