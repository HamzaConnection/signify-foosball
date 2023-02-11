import { Button } from 'react-bootstrap';

const NotFoundPage = (): JSX.Element => {
    const publicLinks = (
        <div className="links">
            <ul>
                <li>
                    <Button
                        className="">
                        Home
                    </Button>


                </li>

            </ul>
        </div>
    );

    return (
        <>
            <div className="center">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <h1 className="pb-3">Oops!</h1>
                            <h3 className="pb-3">We can't seem to find what you're looking for.</h3>
                            <h5 className="pb-3 p-text-secondary">Error code: 404</h5>
                            <h5 className="p-text-secondary">Here are some helpful links instead:</h5>
                            {publicLinks}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;
