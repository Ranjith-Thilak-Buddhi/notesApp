import {NoteContainer, NoteTitle, Note} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {note, title, id} = noteDetails

  return (
    <NoteContainer key={id}>
      <NoteTitle>{title}</NoteTitle>
      <Note>{note}</Note>
    </NoteContainer>
  )
}

export default NoteItem
