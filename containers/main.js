import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Content from './content.js';
import Sidebar from './sidebar.js';

function Main({ data }) {
  const [selection, setSelection] = React.useState(null);

  return (
    <Container
      maxWidth={false}
      disableGutters
    >
      <Grid container>
        <Grid
          item
          xs={8}
          container
          direction="column"
          wrap="nowrap"
        >
          <Content
            data={data}
            onSelection={setSelection}
            selection={selection}
          />
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Sidebar
            selection={selection}
            onCloseSelection={() => setSelection(null)}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Main;

