import { Suspense, useContext, useEffect } from 'react';
import { SharedContext } from './StateManagement/Reducers/SharedReducer';
import { getApiRoutes } from './Services/Shared';
import { Loader } from './Components/Loader/Loader';
import Header from './Components/Header/Header';
import AppRoutes from './Routes/Routes';

function App() {
  const { SetRoutes, state: { apiRoutes } } = useContext(SharedContext);

  useEffect(() => {
    fetchRoutes();
  }, [])

  const fetchRoutes = async () => {
    let result = await getApiRoutes();
    if (result)
      SetRoutes(result.data);
  }

  return (
    <Suspense fallback={<Loader isActive={true} isAbsolute={true} isWithoutText={true} />}>
      <Header />
      <AppRoutes />
    </Suspense>
  );
}

export default App;
