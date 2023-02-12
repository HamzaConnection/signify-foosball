import { createBrowserRouter } from 'react-router-dom';
import { ADD_TEAM_ROUTE, LOGIN_ROUTE, REMOVE_TEAM_ROUTE, SCORE_BOARD_ROUTE, START_GAME_ROUTE } from '../../constants/routes';
import NotFoundPage from '../../features/pages/notFoundPage/NotFoundPage';
import LoginPage from '../../features/pages/loginPage/LoginPage';
import StartGamePage from '../../features/pages/startGamePage.tsx/StartGamePage';
import ScoreBoard from '../../features/pages/scoreBoardPage/ScoreBoard';
import AddTeamsPage from '../../features/pages/addTeamsPage/AddTeamsPage';
import RemoveTeamsPage from '../../features/pages/removeTeamsPage/RemoveTeamsPage';


const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: START_GAME_ROUTE,
        element: <StartGamePage />,

    },
    {
        path: SCORE_BOARD_ROUTE,
        element: <ScoreBoard />,

    },
    {
        path: ADD_TEAM_ROUTE,
        element: <AddTeamsPage />,

    },
    {
        path: REMOVE_TEAM_ROUTE,
        element: <RemoveTeamsPage />,
    },






]);

export default router