import Team from '../team/team';

export default interface Match {
    // TL team left 
    // TR team right
    TL: Team,
    TR: Team
}