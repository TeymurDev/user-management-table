import { useEffect } from 'react';
import FilteringTable from './components/FilteringTable';
import { useAppDispatch } from './store/store';
import { getUsers } from './store/features/userService';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  });
  return (
    <>
      <FilteringTable />
    </>
  );
}

export default App;
