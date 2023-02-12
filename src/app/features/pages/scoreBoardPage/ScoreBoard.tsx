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



    if (teams) {
        return (
            <Table bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Players</th>
                    </tr>
                </thead>
                <tbody>
                    {teams?.map((team: Team, index) => {
                        return (
                            <tr>
                                <td>{team.name}</td>
                                <td>{team.players.join(" - ")}</td>
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