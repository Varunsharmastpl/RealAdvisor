/* @flow */

import * as React from 'react';
import { Flex } from '@rebass/grid/emotion';
import { graphql } from 'react-relay';
import Head from 'next/head';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from '../controls/link';
// import { createFragment } from '../controls/relay';
// import type { Property_property } from '../shared/Property/__generated__/Property_property.graphql';

type PropertyData = {|
  lead?: Property_property,
|};

// const PropertyFragment = createFragment<PropertyData>(
//   graphql`
//     fragment Property_property on Property {
//       id
//       livingSurface
//     }
//   `
// );

export default (props) => (
  <>
    <Head>
      <title>{'Home'}</title>
    </Head>

    <Flex justifyContent="center">
      <Paper
        css={{
          maxWidth: 960,
          marginTop: 16,
          marginBottom: 16,
          width: '100%',
          padding: 16,
        }}
      >
      <Link href={{ pathname: '/property' }}>
        <Button
          to="/property"
          color="primary"
          variant="contained"
          css={{ marginTop: 24 }}
        >
          Create
        </Button>
      </Link>
        <Typography variant="h6" css={{ marginBottom: 24 }}>
          Hello, Welcome to Total React Starter:
        </Typography>
        {/*<PropertyFragment property={props.roperty}>
        {({ property }) => ( 
          <div>
          Hello
          </div>
        )}
        </PropertyFragment>*/}
      </Paper>
    </Flex>
  </>
);
