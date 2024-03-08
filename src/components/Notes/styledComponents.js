import styled from 'styled-components'

export const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

export const PageTitle = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-size: 50px;
  font-weight: 400;
  margin-top: 10px;
`

export const NotesInputContainer = styled.form`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  box-shadow: 0px 0px 5px 1px #aab8c8;
  height: 250px;
  padding: 25px;
  border-radius: 5px;
  margin-bottom: 30px;
`

export const TitleInput = styled.input`
  width: 100%;
  margin-bottom: 15px;
  border: none;
  height: 40px;
  font-family: 'Roboto';
  font-weight: 500;
  outline: none;
  color: #1e293b;
`

export const NoteInput = styled.textarea`
  width: 100%;
  border: none;
  height: 80px;
  font-family: 'Roboto';
  outline: none;
  font-weight: 400;
  color: #1e293b;
  margin-right: auto;
`

export const AddNoteButton = styled.button`
  align-self: flex-end;
  margin-top: 10px;
  background-color: #4c63b6;
  border: none;
  border-radius: 4px;
  height: 40px;
  width: 75px;
  color: white;
  font-family: 'Roboto';
`

export const NotesContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`

export const EmptyNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 350px;
`

export const EmptyNotesImg = styled.img`
  width: 150px;
`

export const EmptyNotesTitle = styled.h1`
  color: #1e293b;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 25px;
  margin-top: 30px;
`

export const EmptyNotesTag = styled.p`
  color: #334155;
  font-family: 'Roboto';
  margin-top: 0px;
  font-weight: 500;
`
