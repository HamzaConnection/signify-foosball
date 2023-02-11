import { ReactNode } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { useUserContext } from '../../core/context/userContext';
import Navigation from '../../core/router/Navigation';
import Footer from './Footer';

type Props = {
    children?: ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
    const { user } = useUserContext();

    return (
        <>
            <Container  >
                <Navigation />
                {children}
                <Footer />
            </Container>
        </>
    );
};

export default Layout;
