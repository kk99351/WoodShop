import PropTypes from 'prop-types';
import React from 'react';
import Meta from '@components/common/Meta';
import Title from '@components/common/Title';

export default function SeoMeta({ pageInfo: { title, description } }) {
  return (
    <>
      <Title title="WoodShop" />
      <Meta name="description" content={description} />
      <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="https://evershop.io/img/logo.png"></link>
    </>
  );
}

SeoMeta.propTypes = {
  pageInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export const layout = {
  areaId: 'head',
  sortOrder: 5
};

export const query = `
  query query {
    pageInfo {
      title
      description
    }
  }
`;
