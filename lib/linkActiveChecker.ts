export const isActiveLink = (menuPath: string, routePath: string): boolean => {
    if (menuPath && routePath) {
        const normalizedMenu = menuPath.replace(/\/\d+/, "");
        const normalizedRoute = routePath.replace(/\/\d+/, "");
        if (normalizedMenu === normalizedRoute) return true;
        if (normalizedMenu !== "/" && normalizedRoute.startsWith(normalizedMenu + "/")) return true;
    }
    return false;
};
