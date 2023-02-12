import { useEffect, useState } from 'react';
import { Button, Form, Row, Table } from 'react-bootstrap';
import TeamService from '../../../core/services/TeamService';
import Match from '../../../models/match/match';
import Team from '../../../models/team/team';

const StartGamePage = () => {

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

    const deleteTeam = async (id: number) => {
        try {
            await teamService.deleteTeam(id)
            setTeams(await teamService.getAllTeams())

        }
        catch (error) {
            // Do something about the error maybe a toaster etc.
        }
    }

    const generateRound = () => {
        getAllTeam();
        if (teams) {
            tournament = makeRoundRobinPairings(teams!)
        }
    }

    useEffect(() => {
        generateRound()
    }, [])



    const breakTeam: Team = { id: 0, name: "--Skip round--", players: ["no players", "no players"] }

    const [losingTeam, setLosingTeam] = useState<string[]>([]);


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

    let tournament
    if (teams) {
        tournament = makeRoundRobinPairings(teams)
    }

    if (tournament) {
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
                                            <Button variant="danger" className='m-1' onClick={() => deleteTeam(matches.TL.id)}
                                                disabled={matches.TL.name === "--Skip round--" || matches.TR.name === "--Skip round--"}
                                            >{matches.TL.name}</Button>

                                            <Button variant="danger" className='m-1' onClick={() => deleteTeam(matches.TR.id)}
                                                disabled={matches.TL.name === "--Skip round--" || matches.TR.name === "--Skip round--"}
                                            >{matches.TR.name}</Button>
                                        </td>
                                    </tr >
                                )
                            })
                        }


                    </tbody>
                </Table >
                <Row className='my-2 mx-auto w-100'>
                    <Button className='m-1' onClick={() => generateRound()}>Next Round</Button>
                </Row>

            </>
        )
    } else {
        return <><Row className='my-2 mx-auto w-100'>
            <p className='text-center'>No active game</p>
            <Button className='m-1' onClick={() => generateRound()}>Generate New game </Button>
        </Row></>
    }


}
export default StartGamePage

