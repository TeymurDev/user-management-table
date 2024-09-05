const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      <input
        style={{
          height: '20px',
        }}
        value={filterValue || ''}
        onChange={(e) => setFilter(e.target.value)}
        placeholder='Search...'
      />
    </span>
  );
};

export default ColumnFilter;
