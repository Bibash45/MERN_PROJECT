const Dashboard = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      <div className="bg-red-500 h-[60px] flex items-center justify-center">
        <h2 className="m-auto">Total Users</h2>
      </div>
      <div className="bg-blue-500 h-[60px] flex items-center justify-center">
        <h2 className="m-auto">Total Orders</h2>
      </div>
      <div className="bg-green-500 h-[60px] flex items-center justify-center">
        <h2 className="m-auto">Total Review</h2>
      </div>
    </div>
  );
};

export default Dashboard;
