import Team from '../../models/team/team';
import signifyFoosballApi from '../axios.config.signifyFoosballApi';

const CONTROLLER_ENDPOINT = '/teams';

const routes = {
    getAllTeams: () => `${CONTROLLER_ENDPOINT}`,
    createTeam: () => `${CONTROLLER_ENDPOINT}`,
    deleteTeam: (id: number) => `${CONTROLLER_ENDPOINT}/${id}`,
    editTeam: (id: number) => `${CONTROLLER_ENDPOINT}/${id}`,
    getTeamById: (id: number) => `${CONTROLLER_ENDPOINT}/${id}`
};

const TeamService = () => {

    const getAllTeams = async () => {

        try {
            const response = await signifyFoosballApi().get<Team[]>(routes.getAllTeams())
            return response.data
        } catch (error) {
            // handle errors
            console.log(error)
        }
    };

    const getTeamById = async (id: number) => {

        try {
            const response = await signifyFoosballApi().get<Team>(routes.getTeamById(id))
            return response.data
        } catch (error) {
            // handle errors
            console.log(error)
        }
    };

    const createTeam = async (team: Team) => {

        try {
            const response = await signifyFoosballApi().post<any>(
                routes.createTeam(), team,
            )
            return response.data
        } catch (error) {
            // handle errors
            console.log(error)
        }

    };

    const deleteTeam = async (id: number) => {
        try {
            await signifyFoosballApi().delete<void>(
                routes.deleteTeam(id))
        } catch (error) {
            // handle errors
            console.log(error)
        }

    };

    const editTeam = async (id: number) => {
        try {
            const response = await signifyFoosballApi().put<void>(
                routes.editTeam(id))
            return response.data
        } catch (error) {
            // handle errors
            console.log(error)
        }

    };


    return {
        getAllTeams,
        createTeam,
        deleteTeam,
        editTeam,
        getTeamById
    };
};

export default TeamService;