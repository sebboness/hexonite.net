const envSecrets: Record<string, string> = JSON.parse(process.env.secrets || "{}");

export const grabEnvSecret = (key: string): string => {
    return envSecrets[key] || process.env[key] || "";
}

export const escapeHtml = (s: string): string => {
    const lookup: Record<string, string> = {
        '&': "&amp;",
        '"': "&quot;",
        '\'': "&apos;",
        '<': "&lt;",
        '>': "&gt;"
    };
    return s.replace(/[&"'<>]/g, (c: string) => lookup[c]);
}
