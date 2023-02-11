import { Table } from 'react-bootstrap'
import Team from '../../../models/team/team'
import testdata from '../../../test data/testData'

const ScoreBoard = () => {

    const sortedByWinnersDesc = testdata.sort(function (team1: Team, team2: Team) { return team2.wins - team1.wins; });
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
                {sortedByWinnersDesc.map((team: Team, index) => {
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

export default ScoreBoard