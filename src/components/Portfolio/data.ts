import bookingVisitApp from '../../assets/img/bookingVisitApp.png'
import todoapp from '../../assets/img/todolistApp.png'
import app2 from '../../assets/img/app2.png'
import app3 from '../../assets/img/app3.png'
import app4 from '../../assets/img/app4.png'
import app5 from '../../assets/img/app5.jpg'
import app6 from '../../assets/img/app6.png'

export const Data = {
    project: [
        {
            title: `BookingVisitApp`,
            description: 'Aplikacja do umawiania wizyt lekarskich w konkretnej placówce medycznej. Stworzona podczas odbywania kursu MegaK. Projekt zaliczeniowy, który dał mi dostęp do bonusowego etapu.',
            image: bookingVisitApp,
            tags: ['nodejs', 'handlebars', 'bootstrap', 'javascript', 'mysql'],
            source: 'https://github.com/shyBBy/bookingVisitApp',
            liveVersion: 'https://dawidolczak.networkmanager.pl/user/login',
            id: 0,

        },
        {
            title: `TodoList`,
            description: 'Prosta, najzwyklejsza aplikacja TO-DO.  ',
            image: todoapp,
            tags: ['nodejs', 'handlebars', 'bootstrap', 'javascript', 'mysql'],
            source: 'https://github.com/shyBBy/bookingVisitApp',
            liveVersion: 'https://dawidolczak.networkmanager.pl/user/login',
            id: 1,

        },
        {
            title: `HeadHunter`,
            description: 'Projekt z bonusowego etapu kursu MegaK. Aplikacja do rekrutowania programistów przez potencjalnego pracodawce. Pracowałem nad częścią backendu.',
            image: app2,
            tags: ['nestjs', 'React', 'MaterialUI', 'typescript', 'PostrgreSQL', 'TypeORM', 'Docker'],
            source: 'https://gitlab.com/megak/megak_backend',
            liveVersion: '',
            id: 2,

        },
        {
            title: `Portfolio`,
            description: 'Projekt mojej własnej strony - portfolio. Aplikacja ta posiada panel administratora, dzięki któremu można zarządzać treścią strony. ',
            image: app2,
            tags: ['React', 'MaterialUI', 'typescript', ],
            source: 'https://github.com/shyBBy/portfolio-frontend',
            liveVersion: 'https://dev-olczak.pl',
            id: 3,

        },

    ],
    graphic2d: [
        {
            title: `LOGO`,
            description: 'Logo firmy.',
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ae819b104189149.5f5dbb67f18b3.png',
            tags: ['photoshop'],
            source: '',
            liveVersion: '',
            id: 4,

        },
        {
            title: `Ulotka`,
            description: 'Projekt ulotki na zlecenie dla firmy',
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bf2b0599735923.5ef9b86067250.png',
            tags: ['photoshop'],
            source: '',
            liveVersion: '',
            id: 5,

        },
        {
          title: `Wizytowka`,
          description: 'Wizytowka na zlecenie.',
          image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6043ed99735923.5ef9b86066a11.png',
          tags: ['photoshop'],
          source: '',
          liveVersion: '',
          id: 6,
        
        },
        {
            title: `Dashboard layout `,
            description: 'Po kliknięciu w przycisk "źródło" zobaczyć będzie można całą galerię projektów.',
            image: app2,
            tags: ['photoshop'],
            source: 'https://www.behance.net/gallery/90022991/Stuff-for-GTA-SA-server-RolePlay',
            liveVersion: '',
            id: 7,

        },
    ],
    graphic3d: [
        {
            title: `Modele 3D`,
            description: 'Pod przyciskiem "źródło" znajduje się lista większości modeli 3D mojego autorstwa do gry Gta San Andreas',
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/59a75e101926593.5f2a9e8267c6a.png',
            tags: ['3DSmax'],
            source: 'https://www.behance.net/gallery/101926593/3D-models-for-GTASA-SAMP-server',
            liveVersion: '',
            id: 8,

        },
    ]



}
