// Importation des images
import HomeIcon from 'src/presentation/assets/image/icons/Glassmorph/home.png';
import UserIcon from 'src/presentation/assets/image/icons/Glassmorph/gender-neutral-user.png';
import BoxIcon from 'src/presentation/assets/image/icons/Glassmorph/dropbox.png';
import DispatchIcon from 'src/presentation/assets/image/icons/Glassmorph/online-payment-with-a-credit-card.png';
import { Combine, FileBox, House, UserRoundCog } from 'lucide-react';

export const menus = [
    {
        group: 'Menus Principaux',
        items: [
            {
                title: 'Tableau de bord',
                link: 'home',
                iconImg: HomeIcon,
                icon: <House />,
            },
            {
                title: 'Utilisateurs',
                link: 'users',
                iconImg: UserIcon,
                icon: <UserRoundCog />,
            },
        ],
    },

    {
        group: 'Paramètres',
        items: [
            {
                title: 'Gestion de Box',
                link: 'box',
                iconImg: BoxIcon,
                icon: <FileBox />,
            },
            {
                title: 'Dispatch',
                link: 'dispatch',
                iconImg: DispatchIcon,
                icon: <Combine />,
            },
        ],
    },
];
