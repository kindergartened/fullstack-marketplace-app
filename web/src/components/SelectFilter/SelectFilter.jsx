import Form from 'react-bootstrap/Form';
import styles from './SelectFilter.module.css'

function SelectFilter() {
  return (
    <Form.Select className={styles.selector}>
      <option>Популярное</option>
      <option value="1">Сначала дешёвые</option>
      <option value="2">Сначала дорогие</option>
    </Form.Select>
  );
}

export default SelectFilter;