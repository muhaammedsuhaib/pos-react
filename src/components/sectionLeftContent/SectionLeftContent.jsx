import MainContent from "../mainContent/MainContent"
import PosCategories from "../pos_categoryies/PosCategories"
function SectionLeftContent({ page, setPage }) {
  return (
    <>
      <PosCategories page={page} setPage={setPage} />
      <MainContent page={page} setPage={setPage} />
    </>
  )
}

export default SectionLeftContent