/**
 * Student records for the portal. Imported only by App.jsx.
 *
 * Local portrait: add `src/assets/students/doyel.jpg`.
 * `import.meta.glob` resolves it when present; if the file is missing the
 * app still runs and the card shows a silhouette avatar.
 */
const doyelPhotoModules = import.meta.glob('../assets/students/doyel.jpg', {
  eager: true,
  import: 'default',
})

const doyelPhoto = Object.values(doyelPhotoModules)[0] ?? null

const students = [
  {
    id: 1,
    isYou: true,
    // TODO: replace with your full name (keep quotes)
    name: 'Doyel Hazra',
    // TODO: replace with your real roll number (e.g. TIU-BCA-2022-014)
    rollNumber: '231001102053',
    department: 'BCA (Honours)',
    year: '4th Year',
    semester: '7th',
    // TODO: replace with your real CGPA (number, two decimals)
    cgpa: 9.1,
    gender: 'female',
    photo: doyelPhoto,
  },
  {
    id: 2,
    isYou: false,
    name: 'Aarav Mehta',
    rollNumber: '231001102054',
    department: 'BCA',
    year: '4th Year',
    semester: '7th',
    cgpa: 9.42,
    gender: 'male',
    photo: null,
  },
  {
    id: 3,
    isYou: false,
    name: 'Diya Sharma',
    rollNumber: '231001102055',
    department: 'BCA',
    year: '4th Year',
    semester: '7th',
    cgpa: 8.76,
    gender: 'female',
    photo: null,
  },
  {
    id: 4,
    isYou: false,
    name: 'Rohan Iyer',
    rollNumber: '231001102056',
    department: 'BCA',
    year: '4th Year',
    semester: '7th',
    cgpa: 7.35,
    gender: 'male',
    photo: null,
  },
  {
    id: 5,
    isYou: false,
    name: 'Ananya Reddy',
    rollNumber: '231001102057',
    department: 'BCA',
    year: '4th Year',
    semester: '7th',
    cgpa: 8.18,
    gender: 'female',
    photo: null,
  },
  {
    id: 6,
    isYou: false,
    name: 'Kabir Singh',
    rollNumber: '231001102058',
    department: 'BCA',
    year: '4th Year',
    semester: '7th',
    cgpa: 9.81,
    gender: 'male',
    photo: null,
  },
  {
    id: 7,
    isYou: false,
    name: 'Meera Nair',
    rollNumber: '231001102059',
    department: 'BCA',
    year: '4th Year',
    semester: '7th',
    cgpa: 6.74,
    gender: 'female',
    photo: null,
  },
  {
    id: 8,
    isYou: false,
    name: 'Vivaan Kapoor',
    rollNumber: '231001102060',
    department: 'BCA',
    year: '4th Year',
    semester: '7th',
    cgpa: 7.92,
    gender: 'male',
    photo: null,
  },
  {
    id: 9,
    isYou: false,
    name: 'Ishita Banerjee',
    rollNumber: '231001102061',
    department: 'BCA',
    year: '4th Year',
    semester: '7th',
    cgpa: 9.05,
    gender: 'female',
    photo: null,
  },
]

export { students }
export default students
