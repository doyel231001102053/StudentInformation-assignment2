export function getCgpaLabel(cgpa) {
  if (cgpa >= 9) return 'Outstanding'
  if (cgpa >= 8) return 'Excellent'
  if (cgpa >= 7) return 'Good'
  return 'Average'
}

export function getInitials(name) {
  return name
    .replace(/\[[^\]]*]/g, ' ')
    .split(/\s+/)
    .filter((part) => part && !part.startsWith('['))
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}
