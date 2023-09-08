import { useRouteError } from 'react-router-dom';
import { ErrorResponse } from '../common/error';

const Error = () => {
  const error: unknown = useRouteError();
  let err = error as ErrorResponse;
  return (
    <div>
      <h1>OOPS :/</h1>
      <h2>
        {err.status} : {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
