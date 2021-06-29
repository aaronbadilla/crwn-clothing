import React from 'react'

import './collections-overview.styles.scss'

import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect'
import {selectShopCollectionsOverview} from '../../redux/shop/shop.selectors.js'

import CollectionPreview from '../collection-preview/collection-preview.component.jsx'

const CollectionsOverview = ({collections}) => (
    <div className='collection-overview'>
    {collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps}/>
    ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsOverview
})

export default connect(mapStateToProps)(CollectionsOverview)