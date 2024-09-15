import React, { ReactNode, useEffect, useState } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import getConfig from 'src/presentation/utils/config/getConfig';

import { clearAuthData } from 'src/presentation/utils/authUtils';

// Importation des images
import MyTick from 'src/presentation/assets/image/icons/myticky/MyTickLogo_192.webp';
import { PanelRightClose, PanelRightOpen, LogOut } from 'lucide-react';

// Importation des composants
import { User } from '@nextui-org/user';
import { Tooltip } from '@nextui-org/tooltip';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import DarkModeSwitch from 'src/presentation/components/DarkModeSwitch';

interface MenuItem {
    title: string;
    link: string;
    iconImg: string;
    icon: ReactNode;
}

interface MenuGroup {
    group: string;
    items: MenuItem[];
}

interface SidebarProps {
    menuGroups: MenuGroup[];
}

/**
 *
 * @desc: Composant barre de menu
 */
const Sidebar: React.FC<SidebarProps> = ({ menuGroups }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    // Info Profile
    const [name, setName] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const conf = getConfig();

        if (conf.decodedToken) {
            setName(conf.decodedToken.name);
            setRole(conf.decodedToken.role_name);
        } else {
            setError('Aucun rôle trouvé ou échec du décodage du token.');
        }
    }, []);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleLogout = async () => {
        // Supprime le token d'authentification
        clearAuthData();
        console.log('Utilisateur deconnecter');
    };

    return (
        <div
            className={clsx(
                'sidebar swipeRight sm:items-start flex flex-row sm:flex-col sm:justify-between items-center px-10 justify-around h-auto transition ease-in-out delay-400 bg-white rounded-t-3xl sm:rounded-none shadow-2xl sm:shadow-none sm:h-full sm:py-5 sm:px-4 font-syne',
                isCollapsed
                    ? 'sm:transition w-30 sm:bg-transparent fadeUpCard'
                    : 'sm:transition sm:w-[300px] sm:bg-transparent',
            )}
        >
            <Modal
                backdrop={'blur'}
                placement={'top'}
                classNames={{
                    body: 'py-2',
                }}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <ModalContent className="font-syne">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Deconnexion
                            </ModalHeader>
                            <ModalBody>
                                <p className="text-justify">
                                    Êtes-vous absolument certain vouloir vous
                                    déconnecter? veuillez cliquer sur "Se
                                    deconnecter" pour confirmer.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Annuler
                                </Button>
                                <Button
                                    color="danger"
                                    onClick={() => handleLogout()}
                                >
                                    Se deconnecter
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <button
                onClick={toggleCollapse}
                className={clsx(
                    'hidden sm:block transition delay-300 duration-250 sm:mb-4 absolute  bg-white p-[3px] rounded-lg fadeIn hover:scale-125 fadeIn dark:bg-slate-700',
                    isCollapsed
                        ? 'ease-in-out delay-400 left-[22px] top-3'
                        : 'ease-in-out delay-400 left-[190px] top-7',
                )}
            >
                {isCollapsed ? (
                    <PanelRightClose
                        size={25}
                        strokeWidth={1.6}
                        opacity={0.4}
                    />
                ) : (
                    <PanelRightOpen size={25} strokeWidth={1.6} opacity={0.4} />
                )}
            </button>

            <div className={`top-sidebar ${!isCollapsed ? 'w-full' : ''}`}>
                <div
                    className={`logo hidden sm:flex items-center ${isCollapsed ? 'sm:mt-14' : 'mt-0'}`}
                >
                    <img
                        src={MyTick}
                        alt="MyTick"
                        className={`transition ${isCollapsed ? 'hover:scale-110' : 'hover:scale-100'}`}
                        loading="lazy"
                        width={'50px'}
                    />
                    <h2
                        className={`${isCollapsed ? 'hidden' : 'block'} text-2xl font-bold flex flex-col font-syne ml-2 mt-4`}
                    >
                        <span className="text-[18px] -mt-3 font-bold">
                            My Tick
                        </span>
                        <span className="text-[10px] -mt-4">By ABM</span>
                    </h2>
                </div>

                <div className="flex flex-row justify-around sm:flex-col sm:mt-7 py-2">
                    {menuGroups.map((group, groupIndex) => (
                        <div
                            className="flex flex-row justify-around sm:justify-center w-full sm:flex-col"
                            key={groupIndex}
                        >
                            {/* Afficher le nom du groupe */}
                            <h3 className="hidden sm:flex font-Poppins font-semibold mb-3 text-[14px]">
                                {!isCollapsed && group.group}
                            </h3>
                            {group.items.map((menu, index) => (
                                <Tooltip
                                    isDisabled={!isCollapsed}
                                    content={menu.title}
                                    key={'right'}
                                    offset={5}
                                    className="font-syne"
                                    placement={'right'}
                                    color="primary"
                                >
                                    <div
                                        key={index}
                                        className="flex flex-row sm:flex-col transition hover:duration-300 font-Poppins"
                                    >
                                        <NavLink
                                            to={menu.link}
                                            className="menu-btn transition flex items-center p-2 rounded-xl sm:text-slate-800 hover:bg-primary dark:text-slate-300 hover:text-slate-100 font-medium active:bg-primary-600 text-sm sm:mb-2 hover:duration-200 opacity-70 hover:opacity-100"
                                        >
                                            {menu.iconImg && (
                                                <img
                                                    src={menu.iconImg}
                                                    width={'27px'}
                                                    className={
                                                        !isCollapsed
                                                            ? 'mr-2'
                                                            : 'mr-0'
                                                    }
                                                    loading="lazy"
                                                    alt="icon"
                                                />
                                            )}
                                            {/* {menu.icon && (
                                                <span className="menuIcon mr-2">
                                                    {menu.icon}
                                                </span>
                                            )} */}
                                            <span className="hidden sm:block">
                                                {!isCollapsed && menu.title}
                                            </span>
                                        </NavLink>
                                    </div>
                                </Tooltip>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="bottom-sidebar sm:w-full">
                <div
                    className={`hidden sm:flex dark:bg-slate-900 rounded-xl items-start ${isCollapsed ? 'justify-start p-0 bg-transparent cursor-pointer' : 'bg-white  p-2'} w-full font-syne`}
                >
                    <Tooltip
                        isDisabled={!isCollapsed}
                        content={'Edouardo Stevano'}
                        key={'right'}
                        offset={1}
                        className="font-syne"
                        placement={'right'}
                        color="primary"
                    >
                        <User
                            name={!isCollapsed ? (name ? name : 'N/A') : ''}
                            description={
                                !isCollapsed ? (
                                    role ? (
                                        role
                                    ) : (
                                        'Chargement...'
                                    )
                                ) : error ? (
                                    <span style={{ color: 'red' }}>
                                        {error}
                                    </span>
                                ) : (
                                    ''
                                )
                            }
                            avatarProps={{
                                src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
                            }}
                        />
                    </Tooltip>
                </div>

                {!isCollapsed && (
                    <div className="mt-2">
                        <DarkModeSwitch />
                    </div>
                )}

                <div className="flex flex-row sm:flex-col transition hover:duration-300 font-Poppins cursor-pointer">
                    <div
                        onClick={onOpen}
                        className={`transition flex items-center ${isCollapsed && 'justify-center'} p-2 rounded-xl sm:text-slate-800 sm:bg-slate-300 dark:bg-slate-700 hover:bg-red-200 font-medium dark:text-slate-100 active:bg-primary-600 text-sm sm:mt-5 sm:mb-2`}
                    >
                        <LogOut
                            size={'25px'}
                            opacity={0.7}
                            className={!isCollapsed ? 'mr-2' : 'mr-0'}
                        />

                        <span className="hidden sm:block">
                            {!isCollapsed && 'Deconnexion'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
