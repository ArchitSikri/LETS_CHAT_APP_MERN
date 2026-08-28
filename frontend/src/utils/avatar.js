export const getAvatarFallback = (name = 'User') => {
    const initials = name
        .trim()
        .split(/\s+/)
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase() || 'U';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><rect width="128" height="128" fill="#155e75"/><text x="50%" y="54%" fill="#cffafe" font-family="Arial,sans-serif" font-size="48" font-weight="700" text-anchor="middle">${initials}</text></svg>`;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const getImageWithFallback = (url, name) => url || getAvatarFallback(name);