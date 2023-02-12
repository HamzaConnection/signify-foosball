import Team from '../models/team/team'


const team1: Team = { id: 1, name: "team1", wins: 5, players: ["bob", "billy"] }
const team2: Team = { id: 2, name: "team2", wins: 4, players: ["sandra", "clarissa"] }
const team3: Team = { id: 3, name: "team3", wins: 3, players: ["Hamza", "Tobias"] }
const team4: Team = { id: 4, name: "team4", wins: 1, players: ["Tony", "Silly"] }
const team5: Team = { id: 5, name: "team5", wins: 0, players: ["Earth", "Renz"] }

const testdata = [team1, team2, team3, team4, team5]
export default testdata