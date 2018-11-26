/* @flow */

import React from 'react';
import { graphql } from 'react-relay';
import { Flex } from '@rebass/grid/emotion';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from '../../controls/link';
import {
  type FragmentRefs,
  createFragment,
  createMutation,
} from '../../controls/relay';

import Table from '../Table/Table';
import type { Property_property } from './__generated__/Property_property.graphql';
import type { PropertyUpsertMutation } from './__generated__/PropertyUpsertMutation.graphql';
import Form from './Form';

type PropertyData = {|
  lead?: Property_property,
|};

const PropertyFragment = createFragment<PropertyData>(
  graphql`
    fragment Property_property on Property {
      id
      livingSurface
    }
  `
);

const PropertyUpsertLead = createMutation<PropertyUpsertMutation, {}>(graphql`
  mutation PropertyUpsertMutation($input: UpsertPropertyInput!) {
    upsertProperty(input: $input) {
      property {
        id
        livingSurface
      }
    }
  }
`);

type Props = {|
  ...FragmentRefs<PropertyData>,
  step?: string,
|};

export const Property = (props: Props) => {
  return (
    <>
      <PropertyFragment property={props.property}>
        {({ property }) => (
          <Flex justifyContent="center">
            <Paper
              css={{ maxWidth: 960, marginTop: 16, width: '100%', padding: 16 }}
            >
            <Table property={property} />
              <PropertyUpsertLead>
                {({ mutate }) => (
                  <>
                    <Typography variant="h6">Start here</Typography>
                    <Form mutate={mutate} />
                    <Link href={{ pathname: '/' }}>
                      <Button
                        to="/"
                        color="primary"
                        variant="contained"
                        css={{ marginTop: 80 }}
                      >
                        Back to instructions
                      </Button>
                    </Link>
                  </>
                )}
              </PropertyUpsertLead>
            </Paper>
          </Flex>
        )}
      </PropertyFragment>
    </>
  );
};
