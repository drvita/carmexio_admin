export default () => {
    const getMenu = ($t: any) => {
        const route = useRoute();
        const storage = useStorage();
        const hasRoot = storage.hasRole('root');
        const menus = [
            { iconName: "wpf:statistics", text: $t('Dashboard'), page: "/dashboard", current: false, show: true },
            { iconName: "wpf:settings", text: $t('settings'), page: "/settings", current: false, show: true },
            { iconName: "wpf:administrator", text: $t('Admins'), page: "/dashboard/admins", current: false, show: hasRoot },
            { iconName: "wpf:collaborator", text: $t('Sellers'), page: "/dashboard/sellers", current: false, show: hasRoot },
            // { iconName: "wpf:name", text: $t('Customers'), page: "/dashboard/customers", current: false, show: true },
            { iconName: "wpf:car-rental", text: $t('Cars'), page: "/dashboard/cars", current: false, show: true },
        ];

        for (let i = 0; i < menus.length; i++) {
            if (menus[i].page === route.path) {
                menus[i].current = true;
            }
        }

        return menus.filter(m => m.show);
    };

    return {
        getMenu,
    }
};