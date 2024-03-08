import {useState} from 'react'
import {v4} from 'uuid'
import {
  PageContainer,
  PageTitle,
  NotesInputContainer,
  TitleInput,
  NoteInput,
  AddNoteButton,
  NotesContainer,
  EmptyNotesContainer,
  EmptyNotesImg,
  EmptyNotesTitle,
  EmptyNotesTag,
} from './styledComponents'

import NoteItem from '../NoteItem/index'

const Notes = () => {
  const [titleInput, setTitleInput] = useState('')
  const [noteInput, setNoteInput] = useState('')
  const [notesList, setNotesList] = useState([])

  const onTitleInput = event => {
    setTitleInput(event.target.value)
  }

  const onNoteInput = event => {
    setNoteInput(event.target.value)
  }

  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: v4(),
      title: titleInput,
      note: noteInput,
    }
    setNotesList(prevNotes => [...prevNotes, newNote])
    setTitleInput('')
    setNoteInput('')
  }

  console.log(noteInput)

  const haveNotes = notesList.length > 0
  return (
    <PageContainer>
      <PageTitle>Notes</PageTitle>
      <NotesInputContainer onSubmit={onAddNote}>
        <TitleInput
          placeholder="Title"
          value={titleInput}
          onChange={onTitleInput}
        />
        <NoteInput
          placeholder="Take a Note"
          value={noteInput}
          onChange={onNoteInput}
        />
        <AddNoteButton type="submit">Add</AddNoteButton>
      </NotesInputContainer>
      {haveNotes && (
        <NotesContainer>
          {notesList.map(eachNote => (
            <NoteItem key={eachNote.id} noteDetails={eachNote} />
          ))}
        </NotesContainer>
      )}
      {!haveNotes && (
        <EmptyNotesContainer>
          <EmptyNotesImg
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyNotesTitle>No Notes Yet</EmptyNotesTitle>
          <EmptyNotesTag>Notes you add will appear here</EmptyNotesTag>
        </EmptyNotesContainer>
      )}
    </PageContainer>
  )
}

export default Notes
