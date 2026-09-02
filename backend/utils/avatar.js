// Utility function to generate avatar with initials
const getAvatarWithInitials = (fullName) => {
    const initials = fullName
        .trim()
        .split(/\s+/)
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase() || 'U';
    
    const colors = ['#155e75', '#1e40af', '#7c2d12', '#581c87', '#0c4a6e'];
    const hashCode = fullName.split('').reduce((hash, char) => {
        return ((hash << 5) - hash) + char.charCodeAt(0);
    }, 0);
    const bgColor = colors[Math.abs(hashCode) % colors.length];
    
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><rect width="128" height="128" fill="${bgColor}"/><text x="50%" y="54%" fill="#cffafe" font-family="Arial,sans-serif" font-size="48" font-weight="700" text-anchor="middle">${initials}</text></svg>`;
    
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

module.exports = { getAvatarWithInitials };
