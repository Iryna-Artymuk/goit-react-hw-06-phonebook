import { Layout } from 'components/Layout/Layout';
import { ContactsList } from '../ContactsList/ContactsList';
import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';

export const App = () => {
  return (
    <Layout>
      <Form />
      <Filter />
      <ContactsList />
    </Layout>
  );
};
