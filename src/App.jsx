import { useState } from 'react'
import { students } from './data/students'
import Header from './components/Header'
import Footer from './components/Footer'
import SortControls from './components/SortControls'
import StudentList from './components/StudentList'
import ProfilePage from './components/ProfilePage'

function App() {
  const [sortOrder, setSortOrder] = useState('default')
  const [selectedId, setSelectedId] = useState(null)

  let shown = students
  if (sortOrder === 'high') shown = [...students].sort((a, b) => b.cgpa - a.cgpa)
  if (sortOrder === 'low') shown = [...students].sort((a, b) => a.cgpa - b.cgpa)

  const selectedStudent = students.find((s) => s.id === selectedId)

  const openProfile = (id) => {
    setSelectedId(id)
    window.scrollTo(0, 0)
  }

  return (
    <div className="app">
      <Header
        title="Student Information Portal"
        subtitle="BCA 4th Year student records passed through reusable components."
        total={students.length}
      />
      <main className="main">
        {selectedStudent ? (
          <ProfilePage student={selectedStudent} onBack={() => setSelectedId(null)} />
        ) : (
          <>
            <SortControls sortOrder={sortOrder} onSortChange={setSortOrder} />
            <StudentList key={sortOrder} students={shown} onViewProfile={openProfile} />
          </>
        )}
      </main>
      <Footer author="Doyel" year={2026} />
    </div>
  )
}

export default App