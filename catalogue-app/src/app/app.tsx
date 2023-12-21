import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/tailwind-light/theme.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';

export function App() {
  return <RouterProvider router={routes} />;
}

export default App;
