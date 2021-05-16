import PropTypes from 'prop-types';
import s from './contactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
  <div>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          - {name}: {number}
          <button
            type="button"
            className={s.buttonDelete}
            onClick={() => onRemoveContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default ContactList;
