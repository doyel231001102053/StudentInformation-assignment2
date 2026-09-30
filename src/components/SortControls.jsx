import './SortControls.css'

const OPTIONS = [
  { value: 'default', label: 'Default order' },
  { value: 'high', label: 'CGPA: High to Low' },
  { value: 'low', label: 'CGPA: Low to High' },
]

/**
 * SortControls — presentational sort toolbar.
 * @param {'default'|'high'|'low'} sortOrder - Currently selected sort
 * @param {(order: string) => void} onSortChange - Called when a sort option is chosen
 */
function SortControls({ sortOrder, onSortChange }) {
  return (
    <div className="sort-controls" role="group" aria-label="Sort students">
      <span className="sort-controls__label">Sort by</span>
      {OPTIONS.map((option) => {
        const isActive = sortOrder === option.value
        return (
          <button
            key={option.value}
            type="button"
            className={`sort-controls__btn${isActive ? ' is-active' : ''}`}
            aria-pressed={isActive}
            onClick={() => onSortChange(option.value)}
          >
            {isActive ? (
              <span className="sort-controls__mark" aria-hidden="true">
                ✓
              </span>
            ) : null}
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

export default SortControls
