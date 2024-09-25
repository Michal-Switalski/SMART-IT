import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './features/userSlice';
import UserTable from './components/UserTable';
import UserFilter from './components/UserFilter';
import { AppDispatch } from './store';


const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>User Management</h1>
      <UserFilter />
      <UserTable />
    </div>
  );
};

export default App;
