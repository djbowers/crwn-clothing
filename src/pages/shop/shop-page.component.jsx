import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collection-page.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import './shop-page.styles.scss';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
