import { useState } from 'react';
import { Button, Form, Row, Table } from 'react-bootstrap';
import Match from '../../../models/match/match';
import Team from '../../../models/team/team';
import testdata from '../../../test data/testData';

const StartGamePage = () => {

    const breakTeam: Team = { name: "--Skip round--", wins: 0, players: ["no players", "no players"] }

    const [losingTeam, setLosingTeam] = useState<string[]>([]);

    const handleOnChange = (winTeam: string) => {
        losingTeam.push(winTeam)
        setLosingTeam(losingTeam)
        console.log(losingTeam)
    }

    function makeRoundRobinPairings(teams: Team[]) {
        if (teams.length % 2 === 1) {
            teams.push(breakTeam);
        }

        const playerCount = teams.length;
        const rounds = playerCount - 1;
        const half = playerCount / 2;


        const playerIndexes = teams.map((_: any, i: any) => i).slice(1);

        for (let round = 0; round < rounds; round++) {
            const roundPairings = [];

            const newPlayerIndexes = [0].concat(playerIndexes);

            const firstHalf = newPlayerIndexes.slice(0, half);
            const secondHalf = newPlayerIndexes.slice(half, playerCount).reverse();


            for (let i = 0; i < firstHalf.length; i++) {
                roundPairings.push({
                    TL: teams[firstHalf[i]],
                    TR: teams[secondHalf[i]],
                });
            }

            // rotating the array
            playerIndexes.push(playerIndexes.shift());

            const tournamentPairings = {
                matches: roundPairings
            }

            return tournamentPairings
        }
    }

    const tournament = makeRoundRobinPairings(testdata)

    return (
        <>
            <Table bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Blue side</th>
                        <th></th>
                        <th>Red side</th>
                        <th>Select Losing team</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tournament?.matches?.map((matches: Match) => {
                            return (
                                < tr>
                                    <td>{matches.TL.name}</td>
                                    <td>vs </td>
                                    <td>{matches.TR.name}</td>
                                    <td>
                                        <Form.Check
                                            key={matches.TL.name}
                                            type="checkbox"
                                            id={matches.TL.name}
                                            label={matches.TL.name}
                                            className='me-2'
                                            onChange={(e: any) => handleOnChange(e.target.id)}
                                            disabled={matches.TL.name === "--Skip round--" || matches.TR.name === "--Skip round--"}
                                        />
                                        <Form.Check
                                            key={matches.TR.name}
                                            type="checkbox"
                                            id={matches.TR.name}
                                            label={matches.TR.name}
                                            className='me-2'
                                            onChange={(e: any) => handleOnChange(e.target.id)}
                                            disabled={matches.TL.name === "--Skip round--" || matches.TR.name === "--Skip round--"} />
                                    </td>
                                </tr >
                            )
                        })
                    }


                </tbody>
            </Table >
            <Row className='my-2 mx-auto w-100'>
                <Button>Next Round</Button>
            </Row>

        </>
    )
}
export default StartGamePage

