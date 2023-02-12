import { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import TeamService from '../../../core/services/TeamService'
import Team from '../../../models/team/team'

const RemoveTeamsPage = () => {
    const [teams, setTeams] = useState<Team[]>()
    const teamService = TeamService()

    const getAllTeam = async () => {
        try {
            setTeams(await teamService.getAllTeams())
        }
        catch (error) {
            // Do something about the error maybe a toaster etc.
        }
    }

    const deleteTeam = async (id: number) => {
        try {
            teamService.deleteTeam(id)
            setTeams(await teamService.getAllTeams())

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
                        <th>#</th>
                        <th>Team</th>
                        <th>Players</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {teams?.map((team: Team, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{team.name}</td>
                                <td>{team.players.join(" - ")}</td>
                                <td><Button variant="danger" onClick={() => deleteTeam(team.id)}>Delete team</Button></td>
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

export default RemoveTeamsPage