import { MdDeleteForever } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { useState } from 'react';

const Note = ({ id, text, date, handleEditNote, handleDeleteNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [noteText, setNoteText] = useState(text);
  const characterLimit = 200;

  const handleEditClick = () => {
      setIsEditing(true);
  };

  const handleSaveClick = () => {
      if (noteText.trim().length > 0) {
      handleEditNote(id, noteText);
      setIsEditing(false);
      }
  };

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    };
  };

	return (
		<div className='note'>
      {isEditing ? (
        <>
        <div className='note new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Напишите что-нибудь...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Осталось
				</small>
				<button className='save' onClick={handleSaveClick}>
					Сохранить
				</button>
			</div>
		</div>
    </>
    ) : (
      <>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
        <div className='functions'>
          <MdEdit
            onClick={() => handleEditClick()} 
            className='edit-icon' 
            size='1.3em' 
          />
          <MdDeleteForever
            onClick={() => handleDeleteNote(id)}
            className='delete-icon'
            size='1.3em'
          />
        </div>
			</div>
      </>
    )}
		</div>
    
	);
};

export default Note;