
import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { routes } from './routes';
import { MdNavigateNext } from "react-icons/md";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <nav aria-label="breadcrumb" className=" p-4 rounded-md shadow-sm">
      <ol className="flex space-x-2 text-gray-700">
        {breadcrumbs.map(({ match, breadcrumb }, index) => (
          <li key={match.pathname} className={`flex items-center ${index === breadcrumbs.length - 1 ? 'text-gray-500' : ''}`}>
            {index === breadcrumbs.length - 1 ? (
              <span>{breadcrumb}</span>
            ) : (
              <>
                <Link to={match.pathname} className="hover:text-button">
                  {breadcrumb}
                </Link>
                <span className="mx-2"><MdNavigateNext /></span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
