export const isActiveLink = (menuPath: string, routePath: string): boolean => {
    if (menuPath && routePath) {
        return menuPath.replace(/\/\d+/, "") === routePath.replace(/\/\d+/, "");
    }
    return false;
};
