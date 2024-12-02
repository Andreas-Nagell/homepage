import { TeamID, definePerson } from '../..';

export default definePerson({
    avatar: '/images/persons/nagel-andreas.png',
    name: 'Andreas Nagel',
    email: 'andreas.nagel@uni-tuebingen.de',
    phone: '+49 7071 29 70449',
    address: 'Sand 14, 72076 Tübingen',
    role: 'Systemadministrator',
    team: TeamID.ABI,
    socialLinks: [],
});
