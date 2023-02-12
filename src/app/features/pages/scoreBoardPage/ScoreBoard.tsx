import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import TeamService from '../../../core/services/TeamService'
import Team from '../../../models/team/team'

const ScoreBoard = () => {
    const [teams, setTeams] = useState<Team[]>()
    const teamService = TeamService()

    const getAllTeam = async () => {
        try {
            const res = await teamService.getAllTeams()
            setTeams(res)
        }
        catch (error) {
            // Do something about the error maybe a toaster etc.
        }
    }
    useEffect(() => {
        getAllTeam();
    }, [])



    const sortedByWinnersDesc = teams?.sort(function (team1: Team, team2: Team) { return team2.wins - team1.wins; });
    if (teams) {
        return (
            <Table bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Team</th>
                        <th>Players</th>
                        <th>Won</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedByWinnersDesc?.map((team: Team, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{team.name}</td>
                                <td>{team.players.join(" - ")}</td>
                                <td>{team.wins}</td>
                            </tr>
                        )

                    })
                    }
                </tbody>
            </Table >
        )
    }
    return <p>Loading</p>
}

export default ScoreBoard