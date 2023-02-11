import { createBrowserRouter } from 'react-router-dom';
import { LOGIN_ROUTE, SCORE_BOARD_ROUTE, START_GAME_ROUTE } from '../../constants/routes';
import NotFoundPage from '../../features/pages/notFoundPage/NotFoundPage';
import App from '../../App';
import LoginPage from '../../features/pages/loginPage/LoginPage';
import StartGamePage from '../../features/pages/startGamePage.tsx/StartGamePage';
import ScoreBoard from '../../features/pages/scoreBoard/ScoreBoard';

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: LOGIN_ROUTE,
        element: <App />,

    },
    {
        path: START_GAME_ROUTE,
        element: <StartGamePage />,

    },
    {
        path: SCORE_BOARD_ROUTE,
        element: <ScoreBoard />,

    },




]);

export default router