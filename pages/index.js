import Main from '../containers/main.js';

const mock_data = [
  {
    id: 1,
    type: 'checking',
    account_name: '123456****-WOLFE',
    status: 'Active',
    currency: 'USD',
    balance: '3,266',
    notes: 'Foobar 1',
  },
  {
    id: 2,
    type: 'savings',
    account_name: '123456****-MAENGUNE',
    status: 'Active',
    currency: 'USD',
    balance: '2,266',
    notes: 'Foobar 2',
  },
  {
    id: 3,
    type: 'savings',
    account_name: '123456****-KAISER',
    status: 'Deactivated',
    currency: 'USD',
    balance: '6,266',
    notes: 'Foobar 3',
  },
  {
    id: 4,
    type: 'checking',
    account_name: '123456****-WOLFE',
    status: 'Active',
    currency: 'USD',
    balance: '10,266',
    notes: 'Foobar 4',
  },
];

export async function getStaticProps() {
  const data = await Promise.resolve(mock_data);

  return {
    props: {
      data,
    }
  };
}

export default Main;

